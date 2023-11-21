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
    }
  },
  output: {
    filename: "[name].js",
    path: resolve('dist'),
    globalObject: 'global'
  },
  plugins: [
    new TestWebpackPlugin()
  ]
}
