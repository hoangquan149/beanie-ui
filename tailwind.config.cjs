/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      marcellus: ["Marcellus", "serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#362C27",
        yellow: "#C2996F",
      },
    },
  },
  plugins: [],
};
