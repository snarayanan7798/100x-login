/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral-1000': '#000000',
        'neutral-50': '#F9F9F9',
        'neutral-700': '#404040',
        'neutral-200': '#E4E4E4',
        'twitter-blue': '#1D9BF0',
        'stroke': 'rgba(29, 155, 240, 0.24)',
      },

      fontFamily: {
        inter: ['Inter'],
        chirp: ['Chirp'],
      },

      boxShadow: {
        'box-btn': '0px 8px 16px 0px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
}

