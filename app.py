from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import io
import os
import glob
import random
from PIL import Image, ImageOps
from src.inference import Predictor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("⏳ Loading Model...")
predictor = Predictor("assets/amharic_ocr_v2.pth")
print("✅ Model Loaded")

BASE_DIR = r"C:\Users\XPS\Downloads\Amharic Dataset\uni_dataset"
SEARCH_PATH = os.path.join(BASE_DIR, "**", "*")
dataset_files = [f for f in glob.glob(SEARCH_PATH, recursive=True) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
print(f"✅ Indexed {len(dataset_files)} images.")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    
    # 1. Process Image (Same as before)
    image = Image.open(io.BytesIO(contents)).convert('RGB')
    image = image.resize((28, 28)) 
    # image = ImageOps.invert(image)  # Invert if needed    
    image_np = np.array(image)
    
    # Add Alpha for the model inference
    h, w, _ = image_np.shape
    alpha = np.full((h, w, 1), 255, dtype=np.uint8)
    image_rgba = np.concatenate((image_np, alpha), axis=2)

    # 2. EXTRACT THE INPUT GRID (The new part)
    # We want the grayscale intensity (0.0 to 1.0)
    # This represents the "activation" of the input neurons
    grayscale = np.mean(image_np, axis=2) / 255.0
    input_layer_flat = grayscale.flatten().tolist()

    # 3. Predict
    label, conf, _, _, _ = predictor.predict_with_heatmap(image_rgba)
    features_flat = [feat.flatten().tolist() for feat in predictor.features]

    return {
        "prediction": label,
        "confidence": round(float(conf) * 100, 2),
        "input_layer": input_layer_flat, # <--- SEND THIS TO REACT
        "features": features_flat
    }

@app.get("/predict_random")
async def predict_random():
    if not dataset_files:
        return {"error": "No images found"}

    img_path = random.choice(dataset_files)
    parent_folder = os.path.basename(os.path.dirname(img_path))
    
    try:
        # 1. Open Image & Force Resize
        image = Image.open(img_path).convert('RGB')
        image = image.resize((28, 28)) 
        image_np = np.array(image)

        # 2. CHECK COLORS (The Fix)
        # We want Black Background (Low Mean). 
        # If the image is White Paper (High Mean > 127), we INVERT it.
        if np.mean(image_np) > 127:
            image_np = 255 - image_np

        # 3. Add Alpha Channel
        h, w, _ = image_np.shape
        alpha = np.full((h, w, 1), 255, dtype=np.uint8)
        image_rgba = np.concatenate((image_np, alpha), axis=2)

        # 4. PREPARE INPUT LAYER FOR FRONTEND (The Missing Piece)
        # Convert to 0.0-1.0 scale for the 3D grid
        grayscale = np.mean(image_np, axis=2) / 255.0
        input_layer_flat = grayscale.flatten().tolist()

        # 5. Run Prediction
        label, conf, _, _, _ = predictor.predict_with_heatmap(image_rgba)
        features_flat = [feat.flatten().tolist() for feat in predictor.features]

        return {
            "prediction": label,
            "true_label": parent_folder,
            "confidence": round(float(conf) * 100, 2),
            "input_layer": input_layer_flat, # <--- Sending the pixels now!
            "features": features_flat,
            "filename": os.path.basename(img_path)
        }
    except Exception as e:
        print(f"Error: {e}")
        return {"error": str(e)}