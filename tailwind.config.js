/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          darkslategray: "#1a393c",
          seagreen: "#1c6a3b",
          gainsboro: "#d9d9d9",
          teal: "#246f74",
        },
        spacing: {},
        fontFamily: {
          inter: "Inter",
        },
      },
      fontSize: {
        "9xl": "28px",
        "3xl": "22px",
        "21xl": "40px",
        "13xl": "32px",
        "5xl": "24px",
        "29xl": "48px",
        "19xl": "38px",
        "10xl": "29px",
        inherit: "inherit",
      },
      screens: {
        mq1600: {
          raw: "screen and (max-width: 1600px)",
        },
        mq1275: {
          raw: "screen and (max-width: 1275px)",
        },
        mq900: {
          raw: "screen and (max-width: 900px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  