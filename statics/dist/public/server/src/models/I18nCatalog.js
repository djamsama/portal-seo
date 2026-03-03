"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nCatalog = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _forEach = _interopRequireDefault(require("lodash/forEach"));
var I18nCatalog = exports.I18nCatalog = /*#__PURE__*/function () {
  function I18nCatalog() {
    (0, _classCallCheck2["default"])(this, I18nCatalog);
    this.catalog = new Map();
    this.version = "0.0.0";
  }
  return (0, _createClass2["default"])(I18nCatalog, [{
    key: "getCatalogFromString",
    value: function getCatalogFromString(source) {
      var _this = this;
      if (typeof source !== "undefined" && source !== null && source != "") {
        var parsing = JSON.parse(source);
        this.version = parsing.version;
        (0, _forEach["default"])(parsing.data, function (v, k) {
          return _this.catalog.set(k, v);
        });
      }
    }
  }, {
    key: "getCatalog",
    value: function getCatalog() {
      return this.catalog;
    }
  }]);
}();