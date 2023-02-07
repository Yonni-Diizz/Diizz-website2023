module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    cssnano: ctx.env === "production" ? {} : false,
  },
});
