module.exports = {
  //content: ["./index.html", "./xompass.html", "./vsaas.html", "./misc.html", "./about.html"] ,
  content: ["./public/*.html"] ,
  theme: {
    extend: {
      fontFamily: {
        'body':['Raleway'], 
        'display':['Montserrat']
      },
      colors: {
        'lavender': {
          '50': '#f9f5fd',
          '100': '#f2edfa',
          '200': '#e7def6',
          '300': '#d5c3ef',
          '400': '#bea0e5',
          '500': '#a979d9',
          '600': '#9b5ccb',
          '700': '#8a49b8',
          '800': '#733d9a',
          '900': '#5f347e',
        },
        'caribbean-green': {
          '50': '#eefffa',
          '100': '#c6fff2',
          '200': '#8effe7',
          '300': '#4dfbda',
          '400': '#19e8c7',
          '500': '#00c9ac',
          '600': '#00a490',
          '700': '#028375',
          '800': '#08675e',
          '900': '#0c554d',
        },
        'moon-raker': {
          '50': '#faf7fd',
          '100': '#f4ecfb',
          '200': '#eaddf7',
          '300': '#d5b9ee',
          '400': '#c39ae6',
          '500': '#ab73d9',
          '600': '#9655c8',
          '700': '#8142ae',
          '800': '#6d3a8f',
          '900': '#593073',
        },
        'white-pointer': {
          '50': '#fef4ff',
          '100': '#fde9ff',
          '200': '#fbd0fe',
          '300': '#faabfc',
          '400': '#f879f9',
          '500': '#ee46ef',
          '600': '#d326d0',
          '700': '#af1ca9',
          '800': '#8f1989',
          '900': '#751a6e',
        },
      
      
      
      }

    },
  },
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer'
  ]
}
