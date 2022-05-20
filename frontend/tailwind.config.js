module.exports = {
  purge: [],
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['dark']
    }
  },
  plugins: [],
}
