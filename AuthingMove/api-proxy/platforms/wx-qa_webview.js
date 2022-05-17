import { error, getEnvContext } from '../utils'

const envContext = getEnvContext()

export default function getWxToQaApi () {
  return {
    /**
     * 数据缓存
     */
    setStorage (key, data) {
      envContext.setStorage({
        key,
        data
      })
    },
    setStorageSync (key, data) {
      error('Async setStorage is not supported in Quickapp, please use "setStorage"')
    }
  }
}
