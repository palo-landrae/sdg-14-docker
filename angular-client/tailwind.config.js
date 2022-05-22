module.exports = {
  purge: {
    content: ["./src/**/*.{html,ts}"],
    enabled: true
  },
  darkMode: "class",
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      display: ["dark"],
      textColor: ["dark"],
      backgroundColor: ["dark"]
    },
  },
  plugins: [],
};
