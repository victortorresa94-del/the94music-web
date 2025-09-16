/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          bg: "#F6F1E7",      // beige claro
          ink: "#111111",     // texto principal
          muted: "#6b6b6b",   // texto suave
          accent: "#0F5132",  // verde logo
          accent2: "#F7941D", // ocre retro
          card: "#ffffff",
          alt: "#F1E9DC",
        },
        boxShadow: {
          soft: "0 18px 40px rgba(0,0,0,.10)",
        },
        borderRadius: {
          xl: "1rem",
          "2xl": "1.25rem",
        },
      },
    },
    plugins: [],
  };
  