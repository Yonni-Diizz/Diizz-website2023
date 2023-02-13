/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'ldesktop': '1600px',
        // => @media (min-width: 1600px) { ... }

        'xldesktop': '1900px',
        // => @media (min-width: 1900px) { ... }
      },
      maxWidth: {
        "desktopW": "81.25rem",
      },
      colors: {
        "diizz-main": "#94C11F",
        "diizz-black": "#000000",
        "diizz-white": "#ffffff",

      },
      fontSize: {
        sm: ['14px', '20px'],
        md: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['28px', '32px'],
        '2.5xl': ['32px', '38px'],
        '3xl': ['36px', '40px'],
        '3.5xl': ['40px', '50px'],
        '4xl': ['50px', '56px'],
        '5xl': ['60px', '70px'],
        '6xl': ['72px', '80px']
      },
      fontFamily: {
        regular: ["HelveticaNeueLight", "sans-serif"],
        light: ["HelveticaNeueThin", "sans-serif"],
        thin: ["HelveticaNeueRegular", "sans-serif"],
        medium: ["HelveticaNeueMedium", "sans-serif"],
        bold: ["HelveticaNeueBold", "sans-serif"],
      },

    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],

  // vanilla config see documentation to theme
  // https://daisyui.com/docs/config/
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}