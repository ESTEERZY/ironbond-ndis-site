/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1B',
        darkgray: '#171717',
        gold: '#C5A059',
        stone: '#E2E2E2',
        champagne: '#FBF9F6',
        offwhite: '#F8F9FA'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-in-out',
        'slide-up': 'slide-up 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
}
