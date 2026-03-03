"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitFormSuccess = exports.submitFormFail = exports.submitForm = exports.loadAccount = exports.SUBMITFORMSUCCESS = exports.SUBMITFORMFAIL = exports.SUBMITFORM = exports.LOADACCOUNT = void 0;
var _reduxForm = require("redux-form");
var _reactReduxToastr = require("react-redux-toastr");
var _mySpaceAccountService = _interopRequireDefault(require("../../../services/impl/mySpaceAccountService"));
var LOADACCOUNT = exports.LOADACCOUNT = "MYSPACE/LOADACCOUNT";
var loadAccount = exports.loadAccount = function loadAccount(data) {
  return {
    type: LOADACCOUNT,
    payload: {
      data: data
    }
  };
};
var SUBMITFORM = exports.SUBMITFORM = "MYSPACE/SUBMITFORM";
var submitForm = exports.submitForm = function submitForm(values, context, notificationsHelper) {
  var mySpaceAccountService = new _mySpaceAccountService["default"](context);
  return function (dispatch) {
    return mySpaceAccountService.updateAccount(values, context).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0) {
        dispatch(submitFormFail(data, notificationsHelper.getErrorMsg()));
      } else {
        dispatch(submitFormSuccess(data, notificationsHelper.getSuccessMsg()));
      }
    }, function (error) {
      return _reactReduxToastr.toastr.error(notificationsHelper.getErrorMsg());
    });
  };
};
var SUBMITFORMSUCCESS = exports.SUBMITFORMSUCCESS = "MYSPACE/SUBMITFORMSUCESS";
var submitFormSuccess = exports.submitFormSuccess = function submitFormSuccess(data, successMsg) {
  _reactReduxToastr.toastr.success("", successMsg);
  return {
    type: SUBMITFORMSUCCESS,
    payload: {
      data: data
    }
  };
};
var SUBMITFORMFAIL = exports.SUBMITFORMFAIL = "MYSPACE/SUBMITFORMFAIL";
var submitFormFail = exports.submitFormFail = function submitFormFail(data, errorMsg) {
  var err = {};
  data.content.map(function (error, index) {
    err[error.field] = {
      id: error.code,
      values: error.values
    };
  });
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