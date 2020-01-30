module.exports = {
  theme: {
    fontFamily: {
      header: ["Montserrat", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      tags: ["La Belle Aurore", "cursive"]
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      "dark-100": "#1d1d1d",
      "dark-200": "#181818",
      "dark-300": "#070707"
    }),
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%",
      "16": "4rem",
      "-16": "-4rem"
    }
  }
};
