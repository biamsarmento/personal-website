import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF8F5",
          alt: "#F9F0F3",
        },
        blush: {
          50: "#FFF0F5",
          100: "#FFD9E8",
          200: "#F7B8CD",
          300: "#EC94B2",
          400: "#DC7098",
          500: "#C4527E",
          600: "#A33A68",
        },
        sage: {
          50: "#F2F9F7",
          100: "#D9EFE9",
          200: "#B0D9CE",
          300: "#82BEB2",
          400: "#5DA399",
          500: "#3F8A80",
          600: "#2D7168",
        },
        espresso: "#2D1A18",
        mocha: {
          100: "#F0E5E5",
          200: "#D9C8C8",
          300: "#BEA5A5",
          400: "#A08585",
          500: "#826868",
          600: "#644E4E",
          700: "#4A3535",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(22px, -35px) scale(1.06)" },
          "50%": { transform: "translate(-15px, 20px) scale(0.95)" },
          "75%": { transform: "translate(12px, 10px) scale(1.03)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        blob: "blob 9s infinite ease-in-out",
        float: "float 5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
