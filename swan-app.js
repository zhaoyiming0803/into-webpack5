var __hacked = window.__hacked || {
  global: window.global,
  Function: Function,
  setTimeout: setTimeout,
  setInterval: setInterval,
  setImmediate: setImmediate,
  eval: eval,
  requestAnimationFrame: requestAnimationFrame,
};

(function (_ref) {
  var global = _ref.global;
  var Function = _ref.Function;
  var setTimeout = _ref.setTimeout;
  var setInterval = _ref.setInterval;
  var setImmediate = _ref.setImmediate;
  var requestAnimationFrame = _ref.requestAnimationFrame;
  var swanGlobal = _ref.swanGlobal;
  var jsNative = _ref.jsNative;
  var masterManager = _ref.masterManager;
  var _openSourceDebugInfo = _ref._openSourceDebugInfo;
  var System = _ref.System;
  var Bdbox_aiapps_jsbridge = _ref.Bdbox_aiapps_jsbridge;
  var Bdbox_android_jsbridge = _ref.Bdbox_android_jsbridge;
  var Bdbox_android_utils = _ref.Bdbox_android_utils;
  var _naFile = _ref._naFile;
  var _naInteraction = _ref._naInteraction;
  var _naNetwork = _ref._naNetwork;
  var _naRouter = _ref._naRouter;
  var _naSetting = _ref._naSetting;
  var _naStorage = _ref._naStorage;
  var _naUtils = _ref._naUtils;
  var globalThis = _ref.globalThis;

  window.define(
    "1",
    function (
      __webpack_require__,
      module,
      exports,
      define,
      swan,
      getApp,
      window,
      document,
      frames,
      self,
      location,
      navigator,
      localStorage,
      history,
      Caches,
      swaninterface,
      top,
      _naSwan,
      _swanApp,
      parent,
      open,
      sessionStorage,
      DocumentFragment
    ) {
      "use strict";

      var _interopRequireDefault = __webpack_require__(2);

      var _bundle = _interopRequireDefault(__webpack_require__(3));

      var _test = _interopRequireDefault(__webpack_require__(5));

      /**
       * @file index.js
       * @author swan
       */
      var app = getApp();
      console.log("test:::: ", (0, _test.default)()); // AuthingMove.showToast({
      //     title: '成功',
      //     icon: 'success',
      //     duration: 2000
      //   })

      Page({
        data: {
          userInfo: {},
          hasUserInfo: false,
          canIUse: false,
        },
        // 监听页面加载的生命周期函数
        onLoad: function onLoad() {
          this.setData({
            canIUse: swan.canIUse("button.open-type.getUserInfo"),
          });
        },
        getUserInfo: function getUserInfo(e) {
          this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
          });
        },
      });
    }
  );

  window.define(
    "2",
    function (
      __webpack_require__,
      module,
      exports,
      define,
      swan,
      getApp,
      window,
      document,
      frames,
      self,
      location,
      navigator,
      localStorage,
      history,
      Caches,
      swaninterface,
      top,
      _naSwan,
      _swanApp,
      parent,
      open,
      sessionStorage,
      DocumentFragment
    ) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }

      module.exports = _interopRequireDefault;
    }
  );

  window.define(
    "3",
    function (
      __webpack_require__,
      module,
      exports,
      define,
      swan,
      getApp,
      window,
      document,
      frames,
      self,
      location,
      navigator,
      localStorage,
      history,
      Caches,
      swaninterface,
      top,
      _naSwan,
      _swanApp,
      parent,
      open,
      sessionStorage,
      DocumentFragment
    ) {
      "use strict";

      var _interopRequireDefault = __webpack_require__(2);

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = void 0;

      var _typeof2 = _interopRequireDefault(__webpack_require__(4));

      /******/
      var __webpack_modules__ = [
        ,
        /* 0 */
        /* 1 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            default: function _default() {
              return __WEBPACK_DEFAULT_EXPORT__;
            },
            /* harmony export */
          });
          /* harmony import */

          var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
          /* harmony import */

          var _global_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

          (0, _global_api__WEBPACK_IMPORTED_MODULE_1__.initGlobalApi)(
            _instance__WEBPACK_IMPORTED_MODULE_0__["default"]
          );
          _instance__WEBPACK_IMPORTED_MODULE_0__["default"].version = "1.0.0";
          /* harmony default export */

          var __WEBPACK_DEFAULT_EXPORT__ =
            _instance__WEBPACK_IMPORTED_MODULE_0__["default"];
          __webpack_require__.g.AuthingMove =
            _instance__WEBPACK_IMPORTED_MODULE_0__["default"];
          /***/
        },
        /* 2 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            default: function _default() {
              return (
                /* binding */
                AuthingMove
              );
            },
            /* harmony export */
          });

          function AuthingMove() {}
          /***/
        },
        /* 3 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            initGlobalApi: function initGlobalApi() {
              return (
                /* binding */
                _initGlobalApi
              );
            },
            /* harmony export */
          });
          /* harmony import */

          var _use__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

          function _initGlobalApi(AuthingMove) {
            (0, _use__WEBPACK_IMPORTED_MODULE_0__.initUse)(AuthingMove);
          }
          /***/
        },
        /* 4 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            initUse: function initUse() {
              return (
                /* binding */
                _initUse
              );
            },
            /* harmony export */
          });

          function _initUse(AuthingMove) {
            AuthingMove.use = function use(plugin) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              var installedPlugins =
                this._installedPlugins || (this._installedPlugins = []);

              if (installedPlugins.indexOf(plugin) > -1) {
                return this;
              }

              var args = [options];
              args.unshift(this);

              if (typeof plugin.install === "function") {
                plugin.install.apply(plugin, args);
              } else if (typeof plugin === "function") {
                plugin.apply(null, args);
              }

              installedPlugins.push(plugin);
              return this;
            };
          }
          /***/
        },
        /* 5 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            default: function _default() {
              return (
                /* binding */
                install
              );
            },
            /* harmony export */
          });
          /* harmony import */

          var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
          /* harmony import */

          var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

          function install(AuthingMove) {
            var options =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var _options$custom = options.custom,
              custom = _options$custom === void 0 ? {} : _options$custom;
            var from = "wx" || false;
            var to = "baidu" || false;
            var transformedApi = (0,
            _transform__WEBPACK_IMPORTED_MODULE_0__["default"])({
              from: from,
              to: to,
              custom: custom,
            });
            Object.keys(transformedApi).forEach(function (api) {
              try {
                if (typeof transformedApi[api] !== "function") {
                  AuthingMove[api] = transformedApi[api];
                  return;
                }

                AuthingMove[api] = function () {
                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key2 = 0;
                    _key2 < _len;
                    _key2++
                  ) {
                    args[_key2] = arguments[_key2];
                  }

                  return transformedApi[api].apply(AuthingMove, args);
                };
              } catch (e) {
                (0,
                _shared__WEBPACK_IMPORTED_MODULE_1__.error)("Call ".concat(AuthingMove, ".").concat(api, " error:") + JSON.stringify(e));
              }
            });
          }
          /***/
        },
        /* 6 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            default: function _default() {
              return (
                /* binding */
                transformApi
              );
            },
            /* harmony export */
          });
          /* harmony import */

          var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
          /* harmony import */

          var _platforms_wx_ali__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(8);

          var fromMap = (0,
          _shared__WEBPACK_IMPORTED_MODULE_0__.generateFromMap)();

          function joinName() {
            var from =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : "";
            var to =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : "";
            return "".concat(fromMap[from], "_").concat(to);
          }

          function transformApi(options) {
            var _this2 = this;

            var envContext = (0,
            _shared__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)();
            var from = options.from,
              to = options.to;
            var fromTo = joinName(from, to);
            var platformMap = {
              wx_ali: (0,
              _platforms_wx_ali__WEBPACK_IMPORTED_MODULE_1__["default"])(),
            };
            var needProxy = Object.create(null);
            var transformedApi = platformMap[fromTo] || {};
            Object.keys(envContext)
              .concat(Object.keys(transformedApi))
              .forEach(function (key) {
                needProxy[key] = envContext[key] || transformedApi[key];
              });
            var apis = Object.create(null);
            Object.keys(needProxy).forEach(function (api) {
              if (typeof needProxy[api] !== "function") {
                apis[api] = needProxy[api];
                return;
              }

              apis[api] = function () {
                var from = options.from;
                var to = options.to;

                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2),
                    _key3 = 0;
                  _key3 < _len2;
                  _key3++
                ) {
                  args[_key3] = arguments[_key3];
                }

                if (args.length) {
                  from = args.pop();

                  if (typeof from !== "string" || !fromMap[from]) {
                    args.push(from);
                    from = options.from;
                  }
                }

                var fromTo = joinName(from, to);

                if (options.custom[fromTo] && options.custom[fromTo][api]) {
                  return options.custom[fromTo][api].apply(_this2, args);
                }

                if (platformMap[fromTo] && platformMap[fromTo][api]) {
                  return platformMap[fromTo][api].apply(_this2, args);
                }

                if (envContext[api]) {
                  return envContext[api].apply(_this2, args);
                }

                (0, _shared__WEBPACK_IMPORTED_MODULE_0__.error)(
                  "\u5F53\u524D\u5C0F\u7A0B\u5E8F\u73AF\u5883\u4E0D\u5B58\u5728 ".concat(
                    api,
                    " \u65B9\u6CD5"
                  )
                );
              };
            });
            return apis;
          }
          /***/
        },
        /* 7 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            adaptOptions: function adaptOptions() {
              return (
                /* binding */
                _adaptOptions
              );
            },

            /* harmony export */
            error: function error() {
              return (
                /* binding */
                _error
              );
            },

            /* harmony export */
            generateFromMap: function generateFromMap() {
              return (
                /* binding */
                _generateFromMap
              );
            },

            /* harmony export */
            getEnvContext: function getEnvContext() {
              return (
                /* binding */
                _getEnvContext
              );
            },

            /* harmony export */
            handleSuccess: function handleSuccess() {
              return (
                /* binding */
                _handleSuccess
              );
            },

            /* harmony export */
            makeMap: function makeMap() {
              return (
                /* binding */
                _makeMap
              );
            },

            /* harmony export */
            noop: function noop() {
              return (
                /* binding */
                _noop
              );
            },

            /* harmony export */
            warn: function warn() {
              return (
                /* binding */
                _warn
              );
            },
            /* harmony export */
          });

          function _getEnvContext() {
            switch ("baidu") {
              case "wx":
                return wx;

              case "ali":
                return my;

              case "baidu":
                return swan;

              case "qq":
                return qq;

              case "tt":
                return tt;

              case "jd":
                return jd;

              case "qa":
                return qa;
            }
          }

          function _generateFromMap() {
            var platforms = ["wx", "ali", "baidu", "qq", "tt", "jd", "qa"];
            return platforms.reduce(function (map, platform) {
              map["__authing_move_mode_".concat(platform, "__")] = platform;
              return map;
            }, {});
          }

          function _makeMap(arr) {
            return arr.reduce(function (map, item) {
              map[item] = true;
              return map;
            }, {});
          }

          function _warn(message) {
            console.warn &&
              console.warn("[AuthingMove/api-proxy warn]:\n ".concat(message));
          }

          function _error(message) {
            console.error &&
              console.error(
                "[AuthingMove/api-proxy error]:\n ".concat(message)
              );
          }

          function _noop() {}

          function _adaptOptions(
            originalOptions,
            matchedOptions,
            extraOptions
          ) {
            var options = {};
            Object.keys(originalOptions).forEach(function (key) {
              var _key = matchedOptions.hasOwnProperty(key)
                ? matchedOptions[key]
                : key;

              if (_key) {
                options[_key] = originalOptions[key];
              }
            });
            options = Object.assign({}, options, extraOptions);
            return options;
          }

          function _handleSuccess(originalOptions) {
            var wrappedSuccess =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : _noop;
            var context = arguments.length > 2 ? arguments[2] : undefined;

            if (!originalOptions.success) {
              return;
            }

            var _this = context || this;

            var cachedSuccess = originalOptions.success;

            originalOptions.success = function (res) {
              return cachedSuccess.call(_this, wrappedSuccess(res) || res);
            };
          }
          /***/
        },
        /* 8 */

        /***/
        function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */

          __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            default: function _default() {
              return (
                /* binding */
                getWxToAliApi
              );
            },
            /* harmony export */
          });
          /* harmony import */

          var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

          var envContext = (0,
          _shared__WEBPACK_IMPORTED_MODULE_0__.getEnvContext)();

          function getWxToAliApi() {
            return {
              /**
               * 网络
               */
              request: function request() {
                var options =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};

                var _options = (0,
                _shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options, {
                  header: "headers",
                });

                (0, _shared__WEBPACK_IMPORTED_MODULE_0__.handleSuccess)(
                  _options,
                  function (res) {
                    return (0,
                    _shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(res, {
                      Headers: "header",
                      status: "statusCode",
                    });
                  }
                ); // version > 1.11.0

                if (envContext.canIUse("request")) {
                  return envContext.request(_options);
                } // will be archived, support dingding miniprogram

                return envContext.httpRequest(_options);
              },

              /**
               * 数据缓存
               */
              setStorageSync: function setStorageSync(key, data) {
                envContext.setStorageSync({
                  key: key,
                  data: data,
                });
              },
              removeStorageSync: function removeStorageSync(key) {
                envContext.removeStorageSync({
                  key: key,
                });
              },
              getStorageSync: function getStorageSync(key) {
                return envContext.getStorageSync({
                  key: key,
                }).data;
              },

              /**
               * 扫码
               */
              scanCode: function scanCode() {
                var options =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};

                var _options = (0,
                _shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options, {
                  onlyFromCamera: "hideAlbum",
                  scanType: "type",
                });

                var typeMap = {
                  barCode: "bar",
                  qrCode: "qr",
                };

                if (_options.type) {
                  var _type = typeMap[_options.type];

                  if (_type) {
                    _options.type = _type;
                  } else {
                    (0, _shared__WEBPACK_IMPORTED_MODULE_0__.error)(
                      "支付宝小程序只能扫描【条形码】和【二维码】，请将 type 设置为 barCode 或 qrCode !!!"
                    );
                    _options.type = "qr";
                  }
                }

                (0, _shared__WEBPACK_IMPORTED_MODULE_0__.handleSuccess)(
                  _options,
                  function (res) {
                    return (0,
                    _shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(res, {
                      code: "result",
                    });
                  }
                );
                envContext.scan(_options);
              },

              /**
               * 开放接口
               */
              login: function login() {
                var options =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};

                var _options = (0,
                _shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(options);

                (0, _shared__WEBPACK_IMPORTED_MODULE_0__.handleSuccess)(
                  _options,
                  function (res) {
                    return (0,
                    _shared__WEBPACK_IMPORTED_MODULE_0__.adaptOptions)(res, {
                      authCode: "code",
                    });
                  }
                );
                envContext.getAuthCode(_options);
              },
            };
          }
          /***/
        },
        /******/
      ];
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = (__webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {},
          /******/
        });
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](
          module,
          module.exports,
          __webpack_require__
        );
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/define property getters */

      /******/

      (function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __webpack_require__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (
              __webpack_require__.o(definition, key) &&
              !__webpack_require__.o(exports, key)
            ) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key],
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/

      /******/

      /* webpack/runtime/global */

      /******/

      (function () {
        /******/
        __webpack_require__.g = (function () {
          /******/
          if (
            (typeof globalThis === "undefined"
              ? "undefined"
              : (0, _typeof2.default)(globalThis)) === "object"
          )
            return globalThis;
          /******/

          try {
            /******/
            return this || new Function("return this")();
            /******/
          } catch (e) {
            /******/
            if (
              (typeof window === "undefined"
                ? "undefined"
                : (0, _typeof2.default)(window)) === "object"
            )
              return window;
            /******/
          }
          /******/
        })();
        /******/
      })();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/

      (function () {
        /******/
        __webpack_require__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/
      })();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/

      (function () {
        /******/
        // define __esModule on exports

        /******/
        __webpack_require__.r = function (exports) {
          /******/
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: "Module",
            });
            /******/
          }
          /******/

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });
          /******/
        };
        /******/
      })();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

      (function () {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */

        __webpack_require__.d(__webpack_exports__, {
          /* harmony export */
          default: function _default() {
            return __WEBPACK_DEFAULT_EXPORT__;
          },
          /* harmony export */
        });
        /* harmony import */

        var _AuthingMove_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(1);
        /* harmony import */

        var _AuthingMove_api_proxy__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(5);

        _AuthingMove_core__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          _AuthingMove_api_proxy__WEBPACK_IMPORTED_MODULE_1__["default"]
        );
        /* harmony default export */

        var __WEBPACK_DEFAULT_EXPORT__ =
          _AuthingMove_core__WEBPACK_IMPORTED_MODULE_0__["default"];
      })();

      var __webpack_exports__default = __webpack_exports__["default"];
      exports.default = __webpack_exports__default;
    }
  );

  window.define(
    "4",
    function (
      __webpack_require__,
      module,
      exports,
      define,
      swan,
      getApp,
      window,
      document,
      frames,
      self,
      location,
      navigator,
      localStorage,
      history,
      Caches,
      swaninterface,
      top,
      _naSwan,
      _swanApp,
      parent,
      open,
      sessionStorage,
      DocumentFragment
    ) {
      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          module.exports = _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          module.exports = _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }

        return _typeof(obj);
      }

      module.exports = _typeof;
    }
  );

  window.define(
    "5",
    function (
      __webpack_require__,
      module,
      exports,
      define,
      swan,
      getApp,
      window,
      document,
      frames,
      self,
      location,
      navigator,
      localStorage,
      history,
      Caches,
      swaninterface,
      top,
      _naSwan,
      _swanApp,
      parent,
      open,
      sessionStorage,
      DocumentFragment
    ) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true,
      });
      exports.default = test;

      function test() {
        return "test fn";
      }
    }
  );

  window.define(
    "9",
    function (
      __webpack_require__,
      module,
      exports,
      define,
      swan,
      getApp,
      window,
      document,
      frames,
      self,
      location,
      navigator,
      localStorage,
      history,
      Caches,
      swaninterface,
      top,
      _naSwan,
      _swanApp,
      parent,
      open,
      sessionStorage,
      DocumentFragment
    ) {
      "use strict";

      /**
       * @file app.js
       * @author swan
       */

      /* globals swan */
      App({
        onLaunch: function onLaunch(options) {
          // do something when launch
        },
        onShow: function onShow(options) {
          // do something when show
        },
        onHide: function onHide() {
          // do something when hide
        },
      });
    }
  );

  window.__swanRoute = "app";
  window.usingComponents = [];
  window.usingPluginComponents = [];
  require("9");
  window.__swanRoute = "pages/index/index";
  window.usingComponents = [];
  window.usingPluginComponents = [];
  require("1");
})(__hacked);
//# sourceMappingURL=app.js.map
