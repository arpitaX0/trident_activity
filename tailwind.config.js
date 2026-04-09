/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2C3A8C',
        'brand-orange': '#E56D24',
        'brand-glow': '#349FCC',
        'brand-red': '#E63946',
        'bg-base': '#EFE7DF',
        'bg-surface': '#F5EEEC',
        'bg-elevated': '#EAE0D5',
        'text-primary': '#3E3A36',
        'text-secondary': 'rgba(62,58,54,0.8)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
