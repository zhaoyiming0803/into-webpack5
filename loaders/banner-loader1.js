function bannerLoader1 (source) {
  return `${source}\nconsole.log("injected by banner-loader1")`
}

bannerLoader1.pitch = function pitch (remainingRequest, previousRequest, data) {
  // remainingRequest:
  // '/Users/zhaoyiming/Desktop/github/into-webpack5/loaders/banner-loader2.js!/Users/zhaoyiming/Desktop/github/into-webpack5/loaders/banner-loader3.js!/Users/zhaoyiming/Desktop/github/into-webpack5/src/test.banner'
}

module.exports = bannerLoader1
