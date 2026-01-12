import plotly.graph_objects as go
import numpy as np
import cv2

def plot_3d_network_layers(input_img, features, prediction_label):
    """
    Creates a 3D interactive plot showing the neural network layers stacked vertically.
    """
    fig = go.Figure()
    
    # Configuration
    LAYER_GAP = 15
    IMG_SIZE = 28
    colors = ['gray', 'electric', 'viridis', 'magma', 'plasma']

    # --- 1. Plot Input Image (Bottom Layer) ---
    # Resize input to make grid manageable
    h, w = input_img.shape
    x = np.linspace(0, w, w)
    y = np.linspace(0, h, h)
    X, Y = np.meshgrid(x, y)
    Z = np.zeros_like(X) # Z = 0
    
    # Add input image surface
    fig.add_trace(go.Surface(
        z=Z, x=X, y=Y,
        surfacecolor=np.flipud(input_img),
        colorscale='gray',
        showscale=False,
        opacity=0.9,
        name="Input"
    ))
    
    # Add Label for Layer
    fig.add_trace(go.Scatter3d(
        x=[0], y=[0], z=[0],
        mode='text', text=["INPUT LAYER"],
        textposition="bottom center",
        textfont=dict(color='white', size=10)
    ))

    # --- 2. Plot Feature Layers (Middle Layers) ---
    # We visualize the "Average Activation" of each block to represent the layer
    current_z = 0
    
    # Limit to first 3 blocks to keep plot fast
    blocks_to_show = features[:3] 
    
    for i, fmap_tensor in enumerate(blocks_to_show):
        current_z += LAYER_GAP
        
        # Process tensor: Get average activation across channels
        # Shape: (1, Channels, H, W) -> (H, W)
        fmap_np = fmap_tensor.squeeze().detach().cpu().numpy()
        avg_fmap = np.mean(fmap_np, axis=0)
        
        # Normalize for visualization
        avg_fmap = cv2.resize(avg_fmap, (28, 28))
        norm_fmap = (avg_fmap - avg_fmap.min()) / (avg_fmap.max() - avg_fmap.min() + 1e-5)
        
        Z_layer = np.full_like(X, current_z)
        
        # Add Layer Surface
        fig.add_trace(go.Surface(
            z=Z_layer, x=X, y=Y,
            surfacecolor=np.flipud(norm_fmap),
            colorscale=colors[i+1],
            showscale=False,
            opacity=0.85,
            name=f"Conv Block {i+1}"
        ))
        
        # Draw Lines connecting corners (Simulate Neural Connections)
        # Connect (0,0) of prev layer to (0,0) of this layer
        prev_z = current_z - LAYER_GAP
        fig.add_trace(go.Scatter3d(
            x=[0, 0, 28, 28], 
            y=[0, 28, 0, 28], 
            z=[prev_z, current_z, prev_z, current_z],
            mode='lines',
            line=dict(color='rgba(100,100,100,0.3)', width=2),
            hoverinfo='none'
        ))
        
        # Label
        fig.add_trace(go.Scatter3d(
            x=[0], y=[-5], z=[current_z],
            mode='text', text=[f"BLOCK {i+1}"],
            textfont=dict(color='white', size=10)
        ))

    # --- 3. Plot Final Output (Top Layer) ---
    current_z += LAYER_GAP
    
    # Draw a symbolic "Decision Node"
    fig.add_trace(go.Scatter3d(
        x=[14], y=[14], z=[current_z],
        mode='markers+text',
        marker=dict(size=20, color='#10b981', symbol='diamond'),
        text=[f"PREDICTION:\n{prediction_label}"],
        textfont=dict(color='#10b981', size=14, family="Arial Black"),
        textposition="top center",
        name="Output"
    ))
    
    # Cone representing data condensing to a decision
    fig.add_trace(go.Scatter3d(
        x=[14, 0, 14, 28, 14, 0, 14, 28], 
        y=[14, 0, 14, 0, 14, 28, 14, 28], 
        z=[current_z, current_z-LAYER_GAP, current_z, current_z-LAYER_GAP, current_z, current_z-LAYER_GAP, current_z, current_z-LAYER_GAP],
        mode='lines',
        line=dict(color='#6366f1', width=3),
        hoverinfo='none'
    ))

    # --- Style Settings ---
    fig.update_layout(
        title="",
        scene=dict(
            xaxis=dict(visible=False),
            yaxis=dict(visible=False),
            zaxis=dict(visible=False, range=[-1, current_z+10]),
            bgcolor='rgba(0,0,0,0)',
            camera=dict(
                eye=dict(x=1.5, y=1.5, z=1.0) # Isometric view
            )
        ),
        margin=dict(l=0, r=0, b=0, t=0),
        paper_bgcolor='rgba(0,0,0,0)',
        height=500
    )
    
    return fig