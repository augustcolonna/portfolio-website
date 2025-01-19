/**@type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#C2C5AA',
        secondary: '#A4AC86',
        accent: '#656D4A',
        light: '#A68A64',
        darkGreen: '#414833',
        burntBrownDarker: '#7f4f24',
      },
    },
  },
};
