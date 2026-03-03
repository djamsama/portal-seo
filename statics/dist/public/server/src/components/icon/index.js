"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var Icon = function Icon(props) {
  var name = props.name;
  return /*#__PURE__*/_react["default"].createElement("i", {
    className: name
  });
};
var _default = exports["default"] = Icon;