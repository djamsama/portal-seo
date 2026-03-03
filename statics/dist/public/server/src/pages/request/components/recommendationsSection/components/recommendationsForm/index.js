"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _veDesignSystem = require("ve-design-system");
var _semanticUiReact = require("semantic-ui-react");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _fieldSelect = require("../../../../../../components/fieldSelect");
var _fieldValidators = require("../../../../../../components/fieldWithError/validators/fieldValidators");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../../components/fieldWithLabel"));
var _fieldWithLabel2 = require("../../../../../../components/fieldWithLabel/styles/fieldWithLabel");
var _trackingGa = require("../../../../../../components/trackings/trackingGa");
var _notificationsHelper = _interopRequireDefault(require("../../../../../../helpers/notificationsHelper"));
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _withTracking = require("../../../../../../hoc/withTracking");
var _confirmationSections = _interopRequireDefault(require("../../../confirmationSections"));
var _field = require("../../../../helpers/field");
var _recommendationsList = _interopRequireDefault(require("./components/recommendationsList"));
var _recommendationsForm = require("./styles/recommendationsForm");
var _constants = require("../../../../constants");
var _formWrapper = require("../../../../styles/formWrapper");
var _requestBackFaqLink = _interopRequireDefault(require("../../../confirmationSections/requestBackFaqLink"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Formulaire de recomandation(redux-form)
 */
var RecommendationsForm = /*#__PURE__*/function (_ContextComponent) {
  function RecommendationsForm(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, RecommendationsForm);
    _this = _callSuper(this, RecommendationsForm, [props, context]);
    _this.lastSubmit = !_this.lastSubmit && props.submitSucceeded ? (0, _camelCase["default"])(props.stepId) : false;
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    _this.onSubmitStep = _this.onSubmitStep.bind(_this);
    _this._formRef = /*#__PURE__*/_react["default"].createRef();
    _this.state = {
      selectedProductsCount: 0
    };
    return _this;
  }
  (0, _inherits2["default"])(RecommendationsForm, _ContextComponent);
  return (0, _createClass2["default"])(RecommendationsForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        setData = _this$props.setData,
        getViewedPageId = _this$props.getViewedPageId,
        viewedPageId = _this$props.viewedPageId,
        TrackingHelper = _this$props.TrackingHelper,
        fields = _this$props.fields,
        relatedProducts = _this$props.relatedProducts;
      if (relatedProducts) {
        var fieldProjectDescription = (0, _field.getFieldsByName)(fields, "projectDescription");
        var fieldCurrencyId = (0, _field.getFieldsByName)(fields, "currencyId");
        setData("projectDescription", fieldProjectDescription.value);
        setData("currencyId", fieldCurrencyId.value);
        var _language = this.context.config.portal.language;
        var trackingInfo = this.context.initData.trackingInfo;
        if (this.pageTypeId && !viewedPageId) {
          var elementList = trackingInfo ? trackingInfo.elementList : [];
          var trackingInfoList = TrackingHelper.registerVisitContentList(elementList, "product");
          // recuperation du getViewedPageId
          getViewedPageId({
            pageTypeId: this.pageTypeId,
            elementList: trackingInfoList
          }, _language.toLowerCase());
        }
      }
    }
  }, {
    key: "onSubmitStep",
    value: function onSubmitStep(values) {
      var _this$props2 = this.props,
        submitRecommendation = _this$props2.submitRecommendation,
        intl = _this$props2.intl,
        googleAnalytics = _this$props2.googleAnalytics,
        category = _this$props2.category,
        action = _this$props2.action,
        selectedProducts = _this$props2.selectedProducts,
        submitSucceeded = _this$props2.submitSucceeded;
      if (!submitSucceeded || submitSucceeded === false) {
        if (googleAnalytics) {
          var selectedProductsCount = 0;
          if (selectedProducts) {
            selectedProductsCount = RecommendationsForm.countSelectedProduct(selectedProducts);
            if (selectedProductsCount > 0) {
              googleAnalytics.event({
                action: action,
                category: category,
                label: "Send MultiRequest Form ".concat(selectedProductsCount)
              });
            }
          }
        }
        var msgs = new _notificationsHelper["default"](intl, null, "global_error_technical");
        submitRecommendation(values, msgs);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        category = _this$props3.category,
        action = _this$props3.action,
        handleSubmit = _this$props3.handleSubmit,
        relatedProducts = _this$props3.relatedProducts,
        fields = _this$props3.fields,
        setData = _this$props3.setData,
        selectedProducts = _this$props3.selectedProducts,
        intl = _this$props3.intl,
        stepId = _this$props3.stepId,
        sub = _this$props3.sub,
        submittingStep = _this$props3.submittingStep;
      var fieldBudgetId = (0, _field.getFieldsByName)(fields, "budgetId");
      var fieldCurrencyId = (0, _field.getFieldsByName)(fields, "currencyId");
      var fieldDelayId = (0, _field.getFieldsByName)(fields, "delayId");
      var fieldQuantity = (0, _field.getFieldsByName)(fields, "quantity");
      var fieldProjectDescription = (0, _field.getFieldsByName)(fields, "projectDescription");
      var budgetDefaultText = (0, _field.getFieldsByName)(fields, "budgetDefaultText");
      var delayDefaultText = (0, _field.getFieldsByName)(fields, "delayDefaultText");
      var selectedProductsCount = 0;
      if (selectedProducts) {
        selectedProductsCount = RecommendationsForm.countSelectedProduct(selectedProducts);
      }
      var stepIdFormatted = (0, _camelCase["default"])(stepId);
      // showGaDisplay permet d'éviter le réaffichage du tracking GA suite à la soumission du formulaire
      var showGaDisplay = this.lastSubmit && this.lastSubmit !== stepIdFormatted || !this.lastSubmit;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : false;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_confirmationSections["default"], (0, _extends2["default"])({}, this.props, {
        showGaDisplay: showGaDisplay
      })), relatedProducts && relatedProducts.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.Background, null), /*#__PURE__*/_react["default"].createElement(_recommendationsForm.RecommendationsFormWrapper, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.TextWrapper, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.RecommendationTitle, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_reco_title"
      })), /*#__PURE__*/_react["default"].createElement(_recommendationsForm.RecommendationAdvice, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_reco_advice"
      }))), /*#__PURE__*/_react["default"].createElement(_recommendationsList["default"], {
        relatedProducts: relatedProducts,
        setData: setData,
        category: category,
        action: action
      }), fieldProjectDescription && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        withFieldGroup: true,
        name: fieldProjectDescription.name,
        component: "textarea",
        placeholder: "",
        label: fieldProjectDescription.label,
        isHtmlLabel: true,
        mandatory: fieldProjectDescription.mandatory,
        defaultValue: fieldProjectDescription.value,
        validate: [RecommendationsForm.validateDescription]
      })), /*#__PURE__*/_react["default"].createElement(_recommendationsForm.RecommendationMultiInput, {
        isMobile: isMobile
      }, fieldQuantity && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        name: fieldQuantity.name,
        component: "input",
        label: fieldQuantity.label,
        isHtmlLabel: true,
        mandatory: fieldQuantity.mandatory
      })), fieldBudgetId && fieldCurrencyId && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
        mandatory: fieldBudgetId.mandatory
      }, fieldBudgetId.label), /*#__PURE__*/_react["default"].createElement(_recommendationsForm.RecommendationBudgetInput, null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "budgetId",
        className: "budget",
        component: _fieldSelect.SelectField,
        options: [{
          key: "",
          text: budgetDefaultText.label,
          value: ""
        }].concat((0, _toConsumableArray2["default"])(fieldBudgetId.data.map(function (budget) {
          return {
            key: budget.value,
            text: intl.formatMessage({
              id: budget.label
            }),
            value: budget.value
          };
        }))),
        validate: [_fieldValidators.required],
        placeholder: budgetDefaultText.label
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "currencyId",
        className: "currency",
        component: _fieldSelect.SelectField,
        options: fieldCurrencyId.data.map(function (currency) {
          return {
            key: currency.value,
            text: currency.label,
            value: currency.value
          };
        }),
        style: {
          minWidth: "7em"
        }
      }))), fieldDelayId && fieldDelayId.data && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel2.FieldLabel, {
        mandatory: fieldDelayId.mandatory
      }, fieldDelayId.label), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "delayId",
        component: _fieldSelect.SelectField,
        options: [{
          key: "",
          text: delayDefaultText.label,
          value: ""
        }].concat((0, _toConsumableArray2["default"])(fieldDelayId.data.map(function (delay) {
          return {
            key: delay.value,
            text: intl.formatMessage({
              id: delay.label
            }),
            value: delay.value
          };
        }))),
        placeholder: delayDefaultText.label,
        validate: [_fieldValidators.required],
        "data-cy": "delayId"
      }))), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        isBlock: true,
        isDisabled: selectedProductsCount < 1 || submittingStep || sub === true,
        isLoading: submittingStep || sub === true,
        "data-cy": "ValidationPortalButtonRecommandationForm",
        onClick: selectedProductsCount > 0 && handleSubmit(this.onSubmitStep)
      }, selectedProductsCount !== 0 && intl.formatMessage({
        id: "foj_request_reco_button".concat(selectedProductsCount === 1 ? "_singular" : "")
      }, {
        "0": selectedProductsCount
      }), selectedProductsCount === 0 && intl.formatMessage({
        id: "foj_request_reco_button_empty"
      }))), showGaDisplay && /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaDisplay, {
        category: category,
        action: action,
        label: "Show Reco MultiRequest ".concat(relatedProducts.length),
        value: 0
      })), !relatedProducts && stepId === _constants.ROUTE_LANDING_PAGE_RECOMMENDATIONS && /*#__PURE__*/_react["default"].createElement(_formWrapper.FormWrapperStyled, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.ConfirmationWhiteBlock, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        stackable: true,
        centered: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridRow, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.NoRecoWrapper, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.NoRecoIconWrapper, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.FaExclamationBox, null)), /*#__PURE__*/_react["default"].createElement(_recommendationsForm.NoRecoMessageBlock, null, /*#__PURE__*/_react["default"].createElement(_recommendationsForm.TxtNoReco, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_reco_no_products"
      }))))))), /*#__PURE__*/_react["default"].createElement(_requestBackFaqLink["default"], {
        oldStep: stepId,
        requestTrackEvent: {
          category: category,
          action: action
        },
        requestConfirmation: true
      })));
    }
  }], [{
    key: "countSelectedProduct",
    value: function countSelectedProduct(selectedProductsCount) {
      var count = 0;
      Object.entries(selectedProductsCount).forEach(function (val) {
        if (val[1] === true) {
          count += 1;
        }
      });
      return count;
    }
  }, {
    key: "validateDescription",
    value: function validateDescription(value, allValues, props) {
      var fieldProjectDescription = (0, _field.getFieldsByName)(props.fields, "projectDescription");
      if (value && fieldProjectDescription.placeHolder === value.trim()) {
        return {
          id: "foj_request_reco_project_detail_error",
          values: {}
        };
      }
      return undefined;
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)((0, _withGoogleAnalytics.withGoogleAnalytics)((0, _withTracking.WithTracking)(RecommendationsForm)));