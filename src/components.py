import streamlit as st
from .config import COLORS

def load_css():
    st.markdown(f"""
    <style>
        .stApp {{ background-color: {COLORS['background']}; }}
        
        /* Glass Card */
        .glass-card {{
            background: {COLORS['card_bg']};
            backdrop-filter: blur(10px);
            border: {COLORS['border']};
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }}
        
        /* Neon Button */
        div.stButton > button {{
            background: linear-gradient(90deg, #4f46e5, #ec4899);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            transition: 0.3s;
        }}
        div.stButton > button:hover {{
            box-shadow: {COLORS['accent_glow']};
            transform: scale(1.02);
        }}
    </style>
    """, unsafe_allow_html=True)

def header():
    st.markdown("""
        <h1 style='text-align: center; color: white; margin-bottom: 0;'>
            🇪🇹 Neural Amharic <span style='color:#6366f1'>Vision</span>
        </h1>
        <p style='text-align: center; color: #94a3b8; font-size: 0.9em;'>
            Convolutional Network Activation Analysis
        </p>
        <hr style='border-color: #333;'>
    """, unsafe_allow_html=True)