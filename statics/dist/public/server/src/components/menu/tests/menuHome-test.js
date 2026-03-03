"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _context = require("../../../context");
var _menuHome = require("../menuHome");
var _universeGroup = require("../universeGroup");
var _universGroup = require("../styles/universGroup");
var _menuUniverse = require("../menuUniverse");
var initData = {
  homeDefaultMenu: "PRODUCTS",
  homeMenu: null
};
var context = {
  initData: initData
};
test("Menu home empty menu", function () {
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_menuHome.MenuProductHomeComponent, null)));
  expect(menu.find("div").exists()).toEqual(true);
});
test("Menu home empty subMenuItems", function () {
  initData = {
    homeDefaultMenu: "PRODUCTS",
    homeMenu: [{
      id: "PRODUCTS",
      imageUrl: null,
      label: "Produits",
      linkUrl: "http://www.archiexpo.fr/",
      subMenuItems: []
    }]
  };
  context = {
    initData: initData
  };
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_menuHome.MenuProductHomeComponent, null)));
  expect(menu.find("div").exists()).toEqual(true);
});
test("Menu home populated", function () {
  initData = {
    homeDefaultMenu: "PRODUCTS",
    homeMenu: [{
      id: "PRODUCTS",
      imageUrl: null,
      label: "Produits",
      linkUrl: "http://www.archiexpo.fr/",
      subMenuItems: [{
        id: 1,
        imageUrl: null,
        label: "Mobilier",
        linkUrl: null,
        subMenuItems: []
      }, {
        id: 14,
        imageUrl: null,
        label: "Décoration",
        linkUrl: null,
        subMenuItems: []
      }]
    }, {
      id: "CATALOGS",
      imageUrl: null,
      label: "Catalogues",
      linkUrl: "http://pdf.archiexpo.fr/",
      subMenuItems: null
    }]
  };
  context = {
    initData: initData
  };
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_menuHome.MenuProductHomeComponent, null)));
  expect(menu.find(_universeGroup.UniverseGroupItem).exists()).toEqual(true);
  expect(menu.find(_universGroup.UniverseGroup).exists()).toEqual(true);
  expect(menu.find(_menuUniverse.MenuUniverseComponent).exists()).toEqual(true);
});