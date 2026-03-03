"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _specificSiteHelper = _interopRequireDefault(require("../specificSiteHelper"));
test("specificSiteHelper isSiteWithProject", function () {
  var result = _specificSiteHelper["default"].isSiteWithProject();
  expect(result).toEqual(false);
  var portal = "";
  result = _specificSiteHelper["default"].isSiteWithProject(portal);
  expect(result).toEqual(false);
  portal = {};
  result = _specificSiteHelper["default"].isSiteWithProject(portal);
  expect(result).toEqual(false);
  portal = {
    site: "ae"
  };
  result = _specificSiteHelper["default"].isSiteWithProject(portal);
  expect(result).toEqual(true);
  portal = {
    site: "someSite"
  };
  result = _specificSiteHelper["default"].isSiteWithProject(portal);
  expect(result).toEqual(true);
  portal = {
    site: "ne"
  };
  result = _specificSiteHelper["default"].isSiteWithProject(portal);
  expect(result).toEqual(false);
  portal = {
    site: "NE"
  };
  result = _specificSiteHelper["default"].isSiteWithProject(portal);
  expect(result).toEqual(false);
  portal = {
    site: "me"
  };
  result = _specificSiteHelper["default"].isSiteWithProject(portal);
  expect(result).toEqual(false);
});
test("specificSiteHelper isFunction", function () {
  var result = _specificSiteHelper["default"].isFunction();
  expect(result).toEqual(false);
  result = _specificSiteHelper["default"].isFunction("string");
  expect(result).toEqual(false);
  result = _specificSiteHelper["default"].isFunction(function () {});
  expect(result).toEqual(true);
});
test("specificSiteHelper isSiteWithTrends", function () {
  var result = _specificSiteHelper["default"].isSiteWithTrends();
  expect(result).toEqual(true);
  result = _specificSiteHelper["default"].isSiteWithTrends("string");
  expect(result).toEqual(true);
  result = _specificSiteHelper["default"].isSiteWithTrends(false);
  expect(result).toEqual(true);
  result = _specificSiteHelper["default"].isSiteWithTrends(true);
  expect(result).toEqual(false);
});
test("specificSiteHelper isSiteWithEmags", function () {
  var result = _specificSiteHelper["default"].isSiteWithEmags();
  expect(result).toEqual(false);
  var portal = "";
  result = _specificSiteHelper["default"].isSiteWithEmags(portal);
  expect(result).toEqual(false);
  portal = "toto";
  result = _specificSiteHelper["default"].isSiteWithEmags(portal);
  expect(result).toEqual(false);
  portal = {
    language: "",
    site: "ae"
  };
  result = _specificSiteHelper["default"].isSiteWithEmags(portal);
  expect(result).toEqual(false);
  portal = {
    language: "FR",
    site: "ae"
  };
  result = _specificSiteHelper["default"].isSiteWithEmags(portal);
  expect(result).toEqual(true);
  portal = {
    language: "ZH",
    site: "ae"
  };
  result = _specificSiteHelper["default"].isSiteWithEmags(portal);
  expect(result).toEqual(false);
});
test("specificSiteHelper getExtendedLanguageFromStore", function () {
  // store non défini
  var result = _specificSiteHelper["default"].getExtendedLanguageFromStore();
  expect(result).toEqual(false);
  // store vide
  var store = {};
  result = _specificSiteHelper["default"].getExtendedLanguageFromStore(store);
  expect(result).toEqual(false);
  // langage non étendu
  store = {
    getState: function getState() {
      return {
        Application: {
          extendedLanguage: false
        }
      };
    }
  };
  result = _specificSiteHelper["default"].getExtendedLanguageFromStore(store);
  expect(result).toEqual(false);
  // langage étendu
  store = {
    Application: {
      extendedLanguage: true
    }
  };
  result = _specificSiteHelper["default"].getExtendedLanguageFromStore(store);
  expect(result).toEqual(true);
});
test("specificSiteHelper isSiteWithHeaderProjectRssLink", function () {
  // Sans param
  var result = _specificSiteHelper["default"].isSiteWithHeaderProjectRssLink();
  expect(result).toEqual(false);

  // Sans site
  result = _specificSiteHelper["default"].isSiteWithHeaderProjectRssLink({});
  expect(result).toEqual(false);

  // sans Link
  result = _specificSiteHelper["default"].isSiteWithHeaderProjectRssLink({
    site: "ar"
  });
  expect(result).toEqual(false);

  // Sites avec Links
  result = _specificSiteHelper["default"].isSiteWithHeaderProjectRssLink({
    site: "di"
  });
  expect(result).toEqual(true);
  result = _specificSiteHelper["default"].isSiteWithHeaderProjectRssLink({
    site: "ae"
  });
  expect(result).toEqual(true);
});
test("specificSiteHelper isSiteWithNewsletterEmags", function () {
  // Sans param
  var result = _specificSiteHelper["default"].isSiteWithNewsletterEmags();
  expect(result).toEqual(false);

  // Sans site
  result = _specificSiteHelper["default"].isSiteWithNewsletterEmags({});
  expect(result).toEqual(false);

  // sans Newsletters Emag
  result = _specificSiteHelper["default"].isSiteWithNewsletterEmags({
    site: "ar"
  });
  expect(result).toEqual(false);
  result = _specificSiteHelper["default"].isSiteWithNewsletterEmags({
    site: "ne"
  });
  expect(result).toEqual(false);
  result = _specificSiteHelper["default"].isSiteWithNewsletterEmags({
    site: "ag"
  });
  expect(result).toEqual(false);

  // Sites avec Newsletters Emag
  result = _specificSiteHelper["default"].isSiteWithNewsletterEmags({
    site: "di"
  });
  expect(result).toEqual(true);
  result = _specificSiteHelper["default"].isSiteWithNewsletterEmags({
    site: "ae"
  });
  expect(result).toEqual(true);
});