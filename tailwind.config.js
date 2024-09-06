module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #4D455D 67%, #E96479 33%)",
        handsome: "url('/public/images/blue-watercolor.png')",
      },
      direction: {
        ltr: "ltr",
        rtl: "rtl",
      },
    },
  },
  plugins: [],
};
