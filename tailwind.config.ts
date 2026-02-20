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
          DEFAULT: "#0D0608",
          alt: "#130A0D",
        },
        blush: {
          50: "#2E1520",
          100: "#4A2030",
          200: "#7A3348",
          300: "#C41848",
          400: "#A01238",
          500: "#D44060",
          600: "#8A0E2C",
        },
        sage: {
          50: "#201510",
          100: "#3A2518",
          200: "#6A4830",
          300: "#C4956A",
          400: "#A87848",
          500: "#8A6038",
          600: "#6A4828",
        },
        espresso: "#F5EDE4",
        mocha: {
          100: "#1E1015",
          200: "#2E1820",
          300: "#6A4858",
          400: "#8A6878",
          500: "#A88898",
          600: "#C4A8A0",
          700: "#DCCFC8",
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
