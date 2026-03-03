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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _veDesignSystem = require("ve-design-system");
var _constants = require("../../../../../../commons/constants");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _quotationConfirmation = require("./styles/quotationConfirmation");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant permettant d'afficher le contenu de la page step3 coté gauche
 */
var QuotationConfirmation = /*#__PURE__*/function (_Component) {
  function QuotationConfirmation(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, QuotationConfirmation);
    _this = _callSuper(this, QuotationConfirmation, [props]);
    _this.clicked = false;
    _this.handleClick = _this.handleClick.bind(_this);
    _this.onWindowClose = _this.onWindowClose.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(QuotationConfirmation, _Component);
  return (0, _createClass2["default"])(QuotationConfirmation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CONFIRM
      });
      window.addEventListener("beforeunload", this.onWindowClose);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("beforeunload", this.onWindowClose);
    }
  }, {
    key: "onWindowClose",
    value: function onWindowClose() {
      if (!this.clicked) {
        var googleAnalytics = this.props.googleAnalytics;
        googleAnalytics.event({
          category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
          action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
          label: _constants.GOOGLE_ANALYTICS_EVENTS.EXIT_CONFIRM
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.clicked = true;
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLICK_BOUTON_GO_TO_REQUEST_DETAIL
      });
    }
  }, {
    key: "render",
    value: function render() {
      var leadsQuoteInformations = this.props.leadsQuoteInformations;
      var mySpaceUrl = leadsQuoteInformations.leadsMyspaceUrl !== "" ? leadsQuoteInformations.leadsMyspaceUrl : "/myspace/secure/request";
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_quotationConfirmation.ConfirmationValidationContent, null, /*#__PURE__*/_react["default"].createElement(_quotationConfirmation.ConfirmationValidationContentHeader, null, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement("i", {
        color: "green",
        className: "fa fa-check icon-check"
      }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_title"
      }))), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_text",
        values: {
          "0": leadsQuoteInformations.supplierName
        }
      }))), /*#__PURE__*/_react["default"].createElement(_quotationConfirmation.ConfirmationValidationContentFooter, null, /*#__PURE__*/_react["default"].createElement("h3", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_next"
      })), /*#__PURE__*/_react["default"].createElement("ol", null, /*#__PURE__*/_react["default"].createElement("li", {
        className: "rassurance rassurance1"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_next_copy"
      })), /*#__PURE__*/_react["default"].createElement("li", {
        className: "rassurance rassurance2"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_next_bill"
      })), /*#__PURE__*/_react["default"].createElement("li", {
        className: "rassurance rassurance3"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_next_pay"
      }))))), /*#__PURE__*/_react["default"].createElement(_quotationConfirmation.ConfirmationValidationButton, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        href: mySpaceUrl,
        outlined: true
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_back"
      }))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(QuotationConfirmation);