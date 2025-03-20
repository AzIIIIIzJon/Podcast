import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|violet|yellow)-(100|200|300|400|500|600|700|800)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'dark'],
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        parkinsans: ['Parkinsans', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#e3f5eb',
          200: '#c6eacc',
          300: '#a8deae',
          400: '#7fca92', // Original $muted-green
          500: '#6cba7f',
          600: '#5aab6d',
          700: '#4a8e59',
          800: '#396f46',
          900: '#2a5133',
        },
        secondary: {
          100: '#e3f6f0',
          200: '#c7ece1',
          300: '#aae3d2',
          400: '#88d1c1', // Original $light-blue-mint
          500: '#71bda8',
          600: '#5ca890',
          700: '#478477',
          800: '#34625e',
          900: '#234247',
        },
        success: {
          100: '#e4f9e8',
          200: '#c8f3d2',
          300: '#a7eab8',
          400: '#61c57a', // Original $colorful-green
          500: '#4fa966',
          600: '#3e8d53',
          700: '#317444',
          800: '#245a35',
          900: '#173e26',
        },
        warning: '#f4a261', // Original $light-orange
        danger: '#e76f51', // Original $muted-orange
        light: '#e6fad0', // Original $soft-mint
        dark: '#343a40', // Original #343a40
      },
    },
  },
  plugins: [],
};

export default config;
