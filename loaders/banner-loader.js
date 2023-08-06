// https://github.com/zhaoyiming0803/into-webpack4/blob/master/loaders/banner-loader.js

module.exports = function bannerLoader (source) {
  const { resourcePath } = this
  return `module.exports = require("!!${__dirname}/custom-babel-loader!${resourcePath}")`
}