export default {
  content: [
    "./src/App.jsx",
    "./src/components/header/Header.jsx",
    "./src/components/footer/Footer.jsx",
  ],
  theme: {
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '6px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px'
    },
    extend: {
      colors: {
        'txt-black': '#3B3A3B',
        'btn-black': '#313641',
        'btn-hover-black': '#1F2937',
        'txt-gray': '#999999',
      }
    },
  },
  plugins: [],
}

