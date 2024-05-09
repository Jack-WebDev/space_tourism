import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "hero-mobile": "url('/home/background-home-mobile.jpg')",
        "hero-tablet": "url('/home/background-home-tablet.jpg')",
        "hero-desktop": "url('/home/background-home-desktop.jpg')",
        "destination-hero-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "destination-hero-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-hero-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "crew-hero-mobile": "url('/crew/background-crew-mobile.jpg')",
        "crew-hero-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-hero-desktop": "url('/crew/background-crew-desktop.jpg')",
      },
      boxShadow: {
        "explore-sm": "1px 1px 1px 30px rgba(255, 255, 255, 0.2)",
        "explore-md": "1px 1px 1px 60px rgba(255, 255, 255, 0.2)",
        "explore-lg": "1px 1px 1px 90px rgba(255, 255, 255, 0.2)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
