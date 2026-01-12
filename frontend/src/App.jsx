import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Network architecture with actual neuron counts
const NETWORK_CONFIG = {
  layers: [
    { name: 'Input', neurons: 1, color: '#4f46e5', position: 0 },
    { name: 'Block 1', neurons: 32, color: '#06b6d4', position: 3 },
    { name: 'Block 2', neurons: 64, color: '#10b981', position: 6 },
    { name: 'Block 3', neurons: 128, color: '#f59e0b', position: 9 },
    { name: 'Block 4', neurons: 256, color: '#ef4444', position: 12 },
    { name: 'GAP', neurons: 256, color: '#8b5cf6', position: 15 },
    { name: 'Output', neurons: 237, color: '#ec4899', position: 18 }
  ]
};

const NetworkVisualizer = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const neuronMeshesRef = useRef([]);
  const connectionLinesRef = useRef([]);
  const activePathsRef = useRef([]);
  
  const [modelData, setModelData] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Load prediction data from Streamlit
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setModelData(data);
        setIsAnimating(true);
      } catch (error) {
        // Waiting for data
      }
    };

    const interval = setInterval(loadData, 500);
    return () => clearInterval(interval);
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    scene.fog = new THREE.Fog(0x0a0e27, 20, 50);
    sceneRef.current = scene;

    // Camera setup with better angle for 3D view
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(10, 8, 25);
    camera.lookAt(9, 0, 0);
    cameraRef.current = camera;

    // Renderer with anti-aliasing
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4f46e5, 1, 50);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 0.8, 50);
    pointLight2.position.set(20, 5, 10);
    scene.add(pointLight2);

    // Build the network
    buildNeuralNetwork(scene);

    // Mouse interaction for camera control
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrame;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      // Smooth camera orbit based on mouse
      const time = Date.now() * 0.0001;
      camera.position.x = Math.cos(time + mouseRef.current.x * 0.5) * 25 + 9;
      camera.position.z = Math.sin(time + mouseRef.current.x * 0.5) * 25;
      camera.position.y = 8 + mouseRef.current.y * 5;
      camera.lookAt(9, 0, 0);

      // Update active paths animation
      if (isAnimating) {
        updateActivePaths();
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Build complete neural network with individual neurons
  const buildNeuralNetwork = (scene) => {
    NETWORK_CONFIG.layers.forEach((layer, layerIdx) => {
      const neurons = createNeuronLayer(layer, layerIdx);
      neuronMeshesRef.current.push(neurons);
      
      neurons.forEach(neuron => scene.add(neuron));

      // Create connections to next layer
      if (layerIdx < NETWORK_CONFIG.layers.length - 1) {
        const nextLayer = NETWORK_CONFIG.layers[layerIdx + 1];
        createSmartConnections(scene, layer, nextLayer, layerIdx);
      }

      // Add layer label
      createLayerLabel(scene, layer);
    });
  };

  // Create individual neurons for a layer
  const createNeuronLayer = (layer, layerIdx) => {
    const neurons = [];
    const neuronSize = 0.08;
    
    // Calculate grid layout based on neuron count
    const gridSize = Math.ceil(Math.sqrt(layer.neurons));
    const spacing = 0.25;
    const offset = (gridSize - 1) * spacing / 2;

    for (let i = 0; i < layer.neurons; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      
      // Position neurons in a grid
      const x = layer.position;
      const y = row * spacing - offset;
      const z = col * spacing - offset;

      const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
      const material = new THREE.MeshPhongMaterial({
        color: layer.color,
        transparent: true,
        opacity: 0.8,
        emissive: layer.color,
        emissiveIntensity: 0.2
      });

      const neuron = new THREE.Mesh(geometry, material);
      neuron.position.set(x, y, z);
      neuron.userData = { 
        layer: layer.name, 
        layerIdx,
        neuronIdx: i,
        baseColor: layer.color,
        baseEmissive: 0.2
      };

      neurons.push(neuron);
    }

    return neurons;
  };

  // Create smart sampled connections between layers
  const createSmartConnections = (scene, currentLayer, nextLayer, layerIdx) => {
    const currentNeurons = neuronMeshesRef.current[layerIdx];
    const maxConnections = 10000; // Performance limit
    const totalPossible = currentLayer.neurons * nextLayer.neurons;
    const samplingRate = Math.min(1, maxConnections / totalPossible);

    // Sample connections intelligently
    for (let i = 0; i < currentLayer.neurons; i++) {
      const connectionsPerNeuron = Math.ceil(nextLayer.neurons * samplingRate);
      
      for (let j = 0; j < connectionsPerNeuron; j++) {
        // Sample next layer neurons
        const targetIdx = Math.floor(Math.random() * nextLayer.neurons);
        
        const startPos = currentNeurons[i].position;
        const endPos = new THREE.Vector3(
          nextLayer.position,
          (targetIdx % Math.ceil(Math.sqrt(nextLayer.neurons))) * 0.25 - Math.ceil(Math.sqrt(nextLayer.neurons)) * 0.125,
          Math.floor(targetIdx / Math.ceil(Math.sqrt(nextLayer.neurons))) * 0.25 - Math.ceil(Math.sqrt(nextLayer.neurons)) * 0.125
        );

        const points = [startPos, endPos];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0x4f46e5,
          transparent: true,
          opacity: 0.05, // Very subtle by default
          linewidth: 1
        });

        const line = new THREE.Line(geometry, material);
        line.userData = { 
          layerIdx, 
          sourceIdx: i, 
          targetIdx,
          isActive: false 
        };
        
        scene.add(line);
        connectionLinesRef.current.push(line);
      }
    }
  };

  // Create layer labels
  const createLayerLabel = (scene, layer) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 128;

    context.fillStyle = '#ffffff';
    context.font = 'bold 36px Arial';
    context.textAlign = 'center';
    context.fillText(layer.name, 256, 50);
    context.font = '24px Arial';
    context.fillStyle = layer.color;
    context.fillText(`${layer.neurons} neurons`, 256, 90);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true,
      opacity: 0.9 
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(layer.position, -4, 0);
    sprite.scale.set(2, 0.5, 1);
    scene.add(sprite);
  };

  // Animate active neural paths during prediction
  const updateActivePaths = () => {
    if (!modelData || !modelData.features) return;

    // Reset all neurons to base state
    neuronMeshesRef.current.forEach(neurons => {
      neurons.forEach(neuron => {
        neuron.material.emissiveIntensity = neuron.userData.baseEmissive;
        neuron.material.opacity = 0.8;
      });
    });

    // Light up neurons based on activation strength
    modelData.features.forEach((featureMap, layerIdx) => {
      if (layerIdx + 1 >= neuronMeshesRef.current.length) return;
      
      const neurons = neuronMeshesRef.current[layerIdx + 1];
      const flatFeatures = featureMap.flat(Infinity);
      
      flatFeatures.forEach((activation, neuronIdx) => {
        if (neuronIdx >= neurons.length) return;
        
        const intensity = Math.abs(activation);
        const normalized = Math.min(intensity * 2, 1);
        
        neurons[neuronIdx].material.emissiveIntensity = 0.2 + normalized * 0.8;
        neurons[neuronIdx].material.opacity = 0.8 + normalized * 0.2;
      });
    });

    // Pulse effect on connections
    const pulseTime = Date.now() * 0.002;
    connectionLinesRef.current.forEach((line, idx) => {
      if (idx % 5 === 0) { // Pulse only subset for performance
        line.material.opacity = 0.05 + Math.sin(pulseTime + idx * 0.1) * 0.03;
      }
    });
  };

  // Trigger animation when new prediction arrives
  useEffect(() => {
    if (modelData && isAnimating) {
      setTimeout(() => setIsAnimating(false), 5000);
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
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(79, 70, 229, 0.3)',
          color: 'white',
          fontFamily: 'monospace',
          minWidth: '200px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
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

      {/* Controls hint */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '12px',
        fontFamily: 'monospace'
      }}>
        {!modelData && '● Waiting for prediction...'}
        {modelData && isAnimating && '● Neural pathways active...'}
        {modelData && !isAnimating && '● Move mouse to rotate view'}
      </div>

      {/* Network stats */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(10px)',
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid rgba(79, 70, 229, 0.2)',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '11px'
      }}>
        <div style={{ marginBottom: '4px' }}>Total Neurons: <span style={{ color: '#06b6d4' }}>717</span></div>
        <div>Connections: <span style={{ color: '#10b981' }}>~10,000</span></div>
      </div>
    </div>
  );
};

export default NetworkVisualizer;