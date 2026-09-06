import type { Config } from "tailwindcss";

// Colors sourced directly from the ARTINET brand palette provided in Figma.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary turquoise/green — buttons, links, highlighted "Artinet"
          DEFAULT: "#137A78",
          light: "#1E9C99",
          // Dark green — navbar, footer, dark panels
          dark: "#0B3D2E",
          darker: "#082A20",
          // Mint/light green — section backgrounds (Comunidad, banners)
          mint: "#D7F4EC",
          "mint-light": "#EAF9F4",
        },
        navy: "#0F2D4D",
        accent: {
          orange: "#D46A3A",
          tan: "#E2C09A",
          pink: "#C7336E",
          green: "#6ABF3A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(15, 45, 77, 0.12)",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
