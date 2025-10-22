// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'allura': ['Allura', 'cursive'],
        'dancing-script': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}