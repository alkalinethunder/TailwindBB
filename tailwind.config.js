/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1baaf7",
        warning: "#f7d21b",
        error: "#f7641b",
        accent: { // TODO: replace with our own accent color, not a shameless trixel ripoff - also, our fire alarm battery needs to be replaced. BEEP.
          900: "#7E792D",
          800: "#9C8039",
          700: "#B98147",
          600: "#D67B54",
          500: "#f26f63",
          400: "#F67683",
          300: "#F989A9",
          200: "#FC9DCA",
          100: "#FDB2E4",
          50: "#FFC7F6",
        }
      }
    },
  },
  plugins: [],
}
