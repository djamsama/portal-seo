"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitRequestGlobalErrors = exports.submitRequestFormSuccess = exports.submitRequestFormRequest = exports.submitRequestFormLastStepSuccess = exports.submitRequestFormErrors = exports.submitErrorLog = exports.formSubmitFailedAction = exports.SUBMIT_REQUEST_LOG_ERRORS = exports.SUBMIT_REQUEST_FORM_SUCCESS = exports.SUBMIT_REQUEST_FORM_REQUEST = exports.SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS = exports.SUBMIT_REQUEST_FORM_ERRORS = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _reduxForm = require("redux-form");
var _reactReduxToastr = require("react-redux-toastr");
var _constants = require("../constants");
var SUBMIT_REQUEST_FORM_REQUEST = exports.SUBMIT_REQUEST_FORM_REQUEST = "REQUEST_FORM/SUBMIT_REQUEST_FORM_REQUEST";
var submitRequestFormRequest = exports.submitRequestFormRequest = function submitRequestFormRequest(stepName, values, msgs) {
  return {
    type: SUBMIT_REQUEST_FORM_REQUEST,
    payload: {
      stepName: stepName,
      values: values,
      msgs: msgs
    }
  };
};
var SUBMIT_REQUEST_FORM_SUCCESS = exports.SUBMIT_REQUEST_FORM_SUCCESS = "REQUEST_FORM/SUBMIT_REQUEST_FORM_SUCCESS";
var submitRequestFormSuccess = exports.submitRequestFormSuccess = function submitRequestFormSuccess(response) {
  // maj du state
  var state = response.state,
    data = response.data;
  return {
    type: SUBMIT_REQUEST_FORM_SUCCESS,
    payload: {
      state: state,
      data: data
    }
  };
};
var SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS = exports.SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS = "REQUEST_FORM/SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS";
var submitRequestFormLastStepSuccess = exports.submitRequestFormLastStepSuccess = function submitRequestFormLastStepSuccess(response) {
  var state = response.state,
    data = response.data;
  return {
    type: SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS,
    payload: {
      state: state,
      data: data
    }
  };
};
var SUBMIT_REQUEST_FORM_ERRORS = exports.SUBMIT_REQUEST_FORM_ERRORS = "REQUEST_FORM/SUBMIT_REQUEST_FORM_ERRORS";
var SUBMIT_REQUEST_LOG_ERRORS = exports.SUBMIT_REQUEST_LOG_ERRORS = "REQUEST_FORM/SUBMIT_REQUEST_LOG_ERRORS";
var submitRequestFormErrors = exports.submitRequestFormErrors = function submitRequestFormErrors(stepName, errors, msgs) {
  var err = (0, _defineProperty2["default"])({}, stepName, {});
  var errorsString = "";
  // eslint-disable-next-line array-callback-return
  errors.map(function (error) {
    // Dans le cas ou l'on a le field city en error on mets l'erreur sur le champs sur searchCity pour
    // mapper le bon champ par rapport à l'erreur
    var errorKey = error.attributeNames[0] === "city" ? "searchCity" : error.attributeNames[0];
    var errorLabel = error.defaultLabel;
    errorsString += " ".concat(errorLabel);
    // err[stepName][errorKey] = { id: errorKey, values: errorLabel };
    err[stepName][errorKey] = {
      id: errorLabel
    };
  });
  if (Object.keys(err[stepName]).length > 0 && stepName !== _constants.STEP_ID_FORMATED.ajaxRequestFormContactChoice) {
    throw new _reduxForm.SubmissionError(err);
  }
  // Le formulaire formatChoice n'a plus d'input,
  // pour indiquer a l'utilisateur qu'il y a une erreur on l'affiche
  // on utilise les alertes
  if (msgs) {
    _reactReduxToastr.toastr.error("", errorsString || msgs.getErrorMsg());
  }
  return {
    type: SUBMIT_REQUEST_FORM_ERRORS,
    payload: {
      errors: err
    }
  };
};
var formSubmitFailedAction = exports.formSubmitFailedAction = function formSubmitFailedAction(error) {
  return {
    type: SUBMIT_REQUEST_FORM_ERRORS,
    payload: {
      errors: [{
        submitionFailed: JSON.stringify(error)
      }]
    }
  };
};
var submitRequestGlobalErrors = exports.submitRequestGlobalErrors = function submitRequestGlobalErrors(errors, msgs) {
  if (msgs) {
    _reactReduxToastr.toastr.error("", msgs.getErrorMsg());
  }
  return {
    type: SUBMIT_REQUEST_FORM_ERRORS,
    payload: {
      errors: errors
    }
  };
};

// eslint-disable-next-line no-unused-vars
var submitErrorLog = exports.submitErrorLog = function submitErrorLog(FORM_NAME, err, stopSubmit) {
  return {
    type: SUBMIT_REQUEST_LOG_ERRORS,
    payload: {
      err: err
    }
  };
};