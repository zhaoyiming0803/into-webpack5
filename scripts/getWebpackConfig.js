const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.config')
const AuthingMoveWebpackPlugin = require('../AuthingMove/webpack-plugin/AuthingMoveWebpackPlugin')
const { resolve } = require('./utils')

module.exports = function getWebpackConfig (options) {
  const { __authing_move_src_mode__, __authing_move_mode__, version } = options
  const entry = resolve('src', 'index.js')
  const output = {
    filename: `bundle-${__authing_move_mode__.toLowerCase()}.js`,
    path: resolve('dist'),
    library: {
      // do not specify a `name` here
      type: 'module'
    }
  }
  const plugins = [
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

  return merge({}, webpackBaseConfig, {
    entry,
    output,
    plugins
  })
}
