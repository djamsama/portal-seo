"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannersReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _bannersActions = require("../actions/bannersActions");
var _logger = _interopRequireDefault(require("../../logger"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Définition du default state du banner
 */
var DEFAULT_BANNERS_STATE = {
  isLoading: false,
  bannerComplete: false,
  banners: []
};

// eslint-disable-next-line max-len
var BannersReducer = exports.BannersReducer = function BannersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_BANNERS_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _bannersActions.BANNERS_REQUEST_SUCCESS:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false,
          bannerComplete: true,
          banners: payload.banners
        });
      }
    case _bannersActions.BANNERS_REQUEST_ERROR:
      {
        var _payload = action.payload;
        if (false) {
          _logger["default"].error("Warning: Banners a échoué ", _payload);
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