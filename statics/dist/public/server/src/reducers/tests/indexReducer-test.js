"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _index = _interopRequireDefault(require("../index"));
test("reducer index", function () {
  expect((0, _typeof2["default"])(_index["default"])).toEqual("function");
});