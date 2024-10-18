/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F26922",
        secondary: "#71717A",
        accent: "#09090B",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};
