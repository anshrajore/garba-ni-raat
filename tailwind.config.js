/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#002624',
          900: '#003F3D',
          850: '#004846',
          800: '#064F4B',
          700: '#08635E',
        },
        gold: {
          100: '#FDF3D8',
          200: '#F7E3B5',
          300: '#F3CC78',
          400: '#E8B95B',
          500: '#D9A441',
          600: '#B88225',
        },
        ivory: {
          50: '#FFFAF0',
          100: '#FFF5DD',
          200: '#F8E8C9',
          300: '#F4E2C0',
          400: '#EED8AF',
        },
        maroon: {
          900: '#540E1B',
          800: '#6E1323',
          700: '#861A2A',
          600: '#A52235',
          500: '#C02C42',
        },
        parchment: '#F5E6CC',
        darkText: '#1A2E2B',
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', '"Cinzel"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(217, 164, 65, 0.35)',
        'gold-subtle': '0 4px 20px rgba(217, 164, 65, 0.15)',
        'maroon-glow': '0 0 25px rgba(134, 26, 42, 0.4)',
        'emerald-deep': '0 20px 40px rgba(0, 30, 28, 0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3CC78 0%, #D9A441 50%, #B88225 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D9A441 0%, #FFF5DD 50%, #D9A441 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #861A2A 0%, #540E1B 100%)',
        'emerald-card': 'linear-gradient(180deg, rgba(0, 63, 61, 0.95) 0%, rgba(0, 38, 36, 0.98) 100%)',
      }
    },
  },
  plugins: [],
}
