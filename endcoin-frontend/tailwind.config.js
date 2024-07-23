/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'endcoin-bold': 'SarunProCondensed-bold',
      endcoin: 'SarunProCondensed-Regular',
    },
    extend: {
      screens: {
        'endcoin-sm': '321px',
        'endcoin-md': '688px',
        'endcoin-lg': '1024px',
        'endcoin-xl': '1200px',
      },
      colors: {
        'end-button-blue': '#7BC6E3',
        'end-button-hover-blue': '#7D95E2',
        'end-button-text-blue': '#7D95E266',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
