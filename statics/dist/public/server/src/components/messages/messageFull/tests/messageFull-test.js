"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _messageSender = _interopRequireDefault(require("../../messageSender"));
var _borderMessage = _interopRequireDefault(require("../../borderMessage"));
var mockRfq = require("../../../../../tools/utils-test/assets/rfq/mockRfq.json");
var message = mockRfq.supplierHistory[1].history[0];
test("test messageFull", function () {
  // eslint-disable-next-line no-undef
  var messageFull = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    message: message
  }));
  expect(messageFull.find(_messageSender["default"]).exists()).toEqual(true);
  expect(messageFull.find(_borderMessage["default"]).exists()).toEqual(true);
});