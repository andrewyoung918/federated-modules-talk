"use strict";
(self["webpackChunkchirper"] = self["webpackChunkchirper"] || []).push([["src_Button_js"],{

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OurButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?270f");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/Button/Button.js");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinner */ "webpack/sharing/consume/default/react-spinner/react-spinner");
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const CircularImportButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "webpack_container_remote_chirper_Button").then(__webpack_require__.t.bind(__webpack_require__, /*! chirper/Button */ "webpack/container/remote/chirper/Button", 23)));
function OurButton(props) {
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(props.size || small);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_base__WEBPACK_IMPORTED_MODULE_2__.Button, _extends({}, props, {
    variant: "contained",
    size: sie
  }), size === "large" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {
    fallback: MoonSpinner
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CircularImportButton, {
    size: "small",
    onClick: () => setSize("small")
  }, "Shrink")));
}
;

/***/ })

}]);
//# sourceMappingURL=src_Button_js.js.map