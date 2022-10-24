import { defineConfig } from 'vite'
import { fileURLToPath,URL } from 'url'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  base:'/relinex/',
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url))
    }
  },
  server: {
    cors: true, // 默认启用并允许任何源
    port: 801,
    proxy: {
      "/wx": {
        target: "http://localhost:8080/relinexService/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wx/, ""),
      },
    },
  },
})