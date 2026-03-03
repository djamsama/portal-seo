"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _menuHeader = _interopRequireDefault(require("../menuHeader"));
var _subMenu = require("../subMenu");
var _toggling = require("../../animation/toggling");
var _link = require("../../link");
var _initiateState = require("../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
var mockMenuItem = [{
  id: "PRODUCTS",
  label: "Produits",
  linkUrl: "http://www.archiexpo.fr/",
  active: false,
  encryptLink: false,
  subMenuItemsActive: true,
  isLoading: false
}, {
  id: "CATALOGS",
  label: "Catalogues",
  linkUrl: "http://pdf.archiexpo.fr/",
  active: false,
  encryptLink: false,
  subMenuItemsActive: false,
  isLoading: false
}];
var loadMenu = function loadMenu() {};
test("Menu header empty menu", function () {
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_menuHeader["default"], {
    menuItems: mockMenuItem,
    loadMenu: loadMenu
  })));
  expect(menu.find("div").exists()).toEqual(true);
});
test("Menu header populated", function () {
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_menuHeader["default"], {
    menuItems: mockMenuItem,
    loadMenu: loadMenu
  })));
  expect(menu.find(_subMenu.SubMenuComponent).exists()).toEqual(true);
  expect(menu.find(_toggling.TogglingComponent).exists()).toEqual(true);
  expect(menu.find(_link.VeLink).exists()).toEqual(true);
  menu.find(_link.VeLink).first().simulate("mouseEnter");
});
test("Menu header populated", function () {
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_menuHeader["default"], {
    menuItems: mockMenuItem,
    currentMenuItem: "PRODUCTS",
    loadMenu: loadMenu
  })));
  expect(menu.find(_subMenu.SubMenuComponent).exists()).toEqual(true);
  expect(menu.find(_toggling.TogglingComponent).exists()).toEqual(true);
  menu.find(_toggling.TogglingComponent).first().simulate("click");
});