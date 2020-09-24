/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app/detail/Detail.js":
/*!*************************************!*\
  !*** ./client/app/detail/Detail.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state_sideEffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/sideEffects */ \"./client/app/detail/state/sideEffects.js\");\n/* harmony import */ var _connect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../connect.js */ \"./client/connect.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n //   import { connect } from 'react-redux';\n\n\n\n\nvar Detail = /*#__PURE__*/function (_Component) {\n  _inherits(Detail, _Component);\n\n  var _super = _createSuper(Detail);\n\n  function Detail() {\n    _classCallCheck(this, Detail);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Detail, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var id = this.props.match.params.id;\n      this.props.fetchAvengerDetail(id);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props$avenger = this.props.avenger,\n          name = _this$props$avenger.name,\n          powers = _this$props$avenger.powers;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/\"\n      }, \"home\"), \"/\", name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Powers:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, powers.map(function (power) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: power\n        }, power);\n      })));\n    }\n  }], [{\n    key: \"fetchInitialData\",\n    value: function fetchInitialData(_ref) {\n      var dispatch = _ref.dispatch,\n          path = _ref.path;\n      var id = path.split(\"/\")[2];\n      return [dispatch(Object(_state_sideEffects__WEBPACK_IMPORTED_MODULE_1__[\"fetchAvengerDetail\"])(id))];\n    }\n  }]);\n\n  return Detail;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapStateToProps(state) {\n  return {\n    avenger: state.detail.avenger\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    fetchAvengerDetail: function fetchAvengerDetail(id) {\n      return dispatch(Object(_state_sideEffects__WEBPACK_IMPORTED_MODULE_1__[\"fetchAvengerDetail\"])(id));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_connect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mapStateToProps, mapDispatchToProps)(Detail));\n\n//# sourceURL=webpack:///./client/app/detail/Detail.js?");

/***/ }),

/***/ "./client/app/detail/state/actionTypes.js":
/*!************************************************!*\
  !*** ./client/app/detail/state/actionTypes.js ***!
  \************************************************/
/*! exports provided: FETCH_AVENGER_DETAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_AVENGER_DETAIL\", function() { return FETCH_AVENGER_DETAIL; });\nvar FETCH_AVENGER_DETAIL = 'detail/FETCH_AVENGER_DETAIL';\n\n//# sourceURL=webpack:///./client/app/detail/state/actionTypes.js?");

/***/ }),

/***/ "./client/app/detail/state/actions.js":
/*!********************************************!*\
  !*** ./client/app/detail/state/actions.js ***!
  \********************************************/
/*! exports provided: receivedAvengerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedAvengerDetails\", function() { return receivedAvengerDetails; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./client/app/detail/state/actionTypes.js\");\n\nvar receivedAvengerDetails = function receivedAvengerDetails(payload) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_AVENGER_DETAIL\"],\n    payload: payload\n  };\n};\n\n//# sourceURL=webpack:///./client/app/detail/state/actions.js?");

/***/ }),

/***/ "./client/app/detail/state/reducer.js":
/*!********************************************!*\
  !*** ./client/app/detail/state/reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./client/app/detail/state/actionTypes.js\");\n\nvar initialState = {\n  avenger: {\n    powers: []\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_AVENGER_DETAIL\"]:\n      return {\n        avenger: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/app/detail/state/reducer.js?");

/***/ }),

/***/ "./client/app/detail/state/sideEffects.js":
/*!************************************************!*\
  !*** ./client/app/detail/state/sideEffects.js ***!
  \************************************************/
/*! exports provided: fetchAvengerDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAvengerDetail\", function() { return fetchAvengerDetail; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ \"./client/app/detail/state/actions.js\");\n\n\nfunction fetchAvengerDetail(payload) {\n  return function (dispatch, getState) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default()(\"http://localhost:8082/avenger/\".concat(payload)).then(function (response) {\n      console.log(response.data);\n      dispatch(Object(_actions_js__WEBPACK_IMPORTED_MODULE_1__[\"receivedAvengerDetails\"])(response.data));\n    });\n  };\n}\n\n//# sourceURL=webpack:///./client/app/detail/state/sideEffects.js?");

/***/ }),

