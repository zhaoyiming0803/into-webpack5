export function funcA () {
  return 'this is function A in qa_webview mode'
}

export function callStorage () {
  wx.setStorage({
    key: 'callStorage',
    data: 'callStorage in qa_webview'
  })
}
