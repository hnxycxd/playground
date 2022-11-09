/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-head": "#e3e4e5",
      },
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
