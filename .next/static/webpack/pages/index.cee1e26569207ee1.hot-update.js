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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _Buttons_Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Buttons/Logout */ \"./src/components/Buttons/Logout.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_AuthModalAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/atoms/AuthModalAtom */ \"./src/atoms/AuthModalAtom.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!react-icons/fa */ \"__barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsList_react_icons_bs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=BsList!=!react-icons/bs */ \"__barrel_optimize__?names=BsList!=!./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var _Timer_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Timer/timer */ \"./src/components/Timer/timer.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _utils_problems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/problems */ \"./src/utils/problems/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_12__);\n// components/Topbar/Topbar.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n // Updated import\n\nconst Topbar = (param)=>{\n    let { problem } = param;\n    _s();\n    const [user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const setAuthModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState)(_atoms_AuthModalAtom__WEBPACK_IMPORTED_MODULE_7__.authModalState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_12__.usePathname)();\n    const problemPage = pathname.startsWith(\"problems\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!loading && !user) {\n            console.error(\"User is not authenticated.\");\n        // Optionally handle the case where user is not authenticated\n        // Redirect or show appropriate message\n        }\n    }, [\n        user,\n        loading\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const loadProblems = async ()=>{\n            try {\n                const fetchedPublicProblems = await (0,_utils_problems__WEBPACK_IMPORTED_MODULE_11__.fetchPublicProblems)(); // Fetch public problems\n                const currentUser = _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth.currentUser;\n                if (currentUser) {\n                    const userId = currentUser.uid;\n                    const fetchedPrivateProblems = await (0,_utils_problems__WEBPACK_IMPORTED_MODULE_11__.fetchPrivateProblems)(userId); // Fetch private problems\n                    // Merge public and private problems into one object\n                    const allProblems = {\n                        ...fetchedPublicProblems,\n                        ...fetchedPrivateProblems\n                    };\n                    setProblems(allProblems);\n                } else {\n                    console.error(\"User is not authenticated.\");\n                }\n            } catch (error) {\n                console.error(\"Error loading problems:\", error);\n            }\n        };\n        loadProblems();\n    }, []);\n    const handleProblemChange = (isForward)=>{\n        const currentProblem = problem;\n        if (!currentProblem) {\n            return;\n        }\n        const currentOrder = problems.findIndex((problem)=>problem.id === currentProblem.id);\n        const problemsArray = Object.values(problems);\n        const totalProblems = problemsArray.length;\n        let nextProblemOrder = isForward ? currentOrder + 1 : currentOrder - 1;\n        if (nextProblemOrder > totalProblems - 1) {\n            nextProblemOrder = 1;\n        } else if (nextProblemOrder < 0) {\n            nextProblemOrder = totalProblems;\n        }\n        const nextProblem = problemsArray.find((problem)=>problem.order === nextProblemOrder);\n        if (nextProblem) {\n            router.push(\"/problems/\".concat(nextProblem.id));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full items-center justify-between \".concat(!problemPage ? \"max-w-[1200px] mx-auto\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"h-[22px] flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        src: \"/zcoder.png\",\n                        alt: \"Logo\",\n                        height: 100,\n                        width: 80\n                    }, void 0, false, {\n                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                problemPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-4 flex-1 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer\",\n                            onClick: ()=>handleProblemChange(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaChevronLeft, {}, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsList_react_icons_bs__WEBPACK_IMPORTED_MODULE_14__.BsList, {}, void 0, false, {\n                                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Problem List\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer\",\n                            onClick: ()=>handleProblemChange(true),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4 flex-1 justify-end\",\n                    children: [\n                        !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/auth\",\n                            onClick: ()=>setAuthModalState((prev)=>({\n                                        ...prev,\n                                        isOpen: true,\n                                        type: \"login\"\n                                    })),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-dark-fill-3 py-1 px-2 cursor-pointer rounded \",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined),\n                        user && problemPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timer_timer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 35\n                        }, undefined),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    src: \"/avatar.png\",\n                                    alt: \"Avatar\",\n                                    width: 30,\n                                    height: 30,\n                                    className: \"rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg  z-40 group-hover:scale-100 scale-0  transition-all duration-300 ease-in-out\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 13\n                        }, undefined),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 20\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shreyaskumar/Desktop/ZCODER 3 copy/project/src/components/Topbar/Topbar.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Topbar, \"y6anXO4RkU3MWhCaYqxRmyctGCI=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState,\n        next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_12__.usePathname\n    ];\n});\n_c = Topbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\nvar _c;\n$RefreshReg$(_c, \"Topbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9wYmFyL1RvcGJhci50c3g/YTcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNvbXBvbmVudHMvVG9wYmFyL1RvcGJhci50c3hcblxuaW1wb3J0IHsgYXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIkAvZmlyZWJhc2UvZmlyZWJhc2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IExvZ291dCBmcm9tIFwiLi4vQnV0dG9ucy9Mb2dvdXRcIjtcbmltcG9ydCB7IHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgYXV0aE1vZGFsU3RhdGUgfSBmcm9tIFwiQC9hdG9tcy9BdXRoTW9kYWxBdG9tXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZhQ2hldnJvbkxlZnQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBCc0xpc3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi4vVGltZXIvdGltZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZmV0Y2hQdWJsaWNQcm9ibGVtcywgZmV0Y2hQcml2YXRlUHJvYmxlbXMgfSBmcm9tIFwiQC91dGlscy9wcm9ibGVtc1wiOyAvLyBVcGRhdGVkIGltcG9ydFxuaW1wb3J0IHsgREJQcm9ibGVtIH0gZnJvbSBcIkAvdXRpbHMvdHlwZXMvcHJvYmxlbVwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbnR5cGUgVG9wYmFyUHJvcHMgPSB7XG4gIHByb2JsZW06IERCUHJvYmxlbTtcbn07XG5cbmNvbnN0IFRvcGJhcjogUmVhY3QuRkM8VG9wYmFyUHJvcHM+ID0gKHsgcHJvYmxlbSB9KSA9PiB7XG4gIFxuICBjb25zdCBbdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICBjb25zdCBzZXRBdXRoTW9kYWxTdGF0ZSA9IHVzZVNldFJlY29pbFN0YXRlKGF1dGhNb2RhbFN0YXRlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtwcm9ibGVtcywgc2V0UHJvYmxlbXNdID0gdXNlU3RhdGU8REJQcm9ibGVtW10+KFtdKTtcbiAgY29uc3QgcGF0aG5hbWU9dXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgcHJvYmxlbVBhZ2U9cGF0aG5hbWUuc3RhcnRzV2l0aChgcHJvYmxlbXNgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvYWRpbmcgJiYgIXVzZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkLlwiKTtcbiAgICAgIC8vIE9wdGlvbmFsbHkgaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcbiAgICAgIC8vIFJlZGlyZWN0IG9yIHNob3cgYXBwcm9wcmlhdGUgbWVzc2FnZVxuICAgIH1cbiAgfSwgW3VzZXIsIGxvYWRpbmddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRQcm9ibGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZldGNoZWRQdWJsaWNQcm9ibGVtcyA9IGF3YWl0IGZldGNoUHVibGljUHJvYmxlbXMoKTsgLy8gRmV0Y2ggcHVibGljIHByb2JsZW1zXG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xuICAgICAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgICAgICBjb25zdCB1c2VySWQgPSBjdXJyZW50VXNlci51aWQ7XG4gICAgICAgICAgY29uc3QgZmV0Y2hlZFByaXZhdGVQcm9ibGVtcyA9IGF3YWl0IGZldGNoUHJpdmF0ZVByb2JsZW1zKHVzZXJJZCk7IC8vIEZldGNoIHByaXZhdGUgcHJvYmxlbXNcblxuICAgICAgICAgIC8vIE1lcmdlIHB1YmxpYyBhbmQgcHJpdmF0ZSBwcm9ibGVtcyBpbnRvIG9uZSBvYmplY3RcbiAgICAgICAgICBjb25zdCBhbGxQcm9ibGVtcyA9IHsgLi4uZmV0Y2hlZFB1YmxpY1Byb2JsZW1zLCAuLi5mZXRjaGVkUHJpdmF0ZVByb2JsZW1zIH07XG4gICAgICAgICAgc2V0UHJvYmxlbXMoYWxsUHJvYmxlbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgcHJvYmxlbXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZFByb2JsZW1zKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVQcm9ibGVtQ2hhbmdlID0gKGlzRm9yd2FyZDogYm9vbGVhbikgPT4ge1xuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRQcm9ibGVtID0gcHJvYmxlbTtcblxuICAgIGlmICghY3VycmVudFByb2JsZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50T3JkZXIgPSBwcm9ibGVtcy5maW5kSW5kZXgoKHByb2JsZW0pPT5wcm9ibGVtLmlkPT09Y3VycmVudFByb2JsZW0uaWQpO1xuICAgIGNvbnN0IHByb2JsZW1zQXJyYXkgPSBPYmplY3QudmFsdWVzKHByb2JsZW1zKTtcbiAgICBjb25zdCB0b3RhbFByb2JsZW1zID0gcHJvYmxlbXNBcnJheS5sZW5ndGg7XG5cbiAgICBsZXQgbmV4dFByb2JsZW1PcmRlciA9IGlzRm9yd2FyZCA/IGN1cnJlbnRPcmRlciArIDEgOiBjdXJyZW50T3JkZXIgLSAxO1xuXG4gICAgaWYgKG5leHRQcm9ibGVtT3JkZXIgPiB0b3RhbFByb2JsZW1zLTEpIHtcbiAgICAgIG5leHRQcm9ibGVtT3JkZXIgPSAxO1xuICAgIH0gZWxzZSBpZiAobmV4dFByb2JsZW1PcmRlciA8IDApIHtcbiAgICAgIG5leHRQcm9ibGVtT3JkZXIgPSB0b3RhbFByb2JsZW1zO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRQcm9ibGVtID0gcHJvYmxlbXNBcnJheS5maW5kKChwcm9ibGVtKSA9PiBwcm9ibGVtLm9yZGVyID09PSBuZXh0UHJvYmxlbU9yZGVyKTtcblxuICAgIGlmIChuZXh0UHJvYmxlbSkge1xuICAgICAgcm91dGVyLnB1c2goYC9wcm9ibGVtcy8ke25leHRQcm9ibGVtLmlkfWApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGgtWzUwcHhdIHctZnVsbCBzaHJpbmstMCBpdGVtcy1jZW50ZXIgcHgtNSBiZy1kYXJrLWxheWVyLTEgdGV4dC1kYXJrLWdyYXktNyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJHshcHJvYmxlbVBhZ2UgPyBcIm1heC13LVsxMjAwcHhdIG14LWF1dG9cIiA6IFwiXCJ9YH0+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT0naC1bMjJweF0gZmxleC0xJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvemNvZGVyLnBuZycgYWx0PSdMb2dvJyBoZWlnaHQ9ezEwMH0gd2lkdGg9ezgwfSAvPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAge3Byb2JsZW1QYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgZmxleC0xIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLWRhcmstZmlsbC0zIGhvdmVyOmJnLWRhcmstZmlsbC0yIGgtOCB3LTggY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2JsZW1DaGFuZ2UoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFDaGV2cm9uTGVmdCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPScvJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbWVkaXVtIG1heC13LVsxNzBweF0gdGV4dC1kYXJrLWdyYXktOCBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnNMaXN0IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cD5Qcm9ibGVtIExpc3Q8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBiZy1kYXJrLWZpbGwtMyBob3ZlcjpiZy1kYXJrLWZpbGwtMiBoLTggdy04IGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9ibGVtQ2hhbmdlKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgZmxleC0xIGp1c3RpZnktZW5kJz5cbiAgICAgICAgICBcbiAgICAgICAgICB7IXVzZXIgJiYgKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj0nL2F1dGgnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEF1dGhNb2RhbFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBpc09wZW46IHRydWUsIHR5cGU6IFwibG9naW5cIiB9KSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1kYXJrLWZpbGwtMyBweS0xIHB4LTIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZCAnPlNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyICYmIHByb2JsZW1QYWdlICYmIDxUaW1lciAvPn1cbiAgICAgICAgICB7dXNlciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgZ3JvdXAgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvYXZhdGFyLnBuZycgYWx0PSdBdmF0YXInIHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0xMCBsZWZ0LTIvNCAtdHJhbnNsYXRlLXgtMi80ICBteC1hdXRvIGJnLWRhcmstbGF5ZXItMSB0ZXh0LWJyYW5kLW9yYW5nZSBwLTIgcm91bmRlZCBzaGFkb3ctbGcgXG4gICAgICAgICAgICAgICAgei00MCBncm91cC1ob3ZlcjpzY2FsZS0xMDAgc2NhbGUtMCBcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20nPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt1c2VyICYmIDxMb2dvdXQgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BiYXI7XG4iXSwibmFtZXMiOlsiYXV0aCIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aFN0YXRlIiwiTG9nb3V0IiwidXNlU2V0UmVjb2lsU3RhdGUiLCJhdXRoTW9kYWxTdGF0ZSIsIkltYWdlIiwiRmFDaGV2cm9uTGVmdCIsIkZhQ2hldnJvblJpZ2h0IiwiQnNMaXN0IiwiVGltZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaFB1YmxpY1Byb2JsZW1zIiwiZmV0Y2hQcml2YXRlUHJvYmxlbXMiLCJ1c2VQYXRobmFtZSIsIlRvcGJhciIsInByb2JsZW0iLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwic2V0QXV0aE1vZGFsU3RhdGUiLCJyb3V0ZXIiLCJwcm9ibGVtcyIsInNldFByb2JsZW1zIiwicGF0aG5hbWUiLCJwcm9ibGVtUGFnZSIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwibG9hZFByb2JsZW1zIiwiZmV0Y2hlZFB1YmxpY1Byb2JsZW1zIiwiY3VycmVudFVzZXIiLCJ1c2VySWQiLCJ1aWQiLCJmZXRjaGVkUHJpdmF0ZVByb2JsZW1zIiwiYWxsUHJvYmxlbXMiLCJoYW5kbGVQcm9ibGVtQ2hhbmdlIiwiaXNGb3J3YXJkIiwiY3VycmVudFByb2JsZW0iLCJjdXJyZW50T3JkZXIiLCJmaW5kSW5kZXgiLCJpZCIsInByb2JsZW1zQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ0b3RhbFByb2JsZW1zIiwibGVuZ3RoIiwibmV4dFByb2JsZW1PcmRlciIsIm5leHRQcm9ibGVtIiwiZmluZCIsIm9yZGVyIiwicHVzaCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uQ2xpY2siLCJwIiwicHJldiIsImlzT3BlbiIsInR5cGUiLCJidXR0b24iLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Topbar/Topbar.tsx\n"));

/***/ })

});