const path = require('path')

function resolve (dir, file = '') {
  return path.resolve(__dirname, dir, file)
}

module.exports = {
  mode: 'development',
  devtool: 'hidden-source-map',
  entry: resolve('src', 'index.js'),
  output: {
    filename: "bundle.js",
    path: resolve('dist'),
    library: {
      // do not specify a `name` here
      // type: 'commonjs' 
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  }
}
