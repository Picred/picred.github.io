/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "primary": "#ff0000",    // Absolute Red
          "secondary": "#ef4444",  // Red-500
          "accent": "#dc2626",     // Red-600
          "neutral": "#0f172a",
          "base-100": "#020617",
          "--p": "0 100% 50%",     // HSL for #ff0000
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
