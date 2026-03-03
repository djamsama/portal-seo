"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processPayment = exports.payByWireSuccess = exports.payByCardSuccess = exports.PAYFAIL = exports.PAYBYWIRE_SUCCESS = exports.PAYBYWIRE = exports.PAYBYCARD_SUCCESS = exports.PAYBYCARD = void 0;
var _constants = require("../../../../../commons/constants");
var PAYBYCARD = exports.PAYBYCARD = "MYSPACE_QUOTATION_PAYMENT/PAYBYCARD";
var PAYBYWIRE = exports.PAYBYWIRE = "MYSPACE_QUOTATION_PAYMENT/PAYBYWIRE";
var PAYFAIL = exports.PAYFAIL = "MYSPACE_QUOTATION_PAYMENT/PAYFAIL";
var processPayment = exports.processPayment = function processPayment(context, paymentDatas, quoteId, leadContext, history, notificationsHelper) {
  return function (dispatch) {
    if (paymentDatas.opened === _constants.PAYMENT_TYPE.WIRE) {
      dispatch({
        type: PAYBYWIRE,
        payload: {
          context: context,
          paymentDatas: paymentDatas,
          quoteId: quoteId,
          leadContext: leadContext,
          history: history,
          notificationsHelper: notificationsHelper
        }
      });
      return {
        type: PAYBYWIRE
      };
    }
    dispatch({
      type: PAYBYCARD,
      payload: {
        context: context,
        paymentDatas: paymentDatas,
        quoteId: quoteId,
        leadContext: leadContext,
        history: history,
        notificationsHelper: notificationsHelper
      }
    });
    return {
      type: PAYBYCARD
    };
  };
};
var PAYBYCARD_SUCCESS = exports.PAYBYCARD_SUCCESS = "MYSPACE_QUOTATION_PAYMENT/PAYBYCARD_SUCCESS";
var payByCardSuccess = exports.payByCardSuccess = function payByCardSuccess(response) {
  if (response.redirectUrl && response.redirectUrl !== "") {
    // Redirection vers la page 3dsecure
    document.location.href = response.redirectUrl;
  } else {
    var url = "/myspace/secure/".concat(response.leadContext, "-quotation/validation/").concat(response.quoteId, "/step3Payment.html");
    response.history.push(url);
    return {
      type: PAYBYCARD_SUCCESS,
      payload: {
        transactionStatus: _constants.PAYMENT_STATUS.PENDING
      }
    };
  }
};
var PAYBYWIRE_SUCCESS = exports.PAYBYWIRE_SUCCESS = "MYSPACE_QUOTATION_PAYMENT/PAYBYWIRE_SUCCESS";
var payByWireSuccess = exports.payByWireSuccess = function payByWireSuccess(response) {
  var url = "/myspace/secure/".concat(response.leadContext, "-quotation/validation/").concat(response.quoteId, "/step3Payment.html");
  response.history.push(url);
  var bankwire = response.bankwire;
  return {
    type: PAYBYWIRE_SUCCESS,
    payload: {
      bankwire: bankwire,
      transactionStatus: _constants.PAYMENT_STATUS.PENDING
    }
  };
};