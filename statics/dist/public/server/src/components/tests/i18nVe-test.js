"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _i18nVe = require("../i18nVe");
describe("<I18nVe />", function () {
  it("should render children when passed in", function () {
    var i18nVe = (0, _enzyme.shallow)(/*#__PURE__*/_react["default"].createElement(_i18nVe.I18nVe, null, /*#__PURE__*/_react["default"].createElement("div", {
      id: "i18nVeId"
    })));
    expect(i18nVe.find({
      id: "i18nVeId"
    }).exists()).toEqual(true);
  });
});