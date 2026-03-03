"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _ = _interopRequireDefault(require("./.."));
describe("<ErrorBoundary />", function () {
  it("should render children when passed in", function () {
    var wrapper = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "unique"
    })));
    expect(wrapper.contains(/*#__PURE__*/_react["default"].createElement("div", {
      className: "unique"
    }))).toEqual(true);

    /** Page desactivée pour le moment */
  });
});