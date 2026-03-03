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
var _contextComponent = require("../../../contextComponent");
var _footerButton = require("./styles/footerButton");
var _link = require("../../../link");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FooterButton = /*#__PURE__*/function (_ContextComponent) {
  function FooterButton() {
    (0, _classCallCheck2["default"])(this, FooterButton);
    return _callSuper(this, FooterButton, arguments);
  }
  (0, _inherits2["default"])(FooterButton, _ContextComponent);
  return (0, _createClass2["default"])(FooterButton, [{
    key: "render",
    value: function render() {
      var encrypt = this.props.encrypt || false;
      var external = this.props.external || false;
      var Comp = _footerButton.FooterButtonLink;
      var href = this.props.href;
      var separatorVal = this.props.separator || false;
      return /*#__PURE__*/_react["default"].createElement(_footerButton.FooterLinkWrapper, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Comp,
        to: href,
        encrypt: encrypt,
        external: external,
        separator: separatorVal
      }, this.props.children));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = FooterButton;