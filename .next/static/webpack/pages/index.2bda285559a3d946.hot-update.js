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

/***/ "./src/components/Topbar/Topbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Topbar/Topbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _Buttons_Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Buttons/Logout */ \"./src/components/Buttons/Logout.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_AuthModalAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/atoms/AuthModalAtom */ \"./src/atoms/AuthModalAtom.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!react-icons/fa */ \"__barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsList_react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=BsList!=!react-icons/bs */ \"__barrel_optimize__?names=BsList!=!./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var _Timer_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Timer/timer */ \"./src/components/Timer/timer.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_11__);\n// components/Topbar/Topbar.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Topbar = (param)=>{\n    let { problem } = param;\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const setAuthModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState)(_atoms_AuthModalAtom__WEBPACK_IMPORTED_MODULE_7__.authModalState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_11__.usePathname)();\n    const problemPage = pathname.startsWith(\"/problems\");\n    console.l;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!loading && !user) {\n            console.error(\"User is not authenticated.\");\n        // Optionally handle the case where user is not authenticated\n        // Redirect or show appropriate message\n        }\n    }, [\n        user,\n        loading\n    ]);\n    const handleProblemChange = (isForward)=>{\n        const currentProblem = problem; // Assume `problem` is the current problem object\n        if (!currentProblem) {\n            return; // Exit if no current problem\n        }\n        const problemsArray = Object.values(problems); // Convert problems object to array\n        const currentOrder = problemsArray.findIndex((p)=>p.id === currentProblem.id);\n        const totalProblems = problemsArray.length;\n        // Calculate the next problem index\n        let nextProblemOrder = isForward ? currentOrder + 1 : currentOrder - 1;\n        // Handle wrapping\n        if (nextProblemOrder >= totalProblems) {\n            nextProblemOrder = 0; // Wrap to first problem\n        } else if (nextProblemOrder < 0) {\n            nextProblemOrder = totalProblems - 1; // Wrap to last problem\n        }\n        // Access the next problem directly\n        const nextProblem = problemsArray[nextProblemOrder];\n        if (nextProblem) {\n            router.push(\"/problems/\".concat(nextProblem.id)); // Navigate to the next problem\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full items-center justify-between \".concat(!problemPage ? \"max-w-[1200px] mx-auto\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"h-[22px] flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        src: \"/zcoder.png\",\n                        alt: \"Logo\",\n                        height: 100,\n                        width: 80\n                    }, void 0, false, {\n                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                problemPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4 flex-1 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer\",\n                            onClick: ()=>handleProblemChange(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaChevronLeft, {}, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsList_react_icons_bs__WEBPACK_IMPORTED_MODULE_13__.BsList, {}, void 0, false, {\n                                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Problem List\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer\",\n                            onClick: ()=>handleProblemChange(true),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4 flex-1 justify-end\",\n                    children: [\n                        !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/auth\",\n                            onClick: ()=>setAuthModalState((prev)=>({\n                                        ...prev,\n                                        isOpen: true,\n                                        type: \"login\"\n                                    })),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-dark-fill-3 py-1 px-2 cursor-pointer rounded \",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined),\n                        user && problemPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_timer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 35\n                        }, undefined),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    src: \"/avatar.png\",\n                                    alt: \"Avatar\",\n                                    width: 30,\n                                    height: 30,\n                                    className: \"rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg  z-40 group-hover:scale-100 scale-0  transition-all duration-300 ease-in-out\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 20\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Topbar, \"Jyc8Rphug4LN51L6poRS6MqrHX0=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState,\n        next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_11__.usePathname\n    ];\n});\n_c = Topbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\nvar _c;\n$RefreshReg$(_c, \"Topbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLOzRCQUNMSyxTQUFTLElBQU1oQyxrQkFBa0IsQ0FBQ2lDLE9BQVU7d0NBQUUsR0FBR0EsSUFBSTt3Q0FBRUMsUUFBUTt3Q0FBTUMsTUFBTTtvQ0FBUTtzQ0FFbkYsNEVBQUNDO2dDQUFPWCxXQUFVOzBDQUFtRDs7Ozs7Ozs7Ozs7d0JBR3hFNUIsUUFBUVEsNkJBQWUsOERBQUNiLG9EQUFLQTs7Ozs7d0JBQzdCSyxzQkFDQyw4REFBQzZCOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ3JDLG1EQUFLQTtvQ0FBQ3dDLEtBQUk7b0NBQWNDLEtBQUk7b0NBQVNFLE9BQU87b0NBQUlELFFBQVE7b0NBQUlMLFdBQVU7Ozs7Ozs4Q0FDdkUsOERBQUNDO29DQUNDRCxXQUFVOzhDQUlWLDRFQUFDUjt3Q0FBRVEsV0FBVTtrREFBVzVCLEtBQUt3QyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFJdkN4QyxzQkFBUSw4REFBQ1osdURBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCO0dBL0dNVTs7UUFFMkJYLG1FQUFZQTtRQUNqQkUscURBQWlCQTtRQUM1Qk8sbURBQVNBO1FBRVRDLHlEQUFXQTs7O0tBTnRCQztBQWlITiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub3BiYXIvVG9wYmFyLnRzeD9hNzFmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gY29tcG9uZW50cy9Ub3BiYXIvVG9wYmFyLnRzeFxuXG5pbXBvcnQgeyBhdXRoLCBmaXJlc3RvcmUgfSBmcm9tIFwiQC9maXJlYmFzZS9maXJlYmFzZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgTG9nb3V0IGZyb20gXCIuLi9CdXR0b25zL0xvZ291dFwiO1xuaW1wb3J0IHsgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBhdXRoTW9kYWxTdGF0ZSB9IGZyb20gXCJAL2F0b21zL0F1dGhNb2RhbEF0b21cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgRmFDaGV2cm9uTGVmdCwgRmFDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEJzTGlzdCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuLi9UaW1lci90aW1lclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBmZXRjaFB1YmxpY1Byb2JsZW1zLCBmZXRjaFByaXZhdGVQcm9ibGVtcyB9IGZyb20gXCJAL3V0aWxzL3Byb2JsZW1zXCI7IC8vIFVwZGF0ZWQgaW1wb3J0XG5pbXBvcnQgeyBEQlByb2JsZW0gfSBmcm9tIFwiQC91dGlscy90eXBlcy9wcm9ibGVtXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxudHlwZSBUb3BiYXJQcm9wcyA9IHtcbiAgcHJvYmxlbTogREJQcm9ibGVtO1xufTtcblxuY29uc3QgVG9wYmFyOiBSZWFjdC5GQzxUb3BiYXJQcm9wcz4gPSAoeyBwcm9ibGVtIH0pID0+IHtcbiAgXG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nLCBlcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIGNvbnN0IHNldEF1dGhNb2RhbFN0YXRlID0gdXNlU2V0UmVjb2lsU3RhdGUoYXV0aE1vZGFsU3RhdGUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Byb2JsZW1zLCBzZXRQcm9ibGVtc10gPSB1c2VTdGF0ZTxEQlByb2JsZW1bXT4oW10pO1xuICBjb25zdCBwYXRobmFtZT11c2VQYXRobmFtZSgpO1xuICBjb25zdCBwcm9ibGVtUGFnZT1wYXRobmFtZS5zdGFydHNXaXRoKGAvcHJvYmxlbXNgKTtcbiAgY29uc29sZS5sXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2FkaW5nICYmICF1c2VyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVXNlciBpcyBub3QgYXV0aGVudGljYXRlZC5cIik7XG4gICAgICAvLyBPcHRpb25hbGx5IGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkXG4gICAgICAvLyBSZWRpcmVjdCBvciBzaG93IGFwcHJvcHJpYXRlIG1lc3NhZ2VcbiAgICB9XG4gIH0sIFt1c2VyLCBsb2FkaW5nXSk7XG5cblxuICBjb25zdCBoYW5kbGVQcm9ibGVtQ2hhbmdlID0gKGlzRm9yd2FyZDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9ibGVtID0gcHJvYmxlbTsgLy8gQXNzdW1lIGBwcm9ibGVtYCBpcyB0aGUgY3VycmVudCBwcm9ibGVtIG9iamVjdFxuICBcbiAgICBpZiAoIWN1cnJlbnRQcm9ibGVtKSB7XG4gICAgICByZXR1cm47IC8vIEV4aXQgaWYgbm8gY3VycmVudCBwcm9ibGVtXG4gICAgfVxuICBcbiAgICBjb25zdCBwcm9ibGVtc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhwcm9ibGVtcyk7IC8vIENvbnZlcnQgcHJvYmxlbXMgb2JqZWN0IHRvIGFycmF5XG4gICAgY29uc3QgY3VycmVudE9yZGVyID0gcHJvYmxlbXNBcnJheS5maW5kSW5kZXgoKHApID0+IHAuaWQgPT09IGN1cnJlbnRQcm9ibGVtLmlkKTtcbiAgXG4gIFxuICAgIGNvbnN0IHRvdGFsUHJvYmxlbXMgPSBwcm9ibGVtc0FycmF5Lmxlbmd0aDtcbiAgXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXh0IHByb2JsZW0gaW5kZXhcbiAgICBsZXQgbmV4dFByb2JsZW1PcmRlciA9IGlzRm9yd2FyZCA/IGN1cnJlbnRPcmRlciArIDEgOiBjdXJyZW50T3JkZXIgLSAxO1xuICBcbiAgICAvLyBIYW5kbGUgd3JhcHBpbmdcbiAgICBpZiAobmV4dFByb2JsZW1PcmRlciA+PSB0b3RhbFByb2JsZW1zKSB7XG4gICAgICBuZXh0UHJvYmxlbU9yZGVyID0gMDsgLy8gV3JhcCB0byBmaXJzdCBwcm9ibGVtXG4gICAgfSBlbHNlIGlmIChuZXh0UHJvYmxlbU9yZGVyIDwgMCkge1xuICAgICAgbmV4dFByb2JsZW1PcmRlciA9IHRvdGFsUHJvYmxlbXMgLSAxOyAvLyBXcmFwIHRvIGxhc3QgcHJvYmxlbVxuICAgIH1cbiAgXG4gICAgLy8gQWNjZXNzIHRoZSBuZXh0IHByb2JsZW0gZGlyZWN0bHlcbiAgICBjb25zdCBuZXh0UHJvYmxlbSA9IHByb2JsZW1zQXJyYXlbbmV4dFByb2JsZW1PcmRlcl07XG4gIFxuICAgIGlmIChuZXh0UHJvYmxlbSkge1xuICAgICAgcm91dGVyLnB1c2goYC9wcm9ibGVtcy8ke25leHRQcm9ibGVtLmlkfWApOyAvLyBOYXZpZ2F0ZSB0byB0aGUgbmV4dCBwcm9ibGVtXG4gICAgfVxuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGgtWzUwcHhdIHctZnVsbCBzaHJpbmstMCBpdGVtcy1jZW50ZXIgcHgtNSBiZy1kYXJrLWxheWVyLTEgdGV4dC1kYXJrLWdyYXktNyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJHshcHJvYmxlbVBhZ2UgPyBcIm1heC13LVsxMjAwcHhdIG14LWF1dG9cIiA6IFwiXCJ9YH0+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT0naC1bMjJweF0gZmxleC0xJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvemNvZGVyLnBuZycgYWx0PSdMb2dvJyBoZWlnaHQ9ezEwMH0gd2lkdGg9ezgwfSAvPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAge3Byb2JsZW1QYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgZmxleC0xIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLWRhcmstZmlsbC0zIGhvdmVyOmJnLWRhcmstZmlsbC0yIGgtOCB3LTggY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2JsZW1DaGFuZ2UoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFDaGV2cm9uTGVmdCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPScvJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbWVkaXVtIG1heC13LVsxNzBweF0gdGV4dC1kYXJrLWdyYXktOCBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnNMaXN0IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5Qcm9ibGVtIExpc3Q8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBiZy1kYXJrLWZpbGwtMyBob3ZlcjpiZy1kYXJrLWZpbGwtMiBoLTggdy04IGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9ibGVtQ2hhbmdlKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgZmxleC0xIGp1c3RpZnktZW5kJz5cbiAgICAgICAgICBcbiAgICAgICAgICB7IXVzZXIgJiYgKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj0nL2F1dGgnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEF1dGhNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBpc09wZW46IHRydWUsIHR5cGU6IFwibG9naW5cIiB9KSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1kYXJrLWZpbGwtMyBweS0xIHB4LTIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZCAnPlNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyICYmIHByb2JsZW1QYWdlICYmIDxUaW1lciAvPn1cbiAgICAgICAgICB7dXNlciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgZ3JvdXAgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvYXZhdGFyLnBuZycgYWx0PSdBdmF0YXInIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0xMCBsZWZ0LTIvNCAtdHJhbnNsYXRlLXgtMi80ICBteC1hdXRvIGJnLWRhcmstbGF5ZXItMSB0ZXh0LWJyYW5kLW9yYW5nZSBwLTIgcm91bmRlZCBzaGFkb3ctbGcgXG4gICAgICAgICAgICAgICAgei00MCBncm91cC1ob3ZlcjpzY2FsZS0xMDAgc2NhbGUtMCBcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20nPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyICYmIDxMb2dvdXQgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BiYXI7XG4iXSwibmFtZXMiOlsiYXV0aCIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aFN0YXRlIiwiTG9nb3V0IiwidXNlU2V0UmVjb2lsU3RhdGUiLCJhdXRoTW9kYWxTdGF0ZSIsIkltYWdlIiwiRmFDaGV2cm9uTGVmdCIsIkZhQ2hldnJvblJpZ2h0IiwiQnNMaXN0IiwiVGltZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VQYXRobmFtZSIsIlRvcGJhciIsInByb2JsZW0iLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwic2V0QXV0aE1vZGFsU3RhdGUiLCJyb3V0ZXIiLCJwcm9ibGVtcyIsInNldFByb2JsZW1zIiwicGF0aG5hbWUiLCJwcm9ibGVtUGFnZSIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwibCIsImhhbmRsZVByb2JsZW1DaGFuZ2UiLCJpc0ZvcndhcmQiLCJjdXJyZW50UHJvYmxlbSIsInByb2JsZW1zQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjdXJyZW50T3JkZXIiLCJmaW5kSW5kZXgiLCJwIiwiaWQiLCJ0b3RhbFByb2JsZW1zIiwibGVuZ3RoIiwibmV4dFByb2JsZW1PcmRlciIsIm5leHRQcm9ibGVtIiwicHVzaCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uQ2xpY2siLCJwcmV2IiwiaXNPcGVuIiwidHlwZSIsImJ1dHRvbiIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Topbar/Topbar.tsx\n"));

/***/ })

});