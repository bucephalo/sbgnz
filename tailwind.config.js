module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'koulen':['Koulen', 'cursive'],
        // 'custom':['Open Sans', 'sans-serif'],
        "fragment-glare": "fragment-glare, sans-serif",
        "fragment-text": "fragment-text, sans-serif",
        "fragment-sans": "fragment-sans, sans-serif"
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
