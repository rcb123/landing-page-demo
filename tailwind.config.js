/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'bone': '#f7f7f7',
      'moonlight': '#FFF8DE',
      'midnight': {
        950: '#070715',
        900: '#0b0a20',
        800: '#0f0e2a',
        700: '#131135',
        600: '#161540',
        500: '#1a184a',
        400: '#1e1c55',
        300: '#221f60',
        200: '#26236b',
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

