import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deployed as a GitHub Pages *user site* (abhishek-sbiju.github.io),
// so the app is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
