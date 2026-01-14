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
  const animationStateRef = useRef({ stage: 0, progress: 0, isComplete: false });
  
  const [modelData, setModelData] = useState(null);
  const [animationStage, setAnimationStage] = useState('waiting'); // waiting, animating, complete

  // Load prediction data from Streamlit
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        
        // Only trigger new animation if data changed
        if (JSON.stringify(data) !== JSON.stringify(modelData)) {
          setModelData(data);
          setAnimationStage('animating');
          animationStateRef.current = { stage: 0, progress: 0, isComplete: false };
        }
      } catch (error) {
        // Waiting for data
      }
    };

    const interval = setInterval(loadData, 500);
    return () => clearInterval(interval);
  }, [modelData]);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    scene.fog = new THREE.Fog(0x0a0e27, 20, 50);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(10, 8, 25);
    camera.lookAt(9, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4f46e5, 1, 50);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 0.8, 50);
    pointLight2.position.set(20, 5, 10);
    scene.add(pointLight2);

    // Build neural network
    buildNeuralNetwork(scene);

    // Slow automatic rotation for cinematic effect
    let autoRotationAngle = 0;

    // Animation loop
    let animationFrame;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      // Slow auto-rotation
      autoRotationAngle += 0.0003;
      camera.position.x = Math.cos(autoRotationAngle) * 25 + 9;
      camera.position.z = Math.sin(autoRotationAngle) * 25;
      camera.lookAt(9, 0, 0);

      // Update dramatic activation animation
      if (animationStage === 'animating') {
        updateDramaticAnimation();
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
      cancelAnimationFrame(animationFrame);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [animationStage]);

  // Build neural network with all neurons and connections
  const buildNeuralNetwork = (scene) => {
    NETWORK_CONFIG.layers.forEach((layer, layerIdx) => {
      const neurons = createNeuronLayer(layer, layerIdx);
      neuronMeshesRef.current.push(neurons);
      
      neurons.forEach(neuron => scene.add(neuron));

      // Create connections to next layer
      if (layerIdx < NETWORK_CONFIG.layers.length - 1) {
        const nextLayer = NETWORK_CONFIG.layers[layerIdx + 1];
        createConnectionsToNextLayer(scene, layer, nextLayer, layerIdx);
      }

      // Add layer label
      createLayerLabel(scene, layer);
    });
  };

  // Create individual neurons for a layer
  const createNeuronLayer = (layer, layerIdx) => {
    const neurons = [];
    const neuronSize = 0.08;
    
    const gridSize = Math.ceil(Math.sqrt(layer.neurons));
    const spacing = 0.25;
    const offset = (gridSize - 1) * spacing / 2;

    for (let i = 0; i < layer.neurons; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      
      const x = layer.position;
      const y = row * spacing - offset;
      const z = col * spacing - offset;

      const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
      const material = new THREE.MeshPhongMaterial({
        color: layer.color,
        transparent: true,
        opacity: 0.15, // Dimmed by default
        emissive: layer.color,
        emissiveIntensity: 0
      });

      const neuron = new THREE.Mesh(geometry, material);
      neuron.position.set(x, y, z);
      neuron.userData = { 
        layer: layer.name, 
        layerIdx,
        neuronIdx: i,
        baseColor: layer.color,
        isActive: false,
        activationStrength: 0
      };

      neurons.push(neuron);
    }

    return neurons;
  };

  // Create smart sampled connections between layers
  const createConnectionsToNextLayer = (scene, currentLayer, nextLayer, layerIdx) => {
    const currentNeurons = neuronMeshesRef.current[layerIdx];
    const maxConnections = 10000;
    const totalPossible = currentLayer.neurons * nextLayer.neurons;
    const samplingRate = Math.min(1, maxConnections / totalPossible);

    const nextGridSize = Math.ceil(Math.sqrt(nextLayer.neurons));
    const spacing = 0.25;
    const offset = (nextGridSize - 1) * spacing / 2;

    for (let i = 0; i < currentLayer.neurons; i++) {
      const connectionsPerNeuron = Math.ceil(nextLayer.neurons * samplingRate);
      
      for (let j = 0; j < connectionsPerNeuron; j++) {
        const targetIdx = Math.floor(Math.random() * nextLayer.neurons);
        
        const startPos = currentNeurons[i].position;
        
        // Calculate target position
        const targetRow = Math.floor(targetIdx / nextGridSize);
        const targetCol = targetIdx % nextGridSize;
        const endPos = new THREE.Vector3(
          nextLayer.position,
          targetRow * spacing - offset,
          targetCol * spacing - offset
        );

        const points = [startPos, endPos];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0x4f46e5,
          transparent: true,
          opacity: 0.08, // Very dim by default
          linewidth: 1
        });

        const line = new THREE.Line(geometry, material);
        line.userData = { 
          layerIdx, 
          sourceIdx: i, 
          targetIdx,
          isActive: false,
          baseOpacity: 0.08
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

    context.fillStyle = 'rgba(255, 255, 255, 0.6)';
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
      opacity: 0.7
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(layer.position, -4, 0);
    sprite.scale.set(2, 0.5, 1);
    scene.add(sprite);
  };

  // Dramatic staged activation animation
  const updateDramaticAnimation = () => {
    if (!modelData || !modelData.features) return;

    const state = animationStateRef.current;
    const totalLayers = NETWORK_CONFIG.layers.length - 1; // Exclude input
    const stageDuration = 0.6; // 0.6 seconds per layer (total ~4 seconds for 7 layers)

    // Increment animation progress
    state.progress += 0.016; // ~60fps

    // Calculate current stage (which layer we're lighting up)
    const currentStage = Math.floor(state.progress / stageDuration);
    
    if (currentStage >= totalLayers) {
      // Animation complete - freeze the active state
      state.isComplete = true;
      setAnimationStage('complete');
      return;
    }

    state.stage = currentStage;

    // Light up neurons layer by layer
    for (let layerIdx = 0; layerIdx <= currentStage; layerIdx++) {
      const actualLayerIdx = layerIdx + 1; // Skip input layer in rendering
      if (actualLayerIdx >= neuronMeshesRef.current.length) continue;

      const neurons = neuronMeshesRef.current[actualLayerIdx];
      const featureMap = modelData.features[layerIdx];
      
      if (!featureMap) continue;

      const flatFeatures = featureMap.flat(Infinity);
      const stageProgress = (state.progress - layerIdx * stageDuration) / stageDuration;
      const easedProgress = Math.min(stageProgress, 1);

      // Activate neurons based on feature strength
      flatFeatures.forEach((activation, neuronIdx) => {
        if (neuronIdx >= neurons.length) return;
        
        const neuron = neurons[neuronIdx];
        const intensity = Math.abs(activation);
        const normalized = Math.min(intensity * 2, 1);

        // Only light up if activation is significant
        if (normalized > 0.1) {
          neuron.userData.isActive = true;
          neuron.userData.activationStrength = normalized;
          
          // Dramatic glow increase
          neuron.material.opacity = 0.15 + (normalized * 0.85 * easedProgress);
          neuron.material.emissiveIntensity = normalized * 1.2 * easedProgress;
        }
      });
    }

    // Light up connections progressively
    connectionLinesRef.current.forEach(line => {
      const lineLayer = line.userData.layerIdx;
      
      if (lineLayer < currentStage) {
        // Fully lit for completed stages
        const sourceNeuron = neuronMeshesRef.current[lineLayer + 1]?.[line.userData.sourceIdx];
        if (sourceNeuron?.userData.isActive) {
          line.userData.isActive = true;
          line.material.opacity = 0.4; // Active connections stay bright
          line.material.color.setHex(0x00d4ff);
        }
      } else if (lineLayer === currentStage) {
        // Currently animating stage
        const stageProgress = (state.progress - currentStage * stageDuration) / stageDuration;
        const sourceNeuron = neuronMeshesRef.current[lineLayer + 1]?.[line.userData.sourceIdx];
        
        if (sourceNeuron?.userData.isActive) {
          line.userData.isActive = true;
          line.material.opacity = 0.4 * Math.min(stageProgress, 1);
          line.material.color.setHex(0x00d4ff);
        }
      }
    });
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1d2e 100%)',
      position: 'relative'
    }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Status indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '13px',
        fontFamily: 'monospace',
        background: 'rgba(15, 23, 42, 0.6)',
        padding: '12px 20px',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)'
      }}>
        {animationStage === 'waiting' && '● Network ready - Waiting for prediction...'}
        {animationStage === 'animating' && '● Neural pathways activating...'}
        {animationStage === 'complete' && '● Active decision path frozen'}
      </div>

      {/* Network stats */}
      <div style={{
        position: 'absolute',
        top: '80px',
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
        <div>Active Connections: <span style={{ color: '#10b981' }}>~10,000</span></div>
      </div>
    </div>
  );
};

export default NetworkVisualizer;