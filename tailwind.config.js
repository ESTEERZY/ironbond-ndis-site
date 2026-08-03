/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Harbour Dental Studio Brand Palette
        dental: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          500: '#00839B', // Primary Medical Teal
          600: '#006E83',
          700: '#005869',
          800: '#064E5B',
          900: '#0A3B45',
        },
        navy: {
          DEFAULT: '#0B192C',
          mid: '#1E293B',
          light: '#334155',
        },
        teal: {
          DEFAULT: '#00839B',
          light: '#38BDF8',
          soft: '#E0F2FE',
        },
        emerald: {
          DEFAULT: '#10B981',
          soft: '#D1FAE5',
        },
        cream: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-in-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out infinite 2s',
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

