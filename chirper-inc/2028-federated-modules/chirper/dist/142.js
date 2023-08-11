"use strict";
(self["webpackChunkchirper"] = self["webpackChunkchirper"] || []).push([[142],{

/***/ 3223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@^17.0.0 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(1375);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) react-dom@^17.0.0 (singleton) (fallback: ./node_modules/react-dom/index.js) (eager)
var react_dom_index_js_eager_ = __webpack_require__(1099);
var react_dom_index_js_eager_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) react-redux@^7.2.0 (strict) (fallback: ../node_modules/react-redux/es/index.js)
var index_js_ = __webpack_require__(4847);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 4 modules
var AppBar = __webpack_require__(5300);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(4386);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 12 modules
var IconButton = __webpack_require__(6423);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LabelImportant.js
var LabelImportant = __webpack_require__(2160);
// EXTERNAL MODULE: ./node_modules/@mui/base/Button/Button.js + 10 modules
var Button = __webpack_require__(7913);
// EXTERNAL MODULE: consume shared module (default) react-spinner@~0.2.7 (strict) (fallback: ../node_modules/react-spinner/build/index.js)
var build_index_js_ = __webpack_require__(371);
;// CONCATENATED MODULE: ./src/Button.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const CircularImportButton = /*#__PURE__*/index_js_eager_default().lazy(() => __webpack_require__.e(/* import() */ 129).then(__webpack_require__.t.bind(__webpack_require__, 8129, 23)));
function OurButton(props) {
  const [size, setSize] = index_js_eager_default().useState(props.size || small);
  return /*#__PURE__*/index_js_eager_default().createElement(Button/* Button */.z, _extends({}, props, {
    variant: "contained",
    size: sie
  }), size === "large" && /*#__PURE__*/index_js_eager_default().createElement((index_js_eager_default()).Suspense, {
    fallback: MoonSpinner
  }, /*#__PURE__*/index_js_eager_default().createElement(CircularImportButton, {
    size: "small",
    onClick: () => setSize("small")
  }, "Shrink")));
}
;
// EXTERNAL MODULE: consume shared module (default) redux@^4.0.5 (strict) (fallback: ../node_modules/redux/es/redux.js)
var redux_js_ = __webpack_require__(5046);
// EXTERNAL MODULE: consume shared module (default) @reduxjs/toolkit@^1.9.5 (strict) (fallback: ../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js)
var redux_toolkit_esm_js_ = __webpack_require__(780);
;// CONCATENATED MODULE: ./src/store.js


const initialState = {
  chirps: []
};
const chirpSlice = (0,redux_toolkit_esm_js_.createSlice)({
  name: "chirps",
  initialState: [],
  reducers: {
    add(state) {
      state.append(value);
    }
  }
});
const staticReducers = {
  chirps: chirpSlice.reducer
};

/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */
function configureStore(initialState) {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux_js_.compose;
  const enhancer = composeEnhancers();
  const store = (0,redux_js_.createStore)(createReducer(), enhancer);
  store.asyncReducers = {};
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };
  return store;
}
function createReducer(asyncReducers) {
  return (0,redux_js_.combineReducers)({
    ...staticReducers,
    ...asyncReducers
  });
}
const store = configureStore();
;// CONCATENATED MODULE: ./src/bootstrap.js











const dynamicFederation = async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_require__.S.default);
  return container.get(module).then(factory => {
    const Module = factory();
    return Module;
  });
};
const Counter = /*#__PURE__*/index_js_eager_default().lazy(() => dynamicFederation('count', './Counter'));
const Chirps = /*#__PURE__*/(/* unused pure expression or super */ null && (React.lazy(() => dynamicFederation('chirper', './Chirps'))));
const App = () => {
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Provider, {
    store: store
  }, /*#__PURE__*/index_js_eager_default().createElement(AppBar/* default */.Z, {
    position: "static"
  }, /*#__PURE__*/index_js_eager_default().createElement(Toolbar/* default */.Z, null, /*#__PURE__*/index_js_eager_default().createElement(IconButton/* default */.Z, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "bird",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(LabelImportant/* default */.Z, null)), /*#__PURE__*/index_js_eager_default().createElement(Typography/* default */.Z, {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, "Welcome to Chirper Plus"), /*#__PURE__*/index_js_eager_default().createElement(OurButton, null, "Nothing Happens"))), /*#__PURE__*/index_js_eager_default().createElement(Box/* default */.Z, null, /*#__PURE__*/index_js_eager_default().createElement(Box/* default */.Z, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_eager_.Suspense, {
    fallback: "Loading..."
  }, /*#__PURE__*/index_js_eager_default().createElement(Chirper, {
    store: store
  }), /*#__PURE__*/index_js_eager_default().createElement(Counter, {
    store: store
  })))));
};
react_dom_index_js_eager_default().render( /*#__PURE__*/index_js_eager_default().createElement(App, null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=142.js.map