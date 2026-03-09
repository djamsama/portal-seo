"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _socialLinksService = _interopRequireDefault(require("../socialLinksService"));
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable func-names */

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
var context = {
  config: {
    portal: portal
  }
};
(0, _mockAdapter.doSomeMock)();
(0, _mockAdapter.doMockSocial)();
test("SocialLinksService with error", function () {
  var testSocialLinksServiceWithoutContext = function testSocialLinksServiceWithoutContext() {
    // eslint-disable-next-line no-new
    new _socialLinksService["default"]();
  };
  expect(testSocialLinksServiceWithoutContext).toThrow("Cannot do the request without context");
});
var socialLinksServiceInstance = new _socialLinksService["default"](context);
var mockSocialLinks = require("../../../../tools/utils-test/assets/footer/socialLinksAr.json");
/* eslint-disable no-undef, no-unused-vars */

test("SocialLinksService search", function () {
  try {
    socialLinksServiceInstance.getSocialLinks().then(function (response) {
      expect(response.data).toEqual(mockSocialLinks);
    });
  } catch (error) {
    fail("Test SocialLinksService search Ko ".concat(error));
  }
});