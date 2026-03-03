"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _initiateState = require("../../../../../../../initiateState");
var _index = _interopRequireDefault(require("../index"));
var _myspaceTile = _interopRequireDefault(require("../components/myspaceTile"));
var _subscriptionTiles = require("../styles/subscriptionTiles");
var _mockAdapter = require("../../../../../../../../tools/utils-test/mockAdapter.js");
var _homeService = _interopRequireDefault(require("../../../../../../../services/impl/homeService"));
var _context = require("../../../../../../../context");
var data = [{
  subscribed: true,
  mediaType: "NEWSLETTER",
  imageUrl: "http://img.archiexpo.fr/images_ae/universe/subscription-form/1.jpg",
  linkUrl: "http://www.archiexpo.fr/newsletter/last-newsletter-1.html",
  universe: {
    id: 1,
    order: 10,
    label: "Mobilier"
  },
  name: "Mobilier"
}, {
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
}];
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
test("WrapperTiles noData", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe
  var wrapperTiles = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));
  expect(wrapperTiles.find(_myspaceTile["default"])).toHaveLength(0);
  expect(wrapperTiles.find({
    src: data[0].imageUrl
  }).exists()).toEqual(false);
  expect(wrapperTiles.find({
    src: data[1].imageUrl
  }).exists()).toEqual(false);
});
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
test("WrapperTiles with data", function () {
  var wrapperTiles = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    data: data
  }))));
  expect(wrapperTiles.find({
    src: data[0].imageUrl
  }).exists()).toEqual(true);
  expect(wrapperTiles.find({
    src: data[1].imageUrl
  }).exists()).toEqual(true);
});
var dataEmag = [{
  subscribed: true,
  mediaType: "EMAG",
  imageUrl: "http://img.archiexpo.com/images_ae/2ai/mail/AE50_MEA_Left.jpg",
  linkUrl: "http://emag.archiexpo.com/100-Design-2018-Five-Innovative-Products/",
  universe: null,
  name: "Innovative Products",
  id: 119
}];
test("WrapperTiles type Emag", function () {
  var wrapperTiles = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    data: dataEmag
  }))));
  expect(wrapperTiles.find({
    src: dataEmag[0].imageUrl
  }).exists()).toEqual(true);
});
var dataDedicate = [{
  subscribed: true,
  mediaType: "DEDICATE",
  imageUrl: "http://img.archiexpo.com/images_ae/2ai/mail/AE50_MEA_Left.jpg",
  linkUrl: "http://emag.archiexpo.com/100-Design-2018-Five-Innovative-Products/",
  universe: null,
  name: "Innovative Products",
  id: 119
}];
test("WrapperTiles type Dedicate", function () {
  var wrapperTiles = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    data: dataDedicate
  }))));
  expect(wrapperTiles.find({
    src: dataEmag[0].imageUrl
  }).exists()).toEqual(true);
});
var dataNewProducts = [{
  subscribed: true,
  mediaType: "newProducts",
  imageUrl: "http://img.archiexpo.com/images_ae/2ai/mail/AE50_MEA_Left.jpg",
  linkUrl: "http://emag.archiexpo.com/100-Design-2018-Five-Innovative-Products/",
  universe: null,
  name: "newProducts",
  id: 119
}];
test("WrapperTiles ", function () {
  var wrapperTiles = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    data: dataNewProducts
  }))));
  expect(wrapperTiles.find({
    src: dataNewProducts[0].imageUrl
  }).exists()).toEqual(true);
});
var dataNewTrends = [{
  subscribed: true,
  mediaType: "newTrends",
  imageUrl: "http://img.archiexpo.com/images_ae/2ai/mail/AE50_MEA_Left.jpg",
  linkUrl: "http://emag.archiexpo.com/100-Design-2018-Five-Innovative-Products/",
  universe: null,
  name: "newTrends",
  id: 119
}];
test("WrapperTiles type newTrends", function () {
  var wrapperTiles = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    data: dataNewTrends
  }))));
  expect(wrapperTiles.find({
    src: dataNewTrends[0].imageUrl
  }).exists()).toEqual(true);
});
var homeService = new _homeService["default"](context);
var mockTrend = require("../../../../../../../../tools/utils-test/assets/home/newTrends1.json");
_mockAdapter.mock.onGet("/ajax/home/new-trends/1.json").reply(200, mockTrend);
test("WrapperTiles ", function () {
  var wrapperTiles = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    title: "foj_homepage_new_trends_title"
  }))));
  expect(wrapperTiles.find(_index["default"]).exists()).toEqual(true);
  expect(wrapperTiles.find(_subscriptionTiles.Title).first().text()).toEqual("foj_homepage_new_trends_title");
});