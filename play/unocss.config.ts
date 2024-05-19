import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  rules: [["custom-rule", { color: "red" }]],
  shortcuts: {
    "custom-shortcut": "text-lg text-orange hover:text-teal",
  },
  presets: [
    presetUno(),
    // presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
    // presetWebFonts({
    //   fonts: {
    //     sans: "Inter:400,600,800",
    //     mono: "DM Mono",
    //   },
    // }),
  ],
});
