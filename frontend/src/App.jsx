import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CanvasDraw from 'react-canvas-draw';

// ============================================================================
// ALL 237 AMHARIC CHARACTERS IN ETHIOPIAN ORDER
// ============================================================================
const CHARACTERS = [
  'ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ',
  'ል', 'ሎ', 'ሐ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'መ', 'ሙ', 'ሚ', 'ማ',
  'ሜ', 'ም', 'ሞ', 'ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ረ', 'ሩ',
  'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ',
  'ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ',
  'ቅ', 'ቆ', 'በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቨ', 'ቩ', 'ቪ',
  'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቸ',
  'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ',
  'ኆ', 'ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኘ', 'ኙ', 'ኚ', 'ኛ',
  'ኜ', 'ኝ', 'ኞ', 'አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ', 'ከ',
  'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዂ',
  'ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ',
  'ዕ', 'ዖ', 'ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዠ', 'ዡ', 'ዢ',
  'ዣ', 'ዤ', 'ዥ', 'ዦ', 'የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ደ',
  'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ',
  'ጆ', 'ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጠ', 'ጡ', 'ጢ', 'ጣ',
  'ጤ', 'ጥ', 'ጦ', 'ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጰ', 'ጱ',
  'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ',
  'ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ',
  'ፍ', 'ፎ', 'ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ'
];

const NETWORK_CONFIG = {
  layers: [
    { name: 'Input',  neurons: 1,   color: '#333333', position: 0 },
    { name: 'Block 1', neurons: 32,  color: '#333333', position: 3 },
    { name: 'Block 2', neurons: 64,  color: '#333333', position: 6 },
    { name: 'Block 3', neurons: 128, color: '#333333', position: 9 },
    { name: 'Block 4', neurons: 256, color: '#333333', position: 12 }
  ]
};

