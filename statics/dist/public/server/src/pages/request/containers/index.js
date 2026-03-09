"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FORM_NAME = void 0;
var _reactRedux = require("react-redux");
var _reduxForm = require("redux-form");
var _reactIntl = require("react-intl");
var _requestForm = _interopRequireDefault(require("../components/requestForm"));
var _requestFormActions = require("../actions/requestFormActions");
var _verifEmailActions = require("../actions/verifEmailActions");
var _fieldPhoneActions = require("../../../actions/fieldPhoneActions");
var _constants = require("../constants");
var FORM_NAME = exports.FORM_NAME = "REQUEST_FORM";
var csrf = null;
function mapStateToProps(_ref) {
  var RequestForm = _ref.RequestForm;
  var requestType = RequestForm.requestType;
  if (!requestType) {
    requestType = _constants.REQUEST_DEFAULT;
  }
  csrf = RequestForm.csrf;
  var newProps = {
    fields: RequestForm.fields,
    stepId: RequestForm.stepId,
    stepTitle: RequestForm.stepTitle,
    requestType: requestType,
    stepSubmitUrl: RequestForm.stepSubmitUrl,
    stepInfoLabel: RequestForm.stepInfoLabel,
    stepSubmitButtonLabel: RequestForm.stepSubmitButtonLabel,
    isFromChina: RequestForm.isFromChina,
    errors: RequestForm.errors,
    oldStep: RequestForm.oldStep,
    submittingStep: RequestForm.submittingStep,
    contactChoiceFormTitle: RequestForm.contactChoiceFormTitle,
    requestTrackEventLabel: RequestForm.requestTrackEventLabel,
    requestTrackEvent: {
      category: RequestForm.requestTrackEventCategory,
      action: RequestForm.requestTrackEventAction,
      label: RequestForm.requestTrackEventLabel
    },
    count: RequestForm.count
  };
  return newProps;
}
var asyncValidate = function asyncValidate(values) {
  return (0, _verifEmailActions.onVerifEmail)({
    values: values,
    csrfToken: csrf
  });
};
function mapDispatchToProps(dispatch) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)(FORM_NAME, key, value));
    },
    resetField: function resetField(fieldName) {
      return dispatch((0, _reduxForm.clearFields)(FORM_NAME, false, false, fieldName));
    },
    setPhoneCode: function setPhoneCode(countryCode, fieldName, context, notificationsHelper) {
      return dispatch((0, _fieldPhoneActions.setPhoneCode)({
        formName: FORM_NAME,
        countryCode: countryCode,
        fieldName: fieldName,
        context: context,
        notificationsHelper: notificationsHelper
      }));
    },
    submitStep: function submitStep(stepName, values, msgs) {
      return dispatch((0, _requestFormActions.submitRequestFormRequest)(stepName, values, msgs));
    }
  };
}
var RequestFormContainerForm = (0, _reduxForm.reduxForm)({
  form: FORM_NAME,
  // a unique identifier for this form
  asyncValidate: asyncValidate,
  // asyncChangeFields: ["email", "ajaxRequestForm.email"],
  asyncBlurFields: ["email", "ajaxRequestForm.email"],
  shouldAsyncValidate: function shouldAsyncValidate(params) {
    return params.trigger === "blur" && params.syncValidationPasses;
  },
  // do not async validate on submit
  // Pour eviter de vider les champs déjà saisie sur les fields quand on une connexion dégradée
  initialized: true,
  onSubmitFail: function onSubmitFail(errors, dispatch) {
    return dispatch((0, _requestFormActions.formSubmitFailedAction)(errors));
  }
})(_requestForm["default"]);
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(RequestFormContainerForm));