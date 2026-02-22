/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14532D",      // dark green
        secondary: "#16A34A",    // medium green
        light: "#F0FDF4",        // light green background
        accent: "#DCFCE7",       // soft highlight
      },
    },
  },
  plugins: [],
};