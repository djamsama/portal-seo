"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContext = void 0;
var _react = _interopRequireDefault(require("react"));
var AppContext = exports.AppContext = /*#__PURE__*/_react["default"].createContext({
  store: {},
  initData: {},
  config: {}
});