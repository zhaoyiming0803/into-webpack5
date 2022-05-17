import AuthingMove from '../AuthingMove/core'
import apiProxy from '../AuthingMove/api-proxy'

AuthingMove.use(apiProxy)

wx.setStorage('hello abcdefgh', 'abcdefgh')

// wx.showToast({
//   title: 'Toast',
//   icon: 'success',
//   duration: 3000
// })

export default AuthingMove
