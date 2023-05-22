/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "dark", "bumblebee"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("daisyui")],
};

/* , require("@tailwindcss/forms"), require("@tailwindcss/line-clamp") */
