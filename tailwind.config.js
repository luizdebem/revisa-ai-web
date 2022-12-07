/** @type {import("tailwindcss").Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': 'rgb(33, 150, 243)'
      }
    },
  },
  plugins: [],
});
