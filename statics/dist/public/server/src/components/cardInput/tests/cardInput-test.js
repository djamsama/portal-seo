"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require(".."));
describe("CardInput", function () {
  it("", function () {
    expect.assertions(1);
    try {
      shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
        value: "foo"
      }));
    } catch (err) {
      expect(err.message).toStrictEqual("CardInput must be inside a CardField");
    }
  });
});