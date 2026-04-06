/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f8fafc',
        primary: '#2563eb', // modern blue
        accent: '#f59e0b',  // amber
        dark: '#1e293b'     // slate 800
      }
    },
  },
  plugins: [],
}
