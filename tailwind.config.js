module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      primary: `#153564`,
      secondary: `#1D71B9`,
      yellow: `#FBCB0F`,
      desc: `#949494`,
      white: `#fff`,
      dark: `#000`,
    },

    fontFamily: {
      display: ['DIN', 'sans-serif'],
      body: ['DIN', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1170px',
    },

    container: {
      center: true,
      padding: '15px',
    },
  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],

  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ]
}
