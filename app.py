import streamlit as st
import torch
import numpy as np
import cv2
from PIL import Image
from streamlit_drawable_canvas import st_canvas
from torchvision import transforms

from model import AHCNN # Import the model definition

# --- Configuration ---
st.set_page_config(layout="wide")

MODEL_PATH = "amharic_ocr_v2_85acc2.pth"
# --- UI Improvement: Larger Canvas ---
CANVAS_SIZE = 300
CANVAS_STROKE_WIDTH = 18
CANVAS_FILL_COLOR = "#000000" # Black background
CANVAS_STROKE_COLOR = "#FFFFFF" # White pen

# --- The "Neuron Hook" Spy ---
# This list will store the feature maps captured by the hook
visualized_features = []

def feature_hook(module, input, output):
    """A forward hook to capture the output of a specific layer."""
    visualized_features.append(output)

# --- The Model Handler Class ---
class AmharicPredictor:
    def __init__(self, model_path):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        
        checkpoint = torch.load(model_path, map_location=self.device)
        
        self.model = AHCNN(num_classes=len(checkpoint['class_to_idx'])).to(self.device)
        self.model.load_state_dict(checkpoint['model_state_dict'])
        self.model.eval()
        
        self.class_to_idx = checkpoint['class_to_idx']
        self.idx_to_class = {v: k for k, v in self.class_to_idx.items()}

        # --- UI Improvement: Attach hooks to all 4 blocks ---
        self.model.block1.register_forward_hook(feature_hook)
        self.model.block2.register_forward_hook(feature_hook)
        self.model.block3.register_forward_hook(feature_hook)
        self.model.block4.register_forward_hook(feature_hook)

        self.transform = transforms.Compose([
            transforms.Resize((28, 28)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.239], std=[0.407]) 
        ])

    def predict(self, img_array):
        global visualized_features
        visualized_features = []

        img = Image.fromarray(img_array.astype('uint8'), 'L')
        img_tensor = self.transform(img).unsqueeze(0).to(self.device)

        with torch.no_grad():
            output = self.model(img_tensor)
            probabilities = torch.nn.functional.softmax(output, dim=1)
            confidence, predicted_idx = torch.max(probabilities, 1)
            pred_class = self.idx_to_class[predicted_idx.item()]
            confidence_score = confidence.item()

        return pred_class, confidence_score, visualized_features, img_tensor

# --- Helper function for visualization ---
def normalize_features(feature_maps):
    """Normalizes a batch of feature maps to the [0, 1] range for visualization."""
    normalized_maps = []
    if feature_maps.ndim == 2:
        feature_maps = np.expand_dims(feature_maps, axis=0)
        
    for fmap in feature_maps:
        fmap_min, fmap_max = np.min(fmap), np.max(fmap)
        if fmap_max > fmap_min:
            fmap_normalized = (fmap - fmap_min) / (fmap_max - fmap_min)
            normalized_maps.append(fmap_normalized)
        else:
            normalized_maps.append(np.zeros_like(fmap))
    return normalized_maps

# --- Main UI and Logic ---

st.title("🎨 Amharic Character Recognition & Model X-Ray")
st.markdown("Draw a single Amharic character on the larger canvas below. The model's prediction will appear alongside the full 'X-Ray' of its internal layers.")

col1, col2 = st.columns(2)

with col1:
    st.header("1. Drawing Input")
    # Create a canvas component
    canvas_result = st_canvas(
        fill_color=CANVAS_FILL_COLOR,
        stroke_width=CANVAS_STROKE_WIDTH,
        stroke_color=CANVAS_STROKE_COLOR,
        background_color=CANVAS_FILL_COLOR,
        height=CANVAS_SIZE,
        width=CANVAS_SIZE,
        drawing_mode="freedraw",
        key="canvas",
    )

    predict_button = st.button("🧠 Predict Character")
    
    st.header("2. Prediction & Analysis")
    prediction_placeholder = st.empty()


# Load the model once using Streamlit's caching
@st.cache_resource
def load_predictor():
    return AmharicPredictor(MODEL_PATH)

predictor = load_predictor()

if predict_button and canvas_result.image_data is not None:
    img_gray = cv2.cvtColor(canvas_result.image_data, cv2.COLOR_RGBA2GRAY)

    pred_class, confidence, features, processed_tensor = predictor.predict(img_gray)
    
    with prediction_placeholder.container():
        st.success(f"**Prediction:** `{pred_class}`")
        st.info(f"**Confidence:** `{confidence:.2%}`")

        with st.expander("Show Processed Input (Debug View)"):
            debug_image = processed_tensor.squeeze().cpu().numpy()
            displayable_debug_image = normalize_features(debug_image)
            st.image(displayable_debug_image[0], caption="Normalized 28x28 Input to Model")

    with col2:
        st.header("3. Model 'X-Ray'")
        st.markdown("See what the model 'sees' at each stage. Early layers detect simple edges and strokes, while later layers detect more complex character parts.")

        if features:
            with st.expander("Block 1: Low-Level Features (32 Maps)", expanded=True):
                block1_features = features[0].squeeze(0).cpu().numpy()
                block1_normalized = normalize_features(block1_features)
                st.image(block1_normalized, width=100) # Increased width

            with st.expander("Block 2: Mid-Level Features (64 Maps)"):
                block2_features = features[1].squeeze(0).cpu().numpy()
                block2_normalized = normalize_features(block2_features)
                st.image(block2_normalized, width=80) # Increased width
            
            with st.expander("Block 3: High-Level Features (128 Maps)"):
                block3_features = features[2].squeeze(0).cpu().numpy()
                block3_normalized = normalize_features(block3_features)
                st.image(block3_normalized, width=60) # Increased width

            with st.expander("Block 4: Final Feature Abstraction (256 Maps)"):
                block4_features = features[3].squeeze(0).cpu().numpy()
                block4_normalized = normalize_features(block4_features)
                st.image(block4_normalized, width=40) # Increased width
        else:
            st.warning("Could not retrieve feature maps.")
else:
    with col2:
        st.header("3. Model 'X-Ray'")
        st.info("Draw a character and click 'Predict' to see the model's internal visualizations.")