const summarizePrediction = (data, featuresFlat) => {
  const label = data?.predicted_char || data?.prediction || data?.label || data?.class_name || data?.class || null;
  const logits = featuresFlat?.length ? featuresFlat[featuresFlat.length - 1] : [];
  
  if (!logits?.length) {
    return { label: label ?? '—', index: null, prob: null, logit: null, top5: [], activeCount: 0, total: 0 };
  }

  const maxLogit = Math.max(...logits);
  const exps = logits.map(v => Math.exp(v - maxLogit));
  const sumExp = exps.reduce((a, b) => a + b, 0);
  const probs = exps.map(v => v / (sumExp || 1));

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
  const neuronMeshesRef = useRef([]);
  const characterMeshesRef = useRef([]);
  const connectionLinesRef = useRef([]);
  const charConnectionsRef = useRef([]);
  const animationStateRef = useRef({ stage: 0, progress: 0, isComplete: false });
  const lastHashRef = useRef(null);
  const lastPredictionRef = useRef(null);
  const stageRef = useRef('waiting');
  const [modelData, setModelData] = useState(null);
  const [animationStage, setAnimationStage] = useState('waiting');
  const [prediction, setPrediction] = useState({ label: '—', index: null, prob: null, logit: null, top5: [], activeCount: 0, total: 0 });
  const [isDemoMode, setIsDemoMode] = useState(false);
  const modelDataRef = useRef(null); // The loop will read this
const predictionRef = useRef(null); // The loop will read this
// Add this with your other refs
const gridCellsRef = useRef([]);
const canvasRef = useRef(null); // NEW: draw canvas ref

  console.log("Test one o one --- ")
  // Stable polling (no modelData dependency) with /static/data.json
  useEffect(() => {
    let polling = true;
    let demoInterval = null;

    const loadData = async () => {
      if (stageRef.current === 'complete') return; 
      gridCellsRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      try {
        const response = await fetch(`/static/data.json`);
        const data = await response.json();
        
        // Create unique key
        const predictionKey = `${data.prediction}_${data.confidence}`;
        
        // Check if new
        if (predictionKey !== lastPredictionRef.current) {
          console.log('🔥 New prediction detected:', data.prediction);

          // --- FIX: CALCULATE THIS FIRST! ---
          // We must define featuresFlat BEFORE we use it in the lines below
          const featuresFlat = Array.isArray(data.features)
            ? data.features.map(f => (Array.isArray(f) ? f.flat(Infinity) : []))
            : [];
          // ----------------------------------

          // NOW we can save it to the Refs
          modelDataRef.current = { raw: data, featuresFlat: featuresFlat }; 
          predictionRef.current = summarizePrediction(data, featuresFlat);
          lastPredictionRef.current = predictionKey;
          
          // Reset visuals
          resetVisualState();
          clockRef.current = performance.now(); // Reset animation clock

          // Update State
          setModelData({ raw: data, featuresFlat });
          setPrediction(summarizePrediction(data, featuresFlat));
          
          // Start Animation
          setAnimationStage('animating');
          stageRef.current = 'animating';
          animationStateRef.current = { stage: 0, progress: 0, isComplete: false };
        }
      } catch (err) {
        console.error("Error in loadData:", err);
        setAnimationStage('waiting');
        stageRef.current = 'waiting';
      } finally {
        // Only poll if component is still mounted
        if (polling) setTimeout(loadData, 1000);
      }
    };

    if (isDemoMode) {
      // Auto-play: reload every 4s
      demoInterval = setInterval(() => {
        stageRef.current = 'waiting';
        setAnimationStage('waiting');
        loadData();
      }, 4000);
      loadData(); // kick off immediately
    } else {
      loadData(); // normal polling kicks off once; your existing loadData should reschedule itself
    }

    return () => {
      polling = false;
      if (demoInterval) clearInterval(demoInterval);
    };
  }, [isDemoMode]);


  useEffect(() => {
    if (!mountRef.current) return;

    neuronMeshesRef.current = [];
    characterMeshesRef.current = [];
    connectionLinesRef.current = [];
    charConnectionsRef.current = [];

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Pure Black
    scene.fog = new THREE.Fog(0x000000, 30, 80);  // Black Fog
    sceneRef.current = scene;
    

    // Compute network center for camera target
    const netCenterX = NETWORK_CONFIG.layers.reduce((sum, l) => sum + l.position, 0) / NETWORK_CONFIG.layers.length;

    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(20, 12, 35);
    camera.lookAt(netCenterX, 0, 0); // center on network
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(netCenterX, 0, 0); // center on network
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 10;
    controls.maxDistance = 80;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x4f46e5, 1.5, 60);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x06b6d4, 1.2, 60);
    pointLight2.position.set(30, 8, 15);
    scene.add(pointLight2);

    // 2. ADD THE GRID FLOOR
    // Size: 100x100 units
    // Center Line Color: Dark Blue (0x4f46e5)
    // Grid Color: Very Dark Gray (0x222222)
    const gridHelper = new THREE.GridHelper(100, 100, 0x4f46e5, 0x222222);
    
    // Position it below the network
    gridHelper.position.set(10, -10, 0); 
    
    // Make it slightly transparent so it's not distracting
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 1;
    
    scene.add(gridHelper);

    buildNeuralNetwork(scene);
    buildCharacterGrid(scene); // will now place grid based on final layer

    let animationFrame;
    const animate = () => {
      animationFrame = requestAnimationFrame(animate);
      controls.update();
      if (stageRef.current === 'animating') updateDramaticAnimation();
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
      neuronMeshesRef.current.forEach(layer => layer.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      }));
      characterMeshesRef.current.forEach(char => {
        char.geometry.dispose();
        char.material.dispose();
      });
      connectionLinesRef.current.forEach(line => {
        line.geometry.dispose();
        line.material.dispose();
      });
      charConnectionsRef.current.forEach(line => {
        line.geometry.dispose();
        line.material.dispose();
      });
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

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

