/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F5FA',
          100: '#E0ECF6',
          200: '#C2D9EE',
          300: '#94BEE2',
          400: '#5F9DD3',
          500: '#387EC2',
          600: '#2765A6',
          700: '#205187',
          800: '#1D4570',
          900: '#1E3A8A',   /* Meister-Königsblau */
          950: '#0F294A',   /* Tiefes Meister-Marineblau */
        },
        slate: {
          850: '#151F32',
          900: '#0F172A',
          950: '#090D16',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
