const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin')

const { ConcatSource } = require('webpack').sources

const path = require('path')

module.exports = class TestWebpackPlugin {
  constructor () {}

  apply (compiler) {
    const optimization = compiler.options.optimization
    optimization.runtimeChunk = {
      name: () => {
        return 'bundle'
      }
    }

    const splitChunksOptions = Object.assign({}, {
      defaultSizeTypes: ['javascript', 'unknown'],
      chunks: 'all',
      usedExports: optimization.usedExports === true,
      minChunks: 2,
      minSize: 3,
      enforceSizeThreshold: Infinity,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '-'
    }, optimization.splitChunks)

    delete optimization.splitChunks
    
    const splitChunksPlugin = new SplitChunksPlugin(splitChunksOptions)
    
    splitChunksPlugin.apply(compiler)

    compiler.hooks.normalModuleFactory.tap('TestWebpackPlugin', (normalModuleFactory) => {
      normalModuleFactory.hooks.beforeResolve.tap('TestWebpackPlugin', data => {

      })

      normalModuleFactory.hooks.afterResolve.tap('TestWebpackPlugin', ({ createData }) => {
        
      })
    })

    compiler.hooks.thisCompilation.tap('TestWebpackPlugin', (compilation) => {  
      compilation.hooks.finishModules.tap('TestWebpackPlugin', (modules) => {
        for (const module of modules.values()) {
          if (!module.resource) {
            continue
          }
          const chunkName = getResourceName(module.resource)
          // 仅做测试，统一打包到 bundle 中，实际上没必要重复注册多个相同的 cacheGroup
          // 如果需要更精细的拆分，可以修改 name 为 ${chunkName}-bundle 之类的名称，单独生成一个 bundle，
          // 然后在下面的 processChunk 中按需 concat source
          if (['common1.js'].includes(chunkName)) {
            splitChunksOptions.cacheGroups[chunkName] = {
              test (module) {
                return module.resource.indexOf('common1.js') > -1
              },
              name: chunkName + '-bundle',
              minChunks: 2,
              chunks: 'all'
            }
          } else if (['common2.js'].includes(chunkName)) {
            splitChunksOptions.cacheGroups[chunkName] = {
              test (module) {
                return module.resource.indexOf('common2.js') > -1
              },
              name: path.basename(chunkName) + '-bundle',
              minChunks: 3,
              chunks: 'all'
            }
          }
          // SplitChunksPlugin 的 constructor 中有很多针对 options 的 normalize 操作
          // SplitChunksPlugin 注册了 optimizeChunks 钩子，有判断 if (alreadyOptimized) return;
          // 就算 new 多次，等到 call optimizeChunks 钩子的时候，拿到的也是最后最新的 options
          // 并且不会重复 split chunk

          // SplitChunksPlugin:
          // 根据 splitChunkOptions 将符合条件的 module 放到对应的 chunk 中 - addModuleToChunksInfoMap

          // Compilation -> addChunkInGroup
          splitChunksPlugin.options = new SplitChunksPlugin(splitChunksOptions).options
        }
      })

      compilation.hooks.processAssets.tap({
        name: 'TestWebpackPlugin',
        stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONS
      }, () => {
        const {
          globalObject,
          chunkLoadingGlobal
        } = compilation.outputOptions

        const chunkLoadingGlobalStr = JSON.stringify(chunkLoadingGlobal)

        const processedChunk = new Set()

        const processChunk = (chunk, isRuntime, relativeChunks) => {
          const chunkFile = chunk.files.values().next().value

          if (!chunkFile || processedChunk.has(chunk)) {
            return
          }

          const originalSource = compilation.assets[chunkFile]
          const source = new ConcatSource()
          source.add(`\n var ${globalObject} = {}; \n`)

          relativeChunks.forEach((relativeChunk, index) => {
            const relativeChunkFile = relativeChunk.files.values().next().value
            if (!relativeChunkFile) {
              return
            }

            const chunkPath = getTargetFile(chunkFile)
            let relativePath = getTargetFile(relativeChunkFile)
            relativePath = path.relative(path.dirname(chunkPath), relativePath)
            relativePath = fixRelativePath(relativePath)
            relativePath = toPosix(relativePath)

            if (index === 0) {
              source.add(`${globalObject}[${chunkLoadingGlobalStr}] = require("${relativePath}");\n`)
            } else {
              source.add(`require("${relativePath}");\n`)
            }
          })

          if (isRuntime) {
            source.add(originalSource)
            source.add(`\n module.exports = ${globalObject}[${chunkLoadingGlobalStr}]; \n`)
          } else {
            source.add(originalSource)
          }

          compilation.assets[chunkFile] = source
          processedChunk.add(chunk)
        }

        compilation.chunkGroups.forEach(chunkGroup => {
          let runtimeChunk = null
          let entryChunk = null
          const middleChunks = []
          const lastIndex = chunkGroup.chunks.length - 1
  
          chunkGroup.chunks.forEach((chunk, index) => {
            if (index === 0) {
              runtimeChunk = chunk
            } else if (index === lastIndex) {
              entryChunk = chunk
            } else {
              middleChunks.push(chunk)
            }

            if (runtimeChunk) {
              processChunk(runtimeChunk, true, [])
              
              if (middleChunks.length) {
                middleChunks.forEach(chunk => {
                  processChunk(chunk, false, [runtimeChunk])
                })
              }

              if (entryChunk) {
                middleChunks.unshift(runtimeChunk)
                processChunk(entryChunk, false, middleChunks)
              }
            }
          })
        })
      })
    })
  }
}

function getTargetFile (file) {
  let targetFile = file
  const queryStringIdx = targetFile.indexOf('?')
  if (queryStringIdx >= 0) {
    targetFile = targetFile.substr(0, queryStringIdx)
  }
  return targetFile
}

function fixRelativePath (path) {
  if (!/^\./.test(path)) {
    return './' + path
  }
  return path
}

function toPosix (path) {
  return path.replace(/\\/g, '/')
}

function getResourceName (resource) {
  const index = resource.indexOf('src/')
  return resource.slice(index + 4)
}