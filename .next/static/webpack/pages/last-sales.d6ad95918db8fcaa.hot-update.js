"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LastSalesPage() {\n    _s();\n    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://client-side-fe-default-rtdb.firebaseio.com/sales.json\", (url)=>fetch(url).then((res)=>res.json()));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            const transformedSales = [];\n            for(const key in data){\n                transformedSales.push({\n                    id: key,\n                    username: data[key].username,\n                    volume: data[key].volume\n                });\n            }\n            setSales(transformedSales);\n        }\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(true);\n        fetch(\"https://client-side-fe-default-rtdb.firebaseio.com/sales.json\").then((res)=>res.json()).then((data)=>{\n            const transformedSales = [];\n            for(const key in data){\n                transformedSales.push({\n                    id: key,\n                    username: data[key].username,\n                    volume: data[key].volume\n                });\n            }\n            setSales(transformedSales);\n            setIsLoading(false);\n        });\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Failed to Load\"\n        }, void 0, false, {\n            fileName: \"/Users/joaquinmontes/courses-dev/nextJS/data-fetching/pages/last-sales.js\",\n            lineNumber: 48,\n            columnNumber: 10\n        }, this);\n    }\n    if (!data || !sales) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/joaquinmontes/courses-dev/nextJS/data-fetching/pages/last-sales.js\",\n            lineNumber: 52,\n            columnNumber: 10\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: sales.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.volume\n                ]\n            }, sale.id, true, {\n                fileName: \"/Users/joaquinmontes/courses-dev/nextJS/data-fetching/pages/last-sales.js\",\n                lineNumber: 58,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/joaquinmontes/courses-dev/nextJS/data-fetching/pages/last-sales.js\",\n        lineNumber: 56,\n        columnNumber: 3\n    }, this);\n}\n_s(LastSalesPage, \"FjqaG1RDfalfAjPnJpnTmFL5r3g=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ25CO0FBRXpCLFNBQVNHOztJQUNSLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sRUFBRU8sSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR1AsK0NBQU1BLENBQzdCLGlFQUNBLENBQUNRLE1BQVFDLE1BQU1ELEtBQUtFLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBRzNDZCxnREFBU0EsQ0FBQztRQUNULElBQUlRLE1BQU07WUFDVCxNQUFNTyxtQkFBbUIsRUFBRTtZQUUzQixJQUFLLE1BQU1DLE9BQU9SLEtBQU07Z0JBQ3ZCTyxpQkFBaUJFLElBQUksQ0FBQztvQkFDckJDLElBQUlGO29CQUNKRyxVQUFVWCxJQUFJLENBQUNRLElBQUksQ0FBQ0csUUFBUTtvQkFDNUJDLFFBQVFaLElBQUksQ0FBQ1EsSUFBSSxDQUFDSSxNQUFNO2dCQUN6QjtZQUNEO1lBQ0dmLFNBQVNVO1FBQ2I7SUFDRCxHQUFHO1FBQUNQO0tBQUs7SUFFUlIsZ0RBQVNBLENBQUM7UUFDVk8sYUFBYTtRQUNiSSxNQUFNLGlFQUNKQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNKO1lBQ04sTUFBTU8sbUJBQW1CLEVBQUU7WUFFM0IsSUFBSyxNQUFNQyxPQUFPUixLQUFNO2dCQUN2Qk8saUJBQWlCRSxJQUFJLENBQUM7b0JBQ3JCQyxJQUFJRjtvQkFDSkcsVUFBVVgsSUFBSSxDQUFDUSxJQUFJLENBQUNHLFFBQVE7b0JBQzVCQyxRQUFRWixJQUFJLENBQUNRLElBQUksQ0FBQ0ksTUFBTTtnQkFDekI7WUFDRDtZQUNBZixTQUFTVTtZQUNUUixhQUFhO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJRSxPQUFPO1FBQ1YscUJBQU8sOERBQUNZO3NCQUFHOzs7Ozs7SUFDWjtJQUVBLElBQUksQ0FBQ2IsUUFBUSxDQUFDSixPQUFPO1FBQ3BCLHFCQUFPLDhEQUFDa0I7c0JBQUU7Ozs7OztJQUNYO0lBRUEscUJBQ0MsOERBQUNDO2tCQUNDbkIsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWCw4REFBQ0M7O29CQUNDRCxLQUFLTixRQUFRO29CQUFDO29CQUFLTSxLQUFLTCxNQUFNOztlQUR2QkssS0FBS1AsRUFBRTs7Ozs7Ozs7OztBQU1wQjtHQTVEU2Y7O1FBSWdCRCwyQ0FBTUE7OztLQUp0QkM7QUE4RFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8yOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UoKSB7XG5cdGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG5cdFx0J2h0dHBzOi8vY2xpZW50LXNpZGUtZmUtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nLFxuXHRcdCh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXHQpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcblxuXHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuXHRcdFx0XHR0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuXHRcdFx0XHRcdGlkOiBrZXksXG5cdFx0XHRcdFx0dXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcblx0XHRcdFx0XHR2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XG5cdFx0fVxuXHR9LCBbZGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xuXHRcdGZldGNoKCdodHRwczovL2NsaWVudC1zaWRlLWZlLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJylcblx0XHRcdC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG5cblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuXHRcdFx0XHRcdHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRpZDoga2V5LFxuXHRcdFx0XHRcdFx0dXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcblx0XHRcdFx0XHRcdHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcblx0XHRcdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcblx0XHRcdH0pO1xuXHR9LCBbXSk7XG5cblx0aWYgKGVycm9yKSB7XG5cdFx0cmV0dXJuIDxoMT5GYWlsZWQgdG8gTG9hZDwvaDE+O1xuXHR9XG5cblx0aWYgKCFkYXRhIHx8ICFzYWxlcykge1xuXHRcdHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHVsPlxuXHRcdFx0e3NhbGVzLm1hcCgoc2FsZSkgPT4gKFxuXHRcdFx0XHQ8bGkga2V5PXtzYWxlLmlkfT5cblx0XHRcdFx0XHR7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsIkxhc3RTYWxlc1BhZ2UiLCJzYWxlcyIsInNldFNhbGVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGF0YSIsImVycm9yIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRyYW5zZm9ybWVkU2FsZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsImgxIiwicCIsInVsIiwibWFwIiwic2FsZSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n"));

/***/ })

});