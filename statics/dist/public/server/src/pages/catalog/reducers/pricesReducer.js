"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricesReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _standActions = require("../../stand/actions/standActions");
var _defaultState = require("../../../constants/defaultState");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PricesReducer = exports.PricesReducer = function PricesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultState.DEFAULT_IS_PRICE_AVAILABLE_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _standActions.REQUEST_PRICES_SERVICE_SUCCESS:
      newState.isPricesAvailable = action.payload ? action.payload.isPricesAvailable : false;
      newState.isPricesAvailableLoaded = true;
      return newState;
    case _standActions.REQUEST_PRICES_SERVICE_ERROR:
      newState.isPricesAvailable = false;
      newState.isPricesAvailableLoaded = true;
      return newState;
    default:
      return state;
  }
};