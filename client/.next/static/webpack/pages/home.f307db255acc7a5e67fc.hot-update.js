/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/find/FindResult.tsx":
/*!****************************************!*\
  !*** ./components/find/FindResult.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/wrapper.mjs\");\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vars */ \"./vars.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/vitalik/Documents/big_projects/andreas/client/components/find/FindResult.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar FindResult = function FindResult(_ref) {\n  var videos = _ref.videos,\n      setIsFind = _ref.setIsFind;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"ResultField\",\n    children: videos && videos.map(function (video, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"findVideoWrapper\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/home/cards/\".concat(video.id),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            onClick: function onClick() {\n              return setIsFind(false);\n            },\n            className: \"findElLine\",\n            children: [video.image ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: \"\".concat(_vars__WEBPACK_IMPORTED_MODULE_3__.back_url).concat(video.image),\n              width: 70,\n              height: 70\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 19\n            }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: video.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(), false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = FindResult;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FindResult);\n\nvar _c;\n\n$RefreshReg$(_c, \"FindResult\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maW5kL0ZpbmRSZXN1bHQudHN4P2IzN2YiXSwibmFtZXMiOlsiRmluZFJlc3VsdCIsInZpZGVvcyIsInNldElzRmluZCIsIm1hcCIsInZpZGVvIiwiaW5kZXgiLCJpZCIsImltYWdlIiwiYmFja191cmwiLCJ0aXRsZSIsInV1aWR2NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0M7QUFBQSxNQUFyQ0MsTUFBcUMsUUFBckNBLE1BQXFDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUN6RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsY0FDR0QsTUFBTSxJQUFJQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSwwQkFDcEI7QUFBb0IsaUJBQVMsRUFBQyxrQkFBOUI7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksd0JBQWlCRCxLQUFLLENBQUNFLEVBQXZCLENBQVY7QUFBQSxpQ0FDRTtBQUNFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUosU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLGFBRFg7QUFFRSxxQkFBUyxFQUFFLFlBRmI7QUFBQSx1QkFHR0UsS0FBSyxDQUFDRyxLQUFOLGdCQUNHO0FBQUssaUJBQUcsWUFBS0MsMkNBQUwsU0FBZ0JKLEtBQUssQ0FBQ0csS0FBdEIsQ0FBUjtBQUF1QyxtQkFBSyxFQUFFLEVBQTlDO0FBQWtELG9CQUFNLEVBQUU7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESCxHQUVHLElBTE4sZUFPRTtBQUFBLHdCQUFPSCxLQUFLLENBQUNLO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVUMsd0NBQU0sRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURvQjtBQUFBLEtBQVg7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FwQkQ7O0tBQU1WLFU7QUFzQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpbmQvRmluZFJlc3VsdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtiYWNrX3VybH0gZnJvbSBcIi4uLy4uL3ZhcnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb0ZpbmRJIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgaW1hZ2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEZpbmRSZXN1bHRJIHtcbiAgdmlkZW9zPzogVmlkZW9GaW5kSVtdO1xuICBzZXRJc0ZpbmQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn1cblxuY29uc3QgRmluZFJlc3VsdCA9ICh7IHZpZGVvcywgc2V0SXNGaW5kIH06IEZpbmRSZXN1bHRJKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXN1bHRGaWVsZFwiPlxuICAgICAge3ZpZGVvcyAmJiB2aWRlb3MubWFwKCh2aWRlbywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJmaW5kVmlkZW9XcmFwcGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9ob21lL2NhcmRzLyR7dmlkZW8uaWR9YH0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0ZpbmQoZmFsc2UpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZmluZEVsTGluZVwifT5cbiAgICAgICAgICAgICAge3ZpZGVvLmltYWdlXG4gICAgICAgICAgICAgICAgPyA8aW1nIHNyYz17YCR7YmFja191cmx9JHt2aWRlby5pbWFnZX1gfSB3aWR0aD17NzB9IGhlaWdodD17NzB9IC8+XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPHNwYW4+e3ZpZGVvLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaW5kUmVzdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/find/FindResult.tsx\n");

/***/ })

});