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
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../../components/formattedHTMLMessage"));
var _privacyPages = require("./styles/privacyPages");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Text de protection de la vie privée avec lien vers les page CGU et privacy.
 */
var PrivacyPage = /*#__PURE__*/function (_ContextComponent) {
  function PrivacyPage() {
    (0, _classCallCheck2["default"])(this, PrivacyPage);
    return _callSuper(this, PrivacyPage, arguments);
  }
  (0, _inherits2["default"])(PrivacyPage, _ContextComponent);
  return (0, _createClass2["default"])(PrivacyPage, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        footerLinksCGU = _this$context$initDat.footerLinksCGU,
        footerLinksPrivacy = _this$context$initDat.footerLinksPrivacy;
      return /*#__PURE__*/_react["default"].createElement(_privacyPages.PrivacyPageWrapper, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "Fo_Request_RequestForm_Policy_Message",
        values: {
          "0": footerLinksPrivacy,
          "1": footerLinksCGU
        }
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = PrivacyPage;