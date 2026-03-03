"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitFormSuccess = exports.forget = exports.MYSPACE_POPIN_FORGET_SUCCESS = void 0;
var _reduxForm = require("redux-form");
var _mySpaceAccountService = _interopRequireDefault(require("../../../../../services/impl/mySpaceAccountService"));
var MYSPACE_POPIN_FORGET_SUCCESS = exports.MYSPACE_POPIN_FORGET_SUCCESS = "MYSPACE_POPIN_FORGET_SUCCESS";
var forget = exports.forget = function forget(values, context, intl) {
  new _mySpaceAccountService["default"](context);
  var mySpaceAccountService = new _mySpaceAccountService["default"](context);
  return function (dispatch) {
    mySpaceAccountService.resetPassword(values, context).then(function (_ref) {
      var data = _ref.data;
      switch (data.responseStatus) {
        case 200:
          return dispatch(submitFormSuccess());
        case 400:
          if (undefined === data.functionalErrors || data.functionalErrors.length === 0 || data.functionalErrors[0] !== 1) {
            throw new _reduxForm.SubmissionError({
              _error: intl.formatMessage({
                id: "foj_myspace_signin_error"
              })
            });
          } else {
            // Compte inconnu, on renvoie ok, pour ne pas donner d'info sur l'existence d'un compte
            return dispatch(submitFormSuccess());
          }
        default:
          throw new _reduxForm.SubmissionError({
            _error: data.errors[0]
          });
      }
    });
  };
};
var submitFormSuccess = exports.submitFormSuccess = function submitFormSuccess() {
  return {
    type: MYSPACE_POPIN_FORGET_SUCCESS
  };
};