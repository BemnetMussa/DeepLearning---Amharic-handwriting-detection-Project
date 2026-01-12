# src/explainability.py
import torch
import numpy as np
import cv2

class GradCAM:
    def __init__(self, model, target_layer):
        self.model = model
        self.target_layer = target_layer
        self.gradients = None
        self.activations = None
        
        # Register hooks to capture data during pass
        self.target_layer.register_forward_hook(self.save_activation)
        self.target_layer.register_full_backward_hook(self.save_gradient)

    def save_activation(self, module, input, output):
        self.activations = output

    def save_gradient(self, module, grad_input, grad_output):
        self.gradients = grad_output[0]

    def generate_cam(self, input_tensor, target_class_idx):
        # 1. Forward Pass
        output = self.model(input_tensor)
        
        # 2. Zero gradients
        self.model.zero_grad()
        
        # 3. Backward pass on the specific class score
        score = output[0][target_class_idx]
        score.backward()
        
        # 4. Global Average Pooling of gradients
        pooled_gradients = torch.mean(self.gradients, dim=[0, 2, 3])
        
        # 5. Weight the activations by gradients
        activations = self.activations.detach().clone()
        for i in range(activations.shape[1]):
            activations[:, i, :, :] *= pooled_gradients[i]
            
        # 6. Average the channels to get the heatmap
        heatmap = torch.mean(activations, dim=1).squeeze()
        
        # 7. Apply ReLU (we only care about positive influence)
        heatmap = np.maximum(heatmap.cpu().numpy(), 0)
        
        # 8. Normalize between 0 and 1
        if np.max(heatmap) != 0:
            heatmap /= np.max(heatmap)
            
        return heatmap