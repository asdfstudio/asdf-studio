const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      msm: "360px",
      lsm: "390px",
      sm: "767px", //mobile
      x: "1009px", //tablet | 1009px is 1024 px in ipad
      xl: "1009px", //laptop | 1009px is 1024 px in ipad
      "1xl": "1230px", //laptop
      "2xl": "1440px", //desktop
      "4xl": "1800px", // for portfolio card
      "5xl": "1920px", // ultra wide
      360: "359px",
      375: "375px",
      390: "390px",
      414: "398px",
      420: "415px",
      430: "430px",
      752: "752px",
    },
    extend: {
      fontFamily: {
        sans: ["Maison Neue", ...fontFamily.sans],
        demi: ["Maison Neue Demi", ...fontFamily.sans],
        man: ["Manrope", ...fontFamily.sans],
        bol: ["Maison Neue Extra", ...fontFamily.sans],
        book: ["Maison Neue Book", ...fontFamily.sans],
      },
      maxWidth: {
        mobile: "360px",
        400: "400px",
        945: "950px",
        "desktop-s": "1280px",
        desktop: "1440px",
        "desktop-hd": "1920px",
        "desktop-infinity": "1921px",
      },
      colors: {
        main: {
          white: "#FFFFFF",
          orange: "#f97066",
          blue: "#012859",
          lightBlue: "#d3e9f7",
          deepBlue: "#013e88",
          deepBlue60: "rgba(1, 62, 136, 0.6)",
          red: "#e04e4e",
          grey: "#b3bfd7",
          cyan: "#a0efff",
          hoverOrange: "#e8665d",
          hoverWhite: "#f1f5f8",
          textBox: "#eceff5",
          modalTitle: "#012859",
          modalTitleSecond: "#6c768b",
          lightestBlue: "#f5f9fe",
          lightGray: "#F4F5F6",
          underline: "#D3E9F7",
        },
        border: {
          button: "rgba(255, 255, 255, 0.14)",
          tag: "rgba(1, 62, 136, 0.3)",
          tag1: "rgba(255, 255, 255, 0.3)",
          comment: "#e5e7ec",
          vrBorder: "rgba(1, 62, 136, 0.15)",
        },
      },
      opacity: {
        35: ".35",
      },
      boxShadow: {
        buttonShadow:
          "0 18px 18px 0 rgba(253, 196, 196, 0.3), 0 0 1px 0 #fdc4c4",
        buttonShadow2: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        buttonShadow3:
          "0 13px 13px 0 rgba(2, 32, 71, 0.12), 0 0 1px 0 rgba(2, 32, 71, 0.1)",
        buttonShadow4: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        buttonShadow5:
          "0px 18px 35px 0px rgba(2, 32, 71, 0.06), 0px 0px 1px 0px rgba(2, 32, 71, 0.10)",
        headerShadow:
          "0 18px 18px 0 rgba(53, 61, 65, 0.1), 0 0 1px 0 rgba(35, 42, 46, 0.05)",
        commentShadow:
          "0 -20px 20px 0 rgba(160, 239, 255, 0.21), 0 0 1px 0 #a0efff;",
      },
      backgroundImage: {
        blue: "linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff 50%, #fff 50%)",
        lightBlue:
          "linear-gradient(to bottom, #fff, #d3e9f7, rgba(211, 233, 247, 0))",
        greyBlue:
          "linear-gradient(to top, #d3e9f7, rgba(211, 233, 247, 0) 50%)",
        greyBlueReverse: "linear-gradient(178deg, #D3E9F7 0%, #FFF 100%)",
        greyBlueReverseFull: "linear-gradient(360deg, #D3E9F7 72%, #FFF 120%)",
      },
    },
  },
  plugins: [],
};
