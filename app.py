import streamlit as st
import cv2
import numpy as np
from streamlit_drawable_canvas import st_canvas
import json
import base64
import os

# Import model components
# Assuming these exist in your project structure
from src.config import PAGE_CONFIG, CANVAS_SIZE
from src.inference import Predictor

# ============================================================================
# 1. PAGE CONFIGURATION
# ============================================================================
st.set_page_config(
    page_title="Neural Network Visualizer",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# ============================================================================
# 2. CUSTOM CSS - THE GLASSMORPHISM ENGINE
# ============================================================================
st.markdown("""
<style>
    /* RESET & BASE */
    .block-container {
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100% !important;
    }
    header, footer, #MainMenu { display: none !important; }
    
    /* BACKGROUND LAYER (The React App) */
    .viz-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        background: radial-gradient(circle at center, #1a1d2e 0%, #0a0e27 100%);
    }

    /* CONTROL STATION (Floating Glass Panel) */
    .control-station {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 340px;
        background: rgba(13, 17, 30, 0.75);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        padding: 24px;
        z-index: 100;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 20px;
        animation: slideIn 0.5s ease-out;
    }

    @keyframes slideIn {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    /* TYPOGRAPHY */
    .app-title {
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
        background: linear-gradient(90deg, #818cf8 0%, #c084fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 4px;
    }
    
    .app-subtitle {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        letter-spacing: 0.5px;
    }

    /* CANVAS STYLING */
    .canvas-container {
        border-radius: 16px;
        overflow: hidden;
        border: 2px solid rgba(255, 255, 255, 0.1);
        background: #000;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
        margin: 10px 0;
    }

    /* CUSTOM STREAMLIT BUTTONS */
    div.stButton > button {
        width: 100%;
        border-radius: 12px;
        font-weight: 600;
        font-size: 14px;
        border: none;
        padding: 0.5rem 1rem;
        transition: all 0.2s;
    }

    /* Primary Button (Predict) */
    div.stButton > button:first-child {
        background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        color: white;
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
    
    div.stButton > button:hover {
        transform: translateY(-2px);
        opacity: 0.9;
    }

    /* Secondary Button (Clear) - targeting via Python key if needed, but here generic */
    /* We handle specific styling via CSS targeting nth-child usually, but Streamlit is tricky.
       We will rely on the unified style above for consistency. */

    /* RESULTS SECTION */
    .result-box {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        padding: 16px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.05);
        margin-top: 10px;
    }
    
    .char-display {
        font-size: 64px;
        font-weight: bold;
        line-height: 1;
        margin: 10px 0;
        background: linear-gradient(180deg, #fff 0%, #94a3b8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .conf-bar-bg {
        width: 100%;
        height: 6px;
        background: rgba(255,255,255,0.1);
        border-radius: 10px;
        margin-top: 10px;
        overflow: hidden;
    }
    
    .conf-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
        border-radius: 10px;
        transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

</style>
""", unsafe_allow_html=True)

# ============================================================================
# 3. MODEL LOADING
# ============================================================================
@st.cache_resource
def load_model():
    return Predictor("assets/amharic_ocr_v2.pth")

predictor = load_model()

# ============================================================================
# 4. LAYOUT LOGIC
# ============================================================================

# --- PART A: The Frontend Visualization (Background) ---
# We read the index.html and inject it fullscreen. 
# It runs independently of the Streamlit widgets.

html_path = "frontend/dist/index.html"
viz_html = ""

if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        viz_html = f.read()
else:
    # Fallback if frontend isn't built yet
    viz_html = """
    <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif;">
        <div style="text-align: center;">
            <h1>🧠 Neural Core Offline</h1>
            <p style="opacity: 0.6">Build the React frontend to see the network visualization.</p>
        </div>
    </div>
    """

# Inject the background HTML
st.markdown(f'<div class="viz-background">', unsafe_allow_html=True)
st.components.v1.html(viz_html, height=1000, scrolling=False) # Height doesn't matter much due to fixed CSS
st.markdown('</div>', unsafe_allow_html=True)


# --- PART B: The Floating Control Station (Foreground) ---
# We use a container to hold logic, but styling makes it float.

with st.container():
    # OPEN GLASS PANEL
    st.markdown('<div class="control-station">', unsafe_allow_html=True)
    
    # 1. Header
    st.markdown("""
        <div>
            <div class="app-title">Neural Lens</div>
            <div class="app-subtitle">Amharic Character Recognition</div>
        </div>
    """, unsafe_allow_html=True)
    
    # 2. Canvas Container
    st.markdown('<div class="canvas-container">', unsafe_allow_html=True)
    canvas_result = st_canvas(
        fill_color="rgba(0, 0, 0, 1)",
        stroke_width=22,
        stroke_color="#FFFFFF",
        background_color="#000000",
        height=280,
        width=290, # Slightly less than container width
        drawing_mode="freedraw",
        key="canvas",
        display_toolbar=False
    )
    st.markdown('</div>', unsafe_allow_html=True)
    
    # 3. Controls (Buttons)
    # Using columns for perfect alignment
    col_btn1, col_btn2 = st.columns(2)
    with col_btn1:
        predict_btn = st.button("⚡ PREDICT", key="predict_btn")
    with col_btn2:
        clear_btn = st.button("↺ CLEAR", key="clear_btn")

    # 4. Logic & Result Display
    if predict_btn and canvas_result.image_data is not None:
        # Check if empty
        if np.sum(canvas_result.image_data) > 0:
            with st.spinner("Processing..."):
                # Inference
                label, confidence, heatmap, raw_img, all_probs = predictor.predict_with_heatmap(
                    canvas_result.image_data
                )
                
                # Save state
                st.session_state.prediction = label
                st.session_state.confidence = confidence
                
                # --- DATA EXPORT FOR REACT ---
                features_list = [f.detach().cpu().numpy().tolist() for f in predictor.features]
                _, buffer = cv2.imencode('.png', raw_img)
                img_base64 = base64.b64encode(buffer).decode('utf-8')
                
                viz_data = {
                    "prediction": label,
                    "confidence": float(confidence),
                    "features": features_list,
                    "raw_img_b64": f"data:image/png;base64,{img_base64}",
                    "all_probabilities": all_probs,
                    "active": True # Signal frontend to animate
                }
                
                # Path where React app looks for data
                # Ensure your React app polls this file or your Streamlit serves it
                json_path = "assets/frontend/data.json" 
                # Note: In production, you might need a better way to pass data (e.g. postMessage)
                # But for local Streamlit+React, writing to public folder works if watching.
                
                # If using the 'dist' folder approach:
                json_path_dist = "assets/frontend/data.json"
                
                with open(json_path_dist, "w", encoding="utf-8") as f:
                    json.dump(viz_data, f, ensure_ascii=False)
                    
                st.rerun()

    # 5. Display Result (Persist across reruns)
    if 'prediction' in st.session_state:
        pred = st.session_state.prediction
        conf = st.session_state.confidence
        conf_percent = int(conf * 100)
        
        st.markdown(f"""
        <div class="result-box">
            <div style="font-size: 10px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px;">Detected</div>
            <div class="char-display">{pred}</div>
            <div style="display: flex; justify-content: space-between; font-size: 12px; color: #cbd5e1; margin-bottom: 4px;">
                <span>Confidence</span>
                <span>{conf:.1%}</span>
            </div>
            <div class="conf-bar-bg">
                <div class="conf-bar-fill" style="width: {conf_percent}%"></div>
            </div>
        </div>
        """, unsafe_allow_html=True)
    else:
        # Empty state placeholder
        st.markdown("""
        <div class="result-box" style="opacity: 0.5;">
            <div style="padding: 20px 0; font-size: 13px; color: #94a3b8;">
                Draw a character above<br>to analyze neural pathways
            </div>
        </div>
        """, unsafe_allow_html=True)

    # CLOSE GLASS PANEL
    st.markdown('</div>', unsafe_allow_html=True)

    # Handle Clear
    if clear_btn:
        for key in ['prediction', 'confidence']:
            if key in st.session_state:
                del st.session_state[key]
        st.rerun()