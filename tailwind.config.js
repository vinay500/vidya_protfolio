/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      screens:{
        "m":"300px",
        "sm":"640px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
        "2xl":"1536px",
      },
    },
  },
  variants:{},
  plugins: [],
}

