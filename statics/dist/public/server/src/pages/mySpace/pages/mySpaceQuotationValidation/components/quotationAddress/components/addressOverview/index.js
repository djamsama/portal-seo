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
var _reactRouterDom = require("react-router-dom");
var _reactRouterDom2 = require("react-router-dom/cjs/react-router-dom.min");
var _constants = require("../../../../../../../../commons/constants");
var _withGoogleAnalytics = require("../../../../../../../../hoc/withGoogleAnalytics");
var _addressOverview = require("./styles/addressOverview");
var _constants2 = require("../../../../constants");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant permettant d'afficher l'adresse d'un devis
 */
var AddressOverview = /*#__PURE__*/function (_Component) {
  function AddressOverview(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AddressOverview);
    _this = _callSuper(this, AddressOverview, [props]);
    _this.click = _this.click.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(AddressOverview, _Component);
  return (0, _createClass2["default"])(AddressOverview, [{
    key: "click",
    value: function click() {
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_MODIF_ADRESS
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        editable = _this$props.editable,
        type = _this$props.type,
        match = _this$props.match,
        intl = _this$props.intl,
        deliveryAdress = _this$props.deliveryAdress,
        billingAddress = _this$props.billingAddress;
      var _match$params = match.params,
        context = _match$params.context,
        _match$params$lang = _match$params.lang,
        lang = _match$params$lang === void 0 ? "" : _match$params$lang,
        quoteId = _match$params.quoteId;
      var currentAddress = _constants2.ADDRESS_TYPE.BILLING === type ? billingAddress : deliveryAdress;
      var stateToLink = {};
      if (_constants2.ADDRESS_TYPE.DELIVERY === type) {
        stateToLink = {
          openDeliveryAdress: true
        };
        if (currentAddress === null) {
          currentAddress = billingAddress;
        }
      }
      return /*#__PURE__*/_react["default"].createElement(_addressOverview.List, null, /*#__PURE__*/_react["default"].createElement(_addressOverview.AddressTitle, null, /*#__PURE__*/_react["default"].createElement(_addressOverview.Subtitle, null, type === "billing" ? intl.formatMessage({
        id: "foj_funnel_buyerDetails_billingAdress"
      }) : intl.formatMessage({
        id: "foj_funnel_buyerDetails_deliveryAdress"
      })), editable && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        onClick: this.click,
        to: {
          pathname: "".concat(lang, "/myspace/secure/").concat(context, "-quotation/validation/").concat(quoteId, "/").concat(_constants2.STEPS_NAME[1], ".html"),
          state: stateToLink
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_funnel_order_buyerDetails_modify"
      }))), /*#__PURE__*/_react["default"].createElement(_addressOverview.Company, null, currentAddress.company), /*#__PURE__*/_react["default"].createElement("li", null, "".concat(currentAddress.firstName, " ").concat(currentAddress.lastName)), /*#__PURE__*/_react["default"].createElement(_addressOverview.AddressContent, null, /*#__PURE__*/_react["default"].createElement("p", null, currentAddress.address1), currentAddress.address2 && /*#__PURE__*/_react["default"].createElement("p", null, currentAddress.address2), /*#__PURE__*/_react["default"].createElement("p", {
        className: "zipCodeAddress"
      }, "".concat(currentAddress.postalCode, " ").concat(currentAddress.city))), /*#__PURE__*/_react["default"].createElement("li", null, "".concat(currentAddress.phoneCode, " ").concat(currentAddress.phoneNumber)));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactRouterDom2.withRouter)((0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(AddressOverview)));