"use strict";
(self["webpackChunkchirper"] = self["webpackChunkchirper"] || []).push([[856],{

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(2525);var f=__webpack_require__(3400),g=60103;__webpack_unused_export__=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");__webpack_unused_export__=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 9940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OurButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1375);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7913);
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(371);
/* harmony import */ var react_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinner__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const CircularImportButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/* import() */ 129).then(__webpack_require__.t.bind(__webpack_require__, 8129, 23)));
function OurButton(props) {
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(props.size || small);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_base__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, _extends({}, props, {
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
//# sourceMappingURL=856.js.map