"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackActionList = exports.trackActionDone = exports.trackAction = exports.initTrackActionWorking = exports.initTrackActionError = exports.initTrackActionDone = exports.getViewedPageId = exports["default"] = exports.TRACK_ELEMENT_LIST = exports.TRACK_ELEMENT_INIT = exports.TRACK_ELEMENT_DONE = exports.TRACK_ELEMENT = exports.INIT_TRACK_ELEMENT_WORKING = exports.INIT_TRACK_ELEMENT_ERROR = exports.INIT_TRACK_ELEMENT_DONE = void 0;
var TRACK_ELEMENT_INIT = exports.TRACK_ELEMENT_INIT = "initTrackElement";
var TRACK_ELEMENT = exports.TRACK_ELEMENT = "trackElement";
var TRACK_ELEMENT_LIST = exports.TRACK_ELEMENT_LIST = "trackElementList";
var TRACK_ELEMENT_DONE = exports.TRACK_ELEMENT_DONE = "trackElementDone";
var INIT_TRACK_ELEMENT_DONE = exports.INIT_TRACK_ELEMENT_DONE = "initTrackElementDone";
var INIT_TRACK_ELEMENT_ERROR = exports.INIT_TRACK_ELEMENT_ERROR = "initTrackElementError";
var INIT_TRACK_ELEMENT_WORKING = exports.INIT_TRACK_ELEMENT_WORKING = "initTrackElementWorking";
var trackAction = exports.trackAction = function trackAction(trackingElement, viewedPageId, trackerType) {
  return {
    type: TRACK_ELEMENT,
    payload: {
      trackerType: trackerType || trackingElement.trackerType,
      trackingElement: trackingElement,
      viewedPageId: viewedPageId
    }
  };
};
var trackActionList = exports.trackActionList = function trackActionList(trackingElements, viewedPageId) {
  return {
    type: TRACK_ELEMENT_LIST,
    payload: {
      trackingElements: trackingElements,
      viewedPageId: viewedPageId
    }
  };
};
var getViewedPageId = exports.getViewedPageId = function getViewedPageId(bodyTrackingParam, language) {
  return {
    type: TRACK_ELEMENT_INIT,
    payload: {
      bodyTrackingParam: bodyTrackingParam,
      language: language
    }
  };
};
var initTrackActionWorking = exports.initTrackActionWorking = function initTrackActionWorking(id) {
  return {
    type: INIT_TRACK_ELEMENT_WORKING,
    payload: {
      viewedPagedId: id
    }
  };
};
var initTrackActionDone = exports.initTrackActionDone = function initTrackActionDone(id) {
  return {
    type: INIT_TRACK_ELEMENT_DONE,
    payload: {
      viewedPagedId: id
    }
  };
};
var initTrackActionError = exports.initTrackActionError = function initTrackActionError(error) {
  return {
    type: INIT_TRACK_ELEMENT_ERROR,
    payload: {
      error: error
    }
  };
};
var trackActionDone = exports.trackActionDone = function trackActionDone(trackingElement) {
  return {
    type: TRACK_ELEMENT_DONE,
    payload: {
      trackerType: trackingElement.trackerType,
      trackingElement: trackingElement
    }
  };
};
var _default = exports["default"] = {};