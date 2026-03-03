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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../components/contextComponent");
var _pageHeaderLessLayout = _interopRequireDefault(require("../../../../layouts/pageHeaderLessLayout"));
var _logo = _interopRequireDefault(require("../../../../components/logo"));
var _index = _interopRequireDefault(require("./components/gridQuotationValidation/index"));
var _quotationSignatory = _interopRequireDefault(require("./containers/quotationSignatory"));
var _quotationOverview = _interopRequireDefault(require("./containers/quotationOverview"));
var _quotationAddress = _interopRequireDefault(require("./components/quotationAddress"));
var _index2 = _interopRequireDefault(require("./components/stepQuotationValidation/index"));
var _index3 = _interopRequireDefault(require("./containers/quotationValidationForm/index"));
var _index4 = _interopRequireDefault(require("./containers/quotationPaymentForm/index"));
var _QuotationConfirmation = _interopRequireDefault(require("./containers/QuotationConfirmation"));
var _quotationConfirmationPayment = _interopRequireDefault(require("./containers/quotationConfirmationPayment"));
var _quoteInformation = _interopRequireDefault(require("./components/quoteInformation"));
var _quoteRassurance = _interopRequireDefault(require("./components/quoteRassurance"));
var _quoteSecured = _interopRequireDefault(require("./components/quoteSecured"));
var _constants = require("./constants");
var _mySpaceQuotationValidation = require("./styles/mySpaceQuotationValidation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant parent du tunnel de conversion.
 */
var MySpaceQuotationValidation = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceQuotationValidation(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceQuotationValidation);
    _this = _callSuper(this, MySpaceQuotationValidation, [props]);
    var match = props.match;
    var _match$params = match.params,
      _match$params$step = _match$params.step,
      step = _match$params$step === void 0 ? _constants.STEPS_NAME[1] : _match$params$step,
      context = _match$params.context;
    _this.mappingComponentsStep = _this.mappingComponentsStep.bind(_this);
    _this.state = {
      step: step || _constants.STEPS_NAME[1],
      leadContext: context
    };
    return _this;
  }

  // Map qui permet de definir ou placer les composants du tunnel sur la grille.
  (0, _inherits2["default"])(MySpaceQuotationValidation, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceQuotationValidation, [{
    key: "mappingComponentsStep",
    value: function mappingComponentsStep() {
      var openDeliveryAdress = false;
      if (this.props.location.state && this.props.location.state.openDeliveryAdress) {
        openDeliveryAdress = this.props.location.state.openDeliveryAdress;
      }
      return {
        step1: {
          top: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
          left: /*#__PURE__*/_react["default"].createElement(_index3["default"], {
            leadContext: this.state.leadContext,
            openDeliveryAdress: openDeliveryAdress
          }),
          right: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)
        },
        step2: {
          top: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
          left: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.QuotationOverviewContentDiv, null, /*#__PURE__*/_react["default"].createElement(_quotationOverview["default"], {
            validated: false,
            withTitle: true,
            open: true,
            leadContext: this.state.leadContext
          })), /*#__PURE__*/_react["default"].createElement(_quotationAddress["default"], {
            editable: true
          })),
          right: /*#__PURE__*/_react["default"].createElement(_quotationSignatory["default"], null)
        },
        step2Payment: {
          top: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
          left: /*#__PURE__*/_react["default"].createElement(_index4["default"], {
            leadContext: this.state.leadContext,
            quoteTransaction: this.context.initData.leadsQuoteInformations.quoteTransactionDTO
          }),
          right: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_quoteInformation["default"], {
            quoteAmount: this.context.initData.leadsQuoteInformations.quoteTransactionDTO.quoteAmount,
            advance: this.context.initData.leadsQuoteInformations.quoteTransactionDTO.advance,
            currency: this.context.initData.leadsQuoteInformations.quoteTransactionDTO.currency,
            totalAmount: this.context.initData.leadsQuoteInformations.quoteTransactionDTO.totalAmount
          }), /*#__PURE__*/_react["default"].createElement(_quoteSecured["default"], null), /*#__PURE__*/_react["default"].createElement(_quoteRassurance["default"], null)),
          footer: /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.MySpaceQuotationValidationBottom, null, /*#__PURE__*/_react["default"].createElement("img", {
            src: "https://www.mangopay.com/terms/powered-by-mangopay.png",
            alt: "MangoPay",
            width: "266",
            height: "26"
          }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
            id: "foj_funnel_quoteDetails_pay_cgu",
            tagName: "div"
          }))
        },
        step3: {
          top: /*#__PURE__*/_react["default"].createElement(_QuotationConfirmation["default"], {
            leadsQuoteInformations: this.context.initData.leadsQuoteInformations
          }),
          left: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
          right: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)
        },
        step3Payment: {
          top: /*#__PURE__*/_react["default"].createElement(_quotationConfirmationPayment["default"], {
            leadsQuoteInformations: this.context.initData.leadsQuoteInformations
          }),
          left: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
          right: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
          footer: /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.MySpaceQuotationValidationBottom, null, /*#__PURE__*/_react["default"].createElement("img", {
            src: "https://www.mangopay.com/terms/powered-by-mangopay.png",
            alt: "MangoPay",
            width: "266",
            height: "26"
          }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
            id: "foj_funnel_quoteDetails_pay_cgu",
            tagName: "div"
          }))
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        match = _this$props.match,
        intl = _this$props.intl;
      var _match$params2 = match.params,
        context = _match$params2.context,
        _match$params2$lang = _match$params2.lang,
        lang = _match$params2$lang === void 0 ? "" : _match$params2$lang,
        _match$params2$quoteI = _match$params2.quoteId,
        quoteId = _match$params2$quoteI === void 0 ? 1 : _match$params2$quoteI,
        step = _match$params2.step;
      var config = this.context.config;
      var mapComponents = this.mappingComponentsStep();
      var componentsLeft = mapComponents[step].left;
      var componentsRight = mapComponents[step].right;
      var componentsTop = mapComponents[step].top;
      var customFooter = mapComponents[step].footer;
      var componentsClassName = step.toString();
      var elementsSteps = [{
        id: "1",
        label: intl.formatMessage({
          id: "foj_funnel_buyerDetails_title"
        }),
        active: step === _constants.STEPS_NAME[1]
      }, {
        id: "2",
        label: intl.formatMessage({
          id: "foj_funnel_order_title"
        }),
        active: step.startsWith(_constants.STEPS_NAME[2])
      }, {
        id: "3",
        label: intl.formatMessage({
          id: "foj_funnel_confirmation_title"
        }),
        active: step.startsWith(_constants.STEPS_NAME[3])
      }];
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_pageHeaderLessLayout["default"], {
        customFooter: customFooter,
        footerFreeTax: false,
        footerMode: customFooter ? "custom" : "minimal"
      }, /*#__PURE__*/_react["default"].createElement(_mySpaceQuotationValidation.MySpaceQuotationValidationWrapper, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Row, {
        centered: true
      }, /*#__PURE__*/_react["default"].createElement(_logo["default"], {
        site: config.portal.site,
        floating: true
      }))), /*#__PURE__*/_react["default"].createElement(_index2["default"], {
        elements: elementsSteps
      }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
        componentsClassName: componentsClassName,
        componentsTop: componentsTop,
        componentsLeft: componentsLeft,
        componentsRight: componentsRight
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceQuotationValidation);