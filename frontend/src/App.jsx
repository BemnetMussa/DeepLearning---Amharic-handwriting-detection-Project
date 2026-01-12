import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Network architecture definition matching AHCNN model
const NETWORK_CONFIG = {
  layers: [
    { name: 'Input', neurons: 1, size: [28, 28], color: '#4f46e5' },
    { name: 'Block 1', neurons: 32, size: [14, 14], color: '#06b6d4' },
    { name: 'Block 2', neurons: 64, size: [7, 7], color: '#10b981' },
    { name: 'Block 3', neurons: 128, size: [3, 3], color: '#f59e0b' },
    { name: 'Block 4', neurons: 256, size: [3, 3], color: '#ef4444' },
    { name: 'GAP', neurons: 256, size: [1, 1], color: '#8b5cf6' },
    { name: 'Output', neurons: 237, size: [1, 1], color: '#ec4899' }
  ],
  spacing: 2.5 // Distance between layers
};

const NetworkVisualizer = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const layerMeshesRef = useRef([]);
  const particlesRef = useRef([]);
  
  const [modelData, setModelData] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState(null);

  // Load prediction data from JSON exported by Streamlit
  useEffect(() => {
    const loadData = async () => {
      // ------------------------------------------------------
      // STRATEGY 1: Check for data injected by Streamlit (Production)
      // ------------------------------------------------------
      // In app.py, we added: window.VIS_DATA = { ... }
      if (window.VIS_DATA) {
        console.log("🚀 Data loaded directly from Streamlit!");
        setModelData(window.VIS_DATA);
        setIsAnimating(true);
        return; 
      }

      // ------------------------------------------------------
      // STRATEGY 2: Fallback to Fetch (Local Development)
      // ------------------------------------------------------
      // This runs when you use 'npm run dev' without Streamlit
      try {
        console.log("📂 Attempting to fetch from file system (Dev Mode)...");
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error("File not found");
        
        const data = await response.json();
        setModelData(data);
        setIsAnimating(true);
      } catch (error) {
        console.warn('⚠️ No data found. If in Streamlit, ensure app.py injects window.VIS_DATA.');
      }
    };

    loadData();
    

  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    sceneRef.current = scene;

    // Camera setup - positioned for optimal layer view
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 15);
    camera.lookAt(0, 0, 0);

    // Renderer with anti-aliasing for smooth edges
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Ambient light for overall scene illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light for depth perception
    const directLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directLight.position.set(5, 10, 5);
    scene.add(directLight);

    // Create network layer blocks
    createNetworkLayers(scene);

    // Animation loop
    let animationFrame;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      
      // Update particles if animating
      if (isAnimating) {
        updateParticles();
      }

      // Subtle rotation for dynamic feel
      if (layerMeshesRef.current.length > 0) {
        layerMeshesRef.current.forEach((mesh, i) => {
          mesh.rotation.y = Math.sin(Date.now() * 0.0003 + i) * 0.05;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    // Use ResizeObserver to handle container resizing
    const resizeObserver = new ResizeObserver(entries => {
      if (!entries || entries.length === 0) {
        return;
      }
      const { width, height } = entries[0].contentRect;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    if (mountRef.current) {
      resizeObserver.observe(mountRef.current);
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrame);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Create visual representation of each layer
  const createNetworkLayers = (scene) => {
    const layers = NETWORK_CONFIG.layers;
    const totalWidth = (layers.length - 1) * NETWORK_CONFIG.spacing;
    const startX = -totalWidth / 2;

    layers.forEach((layer, index) => {
      const x = startX + index * NETWORK_CONFIG.spacing;
      
      // Scale block size based on neuron count (logarithmic for better visualization)
      const scale = 0.3 + Math.log(layer.neurons + 1) * 0.15;
      
      // Create layer block geometry
      const geometry = new THREE.BoxGeometry(scale, scale, scale);
      const material = new THREE.MeshPhongMaterial({
        color: layer.color,
        transparent: true,
        opacity: 0.7,
        emissive: layer.color,
        emissiveIntensity: 0.2
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, 0, 0);
      mesh.userData = { layer: layer.name, index };
      
      // Add wireframe for professional look
      const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true })
      );
      mesh.add(wireframe);
      
      scene.add(mesh);
      layerMeshesRef.current.push(mesh);

      // Draw connections to next layer
      if (index < layers.length - 1) {
        createConnections(scene, x, startX + (index + 1) * NETWORK_CONFIG.spacing);
      }

      // Add layer label
      createLayerLabel(scene, layer.name, x, -scale - 0.5);
    });
  };

  // Create connection lines between adjacent layers
  const createConnections = (scene, x1, x2) => {
    const material = new THREE.LineBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.15
    });

    // Create multiple connection lines for visual richness
    for (let i = 0; i < 3; i++) {
      const yOffset = (i - 1) * 0.3;
      const points = [
        new THREE.Vector3(x1, yOffset, 0),
        new THREE.Vector3(x2, yOffset, 0)
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
    }
  };

  // Create text labels for layers (using sprites)
  const createLayerLabel = (scene, text, x, y) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    
    context.fillStyle = '#ffffff';
    context.font = 'bold 24px Arial';
    context.textAlign = 'center';
    context.fillText(text, 128, 40);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(x, y, 0);
    sprite.scale.set(1.5, 0.4, 1);
    scene.add(sprite);
  };

  // Animate data flow particles through network
  const updateParticles = () => {
    if (!modelData || particlesRef.current.length === 0) {
      // Create initial particle batch
      if (modelData && isAnimating) {
        createParticleBatch();
      }
      return;
    }

    // Update particle positions along their paths
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.progress += 0.02;
      
      if (particle.progress >= 1) {
        sceneRef.current.remove(particle.mesh);
        return false;
      }

      // Interpolate position between layers
      const startX = particle.startPos.x;
      const endX = particle.endPos.x;
      particle.mesh.position.x = startX + (endX - startX) * particle.progress;
      
      // Pulse effect
      const scale = 0.05 + Math.sin(particle.progress * Math.PI) * 0.03;
      particle.mesh.scale.set(scale, scale, scale);

      return true;
    });
  };

  // Create batch of particles to show data flow
  const createParticleBatch = () => {
    const layers = NETWORK_CONFIG.layers;
    const totalWidth = (layers.length - 1) * NETWORK_CONFIG.spacing;
    const startX = -totalWidth / 2;

    for (let i = 0; i < layers.length - 1; i++) {
      const x1 = startX + i * NETWORK_CONFIG.spacing;
      const x2 = startX + (i + 1) * NETWORK_CONFIG.spacing;
      
      // Create particle geometry
      const geometry = new THREE.SphereGeometry(0.05, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.9
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x1, 0, 0);
      
      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.3
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      mesh.add(glow);
      
      sceneRef.current.add(mesh);
      
      particlesRef.current.push({
        mesh,
        startPos: new THREE.Vector3(x1, 0, 0),
        endPos: new THREE.Vector3(x2, 0, 0),
        progress: 0
      });
    }
  };

  // Trigger animation when new prediction arrives
  useEffect(() => {
    if (modelData && isAnimating) {
      // Light up layers based on feature activation
      if (modelData.features && layerMeshesRef.current.length > 0) {
        modelData.features.forEach((feature, idx) => {
          if (idx < layerMeshesRef.current.length - 1) {
            const mesh = layerMeshesRef.current[idx + 1]; // Skip input layer
            
            // Calculate average activation strength
            const avgActivation = feature.flat(2).reduce((a, b) => a + Math.abs(b), 0) / feature.flat(2).length;
            const intensity = Math.min(avgActivation * 2, 1);
            
            // Increase glow based on activation
            mesh.material.emissiveIntensity = 0.2 + intensity * 0.5;
          }
        });
      }

      // Reset animation after completion
      setTimeout(() => {
        setIsAnimating(false);
        particlesRef.current = [];
      }, 3000);
    }
  }, [modelData]);

  return (
    <div style={{ 
      width: '100%', 
      height: '700px', 
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1d2e 100%)',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Prediction overlay */}
      {modelData && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(79, 70, 229, 0.3)',
          color: 'white',
          fontFamily: 'monospace',
          minWidth: '200px'
        }}>
          <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '8px' }}>PREDICTION</div>
          <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#10b981', marginBottom: '12px' }}>
            {modelData.prediction}
          </div>
          <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '4px' }}>CONFIDENCE</div>
          <div style={{ fontSize: '20px', color: '#00d4ff' }}>
            {(modelData.confidence * 100).toFixed(1)}%
          </div>
        </div>
      )}

      {/* Status indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '12px',
        fontFamily: 'monospace'
      }}>
        {!modelData && '● Waiting for prediction...'}
        {modelData && isAnimating && '● Processing...'}
        {modelData && !isAnimating && '● Ready'}
      </div>
    </div>
  );
};

export default NetworkVisualizer;