"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../../initiateState");
var srcToFind = "http://img.archiexpo.com/images_ae/2ai/mail/AE50_MEA_Left.jpg";
var emag = {
  imageUrl: srcToFind,
  linkUrl: "http://emag.archiexpo.com/100-Design-2018-Five-Innovative-Products/",
  name: "Innovative Products",
  id: 119
};
var emagsSubscription = {
  subscribed: true,
  mediaType: "EMAG",
  imageUrl: null,
  linkUrl: null,
  universe: null
};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var initData = {
  emagsSubscription: emagsSubscription,
  emag: emag
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
test("mySpaceEmags checked", function () {
  var context = {
    initData: initData,
    config: {
      portal: portal
    }
  };

  // $FlowFixMe
  /* eslint-disable no-undef, no-unused-vars */
  var mySpaceEmags = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    subscriptions: false
  }))));
  var checkEmag = mySpaceEmags.find({
    id: "check".concat(emag.name)
  });
  expect(mySpaceEmags.find({
    id: "check".concat(emag.name)
  })).toHaveLength(1);
  expect(checkEmag.props().checked).toBeTruthy();
  expect(mySpaceEmags.find({
    src: srcToFind
  })).toBeTruthy();
});
test("mySpaceEmags unchecked", function () {
  initData.emagsSubscription.subscribed = false;
  var context = {
    initData: initData,
    config: {
      portal: portal
    }
  };
  var mySpaceEmags = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    subscriptions: false
  }))));
  var checkEmag = mySpaceEmags.find({
    id: "check".concat(emag.name)
  });
  expect(mySpaceEmags.find({
    id: "check".concat(emag.name)
  })).toHaveLength(1);
  expect(checkEmag.props().checked).toBeFalsy();
  expect(mySpaceEmags.find({
    src: srcToFind
  })).toBeTruthy();
});