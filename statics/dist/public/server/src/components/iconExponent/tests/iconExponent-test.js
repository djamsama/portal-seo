"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require(".."));
describe("IconExponent", function () {
  it("one color", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      name: "file alternate outline",
      exponentName: "plus circle",
      exponentColor: "green",
      size: "large"
    }));
    var main = wrapper.find("Icon").first().props();
    expect(main.name).toStrictEqual("file alternate outline");
    expect(main.color).toBeUndefined();
    var exponent = wrapper.find("Icon").last().props();
    expect(exponent.name).toStrictEqual("plus circle");
    expect(exponent.color).toStrictEqual("green");
  });
  it("two color", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      color: "blue",
      name: "users",
      exponentName: "bullhorn",
      exponentColor: "red",
      size: "huge"
    }));
    var main = wrapper.find("Icon").first().props();
    expect(main.name).toStrictEqual("users");
    expect(main.color).toStrictEqual("blue");
    var exponent = wrapper.find("Icon").last().props();
    expect(exponent.name).toStrictEqual("bullhorn");
    expect(exponent.color).toStrictEqual("red");
  });
  it("black", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      name: "chess rook",
      exponentName: "square full"
    }));
    var main = wrapper.find("Icon").first().props();
    expect(main.name).toStrictEqual("chess rook");
    expect(main.color).toBeUndefined();
    var exponent = wrapper.find("Icon").last().props();
    expect(exponent.name).toStrictEqual("square full");
    expect(exponent.color).toBeUndefined();
  });
});