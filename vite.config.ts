import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
import analyzer from 'rollup-plugin-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lodash-es', 'antd'],
  },
  plugins: [react()],
  build: {
    // rollupOptions: {
    // output: {
    // manualChunks: (id) => {
    //   if (id.includes("node_modules")) {
    //     return id
    //       .toString()
    //       .split("node_modules/")[1]
    //       .split("/")[0]
    //       .toString()
    //   }
    // },
    // chunkFileNames: "js/[name].[hash].js",
    // assetFileNames: "[ext]/[name].[hash].[ext]",
    // },
    // plugins: [analyzer()],
    // },
  },
})
