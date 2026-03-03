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
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../components/formattedHTMLMessage"));
var _footerSocialLink = _interopRequireDefault(require("../../../../../../../components/footer/components/footerSocialLink"));
var _unsubscribeFormConfirmation = require("./styles/unsubscribeFormConfirmation");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var UnsubscribeFormConfirmation = /*#__PURE__*/function (_Component) {
  function UnsubscribeFormConfirmation() {
    (0, _classCallCheck2["default"])(this, UnsubscribeFormConfirmation);
    return _callSuper(this, UnsubscribeFormConfirmation, arguments);
  }
  (0, _inherits2["default"])(UnsubscribeFormConfirmation, _Component);
  return (0, _createClass2["default"])(UnsubscribeFormConfirmation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        visitorEmail = _this$props.visitorEmail,
        globalLinksHome = _this$props.globalLinksHome;
      return /*#__PURE__*/_react["default"].createElement(_unsubscribeFormConfirmation.UnsubscribeMessageConfirmation, {
        "data-cy": "unsubscribe-confirmation-message"
      }, /*#__PURE__*/_react["default"].createElement(_unsubscribeFormConfirmation.TitleH1Unsubscribe, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_unsubscribe_miss_you_message"
      })), /*#__PURE__*/_react["default"].createElement(_unsubscribeFormConfirmation.UnsubscribeMessageContainer, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_unsubscribe_mail_social_networks",
        values: {
          "0": visitorEmail,
          "1": globalLinksHome
        }
      })), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_unsubscribe_social_networks"
      }), /*#__PURE__*/_react["default"].createElement(_footerSocialLink["default"], null));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = UnsubscribeFormConfirmation;