/**
 * @deprecated
 */

const NullDependency = require('webpack/lib/dependencies/NullDependency')

const makeSerializable = require('webpack/lib/util/makeSerializable')

class ReplaceDependency extends NullDependency {
  constructor(statement) {
		super()
		this.statement = statement
	}

  updateHash (hash, context) {
    hash.update('' + (+new Date()) + Math.random())
    super.updateHash(hash, context)
  }

  serialize (context) {
		const { write } = context
		write(this.statement)
		super.serialize(context)
	}

	deserialize (context) {
		const { read } = context
		this.statement = read()
		super.deserialize(context)
	}
}

makeSerializable(ReplaceDependency, './dependencies/ReplaceDependency')

ReplaceDependency.Template = class ReplaceDependencyTemplate {
  apply (dep, source) {
    if (Array.isArray(dep.statement.declarations)) {
      dep.statement.declarations.forEach(declaration => {
        const { id, init } = declaration
        if (init.callee && init.callee.name === '__into_webpack5_require__') {
          source.replace(dep.statement.start, dep.statement.end - 1, `import { ${id.properties[0].key.name} } from ${init.arguments[0].raw}`)
        }
      })
    }
  }
}

module.exports = ReplaceDependency

