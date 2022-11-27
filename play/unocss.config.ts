import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      fonts: {
        sans: "Inter:400,600,800",
        mono: "DM Mono",
      },
    }),
  ],
})
