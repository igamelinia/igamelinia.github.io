/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ], // scan semua file di folder src
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#64748b',
        dark: '0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },

  plugins: [],
}