 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Lab1.FEWD/',
  plugins: [react()],
})