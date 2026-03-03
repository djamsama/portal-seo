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
var SocialLinksService = /*#__PURE__*/function (_RequestService) {
  function SocialLinksService(context) {
    (0, _classCallCheck2["default"])(this, SocialLinksService);
    if (!context) {
      throw new Error("Cannot do the request without context");
    }
    return _callSuper(this, SocialLinksService, [{
      baseUrl: context.config.portal.baseUrl
    }]);
  }
  (0, _inherits2["default"])(SocialLinksService, _RequestService);
  return (0, _createClass2["default"])(SocialLinksService, [{
    key: "getSocialLinks",
    value: function getSocialLinks() {
      return this.get("/ajax/social/links.json");
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = SocialLinksService;