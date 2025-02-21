import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ['gotham', 'sans-serif'],
        'gotham-bold': ['gotham-bold', 'sans-serif'],
        'gotham-black': ['gotham-black', 'sans-serif'],
        'gotham-ultra': ['gotham-ultra', 'sans-serif'],
        'nasalization': ['nasalization', 'sans-serif'],
        'monument': ['monument', 'sans-serif'],
        'monument-bold': ['monument-bold', 'sans-serif'],
        'linotype-pen': ['linotype-pen', 'sans-serif'],
        'linotype-pen-regular': ['linotype-pen-regular', 'sans-serif'],
      }
    },
  },
  plugins: [
    heroui(),
    require('tailwindcss-animated'),
  ],
}

