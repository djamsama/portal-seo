"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FORM_NAME = void 0;
var _reactRedux = require("react-redux");
var _reduxForm = require("redux-form");
var _index = _interopRequireDefault(require("../index"));
var _constants = require("../../../../../constants");
var _requestFormActions = require("../../../../../actions/requestFormActions");
var _recommendationsFormActions = require("../actions/recommendationsFormActions");
var FORM_NAME = exports.FORM_NAME = "RECOMMENDATION_FORM";
var selector = (0, _reduxForm.formValueSelector)(FORM_NAME);
function mapStateToProps(state) {
  var RequestForm = state.RequestForm;
  var requestType = RequestForm.requestType;
  if (!requestType) {
    requestType = _constants.REQUEST_DEFAULT;
  }
  var newProps = {
    fields: RequestForm.fields,
    relatedProducts: RequestForm.relatedProducts,
    selectedProducts: selector(state, "productCards"),
    category: RequestForm.requestTrackEventCategory,
    action: RequestForm.requestTrackEventAction,
    stepId: RequestForm.stepId,
    sub: RequestForm.submitting
  };
  return newProps;
}
function mapDispatchToProps(dispatch) {
  return {
    setData: function setData(key, value) {
      return dispatch((0, _reduxForm.change)(FORM_NAME, key, value));
    },
    resetField: function resetField(fieldName) {
      return dispatch((0, _reduxForm.clearFields)(FORM_NAME, false, false, fieldName));
    },
    submitStep: function submitStep(stepName, values, msgs) {
      return dispatch((0, _requestFormActions.submitRequestFormRequest)(stepName, values, msgs));
    },
    submitRecommendation: function submitRecommendation(values) {
      return dispatch((0, _recommendationsFormActions.submitRecommendationsForm)(values));
    }
  };
}
var RecommendationsForm = (0, _reduxForm.reduxForm)({
  form: FORM_NAME,
  // a unique identifier for this form
  onSubmitFail: function onSubmitFail(errors, dispatch) {
    return dispatch((0, _recommendationsFormActions.formSubmitFailedAction)(errors));
  }
})(_index["default"]);
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RecommendationsForm);