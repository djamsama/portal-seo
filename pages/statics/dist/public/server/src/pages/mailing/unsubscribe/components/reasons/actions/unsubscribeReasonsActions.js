"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitReasonForm = exports.submitForm = exports.SUBMITFORM = void 0;
var _reduxForm = require("redux-form");
var _unsubscribeReasonsService = _interopRequireDefault(require("../../../../../../services/impl/unsubscribeReasonsService"));
var SUBMITFORM = exports.SUBMITFORM = "MAILING/UNSUBSCRIBEREASONS/JOIN/SUBMITFORM";
var submitReasonForm = exports.submitReasonForm = function submitReasonForm(data) {
  return {
    type: SUBMITFORM,
    payload: {
      data: data,
      unsubscribed: true
    }
  };
};
var submitForm = exports.submitForm = function submitForm(values, context) {
  var unsubscribeReasonsService = new _unsubscribeReasonsService["default"](context);
  return function (dispatch) {
    return unsubscribeReasonsService.register(values, context).then(function (_ref) {
      var data = _ref.data;
      // Réponse 200 => Redirection vers le formulaire de confirmation
      if (data.responseStatus === 200 && data.content !== null && data.content !== "") {
        return dispatch(submitReasonForm(data));
      }
    })["catch"](function (error) {
      if (error instanceof _reduxForm.SubmissionError) {
        // On laisse le form interpreter ses erreurs de soumission
        throw error;
      }
    });
  };
};