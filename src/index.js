import AuthingMove from '../AuthingMove/core'
import apiProxy from '../AuthingMove/api-proxy'

import { funcA, callStorage } from './a'

AuthingMove.use(apiProxy)

AuthingMove.funcA = funcA

wx.setStorage({
  key: 'hello321',
  data: '123hello'
})

callStorage()

export default AuthingMove
