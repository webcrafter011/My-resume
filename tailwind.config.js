/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'bb-green': '#00FF41',
        'bb-yellow': '#FFFF00',
        'bb-orange': '#FF8C00',
        'bb-dark': '#0A0A0A',
        'bb-gray': '#1A1A1A',
        'bb-light-gray': '#2A2A2A',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 15px #00FF41' },
          '100%': { boxShadow: '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [],
};