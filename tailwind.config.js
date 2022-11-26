/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        carstheme: {
          primary: "#f0151f",
          secondary: "#161616",
          
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
