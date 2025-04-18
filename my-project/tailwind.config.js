/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌙 Dark Mode Colors
        darkBg: "#121212",
        darkCard: "#1E1E1E",
        darkPrimary: "#00D8FF",
        darkSecondary: "#FF4081",
        darkText: "#FFFFFF",
        darkSubText: "#B3B3B3",

        // ☀️ Light Mode Colors
        lightBg: "#F5F5F5",
        lightCard: "#FFFFFF",
        lightPrimary: "#00D8FF",
        lightSecondary: "#FF4081",
        lightText: "#333333",
        lightSubText: "#666666",

        // ✨ Common States
        success: "#00E676",
        error: "#FF1744",
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, #00D8FF, #FF4081)',
        'dark-gradient': 'linear-gradient(135deg, #00D8FF, #FF4081)',
      },
    },
  },
  plugins: [],
}
