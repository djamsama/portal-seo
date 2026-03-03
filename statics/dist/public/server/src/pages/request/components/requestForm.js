"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reduxForm = require("redux-form");
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../components/formattedHTMLMessage"));
var _block = require("../styles/block");
var _formWrapper = require("../styles/formWrapper");
var _visitorNotRegister = _interopRequireDefault(require("./formSections/visitorNotRegister"));
var _visitorRegister = _interopRequireDefault(require("./formSections/visitorRegister"));
var _contactChoice = _interopRequireDefault(require("./formSections/contactChoice"));
var _notificationsHelper = _interopRequireDefault(require("../../../helpers/notificationsHelper"));
var _constants = require("../constants");
var _contextComponent = require("../../../components/contextComponent");
var _field = require("../helpers/field");
var _constants2 = require("../../../commons/constants");
var _cardField = _interopRequireDefault(require("../../../components/cardField"));
var _cardInput = _interopRequireDefault(require("../../../components/cardInput"));
var _trackingGaConstant = require("../../../commons/tracking/trackingGaConstant");
var _logger = _interopRequireDefault(require("../../../components/logger"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-prototype-builtins */
var RequestFormComponent = /*#__PURE__*/function (_ContextComponent) {
  function RequestFormComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, RequestFormComponent);
    _this = _callSuper(this, RequestFormComponent, [props, context]);
    _this.onSubmitStep = _this.onSubmitStep.bind(_this);
    var intl = _this.props.intl;
    _this.lastSubmit = !_this.lastSubmit && props.submitSucceeded ? (0, _camelCase["default"])(props.stepId) : false;
    _this.labelsIntl = {
      submit: intl.formatMessage({
        id: "foj_request_next_step_button"
      })
    };
    _this._formRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  (0, _inherits2["default"])(RequestFormComponent, _ContextComponent);
  return (0, _createClass2["default"])(RequestFormComponent, [{
    key: "onSubmitStep",
    value: function onSubmitStep(values) {
      var _this$props = this.props,
        submitStep = _this$props.submitStep,
        stepId = _this$props.stepId,
        intl = _this$props.intl,
        submittingStep = _this$props.submittingStep,
        requestType = _this$props.requestType,
        fields = _this$props.fields;
      var fieldComment = requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE && fields ? (0, _field.getFieldsByName)(fields, "comment") : {
        temp: ""
      };
      var stepIdFormatted = (0, _camelCase["default"])(stepId);
      var hasValues = Object.keys(values).length > 0;

      // Le form est découpé par FormSection de redux-form qui structure les valeurs hiérachiquement
      // on ne submit seulement que le stepId courant qui correspond au name du FormSection
      if (values.hasOwnProperty(stepIdFormatted) === false && hasValues) {
        throw new Error("Le StepId (".concat(stepId, ") n'est pas pr\xE9sent dans les valeurs des fields"));
      }
      var placeHolderValue = intl.formatMessage({
        id: "foj_request_form_detail_product_placeholder"
      });
      var fieldsValues = hasValues ? values[stepIdFormatted] : values;
      if (fieldsValues) {
        if (fieldsValues.comment && (0, _field.isCommentFieldDefault)(fieldsValues === null || fieldsValues === void 0 ? void 0 : fieldsValues.comment, placeHolderValue)) {
          // Le visiteur n'as pas touché au texte par defaut, on change en mettant la value par defaut calculée dans portal-front
          fieldsValues.comment = fieldComment.temp;
        }
        if (!fieldsValues.comment && requestType === _constants2.REQUEST_BUTTON_TYPE.QUOTE && stepIdFormatted === _constants.STEP_ID_FORMATED.ajaxRequestForm) {
          var _this$props2;
          if (fieldComment.temp) {
            // Le visiteur n'as pas touché au texte par defaut, on change en mettant la value par defaut calculée dans portal-front
            fieldsValues.comment = fieldComment.temp;
          } else if (((_this$props2 = this.props) === null || _this$props2 === void 0 || (_this$props2 = _this$props2.requestTrackEvent) === null || _this$props2 === void 0 ? void 0 : _this$props2.category) === _trackingGaConstant.GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY && fieldComment.placeHolder) {
            var name = this.context.initData.requestElement.name;
            if (name) {
              var hello = intl.formatMessage({
                id: "foj_request_form_detail_salutation_value"
              });
              var details = intl.formatMessage({
                id: "foj_request_form_detail_product_value"
              }, {
                "0": name.toLowerCase()
              });
              var thanks = intl.formatMessage({
                id: "foj_request_form_detail_thanks_value"
              });
              if (details) {
                fieldsValues.comment = "".concat(hello, "\r").concat(details, "\r").concat(thanks, "\r");
              }
            }
          }
        }
      }
      if (!submittingStep || submittingStep === false) {
        RequestFormComponent.scrollIntoForm(false);
        var msgs = new _notificationsHelper["default"](intl, null, "global_error_technical");
        submitStep(stepIdFormatted, fieldsValues, msgs);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        handleSubmit = _this$props3.handleSubmit,
        fields = _this$props3.fields,
        stepId = _this$props3.stepId,
        requestType = _this$props3.requestType,
        intl = _this$props3.intl,
        stepInfoLabel = _this$props3.stepInfoLabel,
        isFromChina = _this$props3.isFromChina,
        setData = _this$props3.setData,
        resetField = _this$props3.resetField,
        requestTrackEvent = _this$props3.requestTrackEvent,
        setPhoneCode = _this$props3.setPhoneCode,
        pristine = _this$props3.pristine,
        dirty = _this$props3.dirty,
        asyncValidate = _this$props3.asyncValidate,
        submitFailed = _this$props3.submitFailed,
        submittingStep = _this$props3.submittingStep,
        stepSubmitButtonLabel = _this$props3.stepSubmitButtonLabel,
        relatedCompanies = _this$props3.relatedCompanies;
      if (submitFailed === true && this._formRef) {
        RequestFormComponent.scrollIntoForm(true);
      }
      var initData = this.context.initData;
      var requestElement = initData.requestElement;
      if (!requestElement) {
        _logger["default"].error("Request without requestElement ");
        return /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Alert, {
          type: "danger",
          wording: intl.formatMessage({
            id: "global_error_technical"
          })
        });
      }
      var relatedCompaniesIds = relatedCompanies && relatedCompanies.length > 0 ? relatedCompanies.map(function (item) {
        return item.id.toString();
      }) : [];
      var DynamicFormWrapper = stepId !== _constants.CHOICE_STEP_ID && stepId !== _constants.PRICE_STEP_ID ? _formWrapper.FormWrapper : _formWrapper.FormSimpleWrapper;
      var stepIdFormatted = (0, _camelCase["default"])(stepId);
      var showGaDisplay = this.lastSubmit && this.lastSubmit !== stepIdFormatted || !this.lastSubmit;
      if (relatedCompanies) {
        this.labelsIntl.submit = intl.formatMessage({
          id: "foj_request_send_button"
        });
      } else if (stepSubmitButtonLabel) {
        this.labelsIntl.submit = stepSubmitButtonLabel;
      }
      var recoDowngradedAdvice = relatedCompanies && relatedCompanies.length > 1 ? "foj_request_company_reco_downgraded_advices" : "foj_request_company_reco_downgraded_advice";
      return /*#__PURE__*/_react["default"].createElement(_block.BlockStyled, null, /*#__PURE__*/_react["default"].createElement(DynamicFormWrapper, {
        ref: this._formRef,
        noValidate: true
      }, /*#__PURE__*/_react["default"].createElement(_reduxForm.FormSection, {
        name: stepIdFormatted
      }, stepIdFormatted === _constants.STEP_ID_FORMATED.ajaxRequestForm && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_visitorNotRegister["default"], {
        asyncValidate: asyncValidate,
        requestTrackEvent: requestTrackEvent,
        setData: setData,
        fields: fields,
        stepInfoLabel: stepInfoLabel,
        submittingStep: submittingStep,
        showGaDisplay: showGaDisplay,
        requestType: requestType
      }), relatedCompanies && relatedCompanies.length > 0 && /*#__PURE__*/_react["default"].createElement(_block.DowngradedRecoFormWrapper, null, /*#__PURE__*/_react["default"].createElement(_block.TextWrapper, null, /*#__PURE__*/_react["default"].createElement(_block.RecoTitle, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa-stack"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-lightbulb-o fa-stack-1x"
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_company_reco_downgraded_title"
      })), /*#__PURE__*/_react["default"].createElement(_block.RecoAdvice, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: recoDowngradedAdvice
      }))), /*#__PURE__*/_react["default"].createElement(_cardField["default"], {
        type: "checkbox",
        name: "requestCompanyRecoChoices",
        value: relatedCompaniesIds,
        className: "companyCard"
      }, relatedCompanies.map(function (rel, index) {
        return /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
          value: rel.id.toString(),
          key: rel.company.id
        }, /*#__PURE__*/_react["default"].createElement("div", {
          "data-cy": "recoDowngraded".concat(index)
        }, /*#__PURE__*/_react["default"].createElement(_block.LogoContainer, null, /*#__PURE__*/_react["default"].createElement("img", {
          src: rel.company.imageUrl,
          alt: "Logo"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "companyName"
        }, rel.company.name)));
      })))), (stepId === _constants.AJAX_REQUEST_VISITOR_REGISTER || stepId === _constants.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL) && /*#__PURE__*/_react["default"].createElement(_visitorRegister["default"], {
        requestTrackEvent: requestTrackEvent,
        isFromChina: isFromChina,
        stepIdFormatted: stepIdFormatted,
        stepInfoLabel: stepInfoLabel,
        fields: fields,
        intl: intl,
        setData: setData,
        resetField: resetField,
        showGaDisplay: showGaDisplay,
        setPhoneCode: setPhoneCode,
        pristine: pristine,
        dirty: dirty,
        submitFailed: submitFailed,
        submittingStep: submittingStep,
        requestType: requestType
      }), stepIdFormatted === _constants.STEP_ID_FORMATED.ajaxRequestFormContactChoice && /*#__PURE__*/_react["default"].createElement(_contactChoice["default"], (0, _extends2["default"])({
        requestTrackEvent: requestTrackEvent,
        requestType: requestType
      }, this.props, {
        key: _constants.STEP_ID_FORMATED.ajaxRequestFormContactChoice,
        handleSubmitForm: this.onSubmitStep,
        fields: fields,
        showGaDisplay: showGaDisplay
      }))), stepIdFormatted !== _constants.STEP_ID_FORMATED.ajaxRequestFormContactChoice && stepIdFormatted !== _constants.STEP_ID_FORMATED.ajaxRequestFormContactChoice && /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        isBlock: true,
        isLoading: submittingStep,
        isDisabled: submittingStep,
        "data-cy": "ValidationPortalButton",
        onClick: handleSubmit(this.onSubmitStep)
      }, relatedCompanies && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-paper-plane",
        "aria-hidden": "true",
        style: {
          marginLeft: "0px",
          marginRight: "10px"
        }
      }), this.labelsIntl.submit)));
    }
  }], [{
    key: "scrollIntoForm",
    value: function scrollIntoForm(scrollForErrors) {
      if (false && document && document.querySelector("form.form")) {
        var behaviorAnimation = "smooth";
        if (scrollForErrors === true && document.querySelector("form.form")) {
          // $FlowFixMe
          document.querySelector("form.form").scrollIntoView({
            behavior: behaviorAnimation,
            block: "start"
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: behaviorAnimation
          });
        }
      }
    }

    // $FlowFixMe IntlShape = any...
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = RequestFormComponent;