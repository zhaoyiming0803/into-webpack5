import { error } from '../../shared'

export default function getWxToQaApi () {
  return {
    /**
     * 数据缓存
     */
    setStorage (key, data) {
      const storage = require('@system.storage')
      storage.set({
        key,
        value: data
      })
    },
    setStorageSync (key, data) {
      error('Async setStorage is not supported in Quickapp, please use "setStorage"')
    }
  }
}
