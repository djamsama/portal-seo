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
var _react = _interopRequireDefault(require("react"));
var _mediaWrapper = require("./styles/mediaWrapper");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MediaWrapper = /*#__PURE__*/function (_React$Component) {
  function MediaWrapper() {
    (0, _classCallCheck2["default"])(this, MediaWrapper);
    return _callSuper(this, MediaWrapper, arguments);
  }
  (0, _inherits2["default"])(MediaWrapper, _React$Component);
  return (0, _createClass2["default"])(MediaWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        index = _this$props.index,
        isFullScreen = _this$props.isFullScreen;
      return /*#__PURE__*/_react["default"].createElement(_mediaWrapper.Wrap, {
        idx: index,
        className: isFullScreen ? "full-screen" : ""
      }, children);
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = MediaWrapper;