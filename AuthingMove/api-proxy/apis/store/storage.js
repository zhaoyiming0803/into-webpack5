export function setStorage (options) {
  options.encrypt = false
  return wx.setStorage(options)
}

export function getStorage (options) {
  options.encrypt = false
  return wx.getStorage(options)
}
