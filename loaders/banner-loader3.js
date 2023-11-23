const fs = require('fs')

const async = require('async')

function bannerLoader3 (source) {
  const loaderAsyncCallback = this.async()

  const resolve = this.getResolve({})

  this.addDependency(`${this.context}/e1.js`)

  let finalSource = source

  async.waterfall([
    (callback) => {
      const p1 = new this.data.content.Person('lisi', 1)

      const p2 = this.data.content.createPerson('wangwu', 2)

      finalSource = `
        console.log('p1: ', '${p1.getName()}')\n

        console.log('p2: ', '${p2.getName()}') \n

        \n ${finalSource} \n
      `
      callback(null)
    },
    (callback) => {
      resolve(this.context, './e1.js', (error, result) => {
        if (!error) {
          callback(null, result)
        } else {
          loaderAsyncCallback(error, finalSource)
        }
      })
    },
    (result, callback) => {
      fs.readFile(result, { encoding: 'utf-8' }, (error, content) => {
        if (!error) {
          this.emitFile('e1.copy.js', content)
        }
        callback(error)
      })
    }
  ], (error) => {
    loaderAsyncCallback(error, finalSource)
  })
}

bannerLoader3.pitch = async function pitch (remainingRequest, previousRequest, data) {
  // remainingRequest
  // '/Users/zhaoyiming/Desktop/github/into-webpack5/src/test.banner'

  const path = this.resourcePath + '.webpack[javascript/auto]' + '!=!' + remainingRequest
  const result = await this.importModule(
    path,
    this.getOptions()
  )
  
  data.content = result.default || result
}

module.exports = bannerLoader3