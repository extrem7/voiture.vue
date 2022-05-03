/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: '100%',
      xl: '960px',
    },
    colors: {
      white: '#fff',
      dark: '#414042',
      light: '#e0e3e4',
      'gray-light': '#f0f2fa',
      gray: '#9b9b9b',
      red: '#db5c4c',
      'green-light': '#79be00',
      green: '#3c9806',
      cyan: '#219be7',
      blue: '#256799',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      carLogos: ['logobrands23'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
