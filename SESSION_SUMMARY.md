# Session Summary

## Project Overview

The project is a Streamlit application for Amharic character recognition. It consists of a Python backend using Streamlit and a React frontend for visualization.

### Backend (`app.py`)

- Uses Streamlit for the UI.
- Has a drawable canvas for user input.
- Loads a pre-trained PyTorch model (`amharic_ocr_v2.pth`).
- On prediction, it saves the model's output (label, confidence, feature maps) to `static/data.json`.
- Embeds the React application for visualization by loading and inlining `assets/frontend/index.html` and its linked assets.

### Frontend (`frontend/`)

- A Vite-based React application.
- Uses `three.js` for 3D visualization of the neural network.
- Fetches prediction data from `./data.json` (relative to the served HTML).
- The build process now successfully generates separate `index.html`, `index-*.css`, and `index-*.js` files into `assets/frontend/`.

## User's Issue

The user initially reported the frontend was expecting `dist/data.js` and the visualization was not appearing (black screen).

**Previous Fixes & Debugging:**
1.  Corrected `fetch` path in `App.jsx` from `/data.json` to `./data.json`.
2.  Implemented `ResizeObserver` in `App.jsx` for dynamic resizing.
3.  Attempted to use `vite-plugin-singlefile` and `vite-plugin-html` to inline assets, which led to persistent build hangs.
4.  Identified the build hanging as an environmental `EIO` error.
5.  **Current Status:** The user has fixed the build environment, and `npm run build` now successfully generates separate `index.html`, CSS, and JS files into `assets/frontend/`.

## Current Problem

The visualization still shows a black screen because Streamlit's `st.components.v1.html` only serves the raw `index.html` content, not the linked external CSS and JavaScript files. The browser receives the HTML but cannot load the necessary styling and application logic.

## Solution

Manually inline the CSS and JavaScript content directly into the `index.html` string within `app.py` before passing it to `st.components.v1.html`. This ensures the entire visualization is self-contained in a single HTML block that Streamlit can render.
