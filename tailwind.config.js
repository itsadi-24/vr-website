/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        parisienne: ['Parisienne', 'cursive'],
        cursive: ['Dancing Script', 'cursive'],
      },
      animation: {
        blob: 'blob 7s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '33%': {
            transform: 'translate(-50%, -50%) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
      },

      colors: {
        primary: '#00C2FF',
        secondary: '#DD0BFF',
        dark: '#111111',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
};
