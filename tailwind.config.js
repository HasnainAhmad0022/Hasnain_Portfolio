import animate from "tailwindcss-animate";

// Hasnain Ahmad — personal portfolio. One neutral "ink" scale for surfaces and
// text, and a single jade accent for links, focus and calls to action.
const ink = {
  50: "#F5F6F8", 100: "#E8EBF0", 200: "#CDD3DD", 300: "#A3ADBD", 400: "#717D92",
  500: "#4E596D", 600: "#363F51", 700: "#242C3B", 800: "#151B27", 900: "#0B1019",
  DEFAULT: "#151B27",
};
const jade = {
  50: "#ECFBF6", 100: "#CFF5E8", 200: "#9DE9D2", 300: "#5FD6B6", 400: "#2FBE99",
  500: "#14A281", 600: "#0C836A", 700: "#0D6957", 800: "#0E5447", 900: "#0D453B",
  DEFAULT: "#0C836A",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1200px" } },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "'Segoe UI'", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
      },
      colors: {
        ink,
        jade,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": { from: { opacity: 0, transform: "translateY(14px)" }, to: { opacity: 1, transform: "none" } },
        ping: { "75%, 100%": { transform: "scale(2.2)", opacity: 0 } },
      },
      animation: { "fade-up": "fade-up .7s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [animate],
};
