from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import io
import os
import glob
import random
from PIL import Image
from src.inference import Predictor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. LOAD MODEL
print("⏳ Loading Model...")
predictor = Predictor("assets/amharic_ocr_v2.pth")
print("✅ Model Loaded")

# 2. INDEX DATASET
BASE_DIR = r"C:\Users\XPS\Downloads\Amharic Dataset\uni_dataset"
SEARCH_PATH = os.path.join(BASE_DIR, "**", "*")

print(f"⏳ Indexing dataset at: {BASE_DIR}")
dataset_files = [
    f for f in glob.glob(SEARCH_PATH, recursive=True) 
    if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp'))
]
print(f"✅ Indexed {len(dataset_files)} images.")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """ Endpoint for the Drawing Canvas """
    contents = await file.read()
    
    # ---------------------------------------------------------
    # FIX 1: Canvas must be RGBA to maintain (H, W, 4) shape
    # This prevents the 'IndexError: tuple index out of range'
    # ---------------------------------------------------------
    image = Image.open(io.BytesIO(contents)).convert('RGBA')
    image_np = np.array(image)

    # Run Inference
    label, conf, _, _, _ = predictor.predict_with_heatmap(image_np)
    features_flat = [feat.flatten().tolist() for feat in predictor.features]

    return {
        "prediction": label,
        "confidence": round(float(conf) * 100, 2),
        "features": features_flat
    }

@app.get("/predict_random")
async def predict_random():
    """ Endpoint for the Auto-Play Loop """
    if not dataset_files:
        return {"error": "No images found. Check path in server.py"}

    img_path = random.choice(dataset_files)
    parent_folder = os.path.basename(os.path.dirname(img_path))
    
    try:
        # ---------------------------------------------------------
        # FIX 2: Dataset images must be RGB to ensure (H, W, 3)
        # .convert('L') would crash it here too!
        # ---------------------------------------------------------
        image = Image.open(img_path).convert('RGB')
        image_np = np.array(image)

        # INTELLIGENT INVERSION
        # Check if image is bright (White background)
        if np.mean(image_np) > 127:
            image_np = 255 - image_np

        label, conf, _, _, _ = predictor.predict_with_heatmap(image_np)
        features_flat = [feat.flatten().tolist() for feat in predictor.features]

        return {
            "prediction": label,
            "true_label": parent_folder,
            "confidence": round(float(conf) * 100, 2),
            "features": features_flat,
            "filename": os.path.basename(img_path)
        }
    except Exception as e:
        print(f"Error processing {img_path}: {e}")
        return {"error": str(e)}