"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signinSuccess = exports.login = void 0;
var _reduxForm = require("redux-form");
var _mySpaceAccountService = _interopRequireDefault(require("../../../../../services/impl/mySpaceAccountService"));
var _myspaceLinkActions = require("../../../../../actions/myspaceLinkActions");
var signinSuccess = exports.signinSuccess = function signinSuccess(data) {
  return {
    type: _myspaceLinkActions.MYSPACE_LINK_SIGNIN_SUCCESS,
    payload: {
      data: data
    }
  };
};
var login = exports.login = function login(values, context, redirectUrl, intl) {
  return function (dispatch) {
    return new _mySpaceAccountService["default"](context).login(values, context).then(function (_ref) {
      var data = _ref.data;
      switch (data.responseStatus) {
        case 200:
          dispatch(signinSuccess(data));
          if (redirectUrl && redirectUrl !== "") {
            document.location.assign(redirectUrl);
          }
          break;
        case 400:
          throw new _reduxForm.SubmissionError({
            _error: intl.formatMessage({
              id: "foj_myspace_signin_error"
            })
          });
        default:
          throw new _reduxForm.SubmissionError({
            _error: data.errors[0]
          });
      }
    }, function (err) {
      throw new _reduxForm.SubmissionError(err);
    });
  };
};