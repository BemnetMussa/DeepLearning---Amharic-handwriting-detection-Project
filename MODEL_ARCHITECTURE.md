# Model Architecture: AHCNN (Amharic Handwriting Recognition)

This document details the system architecture of the `AHCNN` model, outlining the data flow and the components within each layer.

### Overall Flow

```
Input Image (1x28x28)
       |
       v
  [Block 1] (Conv -> BN -> LeakyReLU -> MaxPool -> Dropout)
       | Output: 32x14x14
       v
  [Block 2] (Conv -> BN -> LeakyReLU -> MaxPool -> Dropout)
       | Output: 64x7x7
       v
  [Block 3] (Conv -> BN -> LeakyReLU -> MaxPool -> Dropout)
       | Output: 128x3x3
       v
  [Block 4] (Conv -> BN -> LeakyReLU -> Dropout)
       | Output: 256x3x3
       v
  [Global Average Pooling]
       | Output: 256
       v
  [Fully Connected Layer (Linear)]
       | Output: 237 (Class Scores)
       v
Prediction
```

---

### Detailed Layer Breakdown

**Input Image**
*   **Description:** A single-channel (grayscale) image of an Amharic character.
*   **Shape:** `[Channels: 1, Height: 28, Width: 28]`

---

**⬇️ Block 1: Initial Feature Extraction**
*   **Purpose:** Extracts low-level features like edges and basic shapes.
*   `Conv2d`:
    *   Input Channels: 1
    *   Output Channels: 32
    *   Kernel Size: 3x3
    *   Stride: 1
    *   Padding: 1
*   `BatchNorm2d`: Normalizes the output of the convolutional layer across the 32 feature maps.
*   `LeakyReLU`: Activation function (helps with vanishing gradient issues, especially for sparse inputs).
*   `MaxPool2d`:
    *   Kernel Size: 2x2
    *   Action: Downsamples the feature maps, reducing spatial dimensions and increasing translation invariance.
*   `Dropout`: Regularization with a 10% rate to prevent overfitting.
*   **Output Feature Map Shape:** `[Channels: 32, Height: 14, Width: 14]`

---

**⬇️ Block 2: Intermediate Feature Extraction**
*   **Purpose:** Learns more complex patterns from the features extracted in Block 1.
*   `Conv2d`:
    *   Input Channels: 32
    *   Output Channels: 64
    *   Kernel Size: 3x3
    *   Stride: 1
    *   Padding: 1
*   `BatchNorm2d`: Normalizes the output of the convolutional layer across the 64 feature maps.
*   `LeakyReLU`: Activation function.
*   `MaxPool2d`:
    *   Kernel Size: 2x2
    *   Action: Further reduces spatial dimensions.
*   `Dropout`: Regularization with a 15% rate.
*   **Output Feature Map Shape:** `[Channels: 64, Height: 7, Width: 7]`

---

**⬇️ Block 3: Higher-Level Feature Extraction**
*   **Purpose:** Captures more abstract and representative features of the Amharic characters.
*   `Conv2d`:
    *   Input Channels: 64
    *   Output Channels: 128
    *   Kernel Size: 3x3
    *   Stride: 1
    *   Padding: 1
*   `BatchNorm2d`: Normalizes the output of the convolutional layer across the 128 feature maps.
*   `LeakyReLU`: Activation function.
*   `MaxPool2d`:
    *   Kernel Size: 2x2
    *   Action: Reduces spatial dimensions to a very small size.
*   `Dropout`: Regularization with a 20% rate.
*   **Output Feature Map Shape:** `[Channels: 128, Height: 3, Width: 3]`

---

**⬇️ Block 4: Final Convolutional Features**
*   **Purpose:** Deepens the feature representation before the classification head.
*   `Conv2d`:
    *   Input Channels: 128
    *   Output Channels: 256
    *   Kernel Size: 3x3
    *   Stride: 1
    *   Padding: 1
*   `BatchNorm2d`: Normalizes the output of the convolutional layer across the 256 feature maps.
*   `LeakyReLU`: Activation function.
*   `Dropout`: Regularization with a 25% rate.
*   **Output Feature Map Shape:** `[Channels: 256, Height: 3, Width: 3]`

---

**⬇️ Classifier Head: Prediction Layers**
*   **1. `Global Average Pooling (GAP)` (`nn.AdaptiveAvgPool2d(1)`)**
    *   **Purpose:** Reduces each feature map (3x3) to a single value by averaging all its elements. This acts as a strong form of regularization, making the model less sensitive to the exact location of features and reducing the number of parameters.
    *   **Output Feature Vector Shape:** `[Features: 256]` (effectively `[256, 1, 1]`)
*   **2. `Linear (Fully Connected)` Layer (`nn.Linear(256, 237)`)**
    *   **Purpose:** Takes the 256 high-level features and transforms them into 237 output scores, one for each possible Amharic character class.
    *   **Output Scores Shape:** `[Classes: 237]`

---

**Final Prediction:** The model outputs 237 logits. Typically, a `softmax` function is applied to these logits to get probabilities for each class, and the class with the highest probability is chosen as the prediction.
