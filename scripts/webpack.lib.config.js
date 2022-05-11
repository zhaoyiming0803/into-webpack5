const path = require('path')
const webpack = require('webpack')
const RenameRequireWebpackPlugin = require('../AuthingMove/webpack-plugin/RenameRequireWebpackPlugin')

function resolve (dir, file = '') {
  return path.resolve(__dirname, '../', dir, file)
}

module.exports = {
  mode: 'none',
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
  plugins: [
    new webpack.DefinePlugin({
      __authing_move_src_mode__: JSON.stringify('wx'),
      __authing_move_mode__: JSON.stringify('baidu'),
      __version__: JSON.stringify('1.0.0')
    }),
    new RenameRequireWebpackPlugin()
  ]
}
