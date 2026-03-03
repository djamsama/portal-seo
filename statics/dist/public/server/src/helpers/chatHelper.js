"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatHelper = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var ID_TRACKING_GTM = "idz_btn";
var ChatHelper = exports.ChatHelper = /*#__PURE__*/function () {
  function ChatHelper() {
    (0, _classCallCheck2["default"])(this, ChatHelper);
  }
  return (0, _createClass2["default"])(ChatHelper, null, [{
    key: "removeChat",
    value: function removeChat() {
      if (document && document.getElementById(ID_TRACKING_GTM)) {
        // s'il existe on supprime le chat
        window.iAdvize.Templates.hideDialog();
      } else {
        // sinon on essaie a nv plus tard pour lui laisser le temps de se charger
        setTimeout(function () {
          if (window && window.iAdvize && window.iAdvize.Templates) {
            window.iAdvize.Templates.hideDialog();
          }
        }, 3000);
      }
    }
  }]);
}();