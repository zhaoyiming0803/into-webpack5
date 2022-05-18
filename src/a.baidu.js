export function funcA () {
  return 'this is function A in baidu mode'
}

export function callStorage () {
  wx.setStorage({
    key: 'callStorage',
    data: 'callStorage in baidu'
  })
}