const buildCharacterGrid = (scene) => {
    const gridCols = 16;
    const gridRows = Math.ceil(CHARACTERS.length / gridCols);
    const spacing = 0.35; // Slightly more spacing for the boxes

    // Position to the RIGHT of final layer
    const finalLayerX = NETWORK_CONFIG.layers[NETWORK_CONFIG.layers.length - 1].position;
    const gridX = finalLayerX + 6;

    const offsetY = (gridRows - 1) * spacing / 2;
    const offsetZ = (gridCols - 1) * spacing / 2;

    const finalLayerNeurons = neuronMeshesRef.current[neuronMeshesRef.current.length - 1];

    // Clear previous refs
    gridCellsRef.current = [];

    CHARACTERS.forEach((char, idx) => {
      const row = Math.floor(idx / gridCols);
      const col = idx % gridCols;

      const x = gridX;
      const y = row * spacing - offsetY;
      const z = col * spacing - offsetZ;

      // 1. CREATE THE CELL FRAME (The Grid Lines)
      // We use EdgesGeometry to get a nice clean outline
      const boxGeo = new THREE.BoxGeometry(0.05, spacing * 0.9, spacing * 0.9);
      const edges = new THREE.EdgesGeometry(boxGeo);
      const lineMat = new THREE.LineBasicMaterial({ 
        color: 0x444444, // Dark Gray lines by default
        transparent: true,
        opacity: 0.3     // Visible but subtle
      });
      const cellFrame = new THREE.LineSegments(edges, lineMat);
      cellFrame.position.set(x, y, z);
      cellFrame.userData = { baseOpacity: 0.3 };
      
      scene.add(cellFrame);
      gridCellsRef.current.push(cellFrame);

      // 2. CREATE THE CHARACTER SPRITE
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 128; canvas.height = 128;

      ctx.fillStyle = 'rgba(255, 255, 255, 1.0)'; // Pure white text for clarity
      ctx.font = 'bold 80px "Noto Sans Ethiopic", Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(char, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.5, // Start fairly visible (50%)
        color: 0xffffff
      });
      const sprite = new THREE.Sprite(spriteMat);
      // Place sprite slightly in front of the grid box so it doesn't clip
      sprite.position.set(x + 0.1, y, z); 
      sprite.scale.set(0.25, 0.25, 1);
      
      scene.add(sprite);
      characterMeshesRef.current.push(sprite);

      // 3. CREATE CONNECTIONS (Sampled)
      const connectionsToCreate = Math.min(3, finalLayerNeurons.length);
      for (let i = 0; i < connectionsToCreate; i++) {
        const neuronIdx = Math.floor(Math.random() * finalLayerNeurons.length);
        const neuron = finalLayerNeurons[neuronIdx];
        
        const points = [neuron.position, new THREE.Vector3(x, y, z)];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0x4f46e5,
          transparent: true,
          opacity: 0.05,
        });

        const line = new THREE.Line(geometry, material);
        line.userData = { targetCharIndex: idx };
        scene.add(line);
        charConnectionsRef.current.push(line);
      }
    });
    
  
  };

const createNeuronLayer = (layer, layerIdx) => {
    const neurons = [];
    const neuronSize = 0.15; // Slightly larger for visibility
    const gridSize = Math.ceil(Math.sqrt(layer.neurons));
    const spacing = 0.28;
    const offset = (gridSize - 1) * spacing / 2;

    for (let i = 0; i < layer.neurons; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;

      const x = layer.position;
      const y = row * spacing - offset;
      const z = col * spacing - offset;

      const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
      // ERROR FIX: Use StandardMaterial to support Emissive (Glow) properly
      // In createNeuronLayer function:
      const material = new THREE.MeshStandardMaterial({
        color: 0x444444,      // from 0x111111 to DARK GRAY so you can see them
        emissive: 0x000000,
        emissiveIntensity: 0,
        transparent: true,
        opacity: 0.3          // from 0.1 to 0.3
      });

      const neuron = new THREE.Mesh(geometry, material);
      neuron.position.set(x, y, z);
      neuron.userData = { 
        layerIdx,
        neuronIdx: i,
        baseColor: new THREE.Color(layer.color),
        isActive: false,
        isPathActive: false
      };

      neurons.push(neuron);
    }
    return neurons;
  };

  const createConnectionsToNextLayer = (scene, currentLayer, nextLayer, layerIdx) => {
    const currentNeurons = neuronMeshesRef.current[layerIdx];
    const maxConnections = 5000;
    const totalPossible = currentLayer.neurons * nextLayer.neurons;
    const samplingRate = Math.min(1, maxConnections / totalPossible);

    const nextGridSize = Math.ceil(Math.sqrt(nextLayer.neurons));
    const spacing = 0.28;
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

    context.fillStyle = 'rgba(255, 255, 255, 0.7)';
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
      opacity: 0.8
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(layer.position, -5, 0);
    sprite.scale.set(2.5, 0.6, 1);
    scene.add(sprite);
  };

