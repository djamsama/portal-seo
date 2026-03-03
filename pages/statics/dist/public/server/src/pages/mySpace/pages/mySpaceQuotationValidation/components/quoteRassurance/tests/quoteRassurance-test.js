"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require(".."));
test("quoteRassurance ", function () {
  var quoteRassurance = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_["default"], null));
  expect(quoteRassurance.find(_["default"])).toHaveLength(1);
});