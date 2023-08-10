const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')

const CollectDependenciesWebpackPlugin = require('./plugins/CollectDependenciesWebpackPlugin')

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
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [{
      test: /\.banner$/,
      use: [{
        loader: 'banner-loader',
        options: {
          author: 'sdf',
          time: 'sdf'
        }
      }]
    }]
  },
  plugins: [
    new CollectDependenciesWebpackPlugin()
  ],
  optimization: {
    // mode 设为 production 后，以下选项自动启动
    // https://webpack.js.org/guides/tree-shaking/#minify-the-output
    // minimize 为 false 时，不会 shaking dead codes
    minimize: true,
    // exports are not generated for unused exports
    // webpack/lib/WebpackOptionsApply.js
    // 标记哪些 export 被使用了，哪些没有
    // 没有被使用的就可以被 shake 掉
    /**
     if (options.optimization.usedExports) {
        const FlagDependencyUsagePlugin = require("./FlagDependencyUsagePlugin");
        new FlagDependencyUsagePlugin(
          options.optimization.usedExports === "global"
        ).apply(compiler);
      }
     */
    usedExports: true,
    minimizer: [
      new TerserPlugin()
    ]
  }
}
