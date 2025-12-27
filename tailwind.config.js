/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050505", 
        glass: {
          100: "rgba(255, 255, 255, 0.03)", 
          200: "rgba(255, 255, 255, 0.08)",
          300: "rgba(255, 255, 255, 0.12)",
        },
        liquid: {
          blue: "#2997FF",   
          purple: "#BF5AF2", 
          cyan: "#30D158",   
        }
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
    },
  },
  plugins: [],
}