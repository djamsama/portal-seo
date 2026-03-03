"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitFormSuccess = exports.submitFormFail = exports.submitForm = exports.SUBMITFORMSUCCESS = exports.SUBMITFORMFAIL = exports.SUBMITFORM = void 0;
var _reduxForm = require("redux-form");
var _unsubscribeService = _interopRequireDefault(require("../../../../../../services/impl/unsubscribeService"));
var SUBMITFORMSUCCESS = exports.SUBMITFORMSUCCESS = "MAILING/UNSUBSCRIBE/JOIN/SUBMITFORMSUCESS";
var submitFormSuccess = exports.submitFormSuccess = function submitFormSuccess(data) {
  return {
    type: SUBMITFORMSUCCESS,
    payload: {
      data: data,
      postReturnSuccess: true,
      unsubscribed: true
    }
  };
};
var SUBMITFORMFAIL = exports.SUBMITFORMFAIL = "MAILING/UNSUBSCRIBE/JOIN/SUBMITFORMFAIL";
var submitFormFail = exports.submitFormFail = function submitFormFail(data) {
  var err = {};
  if (data.content) {
    // Gestion des erreurs couplées aux champs du form
    data.content.map(function (error) {
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
var SUBMITFORM = exports.SUBMITFORM = "MAILING/UNSUBSCRIBE/JOIN/SUBMITFORM";
var submitForm = exports.submitForm = function submitForm(values, context) {
  var unsubscribeService = new _unsubscribeService["default"](context);
  return function (dispatch) {
    return unsubscribeService.register(values, context).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0 || data.responseStatus !== 200 && data.responseStatus !== 201) {
        // Un code retour différent de 200/201 ou un retour avec une liste d'erreurs est synonyme d'echec
        return dispatch(submitFormFail(data));
      }
      // Sinon c'est un succès
      return dispatch(submitFormSuccess(data));
    })["catch"](function (error) {
      if (error instanceof _reduxForm.SubmissionError) {
        // On laisse le form interpreter ses erreurs de soumission
        throw error;
      }
    });
  };
};