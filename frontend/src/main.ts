import p5 from 'p5';

// --- Type Definitions ---
interface AppData {
    prediction: string;
    confidence: number;
    features: number[][][][]; // Array of blocks, each block is an array of feature maps (2D number arrays)
    raw_img_b64: string;
    all_probabilities: number[];
    idx_to_class: { [key: number]: string };
}

type SketchState = 'loading' | 'ready' | 'error' | 'waiting';

interface Images {
    input?: p5.Image;
    featureBlocks: p5.Image[][];
}

interface GridDimensions {
    w: number;
    h: number;
}

interface LayerBounds {
    x: number;
    y: number;
    w: number;
    h: number;
    label: string;
}

// --- State Management ---
let sketchState: SketchState = 'loading';
let data: AppData | null = null;
let images: Images = { featureBlocks: [] };

// --- Layout & Style Constants ---
const CANVAS_PADDING = 40;
const LAYER_GAP = 120;
const FEATURE_MAP_SIZE = 20;
const FEATURE_MAP_GAP = 3;
const MAX_MAPS_PER_ROW = 8;
const CONNECTION_LINE_COLOR: [number, number, number, number] = [150, 150, 200, 100];
const BAR_CHART_WIDTH = 250;
const BAR_CHART_HEIGHT = 250;
const PREDICTION_HIGHLIGHT_COLOR: [number, number, number] = [0, 180, 0];
const OTHER_BAR_COLOR: [number, number, number, number] = [180, 180, 180, 150];

// --- p5.js Sketch ---
const mySketch = (p: p5) => {

    p.setup = () => {
        p.createCanvas(1200, 600).parent('app');
        p.imageMode(p.CORNER);
        p.rectMode(p.CORNER);
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont('sans-serif');
        
        loadData(p);
    };

    p.draw = () => {
        p.background(245, 245, 245);
        
        switch (sketchState) {
            case 'loading':
                drawStateMessage(p, "Loading visualization data...");
                break;
            case 'error':
                drawStateMessage(p, "Error: Could not load data. Is the app running?");
                break;
            case 'ready':
                drawNetwork(p);
                break;
            default:
                drawStateMessage(p, "Waiting for analysis...");
        }
    };
};

// --- Asynchronous Data Loading ---
async function loadData(p: p5): Promise<void> {
    try {
        const response = await fetch('/data.json?t=' + new Date().getTime());
        if (!response.ok) {
            throw new Error("Failed to fetch data.json");
        }
        data = await response.json() as AppData;

        // load input image (await p.loadImage via callback)
        images.input = await new Promise<p5.Image>((resolve, reject) => {
            p.loadImage(data!.raw_img_b64, (img: p5.Image) => resolve(img), (err: any) => reject(err));
        });

        // synchronously create p5.Image objects for feature maps (no extra Promises)
        images.featureBlocks = data.features.map(featureBlock =>
            featureBlock.map(fm => createImageFromGreyscaleArray(p, fm))
        );

        sketchState = 'ready';

    } catch (error) {
        console.error("Error during data loading:", error);
        sketchState = 'error';
    }
}

// --- Main Drawing Logic ---
function drawNetwork(p: p5): void {
    if (!data || !images.input) {
        return;
    }

    let currentX = CANVAS_PADDING;
    const centerY = p.height / 2;
    let layerBounds: LayerBounds[] = [];

    const inputSize = 56;
    const inputBounds: LayerBounds = { x: currentX, y: centerY - inputSize / 2, w: inputSize, h: inputSize, label: "Input" };
    p.image(images.input, inputBounds.x, inputBounds.y, inputBounds.w, inputBounds.h);
    drawLabel(p, inputBounds.x + inputBounds.w / 2, inputBounds.y, inputBounds.label);
    layerBounds.push(inputBounds);
    currentX += inputBounds.w + LAYER_GAP;

    images.featureBlocks.forEach((block, index) => {
        const grid = calculateGridDimensions(block.length);
        const bounds: LayerBounds = { x: currentX, y: centerY - grid.h / 2, w: grid.w, h: grid.h, label: `Block ${index + 1}` };
        drawFeatureGrid(p, block, bounds.x, bounds.y, grid);
        drawLabel(p, bounds.x + bounds.w / 2, bounds.y, bounds.label);
        layerBounds.push(bounds);
        currentX += bounds.w + LAYER_GAP;
    });
    
    const outputBounds: LayerBounds = { x: currentX, y: centerY - BAR_CHART_HEIGHT / 2, w: BAR_CHART_WIDTH, h: BAR_CHART_HEIGHT, label: "Output" };
    drawBarChart(p, outputBounds.x, outputBounds.y, data);
    drawLabel(p, outputBounds.x + outputBounds.w / 2, outputBounds.y, outputBounds.label);
    layerBounds.push(outputBounds);

    drawConnections(p, layerBounds);
}

