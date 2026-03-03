"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _initiateState = require("../initiateState");
test("initiateState", function () {
  var unState = (0, _initiateState.InitiateState)();
  expect((0, _typeof2["default"])(_initiateState.InitiateState)).toEqual("function");
  expect((0, _typeof2["default"])(unState.Application)).toEqual("object");

  // eslint-disable-next-line no-underscore-dangle
  window.__preloadState__ = {
    Application: {
      test: "result test"
    }
  };
  var unAutreState = (0, _initiateState.InitiateState)();
  expect(unAutreState.Application.test).toEqual("result test");
});