/***/ "./client/app/home/Home.js":
/*!*********************************!*\
  !*** ./client/app/home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state_sideEffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/sideEffects */ \"./client/app/home/state/sideEffects.js\");\n/* harmony import */ var _connect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../connect.js */ \"./client/connect.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n //   import { connect } from 'react-redux';\n\n\n\n\nvar Home = /*#__PURE__*/function (_Component) {\n  _inherits(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.fetchAvengers();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var avengers = this.props.avengers;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, avengers.map(function (avenger) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: avenger.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"/detail/\".concat(avenger.id)\n        }, avenger.name));\n      }));\n    }\n  }], [{\n    key: \"fetchInitialData\",\n    value: function fetchInitialData(_ref) {\n      var dispatch = _ref.dispatch;\n      return [dispatch(Object(_state_sideEffects__WEBPACK_IMPORTED_MODULE_1__[\"fetchAvengers\"])())];\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapStateToProps(state) {\n  console.log(state);\n  return {\n    avengers: state.home.avengers\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    fetchAvengers: function fetchAvengers() {\n      return dispatch(Object(_state_sideEffects__WEBPACK_IMPORTED_MODULE_1__[\"fetchAvengers\"])());\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_connect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mapStateToProps, mapDispatchToProps)(Home));\n\n//# sourceURL=webpack:///./client/app/home/Home.js?");

/***/ }),

/***/ "./client/app/home/state/actionTypes.js":
/*!**********************************************!*\
  !*** ./client/app/home/state/actionTypes.js ***!
  \**********************************************/
/*! exports provided: FETCH_AVENGERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_AVENGERS\", function() { return FETCH_AVENGERS; });\nvar FETCH_AVENGERS = 'home/FETCH_AVENGERS';\n\n//# sourceURL=webpack:///./client/app/home/state/actionTypes.js?");

/***/ }),

/***/ "./client/app/home/state/actions.js":
/*!******************************************!*\
  !*** ./client/app/home/state/actions.js ***!
  \******************************************/
/*! exports provided: receivedAvengers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedAvengers\", function() { return receivedAvengers; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./client/app/home/state/actionTypes.js\");\n\nvar receivedAvengers = function receivedAvengers(payload) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_AVENGERS\"],\n    payload: payload\n  };\n};\n\n//# sourceURL=webpack:///./client/app/home/state/actions.js?");

/***/ }),

/***/ "./client/app/home/state/reducer.js":
/*!******************************************!*\
  !*** ./client/app/home/state/reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./client/app/home/state/actionTypes.js\");\n\nvar initialState = {\n  avengers: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_AVENGERS\"]:\n      return {\n        avengers: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/app/home/state/reducer.js?");

/***/ }),

/***/ "./client/app/home/state/sideEffects.js":
/*!**********************************************!*\
  !*** ./client/app/home/state/sideEffects.js ***!
  \**********************************************/
/*! exports provided: fetchAvengers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAvengers\", function() { return fetchAvengers; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ \"./client/app/home/state/actions.js\");\n\n\nfunction fetchAvengers() {\n  return function (dispatch, getState) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:8082/avengers/list').then(function (response) {\n      console.log(response.data);\n      dispatch(Object(_actions_js__WEBPACK_IMPORTED_MODULE_1__[\"receivedAvengers\"])(response.data));\n    });\n  };\n}\n\n//# sourceURL=webpack:///./client/app/home/state/sideEffects.js?");

/***/ }),

