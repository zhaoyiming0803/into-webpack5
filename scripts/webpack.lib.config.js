const path = require('path')
const webpack = require('webpack')

function resolve (dir, file = '') {
  return path.resolve(__dirname, '../', dir, file)
}

module.exports = {
  mode: 'none',
  devtool: 'hidden-source-map',
  entry: resolve('src', 'index.js'),
  output: {
    filename: "bundle.js",
    path: resolve('lib'),
    library: {
      // do not specify a `name` here
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new webpack.DefinePlugin({
      __authing_move_src_mode__: JSON.stringify('wx'),
      __authing_move_mode__: JSON.stringify('wx'),
      __version__: JSON.stringify('1.0.0')
    })
  ]
}
