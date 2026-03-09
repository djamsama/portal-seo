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
var _button = require("./styles/button");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Button = /*#__PURE__*/function (_React$Component) {
  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _callSuper(this, Button, arguments);
  }
  (0, _inherits2["default"])(Button, _React$Component);
  return (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        direction = _this$props.direction,
        handleTransition = _this$props.handleTransition,
        isActive = _this$props.isActive,
        isHoverable = _this$props.isHoverable,
        isHovering = _this$props.isHovering;
      var icon;
      if (direction === "left") {
        icon = /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-angle-left"
        });
      } else if (direction === "right") {
        icon = /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-angle-right"
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_button.Btn, {
        isActive: isActive,
        className: direction,
        onClick: handleTransition,
        type: "button",
        isHoverable: isHoverable,
        isHovering: isHovering
      }, icon);
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = Button;