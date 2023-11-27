const fs = require('fs')

const path = require('path')

const async = require('async')

const EntryPlugin = require('webpack/lib/EntryPlugin')

let cached = false

function bannerLoader3 (source) {  
  const loaderAsyncCallback = this.async()

  const resolve = this.getResolve({})

  let finalSource = source

  async.waterfall([
    (callback) => {
      if (!cached && this.data.content && Array.isArray(this.data.content.deps)) {
        cached = true
        this.data.content.deps.forEach(depPath => {
          this.addDependency(path.resolve(this.context, depPath))
          const _path = path.resolve(this.context, depPath)
          const dep = EntryPlugin.createDependency(_path, { name: _path })
          this._compilation.addEntry(
            this.context, 
            dep, 
            path.basename(depPath, path.extname(depPath)), 
            (error, entryModule) => {
              
            })
        })
      }

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
        callback(error, result)
      })
    },
    (result, callback) => {
      this.loadModule(result, (error, source, sourceMap, module) => {
        finalSource = `${finalSource} \n ${source} \n`
        callback(error)
      })
    }
  ], (error) => {
    finalSource = `${finalSource} \n environment: ${JSON.stringify(this.environment)} \n`
    loaderAsyncCallback(error, finalSource)
  })
}

bannerLoader3.pitch = async function pitch (remainingRequest, previousRequest, data) {
  // remainingRequest
  // '/Users/zhaoyiming/Desktop/github/into-webpack5/src/test.banner'

  const path1 = this.resourcePath + '.webpack[javascript/auto]' + '!=!' + remainingRequest
  const path2 = '!!' + this.remainingRequest
  const result = await this.importModule(
    path1,
    this.getOptions()
  )
  
  data.content = result.default || result
}

module.exports = bannerLoader3