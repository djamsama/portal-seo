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
var UnsubscribeReasonsService = /*#__PURE__*/function (_RequestService) {
  function UnsubscribeReasonsService(context) {
    (0, _classCallCheck2["default"])(this, UnsubscribeReasonsService);
    return _callSuper(this, UnsubscribeReasonsService, [{
      baseUrl: context.config.portal.baseUrl
    }]);
  }
  (0, _inherits2["default"])(UnsubscribeReasonsService, _RequestService);
  return (0, _createClass2["default"])(UnsubscribeReasonsService, [{
    key: "register",
    value: function register(data, context) {
      var booleanIds = data.reasonLabelIds;
      // Transformer la liste des boolean a une liste d'ids.
      if (booleanIds !== undefined && !(0, _isEmpty["default"])(booleanIds)) {
        var reasonLabelIds = [];
        for (var i = 0; i < booleanIds.length; i++) {
          if (booleanIds[i] === true) {
            reasonLabelIds.push(i);
          }
        }
        data.reasonLabelIds = reasonLabelIds;
      }
      var textAreas = data.textReasonValue;
      // Transformer la liste des String a une Map<id, value>.
      if (textAreas !== undefined && !(0, _isEmpty["default"])(textAreas)) {
        var textReasonValue = {};
        for (var i = 0; i < textAreas.length; i++) {
          if (textAreas[i] !== undefined && textAreas[i].length > 0) {
            textReasonValue[i.toString()] = textAreas[i];
          }
        }
        data.textReasonValue = textReasonValue;
      }
      return this.post(context.initData.unsubscribeReasonRouteContext, data);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = UnsubscribeReasonsService;