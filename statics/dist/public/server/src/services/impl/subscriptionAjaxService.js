"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SubscriptionAjaxService = /*#__PURE__*/function (_RequestService) {
  function SubscriptionAjaxService(locale, baseUrl) {
    var _this;
    (0, _classCallCheck2["default"])(this, SubscriptionAjaxService);
    _this = _callSuper(this, SubscriptionAjaxService, [{
      baseUrl: baseUrl,
      locale: locale
    }]);
    _this.url = "/ajax/myspace/secure/";
    return _this;
  }
  (0, _inherits2["default"])(SubscriptionAjaxService, _RequestService);
  return (0, _createClass2["default"])(SubscriptionAjaxService, [{
    key: "subscribe",
    value: function subscribe(mediaType, subscribed, universId, auto) {
      var data = universId ? {
        mediaType: mediaType,
        subscribed: subscribed,
        universId: universId,
        auto: auto
      } : {
        mediaType: mediaType,
        subscribed: subscribed,
        auto: auto
      };
      return this.subscription(data);
    }
  }, {
    key: "subscription",
    value: function subscription(data) {
      return this.post("".concat(this.url, "subscription"), data);
    }
  }, {
    key: "subscriptions",
    value: function subscriptions(mediaType, subscribed) {
      var isThematic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var auto = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (isThematic) {
        return this.subscriptionsWithThematic(mediaType, subscribed, auto);
      }
      return this.post("".concat(this.url, "newsletters/subscriptions"), {
        mediaType: mediaType,
        subscribed: subscribed,
        auto: auto
      });
    }
  }, {
    key: "subscriptionsWithThematic",
    value: function subscriptionsWithThematic(mediaType, subscribed) {
      var auto = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return this.post("".concat(this.url, "newsletters/subscriptions"), {
        mediaType: mediaType,
        subscribed: subscribed,
        auto: auto
      }).then(this.subscribe("THEMATIC", true, false, false));
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = SubscriptionAjaxService;