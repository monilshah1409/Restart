/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: { keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      popIn: {
        '0%': { transform: 'scale(0.8)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    animation: {
      slideLeft: 'slideLeft 0.5s ease-out forwards',
      slideRight: 'slideRight 0.5s ease-out forwards',
      fadeIn: 'fadeIn 1s ease-in forwards',
      popIn: 'popIn 0.3s ease-out forwards',
    },
  },
  },
  plugins: [],
}
