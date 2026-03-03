"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollTopHelper = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var ScrollTopHelper = exports.ScrollTopHelper = /*#__PURE__*/function () {
  function ScrollTopHelper() {
    (0, _classCallCheck2["default"])(this, ScrollTopHelper);
  }
  return (0, _createClass2["default"])(ScrollTopHelper, null, [{
    key: "scrollToTop",
    value: function scrollToTop(duration) {
      if (document.scrollingElement.scrollTop === 0) return;
      var cosParameter = document.scrollingElement.scrollTop / 2;
      var scrollCount = 0;
      var oldTimestamp = null;
      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
          if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
          document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
  }]);
}();