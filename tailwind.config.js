export default {
  content: [
    "./src/App.jsx",
    "./src/components/header/Header.jsx",
    "./src/components/header/NavItems.jsx",
    "./src/components/header/MenuItems.jsx",
    "./src/components/footer/Footer.jsx",
  ],
  theme: {
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    extend: {
      colors: {
        'txt-black': '#3B3A3B',
        'btn-black': '#313641',
        'btn-hover-black': '#1F2937',
        'txt-gray': '#999999',
        'blue': '#50A0FF',
        'gray': '#6B7280',
      }
    },
  },
  plugins: [],
}

