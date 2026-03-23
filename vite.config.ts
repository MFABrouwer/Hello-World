import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins:[
    tailwindcss(),
    react()
  ],
  // BELANGRIJK: Vervang 'mijn-portfolio' door de exacte naam van jouw GitHub repository!
  base: '/Hello-World/', 
});