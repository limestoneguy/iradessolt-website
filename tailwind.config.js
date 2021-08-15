module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: (theme) => theme("colors"),
    extend: {
      textColor: {
        primary: "#00E676",
        secondary:'#111010'
      },
      fontFamily: {
        sans: ["Nunito"],
      },
      backgroundColor: {
        primary:'#00E676',
        secondary:'#111010'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
