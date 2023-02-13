module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "376px",
        desktop: "1440px",
      },
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: { poppins: ["Poppins"] },
    },
  },
  plugins: [],
}
