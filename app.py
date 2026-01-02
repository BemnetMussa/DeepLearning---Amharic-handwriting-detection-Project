import streamlit as st
import torch
import numpy as np
import cv2
from PIL import Image
from streamlit_drawable_canvas import st_canvas
from torchvision import transforms
import math

# Try importing the model, provide a warning if file is missing (for UI testing)
try:
    from model import AHCNN
    MODEL_AVAILABLE = True
except ImportError:
    MODEL_AVAILABLE = False

# --- Configuration ---
st.set_page_config(
    page_title="Amharic AI Explorer",
    page_icon="🇪🇹",
    layout="wide",
    initial_sidebar_state="expanded"
)

# --- Constants & Styling ---
MODEL_PATH = "amharic_ocr_v2_85acc2.pth"
CANVAS_SIZE = 300

# Modern Color Palette
COLORS = {
    "bg": "#000000",        # Pure Black
    "card": "#12161e",      # Slate 800
    "text": "#ffffff",      # Slate 50
    "accent": "#6366f1",    # Indigo 500
    "success": "#22c55e",   # Green 500
    "secondary": "#94a3b8"  # Slate 400
}

# --- Custom CSS ---
st.markdown(f"""
    <style>
        /* --- Canvas Toolbar Buttons --- */
        div[data-testid="stDrawableCanvas"] button {{
            background-color: #eee; /* Light gray background */
            color: #333; /* Dark text/icon color */
            border: 2px solid #ccc;
            border-radius: 4px;
            margin: 2px;
            padding: 5px;
            box-shadow: none;
            transition: all 0.2s ease;
        }}
        div[data-testid="stDrawableCanvas"] button:hover {{
            background-color: #ddd;
            border-color: #bbb;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }}
        div[data-testid="stDrawableCanvas"] button svg {{
            fill: #333 !important; /* For SVG icons, force color override */
        }}
        
        /* Global Reset */
        .stApp {{
            background-color: {COLORS['bg']};
            color: {COLORS['text']};
            font-family: 'Inter', sans-serif;
        }}
        
        /* Headers */
        h1, h2, h3 {{
            color: {COLORS['text']} !important;
            font-weight: 700;
        }}
        h1 {{ margin-bottom: 0.5rem; }}
        
        /* Cards */
        .css-1r6slb0, .stMarkdown, .stButton {{
             color: {COLORS['text']};
        }}
        
        div.stButton > button {{
            background: linear-gradient(135deg, {COLORS['accent']} 0%, #4f46e5 100%);
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            font-weight: 600;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.4);
        }}
        div.stButton > button:hover {{
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.5);
        }}

        /* Custom Card Container */
        .glass-card {{
            background-color: {COLORS['card']};
            border: 1px solid #334155;
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }}
        
        /* Metrics */
        div[data-testid="stMetricValue"] {{
            font-size: 3rem;
            color: {COLORS['accent']};
            text-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }}
        
        /* Tabs */
        .stTabs [data-baseweb="tab-list"] {{
            gap: 8px;
            background-color: transparent;
        }}
        .stTabs [data-baseweb="tab"] {{
            background-color: #0f172a;
            border-radius: 6px;
            color: {COLORS['secondary']};
            border: 1px solid #334155;
        }}
        .stTabs [data-baseweb="tab"][aria-selected="true"] {{
            background-color: {COLORS['accent']};
            color: white;
            border: none;
        }}
    </style>
""", unsafe_allow_html=True)

# --- Helpers ---
def make_grid_image(feature_maps, cols=8):
    """
    Stitches feature maps into a single image.
    Fixed to handle NumPy array truth value ambiguity.
    """
    # --- FIX: Robust check for empty input ---
    if feature_maps is None:
        return None
    if isinstance(feature_maps, np.ndarray) and feature_maps.size == 0:
        return None
    if isinstance(feature_maps, list) and len(feature_maps) == 0:
        return None
    # ----------------------------------------

    # Normalize features to 0-255 uint8
    maps = []
    # If it's a 3D array (Channels, Height, Width), iterate through channels
    for fmap in feature_maps:
        # If fmap is 3D (1, H, W), squeeze it. If 2D (H, W), leave it.
        fmap = fmap.squeeze()
        
        if fmap.max() - fmap.min() > 0:
            norm = (fmap - fmap.min()) / (fmap.max() - fmap.min())
            norm = (norm * 255).astype(np.uint8)
        else:
            norm = np.zeros_like(fmap, dtype=np.uint8)
        
        # Resize small feature maps up for visibility
        if norm.shape[0] < 28: 
            norm = cv2.resize(norm, (56, 56), interpolation=cv2.INTER_NEAREST)
        
        maps.append(norm)

    n_maps = len(maps)
    rows = math.ceil(n_maps / cols)
    
    # Get dimensions of one map
    h, w = maps[0].shape
    
    # Create empty grid
    grid_h = rows * h
    grid_w = cols * w
    grid_img = np.zeros((grid_h, grid_w), dtype=np.uint8)
    
    for idx, img in enumerate(maps):
        r = idx // cols
        c = idx % cols
        grid_img[r*h:(r+1)*h, c*w:(c+1)*w] = img
        
    return grid_img

