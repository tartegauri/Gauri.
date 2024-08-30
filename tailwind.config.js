/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '14': '6rem',
        '16':'8rem', 
        '18':'12rem'// Custom spacing value
           // Another custom spacing value
      },
    },
  },
  plugins: [],
}
