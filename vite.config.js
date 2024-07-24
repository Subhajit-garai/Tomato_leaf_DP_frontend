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
        target:'https://tldp-node-server-0-0-1.onrender.com',
        changeOrigin:true,
        secure: false,
      }
       
        }
  },

})


