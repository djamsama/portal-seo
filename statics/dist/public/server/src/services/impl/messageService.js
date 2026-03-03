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
var MessagesService = /*#__PURE__*/function (_RequestService) {
  function MessagesService() {
    (0, _classCallCheck2["default"])(this, MessagesService);
    return _callSuper(this, MessagesService, arguments);
  }
  (0, _inherits2["default"])(MessagesService, _RequestService);
  return (0, _createClass2["default"])(MessagesService, [{
    key: "saveMessage",
    value: function saveMessage(message) {
      return this.post("/ajax/myspace/secure/".concat(message.leadContext, "-detail/sendMessage/"), message);
    }
  }, {
    key: "markMessagesAsRead",
    value: function markMessagesAsRead(leadContext, rfqContractorId) {
      return this.put("/ajax/myspace/secure/".concat(leadContext, "-detail/markMessagesAsRead/"), rfqContractorId);
    }

    /**
     * Ajout d'une pièce jointe.
     * @param {*} message les informations relatives au message avec la P.J.
     */
  }, {
    key: "addAttachment",
    value: function addAttachment(message, leadContext, callback) {
      return this.postFormData("/ajax/myspace/secure/".concat(leadContext, "-detail/addAttachment/"), message, callback);
    }

    /**
     * Suppression d'une pièce jointe.
     * @param {*} message les informations relatives au message avec la P.J.
     */
  }, {
    key: "deleteAttachment",
    value: function deleteAttachment(message, leadContext) {
      return this.post("/ajax/myspace/secure/".concat(leadContext, "-detail/deleteAttachment/"), message);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = MessagesService;