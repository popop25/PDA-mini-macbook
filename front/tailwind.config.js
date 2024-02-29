/** @type {import('tailwindcss').Config} */ 
// tailwind.config.js
// XPDL
module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
  theme: {
    extend: {
      colors: {
        myColor: {
          yellow: "#FFF67E",
          green1: "#BFEA7C",
          green2: "#9BCF53",
          green3: "#416D19",
        },
      },
      fontSize: {
        mySize: "50px",
      },
      width: {
        myWidth: "15rem",
      },
      screens: {
        myScreen: "999px",
      },
    },
  },
};
