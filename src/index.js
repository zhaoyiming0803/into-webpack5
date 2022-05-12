import AuthingMove from '../AuthingMove/core'
import apiProxy from '../AuthingMove/api-proxy'

AuthingMove.use(apiProxy)

wx.setStorageSync('abc', 'abc123')

export default AuthingMove
