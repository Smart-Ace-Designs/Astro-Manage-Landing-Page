/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "theme-bright-red": "hsl(12, 88%, 59%)",
        "theme-bright-red-light": "hsl(12, 88%, 69%)",
        "theme-bright-red-sup-light": "hsl(12, 88%, 95%)",
        "theme-dark-grayish-blue": "hsl(227, 12%, 61%)",
        "theme-very-dark-blue": "hsl(233, 12%, 13%)",
        "theme-very-light-gray": "hsl(0, 0%, 93%)",
      },
    },
  },
  plugins: [],
};
