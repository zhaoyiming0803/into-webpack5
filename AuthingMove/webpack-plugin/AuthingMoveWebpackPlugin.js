const ReplaceDependency = require('./dependencies/ReplaceDependency')
const CommonJsVariableDependency = require('./dependencies/CommonJsVariableDependency')
const NullFactory = require('webpack/lib/NullFactory')
const path = require('path')

class AuthingMoveWebpackPlugin {
  apply (compiler) {
    compiler.hooks.thisCompilation.tap('AuthingMoveWebpackPlugin', (compilation, { normalModuleFactory }) => {
      replaceGlobalWx(compilation, normalModuleFactory)
    })

    compiler.hooks.emit.tap('AuthingMoveWebpackPlugin', compilation => {
      replaceRequire(compilation)
    })
  }
}

module.exports = AuthingMoveWebpackPlugin

function replaceGlobalWx (compilation, normalModuleFactory) {
  compilation.dependencyFactories.set(ReplaceDependency, new NullFactory())
  compilation.dependencyTemplates.set(ReplaceDependency, new ReplaceDependency.Template())

  compilation.dependencyFactories.set(CommonJsVariableDependency, normalModuleFactory)
  compilation.dependencyTemplates.set(CommonJsVariableDependency, new CommonJsVariableDependency.Template())

  normalModuleFactory.hooks.parser.for('javascript/auto').tap('AuthingMoveWebpackPlugin', (parser) => {
    parser.hooks.expression.for('wx').tap('AuthingMoveWebpackPlugin', expression => {
      let _expression
      const module = parser.state.module

      if (expression.type === 'Identifier') {
        _expression = expression
      } else if (expression.type === 'MemberExpression') {
        _expression = expression.object
      }

      if (!_expression) {
        return
      }

      const type = _expression.name
      const name = type === 'wx' ? 'AuthingMove' : ''
      const replaceContent = type === 'wx' ? 'AuthingMove': ''

      const dep = new ReplaceDependency(replaceContent, _expression.range)
      parser.state.current.addPresentationalDependency(dep)

      let needInject = true

      for (let dep of module.dependencies) {
        if (dep instanceof CommonJsVariableDependency && dep.name === name) {
          needInject = false
          break
        }
      }
      if (needInject) {
        const dep = new CommonJsVariableDependency(path.resolve(__dirname, '../core/index.js'), name)
        module.addDependency(dep)
      }
    })
  })
}

function replaceRequire (compilation) {
  Object.keys(compilation.assets).forEach(key => {
    const content = compilation.assets[key]
      .source()
      .replace(/__webpack_require__/g, '__webpack_require_authing__')

    compilation.assets[key] = {
      size: () => content.length,
      source: () => content
    }
  })
}
