"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackingService = exports.TrackingService = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var TrackingService = exports.TrackingService = /*#__PURE__*/function (_RequestService) {
  function TrackingService() {
    var _this;
    (0, _classCallCheck2["default"])(this, TrackingService);
    _this = _callSuper(this, TrackingService);
    _this.trackerMap = new Map();
    return _this;
  }
  (0, _inherits2["default"])(TrackingService, _RequestService);
  return (0, _createClass2["default"])(TrackingService, [{
    key: "addTracker",
    value: function addTracker(tracker) {
      if (tracker !== undefined && tracker.track) {
        this.trackerMap.set(tracker.getType(), tracker);
      }
    }
  }, {
    key: "sendTracking",
    value: function sendTracking(trackerType, elt, viewedPageId) {
      if ((typeof elt.status === "undefined" || elt.status <= 0) && this.trackerMap.has(trackerType)) {
        var tracker = this.trackerMap.get(trackerType);
        if (tracker) {
          return tracker.track(elt, viewedPageId);
        }
      }
      return Promise.reject(elt);
    }
  }, {
    key: "getTracking",
    value: function getTracking(bodyTrackingParam, language) {
      var tracker = this.trackerMap.get("mysql");
      if (tracker) {
        return tracker.track(bodyTrackingParam, null, language);
      }
      return Promise.reject(bodyTrackingParam);
    }
  }]);
}(_requestService["default"]);
var trackingService = exports.trackingService = new TrackingService();