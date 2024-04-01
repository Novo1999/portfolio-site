/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        floatX: {
          '0%': {
            transform: 'translateX(0px)',
          },
          '50%': {
            transform: 'translateX(-20px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        'float-x': 'floatX 3s linear infinite',
      },
    },
  },
  plugins: [require('daisyui'), addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
