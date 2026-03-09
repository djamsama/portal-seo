"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _context = require("../../../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _mockAdapter = require("../../../../../../../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable no-undef */

(0, _mockAdapter.doSomeMock)();
var data = {
  subscribed: true,
  mediaType: "NEWSLETTER",
  imageUrl: "http://img.archiexpo.fr/images_ae/universe/subscription-form/14.jpg",
  linkUrl: "http://www.archiexpo.fr/newsletter/last-newsletter-14.html",
  universe: {
    id: 14,
    order: 11,
    label: "Décoration"
  },
  name: "Décoration"
};
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
test("MyspaceTile ", function () {
  var myspaceTile = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: data,
    isLarge: true,
    type: "myspaceEmag"
  }));
  expect(myspaceTile.find({
    src: data.imageUrl
  }).exists()).toEqual(true);
});
var subscriptions = {
  subscriptionResult: {
    success: true,
    data: {
      responseStatus: 200,
      content: null,
      errors: [],
      functionalErrors: []
    },
    id: "NEWSLETTER1",
    subscribed: true
  }
};
test("MyspaceTile subscription result success", function () {
  var myspaceTile = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: data,
    isLarge: true,
    subscriptions: subscriptions,
    onSubscriptionSubmit: function onSubscriptionSubmit() {
      return "";
    }
  })));
  expect(myspaceTile.find({
    src: data.imageUrl
  }).exists()).toEqual(true);
  expect(myspaceTile.find({
    id: "checkDécoration"
  }).exists()).toEqual(true);
  myspaceTile.find({
    id: "checkDécoration"
  }).simulate("click");
});
subscriptions = {
  subscriptionResult: {
    success: false,
    data: {
      responseStatus: 200,
      content: null,
      errors: [],
      functionalErrors: []
    },
    id: "NEWSLETTER1",
    subscribed: true
  }
};
test("MyspaceTile subscription result failed", function () {
  var myspaceTile = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: data,
    isLarge: true,
    subscriptions: subscriptions
  }), " "));
  expect(myspaceTile.find({
    src: data.imageUrl
  }).exists()).toEqual(true);
  subscriptions.subscriptionResult.subscribed = false;
  var wrapperOneTile2 = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: data,
    isLarge: true,
    subscriptions: subscriptions
  }), " "));
  expect(wrapperOneTile2.find({
    src: data.imageUrl
  }).exists()).toEqual(true);
});