"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitFormSuccess = exports.submitFormFail = exports.submitForm = exports.signinSuccess = exports.clearForm = exports.SUBMITFORMSUCCESS = exports.SUBMITFORMFAIL = exports.SUBMITFORM = exports.CLEARFORM = void 0;
var _reduxForm = require("redux-form");
var _mySpaceAccountService = _interopRequireDefault(require("../../../../../services/impl/mySpaceAccountService"));
var _myspaceLinkActions = require("../../../../../actions/myspaceLinkActions");
var CLEARFORM = exports.CLEARFORM = "MYSPACE/SIGNIN/CLEARFORM";
var clearForm = exports.clearForm = function clearForm(data) {
  return {
    type: CLEARFORM,
    payload: {
      data: data
    }
  };
};
var SUBMITFORM = exports.SUBMITFORM = "MYSPACE/SIGNIN/SUBMITFORM";
var submitForm = exports.submitForm = function submitForm(values, context, notificationsHelper) {
  var mySpaceAccountService = new _mySpaceAccountService["default"](context);
  return function (dispatch) {
    return mySpaceAccountService.createAccount(values, context).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0 || data.responseStatus !== 200 && data.responseStatus !== 201) {
        // Un code retour différent de 200/201 ou un retour avec une liste d'erreurs est synonyme d'echec
        return dispatch(submitFormFail(data, notificationsHelper.getErrorMsg()));
      }
      // Sinon c'est un succès
      dispatch(submitFormSuccess(data, notificationsHelper.getSuccessMsg()));
      return dispatch(signinSuccess(data));
    })["catch"](function (error) {
      if (error.errors) {
        // Gestion des erreurs globales
        throw new _reduxForm.SubmissionError(error.errors);
      }
    });
  };
};
var signinSuccess = exports.signinSuccess = function signinSuccess(data) {
  return {
    type: _myspaceLinkActions.MYSPACE_LINK_SIGNIN_SUCCESS,
    payload: {
      data: data
    }
  };
};
var SUBMITFORMSUCCESS = exports.SUBMITFORMSUCCESS = "MYSPACE/SIGNIN/SUBMITFORMSUCESS";
var submitFormSuccess = exports.submitFormSuccess = function submitFormSuccess(data, successMsg) {
  return {
    type: SUBMITFORMSUCCESS,
    payload: {
      data: data
    }
  };
};
var SUBMITFORMFAIL = exports.SUBMITFORMFAIL = "MYSPACE/SIGNIN/SUBMITFORMFAIL";
var submitFormFail = exports.submitFormFail = function submitFormFail(data, errorMsg) {
  var err = {};
  if (data.content) {
    // Gestion des erreurs couplées aux champs du form
    data.content.map(function (error, index) {
      err[error.field] = {
        id: error.code,
        values: error.values
      };
    });
  } else if (data.errors) {
    // Gestion des erreurs globales
    err._error = data.errors.reduce(function (x, y) {
      return "".concat(x, "</br>").concat(y);
    });
  }
  // On envoie les erreurs au form
  if (Object.keys(err).length > 0) {
    throw new _reduxForm.SubmissionError(err);
  }
  return {
    type: SUBMITFORMFAIL,
    payload: {
      data: data
    }
  };
};