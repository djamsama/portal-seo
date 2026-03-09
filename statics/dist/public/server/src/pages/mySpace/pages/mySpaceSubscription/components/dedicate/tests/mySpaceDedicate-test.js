"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../../initiateState");
// eslint-disable-next-line global-require
jest.mock("flickity", function () {
  return require("../../../../../../../../tools/utils-test/mockFlickity");
});
var srcToFind = "/images_ae/universe/subscription-form/dedicated.jpg";
var dedicateSubscription = {
  subscribed: true,
  mediaType: "DEDICATE",
  imageUrl: srcToFind,
  linkUrl: null,
  universe: null,
  name: "dedicate"
};
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "NE",
  language: "ES",
  baseUrl: "nauticexpo.es",
  siteLabel: "nauticexpo",
  tld: "es",
  domain: "nauticexpo.es",
  locale: "es"
};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var initData = {
  dedicateSubscription: dedicateSubscription
};
test("mySpaceDedicate checked", function () {
  var context = {
    initData: initData,
    config: {
      portal: portal
    }
  }; // $FlowFixMe
  /* eslint-disable no-undef, no-unused-vars */
  var mySpaceDedicate = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    subscriptions: false
  }))));
  var checkDedicate = mySpaceDedicate.find({
    id: "check".concat(dedicateSubscription.name)
  });
  expect(mySpaceDedicate.find({
    id: "check".concat(dedicateSubscription.name)
  })).toHaveLength(1);
  expect(checkDedicate.props().checked).toBeTruthy();
  expect(mySpaceDedicate.find({
    src: srcToFind
  })).toBeTruthy();
});
test("mySpaceDedicate unchecked", function () {
  initData.dedicateSubscription.subscribed = false;
  var context = {
    initData: initData,
    config: {
      portal: portal
    }
  };
  var mySpaceDedicate = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    subscriptions: false
  }))));
  var checkDedicate = mySpaceDedicate.find({
    id: "check".concat(dedicateSubscription.name)
  });
  expect(mySpaceDedicate.find({
    id: "check".concat(dedicateSubscription.name)
  })).toHaveLength(1);
  expect(checkDedicate.props().checked).toBeFalsy();
  expect(mySpaceDedicate.find({
    src: srcToFind
  })).toBeTruthy();
});