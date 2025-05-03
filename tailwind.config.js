// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include your src folder files
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  darkMode: 'class', // Enable dark mode via class
  plugins: [],
}
