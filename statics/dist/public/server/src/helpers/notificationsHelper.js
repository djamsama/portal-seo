"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var NotificationsHelper = exports["default"] = /*#__PURE__*/function () {
  function NotificationsHelper(intl, successMsgKey, failureMsgKey) {
    (0, _classCallCheck2["default"])(this, NotificationsHelper);
    if (successMsgKey) {
      this.successMsg = intl.formatMessage({
        id: successMsgKey
      });
    }
    if (failureMsgKey) {
      this.errorMsg = intl.formatMessage({
        id: failureMsgKey
      });
    }
  }
  return (0, _createClass2["default"])(NotificationsHelper, [{
    key: "getNotificationMessages",
    value: function getNotificationMessages() {
      return {
        error: this.errorMsg,
        success: this.successMsg
      };
    }
  }, {
    key: "getErrorMsg",
    value: function getErrorMsg() {
      return this.errorMsg;
    }
  }, {
    key: "getSuccessMsg",
    value: function getSuccessMsg() {
      return this.successMsg;
    }
  }]);
}();