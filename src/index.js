// import { funcA } from './a'
// import { funcB } from './b'
import AuthingMove from '../AuthingMove/core'
import apiProxy from '../AuthingMove/api-proxy'

AuthingMove.use(apiProxy)

// export const str = funcA() + '--------' + funcB()
