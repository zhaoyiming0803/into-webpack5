const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin')

const { ConcatSource } = require('webpack').sources

const path = require('path')

module.exports = class TestWebpackPlugin {
  constructor () {}

  apply (compiler) {
    applySplitChunksPlugin(compiler)

    compiler.hooks.normalModuleFactory.tap('TestWebpackPlugin', (normalModuleFactory) => {
      normalModuleFactory.hooks.beforeResolve.tap('TestWebpackPlugin', data => {

      })

      normalModuleFactory.hooks.afterResolve.tap('TestWebpackPlugin', ({ createData }) => {
        
      })
    })

    compiler.hooks.thisCompilation.tap('TestWebpackPlugin', (compilation) => {
      compilation.hooks.processAssets.tap({
        name: 'TestWebpackPlugin',
        stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONS
      }, () => {
        let runtimeChunk = null
        const entryChunks = []

        compilation.chunkGroups.forEach(chunkGroup => {
          chunkGroup.chunks.forEach((chunk, index) => {
            if (index === 0) {
              runtimeChunk = chunk
            } else {
              entryChunks.push(chunk)
            }
          })
        })

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

        if (runtimeChunk) {
          processChunk(runtimeChunk, true, [])
          
          if (entryChunks.length) {
            entryChunks.forEach(chunk => {
              processChunk(chunk, false, [runtimeChunk])
            })
          }
        }
      })
    })
  }
}

function applySplitChunksPlugin (compiler) {
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
    minChunks: 1,
    minSize: 1,
    enforceSizeThreshold: Infinity,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    automaticNameDelimiter: '-'
  }, optimization.splitChunks)

  delete optimization.splitChunks
  
  const splitChunksPlugin = new SplitChunksPlugin(splitChunksOptions)
  
  splitChunksPlugin.apply(compiler)
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