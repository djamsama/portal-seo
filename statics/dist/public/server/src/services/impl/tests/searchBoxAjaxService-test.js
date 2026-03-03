"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _searchBoxAjaxService = _interopRequireDefault(require("../searchBoxAjaxService"));
/* eslint-disable func-names */
/* eslint-disable no-undef */var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AE",
  language: "FR",
  baseUrl: "archiexpo.fr",
  siteLabel: "archiexpo",
  tld: "fr",
  locale: "fr",
  domain: "archiexpo.fr"
};
var context = {
  config: {
    portal: portal
  },
  initData: {
    searchUrl: "http://searchUrl",
    autoCompleteUrl: "http://autoCompleteUrl"
  }
};
test("searchBoxAjaxService with error", function () {
  var testSearchBoxAjaxServiceWithoutContext = function testSearchBoxAjaxServiceWithoutContext() {
    // eslint-disable-next-line no-new
    new _searchBoxAjaxService["default"]();
  };
  expect(testSearchBoxAjaxServiceWithoutContext).toThrow("Cannot do the request without context");
  var searchBoxAjaxService = new _searchBoxAjaxService["default"](context);
  var testSearchWithoutContext = function testSearchWithoutContext() {
    searchBoxAjaxService.search("test", "test");
  };
  expect(testSearchWithoutContext).toThrow("Cannot do the request without context");
  var testAutocompleteWithoutContext = function testAutocompleteWithoutContext() {
    searchBoxAjaxService.autocomplete("test", "test");
  };
  expect(testAutocompleteWithoutContext).toThrow("Cannot do the request without context");
});
var searchBoxAjaxService = new _searchBoxAjaxService["default"](context);
var mockDataGet = {
  test: "response test get"
};
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// // This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
mock.onGet(context.initData.searchUrl).reply(200, mockDataGet);
mock.onGet(context.initData.autoCompleteUrl).reply(200, mockDataGet);
test("searchBoxAjaxService search", function () {
  try {
    searchBoxAjaxService.search("test", "test", context).then(function (response) {
      expect(response.data).toEqual(mockDataGet);
    });
  } catch (error) {
    fail("Test searchBoxAjaxService search Ko ".concat(error));
  }
});
test("searchBoxAjaxService autocomplete", function () {
  try {
    searchBoxAjaxService.autocomplete("test", "test", context).then(function (response) {
      expect(response.data).toEqual(mockDataGet);
    });
  } catch (error) {
    fail("Test searchBoxAjaxService autocomplete Ko ".concat(error));
  }
});