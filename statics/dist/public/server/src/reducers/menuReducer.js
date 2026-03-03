"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _defaultState = require("../constants/defaultState");
var _menuActions = require("../actions/menuActions");
var _index = require("../actions/index");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Définition du default state du menu
 */

var MenuReducer = exports.MenuReducer = function MenuReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState.DEFAULT_MENU_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _menuActions.MENU_RESET:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          menuItemActive: null
        });
      }
    case _menuActions.MENU_SELECT:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, newState), {}, {
          menuItemActive: payload.menuItem.id,
          menuItems: newState.menuItems.map(function (menuItem) {
            if (menuItem.id === payload.menuItem.id) {
              menuItem.isLoading = false;
            }
            return menuItem;
          })
        });
      }
    case _menuActions.MENU_REQUEST_LOADING:
      {
        var _payload = action.payload;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: true,
          menuItemActive: _payload.menuItem.id,
          menuItems: newState.menuItems.map(function (menuItem) {
            if (menuItem.id === _payload.menuItem.id) {
              menuItem.isLoading = true;
            }
            return menuItem;
          })
        });
      }
    case _menuActions.MENU_REQUEST_SUCCESS:
      {
        var _payload2 = action.payload;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: false,
          menuItems: newState.menuItems.map(function (menuItem) {
            if (menuItem.id === newState.menuItemActive) {
              menuItem.isLoading = false;
              menuItem.subMenuItems = _payload2.subMenuItems;
            }
            return menuItem;
          })
        });
      }
    case _index.MENU_REQUEST_ERROR:
      {
        var errors = action.errors;
        return _objectSpread(_objectSpread({}, newState), {}, {
          isLoading: false,
          errors: errors
        });
      }
    default:
      return newState;
  }
};