# --- Model Logic ---
visualized_features = []
def feature_hook(module, input, output):
    visualized_features.append(output)

@st.cache_resource
def load_predictor():
    if not MODEL_AVAILABLE:
        return None
    
    class AmharicPredictor:
        def __init__(self, model_path):
            self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
            try:
                checkpoint = torch.load(model_path, map_location=self.device)
                self.model = AHCNN(num_classes=len(checkpoint['class_to_idx'])).to(self.device)
                self.model.load_state_dict(checkpoint['model_state_dict'])
                self.model.eval()
                self.class_to_idx = checkpoint['class_to_idx']
                self.idx_to_class = {v: k for k, v in self.class_to_idx.items()}

                # Register hooks
                self.model.block1.register_forward_hook(feature_hook)
                self.model.block2.register_forward_hook(feature_hook)
                self.model.block3.register_forward_hook(feature_hook)
                self.model.block4.register_forward_hook(feature_hook)

                self.transform = transforms.Compose([
                    transforms.Resize((28, 28)),
                    transforms.ToTensor(),
                    transforms.Normalize(mean=[0.239], std=[0.407]) 
                ])
            except Exception as e:
                st.error(f"Error loading model: {e}")

        def predict(self, img_array):
            global visualized_features
            visualized_features = [] # Reset

            img = Image.fromarray(img_array.astype('uint8'), 'L')
            img_tensor = self.transform(img).unsqueeze(0).to(self.device)

            with torch.no_grad():
                output = self.model(img_tensor)
                probabilities = torch.nn.functional.softmax(output, dim=1)
                confidence, predicted_idx = torch.max(probabilities, 1)
                pred_class = self.idx_to_class[predicted_idx.item()]
                confidence_score = confidence.item()

            return pred_class, confidence_score, visualized_features, img_tensor

    return AmharicPredictor(MODEL_PATH)

predictor = load_predictor()

# --- Initialize Session State ---
if 'prediction' not in st.session_state:
    st.session_state.prediction = None
    st.session_state.confidence = 0.0
    st.session_state.features = []

# --- Sidebar ---
with st.sidebar:
    st.image("https://commons.wikimedia.org/wiki/File:Flag_of_Ethiopia.svg#/media/File:Flag_of_Ethiopia.svg", width=50)
    st.title("Settings")
    
    stroke_width = st.slider("Pen Thickness", 10, 30, 20)
    
    st.markdown("---")
    st.markdown("### About")
    st.markdown("""
    **Amharic OCR X-Ray** demonstrates how a Convolutional Neural Network (CNN) sees Ethiopian characters.
    
    1. **Draw** a character.
    2. **Click** Analyze.
    3. **Explore** the layers to see features extracted by the AI.
    """)
    
    if st.button("Reset Application"):
        st.session_state.prediction = None
        st.rerun()

# --- Main Content ---
st.markdown("<h1 style='text-align: center;'>🇪🇹 Amharic Character Recognition</h1>", unsafe_allow_html=True)
st.markdown(f"<p style='text-align: center; color: {COLORS['secondary']};'>Deep Learning Model Transparency Demo</p>", unsafe_allow_html=True)
st.write("") 

col_input, col_viz = st.columns([1, 1.5], gap="large")

