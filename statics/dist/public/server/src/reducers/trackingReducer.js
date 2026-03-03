"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackingReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _trackingAction = require("../actions/trackingAction");
var _viewedPageIdHelper = require("../helpers/viewedPageIdHelper");
var _trackingHelper = require("../helpers/trackingHelper");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable no-case-declarations */
var TrackingReducer = exports.TrackingReducer = function TrackingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _trackingAction.INIT_TRACK_ELEMENT_DONE:
      {
        var newState = _objectSpread({}, state);
        var viewedPagedId = action.payload.viewedPagedId;
        newState.viewedPagedId = viewedPagedId;
        _viewedPageIdHelper.ViewedPageIdHelper.instance.setViewedPageId(viewedPagedId);
        return newState;
      }
    case _trackingAction.INIT_TRACK_ELEMENT_ERROR:
      {
        return state;
      }
    case _trackingAction.TRACK_ELEMENT_DONE:
      {
        var _newState = _objectSpread({}, state);
        var element = action.payload.trackingElement;
        if (_newState.tracked === undefined) {
          _newState.tracked = {};
        }
        var id = typeof element.elementList !== "undefined" && element.elementList.length > 0 ? _trackingHelper.TrackingHelper.getTrackingListId(element) : _trackingHelper.TrackingHelper.getTrackingId(element);
        if (_newState.tracked[id] === undefined) {
          _newState.tracked[id] = {};
        }
        var newValue = _newState.tracked[id][action.payload.trackerType] ? _newState.tracked[id][action.payload.trackerType] : 0;
        newValue += 1;
        _newState.tracked[id][action.payload.trackerType] = newValue;
        return _newState;
      }
    default:
      return state;
  }
};