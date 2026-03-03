"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _index = _interopRequireDefault(require("../index"));
var _link = require("../../../../../link");
var _initiateState = require("../../../../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
test("BrandItem", function () {
  var item = {
    urlTarget: "http://test.com",
    urlImage: "http://test.com/image",
    title: "My test"
  };
  var brandItem = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: item
  })));
  expect(brandItem.find(_link.VeLink)).toHaveLength(1);
  expect(brandItem.find({
    to: item.urlTarget
  })).toHaveLength(2);
  expect(brandItem.find({
    src: item.urlImage
  })).toHaveLength(1);
});