import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CanvasDraw from 'react-canvas-draw';

// Amharic characters in Ethiopian order (237)
const CHARACTERS = [
  'ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሐ',
  'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሠ', 'ሡ', 'ሢ',
  'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሰ', 'ሱ', 'ሲ', 'ሳ',
  'ሴ', 'ስ', 'ሶ', 'ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ',
  'ቅ', 'ቆ', 'በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ',
  'ቮ', 'ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ',
  'ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኘ',
  'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ', 'ከ',
  'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዂ', 'ወ', 'ዉ', 'ዊ',
  'ዋ', 'ዌ', 'ው', 'ዎ', 'ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ', 'ዘ', 'ዙ', 'ዚ', 'ዛ',
  'ዜ', 'ዝ', 'ዞ', 'ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'የ', 'ዩ', 'ዪ', 'ያ', 'ዬ',
  'ይ', 'ዮ', 'ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ',
  'ጆ', 'ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ',
  'ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጸ',
  'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፈ', 'ፉ',
  'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ'
];

const NETWORK_CONFIG = {
  layers: [
    { name: 'Input', neurons: 784, color: '#ffffff', position: -4 },
    { name: 'Block 1', neurons: 32, color: '#333333', position: 3 },
    { name: 'Block 2', neurons: 64, color: '#333333', position: 6 },
    { name: 'Block 3', neurons: 128, color: '#333333', position: 9 },
    { name: 'Block 4', neurons: 256, color: '#333333', position: 12 },
    { name: 'Output', neurons: 237, color: '#333333', position: 15 }
  ]
};

const defaultPrediction = {
  label: '—',
  index: null,
  prob: null,
  logit: null,
  top5: [],
  activeCount: 0,
  total: 0
};

const summarizePrediction = (data, featuresFlat) => {
  const label =
    data?.predicted_char || data?.prediction || data?.label || data?.class_name || data?.class || null;
  const logits = featuresFlat?.length ? featuresFlat[featuresFlat.length - 1] : [];

  if (!logits?.length) {
    return { ...defaultPrediction, label: label ?? '—' };
  }

  const maxLogit = Math.max(...logits);
  const exps = logits.map(v => Math.exp(v - maxLogit));
  const sumExp = exps.reduce((a, b) => a + b, 0) || 1;
  const probs = exps.map(v => v / sumExp);

  const top5 = probs
    .map((p, i) => ({ i, p }))
    .sort((a, b) => b.p - a.p)
    .slice(0, 5)
    .map(({ i, p }) => ({ index: i, prob: Math.round(p * 1000) / 10 }));

  const maxIdx = top5[0]?.index ?? 0;
  const activeCount = logits.filter(v => Math.abs(v) > 0.1).length;

  return {
    label: label ?? CHARACTERS[maxIdx] ?? `Class ${maxIdx}`,
    index: maxIdx,
    prob: top5[0]?.prob ?? null,
    logit: Math.round(logits[maxIdx] * 1000) / 1000,
    top5,
    activeCount,
    total: logits.length
  };
};


