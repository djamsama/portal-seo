"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _context = require("../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _currentEnv = require("../styles/currentEnv");
/* eslint-disable no-undef, no-unused-vars */

var context = {
  initData: {
    currentEnvironmentName: "dev01",
    environmentMessage: "Vous êtes sur l'environnement"
  }
};
test("test EnvironmentName structure", function () {
  var currentEnvrionmentName = mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    currentEnvironmentName: context.initData.currentEnvironmentName,
    environmentMessage: context.initData.environmentMessage
  })));

  /* Le Composant est constitué des styled components suivants 'AlertBanner */
  expect(currentEnvrionmentName.find(_currentEnv.AlertBanner)).toHaveLength(1);
});