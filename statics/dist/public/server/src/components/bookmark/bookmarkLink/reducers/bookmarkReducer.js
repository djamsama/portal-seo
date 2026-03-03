"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookmarkLinkReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _bookmarkActions = require("../actions/bookmarkActions");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/** Etat relatif aux favoris. */

var BookmarkLinkReducer = exports.BookmarkLinkReducer = function BookmarkLinkReducer(state, action) {
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case _bookmarkActions.BOOKMARK_ADDED:
      {
        return _objectSpread(_objectSpread({}, newState), {}, (0, _defineProperty2["default"])({}, action.payload.entityId, {
          bookmarked: true
        }));
      }
    case _bookmarkActions.BOOKMARK_DELETED:
      {
        return _objectSpread(_objectSpread({}, newState), {}, (0, _defineProperty2["default"])({}, action.payload.entityId, {
          bookmarked: false
        }));
      }
    case _bookmarkActions.BOOKMARK_CHECKED:
      {
        return _objectSpread(_objectSpread({}, newState), {}, (0, _defineProperty2["default"])({}, action.payload.entityId, {
          bookmarked: action.payload.data.content
        }));
      }
    default:
      return newState;
  }
};