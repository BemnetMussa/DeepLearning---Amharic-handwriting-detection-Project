import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Declarative network description: layer name, neuron count, color, and X position in space
const NETWORK_CONFIG = {
  layers: [
    { name: 'Input', neurons: 1, color: '#4f46e5', position: 0 },
    { name: 'Block 1', neurons: 32, color: '#06b6d4', position: 4 },
    { name: 'Block 2', neurons: 64, color: '#10b981', position: 8 },
    { name: 'Block 3', neurons: 128, color: '#f59e0b', position: 12 },
    { name: 'Block 4', neurons: 256, color: '#ef4444', position: 16 },
    { name: 'GAP', neurons: 256, color: '#8b5cf6', position: 20 },
    { name: 'Output', neurons: 237, color: '#ec4899', position: 24 }
  ]
};

// Helper: derive a prediction summary from the payload + flattened features
const summarizePrediction = (data, featuresFlat) => {
  // Prefer an explicit label from backend if present
  const label =
    data?.predicted_char ||
    data?.prediction ||
    data?.label ||
    data?.class_name ||
    data?.class ||
    null;

  // Try to use last feature map as logits
  const logits = featuresFlat?.length ? featuresFlat[featuresFlat.length - 1] : [];
  if (!logits?.length) {
    return { label: label ?? '—', index: null, prob: null };
  }

  // Softmax for a rough probability
  const maxLogit = Math.max(...logits);
  const exps = logits.map(v => Math.exp(v - maxLogit));
  const sumExp = exps.reduce((a, b) => a + b, 0);
  const probs = exps.map(v => v / (sumExp || 1));

  let maxIdx = 0;
  probs.forEach((p, i) => { if (p > probs[maxIdx]) maxIdx = i; });

  return {
    label: label ?? `Class ${maxIdx}`,
    index: maxIdx,
    prob: Math.round(probs[maxIdx] * 1000) / 10 // e.g., 87.3
  };
};

