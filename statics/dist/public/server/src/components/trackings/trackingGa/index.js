"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TrackingGaDisplay", {
  enumerable: true,
  get: function get() {
    return _display["default"];
  }
});
Object.defineProperty(exports, "TrackingGaErrors", {
  enumerable: true,
  get: function get() {
    return _errors["default"];
  }
});
Object.defineProperty(exports, "TrackingGaExit", {
  enumerable: true,
  get: function get() {
    return _exit["default"];
  }
});
Object.defineProperty(exports, "WebVitalsGa", {
  enumerable: true,
  get: function get() {
    return _webVitals["default"];
  }
});
var _display = _interopRequireDefault(require("./components/display"));
var _exit = _interopRequireDefault(require("./components/exit"));
var _errors = _interopRequireDefault(require("./components/errors"));
var _webVitals = _interopRequireDefault(require("./components/webVitals"));