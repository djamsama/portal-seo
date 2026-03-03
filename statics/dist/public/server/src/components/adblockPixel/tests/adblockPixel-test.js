"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _adblockPixel = require("../styles/adblockPixel");
var _context = require("../../../context");
var context = {
  config: {
    portal: {
      domain: "test",
      baseUrl: "http://UneBaseUrl"
    }
  }
};
test("test AdblockPixel structure", function () {
  var adblockPixel = mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));

  /* Le Composant est constitué d'un styled component 'Pixel' par défaut. */
  expect(adblockPixel.find(_adblockPixel.Pixel)).toHaveLength(1);
});