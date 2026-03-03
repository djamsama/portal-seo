"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBoxHelperInstance = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var SearchBoxHelper = /*#__PURE__*/function () {
  function SearchBoxHelper() {
    (0, _classCallCheck2["default"])(this, SearchBoxHelper);
  }
  return (0, _createClass2["default"])(SearchBoxHelper, [{
    key: "isOut",
    value: function isOut(ev, element) {
      if (!element || !(element && element.nodeType === 1)) {
        return false;
      }
      var x = ev.clientX;
      var y = ev.clientY;
      var rect = element.getBoundingClientRect();
      var squareMinX = rect.left;
      var squareMinY = rect.top;
      var squareMaxX = squareMinX + rect.width;
      var squareMaxY = squareMinY + rect.height;
      var out = x < squareMinX || x > squareMaxX || y < squareMinY - 3 || y > squareMaxY;
      return out;
    }
  }]);
}();
var SearchBoxHelperInstance = exports.SearchBoxHelperInstance = new SearchBoxHelper();