"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _reactRouter = require("react-router");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _constants = require("../../../../../../commons/constants");
var _contextComponent = require("../../../../../../components/contextComponent");
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _quotationValidationForm = require("./styles/quotationValidationForm");
var _mySpaceQuotationValidation = require("../../styles/mySpaceQuotationValidation");
var _notificationsHelper = _interopRequireDefault(require("../../../../../../helpers/notificationsHelper"));
var _portalToColRight = _interopRequireDefault(require("../portalToColRight"));
var _addressForm = _interopRequireDefault(require("./components/addressForm"));
var _quoteInformation = _interopRequireDefault(require("../quoteInformation"));
var _quoteRassurance = _interopRequireDefault(require("../quoteRassurance"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable no-underscore-dangle */ /* eslint-disable react/sort-comp */
var FormSubTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1j2zcpz-0"
})(["font-weight:700;margin-bottom:20px;font-size:1.167em;&.Delivery{padding-top:20px;}"]);
// Composant de presentation du formulaire
var QuotationValidationForm = /*#__PURE__*/function (_ContextComponent) {
  function QuotationValidationForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, QuotationValidationForm);
    _this = _callSuper(this, QuotationValidationForm, [props]);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.changeSameDeliveryAddress = _this.changeSameDeliveryAddress.bind(_this);
    _this.onWindowClose = _this.onWindowClose.bind(_this);
    _this.notificationsHelper = new _notificationsHelper["default"](props.intl, "fo_myspace_account_lastNameModificationNotificationSuccess", "fo_myspace_account_modificationNotificationFailed");
    _this.state = {
      billingCity: "",
      deliveryCity: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(QuotationValidationForm, _ContextComponent);
  return (0, _createClass2["default"])(QuotationValidationForm, [{
    key: "onWindowClose",
    value: function onWindowClose() {
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.EXIT_ADRESS_FORM
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        load = _this$props.load,
        openDeliveryAdress = _this$props.openDeliveryAdress,
        googleAnalytics = _this$props.googleAnalytics;
      var initData = this.context.initData;
      var leadsQuoteInformations = initData.leadsQuoteInformations;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.BUYING_FUNNEL,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_ADRESS_FORM
      });

      // Si on a deja de data remplie dans le store.
      if (this.props.leadsQuoteInformations != null) {
        leadsQuoteInformations = this.props.leadsQuoteInformations;
      }
      if (openDeliveryAdress === true) {
        // Adresse de facturation par defaut
        leadsQuoteInformations.sameDeliveryAddress = false;
      } else if (leadsQuoteInformations.deliveryAddress === null) leadsQuoteInformations.sameDeliveryAddress = true;
      if (leadsQuoteInformations && leadsQuoteInformations.billingAddress) {
        load({
          leadsQuoteInformations: leadsQuoteInformations
        });
        if (leadsQuoteInformations.billingAddress.city != null && leadsQuoteInformations.chinaBuyer != true) {
          // Initialisation du champs de la ville de l'utilisateur.
          // this._geoSuggest.update(city);
          this.setState({
            billingCity: leadsQuoteInformations.billingAddress.city
          });
        }
        if (leadsQuoteInformations.deliveryAddress && leadsQuoteInformations.deliveryAddress.city != null && leadsQuoteInformations.chinaBuyer != true) {
          this.setState({
            deliveryCity: leadsQuoteInformations.deliveryAddress.city
          });
        }
      }
      window.addEventListener("beforeunload", this.onWindowClose);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("beforeunload", this.onWindowClose);
    }
  }, {
    key: "changeSameDeliveryAddress",
    value: function changeSameDeliveryAddress() {
      var _this$props2 = this.props,
        sameDeliveryAddress = _this$props2.sameDeliveryAddress,
        leadsQuoteInformations = _this$props2.leadsQuoteInformations,
        setData = _this$props2.setData;
      if (!sameDeliveryAddress) {
        setData("deliveryAddress", leadsQuoteInformations.billingAddress);
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(values) {
      // On copy eventuellement l'adresse de facturation dans l'adresse de livraison si pas renseignée
      var _this$props3 = this.props,
        sameDeliveryAddress = _this$props3.sameDeliveryAddress,
        setData = _this$props3.setData,
        leadContext = _this$props3.leadContext,
        history = _this$props3.history,
        intl = _this$props3.intl;
      var dAddress = _objectSpread({}, values.billingAddress);
      if (sameDeliveryAddress) {
        values.deliveryAddress = dAddress;
      } else if (values.deliveryAddress.id === values.billingAddress.id) {
        // Il faut supprimer l'id en pour ne pas genere d'erreur en cas de tentative d'enregistrement de cette adresse en base.
        dAddress.id = null;
        values.deliveryAddress = dAddress;
      }
      var notificationsHelper = new _notificationsHelper["default"](intl, "", "global_error_technical");
      return this.props.onSubmit(values, this.context, leadContext, history, notificationsHelper);
    }

    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        handleSubmit = _this$props4.handleSubmit,
        intl = _this$props4.intl,
        isLoading = _this$props4.isLoading,
        sameDeliveryAddress = _this$props4.sameDeliveryAddress,
        setData = _this$props4.setData,
        setPhoneCode = _this$props4.setPhoneCode,
        leadsQuoteInformations = _this$props4.leadsQuoteInformations,
        cgu = _this$props4.cgu,
        submitFailed = _this$props4.submitFailed,
        invalid = _this$props4.invalid;
      var _this$state = this.state,
        billingCity = _this$state.billingCity,
        deliveryCity = _this$state.deliveryCity;
      var _this$context$initDat = this.context.initData.leadsQuoteInformations.quoteTransactionDTO,
        quoteAmount = _this$context$initDat.quoteAmount,
        advance = _this$context$initDat.advance,
        currency = _this$context$initDat.currency,
        totalAmount = _this$context$initDat.totalAmount;
      var label = {
        title: intl.formatMessage({
          id: "foj_funnel_buyerDetails_title"
        }),
        billingAdress: intl.formatMessage({
          id: "foj_funnel_buyerDetails_billingAdress"
        }),
        deliveryAdress: intl.formatMessage({
          id: "foj_funnel_buyerDetails_deliveryAdress"
        }),
        firstName: intl.formatMessage({
          id: "foj_funnel_buyerDetails_firstName"
        }),
        lastName: intl.formatMessage({
          id: "foj_funnel_buyerDetails_lastName"
        }),
        company: intl.formatMessage({
          id: "foj_funnel_buyerDetails_company"
        }),
        tva: intl.formatMessage({
          id: "foj_funnel_buyerDetails_tva"
        }),
        adress: intl.formatMessage({
          id: "foj_funnel_buyerDetails_adress"
        }),
        additionalAdress: intl.formatMessage({
          id: "foj_funnel_buyerDetails_additionalAdress"
        }),
        zipCode: intl.formatMessage({
          id: "foj_funnel_buyerDetails_zipCode"
        }),
        city: intl.formatMessage({
          id: "foj_funnel_buyerDetails_city"
        }),
        country: intl.formatMessage({
          id: "foj_funnel_buyerDetails_country"
        }),
        phone: intl.formatMessage({
          id: "foj_funnel_buyerDetails_phone"
        }),
        checkbox: intl.formatMessage({
          id: "foj_funnel_buyerDetails_checkbox"
        }),
        product: intl.formatMessage({
          id: "foj_funnel_buyerDetails_product"
        }),
        labelContinue: intl.formatMessage({
          id: "foj_funnel_buyerDetails_continue"
        })
      };
      return /*#__PURE__*/_react["default"].createElement(_quotationValidationForm.QuotationValidationWrapper, null, /*#__PURE__*/_react["default"].createElement("form", {
        id: "account"
        // ref={el => (this.form = el)}
        ,
        onSubmit: handleSubmit(this.onSubmit)
      }, /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.Title, null, label.title), /*#__PURE__*/_react["default"].createElement(_reduxForm.FormSection, {
        name: "billingAddress"
      }, /*#__PURE__*/_react["default"].createElement(FormSubTitle, null, label.billingAdress), /*#__PURE__*/_react["default"].createElement(_addressForm["default"], {
        prefix: "billingAddress",
        setData: setData,
        label: label,
        city: billingCity,
        setPhoneCode: setPhoneCode,
        leadsQuoteInformations: leadsQuoteInformations
      })), /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "delivery"
      }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "sameDeliveryAddress",
        component: "input",
        type: "checkbox",
        className: "type-radio"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_funnel_buyerDetails_checkbox"
      })))), sameDeliveryAddress !== true && /*#__PURE__*/_react["default"].createElement(_reduxForm.FormSection, {
        name: "deliveryAddress"
      }, /*#__PURE__*/_react["default"].createElement(FormSubTitle, {
        className: "Delivery"
      }, label.deliveryAdress), /*#__PURE__*/_react["default"].createElement(_addressForm["default"], {
        prefix: "deliveryAddress",
        setData: setData,
        label: label,
        city: deliveryCity,
        setPhoneCode: setPhoneCode,
        leadsQuoteInformations: leadsQuoteInformations
      }))), /*#__PURE__*/_react["default"].createElement(_portalToColRight["default"], null, /*#__PURE__*/_react["default"].createElement(_quoteInformation["default"], {
        quoteAmount: quoteAmount,
        advance: advance,
        currency: currency,
        totalAmount: totalAmount
      }), /*#__PURE__*/_react["default"].createElement("form", {
        id: "cguForm"
      }, /*#__PURE__*/_react["default"].createElement(_quotationValidationForm.CGU, null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "cgu",
        component: "input",
        type: "checkbox",
        className: "type-radio",
        id: "cguField"
      }), /*#__PURE__*/_react["default"].createElement(_quotationValidationForm.CGUMessage, null, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "cguField"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_funnel_quoteDetails_cgu"
      }))))), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        contained: true,
        isLoading: isLoading && !submitFailed && !invalid,
        isUnclickable: isLoading && !submitFailed && !invalid || cgu !== true,
        onClick: handleSubmit(this.onSubmit)
      }, label.labelContinue), /*#__PURE__*/_react["default"].createElement(_quoteRassurance["default"], null)));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)((0, _reactRouter.withRouter)(QuotationValidationForm)));