"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/proyec",{

/***/ "./pages/proyec.jsx":
/*!**************************!*\
  !*** ./pages/proyec.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\nvar __N_SSG = true;\nfunction index(param) {\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"carousel\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"carousel-inner\",\n                children: data.map((param, index)=>/*#__PURE__*/ {\n                    let { name , id , full_name , avatar_url  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/portafolio5.png\",\n                                alt: \"\",\n                                className: \"img-fluid\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Willi\\\\Desktop\\\\ExamenB\\\\pages\\\\proyec.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 49\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p3\", {\n                                children: \"Nombre:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Willi\\\\Desktop\\\\ExamenB\\\\pages\\\\proyec.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 49\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    name,\n                                    \" - \",\n                                    id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Willi\\\\Desktop\\\\ExamenB\\\\pages\\\\proyec.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 65\n                            }, this)\n                        ]\n                    }, id, true, {\n                        fileName: \"C:\\\\Users\\\\Willi\\\\Desktop\\\\ExamenB\\\\pages\\\\proyec.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 45\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Willi\\\\Desktop\\\\ExamenB\\\\pages\\\\proyec.jsx\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Willi\\\\Desktop\\\\ExamenB\\\\pages\\\\proyec.jsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Willi\\\\Desktop\\\\ExamenB\\\\pages\\\\proyec.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\nconst proyectos = [\n    {\n        author: \"porfolio1.png\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm95ZWMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQzs7QUFJM0IsU0FBU0MsTUFBTSxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjtJQUMxQixxQkFDSSw4REFBQ0YsMERBQU1BO2tCQUtILDRFQUFDRztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFHU0YsS0FBS0csR0FBRyxDQUFDLFFBQXNDSixzQkFFM0M7d0JBRk0sRUFBRUssS0FBSSxFQUFFQyxHQUFFLEVBQUVDLFVBQVMsRUFBRUMsV0FBVSxFQUFFOzJCQUV6Qyw4REFBQ047OzBDQUNHLDhEQUFDTztnQ0FBSUMsS0FBSTtnQ0FBbUJDLEtBQUk7Z0NBQUdSLFdBQVU7Ozs7OzswQ0FDN0MsOERBQUNTOzBDQUFHOzs7Ozs7MENBQVksOERBQUNDOztvQ0FBR1I7b0NBQUs7b0NBQUlDOzs7Ozs7Ozt1QkFGdkJBOzs7OztnQkFHTDs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakQsQ0FBQztBQWdCRCxNQUFNUSxZQUFVO0lBRVo7UUFBQ0MsUUFBTztJQUFlO0NBRTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb3llYy5qc3g/YjA3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7IGRhdGEgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHsgbmFtZSwgaWQsIGZ1bGxfbmFtZSwgYXZhdGFyX3VybCB9LCBpbmRleCkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wb3J0YWZvbGlvNS5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cDM+Tm9tYnJlOjwvcDM+PHA+e25hbWV9IC0ge2lkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9XaWxsaWFtZmFsbGFzZy9yZXBvcycpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczogeyBkYXRhIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHByb3llY3Rvcz1bXHJcblxyXG4gICAge2F1dGhvcjoncG9yZm9saW8xLnBuZyd9XHJcbiAgICBcclxuXSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJpbmRleCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJuYW1lIiwiaWQiLCJmdWxsX25hbWUiLCJhdmF0YXJfdXJsIiwiaW1nIiwic3JjIiwiYWx0IiwicDMiLCJwIiwicHJveWVjdG9zIiwiYXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/proyec.jsx\n"));

/***/ })

});