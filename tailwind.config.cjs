/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Nunito", "Nunito Fallback", "ui-sans-serif", "system-ui"],
      mono: ["JetBrains Mono", "monospace"],
      display: ["LatoBold", "LatoBold Fallback", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: ['light', 'night']
  }
};
