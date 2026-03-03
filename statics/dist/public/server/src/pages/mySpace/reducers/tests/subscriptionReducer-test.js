"use strict";

var _initiateState = require("../../../../initiateState");
var _subscriptionReducer = require("../subscriptionReducer");
// Action.SUBSCRIPTION_SUBMIT_FAILED:SUBSCRIPTION_SUBMIT_SUCCESS
describe("Subscription Reducer", function () {
  it("reducer for SUBSCRIPTION_SUBMIT_SUCCESS", function () {
    var action = {
      type: "SUBSCRIPTION_SUBMIT_SUCCESS",
      payload: {
        data: {
          responseStatus: 200,
          content: null,
          errors: [],
          functionalErrors: []
        },
        id: "NEWSLETTER2",
        subscribed: true
      }
    };
    var state = (0, _subscriptionReducer.SubscriptionReducer)(_initiateState.InitiateState, action);
    expect(state.subscriptionResult.success).toEqual(true);
    expect(state.subscriptionResult.subscribed);
  });
  it("reducer for SUBSCRIPTION_SUBMIT_FAILED", function () {
    var action = {
      type: "SUBSCRIPTION_SUBMIT_FAILED",
      payload: {
        data: {
          responseStatus: 200,
          content: null,
          errors: [],
          functionalErrors: []
        },
        id: "NEWSLETTER2",
        subscribed: false
      }
    };
    var state = (0, _subscriptionReducer.SubscriptionReducer)(_initiateState.InitiateState, action);
    expect(state.subscriptionResult.success).toEqual(false);
    expect(state.subscriptionResult.subscribed);
  });
  it("reducer for SUBSCRIPTION_SUBMIT_FAILED", function () {
    var initiateState = _initiateState.InitiateState;
    var action = {
      type: "OTHER",
      payload: {
        data: {
          responseStatus: 200,
          content: null,
          errors: [],
          functionalErrors: []
        },
        id: "NEWSLETTER2",
        subscribed: false
      }
    };
    var state = (0, _subscriptionReducer.SubscriptionReducer)(initiateState, action);
    expect(state).toEqual(initiateState);
  });
  it("reducer for SUBSCRIPTION_SUBMIT_FAILED", function () {
    var initiateState = _initiateState.InitiateState;
    var action = {
      type: "OTHER",
      payload: {
        data: {
          responseStatus: 200,
          content: null,
          errors: [],
          functionalErrors: []
        },
        id: "NEWSLETTER2",
        subscribed: false
      }
    };
    var state = (0, _subscriptionReducer.SubscriptionReducer)(initiateState, action);
    expect(state).toEqual(initiateState);
  });
});