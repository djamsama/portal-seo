"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoTrackerInstance = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _isNumber = _interopRequireDefault(require("lodash/isNumber"));
var _startsWith = _interopRequireDefault(require("lodash/startsWith"));
var _replace = _interopRequireDefault(require("lodash/replace"));
var _trackingService = require("../services/impl/trackingService");
var _constants = require("../commons/constants");
var MongoTracker = /*#__PURE__*/function () {
  function MongoTracker() {
    (0, _classCallCheck2["default"])(this, MongoTracker);
    this.type = "mongo";
    this.rootUrl = _constants.MONGO_TRACKING_URL.ROOT;
    this.natural = "natural/";
    this.pushed = "pushed/";
    this.survey = "survey/";
    this.view = "view/";
    this.click = "click/";
    this.banner = "banner/";
    this.tracking = "tracking/";
    this.clickThrough = "clickthrough";
    this.list = "".concat("".concat(this.rootUrl).concat(_constants.MONGO_TRACKING_URL.FRONT, "/").concat(this.natural), "view/tracking/list/");
    this.listPushed = "".concat("".concat(this.rootUrl).concat(_constants.MONGO_TRACKING_URL.FRONT, "/").concat(this.pushed), "view/tracking/list/");
    this.trailing = _constants.MONGO_TRACKING_URL.SINGLE;
    this.trailingPushed = _constants.MONGO_TRACKING_URL.PUSHED;
    this.trailingSurvey = _constants.MONGO_TRACKING_URL.SURVEY;
    this.trailingBanner = _constants.MONGO_TRACKING_URL.BANNER;
    this.keyMap = new Map();
    this.keyMap.set("pageTypeId", "pt");
    this.keyMap.set("tokenId", "ti");
    this.keyMap.set("placementId", "pi");
    this.keyMap.set("elementTypeId", "et");
    this.keyMap.set("elementId", "ei");
    this.keyMap.set("displayMode", "dm");
    this.keyMap.set("companyId", "ci");
    this.keyMap.set("campaignId", "ca");
    this.keyMap.set("reasonId", "ri");
    this.keyMap.set("rating", "ra");
    this.keyMap.set("action", "ac");
    this.keyMap.set("orderId", "oi");
    this.keyMap.set("deviceId", "di");
    this.keyMap.set("viewedPageId", "vp");
    this.trackingServiceInstance = new _trackingService.TrackingService();
  }
  return (0, _createClass2["default"])(MongoTracker, [{
    key: "getUrl",
    value: function getUrl(element) {
      var url = "".concat(this.rootUrl + element.trackerFrom, "/");
      var trailing = this.trailing;
      switch (true) {
        case element.pushed === true:
          url += this.pushed;
          trailing = this.trailingPushed;
          break;
        case element.survey === true:
          url += this.survey;
          trailing = this.trailingSurvey;
          if (element && element.reasonId) {
            trailing += "/{reasonId}";
          }
          break;
        case element.clickThrough === true:
          url = "".concat(this.rootUrl).concat(this.clickThrough);
          return url;
        case element.elementTypeId === 7:
          url += this.banner;
          trailing = this.trailingBanner;
          break;
        default:
          url += this.natural;
          break;
      }
      trailing += element.companyId === 0 && element.pushed ||
      // pushed
      element.companyId !== 0 && (0, _isNumber["default"])(element.companyId) && element.elementType !== "emag" && !element.survey // tous les autres sauf emag et survey
      ? "/{companyId}" : "";
      if (element.trailing) {
        trailing = element.trailing;
      }
      if (element.elementTypeId !== 7) {
        if (element.eventType === "view" && element.elementTypeId !== 7) {
          url += this.view;
        } else {
          url += this.click;
        }
      }
      url += this.tracking + trailing;
      return url;
    }
  }, {
    key: "replaceUrlParam",
    value: function replaceUrlParam(rawUrl, element, viewedPageId) {
      var _this = this;
      var url = rawUrl;
      if (!(0, _isEmpty["default"])(url) && (0, _startsWith["default"])(url, this.rootUrl)) {
        Object.keys(element).forEach(function (key) {
          if (_this.keyMap.has(key)) {
            var keyToReplace = "{".concat(_this.keyMap.get(key) || "", "}");
            url = (0, _replace["default"])(url, keyToReplace, element[key]);
            var keyToReplace2 = "{".concat(key, "}");
            url = (0, _replace["default"])(url, keyToReplace2, element[key]);
          }
        });
      }
      url = (0, _replace["default"])(url, "{vp}", viewedPageId.toString());
      url = (0, _replace["default"])(url, "{viewedPageId}", viewedPageId.toString());
      return url;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "track",
    value: function track(element, viewedPageId) {
      if (!viewedPageId || typeof viewedPageId !== "number" || typeof viewedPageId === "number" && viewedPageId === 0) {
        return Promise.reject(new Error("incorrect viewedPageId "));
      }
      if (!element.pageTypeId || element.pageTypeId === -1) {
        return Promise.reject(new Error("incorrect pageTypeId "));
      }
      if (element.elementList && element.elementList.length && element.elementList.length > 0) {
        return this.trackList(element, viewedPageId);
      }
      return this.trackUnique(element, viewedPageId);
    }
  }, {
    key: "trackList",
    value: function trackList(trackingElement, viewedPageId) {
      if (trackingElement.elementList.length <= 0) {
        return Promise.reject(new Error("no element"));
      }
      var url = this.list + viewedPageId.toString();
      if (trackingElement.pushed) {
        url = this.listPushed + viewedPageId.toString();
      }
      var data = {
        pageTypeId: trackingElement.pageTypeId,
        elementList: trackingElement.elementList
      };
      return this.trackingServiceInstance.post(url, data);
    }
  }, {
    key: "trackUnique",
    value: function trackUnique(element, viewedPageId) {
      var rawUrl = this.getUrl(element);
      if (element.clickThrough !== false) {
        var data = {
          companyId: element.companyId,
          elementId: element.elementId,
          elementTypeId: element.elementTypeId,
          pageTypeId: element.pageTypeId
        };
        return this.trackingServiceInstance.post(rawUrl, data);
      }
      var url = this.replaceUrlParam(rawUrl, element, viewedPageId);
      if (url.indexOf("{") === -1 && (0, _isNumber["default"])(viewedPageId)) {
        return this.trackingServiceInstance.post(url);
      }
      return Promise.reject(new Error("no element"));
    }
  }]);
}();
var mongoTrackerInstance = exports.mongoTrackerInstance = new MongoTracker();