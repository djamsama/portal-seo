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
var _footerMenu = require("./styles/footerMenu");
var _link = require("../../../link");
var _constants = require("../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FooterMenu = /*#__PURE__*/function (_ContextComponent) {
  function FooterMenu() {
    (0, _classCallCheck2["default"])(this, FooterMenu);
    return _callSuper(this, FooterMenu, arguments);
  }
  (0, _inherits2["default"])(FooterMenu, _ContextComponent);
  return (0, _createClass2["default"])(FooterMenu, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        footerLinksSubscribeNewsletter = _this$context$initDat.footerLinksSubscribeNewsletter,
        footerLinksCompanyList = _this$context$initDat.footerLinksCompanyList,
        footerLinksMyspace = _this$context$initDat.footerLinksMyspace,
        footerLinksExhibitorAccount = _this$context$initDat.footerLinksExhibitorAccount,
        footerLinksVirtualExpo = _this$context$initDat.footerLinksVirtualExpo,
        footerLinksBusinessWebsite = _this$context$initDat.footerLinksBusinessWebsite;
      var Comp = _footerMenu.FooterMenuLink;
      var isHome = this.context && this.context.config && this.context.config.route && this.context.config.route === _constants.ROUTE_HOME;
      return /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuList, null, /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuListItem, null, /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuLink, {
        href: footerLinksCompanyList
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_ListOfExhibitors"
      }))), /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuListItem, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Comp,
        to: footerLinksExhibitorAccount,
        encrypt: true,
        external: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_ExhibitorAccount"
      }))), /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuListItem, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Comp,
        to: footerLinksMyspace,
        encrypt: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "FO_Layout_Footer_MySpace"
      }))), /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuListItem, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Comp,
        to: footerLinksBusinessWebsite,
        encrypt: !isHome,
        external: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "FO_Layout_Footer_Business"
      }))), /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuListItem, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Comp,
        to: footerLinksSubscribeNewsletter,
        encrypt: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_NewsletterSubscription"
      }))), /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuListItem, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: Comp,
        to: footerLinksVirtualExpo || "about-us",
        encrypt: !isHome,
        external: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_About_Virtual_Expo"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = FooterMenu;