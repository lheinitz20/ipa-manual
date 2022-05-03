module.exports = {
  content: [
    "./components/**/*.js",
    "./pages/**/*.md",
    "./pages/**/*.mdx",
    "./theme.config.js",
    "./styles.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        'warning': ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']
      },
    },
  },
};