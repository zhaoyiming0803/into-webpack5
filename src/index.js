import AuthingMove from '../AuthingMove/core'
import apiProxy from '../AuthingMove/api-proxy'

import { funcA, callStorage } from './a'

AuthingMove.use(apiProxy)

AuthingMove.funcA = funcA

wx.setStorage({
  key: 'hello11111111',
  data: '123hello'
})

callStorage()

export default AuthingMove
