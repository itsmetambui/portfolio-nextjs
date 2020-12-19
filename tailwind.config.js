module.exports = {
  theme: {
    fontFamily: {
      header: ["Helvetica Now"],
      body: ["Helvetica Now"],
      tags: ["La Belle Aurore", "cursive"],
      sourcecode: ["Sourcecodepro"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "dark-100": "#1d1d1d",
      "dark-200": "#181818",
      "dark-300": "#070707",
    }),
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
      16: "4rem",
      "-16": "-4rem",
    },
  },
};
