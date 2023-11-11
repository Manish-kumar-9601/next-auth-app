/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
"primary-color":"var(--primary:#1B262C)",
"secondary-color":"var(--secondary:#0F4C75)",
"third-color":"var( --third:#3282B8)",
"fourth-color":"var(--fourth:#BBE1FA)",
"sign-in-color":"var(--sign:#5dbea3)",
"front-black-color":"var( --black-font:rgb(0, 0, 0))",
 "font-white-color":"var(   --font:rgb(255, 254, 254))"

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
