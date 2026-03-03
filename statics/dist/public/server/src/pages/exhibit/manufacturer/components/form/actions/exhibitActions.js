"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitFormSuccess = exports.submitFormFail = exports.submitForm = exports.formSubmitFailedAction = exports.SUBMIT_EXHIBIT_FORM_ERRORS = exports.SUBMITFORMSUCCESS = exports.SUBMITFORMFAIL = exports.SUBMITFORM = exports.EXHIBIT_MANUFACTURER_FORM_NAME = void 0;
var _reduxForm = require("redux-form");
var _exhibitService = _interopRequireDefault(require("../../../../../../services/impl/exhibitService"));
var _trackingHelper = require("../../../../../../helpers/trackingHelper");
var _constants = require("../../../../../../commons/constants");
var EXHIBIT_MANUFACTURER_FORM_NAME = exports.EXHIBIT_MANUFACTURER_FORM_NAME = "exhibitForm";
var SUBMITFORMSUCCESS = exports.SUBMITFORMSUCCESS = "EXHIBIT/MANUFACTURER/JOIN/SUBMITFORMSUCESS";
var submitFormSuccess = exports.submitFormSuccess = function submitFormSuccess(data) {
  _trackingHelper.TrackingHelper.sendGaTrackingEvent({
    category: _constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_SEND_FORM_SUCCESS.CATEGORY,
    action: _constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_SEND_FORM_SUCCESS.ACTION,
    label: _constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_SEND_FORM_SUCCESS.LABEL
  });
  return {
    type: SUBMITFORMSUCCESS,
    payload: {
      data: data,
      postReturnSuccess: true
    }
  };
};
var SUBMIT_EXHIBIT_FORM_ERRORS = exports.SUBMIT_EXHIBIT_FORM_ERRORS = "EXHIBIT/SUBMIT_EXHIBIT_FORM_ERRORS";
var formSubmitFailedAction = exports.formSubmitFailedAction = function formSubmitFailedAction(error) {
  return {
    type: SUBMIT_EXHIBIT_FORM_ERRORS,
    payload: {
      errors: [{
        submitionFailed: error
      }]
    }
  };
};
var SUBMITFORMFAIL = exports.SUBMITFORMFAIL = "EXHIBIT/MANUFACTURER/JOIN/SUBMITFORMFAIL";
var submitFormFail = exports.submitFormFail = function submitFormFail(data) {
  var err = {};
  if (data.content) {
    // Gestion des erreurs couplées aux champs du form
    // eslint-disable-next-line array-callback-return
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
    return {
      type: SUBMITFORMFAIL,
      payload: {
        data: data,
        postReturnSuccess: false
      }
    };
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
var SUBMITFORM = exports.SUBMITFORM = "EXHIBIT/MANUFACTURER/JOIN/SUBMITFORM";
var submitForm = exports.submitForm = function submitForm(values, context) {
  var exhibitService = new _exhibitService["default"](context);
  return function (dispatch) {
    return exhibitService.register(values, context).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0 || data.responseStatus !== 200 && data.responseStatus !== 201) {
        // Un code retour différent de 200/201 ou un retour avec une liste d'erreurs est synonyme d'echec
        return dispatch(submitFormFail(data));
      }
      // Sinon c'est un succès
      return dispatch(submitFormSuccess(data));
    })["catch"](function (error) {
      _trackingHelper.TrackingHelper.sendGaTrackingEvent({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_SEND_FORM_IN_ERROR.CATEGORY,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_SEND_FORM_IN_ERROR.ACTION,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.FA_PAGE_SEND_FORM_IN_ERROR.LABEL
      });
      if (error instanceof _reduxForm.SubmissionError) {
        // On laisse le form interpreter ses erreurs de soumission
        throw error;
      } else {
        // Reset form
        return dispatch((0, _reduxForm.reset)("exhibitForm"));
      }
    });
  };
};