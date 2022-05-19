const rm = require('rimraf')
const chalk = require('chalk')

const webpack = require('webpack')

const { parseArgv, resolve } = require('./utils')
const { platforms } = require('./config')
const getWebpackConfig = require('./getWebpackConfig')

const { watch = false, modes = platforms } = parseArgv()

// please change version in package.json, run build after
const version = require('../package.json').version

const webpackConfigs = modes.reduce((configs, mode) => {
  const options = {
    __authing_move_src_mode__: 'wx',
    __authing_move_mode__: mode,
    version
  }
  return configs.concat(getWebpackConfig(options))
}, [])

try {
  rm.sync(resolve('dist'))
} catch (e) {
  console.log(chalk.red('\n\n Failed to delete dist directory, please operate manually \n\n'))
}

async function readyGo () {
  const maxConcurrency = require('os').cpus().length
  const ret = []
  const executing = []

  for (const config of webpackConfigs) {
    const p = Promise.resolve().then(() => build(config))
    ret.push(p)

    if (maxConcurrency <= webpackConfigs.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)

      if (executing.length >= maxConcurrency) {
        await Promise.race(executing)
      }
    }
  }

  return Promise.all(ret)
}

function build (config) {
  if (watch) {
    webpack(config).watch(undefined, callback)
  } else {
    webpack(config, callback)
  }
}

function callback (error, stats) {
  if (error) {
    process.exitCode = 1
    return console.log(chalk.red(error))
  }

  if (Array.isArray(stats.stats)) {
    stats.stats.forEach(item => {
      console.log(chalk.green('build: '))
      process.stdout.write(item.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
        entrypoints: false
      }) + '\n\n')
    })
  } else {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      entrypoints: false
    }) + '\n\n')
  }

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
  } else if (watch) {
    console.log(chalk.cyan(`  Build complete at ${new Date()}.\n  Still watching...\n`))
  } else {
    console.log(chalk.cyan('  Build complete.\n'))
  }
}

readyGo()
