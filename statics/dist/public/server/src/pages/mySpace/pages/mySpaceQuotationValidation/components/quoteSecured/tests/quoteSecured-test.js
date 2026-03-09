"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require(".."));
test("quoteSecured ", function () {
  var quoteSecured = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_["default"], null));
  expect(quoteSecured.find(_["default"])).toHaveLength(1);
});