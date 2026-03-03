"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _rate = require("../styles/rate");
describe("Rate", function () {
  it("rate 1", function () {
    var nb = 5;
    var value = 4;
    var size = 24;
    var color2 = "#ffd700";
    var rate = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      count: nb,
      edit: false,
      value: value,
      size: size,
      color2: color2
    }));
    expect(rate.find(_rate.StyledRate).find({
      color: color2
    })).toHaveLength(nb * 2);
    expect(rate.find(_rate.StyledRate).find({
      color: "gray"
    })).toHaveLength(nb * 2);
    expect(rate.find(_rate.StyledRate).find({
      size: "".concat(size, "px")
    }).exists()).toEqual(true);
  });
  it("rate 2", function () {
    var nb = 6;
    var value = 4;
    var size = 24;
    var color1 = "#fed4f0";
    var color2 = "#eed700";
    var rate = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      color1: color1,
      count: nb,
      edit: false,
      value: value,
      size: size,
      color2: color2
    }));
    expect(rate.find(_rate.StyledRate).find({
      color: color2
    })).toHaveLength(nb * 2);
    expect(rate.find(_rate.StyledRate).find({
      color: color1
    })).toHaveLength(nb * 2);
    expect(rate.find(_rate.StyledRate).find({
      size: "".concat(size, "px")
    }).exists()).toEqual(true);
  });
});