const NetworkVisualizer = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const inputScreenRef = useRef(null);

  const neuronMeshesRef = useRef([]);
  const characterMeshesRef = useRef([]);
  const gridCellsRef = useRef([]);
  const connectionLinesRef = useRef([]);
  const charConnectionsRef = useRef([]);

  const animationStateRef = useRef({ progress: 0, isComplete: false });
  const clockRef = useRef(performance.now());
  const stageRef = useRef('waiting');
  const lastPredictionKeyRef = useRef(null);

  const modelDataRef = useRef(null);
  const predictionRef = useRef(defaultPrediction);
  const canvasRef = useRef(null);

  const [animationStage, setAnimationStage] = useState('waiting');
  const [prediction, setPrediction] = useState(defaultPrediction);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const resetVisualState = () => {
    neuronMeshesRef.current.flat().forEach(neuron => {
      neuron.userData.isActive = false;
      neuron.userData.isFinalPath = false;
      neuron.material.opacity = neuron.userData.baseOpacity ?? 0.25;
      neuron.material.emissiveIntensity = 0;
      neuron.material.color.set(neuron.userData.baseColor ?? new THREE.Color('#333333'));
      neuron.scale.setScalar(1);
    });

    connectionLinesRef.current.forEach(line => {
      line.userData.isActive = false;
      line.material.opacity = line.userData.baseOpacity ?? 0.08;
      line.material.color.setHex(0x4f46e5);
    });

    charConnectionsRef.current.forEach(line => {
      line.userData.isActive = false;
      line.material.opacity = line.userData.baseOpacity ?? 0.05;
      line.material.color.setHex(0x4f46e5);
    });

    characterMeshesRef.current.forEach(char => {
      char.material.opacity = 0.8;
      char.material.color.setHex(0xffffff);
      char.scale.set(0.25, 0.25, 1);
    });

    gridCellsRef.current.forEach(cell => {
   cell.material.opacity = 0.6; // Back to visible frame
      cell.material.color.setHex(0x666666);
    });
  };

  const updateInputScreen = pixels => {
    if (!inputScreenRef.current) return;

    const size = 28;
    const data = new Uint8Array(size * size * 4);

    for (let i = 0; i < size * size; i += 1) {
      const row = Math.floor(i / size);
      const col = i % size;
      const invertedRow = size - 1 - row;
      const newIdx = invertedRow * size + col;
      const stride = newIdx * 4;
      const val = Math.floor((pixels?.[i] || 0) * 255);

      data[stride] = val;
      data[stride + 1] = val;
      data[stride + 2] = val;
      data[stride + 3] = 255;
    }

    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    inputScreenRef.current.material.map?.dispose();
    inputScreenRef.current.material.map = texture;
    inputScreenRef.current.material.needsUpdate = true;
  };

  const highlightPredictedCharacter = summary => {
    if (summary.index === null) return;

    characterMeshesRef.current.forEach((char, idx) => {
      char.material.opacity = 0.3;
      char.material.color.setHex(0xffffff);
      char.scale.set(0.25, 0.25, 1);

      if (summary.index === idx) {
        char.material.opacity = 1;
        char.material.color.setHex(0x00ffff);
        char.scale.set(0.4, 0.4, 1);
      }
    });

    summary.top5.forEach((item, rank) => {
      const char = characterMeshesRef.current[item.index];
      if (!char) return;
      const intensity = 0.5 + (0.5 * (5 - rank)) / 5;
      char.material.opacity = intensity;
    });

    charConnectionsRef.current.forEach(line => {
      if (line.userData.targetCharIndex === summary.index) {
        line.material.opacity = 0.8;
        line.material.color.setHex(0x00ffff);
      } else {
        line.material.opacity = 0.02;
        line.material.color.setHex(0x4f46e5);
      }
    });
  };

  const highlightDecisionPath = () => {
    const data = modelDataRef.current;
    const summary = predictionRef.current;
    if (!data || !summary) return;

    const threshold = 0.15;

    neuronMeshesRef.current.forEach((layerNeurons, lIdx) => {
      const features = data.featuresFlat[lIdx] || [];
      layerNeurons.forEach((neuron, nIdx) => {
        const val = Math.abs(features[nIdx] ?? 0);
        const isHot = val > threshold;
        neuron.userData.isFinalPath = isHot;
        neuron.material.emissiveIntensity = isHot ? 2.0 : 0;
        neuron.material.emissive.setHex(isHot ? 0x00ffff : 0x000000);
        neuron.material.opacity = isHot ? 1 : 0.15;
      });
    });

    connectionLinesRef.current.forEach(line => {
      const lIdx = line.userData.layerIdx;
      const src = neuronMeshesRef.current[lIdx]?.[line.userData.sourceIdx];
      const tgt = neuronMeshesRef.current[lIdx + 1]?.[line.userData.targetIdx];
      const onPath = src?.userData.isFinalPath && tgt?.userData.isFinalPath;
      line.material.opacity = onPath ? 0.8 : 0.03;
      line.material.color.setHex(onPath ? 0x00ffff : 0x4f46e5);
    });

    highlightPredictedCharacter(summary);
  };