const NetworkVisualizer = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const neuronMeshesRef = useRef([]);
  const connectionLinesRef = useRef([]);
  const animationStateRef = useRef({ stage: 0, progress: 0, isComplete: false });

  // Hold preprocessed model data to avoid per-frame flattening
  const [modelData, setModelData] = useState(null);
  const [animationStage, setAnimationStage] = useState('waiting'); // waiting | animating | complete
  const [prediction, setPrediction] = useState({ label: '—', index: null, prob: null });

  // Poll backend; preprocess feature maps once per payload
  useEffect(() => {
    let polling = true;

    const loadData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        // Shallow-change check via timestamp or hash if provided; fallback to stringify
        if (!modelData || JSON.stringify(data) !== JSON.stringify(modelData.raw)) {
          const featuresFlat = Array.isArray(data.features)
            ? data.features.map(f => (Array.isArray(f) ? f.flat(Infinity) : []))
            : [];
          setModelData({ raw: data, featuresFlat });
          setPrediction(summarizePrediction(data, featuresFlat));
          setAnimationStage('animating');
          animationStateRef.current = { stage: 0, progress: 0, isComplete: false };
        }
      } catch (_) {
        /* swallow fetch errors */
      } finally {
        if (polling) setTimeout(loadData, 1000); // 1s backoff instead of tight interval
      }
    };

    loadData();
    return () => { polling = false; };
  }, [modelData]);

  // One-time Three.js scene setup and render loop
  useEffect(() => {
    if (!mountRef.current) return;

    // Reset refs in case of hot reload
    neuronMeshesRef.current = [];
    connectionLinesRef.current = [];

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    scene.fog = new THREE.Fog(0x0a0e27, 20, 50);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(10, 8, 25);
    camera.lookAt(12, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // clamp pixel ratio to reduce fragment load
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(12, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableRotate = true;
    controls.enablePan = true;
    controls.screenSpacePanning = true;
    controls.minDistance = 6;
    controls.maxDistance = 80;
    controls.autoRotate = false;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x4f46e5, 1, 50);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x06b6d4, 0.8, 50);
    pointLight2.position.set(20, 5, 10);
    scene.add(pointLight2);

    buildNeuralNetwork(scene);

    let animationFrame;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      controls.update();
      if (animationStage === 'animating') updateDramaticAnimation();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
      controls.dispose();
      // Dispose geometries/materials to avoid leaks
      neuronMeshesRef.current.forEach(layer =>
        layer.forEach(mesh => {
          mesh.geometry.dispose();
          mesh.material.dispose();
        })
      );
      connectionLinesRef.current.forEach(line => {
        line.geometry.dispose();
        line.material.dispose();
      });
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []); // build scene only once

  const buildNeuralNetwork = (scene) => {
    NETWORK_CONFIG.layers.forEach((layer, layerIdx) => {
      const neurons = createNeuronLayer(layer, layerIdx);
      neuronMeshesRef.current.push(neurons);
      neurons.forEach(neuron => scene.add(neuron));

      if (layerIdx < NETWORK_CONFIG.layers.length - 1) {
        const nextLayer = NETWORK_CONFIG.layers[layerIdx + 1];
        createConnectionsToNextLayer(scene, layer, nextLayer, layerIdx);
      }
      createLayerLabel(scene, layer);
    });
  };

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
        opacity: 0.15,
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

  // Sampled connection lines from this layer to the next to avoid O(n^2) overload
  const createConnectionsToNextLayer = (scene, currentLayer, nextLayer, layerIdx) => {
    const currentNeurons = neuronMeshesRef.current[layerIdx];
    const maxConnections = 5000; // tighter cap to reduce draw calls
    const totalPossible = currentLayer.neurons * nextLayer.neurons;
    const samplingRate = Math.min(1, maxConnections / totalPossible);

    const nextGridSize = Math.ceil(Math.sqrt(nextLayer.neurons));
    const spacing = 0.25;
    const offset = (nextGridSize - 1) * spacing / 2;

    for (let i = 0; i < currentLayer.neurons; i++) {
      const connectionsPerNeuron = Math.max(1, Math.floor(nextLayer.neurons * samplingRate));
      for (let j = 0; j < connectionsPerNeuron; j++) {
        const targetIdx = Math.floor(Math.random() * nextLayer.neurons);
        const startPos = currentNeurons[i].position;

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
          opacity: 0.08,
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

  // Drive a layer-by-layer activation animation using pre-flattened features
  const updateDramaticAnimation = () => {
    if (!modelData || !modelData.featuresFlat) return;

    const state = animationStateRef.current;
    const totalLayers = NETWORK_CONFIG.layers.length - 1; // ignore input
    const stageDuration = 0.6; // seconds per layer

    state.progress += 0.016;
    const currentStage = Math.floor(state.progress / stageDuration);
    
    if (currentStage >= totalLayers) {
      state.isComplete = true;
      setAnimationStage('complete');
      return;
    }

    state.stage = currentStage;

    for (let layerIdx = 0; layerIdx <= currentStage; layerIdx++) {
      const actualLayerIdx = layerIdx + 1;
      if (actualLayerIdx >= neuronMeshesRef.current.length) continue;

      const neurons = neuronMeshesRef.current[actualLayerIdx];
      const flatFeatures = modelData.featuresFlat[layerIdx];
      if (!flatFeatures) continue;

      const stageProgress = (state.progress - layerIdx * stageDuration) / stageDuration;
      const easedProgress = Math.min(stageProgress, 1);

      flatFeatures.forEach((activation, neuronIdx) => {
        if (neuronIdx >= neurons.length) return;
        const neuron = neurons[neuronIdx];

        const intensity = Math.abs(activation);
        const normalized = Math.min(intensity * 2, 1);

        if (normalized > 0.1) {
          neuron.userData.isActive = true;
          neuron.userData.activationStrength = normalized;
          neuron.material.opacity = 0.15 + (normalized * 0.85 * easedProgress);
          neuron.material.emissiveIntensity = normalized * 1.2 * easedProgress;

          // If this is the output layer, boost the chosen neuron
          const isOutputLayer = actualLayerIdx === NETWORK_CONFIG.layers.length - 1;
          if (isOutputLayer && prediction.index === neuronIdx) {
            neuron.material.opacity = 0.95;
            neuron.material.emissiveIntensity = 1.8 * easedProgress;
            neuron.material.color.set('#ffffff');
            neuron.material.emissive.set('#00ffc8');
          }
        }
      });
    }

    connectionLinesRef.current.forEach(line => {
      const lineLayer = line.userData.layerIdx;
      
      if (lineLayer < currentStage) {
        const sourceNeuron = neuronMeshesRef.current[lineLayer + 1]?.[line.userData.sourceIdx];
        if (sourceNeuron?.userData.isActive) {
          line.userData.isActive = true;
          line.material.opacity = 0.35;
          line.material.color.setHex(0x00d4ff);
        }
      } else if (lineLayer === currentStage) {
        const stageProgress = (state.progress - currentStage * stageDuration) / stageDuration;
        const sourceNeuron = neuronMeshesRef.current[lineLayer + 1]?.[line.userData.sourceIdx];
        if (sourceNeuron?.userData.isActive) {
          line.userData.isActive = true;
          line.material.opacity = 0.35 * Math.min(stageProgress, 1);
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
      
      {/* Status pill */}
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

      {/* Quick stats */}
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
        <div>Active Connections: <span style={{ color: '#10b981' }}>~5,000 (sampled)</span></div>
      </div>

      {/* Prediction overlay */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(15, 23, 42, 0.78)',
        backdropFilter: 'blur(10px)',
        padding: '14px 18px',
        borderRadius: '10px',
        border: '1px solid rgba(79, 70, 229, 0.25)',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '12px',
        minWidth: '180px',
        textAlign: 'right'
      }}>
        <div style={{ fontSize: '13px', marginBottom: '6px', color: '#a5b4fc' }}>Prediction</div>
        <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>
          {prediction.label}
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>
          {prediction.index !== null ? `Index ${prediction.index}` : 'Index —'}
        </div>
        <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>
          {prediction.prob !== null ? `${prediction.prob}%` : '—'}
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualizer;