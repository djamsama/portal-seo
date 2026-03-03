"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDescriptionTranslation = exports.descriptionTranslationSuccess = exports.descriptionTranslationLoading = exports.descriptionTranslationError = exports["default"] = exports.DESCRIPTION_TRANSLATION_LOADING_SUCCESS = exports.DESCRIPTION_TRANSLATION_LOADING_ERROR = exports.DESCRIPTION_TRANSLATION_LOADING = exports.DESCRIPTION_TRANSLATION_LOADED = void 0;
var _standService = _interopRequireDefault(require("../../../../../../../services/impl/standService"));
var DESCRIPTION_TRANSLATION_LOADING = exports.DESCRIPTION_TRANSLATION_LOADING = "DESCRIPTION_TRANSLATION_LOADING";
var DESCRIPTION_TRANSLATION_LOADED = exports.DESCRIPTION_TRANSLATION_LOADED = "DESCRIPTION_TRANSLATION_LOADED";
var DESCRIPTION_TRANSLATION_LOADING_ERROR = exports.DESCRIPTION_TRANSLATION_LOADING_ERROR = "DESCRIPTION_TRANSLATION_LOADING_ERROR";
var DESCRIPTION_TRANSLATION_LOADING_SUCCESS = exports.DESCRIPTION_TRANSLATION_LOADING_SUCCESS = "DESCRIPTION_TRANSLATION_LOADING_SUCCESS";
var descriptionTranslationLoading = exports.descriptionTranslationLoading = function descriptionTranslationLoading() {
  return {
    type: DESCRIPTION_TRANSLATION_LOADING
  };
};
var descriptionTranslationSuccess = exports.descriptionTranslationSuccess = function descriptionTranslationSuccess(description) {
  return {
    type: DESCRIPTION_TRANSLATION_LOADING_SUCCESS,
    payload: {
      isLoading: false,
      description: description
    }
  };
};
var descriptionTranslationError = exports.descriptionTranslationError = function descriptionTranslationError(errors) {
  return {
    type: DESCRIPTION_TRANSLATION_LOADING_ERROR,
    payload: {
      errors: errors,
      isLoading: false
    }
  };
};
var loadDescriptionTranslation = exports.loadDescriptionTranslation = function loadDescriptionTranslation(productId, context) {
  var descriptionTranslationService = new _standService["default"](context);
  return function (dispatch) {
    dispatch(descriptionTranslationLoading());
    descriptionTranslationService.getDescriptionTranslation(productId).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0) {
        // error
        throw new Error("Impossible to load the description translation");
      } else {
        // success
        dispatch(descriptionTranslationSuccess(data.content));
      }
    }, function (error) {
      throw error;
    });
  };
};
var _default = exports["default"] = {};