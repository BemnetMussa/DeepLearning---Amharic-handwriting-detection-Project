# Project Context & Progress

## Overview
- Project: Amharic handwriting detection (deep learning) with a Three.js React frontend visualizer.
- Frontend: `src/App.jsx` renders a cinematic neural network visualization and consumes `/data.json` predictions from Streamlit backend.

## Current State
- Network architecture hardcoded in `NETWORK_CONFIG`.
- Polling backend (`/data.json`) every 500ms to trigger staged activation animations.
- Three.js scene with layered neurons, sampled connections, labels, fog, lights, and status indicators.
- Animation states: `waiting`, `animating`, `complete`.

## To-Do (Next)
- Validate `/data.json` schema and add graceful error messaging/empty state.
- Add UI controls: play/pause/reset animation, speed slider.
- Improve performance for large neuron counts (frustum culling, instancing).
- Add legends/tooltips for layers and activations.
- Hook up real model metadata (layer names/sizes) instead of hardcoded config.

## Blockers/Risks
- Potential performance impact with many connections; consider GPU-friendly instancing.
- Polling interval may be too aggressive; consider websockets or backoff.

## Quick References
- Scene mount: `mountRef`.
- Network build: `buildNeuralNetwork`, `createNeuronLayer`, `createConnectionsToNextLayer`.
- Animation driver: `updateDramaticAnimation` (per-layer staged activation).

## Notes
- Keep background/branding consistent: gradient `#0a0e27 → #1a1d2e`.
- Maintain status indicators (bottom-left) and stats (top-left).