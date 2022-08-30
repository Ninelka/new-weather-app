module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-primary": "#000000",
      "light-secondary": "rgba(60, 60, 67, .6)",
      "light-tertiary": "rgba(60, 60, 67, .3)",
      "light-quaternary": "rgba(60, 60, 67, .18)",
      "dark-primary": "#ffffff",
      "dark-secondary": "rgba(235, 235, 245, .6)",
      "dark-tertiary": "rgba(235, 235, 245, .3)",
      "dark-quaternary": "rgba(235, 235, 245, .18)",
      accent: "#40CBD8",
      solid: {
        1: "#48319D",
        2: "#1F1D47",
        3: "#C427FB",
        4: "#E0D9FF",
      },
    },

    // TODO: Check is it work?
    background: {
      gradient: {
        linear: {
          1: "linear-gradient(167.57deg, #2E335A -4.68%, #1C1B33 95.45%)",
          2: "linear-gradient(90deg, #5936B4 0%, #362A84 103.55%)",
          3: "linear-gradient(90deg, #427BD1 1.95%, #C159EC 101.56%)",
          4: "linear-gradient(180deg, #AEC9FF 0%, #AEC9FF 54.51%, #083072 54.52%)",
          5: "linear-gradient(180deg, #FFFFFF 56.39%, #FFFFFF 78.19%, #FFFFFF 95.77%)",
        },
        radial:
          "radial-gradient(73.23% 106% at 34.94% 108.33%, #F7CBFD 0%, #7758D1 100%)",
        angular:
          "conic-gradient(from 180deg at 50% 50%, #612FAB -90.71deg, rgba(97, 47, 171, 0) 50.02deg, #612FAB 129.55deg, rgba(97, 47, 171, 0) 226.06deg, #612FAB 269.29deg, rgba(97, 47, 171, 0) 410.02deg)",
      },
    },
    backgroundImage: {
      widget: "url('/public/assets/images/widget-bg.svg')",
      main: "url('/public/assets/images/main-bg.png')",
      house: "url('/public/assets/images/house.png')",
      compass: "url('/public/assets/images/compass.svg')",
    },
    fontFamily: {
      text: ["SF-Pro-Text", "sans-serif"],
      display: ["SF-Pro-Display", "sans-serif"],
    },
    fontWeight: {
      thin: 200,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      caption2: ["11px", "13px"],
      caption1: ["12px", "16px"],
      footnote: ["13px", "18px"],
      subheadline: ["15px", "20px"],
      callout: ["16px", "21px"],
      body: ["17px", "22px"],
      headline: ["17px", "22px"],
      "title-3": ["20px", "24px"],
      "title-2": ["22px", "28px"],
      "title-1": ["28px", "34px"],
      "title-large-3": ["34px", "41px"],
      "title-large-2": ["64px", "41px"],
      "title-large-1": ["96px", "70px"],
    },
    boxShadow: {
      xs: "0px 1px 0px rgba(0, 0, 0, 0.2)",
    },
    extend: {},
  },
  plugins: [],
};
