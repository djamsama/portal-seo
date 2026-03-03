"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _index = _interopRequireDefault(require("../index"));
var _serverLogger = _interopRequireDefault(require("../server/serverLogger"));
test("logger", function () {
  _index["default"].log(" titre du log ", "message");
  _index["default"].info(" titre du log ", "message");
  _index["default"].warn(" titre du log ", "message");
  _index["default"].error(" titre du log ", "message");
  var serverLogger = new _serverLogger["default"]();
  serverLogger.log(" titre du log ", "message");
});