"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _grabberLink = require("../styles/grabberLink");
var _context = require("../../../../../context");
var context = {
  config: {
    portal: {
      domain: "test",
      baseUrl: "http://UneBaseUrl"
    }
  }
};
test("test GrabberLink structure", function () {
  var grabberLink = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));

  /* Le Composant est constitué d'un styled component 'LinkContainer' par défaut. */
  expect(grabberLink.find(_grabberLink.LinkContainer)).toHaveLength(1);
});