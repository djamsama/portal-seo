"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewedPageIdHelper = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
// eslint-disable-next-line no-unused-vars
var singleton = Symbol("viewed page id singleton");
var singletonEnforcer = Symbol("viewed page id singleton");
var ViewedPageIdHelper = exports.ViewedPageIdHelper = /*#__PURE__*/function () {
  function ViewedPageIdHelper(enforcer) {
    (0, _classCallCheck2["default"])(this, ViewedPageIdHelper);
    if (enforcer !== singletonEnforcer) {
      throw new Error("Cannot construct ViewedPageIdHelper singleton");
    }
    this._viewedPageId = 0;
  }
  return (0, _createClass2["default"])(ViewedPageIdHelper, [{
    key: "getViewedPageId",
    value: function getViewedPageId() {
      return this._viewedPageId;
    }
  }, {
    key: "setViewedPageId",
    value: function setViewedPageId(viewedPageId) {
      if (this._viewedPageId === 0) {
        this._viewedPageId = viewedPageId;
      }
    }
  }], [{
    key: "instance",
    get: function get() {
      if (!this.singleton) {
        this.singleton = new ViewedPageIdHelper(singletonEnforcer);
      }
      return this.singleton;
    }
  }]);
}();