"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _tile = _interopRequireDefault(require("../tile"));
test("Tile", function () {
  var render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      id: "test"
    }, "this is a test");
  };
  var mediaTemplates = "";
  var tile = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_tile["default"], {
    render: render,
    mediaTemplates: mediaTemplates,
    scaleRatio: "1"
  }));
  expect(tile.find({
    id: "test"
  })).toHaveLength(1);
  expect(tile.find({
    scaleRatio: "1"
  })).toHaveLength(1);
});