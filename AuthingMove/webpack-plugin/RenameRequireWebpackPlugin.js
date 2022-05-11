class RenameRequireWebpackPlugin {
  apply (compiler) {
    compiler.hooks.emit.tap('RenameRequireWebpackPlugin', compilation => {

      Object.keys(compilation.assets).forEach(key => {
        const content = compilation.assets[key]
          .source()
          .replace(/__webpack_require__/g, '__webpack_require_authing__')

        compilation.assets[key] = {
          size: () => content.length,
          source: () => content
        }
      })
    })
  }
}

module.exports = RenameRequireWebpackPlugin
