"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeSuccess = exports.homeGuidesSuccess = exports.homeError = exports.homeEmagsSuccess = exports.getItems = exports.getGuides = exports.getEmags = exports["default"] = exports.HOME_REQUEST_SUCCESS = exports.HOME_REQUEST_LOADING = exports.HOME_REQUEST_ERROR = exports.HOME_EMAGS_LOADING = exports.HOME_BUYING_GUIDE_LOADING = void 0;
var _logger = _interopRequireDefault(require("../../../components/logger"));
var _constants = require("../../../commons/constants");
var HOME_REQUEST_LOADING = exports.HOME_REQUEST_LOADING = "HOME_REQUEST_LOADING";
var HOME_REQUEST_ERROR = exports.HOME_REQUEST_ERROR = "HOME_REQUEST_ERROR";
var HOME_REQUEST_SUCCESS = exports.HOME_REQUEST_SUCCESS = "HOME_REQUEST_SUCCESS";
var HOME_EMAGS_LOADING = exports.HOME_EMAGS_LOADING = "HOME_EMAGS_LOADING";
var HOME_BUYING_GUIDE_LOADING = exports.HOME_BUYING_GUIDE_LOADING = "HOME_BUYING_GUIDE_LOADING";

/**
 * Action pour recuperer les emags
 * @param {HomeItem} homeItem
 * @return {HomeAction} Home Action
 */
var getEmags = exports.getEmags = function getEmags() {
  return {
    type: HOME_EMAGS_LOADING,
    payload: {
      type: _constants.APPLICATION.EMAGS.PARAMETER_NAME,
      isLoading: true
    }
  };
};

/**
 * Action pour recuperer les guides d'achat
 * @param {HomeItem} homeItem
 * @return {HomeAction} Home Action
 */
var getGuides = exports.getGuides = function getGuides() {
  return {
    type: HOME_BUYING_GUIDE_LOADING,
    payload: {
      type: _constants.APPLICATION.GUIDES.PARAMETER_NAME,
      isLoading: true
    }
  };
};

/**
 * Action pour recuperer les products/projects/trends pushed et natural
 * @param {HomeItem} homeItem
 * @return {HomeAction} Home Action
 */
var getItems = exports.getItems = function getItems(type) {
  return {
    type: HOME_REQUEST_LOADING,
    payload: {
      type: type,
      isLoading: true
    }
  };
};

/**
 * Action error survenue lors du chargement des items de la home
 * @param {Error} errors
 * @return {HomeAction} Home Action
 */
var homeError = exports.homeError = function homeError(errors) {
  var d = new Date();
  _logger["default"].error("".concat(d.toUTCString(), "=> HOME_ACTION_ERROR:"), errors);
  return {
    type: HOME_REQUEST_ERROR,
    payload: {
      isLoading: false
    }
  };
};

/**
 * Action récuperation avec succès des products/projects/trends
 * @param {HomeItem} subHomeItems
 * @param {string} type
 * @return {HomeAction} Home Action
 */
var homeSuccess = exports.homeSuccess = function homeSuccess(items, type) {
  return {
    type: HOME_REQUEST_SUCCESS,
    payload: {
      isLoading: false,
      type: type,
      items: items
    }
  };
};

/**
 * Action récuperation avec succès des guides d'achat
 * @param {HomeItem} items
 * @return {HomeAction} Home Action
 */
var homeGuidesSuccess = exports.homeGuidesSuccess = function homeGuidesSuccess(items) {
  return {
    type: HOME_REQUEST_SUCCESS,
    payload: {
      isLoading: false,
      type: _constants.APPLICATION.GUIDES.PARAMETER_NAME,
      items: items
    }
  };
};

/**
 * Action récuperation avec succès des emags
 * @param { HomeItem} items
 * @return {HomeAction} Home Action
 */
var homeEmagsSuccess = exports.homeEmagsSuccess = function homeEmagsSuccess(items) {
  return {
    type: HOME_REQUEST_SUCCESS,
    payload: {
      isLoading: false,
      type: _constants.APPLICATION.EMAGS.PARAMETER_NAME,
      items: items
    }
  };
};
var _default = exports["default"] = {};