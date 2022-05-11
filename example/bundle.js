/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/bundle.js":
/*!***********************!*\
  !*** ./lib/bundle.js ***!
  \***********************/
/***/ (() => {

/******/ var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_109__) => {

__nested_webpack_require_109__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_109__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _global_api__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_109__(2);


const AuthenticAuthingMove = factory()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticAuthingMove);

function factory () {
  function AuthingMove () {}

  (0,_global_api__WEBPACK_IMPORTED_MODULE_0__.initGlobalApi)(AuthingMove)

  return AuthingMove
}

__nested_webpack_require_109__.g.AuthenticAuthingMove = AuthenticAuthingMove


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_854__) => {

__nested_webpack_require_854__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_854__.d(__webpack_exports__, {
/* harmony export */   "initGlobalApi": () => (/* binding */ initGlobalApi)
/* harmony export */ });
/* harmony import */ var _use__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_854__(3);


function initGlobalApi (AuthingMove) {
  (0,_use__WEBPACK_IMPORTED_MODULE_0__.initUse)(AuthingMove)
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_1355__) => {

__nested_webpack_require_1355__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_1355__.d(__webpack_exports__, {
/* harmony export */   "initUse": () => (/* binding */ initUse)
/* harmony export */ });
function initUse (AuthingMove) {
  AuthingMove.use = function use (plugin, options = {}) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))

    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
  
    const args = [options]
  
    args.unshift(this)
  
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
  
    installedPlugins.push(plugin)
  
    return this
  }
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_2201__) => {

__nested_webpack_require_2201__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_2201__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ install)
/* harmony export */ });
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2201__(5);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2201__(6);



function install (AuthingMove, options = {}) {
  const {
    custom = {} // 自定义转换规则
  } = options
  const from = "wx" || 0
  const to = "wx" || 0

  const transformedApi = (0,_transform__WEBPACK_IMPORTED_MODULE_0__["default"])({
    from,
    to,
    custom
  })

  Object.keys(transformedApi).forEach(api => {
    try {
      if (typeof transformedApi[api] !== 'function') {
        AuthingMove[api] = transformedApi[api]
        return
      }

      AuthingMove[api] = (...args) => transformedApi[api].apply(AuthingMove, args)
    } catch (e) {
      (0,_shared__WEBPACK_IMPORTED_MODULE_1__.error)(`Call ${AuthingMove}.${api} error:` + JSON.stringify(e))
    }
  })
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_3354__) => {

__nested_webpack_require_3354__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_3354__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformApi)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3354__(6);
/* harmony import */ var _platforms_wx_ali__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3354__(7);



const fromMap = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.generateFromMap)()

function joinName (from = '', to = '') {
  return `${fromMap[from]}_${to}`
}

function transformApi (options) {
  const envContext = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()
  const { from, to } = options
  const fromTo = joinName(from, to)
  const platformMap = {
    'wx_ali': (0,_platforms_wx_ali__WEBPACK_IMPORTED_MODULE_1__["default"])()
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

      (0,_shared__WEBPACK_IMPORTED_MODULE_0__.error)(`当前小程序环境不存在 ${api} 方法`)
    }
  })

  return apis
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_5482__) => {

__nested_webpack_require_5482__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_5482__.d(__webpack_exports__, {
/* harmony export */   "adaptOptions": () => (/* binding */ adaptOptions),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "generateFromMap": () => (/* binding */ generateFromMap),
/* harmony export */   "getEnvContext": () => (/* binding */ getEnvContext),
/* harmony export */   "handleSuccess": () => (/* binding */ handleSuccess),
/* harmony export */   "makeMap": () => (/* binding */ makeMap),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
function getEnvContext () {
  switch ("wx") {
    case 'wx':
      return wx
    case 'ali':
      return ali
    case 'baidu':
      return swan
    case 'qq':
      return qq
    case 'tt':
      return tt
    case 'jd':
      return jd
    case 'qa':
      return qa
  }
}

function generateFromMap () {
  const platforms = ['wx', 'ali', 'baidu', 'qq', 'tt', 'jd', 'qa']
  return platforms.reduce((map, platform) => {
    map[`__authing_move_mode_${platform}__`] = platform
    return map
  }, {})
}

function makeMap (arr) {
  return arr.reduce((map, item) => {
    map[item] = true
    return map
  }, {})
}

function warn (message) {
  console.warn && console.warn(`[AuthingMove/api-proxy warn]:\n ${message}`)
}

function error (message) {
  console.error && console.error(`[AuthingMove/api-proxy error]:\n ${message}`)
}

function noop () {}

function adaptOptions (originalOptions, matchedOptions, extraOptions) {
  let options = {}
  
  Object.keys(originalOptions).forEach(key => {
    const _key = matchedOptions.hasOwnProperty(key) ? matchedOptions[key] : key
    if (_key) {
      options[_key] = originalOptions[key]
    }
  })

  options = Object.assign({}, options, extraOptions)

  return options
}

function handleSuccess (originalOptions, wrappedSuccess = noop, context) {
  if (!originalOptions.success) {
    return
  }

  const _this = context || this
  const cachedSuccess = originalOptions.success

  originalOptions.success = res => cachedSuccess.call(_this, wrappedSuccess(res) || res)
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_7786__) => {

__nested_webpack_require_7786__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_7786__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWxToAliApi)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7786__(6);


const envContext = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)()

function getWxToAliApi () {
  return {
    /**
     * 网络
     */
    request (options = {}) {
      const _options = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options, {
        header: 'headers'
      })

      ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.handleSuccess)(_options, res => {
        return (0,_shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(res, {
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
      const _options = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options, {
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
          (0,_shared__WEBPACK_IMPORTED_MODULE_0__.error)('支付宝小程序只能扫描【条形码】和【二维码】，请将 type 设置为 barCode 或 qrCode !!!')
          _options.type = 'qr'
        }
      }

      (0,_shared__WEBPACK_IMPORTED_MODULE_0__.handleSuccess)(_options, res => {
        return (0,_shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(res, {
          code: 'result'
        })
      })

      envContext.scan(_options)
    },

    /**
     * 开放接口
     */
    login (options = {}) {
      const _options = (0,_shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options)

      ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.handleSuccess)(_options, res => {
        return (0,_shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(res, {
          authCode: 'code'
        })
      })

      envContext.getAuthCode(_options)
    }
  }
}


/***/ })
/******/ ]);
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_10646__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_10646__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nested_webpack_require_10646__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nested_webpack_require_10646__.o(definition, key) && !__nested_webpack_require_10646__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__nested_webpack_require_10646__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nested_webpack_require_10646__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_10646__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__nested_webpack_require_10646__.r(__webpack_exports__);
/* harmony import */ var _AuthingMove_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10646__(1);
/* harmony import */ var _AuthingMove_api_proxy__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_10646__(4);
// import { funcA } from './a'
// import { funcB } from './b'



_AuthingMove_core__WEBPACK_IMPORTED_MODULE_0__["default"].use(_AuthingMove_api_proxy__WEBPACK_IMPORTED_MODULE_1__["default"])

// export const str = funcA() + '--------' + funcB()

})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/bundle */ "./lib/bundle.js");
/* harmony import */ var _lib_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_bundle__WEBPACK_IMPORTED_MODULE_0__);


console.log('str: ', _lib_bundle__WEBPACK_IMPORTED_MODULE_0__.str)

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;