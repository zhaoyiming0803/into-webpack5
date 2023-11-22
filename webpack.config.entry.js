const path = require('path')

const TestWebpackPlugin = require('./plugins/TestWebpackPlugin')

function resolve (dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
}


module.exports = {
  mode: 'none',
  
  entry: {
    a: {
      import: './src/a.js'
    },
    b: {
      import: './src/b.js'
    },
    'c/c': {
      import: './src/c/c.js'
    }
  },
  
  // entry: {
  //   a: './src/a.js',
  //   b: './src/b.js',
  //   c: './src/c/c.js',
  // },

  /**
   * We can also pass an array of file paths to the entry property which 
   * creates what is known as a "multi-main entry". 
   * This is useful when you would like to inject multiple dependent files together 
   * and graph their dependencies into ***** one "chunk" *****.
   */
  // entry: [
  //   './src/a.js',
  //   './src/b.js',
  //   './src/c/c.js'
  // ],

  output: {
    filename: "[name].js",
    path: resolve('dist'),
    globalObject: 'global'
  },
  plugins: [
    new TestWebpackPlugin()
  ]
}
