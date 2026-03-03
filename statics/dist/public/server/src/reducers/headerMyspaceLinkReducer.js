"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyspaceLinkReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _myspaceLinkActions = require("../actions/myspaceLinkActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_MYSPACE_LINK_STATE = {
  isLoading: false,
  isAuthenticated: false,
  email: "",
  firstName: "",
  lastName: "",
  errors: false
};
/**
 * Définition du default state du myspaceLink
 */

var MyspaceLinkReducer = exports.MyspaceLinkReducer = function MyspaceLinkReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MYSPACE_LINK_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _myspaceLinkActions.MYSPACE_LINK_GET_INFOS:
      {
        //  const { payload } = action;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true
        });
      }
    case _myspaceLinkActions.MYSPACE_LINK_GET_INFOS_SUCCESS:
      {
        var payload = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false,
          isAuthenticated: true
        }, payload.visitor);
      }
    case _myspaceLinkActions.MYSPACE_LINK_SIGNIN_SUCCESS:
      {
        var _payload = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false,
          isAuthenticated: true,
          email: _payload.data.content.email,
          firstName: _payload.data.content.firstName,
          lastName: _payload.data.content.lastName
        });
      }
    case _myspaceLinkActions.MYSPACE_LINK_LOGOUT:
      {
        var _payload2 = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: _payload2.isLoading
        });
      }
    case _myspaceLinkActions.MYSPACE_LINK_LOGOUT_SUCCESS:
      {
        var _payload3 = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: _payload3.isLoading,
          logoutSuccess: _payload3.logoutSuccess
        });
      }
    case _myspaceLinkActions.MYSPACE_LINK_REQUEST_ERROR:
      {
        var _payload4 = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false,
          errors: _payload4.errors,
          isAuthenticated: false
        });
      }
    default:
      return state;
  }
};