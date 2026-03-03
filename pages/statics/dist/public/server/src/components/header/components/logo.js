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
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _responsive = require("../../styles/responsive");
var _contextComponent = require("../../contextComponent");
var _link = require("../../link");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Image = _styledComponents["default"].img.withConfig({
  componentId: "sc-pxhd6m-0"
})(["width:", ";height:", ";vertical-align:middle;transition:0.25s ease-in-out 0s;", ";", ";"], function (props) {
  return props.floating ? "229px" : "246px";
}, function (props) {
  return props.floating ? "50px" : "54px";
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    height: 34px;\n    width: 155px;\n  "]))), _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    height: 34px;\n    width: 155px;\n  "]))));
var WrapperLogo = _styledComponents["default"].div.withConfig({
  componentId: "sc-pxhd6m-1"
})(["text-align:center;", ";", ";"], _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: ", ";\n    margin-right: auto;\n    margin-left: 53px;\n"])), function (props) {
  return props.floating ? "0px" : "-28px";
}), _responsive.mediaMinWidth.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    // width: 220px;\n    float: left;\n    margin-top: ", ";\n    padding-left: 25px;\n    box-sizing: content-box;\n"])), function (props) {
  return props.floating ? "0px" : "-16px";
}));
/**
 * Composant logo.
 */
var Logo = /*#__PURE__*/function (_ContextComponent) {
  function Logo() {
    (0, _classCallCheck2["default"])(this, Logo);
    return _callSuper(this, Logo, arguments);
  }
  (0, _inherits2["default"])(Logo, _ContextComponent);
  return (0, _createClass2["default"])(Logo, [{
    key: "render",
    value: function render() {
      // Recuperation du theme courant.
      var _this$props = this.props,
        theme = _this$props.theme,
        floating = _this$props.floating,
        intl = _this$props.intl,
        className = _this$props.className;
      var initData = this.context.initData;
      var fullClassName = className !== undefined ? "".concat(className, " logo inline-center") : "logo inline-center";
      return /*#__PURE__*/_react["default"].createElement(WrapperLogo, {
        floating: floating,
        className: fullClassName
      }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: initData.globalLinksHome
      }, /*#__PURE__*/_react["default"].createElement(Image, {
        floating: floating,
        id: "header-logo",
        src: theme.logo,
        alt: intl.formatMessage({
          id: "globalBaselineLabel"
        }) // "The Online Architecture and Design Exhibition"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
Logo.propTypes = {
  /** Choix du theme */
  // eslint-disable-next-line react/forbid-prop-types
  theme: _propTypes["default"].object,
  /** Si le logo est fixe ou non */
  floating: _propTypes["default"].bool
};
var _default = exports["default"] = (0, _styledComponents.withTheme)((0, _reactIntl.injectIntl)(Logo));