const updateDramaticAnimation = () => {
    const data = modelDataRef.current;
    if (!data || !data.featuresFlat) return;

    // NO TIME CALCULATIONS. JUST RENDER.

    const numLayers = neuronMeshesRef.current.length;

    // 1. RENDER NEURONS
    neuronMeshesRef.current.forEach((layerNeurons, lIdx) => {
      const features = data.featuresFlat[lIdx] || [];

      // --- INPUT LAYER ---
      if (lIdx === 0) {
        // Input is handled by the Holographic Screen texture, 
        // but we ensure the "Anchors" are set correctly for lines
        layerNeurons.forEach((neuron, nIdx) => {
           const val = features[nIdx] ?? 0;
           neuron.userData.isActive = val > 0.1; // Threshold for connections
        });
        return;
      }

      // --- OUTPUT LAYER (Winner Takes All) ---
      if (lIdx === numLayers - 1) {
        layerNeurons.forEach((neuron, nIdx) => {
          const isWinner = predictionRef.current?.index === nIdx;
          const isTop5 = predictionRef.current?.top5.some(t => t.index === nIdx);

          if (isWinner) {
            // WINNER: Bright White
            neuron.material.color.setHex(0xffffff);
            neuron.material.emissive.setHex(0xffffff);
            neuron.material.emissiveIntensity = 2.0;
            neuron.material.opacity = 1.0;
            neuron.scale.setScalar(1.5);
            neuron.userData.isActive = true;
          } else if (isTop5) {
            // RUNNER UP: Dim Grey
            neuron.material.color.setHex(0x888888);
            neuron.material.emissive.setHex(0x444444);
            neuron.material.emissiveIntensity = 0.5;
            neuron.material.opacity = 0.5;
            neuron.scale.setScalar(1.0);
            neuron.userData.isActive = false;
          } else {
            // OFF
            neuron.material.color.setHex(0x111111);
            neuron.material.emissiveIntensity = 0;
            neuron.material.opacity = 0.1;
            neuron.scale.setScalar(1.0);
            neuron.userData.isActive = false;
          }
        });
        return;
      }

      // --- HIDDEN LAYERS (Threshold) ---
      layerNeurons.forEach((neuron, nIdx) => {
        const val = Math.abs(features[nIdx] ?? 0);
        // Instant Threshold Check
        if (val > 0.05) {
          neuron.userData.isActive = true;
          
          // STATIC GLOW (White/Silver)
          neuron.material.emissive.setHex(0xffffff);
          neuron.material.color.setHex(0xffffff);
          neuron.material.emissiveIntensity = 1.0; 
          neuron.material.opacity = 0.8;
        } else {
          neuron.userData.isActive = false;
          neuron.material.emissiveIntensity = 0;
          neuron.material.color.setHex(0x222222);
          neuron.material.opacity = 0.1; // Faint background
        }
      });
    });

    // 2. RENDER CONNECTIONS (Instant Lines)
    connectionLinesRef.current.forEach(line => {
      const lIdx = line.userData.layerIdx;
      const src = neuronMeshesRef.current[lIdx]?.[line.userData.sourceIdx];
      
      // If Source is Active, Draw the Line.
      if (src?.userData.isActive) {
          const intensity = src.material.emissiveIntensity;
          
          // Solid White/Cyan Beam
          line.material.opacity = lIdx === 0 ? 0.3 : 0.4; // Input beam vs hidden web
          line.material.color.setHex(0xffffff);
      } else {
          // Hide
          line.material.opacity = 0.01;
          line.material.color.setHex(0x333333);
      }
    });

    // 3. RENDER OUTPUT GRID & BEAM
    const summary = predictionRef.current;
    
    // Highlight Character
    characterMeshesRef.current.forEach((char, idx) => {
        if (idx === summary.index) {
            char.material.opacity = 1.0;
            char.material.color.setHex(0xffffff);
            char.scale.set(0.5, 0.5, 1);
        } else {
            char.material.opacity = 0.2; // Dim others
            char.material.color.setHex(0x444444);
            char.scale.set(0.25, 0.25, 1);
        }
    });

    // Highlight Final Wires
    charConnectionsRef.current.forEach(line => {
        if (line.userData.targetCharIndex === summary.index) {
            line.material.opacity = 0.8;
            line.material.color.setHex(0xffffff); // Solid White Beam
        } else {
            line.material.opacity = 0.0;
        }
    });
  };
  const createNeuronLayer = (layer, layerIdx) => {
    const neurons = [];

    if (layerIdx === 0) {
      const cols = 28;
      const spacing = 0.18;
      const vOffset = (28 * spacing) / 2;
      const hOffset = (28 * spacing) / 2;

      for (let i = 0; i < layer.neurons; i += 1) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        const x = layer.position;
        const y = (27 - row) * spacing - vOffset;
        const z = col * spacing - hOffset;

        const geometry = new THREE.BoxGeometry(0.05, 0.17, 0.17);
        const material = new THREE.MeshStandardMaterial({
          color: 0x000000,
          roughness: 0.4,
          metalness: 0.1,
          transparent: false,
          visible: false,
          opacity: 1.0
        });

        const neuron = new THREE.Mesh(geometry, material);
        neuron.position.set(x, y, z);
        neuron.userData = { layerIdx, neuronIdx: i, baseColor: new THREE.Color(layer.color), baseOpacity: 0.25 };
        neurons.push(neuron);
      }
      return neurons;
    }

    const gridSize = Math.ceil(Math.sqrt(layer.neurons));
    const spacing = 0.28;
    const offset = ((gridSize - 1) * spacing) / 2;

    for (let i = 0; i < layer.neurons; i += 1) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      const x = layer.position;
      const y = row * spacing - offset;
      const z = col * spacing - offset;

      const geometry = new THREE.BoxGeometry(0.12, 0.12, 0.12);
      const material = new THREE.MeshStandardMaterial({
        color: layer.color,
        emissive: 0x000000,
        transparent: true,
        opacity: 0.25
      });

      const neuron = new THREE.Mesh(geometry, material);
      neuron.position.set(x, y, z);
      neuron.userData = { layerIdx, neuronIdx: i, baseColor: new THREE.Color(layer.color), baseOpacity: 0.25 };
      neurons.push(neuron);
    }

    return neurons;
  };

  const createConnectionsToNextLayer = (scene, currentLayer, nextLayer, layerIdx) => {
    const currentNeurons = neuronMeshesRef.current[layerIdx];
    const nextGridSize = Math.ceil(Math.sqrt(nextLayer.neurons));
    const spacing = 0.28;
    const offset = ((nextGridSize - 1) * spacing) / 2;

    let skipFactor = 1;
    let connectionsPerSource = 1;
    let opacity = 0.08;

    if (layerIdx === 0) {
      skipFactor = 2;
      connectionsPerSource = 3;
      opacity = 0.3;
    } else {
      skipFactor = 1;
      connectionsPerSource = Math.min(20, Math.max(5, Math.floor(800 / currentLayer.neurons)));
      opacity = 0.12;
    }

    for (let i = 0; i < currentLayer.neurons; i += 1) {
      if (i % skipFactor !== 0) continue;

      const startPos = currentNeurons[i].position;
      for (let j = 0; j < connectionsPerSource; j += 1) {
        const targetIdx = Math.floor(Math.random() * nextLayer.neurons);
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
          color: layerIdx === 0 ? 0x00ffff : 0x4f46e5,
          transparent: true,
          opacity,
          linewidth: 1
        });

        const line = new THREE.Line(geometry, material);
        line.userData = { layerIdx, sourceIdx: i, targetIdx, isActive: false, baseOpacity: opacity };
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

    context.fillStyle = 'rgba(255, 255, 255, 0.7)';
    context.font = 'bold 36px Arial';
    context.textAlign = 'center';
    context.fillText(layer.name, 256, 50);
    context.font = '24px Arial';
    context.fillStyle = layer.color;
    context.fillText(`${layer.neurons} neurons`, 256, 90);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.8 });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(layer.position, -5, 0);
    sprite.scale.set(2.5, 0.6, 1);
    scene.add(sprite);
  };

 const buildCharacterGrid = (scene) => {
    const gridCols = 16;
    const gridRows = Math.ceil(CHARACTERS.length / gridCols);
    const spacing = 0.35;
    const finalLayerX = NETWORK_CONFIG.layers[NETWORK_CONFIG.layers.length-1].position;
    const gridX = finalLayerX + 6;
    const offsetY = ((gridRows - 1) * spacing) / 2;
    const offsetZ = ((gridCols - 1) * spacing) / 2;

    CHARACTERS.forEach((char, idx) => {
        const row = Math.floor(idx / gridCols);
        const col = idx % gridCols;
        const x = gridX;
        const y = row * spacing - offsetY;
        const z = col * spacing - offsetZ;

        // 1. GRID BOXES: Make them stronger (Opacity 0.6)
        const boxGeo = new THREE.BoxGeometry(0.05, spacing * 0.9, spacing * 0.9);
        const edges = new THREE.EdgesGeometry(boxGeo);
        // Brighten color to 0x666666 and opacity to 0.6
        const lineMat = new THREE.LineBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.6 });
        const cellFrame = new THREE.LineSegments(edges, lineMat);
        cellFrame.position.set(x, y, z);
        cellFrame.userData = { baseOpacity: 0.6 }; // Save this so we reset to 0.6 later
        scene.add(cellFrame);
        gridCellsRef.current.push(cellFrame);

        // 2. CHARACTERS: Make them visible (Opacity 0.8)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 128; canvas.height = 128;
        ctx.fillStyle = 'white';
        ctx.font = 'bold 90px Arial'; // Slightly bigger font
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(char, 64, 64);
        
        const texture = new THREE.CanvasTexture(canvas);
        // Start visible (0.8) and brighter color
        const material = new THREE.SpriteMaterial({ map: texture, opacity: 0.8, color: 0xaaaaaa });
        const sprite = new THREE.Sprite(material);
        sprite.position.set(x + 0.1, y, z); // Push slightly forward
        sprite.scale.set(0.25, 0.25, 1);
        scene.add(sprite);
        characterMeshesRef.current.push(sprite);

        // 3. HIGHLIGHT BEAM: Increase wires (15 -> 60)
        const finalNeurons = neuronMeshesRef.current[neuronMeshesRef.current.length-1];
        // Create 60 lines per character for a thick beam
        const connectionsPerChar = 60; 
        
        for(let i=0; i < connectionsPerChar; i++) { 
            const nIdx = Math.floor(Math.random() * finalNeurons.length);
            const neuron = finalNeurons[nIdx];
            const pts = [neuron.position, new THREE.Vector3(x,y,z)];
            const geo = new THREE.BufferGeometry().setFromPoints(pts);
            const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
            const line = new THREE.Line(geo, mat);
            line.userData = { targetCharIndex: idx };
            scene.add(line);
            charConnectionsRef.current.push(line);
        }
    });
  };
  const buildNeuralNetwork = scene => {
    NETWORK_CONFIG.layers.forEach((layer, idx) => {
      const neurons = createNeuronLayer(layer, idx);
      neuronMeshesRef.current.push(neurons);
      neurons.forEach(neuron => scene.add(neuron));

      if (idx === 0) {
        const geometry = new THREE.PlaneGeometry(5.04, 5.04);
        const initialData = new Uint8Array(28 * 28 * 4).fill(0);
        const texture = new THREE.DataTexture(initialData, 28, 28, THREE.RGBAFormat);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.9,
          depthWrite: false
        });

        const screenFront = new THREE.Mesh(geometry, material);
        screenFront.position.set(layer.position, 0, 0);
        screenFront.rotation.y = Math.PI / 2;

        const screenBack = new THREE.Mesh(geometry, material);
        screenBack.position.set(layer.position, 0, 0);
        screenBack.rotation.y = -Math.PI / 2;

        scene.add(screenFront);
        scene.add(screenBack);
        inputScreenRef.current = screenFront;
      }

      if (idx < NETWORK_CONFIG.layers.length - 1) {
        createConnectionsToNextLayer(scene, layer, NETWORK_CONFIG.layers[idx + 1], idx);
      }

      createLayerLabel(scene, layer);
    });
  };

