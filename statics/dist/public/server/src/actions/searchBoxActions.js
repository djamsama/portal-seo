"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchTextChangeSuccess = exports.searchTextChange = exports.searchBoxSubmitSuccess = exports.searchBoxSubmit = exports.resetSearchAutocomplete = exports.loadFrequentlySearched = exports.frequentSearchByCountryLoaded = exports["default"] = exports.SEARCHBOX_SUBMIT_SEARCH_SUCCESS = exports.SEARCHBOX_RESET_AUTOCOMPLETE = exports.SEARCHBOX_FREQUENT_SEARCH_LOADED = exports.SEARCHBOX_AUTOCOMPLETE_SUCCESS = void 0;
var _searchBoxAjaxService = _interopRequireDefault(require("../services/impl/searchBoxAjaxService"));
var SEARCHBOX_SUBMIT_SEARCH_SUCCESS = exports.SEARCHBOX_SUBMIT_SEARCH_SUCCESS = "SEARCHBOX_SUBMIT_SEARCH_SUCCESS";
var SEARCHBOX_AUTOCOMPLETE_SUCCESS = exports.SEARCHBOX_AUTOCOMPLETE_SUCCESS = "SEARCHBOX_AUTOCOMPLETE_SUCCESS";
var SEARCHBOX_RESET_AUTOCOMPLETE = exports.SEARCHBOX_RESET_AUTOCOMPLETE = "SEARCHBOX_RESET_AUTOCOMPLETE";
var SEARCHBOX_FREQUENT_SEARCH_LOADED = exports.SEARCHBOX_FREQUENT_SEARCH_LOADED = "SEARCHBOX_FREQUENT_SEARCH_LOADED";
var frequentSearchByCountryLoaded = exports.frequentSearchByCountryLoaded = function frequentSearchByCountryLoaded(search) {
  return {
    type: SEARCHBOX_FREQUENT_SEARCH_LOADED,
    payload: {
      search: search
    }
  };
};
var loadFrequentlySearched = exports.loadFrequentlySearched = function loadFrequentlySearched(context) {
  var searchBoxAjaxService = new _searchBoxAjaxService["default"](context);
  return function (dispatch) {
    return searchBoxAjaxService.getFrequentSearchByCountry(context).then(function (_ref) {
      var data = _ref.data;
      dispatch(frequentSearchByCountryLoaded(data));
    });
  };
};

/* eslint-disable no-undef, no-unused-vars */
var searchBoxSubmit = exports.searchBoxSubmit = function searchBoxSubmit(text, type, context) {
  // $FlowFixMe
  if (false) {
    var searchBoxAjaxService = new _searchBoxAjaxService["default"](context);
    return function (dispatch) {
      return searchBoxAjaxService.search(text, type, context).then(function (_ref2) {
        var data = _ref2.data;
        // Via redux(base URL peut etre different... ce qui pose le probleme de l'utilisation de push)
        // context.store.dispatch(push(data.result));
        // Via rechargement de page
        if (data.result) {
          window.location = data.result;
        }
      });
    };
  }
};
/* eslint-enable no-undef, no-unused-vars */
/* eslint-enable no-undef, no-unused-vars */

var searchTextChangeSuccess = exports.searchTextChangeSuccess = function searchTextChangeSuccess(data) {
  return {
    type: SEARCHBOX_AUTOCOMPLETE_SUCCESS,
    payload: {
      data: data
    }
  };
};

/* eslint-disable no-undef, no-unused-vars */
var searchTextChange = exports.searchTextChange = function searchTextChange(text, type, context) {
  var searchBoxAjaxService = new _searchBoxAjaxService["default"](context);
  // $FlowFixMe
  if (false) {
    return function (dispatch) {
      return searchBoxAjaxService.autocomplete(text, type, context).then(function (_ref3) {
        var data = _ref3.data;
        dispatch(searchTextChangeSuccess(data));
      });
    };
  }
};
var searchBoxSubmitSuccess = exports.searchBoxSubmitSuccess = function searchBoxSubmitSuccess(text) {
  return {
    type: SEARCHBOX_SUBMIT_SEARCH_SUCCESS,
    payload: {
      text: text
    }
  };
};
var resetSearchAutocomplete = exports.resetSearchAutocomplete = function resetSearchAutocomplete() {
  return {
    type: SEARCHBOX_RESET_AUTOCOMPLETE
  };
};
var _default = exports["default"] = {};