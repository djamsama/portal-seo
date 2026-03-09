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
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _constants = require("../../../../../../commons/constants");
var _contextComponent = require("../../../../../../components/contextComponent");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _quotationConfirmationPayment = require("./styles/quotationConfirmationPayment");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant permettant d'afficher le contenu de la page step3 lors d'un paiement par carte bancaire
 */
var QuotationConfirmationPayment = /*#__PURE__*/function (_ContextComponent) {
  function QuotationConfirmationPayment() {
    (0, _classCallCheck2["default"])(this, QuotationConfirmationPayment);
    return _callSuper(this, QuotationConfirmationPayment, arguments);
  }
  (0, _inherits2["default"])(QuotationConfirmationPayment, _ContextComponent);
  return (0, _createClass2["default"])(QuotationConfirmationPayment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        leadsQuoteInformations = _this$props.leadsQuoteInformations,
        bankwire = _this$props.bankwire,
        transactionStatus = _this$props.transactionStatus;
      var quoteTransactionStatus = transactionStatus || leadsQuoteInformations.quoteTransactionDTO.status;
      if (this.eventSent) {
        return;
      }
      if (quoteTransactionStatus === _constants.PAYMENT_STATUS.PENDING && bankwire) {
        googleAnalytics.event({
          category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
          action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
          label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CONFIRM_WIRE
        });
        this.eventSent = true;
      } else if (quoteTransactionStatus === _constants.PAYMENT_STATUS.VALIDATED || quoteTransactionStatus === _constants.PAYMENT_STATUS.PENDING) {
        googleAnalytics.event({
          category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
          action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
          label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CONFIRM_CB
        });
        this.eventSent = true;
      } else if (quoteTransactionStatus === _constants.PAYMENT_STATUS.REFUSED) {
        googleAnalytics.event({
          category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
          action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
          label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CONFIRM_CB_ERROR
        });
        this.eventSent = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        leadsQuoteInformations = _this$props2.leadsQuoteInformations,
        bankwire = _this$props2.bankwire,
        transactionStatus = _this$props2.transactionStatus;
      var quoteTransactionDTO = leadsQuoteInformations.quoteTransactionDTO;
      var advance = quoteTransactionDTO.advance,
        totalAmount = quoteTransactionDTO.totalAmount,
        currency = quoteTransactionDTO.currency;
      var mySpaceUrl = leadsQuoteInformations.leadsMyspaceUrl !== "" ? leadsQuoteInformations.leadsMyspaceUrl : "/myspace/secure/request";
      var paymentType = bankwire ? _constants.PAYMENT_TYPE.WIRE : _constants.PAYMENT_TYPE.CARD;
      var quoteTransactionStatus = transactionStatus || leadsQuoteInformations.quoteTransactionDTO.status;
      var paymentStatusRefused = quoteTransactionStatus === _constants.PAYMENT_STATUS.REFUSED;
      var titleIcon = "fa fa-check icon-green";
      var title = "foj_funnel_confirmation_congratulation_title";
      if (bankwire) {
        titleIcon = "fa fa-hourglass-half icon-grey";
        title = "foj_funnel_confirmation_congratulation_title_wire";
      } else if (paymentStatusRefused) {
        titleIcon = "fa fa-times icon-red";
        title = "foj_funnel_confirmation_refused_title";
      }
      var options = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      var expirationDate = bankwire ? new Intl.DateTimeFormat(this.context.config.portal.locale, options).format(bankwire.expirationDate) : "";
      var iban = bankwire && bankwire.iban.replace(/[^a-z0-9]+/gi, "").replace(/(.{4})/g, "$1 ");
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_quotationConfirmationPayment.CongratulationValidationContent, null, /*#__PURE__*/_react["default"].createElement(_quotationConfirmationPayment.CongratulationValidationContentHeader, null, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement("i", {
        color: !paymentStatusRefused ? "green" : "red",
        className: titleIcon
      }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: title
      }))), paymentStatusRefused && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_refused_text_".concat(paymentType)
      })), !paymentStatusRefused && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_text_".concat(paymentType)
      }))), bankwire && /*#__PURE__*/_react["default"].createElement(_quotationConfirmationPayment.CongratulationValidationContentBody, null, /*#__PURE__*/_react["default"].createElement("dt", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_wire_total"
      })), /*#__PURE__*/_react["default"].createElement("dd", null, new Intl.NumberFormat(this.context.config.portal.locale, {
        style: "currency",
        currency: currency
      }).format(advance)), /*#__PURE__*/_react["default"].createElement("dt", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_wire_reference"
      })), /*#__PURE__*/_react["default"].createElement("dd", null, bankwire.reference), /*#__PURE__*/_react["default"].createElement("dt", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_wire_iban"
      })), /*#__PURE__*/_react["default"].createElement("dd", null, iban), /*#__PURE__*/_react["default"].createElement("dt", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_wire_expiration_date"
      })), /*#__PURE__*/_react["default"].createElement("dd", null, expirationDate)), !paymentStatusRefused && /*#__PURE__*/_react["default"].createElement(_quotationConfirmationPayment.CongratulationValidationContentFooter, null, /*#__PURE__*/_react["default"].createElement("h3", null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_next"
      })), /*#__PURE__*/_react["default"].createElement("ol", null, /*#__PURE__*/_react["default"].createElement("li", {
        className: "rassurance rassurance1-".concat(paymentType)
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_".concat(paymentType, "_rassurance_1"),
        values: bankwire ? {
          "0": expirationDate
        } : {}
      })), /*#__PURE__*/_react["default"].createElement("li", {
        className: "rassurance rassurance2"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_".concat(paymentType, "_rassurance_2")
      })), advance !== totalAmount && /*#__PURE__*/_react["default"].createElement("li", {
        className: "rassurance rassurance3"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_".concat(paymentType, "_rassurance_3")
      }))))), /*#__PURE__*/_react["default"].createElement(_quotationConfirmationPayment.CongratulationValidationButton, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        href: mySpaceUrl,
        outlined: true
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_confirmation_congratulation_back"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(QuotationConfirmationPayment));