"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/problems/[pid]",{

/***/ "./src/pages/problems/[pid].tsx":
/*!**************************************!*\
  !*** ./src/pages/problems/[pid].tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Topbar_Topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Topbar/Topbar */ \"./src/components/Topbar/Topbar.tsx\");\n/* harmony import */ var _components_Workspace_Workspace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Workspace/Workspace */ \"./src/components/Workspace/Workspace.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Define your problem page component\nconst ProblemPage = (param)=>{\n    let { problem } = param;\n    cons;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Topbar_Topbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                problem: problem\n            }, void 0, false, {\n                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/pages/problems/[pid].tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            problem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Workspace_Workspace__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                problem: problem\n            }, void 0, false, {\n                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/pages/problems/[pid].tsx\",\n                lineNumber: 13,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/pages/problems/[pid].tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProblemPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemPage);\nvar _c;\n$RefreshReg$(_c, \"ProblemPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvYmxlbXMvW3BpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1M7QUFFTjtBQUduRCxxQ0FBcUM7QUFDckMsTUFBTUcsY0FBYztRQUFDLEVBQUVDLE9BQU8sRUFBb0I7SUFDaERDO0lBQ0EscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ04saUVBQU1BO2dCQUFDSSxTQUFTQTs7Ozs7O1lBQ2hCQSx5QkFBVyw4REFBQ0gsdUVBQVNBO2dCQUFDRyxTQUFTQTs7Ozs7Ozs7Ozs7O0FBR3RDO0tBUk1EOztBQWdDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvYmxlbXMvW3BpZF0udHN4P2MyOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvcGJhciBmcm9tIFwiQC9jb21wb25lbnRzL1RvcGJhci9Ub3BiYXJcIjtcbmltcG9ydCBXb3Jrc3BhY2UgZnJvbSBcIkAvY29tcG9uZW50cy9Xb3Jrc3BhY2UvV29ya3NwYWNlXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jLCBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBEZWZpbmUgeW91ciBwcm9ibGVtIHBhZ2UgY29tcG9uZW50XG5jb25zdCBQcm9ibGVtUGFnZSA9ICh7IHByb2JsZW0gfTogeyBwcm9ibGVtOiBhbnkgfSkgPT4ge1xuICBjb25zXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUb3BiYXIgcHJvYmxlbT17cHJvYmxlbX0vPlxuICAgICAge3Byb2JsZW0gJiYgPFdvcmtzcGFjZSBwcm9ibGVtPXtwcm9ibGVtfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIFVzZSBnZXRTZXJ2ZXJTaWRlUHJvcHMgdG8gZmV0Y2ggZGF0YSBvbiBlYWNoIHJlcXVlc3RcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgcGlkIH0gPSBwYXJhbXM7IFxuXG4gIC8vIEluaXRpYWxpemUgRmlyZXN0b3JlXG4gIGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xuICBjb25zdCByZWYgPSBkb2MoZmlyZXN0b3JlLCBcInByb2JsZW1zXCIsIHBpZCk7XG4gIGNvbnN0IHNuYXAgPSBhd2FpdCBnZXREb2MocmVmKTtcblxuICBpZiAoc25hcC5leGlzdHMoKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9ibGVtOiBzbmFwLmRhdGEoKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgcHJvYmxlbSBkb2Vzbid0IGV4aXN0XG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvYmxlbVBhZ2U7XG4iXSwibmFtZXMiOlsiVG9wYmFyIiwiV29ya3NwYWNlIiwiUmVhY3QiLCJQcm9ibGVtUGFnZSIsInByb2JsZW0iLCJjb25zIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/problems/[pid].tsx\n"));

/***/ })

});