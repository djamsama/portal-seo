"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DidomiReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _didomiActions = require("../actions/didomiActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/** Etat relatif aux consentements didomi. */

var DidomiReducer = exports.DidomiReducer = function DidomiReducer(state, action) {
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _didomiActions.SET_VENDOR_STATUS:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          vendors: _objectSpread(_objectSpread({}, state.vendors), {}, (0, _defineProperty2["default"])({}, action.payload.name, action.payload.status))
        });
      }
    case _didomiActions.SET_USER_COOKIES_CONSENT_STATUS:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          cookiesConsents: _objectSpread(_objectSpread({}, state.cookiesConsents), {}, (0, _defineProperty2["default"])({}, action.payload.consentName, action.payload.isConsented))
        });
      }
    default:
      return newState;
  }
};