const clockRef = useRef(performance.now());

// reset visuals before new run
const resetVisualState = () => {
  neuronMeshesRef.current.flat().forEach(n => {
    n.userData.isActive = false;
    n.userData.isPathActive = false;      // NEW
    n.userData.activationStrength = 0;
    n.material.opacity = 0.2;
    n.material.emissiveIntensity = 0;
    n.material.color.set(n.userData.baseColor);
    n.material.emissive.set(n.userData.baseColor);
  });
  connectionLinesRef.current.forEach(l => {
    l.userData.isActive = false;
    l.material.opacity = l.userData.baseOpacity ?? 0.08;
    l.material.color.setHex(0x4f46e5);
  });
  charConnectionsRef.current.forEach(l => {
    l.userData.isActive = false;
    l.material.opacity = l.userData.baseOpacity ?? 0.05;
    l.material.color.setHex(0x4f46e5);
  });
};

// replace updateDramaticAnimation with delta-time + completion guard
const updateDramaticAnimation = () => {
    if (stageRef.current === 'complete') return; 

  const data = modelDataRef.current; 
  if (!data || !data.featuresFlat) return;

  const now = performance.now();
  const dt = (now - clockRef.current) / 1000;
  clockRef.current = now;

  const animationState = animationStateRef.current;
  animationState.progress += dt;
  
  // Speed up the wave a bit (1.5s duration)
  const waveDuration = 1.5; 
  const wavePos = animationState.progress / waveDuration;
  if (wavePos > 1.2 && !animationState.isComplete) {
    animationState.isComplete = true;
    setAnimationStage('complete');
    stageRef.current = 'complete';
    
    highlightDecisionPath(); 
    return; 
  }
  const numLayers = neuronMeshesRef.current.length;
  neuronMeshesRef.current.forEach((layerNeurons, lIdx) => {
    const layerTrigger = lIdx / numLayers;
    const dist = wavePos - layerTrigger;

    if (dist > 0) {
      // READ FROM REF
      const features = data.featuresFlat[lIdx] || []; 
      
      layerNeurons.forEach((neuron, nIdx) => {
        const val = features[nIdx] ? Math.abs(features[nIdx]) : 0;
        
        // Lower threshold to ensure things light up
        if (val > 0.05) { 
          neuron.userData.isActive = true;
          
          // Flash Calculation
          let intensity = 0;
          if (dist < 0.3) {
             intensity = Math.sin((dist / 0.3) * Math.PI); // Pulse
          } else {
             intensity = 0.1; // Dim trail
          }

          // Force the visual update
          neuron.material.emissive.setHex(0x00ffff);
          neuron.material.emissiveIntensity = intensity * 5.0; // Crank up the brightness
          neuron.material.opacity = 0.1 + intensity;
        }
      });
    }
  });
     // 2. ANIMATE CONNECTIONS (BOOSTED)
    connectionLinesRef.current.forEach(line => {
      const lIdx = line.userData.layerIdx;
      
      // Only animate if wave has reached this section
      if (wavePos > (lIdx / numLayers)) {
        const srcNeuron = neuronMeshesRef.current[lIdx][line.userData.sourceIdx];
        const tgtNeuron = neuronMeshesRef.current[lIdx + 1]?.[line.userData.targetIdx];

        // Light up line ONLY if both ends are active
        if (srcNeuron?.userData.isActive && tgtNeuron?.userData.isActive) {
          // Calculate brightness based on neurons
          const avgIntensity = (srcNeuron.material.emissiveIntensity + tgtNeuron.material.emissiveIntensity) / 2;
          
          if (avgIntensity > 0.1) {
             // FIX: Boost opacity significantly. 
             // Previously it was * 0.5, now * 1.5 to make them pop.
             line.material.opacity = Math.min(avgIntensity * 1.5, 0.8); 
             line.material.color.setHex(0x00ffff); // Cyan lines
          } else {
             line.material.opacity = 0.02; // Fade out
          }
        }
      }
    });
}
   

  const highlightPredictedCharacter = () => {
    if (prediction.index === null) return;

    // Reset all characters
    characterMeshesRef.current.forEach(char => {
      char.material.opacity = 0.3;
      char.userData.isPredicted = false;
    });

    // Reset all character connections
    charConnectionsRef.current.forEach(line => {
      line.material.opacity = 0.05;
      line.material.color.setHex(0x4f46e5);
      line.userData.isActive = false;
    });

    // Highlight predicted character with PULSE GLOW
    const predictedChar = characterMeshesRef.current[prediction.index];
    if (predictedChar) {
      predictedChar.userData.isPredicted = true;
      
      // Animate pulse
      let pulseTime = 0;
      const pulseInterval = setInterval(() => {
        pulseTime += 0.05;
        const pulse = 0.7 + Math.sin(pulseTime * 8) * 0.3;
        predictedChar.material.opacity = pulse;
        
        if (pulseTime > Math.PI * 4) clearInterval(pulseInterval);
      }, 50);
    }

    // Highlight top 5 with different intensities
    prediction.top5.forEach((item, rank) => {
      const char = characterMeshesRef.current[item.index];
      if (char) {
        const intensity = 0.5 + (0.5 * (5 - rank) / 5);
        char.material.opacity = intensity;
      }
    });

    // Light up connections to predicted character
    charConnectionsRef.current.forEach(line => {
      if (line.userData.targetCharIndex === prediction.index) {
        line.userData.isActive = true;
        line.material.opacity = 0.8;
        line.material.color.setHex(0x00ffc8);
      }
    });
  };

   const PATH_THRESHOLD = 0.2; // Neurons above 20% activation are "on the path"
