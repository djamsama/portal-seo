"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _visitorAjaxService = _interopRequireDefault(require("../visitorAjaxService"));
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable func-names */
/* eslint-disable no-undef, no-unused-vars */

var visitorAjaxService = new _visitorAjaxService["default"]();
var mockCheckAuthResponse = {
  test: "checkAuth response test "
};
var mockLogOutResponse = {
  test: "checkAuth response test "
};
_mockAdapter.mock.onGet("/ajax/myspace/logout").reply(200, mockLogOutResponse);
_mockAdapter.mock.onGet(/^\/ve-front-sso\/rest\/v1\.2\/external\/checkAuth\//).reply(200, mockCheckAuthResponse);
/* eslint-disable no-undef, no-unused-vars */
test("visitorAjaxService getVisitorInfos", function () {
  try {
    visitorAjaxService.getVisitorInfos("72694e492b52657439454c44526a4").then(function (response) {
      expect(response.data).toEqual(mockCheckAuthResponse);
    });
  } catch (error) {
    fail("Test subscribe Ko ".concat(error));
  }
});
test("visitorAjaxService logout", function () {
  try {
    visitorAjaxService.logOut().then(function (response) {
      expect(response.data).toEqual(mockLogOutResponse);
    });
  } catch (error) {
    fail("Test subscription Ko ".concat(error));
  }
});