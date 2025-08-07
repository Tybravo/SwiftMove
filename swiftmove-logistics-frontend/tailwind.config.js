/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add this line exactly as shown (not as a comment)
  ],
  theme: {
    extend: {
      transitionProperty: {
      'position': 'top, left, right, bottom',
    }
    },
  },
  plugins: [],
}

