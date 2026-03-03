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
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _errorBoundary = _interopRequireDefault(require("../components/errorBoundary"));
var _headerContainer = _interopRequireDefault(require("../components/header/containers/headerContainer"));
var _helmet = _interopRequireDefault(require("../components/helmet"));
var _scrollTop = _interopRequireDefault(require("../components/scrollTop"));
var _footerContainer = _interopRequireDefault(require("../containers/footer/footerContainer"));
var _grabberContainer = _interopRequireDefault(require("../containers/grabber/grabberContainer"));
var _layout = require("./styles/layout");
var ThemeLayout = _interopRequireWildcard(require("./styles/themeLayout"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var PageLayout = /*#__PURE__*/function (_React$Component) {
  function PageLayout() {
    (0, _classCallCheck2["default"])(this, PageLayout);
    return _callSuper(this, PageLayout, arguments);
  }
  (0, _inherits2["default"])(PageLayout, _React$Component);
  return (0, _createClass2["default"])(PageLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        hasNoGrabber = _this$props.hasNoGrabber,
        hasFixedHeader = _this$props.hasFixedHeader,
        theme = _this$props.theme,
        hasScrollTop = _this$props.hasScrollTop,
        bannerEnabled = _this$props.bannerEnabled;
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_layout.CssLayout, null, /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, /*#__PURE__*/_react["default"].createElement(_helmet["default"], null), /*#__PURE__*/_react["default"].createElement(_headerContainer["default"], {
        fixed: hasFixedHeader,
        bannerEnabled: bannerEnabled
      }), /*#__PURE__*/_react["default"].createElement(_layout.MainWrapper, null, children), hasScrollTop && /*#__PURE__*/_react["default"].createElement(_scrollTop["default"], null), /*#__PURE__*/_react["default"].createElement(_footerContainer["default"], null), !hasNoGrabber && /*#__PURE__*/_react["default"].createElement(_grabberContainer["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        id: "modal"
      }))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = PageLayout;
PageLayout.defaultProps = {
  theme: ThemeLayout.ThemeLayoutMain,
  hasNoGrabber: false,
  hasFixedHeader: false,
  hasScrollTop: true,
  bannerEnabled: true
};