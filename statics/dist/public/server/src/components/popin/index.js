"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _popin = require("./styles/popin");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Popin = exports["default"] = /*#__PURE__*/function (_Component) {
  function Popin() {
    (0, _classCallCheck2["default"])(this, Popin);
    return _callSuper(this, Popin, arguments);
  }
  (0, _inherits2["default"])(Popin, _Component);
  return (0, _createClass2["default"])(Popin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        closeIcon = _this$props.closeIcon,
        closeOnDimmerClick = _this$props.closeOnDimmerClick,
        closeOnEscape = _this$props.closeOnEscape,
        children = _this$props.children,
        onClose = _this$props.onClose,
        open = _this$props.open,
        style = _this$props.style,
        className = _this$props.className;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TransitionablePortal, {
        open: open,
        transition: {
          animation: "fade down",
          duration: 500
        }
      }, /*#__PURE__*/_react["default"].createElement(_popin.StyledPopin, {
        closeIcon: closeIcon,
        closeOnDimmerClick: closeOnDimmerClick,
        closeOnEscape: closeOnEscape,
        onClose: onClose,
        open: true,
        style: style,
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, children)));
    }
  }]);
}(_react.Component);
Popin.defaultProps = {
  closeIcon: true,
  closeOnDimmerClick: true,
  closeOnEscape: true,
  onClose: undefined,
  open: undefined,
  style: undefined,
  className: undefined
};