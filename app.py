import streamlit as st
import cv2
import numpy as np
from streamlit_drawable_canvas import st_canvas
import json
import base64
import os

from src.inference import Predictor

# ============================================================================
# SETUP
# ============================================================================
st.set_page_config(
    page_title="Neural Network Visualizer",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed"
)

def get_frontend_html():
    possible_paths = ["assets/frontend/index.html"]
    for path in possible_paths:
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                return f.read()
    return None

# ============================================================================
# CSS - SIMPLE & CLEAN
# ============================================================================
st.markdown("""
<style>
    /* Kill Streamlit UI */
    .block-container { padding: 0 !important; max-width: 100% !important; }
    .main > div { padding: 0 !important; }
    header, footer, #MainMenu { display: none !important; }
    .stStatusWidget { display: none !important; }
    
    /* React Background */
    .stHtml iframe {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        border: none !important;
        z-index: 1 !important;
    }
    
    /* Floating Drawing Panel */
    .draw-panel {
        position: fixed !important;
        top: 30px !important;
        left: 30px !important;
        z-index: 9999 !important;
        background: rgba(0, 0, 0, 0.8) !important;
        backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        border-radius: 16px !important;
        padding: 20px !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9) !important;
    }
    
    /* Canvas */
    .draw-panel canvas {
        border-radius: 8px !important;
        margin-bottom: 12px !important;
    }
    
    /* Buttons */
    .draw-panel button {
        width: 100% !important;
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        color: white !important;
        border-radius: 8px !important;
        padding: 10px !important;
        font-size: 12px !important;
        font-weight: 600 !important;
        text-transform: uppercase !important;
        letter-spacing: 1px !important;
        cursor: pointer !important;
        transition: all 0.2s !important;
    }
    
    .draw-panel button:hover {
        background: rgba(255, 255, 255, 0.2) !important;
        border-color: rgba(255, 255, 255, 0.5) !important;
    }
    
    .draw-panel [data-testid="column"] {
        padding: 0 4px !important;
    }
    
    .draw-panel [data-testid="column"]:first-child {
        padding-left: 0 !important;
    }
    
    .draw-panel [data-testid="column"]:last-child {
        padding-right: 0 !important;
    }
</style>
""", unsafe_allow_html=True)

# ============================================================================
# BACKGROUND (React)
# ============================================================================
html_content = get_frontend_html()
if html_content:
    st.components.v1.html(html_content, height=0, scrolling=False)

# ============================================================================
# DRAWING PANEL
# ============================================================================
@st.cache_resource
def load_model():
    return Predictor("assets/amharic_ocr_v2.pth")

predictor = load_model()

st.markdown('<div class="draw-panel">', unsafe_allow_html=True)

canvas = st_canvas(
    fill_color="rgba(255, 255, 255, 1)",
    stroke_width=20,
    stroke_color="#FFFFFF",
    background_color="#000000",
    height=280,
    width=280,
    drawing_mode="freedraw",
    key="canvas",
    display_toolbar=False
)

col1, col2 = st.columns(2)
with col1:
    predict_btn = st.button("Predict")
with col2:
    clear_btn = st.button("Clear")

st.markdown('</div>', unsafe_allow_html=True)

# ============================================================================
# LOGIC
# ============================================================================
if predict_btn and canvas.image_data is not None:
    if np.sum(canvas.image_data) > 0:
        label, conf, _, raw_img, probs = predictor.predict_with_heatmap(canvas.image_data)
        
        features = [f.detach().cpu().numpy().tolist() for f in predictor.features]
        _, buffer = cv2.imencode('.png', raw_img)
        img_b64 = base64.b64encode(buffer).decode('utf-8')
        
        data = {
            "prediction": label,
            "confidence": float(conf),
            "features": features,
            "raw_img_b64": f"data:image/png;base64,{img_b64}",
            "all_probabilities": probs,
            "active": True
        }
        
        save_path = "static/data.json" 
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        
        with open(save_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False)
            
        st.rerun()

if clear_btn:
    st.rerun()