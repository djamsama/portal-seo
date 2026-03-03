"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
test("test popup", function () {
  var contentStyle = {
    margin: "10px"
  };
  var button = /*#__PURE__*/_react["default"].createElement("button", {
    type: "button"
  }, "Test Trigger Element");
  var popup = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    trigger: button,
    contentstyle: contentStyle
  }));
  expect(popup.find({
    contentstyle: contentStyle
  }).length).toBeGreaterThan(1);
});