"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _universeGroup = require("../universeGroup");
var _universGroup = require("../styles/universGroup");
var _universGroupSubMenu = require("../styles/universGroupSubMenu");
test("UniverseGroup", function () {
  var universeGroup = mount(/*#__PURE__*/_react["default"].createElement(_universeGroup.UniverseGroupItem, null));
  expect(universeGroup.find(_universGroupSubMenu.UniverseGroupLabel).exists()).toEqual(true);
  expect(universeGroup.find(_universGroupSubMenu.UniverseGroupItemComponent).exists()).toEqual(true);
  universeGroup.find(_universGroupSubMenu.UniverseGroupItemComponent).simulate("click");
});
test("UniverseGroup noAccordeonLinkInsteadTo", function () {
  var universeGroup = mount(/*#__PURE__*/_react["default"].createElement(_universeGroup.UniverseGroupItem, {
    noAccordeonLinkInsteadTo: true
  }));
  expect(universeGroup.find(_universGroup.UniverseGroupLabel).exists()).toEqual(false);
  expect(universeGroup.find(_universGroup.UniverseGroupItemComponent).exists()).toEqual(false);
});
test("UniverseGroup noAccordeonLinkInsteadTo", function () {
  var universeGroup = mount(/*#__PURE__*/_react["default"].createElement(_universeGroup.UniverseGroupItem, {
    noAccordeonLinkInsteadTo: true,
    isHome: true
  }));
  expect(universeGroup.find(_universGroup.UniverseGroupLabel).exists()).toEqual(true);
  expect(universeGroup.find(_universGroup.UniverseGroupItemComponent).exists()).toEqual(true);
  universeGroup.find(_universGroup.UniverseGroupItemComponent).simulate("click");
});