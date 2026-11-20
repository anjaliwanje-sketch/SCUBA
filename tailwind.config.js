/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scuba: {
          black: "#000000",
          charcoal: "#1A1A1A",
          violet: "#710193",
          orchid: "#AF69EF",
          white: "#FFFFFF",
          lightgray: "#DCDCDC",
          muted: "#A6A6A6",
          tint: "#210D2B",
          card: "#0E0E10",
          border: "#242428",
          subtle: "#141416",
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 25px -3px rgba(113, 1, 147, 0.45)',
        'glow-orchid': '0 0 30px -2px rgba(175, 105, 239, 0.4)',
        'glow-subtle': '0 0 15px 0 rgba(113, 1, 147, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
