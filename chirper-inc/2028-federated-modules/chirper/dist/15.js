"use strict";
(self["webpackChunkchirper"] = self["webpackChunkchirper"] || []).push([[15],{

/***/ 4015:
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
const Counter = /*#__PURE__*/(/* unused pure expression or super */ null && (React.lazy(() => dynamicFederation('count', './Counter'))));
const Chirps = /*#__PURE__*/(/* unused pure expression or super */ null && (React.lazy(() => dynamicFederation('chirper', './Chirps'))));
const App = () => {
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Provider, {
    store: store
  }, /*#__PURE__*/index_js_eager_default().createElement(AppBar, {
    position: "static"
  }, /*#__PURE__*/index_js_eager_default().createElement(Toolbar, null, /*#__PURE__*/index_js_eager_default().createElement(IconButton, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(MenuIcon, null)), /*#__PURE__*/index_js_eager_default().createElement(Typography, {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, "News"))), /*#__PURE__*/index_js_eager_default().createElement(Box, null, "Welcome to Chirper", /*#__PURE__*/index_js_eager_default().createElement(Box, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_eager_.Suspense, {
    fallback: "Loading..."
  }, /*#__PURE__*/index_js_eager_default().createElement(RemoteApp, {
    store: store
  })))));
};
react_dom_index_js_eager_default().render( /*#__PURE__*/index_js_eager_default().createElement(App, null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=15.js.map