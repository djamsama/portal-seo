"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var UnsubscribeReasonHelper = exports["default"] = /*#__PURE__*/function () {
  function UnsubscribeReasonHelper() {
    (0, _classCallCheck2["default"])(this, UnsubscribeReasonHelper);
  }
  return (0, _createClass2["default"])(UnsubscribeReasonHelper, null, [{
    key: "getCancelationReasonForm",
    value:
    /**
     * Retourner la valeur 'cancelationReasonForm', à partir du context ou Redux Store
     */
    function getCancelationReasonForm(props, context) {
      var notEmptyToken = context.initData.notEmptyToken;
      if (notEmptyToken === true) {
        var unsubscribeCancelationReasonForm = context.initData.unsubscribeCancelationReasonForm;
        return unsubscribeCancelationReasonForm;
      }
      var content = props.content;
      return content.unsubscribeCancelationReasonForm;
    }

    /**
     * Retourner la valeur 'reasons', à partir du context ou Redux Store
     */
  }, {
    key: "getReasons",
    value: function getReasons(props, context) {
      var notEmptyToken = context.initData.notEmptyToken;
      if (notEmptyToken === true) {
        var reasons = context.initData.reasons;
        return reasons;
      }
      var content = props.content;
      return content.reasons;
    }
  }]);
}();