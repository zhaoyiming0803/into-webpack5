import transformApi from './transform'
import { error } from './utils'

export default function install (AuthingMove, options = {}) {
  const {
    custom = {} // custom transform rules
  } = options
  const from = __authing_move_src_mode__ || 'wx'
  const to = __authing_move_mode__ || 'wx'


  const transformedApi = transformApi({
    from,
    to,
    custom
  })

  Object.keys(transformedApi).forEach(api => {
    try {
      if (typeof transformedApi[api] !== 'function') {
        AuthingMove[api] = transformedApi[api]
        return
      }

      AuthingMove[api] = (...args) => transformedApi[api].apply(AuthingMove, args)
    } catch (e) {
      error(`Call ${AuthingMove}.${api} error:` + JSON.stringify(e))
    }
  })
}
