import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/Users/DELL USER/Documents/SwiftMove/swiftmove-logistics-frontend',
        // Allow serving files from node_modules/leaflet/dist
        'C:/Users/DELL USER/Documents/SwiftMove/swiftmove-logistics-frontend/node_modules/leaflet/dist',
      ],
    },
  }
})
