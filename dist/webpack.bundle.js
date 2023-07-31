/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const place = document.getElementById(\"place\");\n\nconst options = {\n  enableHighAccuracy: true,\n  timeout: 5000,\n  maximumAge: 0,\n};\n\nfunction success(pos) {\n  const crd = pos.coords;\n\n  console.log(\"Your current position is:\");\n  console.log(`Latitude : ${crd.latitude}`);\n  console.log(`Longitude: ${crd.longitude}`);\n  console.log(`More or less ${crd.accuracy} meters.`);\n}\n\nfunction error(err) {\n  console.warn(`ERROR(${err.code}): ${err.message}`);\n}\n\nconst handleClick = () => {\n  navigator.geolocation.getCurrentPosition(success, error, options);\n};\n\nplace.addEventListener(\"click\", handleClick);\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;