module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 12%, 90%)",
        input: "hsl(210, 12%, 90%)",
        ring: "hsl(220, 65%, 30%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(220, 15%, 15%)",
        primary: {
          DEFAULT: "#853BCC",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 45%, 40%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(210, 20%, 20%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(210, 10%, 96%)",
          foreground: "hsl(220, 15%, 15%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(210, 10%, 96%)",
          foreground: "hsl(210, 9%, 45%)",
        },
        accent: {
          DEFAULT: "hsl(210, 10%, 96%)",
          foreground: "hsl(220, 15%, 15%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 15%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 15%)",
        },
        success: "hsl(155, 60%, 35%)",
        warning: "hsl(35, 90%, 40%)",
        gray: {
          50: "hsl(210, 20%, 98%)",
          100: "hsl(210, 15%, 95%)",
          200: "hsl(210, 12%, 90%)",
          300: "hsl(210, 10%, 80%)",
          400: "hsl(210, 10%, 70%)",
          500: "hsl(210, 9%, 55%)",
          600: "hsl(210, 9%, 45%)",
          700: "hsl(210, 9%, 35%)",
          800: "hsl(210, 9%, 25%)",
          900: "hsl(220, 10%, 15%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ['"DM Sans"', "sans-serif"],
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.5", fontWeight: "300" }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(220, 65%, 30%), hsl(220, 55%, 40%))',
        'gradient-2': 'linear-gradient(180deg, hsl(210, 10%, 96%), hsl(0, 0%, 100%))',
        'button-border-gradient': 'linear-gradient(90deg, hsl(220, 65%, 35%), hsl(220, 55%, 45%))',
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
}
