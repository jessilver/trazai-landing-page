/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: ["selector", "[data-web-theme=dark]"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["AbeeZee", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FFC107",
          color: "#fff",
          light: {
            1: "#FFF8E1",
            2: "#FFECB3",
            3: "#FFE082",
            4: "#FFD54F",
            5: "#FFCA28",
            6: "#FFC107",
            7: "#FFB300",
            8: "#FFA000",
            9: "#FF8F00",
            10: "#FF6F00",
            11: "#FFF3CD",
            12: "#FFF9E5",
          },
          dark: {
            1: "#665200",
            2: "#7C6500",
            3: "#927800",
            4: "#A88B00",
            5: "#BFA000",
            6: "#D6B300",
            7: "#E6C200",
            8: "#FFDE59",
            9: "#FFC107",
            10: "#B28704",
            11: "#FFF3CD",
            12: "#FFF9E5",
          },
        },
        body: {
          light: {
            1: "#fcfcfd",
            2: "#f9f9fb",
            3: "#eff0f3",
            4: "#e7e8ec",
            5: "#e0e1e6",
            6: "#d8d9e0",
            7: "#cdced7",
            8: "#b9bbc6",
            9: "#8b8d98",
            10: "#80828d",
            11: "#62636c",
            12: "#1e1f24",
          },
          dark: {
            1: "#212224",
            2: "#28292b",
            3: "#303134",
            4: "#36373b",
            5: "#3c3d42",
            6: "#43444a",
            7: "#4f5058",
            8: "#666872",
            9: "#72747f",
            10: "#7d7f8a",
            11: "#b4b6bf",
            12: "#eeeef0",
          },
        },
      },
      borderColor: {
        alpha: {
          light: "#00073527",
          dark: "#d6dbfc2f",
        },
      },
      backgroundColor: {
        body: {
          striped: {
            light: "#00005506",
            dark: "#adc5f30f",
          },
        },
      },
      boxShadow: {
        "card-1": "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "card-2": "0px 10px 20px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
