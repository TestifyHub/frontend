/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple-600': '#5D5DFF',
        'purple-700': '#4B4ACF'
      }
    },
  },
  plugins: [],
};
