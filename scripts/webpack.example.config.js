const path = require('path')

function resolve (dir, file = '') {
  return path.resolve(__dirname, '../', dir, file)
}

module.exports = {
  mode: 'development',
  devtool: 'hidden-source-map',
  entry: resolve('example', 'index.js'),
  output: {
    filename: "bundle.js",
    path: resolve('example'),
    library: {
      type: 'commonjs' 
    }
  }
}
