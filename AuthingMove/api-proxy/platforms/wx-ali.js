import { getEnvContext, error, adaptOptions, handleSuccess } from '../utils'

const envContext = getEnvContext()

export default function getWxToAliApi () {
  return {
    /**
     * 网络
     */
    request (options = {}) {
      const _options = adaptOptions(options, {
        header: 'headers'
      })

      handleSuccess(_options, res => {
        return adaptOptions(res, {
          Headers: 'header',
          status: 'statusCode'
        })
      })

      // version > 1.11.0
      if (envContext.canIUse('request')) {
        return envContext.request(_options)
      }

      // will be archived, support dingding miniprogram
      return envContext.httpRequest(_options)
    },

    /**
     * 数据缓存
     */
    setStorageSync (key, data) {
      envContext.setStorageSync({
        key,
        data
      })
    },

    removeStorageSync (key) {
      envContext.removeStorageSync({ key })
    },

    getStorageSync (key) {
      return envContext.getStorageSync({ key }).data
    },

    /**
     * 扫码
     */
    scanCode (options = {}) {
      const _options = adaptOptions(options, {
        onlyFromCamera: 'hideAlbum',
        scanType: 'type'
      })

      const typeMap = {
        barCode: 'bar',
        qrCode: 'qr'
      }

      if (_options.type) {
        const _type = typeMap[_options.type]
        if (_type) {
          _options.type = _type
        } else {
          error('支付宝小程序只能扫描【条形码】和【二维码】，请将 type 设置为 barCode 或 qrCode !!!')
          _options.type = 'qr'
        }
      }

      handleSuccess(_options, res => {
        return adaptOptions(res, {
          code: 'result'
        })
      })

      envContext.scan(_options)
    },

    /**
     * 开放接口
     */
    login (options = {}) {
      const _options = adaptOptions(options)

      handleSuccess(_options, res => {
        return adaptOptions(res, {
          authCode: 'code'
        })
      })

      envContext.getAuthCode(_options)
    }
  }
}
