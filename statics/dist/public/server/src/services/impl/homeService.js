"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _requestService = _interopRequireDefault(require("./requestService"));
var _constants = require("../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var HomeService = /*#__PURE__*/function (_RequestService) {
  function HomeService(context) {
    var _this;
    (0, _classCallCheck2["default"])(this, HomeService);
    if (context && context.config && context.config.portal) {
      _this = _callSuper(this, HomeService, [{
        baseUrl: context.config.portal.baseUrl
      }]);
    } else {
      _this = _callSuper(this, HomeService);
    }
    return (0, _assertThisInitialized2["default"])(_this);
  }
  (0, _inherits2["default"])(HomeService, _RequestService);
  return (0, _createClass2["default"])(HomeService, [{
    key: "getItems",
    value: function getItems(type, page) {
      var pageNumber = page ? page.toString() : (Date.now() % 10).toString();
      var news = this.get("/ajax/home/new-".concat(type, "/").concat(pageNumber, ".json"));
      var pageNumberPushed = page ? page.toString() : (Date.now() % 10).toString();
      var pusheds = this.get("/ajax/home/pushed-".concat(type, "/").concat(pageNumberPushed, ".json"));
      return Promise.all([pusheds, news]);
    }
  }, {
    key: "getEmag",
    value: function getEmag() {
      return this.get(_constants.APPLICATION.EMAGS.URL);
    }
  }, {
    key: "getGuides",
    value: function getGuides() {
      return this.get(_constants.APPLICATION.GUIDES.URL);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = HomeService;