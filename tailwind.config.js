/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Crimson Text', 'serif'], // Add Crimson Text as the default serif font
      },
      fontSize: {
        base: '18px', // Set the default font size to 18px
      },
      colors: {
        customBlue: '#1995AD',  // Custom blue color
        customLightBlue: '#A1D6E2',  // Custom light blue color
        customOffWhite: '#F1F1F2',  // Custom off-white color
      },
      
    },
  },
  plugins: [],
}
