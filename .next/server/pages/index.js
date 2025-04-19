/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./messages lazy recursive ^\\.\\/.*\\.json$":
/*!********************************************************!*\
  !*** ./messages/ lazy ^\.\/.*\.json$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": [
		"./messages/ar.json",
		"messages_ar_json"
	],
	"./de.json": [
		"./messages/de.json",
		"messages_de_json"
	],
	"./en.json": [
		"./messages/en.json",
		"messages_en_json"
	],
	"./es.json": [
		"./messages/es.json",
		"messages_es_json"
	],
	"./fr.json": [
		"./messages/fr.json",
		"messages_fr_json"
	],
	"./it.json": [
		"./messages/it.json",
		"messages_it_json"
	],
	"./ja.json": [
		"./messages/ja.json",
		"messages_ja_json"
	],
	"./zh.json": [
		"./messages/zh.json",
		"messages_zh_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./messages lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/index\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_index_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZpbmRleC5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUM2QztBQUM3QztBQUNBLGlFQUFlLHdFQUFLLENBQUMsNENBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsNENBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDRDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDRDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsNENBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsNENBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXZlLXZvaWNlLW1hcmtldHBsYWNlLWNsZWFuLz8xNDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0IERvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgQXBwIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvaW5kZXguanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgY29tcG9uZW50IChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1Byb3BzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUGF0aHNcIik7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U2VydmVyU2lkZVByb3BzXCIpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbmV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgXCJyZXBvcnRXZWJWaXRhbHNcIik7XG4vLyBSZS1leHBvcnQgbGVnYWN5IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhcmFtcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1BhcmFtc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFNlcnZlclByb3BzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wc1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTLFxuICAgICAgICBwYWdlOiBcIi9pbmRleFwiLFxuICAgICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQXBwLFxuICAgICAgICBEb2N1bWVudFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction navbar() {\n    const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const locales = [\n        \"fr\",\n        \"en\",\n        \"es\"\n    ];\n    const flags = {\n        fr: \"\\uD83C\\uDDEB\\uD83C\\uDDF7\",\n        en: \"\\uD83C\\uDDEC\\uD83C\\uDDE7\",\n        es: \"\\uD83C\\uDDEA\\uD83C\\uDDF8\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            padding: \"16px 24px\",\n            backgroundColor: \"#5B42F3\",\n            color: \"#fff\",\n            position: \"sticky\",\n            top: 0,\n            zIndex: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                locale: locale,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        fontWeight: \"bold\",\n                        fontSize: \"20px\",\n                        cursor: \"pointer\"\n                    },\n                    children: \"Wave Voice\"\n                }, void 0, false, {\n                    fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/components/navbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/components/navbar.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    gap: \"12px\"\n                },\n                children: locales.filter((lang)=>lang !== locale).map((lang)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        locale: lang,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                background: \"none\",\n                                border: \"none\",\n                                fontSize: \"24px\",\n                                cursor: \"pointer\",\n                                transition: \"transform 0.2s\",\n                                color: \"#fff\"\n                            },\n                            onMouseEnter: (e)=>e.target.style.transform = \"scale(1.2)\",\n                            onMouseLeave: (e)=>e.target.style.transform = \"scale(1)\",\n                            title: `Passer en ${lang === \"fr\" ? \"fran\\xe7ais\" : lang === \"en\" ? \"anglais\" : \"espagnol\"}`,\n                            children: flags[lang]\n                        }, void 0, false, {\n                            fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/components/navbar.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this)\n                    }, lang, false, {\n                        fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/components/navbar.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/components/navbar.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/components/navbar.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBRXpCLFNBQVNFO0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdGLHNEQUFTQTtJQUM1QixNQUFNRyxVQUFVO1FBQUM7UUFBTTtRQUFNO0tBQUs7SUFDbEMsTUFBTUMsUUFBUTtRQUNaQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtJQUNOO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU87WUFDVkMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsU0FBUztZQUNUQyxpQkFBaUI7WUFDakJDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLFFBQVE7UUFDVjs7MEJBQ0UsOERBQUNuQixrREFBSUE7Z0JBQUNvQixNQUFLO2dCQUFJakIsUUFBUUE7MEJBQ3JCLDRFQUFDa0I7b0JBQUtYLE9BQU87d0JBQUVZLFlBQVk7d0JBQVFDLFVBQVU7d0JBQVFDLFFBQVE7b0JBQVU7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUs1RSw4REFBQ0M7Z0JBQUlmLE9BQU87b0JBQUVDLFNBQVM7b0JBQVFlLEtBQUs7Z0JBQU87MEJBQ3hDdEIsUUFDRXVCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxTQUFTekIsUUFDMUIwQixHQUFHLENBQUMsQ0FBQ0QscUJBQ0osOERBQUM1QixrREFBSUE7d0JBQVlvQixNQUFLO3dCQUFJakIsUUFBUXlCO2tDQUNoQyw0RUFBQ0U7NEJBQ0NwQixPQUFPO2dDQUNMcUIsWUFBWTtnQ0FDWkMsUUFBUTtnQ0FDUlQsVUFBVTtnQ0FDVkMsUUFBUTtnQ0FDUlMsWUFBWTtnQ0FDWmpCLE9BQU87NEJBQ1Q7NEJBQ0FrQixjQUFjLENBQUNDLElBQU9BLEVBQUVDLE1BQU0sQ0FBQzFCLEtBQUssQ0FBQzJCLFNBQVMsR0FBRzs0QkFDakRDLGNBQWMsQ0FBQ0gsSUFBT0EsRUFBRUMsTUFBTSxDQUFDMUIsS0FBSyxDQUFDMkIsU0FBUyxHQUFHOzRCQUNqREUsT0FBTyxDQUFDLFVBQVUsRUFBRVgsU0FBUyxPQUFPLGdCQUFhQSxTQUFTLE9BQU8sWUFBWSxXQUFXLENBQUM7c0NBRXhGdkIsS0FBSyxDQUFDdUIsS0FBSzs7Ozs7O3VCQWRMQTs7Ozs7Ozs7Ozs7Ozs7OztBQXFCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXZlLXZvaWNlLW1hcmtldHBsYWNlLWNsZWFuLy4vY29tcG9uZW50cy9uYXZiYXIuanM/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gIGNvbnN0IHsgbG9jYWxlIH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbG9jYWxlcyA9IFsnZnInLCAnZW4nLCAnZXMnXTtcbiAgY29uc3QgZmxhZ3MgPSB7XG4gICAgZnI6ICfwn4er8J+HtycsXG4gICAgZW46ICfwn4es8J+HpycsXG4gICAgZXM6ICfwn4eq8J+HuCcsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMTZweCAyNHB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1QjQyRjMnLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHpJbmRleDogMTAwMCxcbiAgICB9fT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMjBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgIFdhdmUgVm9pY2VcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTJweCcgfX0+XG4gICAgICAgIHtsb2NhbGVzXG4gICAgICAgICAgLmZpbHRlcigobGFuZykgPT4gbGFuZyAhPT0gbG9jYWxlKVxuICAgICAgICAgIC5tYXAoKGxhbmcpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17bGFuZ30gaHJlZj1cIi9cIiBsb2NhbGU9e2xhbmd9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzJyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZidcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IChlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4yKScpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IChlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17YFBhc3NlciBlbiAke2xhbmcgPT09ICdmcicgPyAnZnJhbsOnYWlzJyA6IGxhbmcgPT09ICdlbicgPyAnYW5nbGFpcycgOiAnZXNwYWdub2wnfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZmxhZ3NbbGFuZ119XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJuYXZiYXIiLCJsb2NhbGUiLCJsb2NhbGVzIiwiZmxhZ3MiLCJmciIsImVuIiwiZXMiLCJuYXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsImhyZWYiLCJzcGFuIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY3Vyc29yIiwiZGl2IiwiZ2FwIiwiZmlsdGVyIiwibGFuZyIsIm1hcCIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwib25Nb3VzZUVudGVyIiwiZSIsInRhcmdldCIsInRyYW5zZm9ybSIsIm9uTW91c2VMZWF2ZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_1__.NextIntlProvider, {\n        messages: pageProps.messages,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUkzQyxTQUFTQyxNQUFNLEVBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFDO0lBRW5DLHFCQUVFLDhEQUFDSCx1REFBZ0JBO1FBQUNJLFVBQVVELFVBQVVDLFFBQVE7a0JBRTVDLDRFQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBTTlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXZlLXZvaWNlLW1hcmtldHBsYWNlLWNsZWFuLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEludGxQcm92aWRlcn0gZnJvbSAnbmV4dC1pbnRsJztcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcblxuICByZXR1cm4gKFxuXG4gICAgPE5leHRJbnRsUHJvdmlkZXIgbWVzc2FnZXM9e3BhZ2VQcm9wcy5tZXNzYWdlc30+XG5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgIDwvTmV4dEludGxQcm92aWRlcj5cblxuICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJOZXh0SW50bFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n\n\n\nfunction Home() {\n    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_1__.useTranslations)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#7f5af0\",\n            minHeight: \"100vh\",\n            color: \"#fff\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                style: {\n                    textAlign: \"center\",\n                    marginTop: \"120px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: \"2.5rem\"\n                        },\n                        children: t(\"welcome\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            marginTop: \"20px\",\n                            padding: \"10px 20px\",\n                            fontSize: \"18px\",\n                            backgroundColor: \"#fff\",\n                            color: \"#7f5af0\",\n                            border: \"none\",\n                            borderRadius: \"8px\",\n                            cursor: \"pointer\"\n                        },\n                        children: t(\"login\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lavesvremaryse/Downloads/wave-voice-marketplace-clean/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps({ locale }) {\n    return {\n        props: {\n            messages: (await __webpack_require__(\"./messages lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale}.json`)).default\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNGO0FBRTNCLFNBQVNFO0lBQ3RCLE1BQU1DLElBQUlILDBEQUFlQTtJQUV6QixxQkFDRSw4REFBQ0k7UUFBSUMsT0FBTztZQUFFQyxpQkFBaUI7WUFBV0MsV0FBVztZQUFTQyxPQUFPO1FBQU87OzBCQUMxRSw4REFBQ1AsMERBQU1BOzs7OzswQkFFUCw4REFBQ1E7Z0JBQUtKLE9BQU87b0JBQUVLLFdBQVc7b0JBQVVDLFdBQVc7Z0JBQVE7O2tDQUNyRCw4REFBQ0M7d0JBQUdQLE9BQU87NEJBQUVRLFVBQVU7d0JBQVM7a0NBQUlWLEVBQUU7Ozs7OztrQ0FDdEMsOERBQUNXO3dCQUNDVCxPQUFPOzRCQUNMTSxXQUFXOzRCQUNYSSxTQUFTOzRCQUNURixVQUFVOzRCQUNWUCxpQkFBaUI7NEJBQ2pCRSxPQUFPOzRCQUNQUSxRQUFROzRCQUNSQyxjQUFjOzRCQUNkQyxRQUFRO3dCQUNWO2tDQUVDZixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtBQUVPLGVBQWVnQixlQUFlLEVBQUVDLE1BQU0sRUFBRTtJQUM3QyxPQUFPO1FBQ0xDLE9BQU87WUFDTEMsVUFBVSxDQUFDLE1BQU0sbUVBQU8sR0FBYSxFQUFFRixPQUFPLE1BQU0sR0FBR0csT0FBTztRQUNoRTtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXZlLXZvaWNlLW1hcmtldHBsYWNlLWNsZWFuLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbnMgfSBmcm9tICduZXh0LWludGwnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHQgPSB1c2VUcmFuc2xhdGlvbnMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzdmNWFmMCcsIG1pbkhlaWdodDogJzEwMHZoJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgPG1haW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMTIwcHgnIH19PlxuICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6ICcyLjVyZW0nIH19Pnt0KCd3ZWxjb21lJyl9PC9oMT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgY29sb3I6ICcjN2Y1YWYwJyxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdsb2dpbicpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgbG9jYWxlIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVzc2FnZXM6IChhd2FpdCBpbXBvcnQoYC4uL21lc3NhZ2VzLyR7bG9jYWxlfS5qc29uYCkpLmRlZmF1bHQsXG4gICAgfSxcbiAgfTtcbn0iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb25zIiwiTmF2YmFyIiwiSG9tZSIsInQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsImNvbG9yIiwibWFpbiIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImgxIiwiZm9udFNpemUiLCJidXR0b24iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwiZ2V0U3RhdGljUHJvcHMiLCJsb2NhbGUiLCJwcm9wcyIsIm1lc3NhZ2VzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();