/***/ "./client/connect.js":
/*!***************************!*\
  !*** ./client/connect.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nfunction connect(mapStateToProps, mapDispatchToProps) {\n  return function (WrappedComponent) {\n    var ParentComponent = /*#__PURE__*/function (_Component) {\n      _inherits(ParentComponent, _Component);\n\n      var _super = _createSuper(ParentComponent);\n\n      function ParentComponent(props) {\n        var _this;\n\n        _classCallCheck(this, ParentComponent);\n\n        _this = _super.call(this, props);\n        _this.state = mapStateToProps(_this.props.store.getState());\n        return _this;\n      }\n\n      _createClass(ParentComponent, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n          var _this2 = this;\n\n          this.unsubscribe = this.props.store.subscribe(function (value) {\n            var newState = mapStateToProps(_this2.props.store.getState());\n\n            _this2.setState(newState);\n          });\n        }\n      }, {\n        key: \"componentWillUnmount\",\n        value: function componentWillUnmount() {\n          this.unsubscribe();\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          ;\n\n          var _this$props = this.props,\n              store = _this$props.store,\n              rest = _objectWithoutProperties(_this$props, [\"store\"]);\n\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _extends({}, rest, this.state, mapDispatchToProps(store.dispatch)));\n        }\n      }]);\n\n      return ParentComponent;\n    }(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\n    return function (props) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"ReactReduxContext\"].Consumer, null, function (_ref) {\n        var store = _ref.store;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ParentComponent, _extends({\n          store: store\n        }, props));\n      }));\n    };\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connect);\n\n//# sourceURL=webpack:///./client/connect.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./server/render.js\");\n/* harmony import */ var _shared_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/configureStore */ \"./shared/configureStore.js\");\n/* harmony import */ var _shared_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Routes */ \"./shared/Routes.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar avengerDetails = [{\n  id: 1,\n  name: 'ironman',\n  powers: ['fly', 'gadgets']\n}, {\n  id: 2,\n  name: 'hulk',\n  powers: ['smash']\n}, {\n  id: 3,\n  name: 'thor',\n  powers: ['fly', 'hammer']\n}];\nvar PORT = process.env.PORT || 8082;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.get('/avengers/list', function (req, res) {\n  return res.status(200).json(avengerDetails);\n});\napp.get('/avenger/:id', function (req, res) {\n  var id = req.params.id;\n  var detail = avengerDetails.filter(function (item) {\n    return item.id === Number(id);\n  })[0] || {};\n  return res.status(200).json(detail);\n});\napp.get('*', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var store, actionsArray, context, content;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = Object(_shared_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            actionsArray = Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"matchRoutes\"])(_shared_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path).map(function (_ref2) {\n              var route = _ref2.route;\n              return route.component && route.component.fetchInitialData ? route.component.fetchInitialData(_objectSpread(_objectSpread({}, store), {}, {\n                path: req.path\n              })) : [];\n            }).reduce(function (accumulator, actions) {\n              return [].concat(_toConsumableArray(accumulator), _toConsumableArray(actions));\n            }, []);\n            _context.next = 4;\n            return Promise.all(actionsArray);\n\n          case 4:\n            context = {};\n            content = Object(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req.path, store, context);\n            res.send(content);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(PORT, function () {\n  return console.log(\"Frontend service listening on port: \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Routes */ \"./shared/Routes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pathname, store, context) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n    location: pathname,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"renderRoutes\"])(_shared_Routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])))));\n  return \"\\n  <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\\\"app\\\">\".concat(content, \"</div>\\n      <script>\\n        window.INITIAL_STATE = \").concat(JSON.stringify(store.getState()).replace(/</g, \"\\\\u003c\"), \"\\n      </script>\\n      <script src=\\\"/bundle.js\\\"></script>\\n      </body>\\n      </html>\\n  \");\n});\n;\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./shared/Routes.js":
/*!**************************!*\
  !*** ./shared/Routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_app_home_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/app/home/Home */ \"./client/app/home/Home.js\");\n/* harmony import */ var _client_app_detail_Detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/app/detail/Detail */ \"./client/app/detail/Detail.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: _client_app_home_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  path: '/',\n  exact: true\n}, {\n  component: _client_app_detail_Detail__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  path: '/detail/:id'\n}]);\n\n//# sourceURL=webpack:///./shared/Routes.js?");

/***/ }),

/***/ "./shared/configureStore.js":
/*!**********************************!*\
  !*** ./shared/configureStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers.js */ \"./shared/reducers.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));\n});\n\n//# sourceURL=webpack:///./shared/configureStore.js?");

/***/ }),

/***/ "./shared/reducers.js":
/*!****************************!*\
  !*** ./shared/reducers.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_app_home_state_reducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/app/home/state/reducer.js */ \"./client/app/home/state/reducer.js\");\n/* harmony import */ var _client_app_detail_state_reducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/app/detail/state/reducer.js */ \"./client/app/detail/state/reducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _client_app_home_state_reducer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  detail: _client_app_detail_state_reducer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./shared/reducers.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./server/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./server/index.js */\"./server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./server/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });