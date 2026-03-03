"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _menuService = _interopRequireDefault(require("../menuService"));
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable func-names */
/* eslint-disable no-undef */

var menuServiceInstance = new _menuService["default"]();
var unMenu = "un menu";
_mockAdapter.mock.onGet("/ajax/menu/products.json").reply(200, unMenu);
test("MenuService search", function () {
  try {
    var menuItem = {
      active: true,
      encryptLink: false,
      id: "PRODUCTS",
      imageUrl: null,
      linkUrl: null,
      isLoading: false,
      label: "",
      subMenuItems: [],
      subMenuItemsActive: false
    };
    menuServiceInstance.getSubMenuItems(menuItem).then(function (response) {
      expect(response.data).toEqual(unMenu);
    });
  } catch (error) {
    fail("Test MenuService search Ko ".concat(error));
  }
});