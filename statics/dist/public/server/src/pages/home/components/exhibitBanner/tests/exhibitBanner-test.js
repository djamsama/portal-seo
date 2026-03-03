"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reactIntl = require("react-intl");
var _index = _interopRequireDefault(require("../index"));
var _exhibitBanner = require("../styles/exhibitBanner");
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore({
  message: {
    message: ""
  }
});
test("ExhibitBanner", function () {
  var linksSellProducts = "http://test.com";
  var exhibitBanner = mount(/*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: "fr",
    key: "fr",
    message: {}
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    linksSellProducts: linksSellProducts
  }))));
  expect(exhibitBanner.find(_exhibitBanner.ExhibitBannerWrapper)).toHaveLength(1);
  expect(exhibitBanner.find({
    to: linksSellProducts
  })).toHaveLength(3);
});