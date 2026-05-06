import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wijnen: resolve(__dirname, 'pages/wijnen.html'),
        wijncafe: resolve(__dirname, 'pages/wijncafe.html'),
        thuisbezorgd: resolve(__dirname, 'pages/thuisbezorgd.html'),
        proeverijen: resolve(__dirname, 'pages/proeverijen.html'),
        overOns: resolve(__dirname, 'pages/over-ons.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        solutionslab: resolve(__dirname, 'pages/solutionslab.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['.railway.app', '.up.railway.app'],
  },
})
