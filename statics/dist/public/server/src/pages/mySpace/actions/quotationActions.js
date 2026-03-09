"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveQuotation = exports.quotationSuccess = exports.quotationError = exports["default"] = exports.QUOTATION_SUCCESS = exports.QUOTATION_SAVING = exports.QUOTATION_QUOTE_ID_TO_VIEW = exports.QUOTATION_ERROR = void 0;
var _reactReduxToastr = require("react-redux-toastr");
var QUOTATION_SAVING = exports.QUOTATION_SAVING = "QUOTATION_SAVING";
var QUOTATION_ERROR = exports.QUOTATION_ERROR = "QUOTATION_ERROR";
var QUOTATION_SUCCESS = exports.QUOTATION_SUCCESS = "QUOTATION_SUCCESS";
var QUOTATION_QUOTE_ID_TO_VIEW = exports.QUOTATION_QUOTE_ID_TO_VIEW = "QUOTATION_QUOTE_ID_TO_VIEW";
var saveQuotation = exports.saveQuotation = function saveQuotation(quotation) {
  return {
    type: QUOTATION_SAVING,
    payload: {
      quotation: quotation
    }
  };
};
var quotationError = exports.quotationError = function quotationError(errors, quotation) {
  if (quotation.msgs && quotation.msgs.error) {
    _reactReduxToastr.toastr.error("", quotation.msgs.error);
  }
  if (quotation.previous) {
    quotation.next = quotation.status;
    quotation.status = quotation.previous;
  }
  return {
    type: QUOTATION_ERROR,
    payload: {
      errors: errors,
      quotation: quotation,
      isLoading: false
    }
  };
};
var quotationSuccess = exports.quotationSuccess = function quotationSuccess(response) {
  if (response.msgs && response.msgs.success) {
    _reactReduxToastr.toastr.success("", response.msgs.success);
  }
  var quotation = response && response.data && response.data.content ? response.data.content.quotation : null;
  return {
    type: QUOTATION_SUCCESS,
    payload: {
      isLoading: false,
      response: response,
      quotation: quotation
    }
  };
};
var _default = exports["default"] = {};