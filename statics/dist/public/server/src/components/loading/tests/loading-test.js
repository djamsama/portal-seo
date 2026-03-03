"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _index = _interopRequireDefault(require("../index"));
var testColor = "#676869";
var testSrc = "http://urlDeLImage";
test("Loading false", function () {
  var loadingWrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    color: testColor,
    active: false
  }));
  expect(loadingWrapper.find("div")).toHaveLength(1);
  expect(loadingWrapper.find({
    color: testColor
  })).toHaveLength(0);
});
test("Loading true", function () {
  var loadingWrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    overlay: true,
    spinnerSize: 100,
    color: "#676869",
    active: true
  }));
  expect(loadingWrapper.find({
    color: testColor
  })).toHaveLength(1);
  expect(loadingWrapper.find({
    spinnerSize: 100
  })).toHaveLength(1);
  expect(loadingWrapper.find({
    src: testSrc
  })).toHaveLength(0);
});
test("Loading true spinner img", function () {
  var loadingWrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    overlay: true,
    spinnerSize: 100,
    src: testSrc,
    color: "#676869",
    active: true
  }));
  expect(loadingWrapper.find({
    color: testColor
  })).toHaveLength(0);
  expect(loadingWrapper.find({
    src: testSrc
  })).toHaveLength(1);
});