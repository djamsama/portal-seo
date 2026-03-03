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
var _semanticUiReact = require("semantic-ui-react");
var _reactIntl = require("react-intl");
var _reactRouter = require("react-router");
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _mySpaceQuotationValidation = require("../../styles/mySpaceQuotationValidation");
var _notificationsHelper = _interopRequireDefault(require("../../../../../../helpers/notificationsHelper"));
var _quotationSignatory = require("./styles/quotationSignatory");
var _modalContent = require("../../../../components/modalMySpace/modalContent");
var _constants = require("../../../../../../commons/constants");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant permettant de valider les cgvs et d'enregistrer la signature du devis
 */
var QuotationSignatory = /*#__PURE__*/function (_ContextComponent) {
  function QuotationSignatory(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, QuotationSignatory);
    _this = _callSuper(this, QuotationSignatory, [props, state]);
    _this.state = {
      cgvAcceptation: false,
      signature: "",
      signed: false
    };
    _this.notificationsHelper = new _notificationsHelper["default"](props.intl, null, "global_error_technical");
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleCgvAcceptation = _this.handleCgvAcceptation.bind(_this);
    _this.handleSigning = _this.handleSigning.bind(_this);
    _this.onWindowClose = _this.onWindowClose.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(QuotationSignatory, _ContextComponent);
  return (0, _createClass2["default"])(QuotationSignatory, [{
    key: "handleChange",
    value: function handleChange(event) {
      var signature = event.currentTarget.value;
      if (signature !== this.state.signature) {
        this.setState({
          signature: signature,
          signed: signature && signature.length !== 0 && signature.trim() !== ""
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_SIGN_FORM
      });
      if (this.props.quotationSigningDate !== "") {
        this.props.history.push("/myspace/secure/".concat(this.props.match.params.context, "-quotation/validation/").concat(this.props.match.params.quoteId, "/step3.html"));
      }
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
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.EXIT_SIGN_FORM
      });
    }
  }, {
    key: "handleCgvAcceptation",
    value: function handleCgvAcceptation(event) {
      var checkState = event.currentTarget.checked;
      this.setState({
        cgvAcceptation: checkState
      });
    }
  }, {
    key: "handleSigning",
    value: function handleSigning(event) {
      var cgvAcceptation = this.state.cgvAcceptation;
      if (!cgvAcceptation) {
        return;
      }
      var signingDTO = {
        signatory: this.state.signature,
        quoteId: this.props.match.params.quoteId,
        context: this.props.match.params.context,
        status: _constants.QUOTATION_STATUS.ACCEPTED
      };
      this.props.quotationSigning(signingDTO, this.notificationsHelper, this.props.history, this.props.intl);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        isLoading = _this$props.isLoading,
        submitFailed = _this$props.submitFailed,
        invalid = _this$props.invalid;
      var placeholder = intl.formatMessage({
        id: "foj_funnel_order_sign_signAndOrder_placeholder"
      });
      return /*#__PURE__*/_react["default"].createElement(_quotationSignatory.SignatoryCard, null, /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.MySpaceQuotationValidationTitle, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_order_signAndOrder_title"
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "calendar alternate outline"
      }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedDate, {
        month: "long",
        day: "2-digit",
        year: "numeric",
        value: new Date()
      }))), /*#__PURE__*/_react["default"].createElement(_quotationSignatory.SignatoryTextArea, {
        placeholder: placeholder,
        value: this.state.signature,
        onChange: function onChange($e) {
          return _this2.handleChange($e);
        }
      }), /*#__PURE__*/_react["default"].createElement(_quotationSignatory.SignatoryCgv, null, /*#__PURE__*/_react["default"].createElement(_modalContent.InputCheckboxElement, {
        className: "type-checkbox",
        type: "checkbox",
        onChange: this.handleCgvAcceptation
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_order_signAndOrder_cgv",
        values: {
          "0": this.props.supplierName
        }
      })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        disabled: !(this.state.cgvAcceptation && this.state.signed),
        contained: true,
        isLoading: isLoading && !submitFailed && !invalid,
        isUnclickable: !(this.state.cgvAcceptation && this.state.signed) || isLoading,
        onClick: this.handleSigning
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_order_signAndOrder_button"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "separator"
      }), /*#__PURE__*/_react["default"].createElement(_quotationSignatory.SignatoryRassurance, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "hightlight"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_funnel_order_paymentInformation_title"
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_order_paymentInformation_text"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)((0, _reactRouter.withRouter)(QuotationSignatory)));