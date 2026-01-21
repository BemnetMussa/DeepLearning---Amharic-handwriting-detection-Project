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
    // { name: 'Output', neurons: 237, color: '#333333', position: 15 }
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
    // 1. Neurons (Reset to Blue)
    neuronMeshesRef.current.flat().forEach(neuron => {
      neuron.userData.isActive = false;
      
      // Default: Blue Glass
      neuron.material.color.setHex(0x0044aa); 
      neuron.material.emissive.setHex(0x000000);
      neuron.material.emissiveIntensity = 0;
      
      if (neuron.userData.layerIdx === 0) {
          neuron.material.opacity = 0; 
      } else {
          neuron.material.opacity = 0.2; // Visible Structure
      }
      neuron.scale.setScalar(1);
    });

    // 2. Connections (Blue Web)
    connectionLinesRef.current.forEach(line => {
      line.userData.isActive = false;
      line.material.opacity = 0.03;
      line.material.color.setHex(0x0044aa);
    });

    // 3. Output Grid
    characterMeshesRef.current.forEach(char => {
      char.material.opacity = 0.3;
      char.material.color.setHex(0x445566);
      char.scale.set(0.25, 0.25, 1);
    });    

    // ... (Keep connections/grid reset logic the same) ...
    // Reset Connections to Invisible
    connectionLinesRef.current.forEach(line => {
      line.userData.isActive = false;
      line.material.opacity = 0.02;
      line.material.color.setHex(0x333333);
    });

    // Reset Character Grid
    characterMeshesRef.current.forEach(char => {
      char.material.opacity = 0.9;
      char.material.color.setHex(0xffffff);
      char.scale.set(0.25, 0.25, 1);
    });
    gridCellsRef.current.forEach(cell => {
      cell.material.opacity = 0.5;
      cell.material.color.setHex(0x888888);
    });
    charConnectionsRef.current.forEach(line => {
        line.material.opacity = 0.0;
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
  if (summary.index == null) return;

  /* ───────────── RESET ALL ───────────── */
  characterMeshesRef.current.forEach((char, idx) => {
    char.material.opacity = 0.25;
    char.material.color.setHex(0xffffff);
    char.scale.set(0.25, 0.25, 1);
  });

  gridCellsRef.current.forEach((cell, idx) => {
    const solid = cell.userData.solid;

    cell.material.opacity = 0.25;
    cell.material.color.setHex(0xffffff);

    if (solid) solid.material.opacity = 0.0;
  });

  charConnectionsRef.current.forEach(line => {
    line.material.opacity = 0.0;
  });

  /* ───────────── WINNER (PRIMARY) ───────────── */
  const winnerChar = characterMeshesRef.current[summary.index];
  const winnerCell = gridCellsRef.current[summary.index];

  if (winnerChar && winnerCell) {
    winnerChar.material.opacity = 1.0;
    winnerChar.material.color.setHex(0x00ffff);
    winnerChar.scale.set(0.42, 0.42, 1);

    winnerCell.material.opacity = 1.0;
    winnerCell.material.color.setHex(0x00ffff);
    winnerCell.userData.solid.material.opacity = 0.35;
  }

  /* ───────────── TOP-5 (SECONDARY SIGNALS) ───────────── */
  summary.top5.forEach((item, rank) => {
    const char = characterMeshesRef.current[item.index];
    const cell = gridCellsRef.current[item.index];

    if (!char || !cell) return;

    const strength = (5 - rank) / 5; // 1 → 0.2
    const opacity = 0.35 + strength * 0.4;

    char.material.opacity = opacity;
    char.material.color.setHex(0x9ffcff);
    char.scale.set(0.28 + strength * 0.08, 0.28 + strength * 0.08, 1);

    cell.material.opacity = opacity;
  });

  /* ───────────── CONNECTIONS (ONLY WINNER) ───────────── */
  charConnectionsRef.current.forEach(line => {
    if (line.userData.targetCharIndex === summary.index) {
      line.material.opacity = 0.85;
      line.material.color.setHex(0x00ffff);
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

    const numLayers = neuronMeshesRef.current.length;

    // 1. RENDER NEURONS
    neuronMeshesRef.current.forEach((layerNeurons, lIdx) => {
      const features = data.featuresFlat[lIdx] || [];

      // INPUT LAYER (Handled by Screen, just set anchors)
      if (lIdx === 0) {
        layerNeurons.forEach((neuron, nIdx) => {
           const val = features[nIdx] ?? 0;
           neuron.userData.isActive = val > 0.1;
        });
        return;
      }

      // --- OUTPUT LAYER (GREEN POP) ---
      if (lIdx === numLayers - 1) {
        layerNeurons.forEach((neuron, nIdx) => {
          const isWinner = predictionRef.current?.index === nIdx;
          const isTop5 = predictionRef.current?.top5.some(t => t.index === nIdx);

          if (isWinner) {
            // WINNER: NEON GREEN
            neuron.material.color.setHex(0x00ff88);
            neuron.material.emissive.setHex(0x00ff88);
            neuron.material.emissiveIntensity = 3.0; // Blindingly bright
            neuron.material.opacity = 1.0;
            neuron.scale.setScalar(1.8);
            neuron.userData.isActive = true;
          } else if (isTop5) {
            // TOP 5: White
            neuron.material.color.setHex(0xffffff);
            neuron.material.emissive.setHex(0xffffff);
            neuron.material.emissiveIntensity = 0.5;
            neuron.material.opacity = 0.6;
            neuron.scale.setScalar(1.2);
            neuron.userData.isActive = false;
          } else {
            // LOSERS: Dark
            neuron.material.color.setHex(0x111111);
            neuron.material.emissiveIntensity = 0;
            neuron.material.opacity = 0.1;
            neuron.scale.setScalar(1.0);
            neuron.userData.isActive = false;
          }
        });
        return;
      }

      // --- HIDDEN LAYERS (WHITE/SILVER POP) ---
      layerNeurons.forEach((neuron, nIdx) => {
        const val = Math.abs(features[nIdx] ?? 0);
        
        if (val > 0.1) {
          neuron.userData.isActive = true;
          // ACTIVE: BRIGHT WHITE
          neuron.material.emissive.setHex(0xffffff);
          neuron.material.color.setHex(0xffffff);
          neuron.material.emissiveIntensity = 2.0; 
          neuron.material.opacity = 1.0; 
        } else {
          neuron.userData.isActive = false;
          // INACTIVE: DIM GREY CLOUD (Visible)
          neuron.material.emissiveIntensity = 0;
          neuron.material.color.setHex(0x333333); // Grey
          neuron.material.opacity = 0.12;         // Visible dimness
        }
      });
    });

    // 2. RENDER CONNECTIONS (White Beams)
    connectionLinesRef.current.forEach(line => {
      const lIdx = line.userData.layerIdx;
      const src = neuronMeshesRef.current[lIdx]?.[line.userData.sourceIdx];
      
      if (src?.userData.isActive) {
          const intensity = src.material.emissiveIntensity;
          line.material.opacity = lIdx === 0 ? 0.3 : 0.4;
          line.material.color.setHex(0xffffff); // Pure White lines
      } else {
          line.material.opacity = 0.01;
          line.material.color.setHex(0x333333);
      }
    });

    // 3. RENDER OUTPUT GRID (Green Text)
    const summary = predictionRef.current;
    
    characterMeshesRef.current.forEach((char, idx) => {
        if (idx === summary.index) {
            char.material.opacity = 1.0;
            char.material.color.setHex(0x00ff88); // Green Text
            char.scale.set(0.6, 0.6, 1);
        } else {
            char.material.opacity = 0.2;
            char.material.color.setHex(0x444444);
            char.scale.set(0.25, 0.25, 1);
        }
    });

    charConnectionsRef.current.forEach(line => {
        if (line.userData.targetCharIndex === summary.index) {
            line.material.opacity = 0.8;
            line.material.color.setHex(0x00ff88); // Green Beam
        } else {
            line.material.opacity = 0.0;
        }
    });
  };
const createNeuronLayer = (layer, layerIdx) => {
    const neurons = [];
    
    // --- INPUT LAYER (Keep as Anchors for Screen) ---
    if (layerIdx === 0) {
        const cols = 28; const spacing = 0.18;
        const vOffset = (28 * spacing) / 2; const hOffset = (28 * spacing) / 2;
        for (let i = 0; i < layer.neurons; i++) {
            const row = Math.floor(i / cols); const col = i % cols;
            const x = layer.position; 
            const y = ((27-row)*spacing) - vOffset; const z = (col*spacing) - hOffset;
            // Invisible anchors
            const neuron = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1), new THREE.MeshBasicMaterial({visible:false}));
            neuron.position.set(x,y,z); neuron.userData = {layerIdx, neuronIdx:i};
            neurons.push(neuron);
        }
    } 
    // --- HIDDEN LAYERS (CONTROLLED CLUSTERS) ---
    else if (layerIdx < NETWORK_CONFIG.layers.length - 1) {
        
        // DENSITY: 4 Cubes per Neuron (Complex but clean)
        const CLUSTER_SIZE = 4; 
        
        const gridSize = Math.ceil(Math.sqrt(layer.neurons));
        const spacing = 0.35; // Slightly wider spacing between clusters
        const offset = (gridSize - 1) * spacing / 2;

        for (let i = 0; i < layer.neurons; i++) {
            const row = Math.floor(i / gridSize); const col = i % gridSize;
            const baseX = layer.position;
            const baseY = row * spacing - offset;
            const baseZ = col * spacing - offset;

            for (let j = 0; j < CLUSTER_SIZE; j++) {
                // TIGHT SCATTER: Keep them close to the center (0.2 spread)
                // This ensures the connection lines actually hit them
                const x = baseX + (Math.random() - 0.5) * 0.4; 
                const y = baseY + (Math.random() - 0.5) * 0.2;
                const z = baseZ + (Math.random() - 0.5) * 0.2;

                // SIZE: 0.14 (Chunky, visible blocks)
                const geometry = new THREE.BoxGeometry(0.14, 0.14, 0.14);
                
                // IDLE COLOR: Deep Glassy Blue
                const material = new THREE.MeshStandardMaterial({
                    color: 0x0044aa,      // Deep Blue
                    emissive: 0x001133,   // Faint glow
                    roughness: 0.2,
                    metalness: 0.8,
                    transparent: true,
                    opacity: 0.3          // Visible glass look
                });

                const neuron = new THREE.Mesh(geometry, material);
                neuron.position.set(x, y, z);
                neuron.userData = { layerIdx, neuronIdx: i }; 
                neurons.push(neuron);
            }
        }
    }
    // --- OUTPUT LAYER (Solid Grid) ---
    else {
        const gridSize = Math.ceil(Math.sqrt(layer.neurons));
        const spacing = 0.28; const offset = (gridSize-1)*spacing/2;
        for (let i = 0; i < layer.neurons; i++) {
            const row = Math.floor(i/gridSize); const col = i%gridSize;
            const x = layer.position; const y = row*spacing - offset; const z = col*spacing - offset;
            const neuron = new THREE.Mesh(new THREE.BoxGeometry(0.12,0.12,0.12), new THREE.MeshStandardMaterial({color:0x222222, transparent:true, opacity:0.3}));
            neuron.position.set(x,y,z); neuron.userData = {layerIdx, neuronIdx:i};
            neurons.push(neuron);
        }
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
  const spacing = 0.35;

  const gridX =
    NETWORK_CONFIG.layers[NETWORK_CONFIG.layers.length - 1].position + 8;

  const gridRows = Math.ceil(CHARACTERS.length / gridCols);
  const offsetY = ((gridRows - 1) * spacing) / 2;
  const offsetZ = ((gridCols - 1) * spacing) / 2;

  CHARACTERS.forEach((char, idx) => {
    const row = Math.floor(idx / gridCols);
    const col = idx % gridCols;

    const x = gridX;
    const y = row * spacing - offsetY;
    const z = col * spacing - offsetZ;

    /* ───────────── GRID OUTLINE (UI LAYER) ───────────── */
    const edges = new THREE.EdgesGeometry(
      new THREE.BoxGeometry(0.05, spacing * 0.9, spacing * 0.9)
    );

    const cellMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      depthTest: false,
      depthWrite: false
    });

    const cell = new THREE.LineSegments(edges, cellMaterial);
    cell.position.set(x + 0.01, y, z);
    cell.renderOrder = 10;
    cell.userData = { index: idx };
    scene.add(cell);
    gridCellsRef.current.push(cell);

    /* ───────────── SOLID SELECTION PLATE ───────────── */
    const solidMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.0,
      depthTest: false,
      depthWrite: false
    });

    const solidBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.048, spacing * 0.9, spacing * 0.9),
      solidMaterial
    );

    solidBox.position.set(x + 0.009, y, z);
    solidBox.renderOrder = 9;
    scene.add(solidBox);
    cell.userData.solid = solidBox;

    /* ───────────── CHARACTER TEXT (TOP UI) ───────────── */
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 128;
    canvas.height = 128;

    ctx.clearRect(0, 0, 128, 128);
    ctx.fillStyle = "white";
    ctx.font = "bold 90px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(char, 64, 64);

    const spriteMaterial = new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(canvas),
      color: 0xffffff,
      transparent: true,
      opacity: 1.0,
      depthTest: false,
      depthWrite: false
    });

    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.position.set(x + 0.02, y, z);
    sprite.scale.set(0.25, 0.25, 1);
    sprite.renderOrder = 11;
    scene.add(sprite);
    characterMeshesRef.current.push(sprite);

    /* ───────────── CONNECTIONS FROM FINAL LAYER ───────────── */
    const finalNeurons =
      neuronMeshesRef.current[neuronMeshesRef.current.length - 1];

    for (let i = 0; i < 60; i++) {
      const n =
        finalNeurons[Math.floor(Math.random() * finalNeurons.length)];

      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          n.position,
          new THREE.Vector3(x, y, z)
        ]),
        new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.0
        })
      );

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
    renderActiveNetwork(); // <--- ADD THIS LINE HERE
    
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
    scene.background = new THREE.Color(0x02040a); 
    scene.fog = new THREE.FogExp2(0x02040a, 0.02);
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
    controls.autoRotateSpeed = 4.0; // Increased speed
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
    const gridHelper = new THREE.GridHelper(200, 100, 0x4f46e5, 0x333333);
    
    gridHelper.position.set(10, -10, 0); // Lowered to -10
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.3;
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
         renderActiveNetwork();
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

 const renderActiveNetwork = () => {
  const data = modelDataRef.current;
  if (!data || !data.featuresFlat) return;

  const numLayers = neuronMeshesRef.current.length;

  // 1. NEURONS
  neuronMeshesRef.current.forEach((layerNeurons, lIdx) => {
    const features = data.featuresFlat[lIdx] || [];

    // INPUT LAYER
    if (lIdx === 0) {
      layerNeurons.forEach((neuron, nIdx) => {
        const val = features[nIdx] ?? 0;
        neuron.userData.isActive = val > 0.1;
      });
      return;
    }

    // OUTPUT LAYER (WINNER)
    if (lIdx === numLayers - 1) {
      layerNeurons.forEach((neuron, nIdx) => {
        const isWinner = predictionRef.current?.index === nIdx;

        if (isWinner) {
          // ELECTRIC CORE
          neuron.material.color.setHex(0xe6ffff);
          neuron.material.emissive.setHex(0x00ffff);
          neuron.material.emissiveIntensity = 3.2;
          neuron.material.opacity = 1.0;
          neuron.scale.setScalar(1.8);
          neuron.userData.isActive = true;
        } else {
          // IDLE OUTPUT
          neuron.material.color.setHex(0x0044aa);
          neuron.material.emissive.setHex(0x000000);
          neuron.material.emissiveIntensity = 0;
          neuron.material.opacity = 1.0;
          neuron.scale.setScalar(1.0);
          neuron.userData.isActive = false;
        }
      });
      return;
    }

    // HIDDEN LAYERS
    layerNeurons.forEach((neuron, nIdx) => {
      const val = Math.abs(features[nIdx] ?? 0);

      if (val > 0.1) {
        // ACTIVE SIGNAL (CYAN)
        neuron.userData.isActive = true;
        neuron.material.color.setHex(0x33ccff);
        neuron.material.emissive.setHex(0x00ffff);
        neuron.material.emissiveIntensity = 1.2;
        neuron.material.opacity = 0.85;
      } else {
        // IDLE STRUCTURE
        neuron.userData.isActive = false;
        neuron.material.color.setHex(0x0044aa);
        neuron.material.emissiveIntensity = 0;
        neuron.material.opacity = 0.55;
      }
    });
  });

  // 2. CONNECTIONS
  connectionLinesRef.current.forEach(line => {
    const lIdx = line.userData.layerIdx;
    const src = neuronMeshesRef.current[lIdx]?.[line.userData.sourceIdx];

    if (src?.userData.isActive) {
      // ELECTRIC BEAM
      line.material.color.setHex(0x33ccff);
      line.material.opacity = 0.6;
    } else {
      // IDLE WEB
      line.material.color.setHex(0x0044aa);
      line.material.opacity = 0.25;
    }
  });

  // 3. FINAL OUTPUT TEXT
  const summary = predictionRef.current;

  characterMeshesRef.current.forEach((char, idx) => {
    if (idx === summary.index) {
      char.material.color.setHex(0x00ffff);
      char.material.opacity = 1.0;
      char.scale.set(0.6, 0.6, 1);
    } else {
      char.material.color.setHex(0x445566);
      char.material.opacity = 0.3;
      char.scale.set(0.25, 0.25, 1);
    }
  });

  charConnectionsRef.current.forEach(line => {
    if (line.userData.targetCharIndex === summary.index) {
      line.material.color.setHex(0x33ccff);
      line.material.opacity = 0.8;
    } else {
      line.material.opacity = 0.0;
    }
  });
};

