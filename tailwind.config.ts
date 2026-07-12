import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2.5rem",
        xl: "3.5rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111111",
          soft: "#1a1a1a",
          muted: "#6b6b6b",
          faint: "#9a9a9a",
        },
        paper: {
          DEFAULT: "#ffffff",
          soft: "#f5f5f5",
          warm: "#f0eeea",
        },
        gold: {
          DEFAULT: "#e8a020",
          soft: "#f0b64f",
          deep: "#c9861a",
        },
        line: "rgba(17,17,17,0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "11xl": ["13rem", { lineHeight: "0.85", letterSpacing: "-0.04em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
        editorial: "-0.02em",
        wide: "0.02em",
        wider: "0.08em",
        widest: "0.24em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        expo: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.12) translate(-1%, -1%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        kenburns: "kenburns 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
