// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
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
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
};
