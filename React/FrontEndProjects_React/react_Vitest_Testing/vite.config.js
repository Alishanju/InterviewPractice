
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // needed for RTL
    setupFiles: './src/setupTests.js', // setup file (like create-react-app)
  },
})