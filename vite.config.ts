import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import'
import vitePluginImp from "vite-plugin-imp"

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
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        // {
        //   libName: 'lodash',
        //   libDirectory: '',
        //   camel2DashComponentName: false
        // },
        {
          libName: "antd",
          style(name) {
            // use less
            return `antd/es/${name}/style/index.js`
          },
        },
      ],
    }),
    // createStyleImportPlugin({
    //   resolves: [AntdResolve()],
    //   // libs: [
    //   //   {
    //   //     libraryName: 'antd',
    //   //     esModule: true,
    //   //     resolveStyle: (name) => `antd/es/${name}/style/index`
    //   //   }
    //   // ]
    // }),
  ],
  build: {
    rollupOptions: {},
  },
})
