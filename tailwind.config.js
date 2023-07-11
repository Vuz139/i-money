module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012FF",
        green: "#67d4ca",
        red: "#f28080",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
