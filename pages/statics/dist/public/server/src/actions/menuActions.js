"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMenu = exports.resetMenu = exports.menuRequestSuccess = exports.menuRequestLoad = exports.menuRequestError = exports["default"] = exports.MENU_SELECT = exports.MENU_RESET = exports.MENU_REQUEST_SUCCESS = exports.MENU_REQUEST_LOADING = exports.MENU_REQUEST_ERROR = void 0;
var _logger = _interopRequireDefault(require("../components/logger"));
var MENU_SELECT = exports.MENU_SELECT = "MENU_SELECT";
var MENU_RESET = exports.MENU_RESET = "MENU_RESET";
var MENU_REQUEST_LOADING = exports.MENU_REQUEST_LOADING = "MENU_REQUEST_LOADING";
var MENU_REQUEST_ERROR = exports.MENU_REQUEST_ERROR = "MENU_REQUEST_ERROR";
var MENU_REQUEST_SUCCESS = exports.MENU_REQUEST_SUCCESS = "MENU_REQUEST_SUCCESS";

/**
 * ShouldRequest
 *
 * Permet de redispatcher l'action menuRequestLoad à une simple selection si les sous menus ont déjà été chargés
 * @param {MenuItem} menuItem item menu selectionné
 */
function shouldRequest(menuItem) {
  return !(menuItem.subMenuItems && menuItem.subMenuItems.length > 0);
}

/**
 * Reset du menu pour l'event onleave
 */
var resetMenu = exports.resetMenu = function resetMenu() {
  return {
    type: MENU_RESET
  };
};

/**
 * Selection du menu
 * @param {MenuItem} menuItem
 * @return {MenuAction} Menu Action
 */
var selectMenu = exports.selectMenu = function selectMenu(menuItem) {
  return {
    type: MENU_SELECT,
    payload: {
      menuItem: menuItem,
      isLoading: false
    }
  };
};

/**
 * Action pour charger le menu survolé
 * @param {MenuItem} menuItem
 * @return {MenuAction} Menu Action
 */
var menuRequestLoad = exports.menuRequestLoad = function menuRequestLoad(menuItem, onMenuLoaded) {
  if (shouldRequest(menuItem) === false) {
    if (onMenuLoaded) {
      onMenuLoaded();
    }
    return selectMenu(menuItem);
  }
  return {
    type: MENU_REQUEST_LOADING,
    payload: {
      menuItem: menuItem,
      onMenuLoaded: onMenuLoaded,
      isLoading: true
    }
  };
};

/**
 * Action error survenue lors du chargement du menu
 * @param {Error} errors
 * @return {MenuAction} Menu Action
 */
var menuRequestError = exports.menuRequestError = function menuRequestError(errors) {
  var d = new Date();
  _logger["default"].error("".concat(d.toUTCString(), "=> MENU_ACTION_ERROR:"), errors);
  return {
    type: MENU_REQUEST_ERROR,
    payload: {
      isLoading: false
    }
  };
};

/**
 * Action au chargement avec succès du menu
 * @param {SubMenuItems} subMenuItems
 * @return {MenuAction} Menu Action
 */
var menuRequestSuccess = exports.menuRequestSuccess = function menuRequestSuccess(subMenuItems) {
  return {
    type: MENU_REQUEST_SUCCESS,
    payload: {
      isLoading: false,
      subMenuItems: subMenuItems
    }
  };
};
var _default = exports["default"] = {};