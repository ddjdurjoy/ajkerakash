/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d3748',
        accent: '#4299e1',
      },
      fontFamily: {
        bangla: ['Noto Sans Bengali', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'rain': 'rain 1.5s linear infinite',
        'snow': 'snow 6s linear infinite',
        'thunder': 'thunder 1s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-15px) translateX(15px)' },
          '50%': { transform: 'translateY(-25px) translateX(0)' },
          '75%': { transform: 'translateY(-15px) translateX(-15px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        rain: {
          '0%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(calc(100vh + 20px))' },
        },
        snow: {
          '0%': { 
            transform: 'translateY(-20px) translateX(0) rotate(0deg)',
            opacity: 0
          },
          '10%': {
            opacity: 1
          },
          '90%': {
            opacity: 1
          },
          '100%': { 
            transform: 'translateY(calc(100vh + 20px)) translateX(100px) rotate(360deg)',
            opacity: 0
          },
        },
        thunder: {
          '0%': { opacity: 0 },
          '10%': { opacity: 1 },
          '15%': { opacity: 0 },
          '20%': { opacity: 1 },
          '25%, 100%': { opacity: 0 },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 