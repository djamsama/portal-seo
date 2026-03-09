"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signingSuccess = exports.quotationSigning = exports.SIGNINGSUCCESS = exports.SIGNINGFAIL = exports.SIGNING = void 0;
var SIGNINGSUCCESS = exports.SIGNINGSUCCESS = "MYSPACE_QUOTATION_SIGNING_SUCCESS";
var signingSuccess = exports.signingSuccess = function signingSuccess(data, history) {
  var statusDate = data.statusDate;
  return {
    type: SIGNINGSUCCESS,
    payload: {
      statusDate: statusDate
    }
  };
};
var SIGNINGFAIL = exports.SIGNINGFAIL = "MYSPACE_QUOTATION_SIGNING/SIGNINGFAIL";
var SIGNING = exports.SIGNING = "MYSPACE_QUOTATION_SIGNING/SUBMITFORM";
var quotationSigning = exports.quotationSigning = function quotationSigning(values, notificationsHelper, history, intl) {
  return function (dispatch) {
    return dispatch({
      type: SIGNING,
      payload: {
        values: values,
        notificationsHelper: notificationsHelper,
        history: history,
        intl: intl
      }
    });
  };
};