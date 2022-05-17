const path = require('path')
const webpack = require('webpack')
const AuthingMoveWebpackPlugin = require('../AuthingMove/webpack-plugin/AuthingMoveWebpackPlugin')

function resolve (dir, file = '') {
  return path.resolve(__dirname, '../', dir, file)
}

const __authing_move_src_mode__ = 'wx' // fixed value, do not allow to change
const __authing_move_mode__ = 'uni'

const version = require('../package.json').version

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
      __authing_move_src_mode__: JSON.stringify(__authing_move_src_mode__),
      __authing_move_mode__: JSON.stringify(__authing_move_mode__),
      __version__: JSON.stringify(version)
    }),
    new AuthingMoveWebpackPlugin({
      srcMode: __authing_move_src_mode__,
      mode: __authing_move_mode__
    })
  ]
}
