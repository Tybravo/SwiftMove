/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add this line exactly as shown (not as a comment)
  ],
  theme: {
    extend: {
      transitionProperty: {
      'position': 'top, left, right, bottom',
    },
    colors: {
        swiftGreen: '#2E7D32',
        swiftRed: '#D32F2F',
      }
    },
  },
  plugins: [],
}

