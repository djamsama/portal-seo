"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountryReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _footerCountryActions = require("../actions/footerCountryActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_COUNTRY_STATE = {
  isLoading: false,
  footerCountries: []
};
/**
 * Définition du default state du country
 */

var CountryReducer = exports.CountryReducer = function CountryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_COUNTRY_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _footerCountryActions.COUNTRY_REQUEST_LOADING:
      {
        //  const { payload } = action;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true
        });
      }
    case _footerCountryActions.COUNTRY_REQUEST_SUCCESS:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false,
          footerCountries: payload.footerCountries
        });
      }
    default:
      return state;
  }
};