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
var _errorBoundary = _interopRequireDefault(require("../components/errorBoundary"));
var _helmet = _interopRequireDefault(require("../components/helmet"));
var _footerContainer = _interopRequireDefault(require("../containers/footer/footerContainer"));
var _layout = require("./styles/layout");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var PageHeaderLessLayout = /*#__PURE__*/function (_React$Component) {
  function PageHeaderLessLayout() {
    (0, _classCallCheck2["default"])(this, PageHeaderLessLayout);
    return _callSuper(this, PageHeaderLessLayout, arguments);
  }
  (0, _inherits2["default"])(PageHeaderLessLayout, _React$Component);
  return (0, _createClass2["default"])(PageHeaderLessLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        footerFreeTax = _this$props.footerFreeTax,
        customFooter = _this$props.customFooter,
        footerMode = _this$props.footerMode;
      return /*#__PURE__*/_react["default"].createElement(_layout.CssLayout, null, /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, /*#__PURE__*/_react["default"].createElement(_helmet["default"], null), /*#__PURE__*/_react["default"].createElement(_layout.MainWrapperHeaderLess, null, children), /*#__PURE__*/_react["default"].createElement(_footerContainer["default"], {
        footerMode: footerMode,
        footerFreeTax: footerFreeTax,
        customFooter: customFooter
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "modal"
      })));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = PageHeaderLessLayout;