import streamlit as st
import cv2
import numpy as np
from streamlit_drawable_canvas import st_canvas
import json
import base64
import torch
import os
import re # Added for regex operations
import traceback
import uuid

# Import your model components
from src.config import PAGE_CONFIG, CANVAS_SIZE
from src.inference import Predictor

# ============================================================================
# PAGE CONFIGURATION
# ============================================================================
st.set_page_config(
    page_title="Amharic Character Recognition - Neural Network Visualizer",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# ============================================================================
# CUSTOM CSS - MINIMAL & PROFESSIONAL
# ============================================================================
st.markdown("""
<style>
    /* Remove default padding */
    .block-container {
        padding-top: 2rem;
        padding-bottom: 0rem;
    }
    
    /* Hide Streamlit branding */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    
    /* Custom glass card effect */
    .glass-card {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }
    
    /* Button styling */
    .stButton > button {
        width: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s ease;
    }
    
    .stButton > button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }
    
    /* Header styling */
    h1 {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
        margin-bottom: 0.5rem;
    }
    
    /* Hide canvas toolbar for cleaner look */
    .stDrawableCanvas {
        border-radius: 12px;
        overflow: hidden;
    }
</style>
""", unsafe_allow_html=True)

# ============================================================================
# MODEL INITIALIZATION
# ============================================================================
@st.cache_resource
def load_model():
    """Load PyTorch model once and cache it"""
    return Predictor("assets/amharic_ocr_v2.pth")

predictor = load_model()

# ============================================================================
# HEADER
# ============================================================================
st.markdown("# 🧠 Neural Network Visualizer")
st.markdown("**Amharic Character Recognition** - See how the model thinks")
st.markdown("---")

# ============================================================================
# LAYOUT: DRAWING CANVAS (LEFT) | VISUALIZATION (RIGHT)
# ============================================================================
col_canvas, col_visualization = st.columns([0.35, 0.65], gap="large")

# ----------------------------------------------------------------------------
# LEFT COLUMN: DRAWING INTERFACE
# ----------------------------------------------------------------------------
with col_canvas:
    st.markdown("### ✍️ Draw Character")
    st.caption("Draw any Amharic character to see the neural network in action")
    
    # Drawing canvas - black background, white stroke
    canvas_result = st_canvas(
        fill_color="rgba(0, 0, 0, 1)",
        stroke_width=25,
        stroke_color="#FFFFFF",
        background_color="#000000",
        height=CANVAS_SIZE,
        width=CANVAS_SIZE,
        drawing_mode="freedraw",
        key="canvas",
        display_toolbar=False  # Clean interface
    )
    
    # Action buttons in columns
    btn_col1, btn_col2 = st.columns(2)
    
    with btn_col1:
        predict_btn = st.button("🚀 PREDICT", use_container_width=True)
    
    with btn_col2:
        if st.button("🗑️ CLEAR", use_container_width=True):
            st.session_state.canvas_key = str(uuid.uuid4())
            st.session_state.prediction_data = None # Reset visualization
            st.rerun()
    
    st.markdown("<br>", unsafe_allow_html=True)
    
    # Process prediction when button clicked
    if predict_btn:
        if canvas_result.image_data is not None:
            # Check if canvas has content
            if np.sum(canvas_result.image_data) > 0:
                
                with st.spinner("Analyzing..."):
                    # Run model prediction with feature extraction
                    label, confidence, heatmap, raw_img, all_probabilities = predictor.predict_with_heatmap(
                        canvas_result.image_data
                    )
                    
                    # Store in session state
                    st.session_state.prediction = label
                    st.session_state.confidence = confidence
                    st.session_state.heatmap = heatmap
                    st.session_state.raw_img = raw_img
                    st.session_state.features = predictor.features
                    st.session_state.all_probabilities = all_probabilities
                    
                    # ============================================================
                    # EXPORT DATA FOR REACT VISUALIZATION
                    # ============================================================
                    
                    # Convert feature tensors to nested lists for JSON
                    features_list = []
                    for feature_tensor in st.session_state.features:
                        # Convert to numpy and then to list
                        features_list.append(
                            feature_tensor.detach().cpu().numpy().tolist()
                        )
                    
                    # Convert raw image to base64 for visualization
                    _, buffer = cv2.imencode('.png', st.session_state.raw_img)
                    img_base64 = base64.b64encode(buffer).decode('utf-8')
                    
                    # Prepare JSON payload
                    visualization_data = {
                        "prediction": st.session_state.prediction,
                        "confidence": float(st.session_state.confidence),
                        "features": features_list,
                        "raw_img_b64": f"data:image/png;base64,{img_base64}",
                        "all_probabilities": st.session_state.all_probabilities,
                        "idx_to_class": predictor.idx_to_class
                    }
                    
                    try:
                        os.makedirs("assets/frontend", exist_ok=True)
                        with open("assets/frontend/data.json", "w", encoding="utf-8") as f:
                            json.dump(visualization_data, f, ensure_ascii=False)
                    except Exception as e:
                        # Write full traceback to a debug log for inspection
                        try:
                            os.makedirs("assets/frontend", exist_ok=True)
                            with open("assets/frontend/debug.log", "a", encoding="utf-8") as logf:
                                logf.write(traceback.format_exc() + "\n")
                        except Exception:
                            # If even logging fails, fallback to printing to Streamlit
                            st.error("Critical: failed to write debug log")
                        st.error("Failed to save visualization data. See assets/frontend/debug.log for details.")
                        st.exception(e)

                    
                    st.success("✅ Prediction complete!")
                    st.rerun()  # Refresh to show results
            else:
                st.warning("⚠️ Please draw a character first")
        else:
            st.warning("⚠️ Canvas not initialized")
    


# ----------------------------------------------------------------------------
# RIGHT COLUMN: NEURAL NETWORK VISUALIZATION
# ----------------------------------------------------------------------------
# ... inside app.py ...

with col_visualization:
    st.markdown("### 🔮 Neural Network Architecture")
    st.caption("Real-time visualization of how the model processes your drawing")
    
    # Check if visualization is ready
    if 'prediction' in st.session_state:
        try:
            frontend_path = "assets/frontend"
            assets_dir = os.path.join(frontend_path, "assets")
            
            # 1. ROBUSTLY FIND JS AND CSS FILES
            # Instead of regexing the HTML, let's just grab the files from the directory
            js_file = None
            css_file = None
            
            if os.path.exists(assets_dir):
                for f in os.listdir(assets_dir):
                    if f.endswith(".js"):
                        js_file = f
                    elif f.endswith(".css"):
                        css_file = f
            
            if not js_file or not css_file:
                st.error("❌ Could not locate .js or .css files in assets/frontend/assets/")
            else:
                # 2. READ CONTENT
                with open(os.path.join(assets_dir, js_file), "r", encoding="utf-8") as f:
                    js_content = f.read()
                
                with open(os.path.join(assets_dir, css_file), "r", encoding="utf-8") as f:
                    css_content = f.read()

                # 3. PREPARE DATA FOR INJECTION
                # We inject the data directly into the HTML so React doesn't need to fetch it
                # We duplicate the logic from the predict button here or just load the saved json
                try:
                    with open("assets/frontend/data.json", "r", encoding="utf-8") as f:
                        data_json = f.read()
                except:
                    data_json = "{}" # Fallback

                # 4. CONSTRUCT SELF-CONTAINED HTML
                # Note: We assign data to window.VIS_DATA so React can see it immediately
                html_content = f"""
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Neural Viz</title>
                    <style>
                        /* Essential reset for Streamlit iframe */
                        body {{ margin: 0; padding: 0; overflow: hidden; background-color: transparent; }}
                        {css_content}
                    </style>
                </head>
                <body>
                    <div id="root"></div>
                    
                    <script>
                        // INJECT DATA DIRECTLY
                        window.VIS_DATA = {data_json};
                        console.log("Data injected into window.VIS_DATA");
                    </script>
                    
                    <script type="module">
                        {js_content}
                    </script>
                </body>
                </html>
                """

                # 5. RENDER
                st.components.v1.html(html_content, height=700, scrolling=False)

        except Exception as e:
            st.error(f"Error loading visualization: {str(e)}")
            st.write(traceback.format_exc())
    else:
        # Placeholder (Same as your original code)
        st.markdown(f"""
        <div style='height: 700px; display: flex; align-items: center; justify-content: center; 
                    background: linear-gradient(135deg, #0a0e27 0%, #1a1d2e 100%); 
                    border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1);'>
            <div style='text-align: center; color: rgba(255, 255, 255, 0.5);'>
                <div style='font-size: 48px; margin-bottom: 16px;'>🧠</div>
                <div style='font-size: 18px; font-weight: 600; margin-bottom: 8px;'>Neural Network Ready</div>
                <div style='font-size: 14px;'>Draw a character and click PREDICT</div>
            </div>
        </div>
        """, unsafe_allow_html=True)

# ============================================================================
# FOOTER INFO
# ============================================================================
st.markdown("---")
st.markdown("""
<div style='text-align: center; opacity: 0.5; font-size: 12px; padding: 1rem;'>
    <strong>Model:</strong> AHCNN (89% accuracy) | <strong>Classes:</strong> 237 Amharic characters | <strong>Architecture:</strong> 4 Conv Blocks + GAP + FC
</div>
""", unsafe_allow_html=True)





















# import streamlit as st
# import cv2
# import numpy as np
# from streamlit_drawable_canvas import st_canvas
# import json
# import base64
# import os
# import traceback
# import uuid  # Used for generating unique keys

# # Import your model components
# from src.config import PAGE_CONFIG, CANVAS_SIZE
# from src.inference import Predictor

# # ============================================================================
# # 1. PAGE CONFIGURATION & CSS
# # ============================================================================
# st.set_page_config(
#     page_title="Amharic Character Recognition - Neural Network Visualizer",
#     page_icon="🧠",
#     layout="wide",
#     initial_sidebar_state="expanded" 
# )


# # ============================================================================
# # CUSTOM CSS - MINIMAL & PROFESSIONAL
# # ============================================================================
# st.markdown("""
# <style>
#     /* Remove default padding */
#     .block-container {
#         padding-top: 2rem;
#         padding-bottom: 0rem;
#     }
    
#     /* Hide Streamlit branding */
#     #MainMenu {visibility: hidden;}
#     footer {visibility: hidden;}    
#     header {visibility: hidden;}
    
#     /* Custom glass card effect */
#     .glass-card {
#         background: rgba(15, 23, 42, 0.6);
#         backdrop-filter: blur(10px);
#         border-radius: 16px;
#         border: 1px solid rgba(255, 255, 255, 0.1);
#         padding: 1.5rem;
#         box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
#     }
    
#     /* Button styling */
#     .stButton > button {
#         width: 100%;
#         background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
#         color: white;
#         border: none;
#         border-radius: 12px;
#         padding: 0.75rem 1.5rem;
#         font-weight: 600;
#         font-size: 16px;
#         transition: all 0.3s ease;
#     }
    
#     .stButton > button:hover {
#         transform: translateY(-2px);
#         box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
#     }
    
#     /* Header styling */
#     h1 {
#         background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
#         -webkit-background-clip: text;
#         -webkit-text-fill-color: transparent;
#         font-weight: 800;
#         margin-bottom: 0.5rem;
#     }
    
#     /* Hide canvas toolbar for cleaner look */
#     .stDrawableCanvas {
#         border-radius: 12px;
#         overflow: hidden;
#     }
# </style>
# """, unsafe_allow_html=True)
# # ============================================================================
# # 2. STATE MANAGEMENT & MODEL LOADING
# # ============================================================================
# @st.cache_resource
# def load_model():
#     return Predictor("assets/amharic_ocr_v2.pth")

# try:
#     predictor = load_model()
# except Exception as e:
#     st.error(f"Model could not load: {e}")
#     st.stop()

# # Initialize Session State
# if 'canvas_key' not in st.session_state:
#     st.session_state.canvas_key = "canvas_init"
# if 'prediction_data' not in st.session_state:
#     st.session_state.prediction_data = None # Holds the JSON for the frontend

# # ============================================================================
# # 3. SIDEBAR (CONTROLS)
# # ============================================================================
# with st.sidebar:
#     # HEADER
#     st.markdown("# 🧠 Neural Network Visualizer")
#     st.markdown("**Amharic Character Recognition** - See how the model thinks")
#     st.markdown("---")

#     # --- DRAWING CANVAS ---
#     # We use a container to style the border
#     col_canvas, col_visualization = st.columns([0.35, 0.65], gap="large")
#     st.markdown('<div class="canvas-container">', unsafe_allow_html=True)
    

#     # Drawing canvas - black background, white stroke
#     canvas_result = st_canvas(
#         fill_color="rgba(0, 0, 0, 1)",
#         stroke_width=25,
#         stroke_color="#FFFFFF",
#         background_color="#000000",
#         height=CANVAS_SIZE,
#         width=CANVAS_SIZE,
#         drawing_mode="freedraw",
#         key=st.session_state.canvas_key,
#         display_toolbar=False  # Clean interface
#     )
#     st.markdown('</div>', unsafe_allow_html=True)
    
#     # --- BUTTONS ---
#     col_pred, col_clear = st.columns([1, 1])
    
#     with col_pred:
#         predict_btn = st.button("🚀 PREDICT", use_container_width=True)
        
#     with col_clear:
#         clear_btn = st.button("🗑️ CLEAR", use_container_width=True)

# # ============================================================================
# # 4. LOGIC HANDLERS
# # ============================================================================

# # HANDLE CLEAR
# if clear_btn:
#     # To clear the canvas, we must change its KEY. This forces a re-render.
#     st.session_state.canvas_key = str(uuid.uuid4())
#     st.session_state.prediction_data = None # Reset visualization
#     st.rerun()

# # HANDLE PREDICT
# if predict_btn and canvas_result.image_data is not None:
#     if np.sum(canvas_result.image_data) > 0:
#         with st.spinner("Processing..."):
#             # 1. Inference
#             label, confidence, _, raw_img, all_probs = predictor.predict_with_heatmap(
#                 canvas_result.image_data
#             )
            
#             # 2. Process Features for JSON
#             features_list = [f.detach().cpu().numpy().tolist() for f in predictor.features]
            
#             # 3. Process Image
#             _, buffer = cv2.imencode('.png', raw_img)
#             img_base64 = base64.b64encode(buffer).decode('utf-8')
            
#             # 4. Construct Data Payload
#             visualization_data = {
#                 "prediction": label,
#                 "confidence": float(confidence),
#                 "features": features_list,
#                 "raw_img_b64": f"data:image/png;base64,{img_base64}",
#                 "all_probabilities": all_probs,
#                 "idx_to_class": predictor.idx_to_class
#             }
            
#             # 5. Save to Session State (So it persists during reruns)
#             st.session_state.prediction_data = visualization_data
            
#             # Optional: Save to file for debugging
#             try:
#                 os.makedirs("assets/frontend", exist_ok=True)
#                 with open("assets/frontend/data.json", "w", encoding="utf-8") as f:
#                     json.dump(visualization_data, f, ensure_ascii=False)
#             except:
#                 pass
            
#             st.rerun()
#     else:
#         st.sidebar.warning("⚠️ Canvas is empty")

# # ============================================================================
# # 5. MAIN AREA - VISUALIZATION (ALWAYS VISIBLE)
# # ============================================================================

# # Prepare the data variable for Injection
# if st.session_state.prediction_data:
#     # If we have a prediction, inject it
#     data_json_string = json.dumps(st.session_state.prediction_data)
# else:
#     # If no prediction yet, inject null. The React app should handle null by showing the idle network.
#     data_json_string = "null"

# # Load Frontend Files
# try:
#     frontend_path = "assets/frontend"
#     assets_dir = os.path.join(frontend_path, "assets")
    
#     js_file = next((f for f in os.listdir(assets_dir) if f.endswith(".js")), None)
#     css_file = next((f for f in os.listdir(assets_dir) if f.endswith(".css")), None)
    
#     if js_file and css_file:
#         with open(os.path.join(assets_dir, js_file), "r", encoding="utf-8") as f:
#             js_content = f.read()
#         with open(os.path.join(assets_dir, css_file), "r", encoding="utf-8") as f:
#             css_content = f.read()

#         html_content = f"""
#         <!DOCTYPE html>
#         <html lang="en">
#         <head>
#             <meta charset="UTF-8" />
#             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
#             <title>Neural Viz</title>
#             <style>
#                 body {{ margin: 0; padding: 0; overflow: hidden; background-color: transparent; }}
#                 /* Force React Root to fill screen */
#                 #root {{ width: 100vw; height: 100vh; }}
#                 {css_content}
#             </style>
#         </head>
#         <body>
#             <div id="root"></div>
#             <script>
#                 // INJECT DATA (Or Null)
#                 window.VIS_DATA = {data_json_string};
#             </script>
#             <script type="module">
#                 {js_content}
#             </script>
#         </body>
#         </html>
#         """
        
#         # Calculate height to fill screen roughly (minus header padding)
#         st.components.v1.html(html_content, height=850, scrolling=False)
        
#     else:
#         st.error("Frontend build files not found. Run 'npm run build' in frontend folder.")

# except Exception as e:
#     st.error(f"Error loading frontend: {e}")