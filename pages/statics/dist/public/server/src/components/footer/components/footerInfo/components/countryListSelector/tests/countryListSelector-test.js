"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactCookie = require("react-cookie");
var _context = require("../../../../../../../context");
var _simpleSelect = _interopRequireDefault(require("../../../../../../select/simpleSelect"));
var _mockAdapter = require("../../../../../../../../tools/utils-test/mockAdapter");
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable no-undef, no-unused-vars */
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AE",
  language: "FR",
  baseUrl: "archiexpo.fr",
  siteLabel: "archiexpo",
  tld: "fr",
  locale: "fr",
  domain: "archiexpo.fr"
};
var initData = {};
var context = {
  config: {
    portal: portal
  },
  initData: initData,
  cookies: {
    addChangeListener: function addChangeListener() {
      return true;
    },
    getAll: function getAll() {
      return true;
    },
    set: function set() {
      return true;
    }
  }
};
var mockCountryResponse = require("../../../../../../../../tools/utils-test/assets/footer/countriesList.json");
_mockAdapter.mock.onGet("/ajax/country/list.json").reply(200, mockCountryResponse);
var spyloadCountry = sinon.spy();
var props = {
  loadCountry: spyloadCountry,
  footerCountry: {
    footerCountries: mockCountryResponse.content
  }
};
test("Fetch country list on #componentDidMont", function () {
  var countries = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactCookie.CookiesProvider, null, /*#__PURE__*/_react["default"].createElement(_index["default"], props))));
  expect(countries.find(_simpleSelect["default"]).exists()).toEqual(true);
  expect(spyloadCountry.calledOnce).toBe(true);
});