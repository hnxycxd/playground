import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [ AntdResolve() ],
      // libs: [
      //   {
      //     libraryName: 'antd',
      //     esModule: true,
      //     resolveStyle: (name) => `antd/es/${name}/style/index`
      //   }
      // ]
    })
  ]
})
