/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hli-image': 'url("./assets/hli.png")',
        'mvn-image': 'url("./assets/mvn.png")',
        'jataka-image': 'url("./assets/jataka.png")',
        'digi-image': 'url("./assets/digismart.png")',
      },
    },
  },
  plugins: [],
}

