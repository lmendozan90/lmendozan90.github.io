module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #4D455D 67%, #E96479 33%)",
        handsome: "url('/public/images/blue-watercolor.png')",
        "moon-bg": "url('/public/moon_2.svg')",
        "planets-bg": "url('/public/images/Sprinkle.svg')",
        "circuit-bg": "url('/public/images/Circuit Board.svg')",
      },
      direction: {
        ltr: "ltr",
        rtl: "rtl",
      },
    },
  },
  plugins: [],
};
