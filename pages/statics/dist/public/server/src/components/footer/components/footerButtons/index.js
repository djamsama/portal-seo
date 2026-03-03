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
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../contextComponent");
var _footerButton = _interopRequireDefault(require("../footerButton"));
var _footerButtons = require("./styles/footerButtons");
var _constants = require("../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FooterButtons = /*#__PURE__*/function (_ContextComponent) {
  function FooterButtons() {
    (0, _classCallCheck2["default"])(this, FooterButtons);
    return _callSuper(this, FooterButtons, arguments);
  }
  (0, _inherits2["default"])(FooterButtons, _ContextComponent);
  return (0, _createClass2["default"])(FooterButtons, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        footerLinksSellProducts = _this$context$initDat.footerLinksSellProducts,
        footerLinksSource = _this$context$initDat.footerLinksSource,
        footerLinksAboutIndex = _this$context$initDat.footerLinksAboutIndex,
        footerLinksFaq = _this$context$initDat.footerLinksFaq;
      var isHome = this.context && this.context.config && this.context.config.route && this.context.config.route === _constants.ROUTE_HOME;
      var portal = this.context.config.portal;
      return /*#__PURE__*/_react["default"].createElement(_footerButtons.FooterButtonsWrapper, null, /*#__PURE__*/_react["default"].createElement(_footerButton["default"], {
        href: footerLinksSource,
        encrypt: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_How_To_Source"
      })), /*#__PURE__*/_react["default"].createElement(_footerButton["default"], {
        href: footerLinksSellProducts,
        encrypt: !isHome,
        separator: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_Sell_Products"
      })), /*#__PURE__*/_react["default"].createElement(_footerButton["default"], {
        href: footerLinksFaq,
        encrypt: !isHome,
        separator: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_Contact_Us"
      })), portal && portal.language && portal.language.toLowerCase() === "zh" && portal.site && (portal.site.toLowerCase() === "di" || portal.site.toLowerCase() === "me") && /*#__PURE__*/_react["default"].createElement(_footerButton["default"], {
        href: footerLinksAboutIndex,
        encrypt: true,
        external: true,
        separator: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_VisitorAccount"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(FooterButtons);