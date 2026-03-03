"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.changeSearchMode = exports.businessType = exports.SEARCH_MODE_CHANGE = exports.SEARCH_BUSINESS_TYPE = void 0;
var SEARCH_MODE_CHANGE = exports.SEARCH_MODE_CHANGE = "SEARCH_MODE_CHANGE";
var SEARCH_BUSINESS_TYPE = exports.SEARCH_BUSINESS_TYPE = "SEARCH_BUSINESS_TYPE";
var changeSearchMode = exports.changeSearchMode = function changeSearchMode(mode) {
  return {
    type: SEARCH_MODE_CHANGE,
    payload: {
      mode: mode
    }
  };
};
var businessType = exports.businessType = function businessType(data) {
  return {
    type: SEARCH_BUSINESS_TYPE,
    payload: {
      data: data
    }
  };
};
var _default = exports["default"] = {};