"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mysqlTrackerInstance = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _trackingService = require("../services/impl/trackingService");
var _constants = require("../commons/constants");
var MysqlTracker = /*#__PURE__*/function () {
  function MysqlTracker() {
    (0, _classCallCheck2["default"])(this, MysqlTracker);
    this.type = "mysql";
    this.rootUrl = _constants.MONGO_TRACKING_URL.ROOT;
    this.trackingServiceInstance = new _trackingService.TrackingService();
  }
  return (0, _createClass2["default"])(MysqlTracker, [{
    key: "getUrl",
    value: function getUrl(language) {
      var url = "";
      if (language) {
        url = "".concat(this.rootUrl, "visit/").concat(language);
      } else {
        url = "".concat(this.rootUrl, "visit/fr");
      }
      return url;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "track",
    value: function track(bodyParam, viewedPageId, language) {
      var url = "";
      if (language) {
        url = this.getUrl(language);
      } else {
        url = this.getUrl();
      }
      if (viewedPageId && viewedPageId > 0) {
        url += "/".concat(viewedPageId.toString());
      }
      return this.trackingServiceInstance.post(url, bodyParam);
    }
  }]);
}();
var mysqlTrackerInstance = exports.mysqlTrackerInstance = new MysqlTracker();