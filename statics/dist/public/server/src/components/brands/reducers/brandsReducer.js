"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandsReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _brandsActions = require("../actions/brandsActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_BRANDS_STATE = {
  isLoading: false,
  brands: []
};
/**
 * Définition du default state du brand
 */

var BrandsReducer = exports.BrandsReducer = function BrandsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_BRANDS_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _brandsActions.BRANDS_REQUEST_SUCCESS:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false,
          brands: payload.brands
        });
      }
    case _brandsActions.BRANDS_REQUEST_ERROR:
      {
        var _payload = action.payload;
        if (false) {
          // eslint-disable-next-line no-console
          console.error("Warning: Brands a échoué ", _payload);
        }
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false,
          errors: true
        });
      }
    default:
      return state;
  }
};