import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF971D",
        background: "#000510",
        dashboard_background: "#4A4A4F",
        light_grey: "#737373",
        lighter_grey: "#BFBFBF",
        default_green: "#00EC42",
        default_red: "#FF2E2E",
        box_bg: "#345D9D",
      },
      screens: {
        ds: "320px",
        xxs: "350px",
        xs: "480px",
        bs: "540px",
        mdl: "978px",
      },
    },
  },
  plugins: [],
} satisfies Config;
