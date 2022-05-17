import { error, getEnvContext, generateFromMap } from '../shared'
import getWxToAliApi from './platforms/wx-ali'
import getWxToQaApi from './platforms/wx-qa'

const fromMap = generateFromMap()

function joinName (from = '', to = '') {
  const _from = `__authing_move_src_mode_${from}__`
  return `${fromMap[_from]}_${to}`
}

export default function transformApi (options) {
  const envContext = getEnvContext()
  const { from, to } = options
  const fromTo = joinName(from, to)
  const platformMap = {
    'wx_ali': getWxToAliApi(),
    'wx_qa': getWxToQaApi()
  }
  const needProxy = Object.create(null)
  const transformedApi = platformMap[fromTo] || {}

  Object.keys(envContext).concat(Object.keys(transformedApi)).forEach(key => {
    needProxy[key] = envContext[key] || transformedApi[key]
  })

  const apis = Object.create(null)

  Object.keys(needProxy).forEach(api => {
    if (typeof needProxy[api] !== 'function') {
      apis[api] = needProxy[api]
      return
    }

    apis[api] = (...args) => {
      let from = options.from
      const to = options.to
      
      if (args.length) {
        from = args.pop()

        if (typeof from !== 'string' || !fromMap[from]) {
          args.push(from)
          from = options.from
        }
      }

      const fromTo = joinName(from, to)

      if (options.custom[fromTo] && options.custom[fromTo][api]) {
        return options.custom[fromTo][api].apply(this, args)
      }

      if (platformMap[fromTo] && platformMap[fromTo][api]) {
        return platformMap[fromTo][api].apply(this, args)
      }

      if (envContext[api]) {
        return envContext[api].apply(this, args)
      }

      error(`当前小程序环境不存在 ${api} 方法`)
    }
  })

  return apis
}
