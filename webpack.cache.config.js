const path = require('path')

function resolve (dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
}


module.exports = {
  mode: 'development',
  entry: resolve('src', 'index.js'),
  output: {
    filename: "bundle.js",
    path: resolve('dist'),
    library: {
      // do not specify a `name` here
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  cache: {
    type: 'filesystem',
    version: Date.now() + '',
    cacheDirectory: path.resolve(__dirname, '.webpack_temp_cache')
  }
}
