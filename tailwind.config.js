/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',

  theme: {
    screens: {
      xs: '390',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        flame: "hsl(16, 82%, 56%)",
        outrageousOrange: "#FC7A57",
        erin: "#04E824",
        springGreen: "#18FF6D",
        forestGreen: "#285238",
        isabelline: "#F5EFED",
        darkPurple: "#1C0221",

        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
    },
  },
  plugins: [],
}
