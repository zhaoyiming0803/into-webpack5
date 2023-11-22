module.exports = function replaceRequireLoader (source) {
  return source.replace(/(const)\s+(.+)\s+?=\s+?__into_webpack5_require__\((.+)\)/img, ($0, $1, $2, $3) => {
    return `import ${$2} from ${$3}`
  })
}