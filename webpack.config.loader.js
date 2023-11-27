const path = require('path')

const EntryChunkWebpackPlugin = require('./plugins/EntryChunkWebpackPlugin')

function resolve (dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
}


module.exports = {
  watch: true,

  mode: 'none',
  
  entry: {
    e: {
      import: './src/e.js'
    }
  },

  output: {
    filename: "[name].js",
    path: resolve('dist'),
    globalObject: 'global'
  },

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },

  module: {
    rules: [{
      test: /\.banner$/,
      use: [{
        loader: 'banner-loader1'
      }, {
        loader: 'banner-loader2'
      }, {
        loader: 'banner-loader3'
      }]
    }]
  },

  plugins: [
    new EntryChunkWebpackPlugin()
  ]
}
