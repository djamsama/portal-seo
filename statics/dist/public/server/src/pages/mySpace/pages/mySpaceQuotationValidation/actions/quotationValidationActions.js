"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLeadsQuoteInformation = exports.submitFormFail = exports.submitForm = exports.stopLoading = exports.setPhoneCode = exports.loadData = exports.UPDATELEADSQUOTEINFORMATION = exports.SUBMITFORMFAIL = exports.SUBMITFORM = exports.STOPLOADING = exports.LOADDATA = void 0;
var _reduxForm = require("redux-form");
var _merge = _interopRequireDefault(require("lodash/merge"));
var _reactReduxToastr = require("react-redux-toastr");
var _quotationValidationService = _interopRequireDefault(require("../../../../../services/impl/quotationValidationService"));
var LOADDATA = exports.LOADDATA = "MYSPACE_QUOTATION_VALIDATION/LOADDATA";
var loadData = exports.loadData = function loadData(data) {
  return {
    type: LOADDATA,
    payload: {
      data: data
    }
  };
};
var setPhoneCode = exports.setPhoneCode = function setPhoneCode(countryCode, fieldName, context, notificationsHelper) {
  var quotationValidationService = new _quotationValidationService["default"](context);
  return function (dispatch) {
    return quotationValidationService.getPhoneCode(countryCode, context).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0) {
        _reactReduxToastr.toastr.error(notificationsHelper.getErrorMsg());
      } else {
        dispatch((0, _reduxForm.change)("QuotationValidationForm", fieldName, data.content));
      }
    });
  };
};
var SUBMITFORMFAIL = exports.SUBMITFORMFAIL = "MYSPACE_QUOTATION_VALIDATION/SUBMITFORMFAIL";
var submitFormFail = exports.submitFormFail = function submitFormFail(data, errorMsg) {
  var err = {};
  data.errors.map(function (error, index) {
    // On recupere les champs en erreur. Le split permet de recuperer les champs dans des formsection...
    var field = error.field.split(".");
    var tempErr = {};
    var fieldTemp = {};
    // Si on est dans un form section.
    if (field.length > 1) {
      fieldTemp[field[1]] = {
        id: error.code
      };
      tempErr[field[0]] = fieldTemp;
    } else {
      // Sinon c'est un field en dehors d'une section.
      tempErr[field[1]] = {
        id: error.code
      };
    }
    // On merge le resultat.
    err = (0, _merge["default"])(err, tempErr);
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
var STOPLOADING = exports.STOPLOADING = "MYSPACE_QUOTATION_VALIDATION/STOPLOADING";
var stopLoading = exports.stopLoading = function stopLoading() {
  return {
    type: STOPLOADING
  };
};
var UPDATELEADSQUOTEINFORMATION = exports.UPDATELEADSQUOTEINFORMATION = "MYSPACE_QUOTATION_VALIDATION/UPDATELEADSQUOTEINFORMATION";
var updateLeadsQuoteInformation = exports.updateLeadsQuoteInformation = function updateLeadsQuoteInformation(values) {
  return {
    type: UPDATELEADSQUOTEINFORMATION,
    payload: {
      values: values
    }
  };
};
var SUBMITFORM = exports.SUBMITFORM = "MYSPACE_QUOTATION_VALIDATION/SUBMITFORM";
var submitForm = exports.submitForm = function submitForm(values, context, leadContext, history, notificationsHelper) {
  return function (dispatch) {
    return dispatch({
      type: SUBMITFORM,
      payload: {
        values: values,
        context: context,
        leadContext: leadContext,
        history: history,
        notificationsHelper: notificationsHelper
      }
    });
  };
};