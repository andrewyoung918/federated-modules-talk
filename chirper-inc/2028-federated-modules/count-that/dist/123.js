"use strict";
(self["webpackChunkcount_that"] = self["webpackChunkcount_that"] || []).push([[123],{

/***/ 123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_Counter)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.0 (singleton) (fallback: ./node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(375);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) react-redux@^7.2.0 (strict) (fallback: ../node_modules/react-redux/es/index.js)
var index_js_ = __webpack_require__(847);
// EXTERNAL MODULE: consume shared module (default) @reduxjs/toolkit@^1.9.5 (strict) (fallback: ../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js)
var redux_toolkit_esm_js_ = __webpack_require__(780);
;// CONCATENATED MODULE: ./src/reducer.js

const reducer_slice = (0,redux_toolkit_esm_js_.createSlice)({
  name: "count",
  initialState: [],
  increment(state) {
    state++;
  }
});
/* harmony default export */ const src_reducer = ((/* unused pure expression or super */ null && (reducer_slice)));
;// CONCATENATED MODULE: ./src/Counter.js




const Button = /*#__PURE__*/(/* unused pure expression or super */ null && (React.lazy(() => __webpack_require__.e(/* import() */ 129).then(__webpack_require__.t.bind(__webpack_require__, 129, 23)))));
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const lastChirp = useSelector(state => state?.chirps[0]);
  const [remoteAppInput, setRemoteAppInput] = useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Counter"), /*#__PURE__*/React.createElement("div", null, "CurrentCount : ", count), /*#__PURE__*/React.createElement("div", null, "Last Chirp : ", count), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    style: {
      marginRight: '10px'
    },
    type: "text",
    onChange: e => {
      setRemoteAppInput(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React.createElement(MoonLoader, null)
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => dispatch(slice.actions.incr())
  }, "Add"))));
};
const RemoteAppWrapper = props => {
  const {
    store
  } = props;
  (0,index_js_eager_.useEffect)(() => {
    store.injectReducer(remoteAppScope, reducer);
  }, []);
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Provider, {
    store: store || {}
  }, /*#__PURE__*/index_js_eager_default().createElement(RemoteApp, null));
};
/* harmony default export */ const src_Counter = (RemoteAppWrapper);

/***/ })

}]);
//# sourceMappingURL=123.js.map