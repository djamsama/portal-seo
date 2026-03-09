"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _context = require("../../../../../context");
test("popupContent mysql header link", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe
  var context = {
    initData: {
      mySpaceNavigationLinks: {
        requestUrl: "http://www.archiexpo.fr/myspace/secure/request",
        bookmarkUrl: "http://www.archiexpo.fr/myspace/secure/bookmark",
        accountUrl: "http://www.archiexpo.fr/myspace/secure/account",
        subscriptionUrl: "http://www.archiexpo.fr/myspace/secure/subscription"
      }
    },
    config: {
      portal: {
        baseUrl: "archiexpo.fr",
        domain: "archiexpo.fr",
        language: "FR",
        locale: "fr",
        site: "AE",
        siteLabel: "archiexpo",
        subDomain: "WORLD_WIDE_WEB",
        tld: "fr"
      }
    }
  };
  var popupContent = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));
  expect(popupContent.find({
    href: context.initData.mySpaceNavigationLinks.accountUrl
  }).exists()).toEqual(true);
  expect(popupContent.find({
    href: context.initData.mySpaceNavigationLinks.bookmarkUrl
  }).exists()).toEqual(true);
  expect(popupContent.find({
    href: context.initData.mySpaceNavigationLinks.accountUrl
  }).exists()).toEqual(true);
  expect(popupContent.find({
    href: context.initData.mySpaceNavigationLinks.subscriptionUrl
  }).exists()).toEqual(true);
});