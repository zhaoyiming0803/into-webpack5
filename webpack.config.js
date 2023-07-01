const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')

function resolve (dir, file = '') {
  return path.resolve(__dirname, './', dir, file)
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
  optimization: {
    // mode 设为 production 后，以下选项自动启动
    minimize: true,
    // exports are not generated for unused exports
    usedExports: true,
    minimizer: [
      new TerserPlugin()
    ]
  }
}
