import torch
import cv2
import numpy as np
import streamlit as st
from torchvision import transforms
from .model import AHCNN
from .explainability import GradCAM

class Predictor:
    def __init__(self, model_path):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.features = [] # Store layer outputs here
        self.idx_to_class = {} # mapping placeholder
        
        # 1. Load the model
        self.model = self._load_model(model_path)
        
        # 2. Initialize GradCAM (Only if model loaded successfully)
        if self.model:
            # Assuming model.block4 is your last conv layer
            self.grad_cam = GradCAM(self.model, self.model.block4)
        else:
            self.grad_cam = None
            
        # 3. Define Image Transforms
        self.transform = transforms.Compose([
            transforms.Resize((28, 28)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.239], std=[0.407]) 
        ])

    def _hook(self, module, input, output):
        """Hook to capture feature maps during forward pass"""
        self.features.append(output)

    def _load_model(self, path):
        try:
            checkpoint = torch.load(path, map_location=self.device)
            
            # Initialize Model Architecture
            model = AHCNN(num_classes=len(checkpoint['class_to_idx'])).to(self.device)
            model.load_state_dict(checkpoint['model_state_dict'])
            model.eval()
            
            # Save class mappings
            self.idx_to_class = {v: k for k, v in checkpoint['class_to_idx'].items()}
            
            # Register hooks for visualization (X-Ray view)
            model.block1.register_forward_hook(self._hook)
            model.block2.register_forward_hook(self._hook)
            model.block3.register_forward_hook(self._hook)
            model.block4.register_forward_hook(self._hook)
            model.classifier.register_forward_hook(self._hook)
            
            return model
            
        except Exception as e:
            st.error(f"Failed to load model from {path}: {e}")
            return None

    def predict_with_heatmap(self, image_data):
        """
        Returns prediction, confidence, heatmap, and raw processed image
        """
        if not self.model:
            return "Error", 0.0, None, None

        self.features = [] # Clear previous features
        
        # 1. Preprocess Input
        # Convert RGBA (canvas) to Gray
        if image_data.shape[2] == 4:
            img_gray = cv2.cvtColor(image_data, cv2.COLOR_RGBA2GRAY)
        else:
            img_gray = image_data

        pil_img = transforms.ToPILImage()(img_gray)
        tensor_img = self.transform(pil_img).unsqueeze(0).to(self.device)
        
        # 2. Forward Pass (Get Prediction)
        # We use standard forward pass first
        output = self.model(tensor_img)
        probs = torch.nn.functional.softmax(output, dim=1)
        conf, pred_idx = torch.max(probs, 1)
        target_idx = pred_idx.item()
        
        pred_label = self.idx_to_class.get(target_idx, "?")
        pred_conf = conf.item()
        
        # 3. Generate Grad-CAM Heatmap
        # This explains "Why" the model chose this class
        heatmap = self.grad_cam.generate_cam(tensor_img, target_idx)
        
        return pred_label, pred_conf, heatmap, img_gray, probs.squeeze().tolist()