// --- Helper Drawing Functions ---
function drawStateMessage(p: p5, message: string): void {
    p.fill(100);
    p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(message, p.width / 2, p.height / 2);
}

function drawLabel(p: p5, x: number, y: number, label: string): void {
    p.fill(50);
    p.textSize(14);
    p.textAlign(p.CENTER, p.BOTTOM);
    p.text(label, x, y - 10);
}

function drawFeatureGrid(p: p5, featureMaps: p5.Image[], startX: number, startY: number, grid: GridDimensions): void {
    p.push();
    p.translate(startX, startY);
    p.stroke(220);
    p.noFill();
    p.rect(0, 0, grid.w, grid.h);

    for (let i = 0; i < featureMaps.length; i++) {
        const col = i % MAX_MAPS_PER_ROW;
        const row = Math.floor(i / MAX_MAPS_PER_ROW);
        const x = col * (FEATURE_MAP_SIZE + FEATURE_MAP_GAP);
        const y = row * (FEATURE_MAP_SIZE + FEATURE_MAP_GAP);
        p.image(featureMaps[i], x, y, FEATURE_MAP_SIZE, FEATURE_MAP_SIZE);
    }
    p.pop();
}

function drawConnections(p: p5, layerBounds: LayerBounds[]): void {
    p.stroke(CONNECTION_LINE_COLOR);
    p.strokeWeight(1);
    for (let i = 0; i < layerBounds.length - 1; i++) {
        const from = layerBounds[i];
        const to = layerBounds[i+1];
        p.line(from.x + from.w, from.y, to.x, to.y);
        p.line(from.x + from.w, from.y + from.h, to.x, to.y + to.h);
    }
}

function drawBarChart(p: p5, startX: number, startY: number, data: AppData): void {
    p.push();
    p.translate(startX, startY);

    const { all_probabilities, idx_to_class, prediction } = data;
    const numClasses = all_probabilities.length;
    const barWidth = BAR_CHART_WIDTH / numClasses;
    
    const class_to_idx: { [key: string]: string } = Object.fromEntries(Object.entries(idx_to_class).map(([k, v]) => [v, k]));
    const predictedIndex = parseInt(class_to_idx[prediction]);

    for (let i = 0; i < numClasses; i++) {
        const prob = all_probabilities[i];
        const barHeight = prob * BAR_CHART_HEIGHT;
        const barX = i * barWidth;
        const barY = BAR_CHART_HEIGHT - barHeight;

        if (i === predictedIndex) {
            p.fill(PREDICTION_HIGHLIGHT_COLOR);
        } else {
            p.fill(OTHER_BAR_COLOR);
        }
        p.noStroke();
        p.rect(barX, barY, barWidth, barHeight);
    }
    p.pop();
}

// --- Utility Functions ---
function calculateGridDimensions(numItems: number): GridDimensions {
    const mapsPerRow = MAX_MAPS_PER_ROW;
    const numRows = Math.ceil(numItems / mapsPerRow);
    const width = mapsPerRow * (FEATURE_MAP_SIZE + FEATURE_MAP_GAP) - FEATURE_MAP_GAP;
    const height = numRows * (FEATURE_MAP_SIZE + FEATURE_MAP_GAP) - FEATURE_MAP_GAP;
    return { w: width, h: height };
}

function createImageFromGreyscaleArray(p: p5, array: number[][]): p5.Image {
    const width = array[0].length;
    const height = array.length;
    const img = p.createImage(width, height);
    img.loadPixels();

    let minVal = array[0][0], maxVal = array[0][0];
    for(let r=0; r<height; r++) for(let c=0; c<width; c++) {
        const val = array[r][c];
        if (val < minVal) minVal = val;
        if (val > maxVal) maxVal = val;
    }
    const range = maxVal - minVal;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const val = range > 0 ? ((array[y][x] - minVal) / range) * 255 : 0;
            const index = (y * width + x) * 4;
            img.pixels[index] = val;
            img.pixels[index + 1] = val;
            img.pixels[index + 2] = val;
            img.pixels[index + 3] = 255;
        }
    }
    img.updatePixels();
    return img;
}

// Initialize p5
const sketch = new p5(mySketch);
