/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Nunito Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#e8edf5',
          100: '#c5d9f2',
          200: '#7fa8e0',
          300: '#4472c4',
          400: '#2952a3',
          500: '#1e3a6e',
          600: '#1a2d55',
          700: '#132040',
          800: '#0f1a2e',
          900: '#0b1120',
          950: '#050c1a',
        },
        gold: {
          50:  '#fffdf5',
          100: '#fef8e1',
          200: '#fdf0b8',
          300: '#f9d96a',
          400: '#c9a84c',
          500: '#a07830',
          600: '#7a5a1e',
        },
      },
      boxShadow: {
        'gold':        '0 6px 28px rgba(201, 168, 76, 0.22)',
        'gold-lg':     '0 12px 48px rgba(201, 168, 76, 0.30)',
        'card':        '0 4px 24px rgba(5, 12, 26, 0.40), 0 1px 4px rgba(5, 12, 26, 0.30)',
        'card-hover':  '0 12px 48px rgba(5, 12, 26, 0.60), 0 4px 12px rgba(201, 168, 76, 0.15)',
        'dark':        '0 16px 60px rgba(5, 12, 26, 0.70)',
        'blue':        '0 8px 32px rgba(30, 58, 110, 0.50)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a84c 0%, #a07830 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1a2d55 0%, #0b1120 100%)',
        'gradient-hero': 'linear-gradient(160deg, #0b1120 0%, #132040 50%, #0f1a2e 100%)',
        'gradient-card': 'linear-gradient(145deg, #0f1a2e 0%, #132040 100%)',
      },
      animation: {
        'float':       'float 7s ease-in-out infinite',
        'fade-up':     'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'shimmer':     'shimmer 5s linear infinite',
        'pulse-dot':   'pulseDot 2.5s ease-in-out infinite',
        'slide-up':    'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'rotate-slow': 'rotateSlow 8s linear infinite',
        'fade-in':     'fadeIn 0.5s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-8px) rotate(0.5deg)' },
          '66%':      { transform: 'translateY(-4px) rotate(-0.5deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '300% center' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.35', transform: 'scale(1.6)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}