const path = require('path')
const json5 = require('json5')

exports.addInfix = function addInfix (resourcePath, infix, extname) {
  extname = extname || path.extname(resourcePath)
  return resourcePath.substring(0, resourcePath.length - extname.length) + '.' + infix + extname
}

exports.stringifyQuery = function stringifyQuery (queryObj, useJSON) {
  if (!queryObj) {
    return ''
  }

  if (useJSON) {
    return `?${json5.stringify(queryObj)}`
  }

  const queryString = Object.keys(queryObj).sort().map(key => {
    const value = queryObj[key]

    if (value === undefined) {
      return
    }

    if (value === true) {
      return key
    }

    if (Array.isArray(value)) {
      const key2 = `${key}[]`
      const result = []

      value.slice().forEach(value2 => {
        if (value2 === undefined) {
          return
        }
        result.push(`${key2}=${encodeURIComponent(value2)}`)
      })

      return result.join('&')
    }

    return `${key}=${encodeURIComponent(value)}`
  }).filter(x => x).join('&')

  return `?${queryString}`
}
