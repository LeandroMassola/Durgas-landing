import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; // o @astrojs/vercel/static si es estático

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server', // "static" si querés solo frontend
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});