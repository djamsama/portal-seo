"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = exports.setQuoteIdToView = exports.goBackToOriginalLanguage = exports.QUOTATION_QUOTE_ID_TO_VIEW = void 0;
var _mySpaceTranslateService = _interopRequireDefault(require("../../../../services/impl/mySpaceTranslateService"));
var QUOTATION_QUOTE_ID_TO_VIEW = exports.QUOTATION_QUOTE_ID_TO_VIEW = "QUOTATION_QUOTE_ID_TO_VIEW";
var translate = exports.translate = function translate(messageId, language, context) {
  return new _mySpaceTranslateService["default"](context).translate(messageId, language, context).then(function (_ref) {
    var data = _ref.data;
    switch (data.responseStatus) {
      case 200:
        return data.content;
      default:
        throw new Error(data.errors[0]);
    }
  }, function (err) {
    throw new Error(err);
  });
};
var goBackToOriginalLanguage = exports.goBackToOriginalLanguage = function goBackToOriginalLanguage(messageId, context) {
  return new _mySpaceTranslateService["default"](context).goBackToOriginalLanguage(messageId, context).then(function (_ref2) {
    var data = _ref2.data;
    switch (data.responseStatus) {
      case 200:
        return null;
      default:
        throw new Error(data.errors[0]);
    }
  }, function (err) {
    throw new Error(err);
  });
};

/**
 * Stocke l'identifiant du devis à visionner.
 * @param {number} quoteId l'identifiant du devis.
 */
var setQuoteIdToView = exports.setQuoteIdToView = function setQuoteIdToView(quoteIdToView) {
  return {
    type: QUOTATION_QUOTE_ID_TO_VIEW,
    payload: {
      quoteIdToView: quoteIdToView
    }
  };
};