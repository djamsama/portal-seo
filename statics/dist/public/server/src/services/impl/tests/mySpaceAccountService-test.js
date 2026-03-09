"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mySpaceAccountService = _interopRequireDefault(require("../mySpaceAccountService"));
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable no-undef */
/* eslint-disable func-names */

var context = {
  config: {
    portal: {
      domain: "test",
      baseUrl: "http://UneBaseUrl"
    },
    url: "/myspace/secure/account"
  },
  initData: {
    mySpaceAccountUpdateUrl: "mySpaceAccountUpdateUrl"
  }
};
var mySpaceAccountService = new _mySpaceAccountService["default"](context);
var mockDataResponse = {
  responseStatus: 200,
  content: null,
  errors: [],
  functionalErrors: []
};
var data = {
  city: "Istres, France",
  cityHidden: "Istres",
  company: null,
  firstName: "mon prenom",
  lastName: "mon nom",
  phone: "06 6657 6306",
  website: null,
  visitorType: "Particulier",
  lon: 4.9879680000000235,
  lat: 43.513006,
  email: "remy.candido@virtual-expo.com",
  country: "FR",
  "administrative-area": "Provence-Alpes-Côte d'Azur"
};
_mockAdapter.mock.onPost("mySpaceAccountUpdateUrl").reply(200, mockDataResponse);
test("mySpaceAccountService updateAccount", function () {
  try {
    mySpaceAccountService.updateAccount(data, context).then(function (response) {
      expect(response.data).toEqual(mockDataResponse);
    });
  } catch (error) {
    fail("Test updateAccount Ko ".concat(error));
  }
});