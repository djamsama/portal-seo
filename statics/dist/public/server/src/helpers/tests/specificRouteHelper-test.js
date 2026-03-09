"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _specificRouteHelper = _interopRequireDefault(require("../specificRouteHelper"));
var _constants = require("../../commons/constants");
test("SpecificRouteHelper isSiteWithHeaderRssLink", function () {
  var context = {
    store: {
      getState: function getState() {
        return {
          Application: {
            extendedLanguage: true
          }
        };
      }
    }
  };
  // Sans context
  var result = _specificRouteHelper["default"].isSiteWithHeaderRssLink();
  expect(result).toEqual(false);
  // Sans config
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(false);
  // Sans route
  context.config = {
    route: ""
  };
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(false);
  // Langage étendu
  context.store = {
    getState: function getState() {
      return {
        Application: {
          extendedLanguage: false
        }
      };
    }
  };
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(false);
  // Site avec Links
  context.config.route = _constants.ROUTE_HOME;
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(true);
});
test("SpecificRouteHelper isSiteWithHeaderRssLink", function () {
  var context = {
    store: {
      getState: function getState() {
        return {
          Application: {
            extendedLanguage: true
          }
        };
      }
    }
  };
  // Sans context
  var result = _specificRouteHelper["default"].isSiteWithHeaderRssLink();
  expect(result).toEqual(false);
  // Sans config
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(false);
  // Sans route
  context.config = {
    route: ""
  };
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(false);
  // Langage étendu

  context.store = {
    getState: function getState() {
      return {
        Application: {
          extendedLanguage: false
        }
      };
    }
  };
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(false);

  // Sites avec Links
  context.config.route = _constants.ROUTE_HOME;
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(true);
  context.config.route = _constants.ROUTE_PROJECT_HOME;
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(true);
  context.config.route = _constants.ROUTE_TRENDS_HOME;
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(true);
  context.config.route = _constants.ROUTE_CATALOG;
  result = _specificRouteHelper["default"].isSiteWithHeaderRssLink(context);
  expect(result).toEqual(true);
});
test("SpecificRouteHelper isNotEncrypted", function () {
  // une classe et une route lambda
  var result = _specificRouteHelper["default"].isNotEncrypted("uneClasse", "uneRoute");
  expect(result).toEqual(false);
  // DropDownCountry et une route lambda
  result = _specificRouteHelper["default"].isNotEncrypted("DropDownCountry", "uneRoute");
  expect(result).toEqual(false);
  // DropDownCountry sur la homepage
  result = _specificRouteHelper["default"].isNotEncrypted("DropDownCountry", _constants.ROUTE_HOME);
  expect(result).toEqual(true);
});