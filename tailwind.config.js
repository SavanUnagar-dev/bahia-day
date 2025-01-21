/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sofia-light-italic': ['SofiaPro-Light-Italic', 'sans-serif'], // Define your custom font
      },
    },
  },
  plugins: [],
}

