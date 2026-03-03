"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _menuUniverse = require("../menuUniverse");
var _universGroup = require("../styles/universGroup");
var _universGroupSubMenu = require("../styles/universGroupSubMenu");
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
(0, _mockAdapter.doMockSocial)();
test("Menu universe empty", function () {
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_menuUniverse.MenuUniverseComponent, null));
  expect(menu.find(_universGroup.MenuRow).exists()).toEqual(false);
});
test("Menu universe populated", function () {
  // eslint-disable-next-line global-require
  var mockMenu = require("../../../../tools/utils-test/assets/menu/menu.json");
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_menuUniverse.MenuUniverseComponent, {
    menu: mockMenu,
    generator: function generator() {}
  }));
  expect(menu.find(_universGroupSubMenu.MenuRow).exists()).toEqual(true);
});
test("Menu universe populated", function () {
  // eslint-disable-next-line global-require
  var mockMenu = require("../../../../tools/utils-test/assets/menu/menu.json");
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_menuUniverse.MenuUniverseComponent, {
    menu: mockMenu,
    generator: function generator() {},
    isHome: true
  }));
  expect(menu.find(_universGroup.MenuRow).exists()).toEqual(true);
});