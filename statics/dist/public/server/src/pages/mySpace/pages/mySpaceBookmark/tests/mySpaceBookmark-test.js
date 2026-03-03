"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require("../../.."));
var _index = _interopRequireDefault(require("../index"));
test("mySpaceBookmark", function () {
  var mySpaceBookmark = shallow(/*#__PURE__*/_react["default"].createElement(_index["default"], null));
  expect(mySpaceBookmark.find(_["default"]).exists()).toEqual(true);
});