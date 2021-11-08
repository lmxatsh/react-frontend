module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
