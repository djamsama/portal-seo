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
var _footer = require("../footerContent/styles/footer");
var _footerMenu = require("../footerMenu/styles/footerMenu");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FooterLinks = /*#__PURE__*/function (_ContextComponent) {
  function FooterLinks() {
    (0, _classCallCheck2["default"])(this, FooterLinks);
    return _callSuper(this, FooterLinks, arguments);
  }
  (0, _inherits2["default"])(FooterLinks, _ContextComponent);
  return (0, _createClass2["default"])(FooterLinks, [{
    key: "render",
    value: function render() {
      var footerMode = this.props.footerMode;
      var footerLinksCompanyList = this.context.initData.footerLinksCompanyList;

      // Pas de rendu côté client
      if (false) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      // Utile uniquement pour le maillage côté serveur
      return /*#__PURE__*/_react["default"].createElement(_footer.FooterWrapper, null, footerMode === "full" && /*#__PURE__*/_react["default"].createElement(_footer.FooterTopWrapper, null, /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuList, null, /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuListItem, null, /*#__PURE__*/_react["default"].createElement(_footerMenu.FooterMenuLink, {
        href: footerLinksCompanyList
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_ListOfExhibitors"
      }))))));
    }
  }]);
}(_contextComponent.ContextComponent);
FooterLinks.defaultProps = {
  footerMode: "full"
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(FooterLinks);