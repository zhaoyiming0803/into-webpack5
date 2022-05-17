const path = require('path')
const { stringifyQuery, addInfix } = require('../utils')
const { parseQuery } = require('loader-utils')


module.exports = class AddModePlugin {
  constructor (source, mode, target) {
    this.source = source
    this.mode = mode
    this.target = target
  }

  apply (resolver) {
    const target = resolver.ensureHook(this.target)
    const mode = this.mode

    resolver.getHook(this.source).tapAsync('AddModePlugin', (request, resolveContext, callback) => {
      if (request.mode) {
        return callback()
      }

      const obj = {
        mode
      }

      const resourcePath = request.path
      const extname = path.extname(resourcePath)
      const queryObj = parseQuery(request.query || '?')
      
      queryObj.mode = mode
      queryObj.infix = `${queryObj.infix || ''}.${mode}`
      obj.query = stringifyQuery(queryObj)
      obj.path = addInfix(resourcePath, mode, extname)
      obj.relativePath = request.relativePath && addInfix(request.relativePath, mode, extname)

      resolver.doResolve(
        target, 
        Object.assign({}, request, obj),
        `add mode: ${mode}`,
        resolveContext,
        callback
      )
    })
  }
}
