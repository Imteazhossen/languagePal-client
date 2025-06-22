/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all your JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", 
      "dark", 
     
    ],
    darkTheme: "dark", // Optional: default theme for dark mode
  },
};