const highlightDecisionPath = () => {
  const pred = predictionRef.current;
  const data = modelDataRef.current;
  if (!pred || !data) return;

  // 1. STOP THE ANIMATION LOOP FROM INTERFERING
  stageRef.current = 'complete';
  setAnimationStage('complete');

  console.log("🔦 FORCING HIGHLIGHT on Index:", pred.index);

  const threshold = 0.15; // declare the threshold

  // ===========================================
  // STEP A: NEURONS (Active = Cyan, Inactive = Dim Gray)
  // ===========================================
  neuronMeshesRef.current.forEach((layerNeurons, lIdx) => {
    const features = data.featuresFlat[lIdx] || [];
    layerNeurons.forEach((neuron, nIdx) => {
      const val = features[nIdx] ? Math.abs(features[nIdx]) : 0;
      if (val > threshold) {
        neuron.userData.isFinalPath = true;
        neuron.material.emissive.setHex(0x00ffff);
        neuron.material.emissiveIntensity = 2.0;
        neuron.material.opacity = 1.0;
        neuron.material.color.setHex(0x000000);
      } else {
        neuron.userData.isFinalPath = false;
        neuron.material.emissiveIntensity = 0;
        neuron.material.color.setHex(0x333333);
        neuron.material.opacity = 0.15;
        neuron.material.transparent = true;
      }
    });
  });
    // ===========================================
    // STEP B: Force-Highlight the Lines
    // ===========================================
    connectionLinesRef.current.forEach(line => {
      const lIdx = line.userData.layerIdx;
      const srcNeuron = neuronMeshesRef.current[lIdx]?.[line.userData.sourceIdx];
      const tgtNeuron = neuronMeshesRef.current[lIdx + 1]?.[line.userData.targetIdx];

      // If both ends are on the final path...
      if (srcNeuron?.userData.isFinalPath && tgtNeuron?.userData.isFinalPath) {
        // FORCE VISIBILITY
        line.material.opacity = 0.8; 
        line.material.color.setHex(0x00ffff); // CYAN
        line.material.transparent = true;
      } else {
        // Hide background noise
         line.material.opacity = 0.03; 
        line.material.color.setHex(0x4f46e5); // Original Blue/Purple
      }
    });

     // ===========================================
    // STEP C: RESULT CHARACTER & GRID (UPDATED)
    // ===========================================
    
    // 1. Reset all Grid Cells and Chars to default
    characterMeshesRef.current.forEach((char, idx) => {
        // Dim the non-selected ones, but keep readable
        char.material.opacity = 0.3; 
        char.material.color.setHex(0xaaaaaa); // Light Gray
        char.scale.set(0.25, 0.25, 1);
        
        // Reset the grid box
        if (gridCellsRef.current[idx]) {
            gridCellsRef.current[idx].material.color.setHex(0x444444);
            gridCellsRef.current[idx].material.opacity = 0.3;
        }
    });

    // 2. HIGHLIGHT THE WINNER
    const charSprite = characterMeshesRef.current[pred.index];
    const cellFrame = gridCellsRef.current[pred.index];

    if (charSprite) {
      // Super Bright Character
      charSprite.material.opacity = 1.0;
      charSprite.material.color.setHex(0x00ffff); // Cyan
      charSprite.scale.set(0.4, 0.4, 1); // 2x Size
    }

    if (cellFrame) {
      // Highlight the box around it
      cellFrame.material.color.setHex(0x00ffff); // Cyan Lines
      cellFrame.material.opacity = 1.0;
    }

    // 3. Highlight Connections
    charConnectionsRef.current.forEach(line => {
      if (line.userData.targetCharIndex === pred.index) {
        line.material.opacity = 1.0;
        line.material.color.setHex(0x00ffff);
      } else {
        line.material.opacity = 0.01;
        line.material.color.setHex(0x4f46e5);
      }
    });
  };
 
  const handlePredict = async () => {
    if (!canvasRef.current) return;
    try {
      // 1) get PNG data from canvas
      const canvasData = canvasRef.current.getDataURL('png', false, '#000000');
      // 2) base64 → blob
      const res = await fetch(canvasData);
      const blob = await res.blob();
      const formData = new FormData();
      formData.append('file', blob, 'drawing.png');

      // 3) send to backend
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      // 4) update visualization (no polling needed for this update)
      const featuresFlat = Array.isArray(data.features)
        ? data.features.map(f => (Array.isArray(f) ? f.flat(Infinity) : []))
        : [];
      modelDataRef.current = { raw: data, featuresFlat };
      predictionRef.current = summarizePrediction(data, featuresFlat);

      resetVisualState();
      clockRef.current = performance.now();
      setModelData({ raw: data, featuresFlat });
      setPrediction(summarizePrediction(data, featuresFlat));
      setAnimationStage('animating');
      stageRef.current = 'animating';
      animationStateRef.current = { stage: 0, progress: 0, isComplete: false };
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  return (
    <div style={{ 
      width: '100%', height: '100vh', background: '#000000',
      position: 'relative', overflow: 'hidden'
    }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      {/* Floating input card */}
      <div style={{
        position: 'absolute', top: '20px', left: '20px', zIndex: 100,
        background: 'rgba(10, 15, 30, 0.9)',
        border: '1px solid #4f46e5',
        padding: '20px',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: '14px' }}>INPUT</h3>
        <CanvasDraw
          ref={canvasRef}
          brushColor="#FFFFFF"
          backgroundColor="#000000"
          brushRadius={8}
          lazyRadius={0}
          canvasWidth={250}
          canvasHeight={250}
          style={{ border: '1px solid #333', borderRadius: '8px' }}
        />
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button
            onClick={handlePredict}
            style={{
              flex: 1, padding: '10px',
              background: '#4f46e5', color: '#fff',
              border: 'none', borderRadius: '5px',
              cursor: 'pointer', fontWeight: 'bold'
            }}
          >
            RUN ➤
          </button>
          <button
            onClick={handleClear}
            style={{
              flex: 1, padding: '10px',
              background: '#333', color: '#fff',
              border: 'none', borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            CLEAR
          </button>
        </div>
      </div>

      {/* Status Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '24px',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '14px',
        fontFamily: 'monospace',
        background: 'rgba(15, 23, 42, 0.7)',
        padding: '14px 24px',
        borderRadius: '12px',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(79, 70, 229, 0.2)'
      }}>
        {animationStage === 'waiting' && '● Network ready - Waiting for prediction...'}
        {animationStage === 'animating' && '● Neural pathways activating...'}
        {animationStage === 'complete' && `● Prediction: ${prediction.label} (${prediction.prob}%)`}
      </div>

     

      {/* Network Stats */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '24px',
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(12px)',
        padding: '14px 20px',
        borderRadius: '12px',
        border: '1px solid rgba(79, 70, 229, 0.25)',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '11px'
      }}>
        <div style={{ marginBottom: '6px' }}>
          Network Layers: <span style={{ color: '#06b6d4', fontWeight: '600' }}>
            {NETWORK_CONFIG.layers.length - 1 /* exclude Input */}
          </span>
        </div>
        <div style={{ marginBottom: '6px' }}>
          Total Neurons: <span style={{ color: '#10b981', fontWeight: '600' }}>
            {NETWORK_CONFIG.layers.reduce((sum, l) => sum + l.neurons, 0)}
          </span>
        </div>
        <div>
          Characters: <span style={{ color: '#ec4899', fontWeight: '600' }}>
            {CHARACTERS.length}
          </span>
        </div>
      </div>

      {/* Camera Control Hint */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '11px',
        fontFamily: 'monospace',
        background: 'rgba(15, 23, 42, 0.5)',
        padding: '8px 16px',
        borderRadius: '8px',
        backdropFilter: 'blur(8px)'
      }}>
        🖱️ Drag to rotate • Scroll to zoom
      </div>

      {/* A simple stats readout in the corner */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontFamily: 'monospace',
        color: '#00ffff',
        fontSize: '12px',
        pointerEvents: 'none'
      }}>
        <div>ETHIOPIC.AI // SYSTEM READY</div>
        <div>-------------------------</div>
        <div>ACTIVE PATHWAYS: {prediction.activeCount || 0}</div>
        <div>CONFIDENCE: {prediction.prob || 0}%</div>
        <div>LAYER SYNC: ONLINE</div>
      </div>

      {/* Demo Mode Toggle Button */}
      <div style={{ position: 'absolute', bottom: '30px', right: '30px', zIndex: 20 }}>
        <button
          onClick={() => setIsDemoMode(!isDemoMode)}
          style={{
            background: isDemoMode ? '#00ffff' : 'transparent',
            color: isDemoMode ? '#000' : '#00ffff',
            border: '1px solid #00ffff',
            padding: '10px 20px',
            fontFamily: 'monospace',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '8px'
          }}
        >
          {isDemoMode ? '⏹ STOP DEMO' : '▶ AUTO-PLAY DATASET'}
        </button>
      </div>
    </div>
  );
};

export default NetworkVisualizer;