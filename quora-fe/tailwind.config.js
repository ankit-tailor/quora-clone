module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primaryDark: "#1D222E",
      secondaryDark: "#151A26",
      primaryLight: "#FFFEFE",
      secondaryLight: "#f1f1f1",
      indigo: "#60A5FA",
      lightGray: "#9CA3AF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
