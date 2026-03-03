"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
/* eslint-disable no-console */
/** Envoi de l'evenement ga display */
var TrackingGaErrors = /*#__PURE__*/function () {
  function TrackingGaErrors() {
    (0, _classCallCheck2["default"])(this, TrackingGaErrors);
  }
  return (0, _createClass2["default"])(TrackingGaErrors, null, [{
    key: "sendErrorEvent",
    value: function sendErrorEvent(category, action, formErrors) {
      if (typeof _withGoogleAnalytics.googleAnalytics === "undefined") {
        console.error("ga, undefined googleAnalytics");
        return;
      }
      if (typeof category === "undefined") {
        console.error("ga, undefined category");
        return;
      }
      if (!action) {
        console.error("ga, undefined action");
        return;
      }
      var newEvent = {
        action: action,
        category: category,
        label: "displayError"
      };

      // eslint-disable-next-line no-restricted-syntax
      for (var _i = 0, _Object$entries = Object.entries(formErrors); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 1),
          key = _Object$entries$_i[0];
        newEvent.label += "/".concat(key);
      }
      _withGoogleAnalytics.googleAnalytics.event(newEvent);
    }
  }]);
}();
var _default = exports["default"] = TrackingGaErrors;