module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      width: {
        'max-content': '960px'
      },
      translate: {
        '-50%': '-50%'
      }
    },
  },
  plugins: [],
}
