module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my_white: "#FAF9F8",
        my_gray: "#D1C6C5",
        my_black: "#030e12",
      },
      customClass: {
        myCusBtn: "btn bg-kala text-peela hover:bg-neela hover:text-kala",
      },
    },
  },
  plugins: [require("daisyui")],
};
