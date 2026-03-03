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
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SubscribeService = /*#__PURE__*/function (_RequestService) {
  function SubscribeService(context) {
    (0, _classCallCheck2["default"])(this, SubscribeService);
    return _callSuper(this, SubscribeService, [{
      baseUrl: context.config.portal.baseUrl
    }]);
  }
  (0, _inherits2["default"])(SubscribeService, _RequestService);
  return (0, _createClass2["default"])(SubscribeService, [{
    key: "register",
    value: function register(data, context) {
      var booleanIds = data.universeIds;

      // Transformer la liste des boolean a une liste d'ids.
      if (booleanIds !== undefined && !(0, _isEmpty["default"])(booleanIds)) {
        var universeIds = [];
        for (var i = 0; i < booleanIds.length; i++) {
          if (booleanIds[i] === true) {
            universeIds.push(i);
          }
        }
        data.universeIds = universeIds;
      }
      return this.post(context.initData.subscribeRouteContext.url, data);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = SubscribeService;