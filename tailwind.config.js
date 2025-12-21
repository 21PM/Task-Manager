export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Base colors */
        white: "#ffffff",
        black: "#000000",
        background: {
          light: "#f6f7f8",
          dark: "#101922",
        },
        /* Gray palette for minimal UI */
        gray: {
          50: "#F9FAFB", // Very light gray (subtle hover, accents)
          100: "#F3F4F6", // Light background
          200: "#E5E7EB", // Input backgrounds
          300: "#D1D5DB", // Borders
          400: "#9CA3AF", // Placeholder / disabled
          500: "#6B7280", // Secondary text
          600: "#4B5563", // Button text
          700: "#374151", // Headings
          800: "#1F2937", // Dark text
          900: "#111827", // Almost black
        },

        /* Primary action color */
        primary: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },

        /* Danger / delete */
        danger: {
          DEFAULT: "#EF4444",
          dark: "#DC2626",
        },
      },

      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },

      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
      },

      borderWidth: {
        DEFAULT: "1px",
      },
    },
  },
  plugins: [],
};
