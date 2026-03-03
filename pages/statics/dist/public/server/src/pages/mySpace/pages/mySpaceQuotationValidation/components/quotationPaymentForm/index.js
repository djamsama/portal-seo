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
var _reduxForm = require("redux-form");
var _reactIntl = require("react-intl");
var _semanticUiReact = require("semantic-ui-react");
var _veDesignSystem = require("ve-design-system");
var _reactRouter = require("react-router");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _constants = require("../../../../../../commons/constants");
var _fieldWithError = _interopRequireDefault(require("../../../../../../components/fieldWithError"));
var _fieldWithLabel = _interopRequireDefault(require("../../../../../../components/fieldWithLabel"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _mySpaceQuotationValidation = require("../../styles/mySpaceQuotationValidation");
var _notificationsHelper = _interopRequireDefault(require("../../../../../../helpers/notificationsHelper"));
var _quotationPaymentForm = require("./styles/quotationPaymentForm");
var _fieldValidators = require("../../../../../../components/fieldWithError/validators/fieldValidators");
var _bankTransfer = _interopRequireDefault(require("../../../../../../components/svg/components/bankTransfer"));
var _cb = _interopRequireDefault(require("../../../../../../components/svg/components/cb"));
var _visa = _interopRequireDefault(require("../../../../../../components/svg/components/visa"));
var _mastercard = _interopRequireDefault(require("../../../../../../components/svg/components/mastercard"));
var _cvv = _interopRequireDefault(require("../../../../../../components/svg/components/cvv"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var popupStyle = {
  "text-align": "center",
  left: "-15px"
};
// Composant de presentation du formulaire
var QuotationPaymentForm = /*#__PURE__*/function (_ContextComponent) {
  function QuotationPaymentForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, QuotationPaymentForm);
    _this = _callSuper(this, QuotationPaymentForm, [props]);
    _this.doSubmit = _this.doSubmit.bind(_this);
    _this.ref = /*#__PURE__*/_react["default"].createRef();
    _this.state = {
      isLoading: false
    };
    return _this;
  }
  (0, _inherits2["default"])(QuotationPaymentForm, _ContextComponent);
  return (0, _createClass2["default"])(QuotationPaymentForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var googleAnalytics = this.props.googleAnalytics;
      this.ref.current.scrollIntoView();
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_PAYMENT_TYPE
      });
    }
  }, {
    key: "doSubmit",
    value: function doSubmit(values) {
      var _this$props = this.props,
        leadContext = _this$props.leadContext,
        history = _this$props.history,
        intl = _this$props.intl;
      var notificationsHelper = new _notificationsHelper["default"](intl, "", "foj_funnel_quoteDetails_pay_error");
      this.setState({
        isLoading: true
      });
      var paymentDatas = values.payment;
      if (!paymentDatas) {
        paymentDatas = {
          opened: _constants.PAYMENT_TYPE.WIRE
        };
      }
      return this.props.onSubmit(this.context, paymentDatas, this.context.initData.leadsQuoteInformations.quoteId, leadContext, history, notificationsHelper);
    }

    /**
     * Met à jour la position du curseur dans un champs
     */
  }, {
    key: "render",
    value:
    /**
     * render
     */
    function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        quoteTransaction = _this$props2.quoteTransaction,
        handleSubmit = _this$props2.handleSubmit,
        invalid = _this$props2.invalid,
        isLoading = _this$props2.isLoading,
        submitFailed = _this$props2.submitFailed;
      var advanceAmount = quoteTransaction.advance !== quoteTransaction.totalAmount ? quoteTransaction.advance : quoteTransaction.totalAmount;
      var enableCardPayment = advanceAmount <= this.context.initData.cbAmountLimit;
      var toPayFormatted = new Intl.NumberFormat(this.context.config.portal.locale, {
        style: "currency",
        currency: quoteTransaction.currency
      }).format(advanceAmount);
      return /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentWrapper, {
        ref: this.ref
      }, /*#__PURE__*/_react["default"].createElement("form", {
        id: "payment",
        onSubmit: handleSubmit(this.doSubmit)
      }, /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.Title, null, intl.formatMessage({
        id: "foj_funnel_quoteDetails_pay_title"
      })), /*#__PURE__*/_react["default"].createElement(_reduxForm.FormSection, {
        name: "payment"
      }, enableCardPayment && /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.FormSubTitle, null, intl.formatMessage({
        id: "foj_funnel_quoteDetails_pay_subtitle"
      })), /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentAccordion, null, /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentChoice, {
        className: "container"
      }, enableCardPayment && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "opened",
        component: "input",
        type: "radio",
        value: _constants.PAYMENT_TYPE.WIRE,
        className: "type-radio",
        id: "radioWire"
      }), !enableCardPayment && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "opened",
        component: "input",
        type: "radio",
        value: _constants.PAYMENT_TYPE.WIRE,
        className: "type-radio",
        id: "radioWire",
        checked: true
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "radioWire"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_pay_wire"
      })), /*#__PURE__*/_react["default"].createElement(_bankTransfer["default"], null), /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentWireHidden, {
        className: "section-wire"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_pay_wire_text",
        values: {
          "0": toPayFormatted
        }
      }), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        isLoading: isLoading && !submitFailed,
        isUnclickable: isLoading && !submitFailed,
        onClick: this.doSubmit,
        contained: true
      }, intl.formatMessage({
        id: "foj_funnel_quoteDetails_pay_wire_button"
      })))), /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentSeparator, null), enableCardPayment && /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentChoice, {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "opened",
        component: "input",
        type: "radio",
        value: "card",
        className: "type-radio",
        id: "radioCard"
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "radioCard"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_pay_card"
      })), /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentCardsLogos, null, /*#__PURE__*/_react["default"].createElement(_visa["default"], null), /*#__PURE__*/_react["default"].createElement(_mastercard["default"], null), /*#__PURE__*/_react["default"].createElement(_cb["default"], null)), /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentCardHidden, {
        className: "section-card"
      }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: "cardName",
        withWrapper: false,
        type: "text",
        name: "cardName",
        component: "input",
        className: "type-text wide",
        label: intl.formatMessage({
          id: "foj_funnel_quoteDetails_pay_card_name"
        }),
        validate: [_fieldValidators.required, _fieldValidators.maxLength50],
        maxLength: "50",
        placeholder: intl.formatMessage({
          id: "foj_funnel_quoteDetails_pay_card_name_placeholder"
        })
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: "cardNumber",
        withWrapper: false,
        type: "text",
        name: "cardNumber",
        component: "input",
        className: "type-text wide",
        label: intl.formatMessage({
          id: "foj_funnel_quoteDetails_pay_card_number"
        }),
        validate: [_fieldValidators.required, _fieldValidators.cardNumber],
        maxLength: "23",
        placeholder: intl.formatMessage({
          id: "foj_funnel_quoteDetails_pay_card_number_placeholder"
        }),
        onKeyUp: function onKeyUp($e) {
          return _this2.constructor.formatCardNumber($e);
        }
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: "cardExpiration",
        withWrapper: false,
        type: "text",
        name: "cardExpiration",
        component: "input",
        className: "type-text narrow",
        label: intl.formatMessage({
          id: "foj_funnel_quoteDetails_pay_card_expiration"
        }),
        validate: [_fieldValidators.required, _fieldValidators.expirationDate],
        maxLength: "5",
        placeholder: intl.formatMessage({
          id: "foj_funnel_quoteDetails_pay_card_expiration_placeholder"
        }),
        onKeyUp: function onKeyUp($e) {
          return _this2.constructor.formatCardExpiration($e);
        }
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "cardCVV"
      }, intl.formatMessage({
        id: "foj_funnel_quoteDetails_pay_card_cvv"
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup, {
        style: popupStyle,
        trigger: /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-info-circle"
        })
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Popup.Content, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_pay_card_check_tooltip"
      }), /*#__PURE__*/_react["default"].createElement(_cvv["default"], null)))), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        id: "cardCVV",
        withWrapper: false,
        type: "text",
        name: "cardCVV",
        component: "input",
        className: "type-text narrow",
        maxLength: "3",
        validate: [_fieldValidators.required, _fieldValidators.minLength3, _fieldValidators.maxLength3, _fieldValidators.number],
        placeholder: intl.formatMessage({
          id: "foj_funnel_quoteDetails_pay_card_cvv_placeholder"
        })
      }), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        isLoading: isLoading && !submitFailed && !invalid,
        isUnclickable: isLoading && !submitFailed && !invalid,
        onClick: handleSubmit(this.doSubmit),
        contained: true
      }, intl.formatMessage({
        id: "foj_funnel_quoteDetails_pay_card_button"
      }))))), /*#__PURE__*/_react["default"].createElement(_quotationPaymentForm.QuotationPaymentNotice, null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-lock"
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_pay_notice"
      })))));
    }
  }], [{
    key: "setCaretPosition",
    value: function setCaretPosition(elem, caretPos) {
      if (elem != null) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move("character", caretPos);
          range.select();
        } else if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(caretPos, caretPos);
        } else elem.focus();
      }
    }

    /**
     * Vérification du mois
     */
  }, {
    key: "checkValue",
    value: function checkValue(str, max) {
      var strRet = str;
      if (strRet.charAt(0) !== "0" || strRet === "00") {
        var num = parseInt(strRet, 10);
        // On ajoute 0 devant un mois qui va de 2 à 9
        strRet = num > parseInt(max.toString().charAt(0), 10) && num.toString().length === 1 ? "0".concat(num) : num.toString();
      }
      return strRet;
    }

    /**
     * Formate le champs date d'expiration
     */
  }, {
    key: "formatCardExpiration",
    value: function formatCardExpiration(event) {
      var input = event.target.value;
      var key = event.keyCode || event.charCode;

      // On ne formate pas en cas de suppression
      if (key === 8 || key === 46) {
        return false;
      }
      // On supprime les caractères non numériques
      if (/\D\/$/.test(input)) {
        input = input.substr(0, input.length - 1);
      }
      var values = input.split("/").map(function (v) {
        return v.replace(/\D/g, "");
      });
      if (values[0]) {
        values[0] = QuotationPaymentForm.checkValue(values[0], 12);
      }

      // On ajoute le "/" si besoin
      var output = values.map(function (v, i) {
        return v.length === 2 && i < 1 ? "".concat(v, "/") : v;
      });
      event.target.value = output.join("").substr(0, 5);
      return true;
    }

    /**
     * Formate le numéro de carte : espace entre les groupes de 4 et suppression des caractères non numériques
     */
  }, {
    key: "formatCardNumber",
    value: function formatCardNumber(event) {
      var caretPosition = event.target.selectionStart;
      var initialTextLength = event.target.value.length;
      var v = event.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
      var matches = v.match(/\d{4,19}/g);
      var match = matches && matches[0] || "";
      var parts = [];
      for (var i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        event.target.value = parts.join(" ");
        if (caretPosition !== -1 && caretPosition < initialTextLength) {
          QuotationPaymentForm.setCaretPosition(event.target, caretPosition);
        }
      }
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)((0, _reactRouter.withRouter)(QuotationPaymentForm)));