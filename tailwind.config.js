module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bmsnav:{
        
          50: '#ff4464',
          100: '#d1d2e4',
          200: '#b2b4cd',
          300: '#9396b8',
          400: '#7578a2',
          500: '#5c5f89',
          600: '#474a6b',
          700: '#32354d',
          750: '#343338',
          800: '#2b3149',
          850: '#222439',
          900: '#070b16',
        },
        bmsbg:{
          50:'#f5f5f5',
        },
      },
      width:{
        '1/7': '49%',
        '38' : '9.5rem',
        '90' : '22rem',
        '22' : '120px'
      },
      height:{
        '0.5x' : '0.5px',
      },
      fontsize:{
        'xss' : '.820rem',
      }
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
}