return (
    <div style={{ 
      width: '100%', height: '100vh', background: '#050505',
      position: 'relative', overflow: 'hidden',
      fontFamily: '"SF Mono", "Fira Code", monospace',
      userSelect: 'none'
    }}>
      
      <div ref={mountRef} style={{ width: '100%', height: '100%', zIndex: 0 }} />

      {/* --- TOP LEFT: INPUT (CLEANER) --- */}
      {/* <div style={{
        position: 'absolute', top: 30, left: 30, zIndex: 10,
        width: 340, background: 'rgba(10,10,10,0.85)', 
        border: '1px solid #333', borderRadius: 8, padding: 20,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{fontSize: 10, color: '#666', marginBottom: 15, letterSpacing: 1}}>INPUT // 28x28 TENSOR</div>
        
        <div style={{display:'flex', justifyContent:'center', marginBottom: 20}}>
            <CanvasDraw 
                ref={canvasRef} 
                brushColor="#FFF" 
                backgroundColor="#000" 
                canvasWidth={300}  
                canvasHeight={300} 
                brushRadius={18} // HARDCODED THICK BRUSH
                style={{border:'1px solid #222', cursor: 'crosshair'}} 
            />
        </div>

        {/* SLIDER COMMENTED OUT
        <div style={{marginBottom: 15, display:'flex', alignItems:'center', gap: 10}}> ... </div>
        
        
        <div style={{display:'flex', gap: 10}}>
            <button onClick={handlePredict} style={{
                flex: 2, background: '#fff', color:'black', border:'none', 
                padding: '12px 0', fontWeight:'bold', fontSize: 12, cursor:'pointer', borderRadius: 4, letterSpacing: 1
            }}>RUN ANALYSIS</button>
            <button onClick={() => canvasRef.current.clear()} style={{
                flex: 1, background: 'transparent', color:'white', border:'1px solid #444', 
                padding: '12px 0', fontSize: 12, cursor:'pointer', borderRadius: 4
            }}>CLEAR</button>
        </div>
      </div> */}

      {/* --- TOP CENTER: HEADER --- */}
      <div style={{position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', display:'flex', alignItems:'center', gap:15, background:'rgba(5,5,5,0.85)', border:'1px solid rgba(255,255,255,0.15)', padding:'12px 30px', borderRadius:50, backdropFilter:'blur(20px)', zIndex: 10}}>
          <div style={{background:'#fff', color:'#000', width:32, height:32, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold'}}>ፊ</div>
          <div><div style={{color:'#fff', fontSize:14, fontWeight:'bold', letterSpacing:2}}>AMHARIC NEURAL RECOGNITION</div><div style={{color:'rgba(255,255,255,0.4)', fontSize:10, letterSpacing:1}}>REAL-TIME OPTICAL CHARACTER DETECTION</div></div>
      </div>

      {/* --- TOP RIGHT: STATS --- */}
      <div style={{position: 'absolute', top: 30, right: 30, zIndex: 10, textAlign: 'right'}}>
        <div style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>ETHIOPIC.AI <span style={{color:'green'}}>●</span></div>
        <div style={{fontSize: 10, color: '#666', marginTop: 4}}>DATASET: 237 CLASSES</div>
        <div style={{fontSize: 10, color: '#666', marginTop: 2}}>LAYERS: 6 DEPTH</div>
      </div>

      {/* --- BOTTOM CENTER: RESULTS (HIDDEN / COMMENTED OUT) --- */}
      {/* 
      {prediction.label !== '—' && (
        <div style={{ ... }}>
            ... (Percentage and Top 3 Table) ...
        </div>
      )}
      */}

      {/* --- BOTTOM RIGHT: DEMO BUTTON --- */}
      <div style={{position: 'absolute', bottom: 30, right: 30, zIndex: 10}}>
          <button onClick={() => setIsDemoMode(!isDemoMode)} style={{background: isDemoMode ? '#00ff88' : 'black', color: isDemoMode ? 'black' : 'white', border: '1px solid #333', padding: '10px 20px', fontSize: 11, cursor: 'pointer', fontWeight: 'bold', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 8}}>
              <div style={{width: 6, height: 6, borderRadius: '50%', background: isDemoMode ? 'black' : 'red'}} />
              {isDemoMode ? 'AUTO-PILOT ON' : 'PLAY DATASET'}
          </button>
      </div>

    </div>
  );}

export default NetworkVisualizer;