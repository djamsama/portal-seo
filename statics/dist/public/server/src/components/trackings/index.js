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
Object.defineProperty(exports, "TrackingGaExit", {
  enumerable: true,
  get: function get() {
    return _exit["default"];
  }
});
var _display = _interopRequireDefault(require("./trackingGa/components/display"));
var _exit = _interopRequireDefault(require("./trackingGa/components/exit"));