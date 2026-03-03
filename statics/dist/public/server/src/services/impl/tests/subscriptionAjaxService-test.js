"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _subscriptionAjaxService = _interopRequireDefault(require("../subscriptionAjaxService"));
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable func-names */
/* eslint-disable no-undef */

var subscriptionAjaxService = new _subscriptionAjaxService["default"]();
var mockDataResponse = {
  test: "response test "
};
_mockAdapter.mock.onPost("/ajax/myspace/secure/subscription").reply(200, mockDataResponse);
_mockAdapter.mock.onPost("/ajax/myspace/secure/subscription").reply(200, mockDataResponse);
_mockAdapter.mock.onPost("/ajax/myspace/secure/newsletters/subscriptions").reply(200, mockDataResponse);
test("subscriptionAjaxService subscribe", function () {
  try {
    subscriptionAjaxService.subscribe("test", true, 1, true).then(function (response) {
      expect(response.data).toEqual(mockDataResponse);
    });
  } catch (error) {
    fail("Test subscribe Ko ".concat(error));
  }
});
test("subscriptionAjaxService subscription", function () {
  try {
    subscriptionAjaxService.subscription({}).then(function (response) {
      expect(response.data).toEqual(mockDataResponse);
    });
  } catch (error) {
    fail("Test subscription Ko ".concat(error));
  }
});
test("subscriptionAjaxService subscriptions", function () {
  try {
    subscriptionAjaxService.subscriptions("NEWSLETTER", true, false).then(function (response) {
      expect(response.data).toEqual(mockDataResponse);
    });
  } catch (error) {
    fail("Test subscriptions Ko ".concat(error));
  }
});