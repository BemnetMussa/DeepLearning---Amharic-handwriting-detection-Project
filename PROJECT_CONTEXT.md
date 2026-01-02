# Project Context: Amharic Handwriting Recognition (AHCNN)

This document provides a summary of the Amharic Handwriting Recognition project based on the `AHCNN.ipynb` notebook.

## 1. Project Goal

The primary objective of this project is to develop and train a Convolutional Neural Network (CNN) to accurately recognize and classify handwritten Amharic characters. It is a multi-class image classification task involving 237 distinct characters.

## 2. Core Technologies

-   **Framework:** PyTorch
-   **Core Libraries:** `torch.nn`, `torch.utils.data`, `torchvision.transforms`
-   **Data Handling:** `numpy`, `PIL` (Pillow), `os`
-   **Visualization:** `matplotlib`
-   **Evaluation:** `sklearn.metrics` (for confusion matrix)

## 3. Dataset

-   **Name:** Amharic Dataset
-   **Source Location:** `Amharic Dataset/uni_dataset`
-   **Structure:** The dataset is organized by class, with each of the 237 characters contained in its own folder. The folder names serve as the ground-truth labels.
-   **Image Specs:** 28x28 grayscale images.

## 4. Data Preprocessing & Preparation

A custom `AmharicHandwritingDataset` class is implemented to handle data loading and preprocessing.

-   **Normalization:** A crucial step is the dataset-wide mean-standard deviation normalization. The calculated mean is `0.239` and the standard deviation is `0.407`. Every image is normalized using these values to stabilize training.
-   **Data Splitting:** The dataset is divided into an 80% training set and a 20% validation set.
-   **Data Augmentation (Training Set only):** To improve generalization, the training data is augmented with:
    -   Random rotations (±7 degrees)
    -   Random translations (±5%)
    -   Random scaling (95% to 105%)
    -   Slight brightness and contrast adjustments
    -   Addition of minor Gaussian noise

## 5. Model Architecture: `AHCNN`

The model is a custom-built CNN designed for this specific task.

-   **Structure:** It consists of four sequential convolutional blocks followed by a classifier head.
    -   `Block 1`: Conv (1 → 32 channels) → BatchNorm → LeakyReLU → MaxPool → Dropout
    -   `Block 2`: Conv (32 → 64 channels) → BatchNorm → LeakyReLU → MaxPool → Dropout
    -   `Block 3`: Conv (64 → 128 channels) → BatchNorm → LeakyReLU → MaxPool → Dropout
    -   `Block 4`: Conv (128 → 256 channels) → BatchNorm → LeakyReLU → Dropout
-   **Classifier Head:**
    -   **Global Average Pooling (GAP):** `nn.AdaptiveAvgPool2d(1)` is used to reduce each feature map to a single value, making the model more robust to spatial variations and reducing overfitting.
    -   **Final Layer:** A single `nn.Linear` layer classifies the 256 features from the GAP layer into the **237** character classes.

## 6. Training Procedure

-   **Loss Function:** `torch.nn.CrossEntropyLoss` (standard for multi-class classification).
-   **Optimizer:** `torch.optim.Adam` with an initial learning rate of `0.001`.
-   **Learning Rate Scheduler:** `torch.optim.lr_scheduler.ReduceLROnPlateau` is used to decrease the learning rate if the validation loss stagnates, preventing overshooting and helping convergence.
-   **Device:** The model is trained on a CUDA-enabled GPU if available.

## 7. Evaluation & Results

-   **Metrics:** The model's performance is tracked using Training and Validation Loss & Accuracy. The final reported accuracy is approximately **89.11% on the validation set**.
-   **Visualization:** A comprehensive `master_evaluation_plot` function is used to visualize:
    1.  Loss and accuracy curves over epochs.
    2.  Sample predictions with their true and predicted Amharic labels, color-coded for correctness.
-   **Error Analysis:** A confusion matrix is generated to identify which characters are most frequently confused with each other. This allows for targeted analysis of model weaknesses.

## 8. Model Persistence

-   The final trained model is saved to `amharic_ocr_v2_85acc.pth`.
-   The saved checkpoint includes the model's state dictionary, the `class_to_idx` mapping, and other architectural metadata for future inference or further training.
