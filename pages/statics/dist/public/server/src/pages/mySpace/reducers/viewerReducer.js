"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewerReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _viewerActions = require("../actions/viewerActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ViewerReducer = exports.ViewerReducer = function ViewerReducer(state, action) {
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _viewerActions.HAS_MY_SPACE_ACCOUNT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          hasAccountSuccess: false
        });
      }
    case _viewerActions.HAS_MY_SPACE_ACCOUNT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, newState), {}, {
          hasAccountSuccess: true
        });
      }
    default:
      return newState;
  }
};