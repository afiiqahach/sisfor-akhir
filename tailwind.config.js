/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#192B5E",
        navy2:"#0C1B44",
        font1: "#8B8B8B",
        orange: "#BF5B23",
        blue: "#1F7DFF",
        gray: "#787878"
      },
      backgroundImage: {
        'bg-dharma': "url('/assets/image/dharma.jpg')",
        'bg-hero' : "url('/assets/image/teknik.png')"
      }
    },
  },
  plugins: [],
}

