"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sign */ \"./utils/sign.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_metamask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/metamask */ \"./component/metamask.js\");\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), haveMetamask = ref[0], sethaveMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref1[0], setclient = ref1[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        if (!ethereum) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        sethaveMetamask(true);\n                        _ctx.next = 5;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 5:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 9:\n                        {\n                            sethaveMetamask(false);\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        console.log(\"Metamask not detected\");\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 7:\n                        accounts = _ctx.sent;\n                        setclient({\n                            isConnected: true,\n                            address: accounts[0]\n                        });\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"Error connecting to metamask\", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function connectWeb3() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkConnection();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: connectWeb3,\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"https://twitter.com/asaolu_elijah\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"btn tw-btn\",\n                                        children: \"TW\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome DApp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: !haveMetamask ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_metamask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, _this) : client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: \"You're connected ✅\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        onClick: _utils_sign__WEBPACK_IMPORTED_MODULE_3__.signMessage,\n                                        type: \"button\",\n                                        className: \"btn sign-btn\",\n                                        children: \"Sign Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"btn connect-btn\",\n                                        onClick: connectWeb3,\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this),\n                        client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    children: \"You're connected ✅\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: _utils_sign__WEBPACK_IMPORTED_MODULE_3__.signMessage,\n                                    type: \"button\",\n                                    className: \"btn sign-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: connectWeb3,\n                                    children: \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Index, \"qfoKW/OJEUbbtoN/AjapFSOFMsI=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2QsQ0FBQztHQTdJS2QsS0FBSztLQUFMQSxLQUFLO0FBK0lYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy9zaWduXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNZXRhbWFzayBmcm9tIFwiLi4vY29tcG9uZW50L21ldGFtYXNrXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbaGF2ZU1ldGFtYXNrLCBzZXRoYXZlTWV0YW1hc2tdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2NsaWVudCwgc2V0Y2xpZW50XSA9IHVzZVN0YXRlKHtcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IGNoZWNrQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBzZXRoYXZlTWV0YW1hc2sodHJ1ZSk7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSk7XG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZXRjbGllbnQoe1xuICAgICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICAgIGFkZHJlc3M6IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldGNsaWVudCh7XG4gICAgICAgICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0aGF2ZU1ldGFtYXNrKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdlYjMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1ldGFtYXNrIG5vdCBkZXRlY3RlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgfSk7XG5cbiAgICAgIHNldGNsaWVudCh7XG4gICAgICAgIGlzQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNvbm5lY3RpbmcgdG8gbWV0YW1hc2tcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrQ29ubmVjdGlvbigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIE5hdmJhciAqL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZnJlbi1uYXYgZC1mbGV4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk1FTlVfPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGNvbm5lY3QtYnRuXCIgb25DbGljaz17Y29ubmVjdFdlYjN9PlxuICAgICAgICAgICAgICB7Y2xpZW50LmlzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMCwgNCl9Li4uXG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMzgsIDQyKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PkNvbm5lY3QgV2FsbGV0PC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYXNhb2x1X2VsaWphaFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB0dy1idG5cIj5UVzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgey8qIE5hdmJhciBlbmQgKi99XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXhcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Bd2Vzb21lIERBcHAg8J+agDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIHsvKiAtLS0tICovfVxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgeyFoYXZlTWV0YW1hc2sgPyAoXG4gICAgICAgICAgICAgIDxNZXRhbWFzayAvPlxuICAgICAgICAgICAgKSA6IGNsaWVudC5pc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8aDI+WW91J3JlIGNvbm5lY3RlZCDinIU8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25NZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gc2lnbi1idG5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gY29ubmVjdC1idG5cIiBvbkNsaWNrPXtjb25uZWN0V2ViM30+XG4gICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHsvKiAtLS0tICovfVxuICAgICAgICAgIHtjbGllbnQuaXNDb25uZWN0ZWQgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGgyPllvdSdyZSBjb25uZWN0ZWQg4pyFPC9oMj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25NZXNzYWdlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBzaWduLWJ0blwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIE1lc3NhZ2VcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGNvbm5lY3QtYnRuXCIgb25DbGljaz17Y29ubmVjdFdlYjN9PlxuICAgICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzaWduTWVzc2FnZSIsIkxpbmsiLCJNZXRhbWFzayIsIkluZGV4IiwiaGF2ZU1ldGFtYXNrIiwic2V0aGF2ZU1ldGFtYXNrIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzZXRjbGllbnQiLCJjaGVja0Nvbm5lY3Rpb24iLCJldGhlcmV1bSIsImFjY291bnRzIiwid2luZG93IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImFkZHJlc3MiLCJjb25uZWN0V2ViMyIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsInN0eWxlIiwibWFyZ2luTGVmdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbGljZSIsImhyZWYiLCJzZWN0aW9uIiwibWFpbiIsImgxIiwicCIsImJyIiwiaDIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});