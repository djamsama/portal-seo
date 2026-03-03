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
var SurveySatisfactionService = /*#__PURE__*/function (_RequestService) {
  function SurveySatisfactionService() {
    var _this;
    (0, _classCallCheck2["default"])(this, SurveySatisfactionService);
    _this = _callSuper(this, SurveySatisfactionService);
    _this.requestUrl = "/ajax/myspace/secure/visitorNotContacted/submit/";
    _this.rfqUrl = "/ajax/myspace/secure/visitorRfq/submit/";
    return _this;
  }
  (0, _inherits2["default"])(SurveySatisfactionService, _RequestService);
  return (0, _createClass2["default"])(SurveySatisfactionService, [{
    key: "saveSurveyRequest",
    value: function saveSurveyRequest(values, leadContext) {
      var url = leadContext === "rfq" ? this.rfqUrl : this.requestUrl;
      return this.post("".concat(url), values);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = SurveySatisfactionService;