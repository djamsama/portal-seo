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
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _errorBoundary = _interopRequireDefault(require("../components/errorBoundary"));
var _helmet = _interopRequireDefault(require("../components/helmet"));
var _scrollTop = _interopRequireDefault(require("../components/scrollTop"));
var _lightHeader = _interopRequireDefault(require("../components/header/components/lightHeader"));
var _footerContainer = _interopRequireDefault(require("../containers/footer/footerContainer"));
var _responsive = _interopRequireDefault(require("../components/styles/responsive"));
var _templateObject;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var media = _responsive["default"].media();
var MainWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-7tw7lr-0"
})(["min-height:300px;position:relative;margin-left:auto;margin-right:auto;padding-left:25px;padding-right:25px;margin-bottom:125px;", ";"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 0;\n    padding-left: 10px;\n    padding-right: 10px;\n  "]))));
var PageLayoutCustom = /*#__PURE__*/function (_React$Component) {
  function PageLayoutCustom() {
    (0, _classCallCheck2["default"])(this, PageLayoutCustom);
    return _callSuper(this, PageLayoutCustom, arguments);
  }
  (0, _inherits2["default"])(PageLayoutCustom, _React$Component);
  return (0, _createClass2["default"])(PageLayoutCustom, [{
    key: "render",
    value: function render() {
      var CssLayout = _styledComponents["default"].div.withConfig({
        componentId: "sc-7tw7lr-1"
      })(["margin:0;padding:0;font-family:Arial,sans-serif;font-size:12px;line-height:1.5em;width:100%;min-height:100vh;display:flex;flex-direction:column;background-color:#f6f6f6;"]);
      var _this$props = this.props,
        children = _this$props.children,
        brands = _this$props.brands,
        hasScrollTop = _this$props.hasScrollTop;
      return /*#__PURE__*/_react["default"].createElement(CssLayout, null, /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, /*#__PURE__*/_react["default"].createElement(_helmet["default"], null), /*#__PURE__*/_react["default"].createElement(_lightHeader["default"], null), /*#__PURE__*/_react["default"].createElement(MainWrapper, null, children), hasScrollTop && /*#__PURE__*/_react["default"].createElement(_scrollTop["default"], null), /*#__PURE__*/_react["default"].createElement(_footerContainer["default"], {
        footerMode: "minimal",
        footerFreeTax: false,
        showBrands: brands
      }), /*#__PURE__*/_react["default"].createElement("div", {
        id: "modal"
      })));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = PageLayoutCustom;
PageLayoutCustom.defaultProps = {
  hasScrollTop: true
};