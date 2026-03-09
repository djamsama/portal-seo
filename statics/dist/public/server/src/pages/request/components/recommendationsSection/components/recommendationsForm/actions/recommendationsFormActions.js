"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitRecommendationsForm = exports.submitRecommendationGlobalErrors = exports.submitRecommendationFormSuccess = exports.submitRecommendationFormErrors = exports.submitErrorLog = exports.formSubmitFailedAction = exports.SUBMIT_RECOMMENDATION_LOG_ERRORS = exports.SUBMIT_RECOMMENDATION_FORM_SUCCESS = exports.SUBMIT_RECOMMENDATION_FORM_ERRORS = exports.SUBMIT_RECOMMENDATION_FORM = void 0;
var _reduxForm = require("redux-form");
var _reactReduxToastr = require("react-redux-toastr");
var SUBMIT_RECOMMENDATION_FORM = exports.SUBMIT_RECOMMENDATION_FORM = "RECOMMENDATION_FORM/SUBMIT_RECOMMENDATION_FORM";
var submitRecommendationsForm = exports.submitRecommendationsForm = function submitRecommendationsForm(values) {
  return {
    type: SUBMIT_RECOMMENDATION_FORM,
    payload: {
      values: values
    }
  };
};
var SUBMIT_RECOMMENDATION_FORM_SUCCESS = exports.SUBMIT_RECOMMENDATION_FORM_SUCCESS = "REQUEST_FORM/SUBMIT_RECOMMENDATION_FORM_SUCCESS";
var submitRecommendationFormSuccess = exports.submitRecommendationFormSuccess = function submitRecommendationFormSuccess(response) {
  // maj du state
  var state = response.state,
    data = response.data;
  return {
    type: SUBMIT_RECOMMENDATION_FORM_SUCCESS,
    payload: {
      state: state,
      data: data
    }
  };
};
var SUBMIT_RECOMMENDATION_FORM_ERRORS = exports.SUBMIT_RECOMMENDATION_FORM_ERRORS = "REQUEST_FORM/SUBMIT_RECOMMENDATION_FORM_ERRORS";
var SUBMIT_RECOMMENDATION_LOG_ERRORS = exports.SUBMIT_RECOMMENDATION_LOG_ERRORS = "REQUEST_FORM/SUBMIT_RECOMMENDATION_LOG_ERRORS";
var submitRecommendationFormErrors = exports.submitRecommendationFormErrors = function submitRecommendationFormErrors(stepName, errors, msgs) {
  var errorsString = "";
  if (msgs) {
    _reactReduxToastr.toastr.error("", errorsString || msgs.getErrorMsg());
  }
  return {
    type: SUBMIT_RECOMMENDATION_FORM_ERRORS,
    payload: {
      errors: ""
    }
  };
};
var formSubmitFailedAction = exports.formSubmitFailedAction = function formSubmitFailedAction(error) {
  return {
    type: SUBMIT_RECOMMENDATION_FORM_ERRORS,
    payload: {
      errors: [{
        submitionFailed: JSON.stringify(error)
      }]
    }
  };
};
var submitRecommendationGlobalErrors = exports.submitRecommendationGlobalErrors = function submitRecommendationGlobalErrors(errors, msgs) {
  if (msgs) {
    _reactReduxToastr.toastr.error("", msgs.getErrorMsg());
  }
  return {
    type: SUBMIT_RECOMMENDATION_FORM_ERRORS,
    payload: {
      errors: errors
    }
  };
};
var submitErrorLog = exports.submitErrorLog = function submitErrorLog(FORM_NAME, err, stopSubmit) {
  return {
    type: SUBMIT_RECOMMENDATION_LOG_ERRORS,
    payload: {
      FORM_NAME: FORM_NAME,
      err: err,
      stopSubmit: stopSubmit
    }
  };
};