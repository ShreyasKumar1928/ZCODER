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

/***/ "./src/components/Topbar/Topbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Topbar/Topbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _Buttons_Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Buttons/Logout */ \"./src/components/Buttons/Logout.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_AuthModalAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/atoms/AuthModalAtom */ \"./src/atoms/AuthModalAtom.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!react-icons/fa */ \"__barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsList_react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=BsList!=!react-icons/bs */ \"__barrel_optimize__?names=BsList!=!./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var _Timer_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Timer/timer */ \"./src/components/Timer/timer.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_11__);\n// components/Topbar/Topbar.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Topbar = (param)=>{\n    let { problem } = param;\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const setAuthModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState)(_atoms_AuthModalAtom__WEBPACK_IMPORTED_MODULE_7__.authModalState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_11__.usePathname)();\n    const problemPage = pathname.startsWith(\"problems\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!loading && !user) {\n            console.error(\"User is not authenticated.\");\n        // Optionally handle the case where user is not authenticated\n        // Redirect or show appropriate message\n        }\n    }, [\n        user,\n        loading\n    ]);\n    const handleProblemChange = (isForward)=>{\n        const currentProblem = problem; // Assume `problem` is the current problem object\n        if (!currentProblem) {\n            return; // Exit if no current problem\n        }\n        const problemsArray = Object.values(problems); // Convert problems object to array\n        const currentOrder = problemsArray.findIndex((p)=>p.id === currentProblem.id);\n        const totalProblems = problemsArray.length;\n        // Calculate the next problem index\n        let nextProblemOrder = isForward ? currentOrder + 1 : currentOrder - 1;\n        // Handle wrapping\n        if (nextProblemOrder >= totalProblems) {\n            nextProblemOrder = 0; // Wrap to first problem\n        } else if (nextProblemOrder < 0) {\n            nextProblemOrder = totalProblems - 1; // Wrap to last problem\n        }\n        // Access the next problem directly\n        const nextProblem = problemsArray[nextProblemOrder];\n        if (nextProblem) {\n            router.push(\"/problems/\".concat(nextProblem.id)); // Navigate to the next problem\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full items-center justify-between \".concat(!problemPage ? \"max-w-[1200px] mx-auto\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"h-[22px] flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        src: \"/zcoder.png\",\n                        alt: \"Logo\",\n                        height: 100,\n                        width: 80\n                    }, void 0, false, {\n                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                problemPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4 flex-1 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer\",\n                            onClick: ()=>handleProblemChange(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaChevronLeft, {}, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsList_react_icons_bs__WEBPACK_IMPORTED_MODULE_13__.BsList, {}, void 0, false, {\n                                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Problem List\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer\",\n                            onClick: ()=>handleProblemChange(true),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4 flex-1 justify-end\",\n                    children: [\n                        !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/auth\",\n                            onClick: ()=>setAuthModalState((prev)=>({\n                                        ...prev,\n                                        isOpen: true,\n                                        type: \"login\"\n                                    })),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-dark-fill-3 py-1 px-2 cursor-pointer rounded \",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined),\n                        user && problemPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_timer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 35\n                        }, undefined),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    src: \"/avatar.png\",\n                                    alt: \"Avatar\",\n                                    width: 30,\n                                    height: 30,\n                                    className: \"rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg  z-40 group-hover:scale-100 scale-0  transition-all duration-300 ease-in-out\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, undefined),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 20\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Topbar, \"Jyc8Rphug4LN51L6poRS6MqrHX0=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState,\n        next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_11__.usePathname\n    ];\n});\n_c = Topbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\nvar _c;\n$RefreshReg$(_c, \"Topbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNL0Isa0JBQWtCLENBQUNnQyxPQUFVO3dDQUFFLEdBQUdBLElBQUk7d0NBQUVDLFFBQVE7d0NBQU1DLE1BQU07b0NBQVE7c0NBRW5GLDRFQUFDQztnQ0FBT1gsV0FBVTswQ0FBbUQ7Ozs7Ozs7Ozs7O3dCQUd4RTNCLFFBQVFRLDZCQUFlLDhEQUFDYixvREFBS0E7Ozs7O3dCQUM3Qkssc0JBQ0MsOERBQUM0Qjs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNwQyxtREFBS0E7b0NBQUN1QyxLQUFJO29DQUFjQyxLQUFJO29DQUFTRSxPQUFPO29DQUFJRCxRQUFRO29DQUFJTCxXQUFVOzs7Ozs7OENBQ3ZFLDhEQUFDQztvQ0FDQ0QsV0FBVTs4Q0FJViw0RUFBQ1I7d0NBQUVRLFdBQVU7a0RBQVczQixLQUFLdUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSXZDdkMsc0JBQVEsOERBQUNaLHVEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQTlHTVU7O1FBRTJCWCxtRUFBWUE7UUFDakJFLHFEQUFpQkE7UUFDNUJPLG1EQUFTQTtRQUVUQyx5REFBV0E7OztLQU50QkM7QUFnSE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wYmFyL1RvcGJhci50c3g/YTcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNvbXBvbmVudHMvVG9wYmFyL1RvcGJhci50c3hcblxuaW1wb3J0IHsgYXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIkAvZmlyZWJhc2UvZmlyZWJhc2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IExvZ291dCBmcm9tIFwiLi4vQnV0dG9ucy9Mb2dvdXRcIjtcbmltcG9ydCB7IHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgYXV0aE1vZGFsU3RhdGUgfSBmcm9tIFwiQC9hdG9tcy9BdXRoTW9kYWxBdG9tXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZhQ2hldnJvbkxlZnQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBCc0xpc3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi4vVGltZXIvdGltZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZmV0Y2hQdWJsaWNQcm9ibGVtcywgZmV0Y2hQcml2YXRlUHJvYmxlbXMgfSBmcm9tIFwiQC91dGlscy9wcm9ibGVtc1wiOyAvLyBVcGRhdGVkIGltcG9ydFxuaW1wb3J0IHsgREJQcm9ibGVtIH0gZnJvbSBcIkAvdXRpbHMvdHlwZXMvcHJvYmxlbVwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbnR5cGUgVG9wYmFyUHJvcHMgPSB7XG4gIHByb2JsZW06IERCUHJvYmxlbTtcbn07XG5cbmNvbnN0IFRvcGJhcjogUmVhY3QuRkM8VG9wYmFyUHJvcHM+ID0gKHsgcHJvYmxlbSB9KSA9PiB7XG4gIFxuICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICBjb25zdCBzZXRBdXRoTW9kYWxTdGF0ZSA9IHVzZVNldFJlY29pbFN0YXRlKGF1dGhNb2RhbFN0YXRlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtwcm9ibGVtcywgc2V0UHJvYmxlbXNdID0gdXNlU3RhdGU8REJQcm9ibGVtW10+KFtdKTtcbiAgY29uc3QgcGF0aG5hbWU9dXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgcHJvYmxlbVBhZ2U9cGF0aG5hbWUuc3RhcnRzV2l0aChgcHJvYmxlbXNgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvYWRpbmcgJiYgIXVzZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkLlwiKTtcbiAgICAgIC8vIE9wdGlvbmFsbHkgaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcbiAgICAgIC8vIFJlZGlyZWN0IG9yIHNob3cgYXBwcm9wcmlhdGUgbWVzc2FnZVxuICAgIH1cbiAgfSwgW3VzZXIsIGxvYWRpbmddKTtcblxuXG4gIGNvbnN0IGhhbmRsZVByb2JsZW1DaGFuZ2UgPSAoaXNGb3J3YXJkOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2JsZW0gPSBwcm9ibGVtOyAvLyBBc3N1bWUgYHByb2JsZW1gIGlzIHRoZSBjdXJyZW50IHByb2JsZW0gb2JqZWN0XG4gIFxuICAgIGlmICghY3VycmVudFByb2JsZW0pIHtcbiAgICAgIHJldHVybjsgLy8gRXhpdCBpZiBubyBjdXJyZW50IHByb2JsZW1cbiAgICB9XG4gIFxuICAgIGNvbnN0IHByb2JsZW1zQXJyYXkgPSBPYmplY3QudmFsdWVzKHByb2JsZW1zKTsgLy8gQ29udmVydCBwcm9ibGVtcyBvYmplY3QgdG8gYXJyYXlcbiAgICBjb25zdCBjdXJyZW50T3JkZXIgPSBwcm9ibGVtc0FycmF5LmZpbmRJbmRleCgocCkgPT4gcC5pZCA9PT0gY3VycmVudFByb2JsZW0uaWQpO1xuICBcbiAgXG4gICAgY29uc3QgdG90YWxQcm9ibGVtcyA9IHByb2JsZW1zQXJyYXkubGVuZ3RoO1xuICBcbiAgICAvLyBDYWxjdWxhdGUgdGhlIG5leHQgcHJvYmxlbSBpbmRleFxuICAgIGxldCBuZXh0UHJvYmxlbU9yZGVyID0gaXNGb3J3YXJkID8gY3VycmVudE9yZGVyICsgMSA6IGN1cnJlbnRPcmRlciAtIDE7XG4gIFxuICAgIC8vIEhhbmRsZSB3cmFwcGluZ1xuICAgIGlmIChuZXh0UHJvYmxlbU9yZGVyID49IHRvdGFsUHJvYmxlbXMpIHtcbiAgICAgIG5leHRQcm9ibGVtT3JkZXIgPSAwOyAvLyBXcmFwIHRvIGZpcnN0IHByb2JsZW1cbiAgICB9IGVsc2UgaWYgKG5leHRQcm9ibGVtT3JkZXIgPCAwKSB7XG4gICAgICBuZXh0UHJvYmxlbU9yZGVyID0gdG90YWxQcm9ibGVtcyAtIDE7IC8vIFdyYXAgdG8gbGFzdCBwcm9ibGVtXG4gICAgfVxuICBcbiAgICAvLyBBY2Nlc3MgdGhlIG5leHQgcHJvYmxlbSBkaXJlY3RseVxuICAgIGNvbnN0IG5leHRQcm9ibGVtID0gcHJvYmxlbXNBcnJheVtuZXh0UHJvYmxlbU9yZGVyXTtcbiAgXG4gICAgaWYgKG5leHRQcm9ibGVtKSB7XG4gICAgICByb3V0ZXIucHVzaChgL3Byb2JsZW1zLyR7bmV4dFByb2JsZW0uaWR9YCk7IC8vIE5hdmlnYXRlIHRvIHRoZSBuZXh0IHByb2JsZW1cbiAgICB9XG4gIH07XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggaC1bNTBweF0gdy1mdWxsIHNocmluay0wIGl0ZW1zLWNlbnRlciBweC01IGJnLWRhcmstbGF5ZXItMSB0ZXh0LWRhcmstZ3JheS03Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiAkeyFwcm9ibGVtUGFnZSA/IFwibWF4LXctWzEyMDBweF0gbXgtYXV0b1wiIDogXCJcIn1gfT5cbiAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSdoLVsyMnB4XSBmbGV4LTEnPlxuICAgICAgICAgIDxJbWFnZSBzcmM9Jy96Y29kZXIucG5nJyBhbHQ9J0xvZ28nIGhlaWdodD17MTAwfSB3aWR0aD17ODB9IC8+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICB7cHJvYmxlbVBhZ2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBmbGV4LTEganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctZGFyay1maWxsLTMgaG92ZXI6YmctZGFyay1maWxsLTIgaC04IHctOCBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvYmxlbUNoYW5nZShmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUNoZXZyb25MZWZ0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1tZWRpdW0gbWF4LXctWzE3MHB4XSB0ZXh0LWRhcmstZ3JheS04IGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCc0xpc3QgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwPlByb2JsZW0gTGlzdDwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLWRhcmstZmlsbC0zIGhvdmVyOmJnLWRhcmstZmlsbC0yIGgtOCB3LTggY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2JsZW1DaGFuZ2UodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBmbGV4LTEganVzdGlmeS1lbmQnPlxuICAgICAgICAgIFxuICAgICAgICAgIHshdXNlciAmJiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPScvYXV0aCdcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QXV0aE1vZGFsU3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIGlzT3BlbjogdHJ1ZSwgdHlwZTogXCJsb2dpblwiIH0pKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWRhcmstZmlsbC0zIHB5LTEgcHgtMiBjdXJzb3ItcG9pbnRlciByb3VuZGVkICc+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3VzZXIgJiYgcHJvYmxlbVBhZ2UgJiYgPFRpbWVyIC8+fVxuICAgICAgICAgIHt1c2VyICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBncm91cCByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9hdmF0YXIucG5nJyBhbHQ9J0F2YXRhcicgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCcgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTEwIGxlZnQtMi80IC10cmFuc2xhdGUteC0yLzQgIG14LWF1dG8gYmctZGFyay1sYXllci0xIHRleHQtYnJhbmQtb3JhbmdlIHAtMiByb3VuZGVkIHNoYWRvdy1sZyBcbiAgICAgICAgICAgICAgICB6LTQwIGdyb3VwLWhvdmVyOnNjYWxlLTEwMCBzY2FsZS0wIFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSc+e3VzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3VzZXIgJiYgPExvZ291dCAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGJhcjtcbiJdLCJuYW1lcyI6WyJhdXRoIiwiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoU3RhdGUiLCJMb2dvdXQiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsImF1dGhNb2RhbFN0YXRlIiwiSW1hZ2UiLCJGYUNoZXZyb25MZWZ0IiwiRmFDaGV2cm9uUmlnaHQiLCJCc0xpc3QiLCJUaW1lciIsInVzZVJvdXRlciIsInVzZVBhdGhuYW1lIiwiVG9wYmFyIiwicHJvYmxlbSIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzZXRBdXRoTW9kYWxTdGF0ZSIsInJvdXRlciIsInByb2JsZW1zIiwic2V0UHJvYmxlbXMiLCJwYXRobmFtZSIsInByb2JsZW1QYWdlIiwic3RhcnRzV2l0aCIsImNvbnNvbGUiLCJoYW5kbGVQcm9ibGVtQ2hhbmdlIiwiaXNGb3J3YXJkIiwiY3VycmVudFByb2JsZW0iLCJwcm9ibGVtc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiY3VycmVudE9yZGVyIiwiZmluZEluZGV4IiwicCIsImlkIiwidG90YWxQcm9ibGVtcyIsImxlbmd0aCIsIm5leHRQcm9ibGVtT3JkZXIiLCJuZXh0UHJvYmxlbSIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwicHJldiIsImlzT3BlbiIsInR5cGUiLCJidXR0b24iLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Topbar/Topbar.tsx\n"));

/***/ })

});