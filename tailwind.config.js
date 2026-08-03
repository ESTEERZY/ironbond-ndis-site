/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Editorial Dental Palette
        ivory: {
          DEFAULT: '#FAF8F5',
          dark: '#F3EFEA',
          soft: '#F6F3EE',
        },
        charcoal: {
          DEFAULT: '#121417',
          mid: '#2A2E33',
          muted: '#5A6068',
          light: '#8C939E',
        },
        forest: {
          DEFAULT: '#0F3832', // Deep Muted Natural Emerald Pine
          light: '#1B524A',
          soft: '#E6EFEF',
        },
        sand: {
          DEFAULT: '#D9C5B2',
          light: '#EFE8DF',
          soft: '#F7F3EE',
          warm: '#C8A882',
        },
        accent: {
          rose: '#D9467A', // Aesthetic Highlight Accent
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
