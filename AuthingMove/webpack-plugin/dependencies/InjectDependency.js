const NullDependency = require('webpack/lib/dependencies/NullDependency')

class InjectDependency extends NullDependency {
  constructor (options) {
    super()
    this.content = options.content
    this.index = options.index || 0
  }

  get type () {
    return 'InjectDependency'
  }

  updateHash (hash) {
    super.updateHash(hash)
    hash.updateHash(this.content)
  }
}

InjectDependency.Template = class InjectDependencyTemplate {
  apply (dep, source) {
    source.insert(dep.index, dep.content)
  }
}

module.exports = InjectDependency