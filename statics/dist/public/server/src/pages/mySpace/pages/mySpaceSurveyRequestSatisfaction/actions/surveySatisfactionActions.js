"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitSurveyForm = exports.submitFormSucces = exports.submitFormFailure = exports.SUBMIT_SATISFACTION_FORM_SUCCES = exports.SUBMIT_SATISFACTION_FORM_FAILURE = exports.SUBMIT_SATISFACTION_FORM = void 0;
var _reactReduxToastr = require("react-redux-toastr");
var _reduxForm = require("redux-form");
var _surveySatisfactionService = _interopRequireDefault(require("../../../../../services/impl/surveySatisfactionService"));
var SUBMIT_SATISFACTION_FORM_SUCCES = exports.SUBMIT_SATISFACTION_FORM_SUCCES = "SUBMIT_SATISFACTION_FORM_SUCCES";
var submitFormSucces = exports.submitFormSucces = function submitFormSucces(data) {
  return {
    type: SUBMIT_SATISFACTION_FORM_SUCCES,
    payload: {
      data: data
    }
  };
};
var SUBMIT_SATISFACTION_FORM_FAILURE = exports.SUBMIT_SATISFACTION_FORM_FAILURE = "SUBMIT_SATISFACTION_FORM_FAILURE";
var submitFormFailure = exports.submitFormFailure = function submitFormFailure(data) {
  return {
    type: SUBMIT_SATISFACTION_FORM_FAILURE,
    payload: {
      data: data
    }
  };
};
var SUBMIT_SATISFACTION_FORM = exports.SUBMIT_SATISFACTION_FORM = "SUBMIT_SATISFACTION_FORM";
var submitSurveyForm = exports.submitSurveyForm = function submitSurveyForm(values, thanksSurveyPageUrl, leadContext, notificationsHelper) {
  var surveySatisfactionService = new _surveySatisfactionService["default"]();
  var tokenId = values.leadTokenId;
  var rating = values.qualityResponseRating;
  var url = "".concat(thanksSurveyPageUrl, "?tokenId=").concat(tokenId, "&rating=").concat(rating);
  return function (dispatch) {
    return surveySatisfactionService.saveSurveyRequest(values, leadContext).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0 || data.responseStatus !== 200) {
        _reactReduxToastr.toastr.error(notificationsHelper.getErrorMsg());
        dispatch(submitFormFailure(data));
      }
      dispatch(submitFormSucces(data));
      document.location.href = url;
    })["catch"](function (error) {
      if (error.errors) {
        // Gestion des erreurs globales
        throw new _reduxForm.SubmissionError(error.errors);
      }
    });
  };
};