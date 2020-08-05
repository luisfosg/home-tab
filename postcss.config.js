module.exports = {
  plugins: {
    tailwindcss: {
      mode: 'jit',
      content: ['./index.html', './src/**/*.{jsx,js}'],
      theme: {
        extend: {}
      },
      plugins: []
    },
    autoprefixer: {}
  }
}
