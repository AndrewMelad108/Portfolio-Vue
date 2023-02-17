module.exports = {
  plugins: [require("flowbite/plugin")],

  content: ["./node_modules/flowbite/**/*.js"],

  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 2 column grid
        "2-auto": "repeat(2, minmax(0, auto))",
      },
      colors: {
        asd: "#ddd",
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [],
};
