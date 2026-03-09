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
var VerifEmailService = exports["default"] = /*#__PURE__*/function (_RequestService) {
  function VerifEmailService(csrfToken, context) {
    (0, _classCallCheck2["default"])(this, VerifEmailService);
    var init = {
      contentType: "application/x-www-form-urlencoded",
      csrfToken: csrfToken
    };
    if (context) {
      init.baseUrl = context.config.portal.baseUrl;
    }
    return _callSuper(this, VerifEmailService, [init]);
  }
  (0, _inherits2["default"])(VerifEmailService, _RequestService);
  return (0, _createClass2["default"])(VerifEmailService, [{
    key: "verifEmail",
    value: function verifEmail(email) {
      var url = "ajax/validator/address.json";
      return this.post(url, "email=".concat(email));
    }
  }]);
}(_requestService["default"]);