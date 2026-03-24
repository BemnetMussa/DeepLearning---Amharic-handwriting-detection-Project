<p align="center">
  <strong>ፊ</strong>
</p>

<h1 align="center">AHCNN — Amharic Handwriting Character Recognition</h1>

<p align="center">
  A deep learning system for recognizing handwritten Amharic (Ethiopic) characters, featuring a custom CNN architecture, Grad-CAM explainability, and an interactive 3D neural network visualization built with Three.js.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#dataset">Dataset</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#usage">Usage</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#results">Results</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

---

## Overview

The Amharic script (Ge'ez script) is used by over 50 million speakers of Amharic, Tigrinya, and other Ethiopian languages. Despite being one of the most widely used writing systems in Africa, OCR tooling for Amharic remains scarce compared to Latin or CJK scripts.

**AHCNN** (Amharic Handwriting CNN) is a lightweight convolutional neural network trained to classify **237 individual Amharic characters** from 28×28 grayscale images. The project pairs the model with:

- A **FastAPI** inference server exposing prediction endpoints
- A **React + Three.js** frontend that renders the neural network in 3D and animates neuron activations in real time as the model processes each character
- **Grad-CAM** heatmaps that explain which regions of the input the model focuses on

## Features

- **237-class character recognition** covering the core Ethiopic syllabary
- **Custom CNN architecture** (4 convolutional blocks → global average pooling → classifier)
- **Grad-CAM explainability** — visualize what the model "sees" in each input
- **Real-time 3D visualization** — a Three.js scene showing neurons firing, connections lighting up, and the predicted character highlighted in a grid of all 237 classes
- **Demo / auto-pilot mode** — automatically samples random images from the dataset and animates predictions
- **Drawing canvas** — draw an Amharic character directly in the browser and get a live prediction *(canvas UI is included but commented out by default; see [Usage](#usage) to enable)*
- **FastAPI backend** with `/predict` (upload image) and `/predict_random` (random dataset sample) endpoints

## Architecture

AHCNN is a four-block convolutional network designed for small (28×28) single-channel inputs:

```
Input (1×28×28)
  │
  ▼
Block 1 ── Conv2d(1→32, 3×3) → BatchNorm → LeakyReLU → MaxPool(2×2) → Dropout(10%)
  │         Output: 32×14×14
  ▼
Block 2 ── Conv2d(32→64, 3×3) → BatchNorm → LeakyReLU → MaxPool(2×2) → Dropout(15%)
  │         Output: 64×7×7
  ▼
Block 3 ── Conv2d(64→128, 3×3) → BatchNorm → LeakyReLU → MaxPool(2×2) → Dropout(20%)
  │         Output: 128×3×3
  ▼
Block 4 ── Conv2d(128→256, 3×3) → BatchNorm → LeakyReLU → Dropout(25%)
  │         Output: 256×3×3
  ▼
Global Average Pooling → 256-d vector
  │
  ▼
Linear(256 → 237) → Softmax → Prediction
```

Dropout rates increase progressively through the blocks (10% → 25%) to regularize deeper, more parameter-heavy layers. Global average pooling before the classifier keeps the parameter count low and reduces overfitting.

For a detailed layer-by-layer breakdown, see [`MODEL_ARCHITECTURE.md`](MODEL_ARCHITECTURE.md).

## Dataset

The model is trained on an Amharic handwriting dataset organized as one folder per character class:

```
uni_dataset/
├── ሀ/
│   ├── img_001.png
│   ├── img_002.png
│   └── ...
├── ሁ/
│   └── ...
├── ...
└── ፖ/
    └── ...
```

**Statistics:**

| Metric | Value |
|---|---|
| Total samples | ~37,650 |
| Number of classes | 237 |
| Train / Validation split | 80% / 20% (30,121 / 7,531) |
| Image size | 28×28 grayscale |
| Pixel mean | 0.239 |
| Pixel std | 0.407 |
| Class imbalance ratio | ~5× (max/min) |

**Training augmentations:** random affine transforms, color jitter, light Gaussian noise (applied via torchvision transforms).

> **Note:** The dataset is not included in this repository. You can use any Amharic handwriting dataset with the same folder-per-class structure. Public datasets are available on [Kaggle](https://www.kaggle.com/) — search for "Amharic handwriting dataset."

## Getting Started

### Prerequisites

- **Python 3.9+**
- **Node.js 18+** and **npm** (for the frontend)
- A CUDA-capable GPU is optional but recommended for training

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/AHCNN-Amharic-Handwriting-Recognition.git
cd AHCNN-Amharic-Handwriting-Recognition
```

### 2. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Prepare the dataset

Download or organize your Amharic handwriting dataset in the folder-per-class structure shown above, then update the dataset path:

- **For training:** open `AHCNN.ipynb` and set the `base` variable to your dataset path
- **For the `/predict_random` endpoint:** update `BASE_DIR` in `app.py`

### 5. Train the model (or use a pretrained checkpoint)

Open and run `AHCNN.ipynb` in Jupyter. The notebook handles:

1. Dataset loading and normalization statistics
2. Train/validation split
3. Model definition and training loop
4. Checkpoint saving to `assets/amharic_ocr_v2.pth`

**Training configuration:**

| Parameter | Value |
|---|---|
| Optimizer | Adam |
| Learning rate | 0.001 |
| Scheduler | ReduceLROnPlateau |
| Batch size | 64 |
| Loss function | CrossEntropyLoss |

After training, ensure the checkpoint is saved at `assets/amharic_ocr_v2.pth` (or update the path in `app.py` and `src/config.py`).

### 6. Run the application

**Start the backend:**

```bash
uvicorn app:app --reload --host 127.0.0.1 --port 8000
```

**Start the frontend** (in a separate terminal):

```bash
cd frontend
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`). You should see the 3D neural network visualization. Click **PLAY DATASET** to watch the model classify random samples in real time.

## Usage

### API Endpoints

**`POST /predict`** — Upload an image for classification

```bash
curl -X POST http://127.0.0.1:8000/predict \
  -F "file=@path/to/character.png"
```

Response:

```json
{
  "prediction": "ሀ",
  "confidence": 97.42,
  "input_layer": [0.0, 0.12, ...],
  "features": [[...], [...], ...]
}
```

**`GET /predict_random`** — Classify a random sample from the dataset

```bash
curl http://127.0.0.1:8000/predict_random
```

Response:

```json
{
  "prediction": "ለ",
  "true_label": "ለ",
  "confidence": 94.31,
  "input_layer": [0.0, 0.08, ...],
  "features": [[...], [...], ...],
  "filename": "img_042.png"
}
```

### 3D Visualization

The frontend renders the AHCNN architecture as an interactive 3D scene:

- **Rotate / zoom / pan** — click and drag or scroll to explore the network
- **Auto-rotate** — the camera orbits automatically
- **PLAY DATASET** — toggles demo mode, which feeds random dataset images into the model every 4 seconds and animates the neuron activations, connection beams, and predicted character in real time
- **Neuron colors** — cyan = active (high activation), dark blue = idle; the winning output neuron glows bright with connections tracing back through the network

### Drawing Canvas

The drawing canvas UI is included in `frontend/src/App.jsx` but is commented out by default. To enable it, uncomment the `{/* --- TOP LEFT: INPUT (CLEANER) --- */}` block in the component's JSX. This lets you draw an Amharic character in the browser and hit **RUN ANALYSIS** to get a live prediction with the 3D visualization.

## Project Structure

```
.
├── app.py                    # FastAPI server (predict endpoints)
├── AHCNN.ipynb               # Training notebook (data prep, training loop, evaluation)
├── requirements.txt          # Python dependencies
├── MODEL_ARCHITECTURE.md     # Detailed architecture documentation
│
├── src/                      # Python source modules
│   ├── model.py              # AHCNN model definition (PyTorch)
│   ├── inference.py          # Predictor class (preprocessing, forward pass, hooks)
│   ├── explainability.py     # Grad-CAM implementation
│   ├── visualization.py      # Feature map and heatmap rendering (matplotlib/OpenCV)
│   ├── architecture_viz.py   # 3D architecture diagram (Plotly)
│   ├── config.py             # Paths and UI configuration
│   └── components.py         # Streamlit UI helpers (legacy)
│
├── frontend/                 # React + Three.js frontend
│   ├── src/
│   │   ├── App.jsx           # Main component: 3D scene, neural network, canvas
│   │   ├── main.jsx          # React entry point
│   │   └── index.css         # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── assets/
    ├── amharic_ocr_v2.pth    # Trained model checkpoint (not in repo — see Training)
    └── frontend/
        └── index.html        # Vite build output (single-file bundle)
```

## Results

| Metric | Value |
|---|---|
| Validation accuracy | **~89%** |
| Number of classes | 237 |
| Model parameters | ~600K |
| Inference device | CPU or CUDA |

The model achieves ~89% validation accuracy on an 80/20 split across 237 character classes. Given the visual similarity between many Amharic character variants (each base character has up to 7 forms), this is a strong baseline. Accuracy can be further improved with:

- Longer training schedules and learning rate tuning
- Data augmentation tuning (elastic deformations, random erosion/dilation)
- Larger or more balanced datasets
- Attention mechanisms or residual connections

## Tech Stack

| Component | Technology |
|---|---|
| Deep learning framework | PyTorch + torchvision |
| Model explainability | Grad-CAM (custom implementation) |
| Backend API | FastAPI + Uvicorn |
| Frontend framework | React 18 |
| 3D visualization | Three.js + OrbitControls |
| Drawing input | react-canvas-draw |
| Build tool | Vite |
| Notebook | Jupyter (ipynb) |

## Contributing

Contributions are welcome! Here are some areas where help would be appreciated:

- **Improving accuracy** — experiment with deeper architectures, attention, or transformers
- **Dataset expansion** — contribute more handwriting samples, especially for underrepresented characters
- **Full word/line recognition** — extend from isolated characters to connected text
- **Mobile support** — responsive UI and lighter model variants
- **Deployment** — Dockerize the full stack, add CI/CD

To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

## License

This project is currently unlicensed. If you plan to use it, please contact the author. A proper open-source license (e.g., MIT, Apache 2.0) will be added soon.

---

<p align="center">
  Built with PyTorch, FastAPI, React, and Three.js<br>
  <sub>Recognizing the beauty of Ethiopic script, one character at a time.</sub>
</p>
