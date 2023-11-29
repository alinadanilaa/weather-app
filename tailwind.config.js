/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { max: '576px' },
        // => @media (max-width: 576px) { ... }
      },
    },


  },
  plugins: [
    require('tailwindcss-opacity'),
  ],
}

