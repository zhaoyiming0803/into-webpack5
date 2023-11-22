import { common } from './common1'

// __webpack_public_path__ = 'https://www.baidu.com/a/b/c'

const { cityTree } = __into_webpack5_require__('./common2')

// console.log('d.js: ', __webpack_public_path__)
// console.log('common: ', common)
console.log('cityTree: ', cityTree)