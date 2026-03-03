"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = require("react");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/no-unused-prop-types */ /* eslint-disable react/require-default-props */ /* eslint-disable react/require-render-return */
var CardInput = exports["default"] = /*#__PURE__*/function (_Component) {
  function CardInput() {
    (0, _classCallCheck2["default"])(this, CardInput);
    return _callSuper(this, CardInput, arguments);
  }
  (0, _inherits2["default"])(CardInput, _Component);
  return (0, _createClass2["default"])(CardInput, [{
    key: "render",
    value: function render() {
      throw new Error("CardInput must be inside a CardField");
    }
  }]);
}(_react.Component);