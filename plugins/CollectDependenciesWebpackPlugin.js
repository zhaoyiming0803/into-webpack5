const PLUGIN_NAME = 'CollectDependenciesWebpackPlugin'

const walk = require('acorn-walk')

module.exports = class CollectDependenciesWebpackPlugin {
  constructor () {}

  apply (compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation, { normalModuleFactory }) => {
      normalModuleFactory.hooks.parser.for('javascript/auto').tap(PLUGIN_NAME, (parser) => {
        parser.hooks.program.tap(PLUGIN_NAME, (program) => {
          walk.simple(program, {
            CallExpression: node => {
              const callee = node.callee
              const type = node.arguments[0]
            }
          }, {
            ...walk.base, Import: walk.base.Import || (() => {})
          })
        })
      })

      compilation.hooks.finishModules.tap(PLUGIN_NAME, (modules) => {
        
      })

      normalModuleFactory.hooks.afterResolve.tap(PLUGIN_NAME, (resolveData) => {
        console.log(resolveData)
      })
    })
  }
}