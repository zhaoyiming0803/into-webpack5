const path = require('path')

const OutputWebpackPlugin = require('./plugins/OutputWebpackPlugin')

function resolve (dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
}


module.exports = {
  mode: 'none',
  
  entry: {
    d: {
      import: './src/d.js'
    }
  },

  output: {
    filename: "[name].js",
    path: resolve('dist'),
    publicPath: 'https://cdn.example.com/assets/[fullhash]/',
    globalObject: 'global'
  },

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'replace-require-loader'
    }]
  },

  plugins: [
    new OutputWebpackPlugin()
  ]
}