const processModelResponse = data => {
    // 1. Process Data
    const rawFeatures = Array.isArray(data?.features)
      ? data.features.map(f => (Array.isArray(f) ? f.flat(Infinity) : []))
      : [];

    const inputPixels = data?.input_layer || new Array(784).fill(0);
    const featuresFlat = [inputPixels, ...rawFeatures];
    
    // 2. Update Texture Immediately
    updateInputScreen(inputPixels);

    // 3. Save State
    const summary = summarizePrediction(data, featuresFlat);
    modelDataRef.current = { raw: data, featuresFlat };
    predictionRef.current = summary;
    
    // 4. Trigger Instant Render
    // We skip 'animating' and go straight to 'complete'
    stageRef.current = 'complete'; 
    setAnimationStage('complete'); 
    setPrediction(summary);
  };
  const handlePredict = async () => {
    if (!canvasRef.current) return;
    try {
      const canvasData = canvasRef.current.getDataURL('png', false, '#000000');
      const res = await fetch(canvasData);
      const blob = await res.blob();
      const formData = new FormData();
      formData.append('file', blob, 'drawing.png');

      const response = await fetch('http://127.0.0.1:8000/predict', { method: 'POST', body: formData });
      const data = await response.json();
      processModelResponse(data);
    } catch (err) {
      console.error('Prediction request failed:', err);
      setAnimationStage('waiting');
    }
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

// --- INIT EFFECT (SCENE SETUP) ---
  useEffect(() => {
    if (!mountRef.current) return undefined;

    // Reset Refs
    neuronMeshesRef.current = [];
    characterMeshesRef.current = [];
    connectionLinesRef.current = [];
    charConnectionsRef.current = [];

    // 1. Scene Setup (Darker, cleaner background)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505); 
    // Use Exponential Fog for smoother fade-out
    scene.fog = new THREE.FogExp2(0x050505, 0.02);
    sceneRef.current = scene;

    // 2. Camera
    const netCenterX = NETWORK_CONFIG.layers.reduce((sum, layer) => sum + layer.position, 0) / NETWORK_CONFIG.layers.length;
    const camera = new THREE.PerspectiveCamera(60, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(20, 12, 35);
    camera.lookAt(netCenterX, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Controls (The Rotation Fix)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(10, 0, 0); 
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 80;
    
    // FORCE AUTO ROTATE
    controls.autoRotate = true; 
    controls.autoRotateSpeed = 2.0; // Increased speed
    controlsRef.current = controls;

    // 5. Lights (Updated to WHITE/SILVER)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Bright Ambient
    scene.add(ambientLight);
    
    // Main Spotlight (White)
    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(10, 40, 20);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.1;
    scene.add(spotLight);
    
    // Fill Light (Cool Grey)
    const fillLight = new THREE.PointLight(0xccccff, 0.5, 60);
    fillLight.position.set(-10, 10, 10);
    scene.add(fillLight);

    // 6. Grid (Subtle Grey)
    const gridHelper = new THREE.GridHelper(100, 100, 0x333333, 0x111111);
    gridHelper.position.set(10, -10, 0);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.4;
    scene.add(gridHelper);

    // 7. Build Scene
    buildNeuralNetwork(scene);
    buildCharacterGrid(scene);

    // 8. Animation Loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // CRITICAL: Must call update() every frame for autoRotate to work
      controls.update(); 
      
      // CRITICAL: Always run the visualizer update if data exists
      // Removed the 'if animating' check so "Instant" mode works
      if (modelDataRef.current) {
         updateDramaticAnimation();
      }
      
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
      cancelAnimationFrame(frameId);
      controls.dispose();
      renderer.dispose();
      
      // Clean up meshes
      neuronMeshesRef.current.flat().forEach(m => { m.geometry.dispose(); m.material.dispose(); });
      characterMeshesRef.current.forEach(m => { m.geometry.dispose(); m.material.dispose(); });
      connectionLinesRef.current.forEach(m => { m.geometry.dispose(); m.material.dispose(); });
      charConnectionsRef.current.forEach(m => { m.geometry.dispose(); m.material.dispose(); });

      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);
  useEffect(() => {
    if (isDemoMode) return undefined;
    let cancelled = false;

    const poll = async () => {
      if (cancelled || stageRef.current === 'complete') return;
      try {
        const res = await fetch('/static/data.json');
        const data = await res.json();
        const predictionKey = `${data.prediction}_${data.confidence}`;
        if (predictionKey !== lastPredictionKeyRef.current) {
          processModelResponse(data);
        }
      } catch (err) {
        console.error('Polling failed:', err);
        setAnimationStage('waiting');
        stageRef.current = 'waiting';
      } finally {
        if (!cancelled) setTimeout(poll, 1000);
      }
    };

    poll();
    return () => {
      cancelled = true;
    };
  }, [isDemoMode]);

  useEffect(() => {
    if (!isDemoMode) return undefined;
    let cancelled = false;

    const fetchRandom = async () => {
      if (cancelled) return;
      try {
        const res = await fetch('http://127.0.0.1:8000/predict_random');
        const data = await res.json();
        if (!data?.error) {
          processModelResponse(data);
        }
      } catch (err) {
        console.error('Auto-play error:', err);
      } finally {
        if (!cancelled) setTimeout(fetchRandom, 4000);
      }
    };

    fetchRandom();
    return () => {
      cancelled = true;
    };
  }, [isDemoMode]);

return (
    <div style={{ 
      width: '100%', height: '100vh', background: '#050505',
      position: 'relative', overflow: 'hidden',
      fontFamily: '"SF Mono", "Fira Code", monospace', // Tech font
      userSelect: 'none'
    }}>
      
      {/* 0. THE 3D SCENE */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', zIndex: 0 }} />

      {/* =========================================================
          1. TOP LEFT: CONTROL STATION (Input)
      ========================================================= */}
      <div style={{
        position: 'absolute', top: '30px', left: '30px', zIndex: 10,
        width: '280px',
        background: 'rgba(0, 0, 0, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        padding: '20px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
      }}>
        <div style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '10px'
        }}>
          <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>
            ● INPUT SOURCE
          </span>
          <span style={{ color: '#666', fontSize: '10px' }}>28x28px</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <CanvasDraw
            ref={canvasRef}
            brushColor="#FFFFFF"
            backgroundColor="#000000"
            brushRadius={6}
            lazyRadius={0}
            canvasWidth={240}
            canvasHeight={240}
            style={{ border: '1px solid #333', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handlePredict}
            style={{
              flex: 2, padding: '12px',
              background: '#ffffff', color: '#000', // High Contrast
              border: 'none', borderRadius: '6px',
              cursor: 'pointer', fontWeight: 'bold', fontSize: '12px', letterSpacing: '1px',
              transition: 'transform 0.1s'
            }}
            onMouseDown={e => e.target.style.transform = 'scale(0.95)'}
            onMouseUp={e => e.target.style.transform = 'scale(1.0)'}
          >
            RUN ANALYSIS
          </button>
          <button
            onClick={handleClear}
            style={{
              flex: 1, padding: '12px',
              background: 'transparent', color: '#fff',
              border: '1px solid #444', borderRadius: '6px',
              cursor: 'pointer', fontSize: '12px'
            }}
          >
            CLEAR
          </button>
        </div>
      </div>

      {/* =========================================================
          2. TOP RIGHT: SYSTEM STATS (Data Feed)
      ========================================================= */}
      <div style={{
        position: 'absolute', top: '30px', right: '30px', zIndex: 10,
        textAlign: 'right', pointerEvents: 'none'
      }}>
        <div style={{ 
          color: '#fff', fontSize: '16px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '8px' 
        }}>
          ETHIOPIC.AI <span style={{ color: '#444' }}>//</span> V2.0
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', color: '#888' }}>
          <div>
            ACTIVE NODES: <span style={{ color: '#fff' }}>{prediction.activeCount || 0}</span>
          </div>
          <div>
            LAYERS: <span style={{ color: '#fff' }}>{NETWORK_CONFIG.layers.length}</span>
          </div>
          <div>
            CONFIDENCE: <span style={{ color: '#fff' }}>{prediction.prob || 0}%</span>
          </div>
          <div style={{ marginTop: '8px', padding: '4px 8px', background: '#111', border: '1px solid #333', borderRadius: '4px', display: 'inline-block' }}>
            STATUS: <span style={{ color: animationStage === 'animating' ? '#00ffff' : '#00ff88' }}>
              {animationStage === 'animating' ? 'PROCESSING...' : 'ONLINE'}
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          3. BOTTOM CENTER: PREDICTION RESULT (The Hero)
      ========================================================= */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, textAlign: 'center', pointerEvents: 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'
      }}>
        {/* Only show label if we have a prediction */}
        {prediction.label !== '—' && (
          <>
            <div style={{ 
              fontSize: '10px', color: '#666', letterSpacing: '4px', textTransform: 'uppercase' 
            }}>
              Identified Character
            </div>
            <div style={{
              fontSize: '80px', fontWeight: 'bold', color: '#fff', lineHeight: '1',
              textShadow: '0 0 30px rgba(255,255,255,0.3)'
            }}>
              {prediction.label}
            </div>
            <div style={{ 
              fontSize: '12px', color: '#00ffff', border: '1px solid rgba(0,255,255,0.3)', 
              padding: '4px 12px', borderRadius: '20px', background: 'rgba(0,255,255,0.05)'
            }}>
              {prediction.prob}% MATCH
            </div>
          </>
        )}
      </div>

      {/* =========================================================
          4. BOTTOM RIGHT: CONTROLS & HINTS
      ========================================================= */}
      <div style={{
        position: 'absolute', bottom: '30px', right: '30px', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px'
      }}>
        {/* Hint */}
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px' }}>
          [ Scroll to Zoom • Drag to Rotate ]
        </div>

        {/* Play Button */}
        <button
          onClick={() => setIsDemoMode(!isDemoMode)}
          style={{
            background: isDemoMode ? 'rgba(0,255,255,0.1)' : 'rgba(0,0,0,0.6)',
            color: isDemoMode ? '#00ffff' : '#fff',
            border: isDemoMode ? '1px solid #00ffff' : '1px solid #444',
            padding: '12px 24px',
            fontSize: '12px', letterSpacing: '1px',
            cursor: 'pointer', borderRadius: '4px',
            backdropFilter: 'blur(5px)',
            display: 'flex', alignItems: 'center', gap: '8px',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ 
            display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', 
            background: isDemoMode ? '#00ffff' : '#666' 
          }}></span>
          {isDemoMode ? 'AUTO-PILOT ACTIVE' : 'PLAY DATASET'}
        </button>
      </div>

      
{/* =========================================================
          5. TOP CENTER: HEADER (Floating Pill Navbar)
      ========================================================= */}
      <div style={{
        position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex', alignItems: 'center', gap: '15px',
        background: 'rgba(5, 5, 5, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '12px 30px',
        borderRadius: '50px', // "Pill" shape
        backdropFilter: 'blur(20px)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
      }}>
        {/* Logo / Icon */}
        <div style={{ 
          background: '#fff', color: '#000', 
          width: '32px', height: '32px', borderRadius: '50%', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', fontWeight: 'bold'
        }}>
          ፊ
        </div>

        {/* Title Text */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            color: '#fff', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', lineHeight: '1.2' 
          }}>
            AMHARIC NEURAL RECOGNITION
          </div>
          <div style={{ 
            color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '1px' 
          }}>
            REAL-TIME OPTICAL CHARACTER DETECTION
          </div>
        </div>
      </div>

    </div>
    
  );}

   

export default NetworkVisualizer;