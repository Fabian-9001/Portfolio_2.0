module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Aurore: ['La Belle Aurore', 'cursive'],
      },
    },
  },
  plugins: [],
}
