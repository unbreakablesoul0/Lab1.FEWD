import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   base: '/Lab1.FEWD/',
  plugins: [react()],
})
