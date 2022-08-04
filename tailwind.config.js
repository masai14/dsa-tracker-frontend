/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'platform':'rgba(59, 137, 194, 0.64)'
      },
      boxShadow: {
        'dynamic': '0px 1px 16px rgba(13, 41, 62, 0.16)'
      },
      keyframes: {
        show: {
          '0% 49.99%': {
            opacity: 0,
            zIndex: 1,
            boxSizing: 'border-box'
          },

          '50% 100%': {
            opacity: 1,
            zIndex: 5,
            boxSizing: 'border-box'
          }
        }
      },
      flexGrow: {
        '2': 2
      },
      backgroundSize: {
        "200%":"200%"
      }
    },
  },
  plugins: [],
}