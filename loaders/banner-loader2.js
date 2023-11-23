function bannerLoader2 (source) {
  return `${source}\n console.log("injected by banner-loader2")`
}

bannerLoader2.pitch = function pitch (remainingRequest, previousRequest, data) {
  // remainingRequest
  // '/Users/zhaoyiming/Desktop/github/into-webpack5/loaders/banner-loader3.js!/Users/zhaoyiming/Desktop/github/into-webpack5/src/test.banner'

  return `module.exports = require(${JSON.stringify('!!' + remainingRequest)}); \n`
}

module.exports = bannerLoader2
