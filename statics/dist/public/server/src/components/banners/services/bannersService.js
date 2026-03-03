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
var _requestService = _interopRequireDefault(require("../../../services/impl/requestService"));
var _constants = require("../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BannersService = /*#__PURE__*/function (_RequestService) {
  function BannersService() {
    (0, _classCallCheck2["default"])(this, BannersService);
    return _callSuper(this, BannersService, arguments);
  }
  (0, _inherits2["default"])(BannersService, _RequestService);
  return (0, _createClass2["default"])(BannersService, [{
    key: "getHomeBanners",
    value: function getHomeBanners() {
      var homeRoute = "/ajax/home/banner/list.json";
      return this.get(homeRoute);
    }
  }, {
    key: "getStandBanners",
    value: function getStandBanners(companyId) {
      var standRoute = "/ajax/stand/banner/company/".concat(companyId, "/list.json");
      return this.get(standRoute);
    }
  }, {
    key: "getBanners",
    value: function getBanners(companyId, route) {
      switch (route) {
        case _constants.ROUTE_HOME:
          {
            return this.getHomeBanners();
          }
        case _constants.ROUTE_STAND_PRODUCT:
        case _constants.ROUTE_STAND_CATALOG:
        case _constants.ROUTE_STAND_CATALOG_VIEW:
          {
            return this.getStandBanners(companyId, route);
          }
        case _constants.ROUTE_REQUEST_FORM:
          {
            return Promise.resolve({
              data: {
                content: {
                  bannerList: []
                }
              }
            });
          }
        default:
          {
            return this.getHomeBanners();
          }
      }
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = BannersService;