/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        maroon: {
          DEFAULT: '#800000', // Standard maroon
          light: '#993333', // A lighter shade of maroon
          dark: '#600000', // A darker shade of maroon
          100: '#F2E0E0', // Very light maroon
          200: '#E6C1C1', // Lighter maroon variant
          300: '#D9A1A1', // Light maroon
          400: '#CD8282', // Medium light maroon
          500: '#C16262', // Medium maroon
          600: '#B44343', // Medium dark maroon
          700: '#A82424', // Darker maroon variant
          800: '#9C0505', // Very dark maroon
          900: '#8F0000', // Deepest maroon
        },
      },
    },
  },
  plugins: [],
};

