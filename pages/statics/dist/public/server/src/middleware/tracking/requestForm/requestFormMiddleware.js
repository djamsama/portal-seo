"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gaMiddleware = gaMiddleware;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var _trackingHelper = require("../../../helpers/trackingHelper");
var _requestFormActions = require("../../../pages/request/actions/requestFormActions");
var _constants = require("../../../pages/request/constants");
var _recommendationsFormActions = require("../../../pages/request/components/recommendationsSection/components/recommendationsForm/actions/recommendationsFormActions");
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */function gaMiddleware(store) {
  return function (next) {
    return function (action) {
      try {
        if (action) {
          // envoie des events ga apres une soumission d'un formulaire de demande avec success
          var state = store.getState();
          var RequestForm = state.RequestForm;
          var count = null;
          if (RequestForm) {
            count = RequestForm.count;
            var counter = _trackingHelper.TrackingHelper.count(RequestForm.stepId, count);
            var stepIdFormatted = "";
            var errors = {
              emptyFields: "",
              errorFields: ""
            };
            switch (action.type) {
              case _requestFormActions.SUBMIT_REQUEST_FORM_SUCCESS:
              case _requestFormActions.SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS:
                count = RequestForm.count;
                stepIdFormatted = (0, _camelCase["default"])(RequestForm.stepId);
                if (stepIdFormatted === _constants.AJAX_REQUEST_FORM_FORMATED && (
                // Step 1
                RequestForm.requestType === _constants.REQUEST_PRICE_LIST ||
                //  des demandes voir les tarifs
                RequestForm.requestType === _constants.REQUEST_CONTACT_DETAIL) // des demandes voir les coordonnées)
                ) {
                  stepIdFormatted = _constants.REQUEST_LOGIN_FORM;
                }
                var label = _constants.GA_LABELS[stepIdFormatted].send;
                if (RequestForm.requestTrackEventLabel) {
                  // On a un label particulier on le met
                  label = RequestForm.requestTrackEventLabel;
                  if (label && typeof label === "string" && label.toLocaleLowerCase().trim().substr(0, 4) === "show") {
                    // c'est un envoi pas un display
                    label = label.replace(/show/i, "validate");
                  }
                }
                _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                  action: RequestForm.requestTrackEventAction,
                  category: RequestForm.requestTrackEventCategory,
                  label: label,
                  value: counter.now
                });
                break;
              case _requestFormActions.SUBMIT_REQUEST_FORM_ERRORS:
              case _requestFormActions.SUBMIT_REQUEST_LOG_ERRORS:
                stepIdFormatted = (0, _camelCase["default"])(RequestForm.stepId);
                if (stepIdFormatted === _constants.AJAX_REQUEST_FORM_FORMATED && (
                // Step 1
                RequestForm.requestType === _constants.REQUEST_PRICE_LIST ||
                //  des demandes voir les tarifs
                RequestForm.requestType === _constants.REQUEST_CONTACT_DETAIL) // des demandes voir les coordonnées)
                ) {
                  stepIdFormatted = _constants.REQUEST_LOGIN_FORM;
                }
                // envoie des events ga apres une soumission d'un formulaire quand il a échoué
                _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                  action: RequestForm.requestTrackEventAction,
                  category: RequestForm.requestTrackEventCategory,
                  label: RequestForm.requestTrackEventLabel ? RequestForm.requestTrackEventLabel : _constants.GA_LABELS[stepIdFormatted].send,
                  value: counter.now
                });
                try {
                  var errorsFromPayload = getErrorsFromPayload(action);
                  var _loop = function _loop() {
                    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
                      pageId = _Object$entries$_i[0],
                      value = _Object$entries$_i[1];
                    Object.keys(value).map(function (field) {
                      return populateErrorFields(pageId, field, errorsFromPayload[pageId][field].id, errors);
                    });
                  };
                  for (var _i = 0, _Object$entries = Object.entries(errorsFromPayload); _i < _Object$entries.length; _i++) {
                    _loop();
                  }
                  if (errors.emptyFields) {
                    // envoie les champs en vide lors d'une soumission du form
                    _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                      action: RequestForm.requestTrackEventAction,
                      category: RequestForm.requestTrackEventCategory,
                      label: errors.emptyFields
                    });
                  }
                  if (errors.errorFields) {
                    // envoie les champs en erreur apres soumission du form
                    _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                      action: RequestForm.requestTrackEventAction,
                      category: RequestForm.requestTrackEventCategory,
                      label: errors.errorFields
                    });
                  }
                } catch (error) {
                  // envoie les champs en erreur apres soumission du form
                  _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                    action: RequestForm.requestTrackEventAction,
                    category: RequestForm.requestTrackEventCategory,
                    label: "Error ".concat(stepIdFormatted)
                  });
                  console.warn("Cannot send event error");
                }
                if (_constants.GA_LABELS[stepIdFormatted]) {
                  _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                    action: RequestForm.requestTrackEventAction,
                    category: RequestForm.requestTrackEventCategory,
                    label: _constants.GA_LABELS[stepIdFormatted].displayError,
                    value: counter.after
                  });
                }
                break;
              case _recommendationsFormActions.SUBMIT_RECOMMENDATION_FORM_ERRORS:
              case _recommendationsFormActions.SUBMIT_RECOMMENDATION_LOG_ERRORS:
                // on n'envoie pas les submits comme pour request form en cas d'erreurs
                try {
                  var _errorsFromPayload = getErrorsFromPayload(action);
                  Object.keys(_errorsFromPayload).map(function (field) {
                    return populateErrorFields("ajaxMultiRequestForm", field, _errorsFromPayload[field].id, errors);
                  });
                  if (errors.emptyFields) {
                    // envoie les champs en vide lors d'une soumission du form
                    _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                      action: RequestForm.requestTrackEventAction,
                      category: RequestForm.requestTrackEventCategory,
                      label: errors.emptyFields
                    });
                  }
                  if (errors.errorFields) {
                    // envoie les champs en erreur apres soumission du form
                    _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                      action: RequestForm.requestTrackEventAction,
                      category: RequestForm.requestTrackEventCategory,
                      label: errors.errorFields
                    });
                  }
                } catch (error) {
                  // envoie les champs en erreur apres soumission du form
                  _trackingHelper.TrackingHelper.sendGaTrackingEvent({
                    action: RequestForm.requestTrackEventAction,
                    category: RequestForm.requestTrackEventCategory,
                    label: "Error ajaxMultiRequestForm"
                  });
                  console.warn("Cannot send event error");
                }
                // on n'envoie pas non plus de redisplay comme pour request form
                break;
              default:
                break;
            }
          }
        }
      } catch (error) {
        console.error("".concat(action.type, ": Tracking ga failed"));
      }
      return next(action);
    };
  };
}
function getErrorsFromPayload(action) {
  var errorsFromPayload = action && action.payload && action.payload.errors && action.payload.errors["0"] && action.payload.errors["0"].submitionFailed ? JSON.parse(action.payload.errors["0"].submitionFailed) : null;
  if (!errorsFromPayload && action && action.payload && action.payload.err) {
    errorsFromPayload = action.payload.err.errors;
  }
  return errorsFromPayload;
}
function populateErrorFields(pageId, field, id, errors) {
  if (id === "foj_myspace_account_form_mandatory") {
    if (errors.emptyFields === "") {
      errors.emptyFields += "Empty ".concat(pageId, "/");
    }
    errors.emptyFields += "".concat(field, "/");
  } else {
    if (errors.errorFields === "") {
      errors.errorFields += "Error ".concat(pageId, "/");
    }
    errors.errorFields += "".concat(field, "/");
  }
  return true;
}