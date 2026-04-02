/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        accent: '#3b82f6',
        accentPurple: '#8b5cf6',
      }
    },
  },
  plugins: [],
}
