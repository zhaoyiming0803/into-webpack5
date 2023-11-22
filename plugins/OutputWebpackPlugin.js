/**
 * @deprecated
 * 仅用于测试，将 require 替换为 import 语法，在 loader 中处理比较合适
 * 先执行 loader 后执行 parser
 */
const ReplaceDependency = require('../dependencies/ReplaceDependency')

module.exports = class OutputWebpackPlugin {
  constructor () {}

  apply (compiler) {
    return
    compiler.hooks.compilation.tap('OutputWebpackPlugin', (compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(ReplaceDependency, normalModuleFactory)
        compilation.dependencyTemplates.set(ReplaceDependency, new ReplaceDependency.Template())

        const handler = (parser) => {
          parser.hooks.statement.tap('OutputWebpackPlugin', statement => {
            const dep = new ReplaceDependency(statement)
            // parser.state.current === parser.state.module
            parser.state.current.addPresentationalDependency(dep)
            return true
          })
        }

        normalModuleFactory.hooks.parser.for('javascript/auto').tap('OutputWebpackPlugin', handler)
        normalModuleFactory.hooks.parser.for('javascript/dynamic').tap('OutputWebpackPlugin', handler)
        normalModuleFactory.hooks.parser.for('javascript/esm').tap('OutputWebpackPlugin', handler)
			}
		)
  }
}