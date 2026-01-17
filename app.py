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
    
    # 1. Open Image (Canvas sends White Text on Black Background)
    image = Image.open(io.BytesIO(contents)).convert('RGB')
    
    # 2. INVERT COLORS (CRITICAL FIX)
    # The model was likely trained on White Paper with Black Text.
    # The Canvas is Black Void with White Text. We must flip it.
    image = ImageOps.invert(image) 
    
    # 3. Add Alpha Channel to satisfy inference.py (H, W, 4)
    image_np = np.array(image)
    h, w, _ = image_np.shape
    alpha = np.full((h, w, 1), 255, dtype=np.uint8)
    image_rgba = np.concatenate((image_np, alpha), axis=2)

    # 4. REMOVED MANUAL NORMALIZATION (The Predictor does this!)
    # Do NOT divide by 255.0 here.

    label, conf, _, _, _ = predictor.predict_with_heatmap(image_rgba)
    features_flat = [feat.flatten().tolist() for feat in predictor.features]

    return {
        "prediction": label,
        "confidence": round(float(conf) * 100, 2),
        "features": features_flat
    }

@app.get("/predict_random")
async def predict_random():
    if not dataset_files:
        return {"error": "No images found"}

    img_path = random.choice(dataset_files)
    parent_folder = os.path.basename(os.path.dirname(img_path))
    
    try:
        # 1. Open Image
        image = Image.open(img_path).convert('RGB')
        image_np = np.array(image)

        # 2. CHECK COLORS
        # If image is White Paper (High Mean), KEEP IT.
        # If image is Dark Mode (Low Mean), Invert it.
        if np.mean(image_np) < 127:
            image_np = 255 - image_np

        # 3. Add Alpha
        h, w, _ = image_np.shape
        alpha = np.full((h, w, 1), 255, dtype=np.uint8)
        image_rgba = np.concatenate((image_np, alpha), axis=2)

        # 4. Run (No Manual Normalization)
        label, conf, _, _, _ = predictor.predict_with_heatmap(image_rgba)
        features_flat = [feat.flatten().tolist() for feat in predictor.features]

        return {
            "prediction": label,
            "true_label": parent_folder,
            "confidence": round(float(conf) * 100, 2),
            "features": features_flat,
            "filename": os.path.basename(img_path)
        }
    except Exception as e:
        print(f"Error: {e}")
        return {"error": str(e)}