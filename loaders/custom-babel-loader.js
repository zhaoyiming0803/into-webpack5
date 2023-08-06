module.exports = function customBabelLoader (source) {
  return `${source}\nconsole.log("injected by custom babel loader")`
}