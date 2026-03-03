"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRACKING_SUBTYPE = exports.TRACKING_EVENTS = exports.MONGO_TRACKING_URL = exports.ELEMENT_TYPE = exports.DELAY_TO_RETRY = void 0;
var MONGO_TRACKING_URL = exports.MONGO_TRACKING_URL = {
  ROOT: "/tracking/rest/external/v1/",
  SINGLE: "{viewedPageId}/{pageTypeId}/{placementId}/{elementTypeId}/{elementId}/{displayMode}",
  PUSHED: "{viewedPageId}/{pageTypeId}/{campaignId}/{placementId}/{elementTypeId}/{elementId}/{displayMode}",
  SURVEY: "{viewedPageId}/{pageTypeId}/{rating}",
  FRONT: "front",
  BANNER: "{action}/{deviceId}/{viewedPageId}/{pageTypeId}/{orderId}/{campaignId}/{placementId}",
  CLICKTHROUGH: "clickthrough",
  COMPANY_ID: "{companyId}"
};

// eslint-disable-next-line no-use-before-define
var ELEMENT_TYPE = exports.ELEMENT_TYPE = {
  logo: 1,
  product: 4,
  pdf: 5,
  project: 8,
  trends: 9,
  emag: 10,
  banner: 7
};

// eslint-disable-next-line no-use-before-define
var TRACKING_EVENTS = exports.TRACKING_EVENTS = {
  MODE_DEFAULT: "default",
  MODE_THUMBNAILS: "thumbnail",
  MODE_HOVER: "hover",
  MODE_DETAIL: "detail",
  EVENT_TYPE_VIEW: "view",
  EVENT_TYPE_CLICK: "click",
  EVENT_TYPE_HOVER: "hover"
};

// eslint-disable-next-line no-use-before-define
var TRACKING_SUBTYPE = exports.TRACKING_SUBTYPE = {
  NATURAL: "natural",
  PUSHED: "pushed",
  SURVEY: "survey"
};
var DELAY_TO_RETRY = exports.DELAY_TO_RETRY = 2000;