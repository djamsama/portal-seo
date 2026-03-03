"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _index = _interopRequireDefault(require("../index"));
var _exhibitWithUsDetails = require("../styles/exhibitWithUsDetails");
test("ExhibitWithUsDetails", function () {
  var exhibitWithUsDetails = mount(/*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: "fr",
    key: "fr",
    message: {}
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));
  expect(exhibitWithUsDetails.find(_exhibitWithUsDetails.ExhibitWithUsWrapper).exists()).toEqual(true);
});