import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ["babel-plugin-styled-components"]
    }
  })],
  server: {
    proxy: {
      '/api': {
        target: 'http://13.235.209.201:4000', // Target backend server
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '/api/v1') // Optional: Rewrite the API path if needed
      }
    }
  },

})


