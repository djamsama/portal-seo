"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _initiateState = require("../../initiateState");
var _trackingReducer = require("../trackingReducer");
var _trackingAction = require("../../actions/trackingAction");
var _constants = require("../../commons/constants");
var _trackingElement = require("../../models/trackingElement");
var _viewedPageIdHelper = require("../../helpers/viewedPageIdHelper");
var trackingItem = {
  redirectUrl: "http://redirectUrl",
  id: 123546,
  entityId: 123,
  companyId: 3251,
  campaignId: 4587,
  elementTypeId: 1,
  placementId: 3,
  pushed: true,
  eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_HOVER,
  displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
  context: {
    initData: {
      pageTypeId: 169
    }
  }
};

/**
 * un tracker element
 */
var trackingElement = new _trackingElement.TrackingElement(trackingItem);
describe("Subscription Reducer", function () {
  it("reducer for no tracking action", function () {
    var action = {
      type: "autre",
      payload: {
        trackerType: trackingElement.trackerType,
        trackingElement: trackingElement,
        viewedPagedId: 23
      }
    };
    var state = (0, _trackingReducer.TrackingReducer)(_initiateState.InitiateState, action);
    expect(state.viewedPagedId).toEqual(undefined);
  });
  it("reducer for INIT_TRACK_ELEMENT_DONE", function () {
    var action = {
      type: _trackingAction.INIT_TRACK_ELEMENT_DONE,
      payload: {
        trackerType: trackingElement.trackerType,
        trackingElement: trackingElement,
        viewedPagedId: 23
      }
    };
    var state = (0, _trackingReducer.TrackingReducer)(_initiateState.InitiateState, action);
    expect(state.viewedPagedId).toEqual(action.payload.viewedPagedId);
    expect(_viewedPageIdHelper.ViewedPageIdHelper.instance.getViewedPageId()).toEqual(state.viewedPagedId);
  });
  it("reducer for TRACK_ELEMENT_DONE", function () {
    var action = {
      type: _trackingAction.TRACK_ELEMENT_DONE,
      payload: {
        trackerType: trackingElement.trackerType,
        trackingElement: trackingElement,
        viewedPagedId: 23
      }
    };
    var state = (0, _trackingReducer.TrackingReducer)(_initiateState.InitiateState, action);
    var keysState = Object.keys(state.tracked);
    expect((0, _typeof2["default"])(state.tracked)).toEqual("object");
    var temp = state.tracked[keysState[0]].mongo;
    var state2 = (0, _trackingReducer.TrackingReducer)(state, action);
    expect((0, _typeof2["default"])(state.tracked)).toEqual("object");
    expect(state2.tracked[keysState[0]].mongo).toEqual(temp + 1);
  });
});