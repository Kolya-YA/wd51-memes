/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'thumb-gal': 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
      }
    },
  },
  plugins: [],
}

