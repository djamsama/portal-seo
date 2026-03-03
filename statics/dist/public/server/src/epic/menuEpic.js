"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuEpic = void 0;
var _operators = require("rxjs/operators");
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _menuActions = require("../actions/menuActions");
var _menuService = _interopRequireDefault(require("../services/impl/menuService"));
// eslint-disable-next-line no-unused-vars
var MenuEpic = exports.MenuEpic = function MenuEpic(action$, store) {
  return action$.pipe((0, _reduxObservable.ofType)(_menuActions.MENU_REQUEST_LOADING), (0, _operators.map)(function (action) {
    return (0, _menuActions.menuRequestLoad)(action.payload.menuItem, action.payload.onMenuLoaded);
  }), (0, _operators.mergeMap)(function (action) {
    var menuItem = action.payload.menuItem;
    var menuService = new _menuService["default"]();
    return (0, _rxjs.from)(menuService.getSubMenuItems(menuItem)).pipe((0, _operators.mergeMap)(function (_ref) {
      var subMenuItems = _ref.data.content;
      var onMenuLoaded = action.payload.onMenuLoaded;
      if (onMenuLoaded) {
        // Si un callback menu est défini
        onMenuLoaded();
      }
      return (0, _rxjs.of)((0, _menuActions.menuRequestSuccess)(subMenuItems));
    }));
  }), (0, _operators.catchError)(function (errors) {
    return (0, _rxjs.of)((0, _menuActions.menuRequestError)(errors));
  }));
};