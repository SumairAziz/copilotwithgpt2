
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 60s linear infinite',
      },
      backgroundImage: {
        'gradient-radial-black': 'radial-gradient(circle, rgb(0, 0, 0), rgb(0, 0, 0), black)',
        'gradient-radial-blue': 'radial-gradient(circle, rgb(12, 12, 160), rgb(4, 4, 117), black)',
      },
      transitionProperty: {
        'bg': 'background-image',
      }
    },
  },
  plugins: [],
}