# --- Left Column: Input & Prediction ---
with col_input:
    st.markdown('<div class="glass-card">', unsafe_allow_html=True)
    st.subheader("Draw Character")
    
    # Canvas Center Wrapper
    c_col1, c_col2, c_col3 = st.columns([1, 10, 1])
    with c_col2:
        canvas_result = st_canvas(
            fill_color="black",
            stroke_width=stroke_width,
            stroke_color="#FFFFFF",
            background_color="#000000",
            height=CANVAS_SIZE,
            width=CANVAS_SIZE,
            drawing_mode="freedraw",
            key="canvas",
            display_toolbar=True
        )

    st.write("")
    if st.button("Identify" \
    " Character", use_container_width=True):
        if canvas_result.image_data is not None and predictor:
            try:
                img_gray = cv2.cvtColor(canvas_result.image_data, cv2.COLOR_RGBA2GRAY)
                # Check if canvas is empty
                if np.sum(img_gray) == 0:
                    st.warning("Please draw something first!")
                else:
                    pred_class, conf, feats, raw_tensor = predictor.predict(img_gray)
                    st.session_state.prediction = pred_class
                    st.session_state.confidence = conf
                    st.session_state.features = feats
                    st.session_state.debug_input = raw_tensor
                    st.rerun()
            except Exception as e:
                st.error(f"Prediction error: {e}")
        elif not predictor:
            st.error("Model not loaded.")

    st.markdown('</div>', unsafe_allow_html=True)

    # Result Display (Only if prediction exists)
    if st.session_state.prediction:
        st.markdown('<div class="glass-card" style="border-color: #6366f1;">', unsafe_allow_html=True)
        r_col1, r_col2 = st.columns([1, 1])
        
        with r_col1:
            st.markdown("<p style='font-size:0.9rem; color:#94a3b8; margin-bottom:0;'>PREDICTION</p>", unsafe_allow_html=True)
            st.markdown(f"<p style='font-size:4.5rem; font-weight:800; line-height:1; color:{COLORS['success']}; margin:0;'>{st.session_state.prediction}</p>", unsafe_allow_html=True)
        
        with r_col2:
            st.markdown("<p style='font-size:0.9rem; color:#94a3b8; margin-bottom:0;'>CONFIDENCE</p>", unsafe_allow_html=True)
            st.metric(label="", value=f"{st.session_state.confidence:.1%}", delta_color="off")
            
        # Confidence Bar
        st.progress(st.session_state.confidence)
        
        with st.expander("Debug View: Model Input"):
            if 'debug_input' in st.session_state:
                norm_input = st.session_state.debug_input.squeeze().cpu().numpy()
                norm_input = (norm_input - norm_input.min()) / (norm_input.max() - norm_input.min())
                st.image(norm_input, caption="28x28 Preprocessed Tensor", width=100)
                
        st.markdown('</div>', unsafe_allow_html=True)

# --- Right Column: X-Ray Visualization ---
with col_viz:
    st.markdown('<div class="glass-card">', unsafe_allow_html=True)
    st.subheader(" Model X-Ray")
    st.write("Visualize how the neural network breaks down the image layer by layer.")

    if st.session_state.features:
        # Create tabs
        tab1, tab2, tab3, tab4 = st.tabs([
            "Layer 1 (Edges)", 
            "Layer 2 (Curves)", 
            "Layer 3 (Parts)", 
            "Layer 4 (Abstract)"
        ])
        
        layers_info = [
            (tab1, 0, "Initial Edge Detection", 8),
            (tab2, 1, "Shape & Curve Aggregation", 8),
            (tab3, 2, "Complex Pattern Recognition", 12),
            (tab4, 3, "High-Level Abstract Features", 16)
        ]

        for tab_obj, layer_idx, desc, grid_cols in layers_info:
            with tab_obj:
                st.caption(f"ℹ️ {desc} - {st.session_state.features[layer_idx].shape[1]} Feature Maps")
                
                # Convert raw tensor features to numpy
                feats = st.session_state.features[layer_idx].squeeze(0).cpu().numpy()
                
                # Create the mosaic grid
                grid_viz = make_grid_image(feats, cols=grid_cols)
                
                # Display with a nice border
                st.image(grid_viz, use_container_width=True, output_format='PNG')
                st.markdown(f"<p style='text-align:center; font-size:0.8rem; color:{COLORS['secondary']}'>Brighter pixels = Higher activation</p>", unsafe_allow_html=True)

    else:
        # Empty State Placeholder
        st.markdown(f"""
            <div style="border: 2px dashed {COLORS['card']}; border-radius: 8px; padding: 3rem; text-align: center; color: {COLORS['secondary']};">
                <p>Waiting for input...</p>
                <p style="font-size: 0.8rem;">Draw a character on the left and click 'Identify' to see the internal activations.</p>
            </div>
        """, unsafe_allow_html=True)

    st.markdown('</div>', unsafe_allow_html=True)