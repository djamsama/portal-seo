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
var _contextComponent = require("../../../components/contextComponent");
var _pageLayout = _interopRequireDefault(require("../../../layouts/pageLayout"));
var _themeLayout = require("../../../layouts/styles/themeLayout");
var _unsubscribeFormContainer = _interopRequireDefault(require("./components/form/containers/unsubscribeFormContainer"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var UnsubscribePageComponent = /*#__PURE__*/function (_ContextComponent) {
  function UnsubscribePageComponent() {
    (0, _classCallCheck2["default"])(this, UnsubscribePageComponent);
    return _callSuper(this, UnsubscribePageComponent, arguments);
  }
  (0, _inherits2["default"])(UnsubscribePageComponent, _ContextComponent);
  return (0, _createClass2["default"])(UnsubscribePageComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], {
        theme: _themeLayout.ThemeLayoutMain,
        brands: false
      }, /*#__PURE__*/_react["default"].createElement(_unsubscribeFormContainer["default"], null));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = UnsubscribePageComponent;