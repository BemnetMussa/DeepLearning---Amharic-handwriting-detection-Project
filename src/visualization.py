import numpy as np
import cv2
import matplotlib.pyplot as plt

def generate_feature_grid(feature_tensor, cols=8, colormap=cv2.COLORMAP_VIRIDIS):
    """
    Converts a tensor of feature maps into a cool-looking grid image.
    Using a colormap makes it look more scientific/heatmap-style.
    """
    # 1. robust check for empty input
    if feature_tensor is None: 
        return None
    if isinstance(feature_tensor, np.ndarray) and feature_tensor.size == 0:
        return None
    
    # 2. Process tensor -> numpy
    # Use .detach() to ensure gradients are removed before converting to numpy
    maps = feature_tensor.squeeze().detach().cpu().numpy()
    
    # Handle case where squeeze results in no channel dim (single map)
    if len(maps.shape) == 2:
        maps = np.expand_dims(maps, axis=0)
        
    if len(maps.shape) < 3: 
        return None 
    
    processed_maps = []
    for fmap in maps:
        # Normalize 0-255
        if fmap.max() - fmap.min() > 0:
            norm = (fmap - fmap.min()) / (fmap.max() - fmap.min())
            norm = (norm * 255).astype(np.uint8)
        else:
            norm = np.zeros_like(fmap, dtype=np.uint8)

        # Apply Color Map (Thermal look)
        colored = cv2.applyColorMap(norm, colormap)
        
        # Resize small feature maps up for visibility (e.g., 7x7 -> 64x64)
        colored = cv2.resize(colored, (64, 64), interpolation=cv2.INTER_NEAREST)
        processed_maps.append(colored)

    # 3. Stitching logic
    n_maps = len(processed_maps)
    rows = (n_maps + cols - 1) // cols
    h, w, c = processed_maps[0].shape
    
    # Create empty grid with black background
    grid = np.zeros((rows * h, cols * w, c), dtype=np.uint8)
    
    for idx, img in enumerate(processed_maps):
        r, c_idx = divmod(idx, cols)
        grid[r*h:(r+1)*h, c_idx*w:(c_idx+1)*w] = img
        
    # Convert BGR (OpenCV) to RGB (Streamlit/PIL)
    return cv2.cvtColor(grid, cv2.COLOR_BGR2RGB)

def overlay_heatmap(heatmap, original_img_array):
    """
    Overlays the Grad-CAM heatmap onto the original black/white image.
    Returns: A generated image suitable for display.
    """
    # 1. Resize heatmap to match original image size
    h, w = original_img_array.shape[:2]
    heatmap_resized = cv2.resize(heatmap, (w, h))
    
    # 2. Convert to RGB Heatmap (using TURBO colormap for high contrast)
    # Scale to 0-255
    heatmap_uint8 = (heatmap_resized * 255).astype(np.uint8)
    heatmap_color = cv2.applyColorMap(heatmap_uint8, cv2.COLORMAP_TURBO)
    
    # 3. Process Original Image
    # Convert single channel grayscale to 3-channel BGR if needed
    if len(original_img_array.shape) == 2:
        original_color = cv2.cvtColor(original_img_array, cv2.COLOR_GRAY2BGR)
    else:
        # If it's RGBA (from canvas), drop alpha or convert
        if original_img_array.shape[2] == 4:
             original_color = cv2.cvtColor(original_img_array, cv2.COLOR_RGBA2BGR)
        else:
             original_color = original_img_array

    # 4. Blend them: 40% original + 60% heatmap
    superimposed = cv2.addWeighted(original_color, 0.4, heatmap_color, 0.6, 0)
    
    # Convert BGR to RGB for Streamlit
    return cv2.cvtColor(superimposed, cv2.COLOR_BGR2RGB)