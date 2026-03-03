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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../components/formattedHTMLMessage"));
var _contact = require("./styles/contact");
var _contextComponent = require("../../../../../../../components/contextComponent");
var _withGoogleAnalytics = require("../../../../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
/** Affichage d'un contact avec ou sans prix, highlight ou pas ... */
var Contact = /*#__PURE__*/function (_ContextComponent) {
  function Contact(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Contact);
    _this = _callSuper(this, Contact, [props, context]);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.isChina = !!(context && context.config && context.config.portal && context.config.portal.locale === _constants.LOCALES.ZH);
    return _this;
  }
  (0, _inherits2["default"])(Contact, _ContextComponent);
  return (0, _createClass2["default"])(Contact, [{
    key: "handleClick",
    value: function handleClick(label) {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        requestTrackEvent = _this$props.requestTrackEvent;
      if (googleAnalytics) {
        googleAnalytics.event({
          category: requestTrackEvent.category,
          action: requestTrackEvent.action,
          label: label
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        contact = _this$props2.contact,
        main = _this$props2.main,
        multiContact = _this$props2.multiContact,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS,
        logoUrl = _this$props2.logoUrl;
      return /*#__PURE__*/_react["default"].createElement(_contact.ContactDetailWrapper, {
        main: main,
        multiContact: multiContact
      }, /*#__PURE__*/_react["default"].createElement(_contact.DetailWrapper, null, /*#__PURE__*/_react["default"].createElement(_contact.Left, null, logoUrl && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
        src: logoUrl,
        alt: ""
      })), contact && contact.companyName && /*#__PURE__*/_react["default"].createElement(_contact.NameBlock, null, contact.companyName)), /*#__PURE__*/_react["default"].createElement(_contact.Right, null, contact && contact.address && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_contact.Row, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIconWrapper, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIcon, {
        name: "map marker alternate",
        size: "large"
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_contact.ContactTitle, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: main ? "foj_request_prospect_main_contact" : "foj_request_prospect_local_supplier"
      })), !this.isChina && /*#__PURE__*/_react["default"].createElement(_contact.StyledLink, {
        external: true,
        to: "https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(contact.address.trim())),
        onClick: function onClick() {
          return _this2.handleClick(GOOGLE_ANALYTICS_EVENTS.CLICK_REQUESTFORM_CONTACT_ADDRESS);
        }
      }, contact.address.trim()), this.isChina && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, contact.address.trim())))), contact.phoneNumber && /*#__PURE__*/_react["default"].createElement(_contact.Row, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIconWrapper, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIcon, {
        name: "mobile alternate",
        size: "large"
      })), /*#__PURE__*/_react["default"].createElement(_contact.StyledLink, {
        external: true,
        to: "tel:".concat(contact.phoneNumber),
        onClick: function onClick() {
          return _this2.handleClick(GOOGLE_ANALYTICS_EVENTS.CLICK_REQUESTFORM_CONTACT_PHONE);
        }
      }, contact.phoneNumber)), contact.email && /*#__PURE__*/_react["default"].createElement(_contact.Row, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIconWrapper, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIcon, {
        name: "mail",
        size: "large"
      })), /*#__PURE__*/_react["default"].createElement(_contact.StyledLink, {
        external: true,
        to: "mailto:".concat(contact.email),
        onClick: function onClick() {
          return _this2.handleClick(GOOGLE_ANALYTICS_EVENTS.CLICK_REQUESTFORM_CONTACT_MAIL);
        }
      }, contact.email)), contact.companyWebSite && /*#__PURE__*/_react["default"].createElement(_contact.Row, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIconWrapper, null, /*#__PURE__*/_react["default"].createElement(_contact.StyledIcon, {
        name: "globe",
        size: "large"
      })), /*#__PURE__*/_react["default"].createElement(_contact.StyledLink, {
        external: true,
        to: contact.companyWebSite,
        onClick: function onClick() {
          return _this2.handleClick(GOOGLE_ANALYTICS_EVENTS.CLICK_REQUESTFORM_CONTACT_SITE_LINK);
        }
      }, contact.companyWebSite)))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(Contact);