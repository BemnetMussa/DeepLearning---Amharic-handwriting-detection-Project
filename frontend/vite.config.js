import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: '../assets/frontend',
    emptyOutDir: true
  }
})
