module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Manrope', 'sans-serif'],
        'koulen':['Manrope', 'sans-serif'],
        // 'custom':['Open Sans', 'sans-serif'],
        "fragment-glare": ["Manrope", "sans-serif"],
        "fragment-text": ["Manrope", "sans-serif"],
        "fragment-sans": ["Manrope", "sans-serif"]
      },
      colors: {
        negroColor: 'hsl(0, 0%, 4%)',
        grisColor: 'hsl(222, 10%, 20%)'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '3': '3px',
      '5': '5px',
      '6': '6px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
