/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/auth.tsx":
/*!*****************************!*\
  !*** ./components/auth.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _authTabs_RegistrationTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authTabs/RegistrationTab */ \"./components/authTabs/RegistrationTab.tsx\");\n/* harmony import */ var _authTabs_LoginTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authTabs/LoginTab */ \"./components/authTabs/LoginTab.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/vitalik/Documents/big_projects/andreas/client/components/auth.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Auth = function Auth(props) {\n  _s();\n\n  // const dispatch = useDispatch()\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      loading = _useState[0],\n      setLoadingPre = _useState[1]; // const {login, registration, setLoading} = useActions()\n  // console.log(login)\n\n\n  var registration1 = /*#__PURE__*/function () {\n    var _ref = (0,_Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {\n      var user;\n      return _Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              setLoadingPre(true);\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"http://localhost:5000/auth/registration\", {\n                name: data.name,\n                email: data.email,\n                password: data.password\n              });\n\n            case 4:\n              user = _context.sent;\n              console.log(user);\n              setTimeout(function () {\n                return setLoadingPre(false);\n              }, 500);\n              return _context.abrupt(\"return\", user);\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0.messge);\n              setTimeout(function () {\n                return setLoadingPre(false);\n              }, 500);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 10]]);\n    }));\n\n    return function registration1(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var login1 = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(data) {\n      var user1;\n      return _Users_vitalik_Documents_big_projects_andreas_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"http://localhost:5000/auth/login\", {\n                email: data.email,\n                password: data.password\n              });\n\n            case 3:\n              user1 = _context2.sent;\n              // dispatch(setAuth(true))\n              // const user = await AuthServices.login(data.email, data.password)\n              console.log(user1); // setTimeout(() => setLoadingPre(false), 500)\n\n              return _context2.abrupt(\"return\", user1);\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(_context2.t0.messge); // setTimeout(() => setLoadingPre(false), 500)\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 8]]);\n    }));\n\n    return function login1(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"auth\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      onClick: function onClick() {\n        return props.setAuthVisible(false);\n      },\n      src: \"/assets/svg/close.svg\",\n      width: 30,\n      height: 30,\n      alt: \"close\",\n      className: \"close\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"auth__content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Your text, Andy!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Write us whatever you want. We will answer to you as fast as possible.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Tab.Container, {\n        id: \"left-tabs-example\",\n        defaultActiveKey: \"SingIn\",\n        children: [loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Spinner, {\n          animation: \"grow\",\n          variant: \"primary\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Nav, {\n          variant: \"pills\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Nav.Item, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Nav.Link, {\n              eventKey: \"SingIn\",\n              children: \"Sing in\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Nav.Item, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Nav.Link, {\n              eventKey: \"Register\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Nav.Item, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Nav.Link, {\n              eventKey: \"Test\",\n              children: \"Test\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Tab.Content, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Tab.Pane, {\n            eventKey: \"SingIn\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_authTabs_LoginTab__WEBPACK_IMPORTED_MODULE_7__.default, {\n              login1: login1\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Tab.Pane, {\n            eventKey: \"Register\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_authTabs_RegistrationTab__WEBPACK_IMPORTED_MODULE_6__.default, {\n              registration1: registration1\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Tab.Pane, {\n            eventKey: \"Test\",\n            children: \"ahahah3\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"auth__img\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n        src: \"/assets/img/auth-img.png\",\n        width: 475,\n        height: 613,\n        alt: \"andreas\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Auth, \"gc3RUTyi8xJF1MmT8Uvs1pjcRqo=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLnRzeD82OTlmIl0sIm5hbWVzIjpbIkF1dGgiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmdQcmUiLCJyZWdpc3RyYXRpb24xIiwiZGF0YSIsImF4aW9zIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJtZXNzZ2UiLCJsb2dpbjEiLCJ1c2VyMSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzZXRBdXRoVmlzaWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQzdCO0FBRDZCLGtCQUdJQywrQ0FBUSxDQUFDLEtBQUQsQ0FIWjtBQUFBLE1BR3RCQyxPQUhzQjtBQUFBLE1BR2JDLGFBSGEsaUJBSTdCO0FBQ0E7OztBQUVBLE1BQU1DLGFBQWE7QUFBQSwyVEFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVsQkYsMkJBQWEsQ0FBQyxJQUFELENBQWI7QUFGa0I7QUFBQSxxQkFHQ0csaURBQUEsQ0FBVyx5Q0FBWCxFQUFzRDtBQUN2RUMsb0JBQUksRUFBRUYsSUFBSSxDQUFDRSxJQUQ0RDtBQUV2RUMscUJBQUssRUFBRUgsSUFBSSxDQUFDRyxLQUYyRDtBQUd2RUMsd0JBQVEsRUFBRUosSUFBSSxDQUFDSTtBQUh3RCxlQUF0RCxDQUhEOztBQUFBO0FBR1pDLGtCQUhZO0FBUWxCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUcsd0JBQVUsQ0FBQztBQUFBLHVCQUFNVixhQUFhLENBQUMsS0FBRCxDQUFuQjtBQUFBLGVBQUQsRUFBNkIsR0FBN0IsQ0FBVjtBQVRr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QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSw4REFBQyxxREFBRDtBQUFVLG9CQUFRLEVBQUMsVUFBbkI7QUFBQSxtQ0FDRSw4REFBQyw4REFBRDtBQUFpQiwyQkFBYSxFQUFFWDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQVNFLDhEQUFDLHFEQUFEO0FBQVUsb0JBQVEsRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBNkNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBQywwQkFETjtBQUVFLGFBQUssRUFBRSxHQUZUO0FBR0UsY0FBTSxFQUFFLEdBSFY7QUFJRSxXQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdERCxDQXhHRDs7R0FBTUwsSTtVQThDYW1CLG9EOzs7S0E5Q2JuQixJO0FBMEdOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hdXRoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdiwgU3Bpbm5lciwgVGFiIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvblRhYiBmcm9tIFwiLi9hdXRoVGFicy9SZWdpc3RyYXRpb25UYWJcIjtcbmltcG9ydCBMb2dpblRhYiBmcm9tIFwiLi9hdXRoVGFicy9Mb2dpblRhYlwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW50ZXJmYWNlIElBdXRoIHtcbiAgc2V0QXV0aFZpc2libGU6IERpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn1cblxuaW50ZXJmYWNlIElSZWdpc3RyYXRpb25UYWIge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJTG9naW5UYWIge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBBdXRoID0gKHByb3BzOiBJQXV0aCkgPT4ge1xuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ1ByZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IHtsb2dpbiwgcmVnaXN0cmF0aW9uLCBzZXRMb2FkaW5nfSA9IHVzZUFjdGlvbnMoKVxuICAvLyBjb25zb2xlLmxvZyhsb2dpbilcblxuICBjb25zdCByZWdpc3RyYXRpb24xID0gYXN5bmMgKGRhdGE6IElSZWdpc3RyYXRpb25UYWIpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZ1ByZSh0cnVlKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2F1dGgvcmVnaXN0cmF0aW9uXCIsIHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRMb2FkaW5nUHJlKGZhbHNlKSwgNTAwKTtcbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2dlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZ1ByZShmYWxzZSksIDUwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ2luMSA9IGFzeW5jIChkYXRhOiBJTG9naW5UYWIpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gc2V0TG9hZGluZ1ByZSh0cnVlKVxuICAgICAgLy8gLy8gY29uc3QgdXNlciA9IGxvZ2luKHsgZW1haWw6IGRhdGEuZW1haWwsIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH0pXG4gICAgICAvLyBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAvLyBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyBlbWFpbDogZGF0YS5lbWFpbCwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICBjb25zdCB1c2VyMSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXV0aC9sb2dpblwiLCB7XG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgLy8gZGlzcGF0Y2goc2V0QXV0aCh0cnVlKSlcbiAgICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBBdXRoU2VydmljZXMubG9naW4oZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZClcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIxKTtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZ1ByZShmYWxzZSksIDUwMClcbiAgICAgIHJldHVybiB1c2VyMTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLm1lc3NnZSk7XG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRpbmdQcmUoZmFsc2UpLCA1MDApXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFwiPlxuICAgICAgPGltZ1xuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRBdXRoVmlzaWJsZShmYWxzZSl9XG4gICAgICAgIHNyYz1cIi9hc3NldHMvc3ZnL2Nsb3NlLnN2Z1wiXG4gICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgYWx0PVwiY2xvc2VcIlxuICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoX19jb250ZW50XCI+XG4gICAgICAgIDxoMz5Zb3VyIHRleHQsIEFuZHkhPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV3JpdGUgdXMgd2hhdGV2ZXIgeW91IHdhbnQuIFdlIHdpbGwgYW5zd2VyIHRvIHlvdSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxUYWIuQ29udGFpbmVyIGlkPVwibGVmdC10YWJzLWV4YW1wbGVcIiBkZWZhdWx0QWN0aXZlS2V5PVwiU2luZ0luXCI+XG4gICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJncm93XCIgdmFyaWFudD1cInByaW1hcnlcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TmF2IHZhcmlhbnQ9XCJwaWxsc1wiPlxuICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwiU2luZ0luXCI+U2luZyBpbjwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXYuSXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJSZWdpc3RlclwiPlJlZ2lzdGVyPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cbiAgICAgICAgICAgICAgPE5hdi5JdGVtPlxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cIlRlc3RcIj5UZXN0PC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8VGFiLkNvbnRlbnQ+XG4gICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9XCJTaW5nSW5cIj5cbiAgICAgICAgICAgICAgPExvZ2luVGFiIGxvZ2luMT17bG9naW4xfSAvPlxuICAgICAgICAgICAgPC9UYWIuUGFuZT5cblxuICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiUmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgPFJlZ2lzdHJhdGlvblRhYiByZWdpc3RyYXRpb24xPXtyZWdpc3RyYXRpb24xfSAvPlxuICAgICAgICAgICAgPC9UYWIuUGFuZT5cblxuICAgICAgICAgICAgPFRhYi5QYW5lIGV2ZW50S2V5PVwiVGVzdFwiPmFoYWhhaDM8L1RhYi5QYW5lPlxuXG4gICAgICAgICAgPC9UYWIuQ29udGVudD5cbiAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhfX2ltZ1wiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9hdXRoLWltZy5wbmdcIlxuICAgICAgICAgIHdpZHRoPXs0NzV9XG4gICAgICAgICAgaGVpZ2h0PXs2MTN9XG4gICAgICAgICAgYWx0PVwiYW5kcmVhc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth.tsx\n");

/***/ })

});