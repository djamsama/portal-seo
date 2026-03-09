"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxThunk = require("redux-thunk");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _index = _interopRequireDefault(require("../index"));
var _link = require("../../../../../link");
var _initiateState = require("../../../../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
describe("BannerItem", function () {
  it("renders with a banner", function () {
    var banner = {
      redirectUrl: "http://test.html",
      imageUrl: "http://test.jpg",
      title: "test"
    };
    var bannerItem = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      banner: banner
    })));
    expect(bannerItem.find(_link.VeLink)).toHaveLength(1);
    expect(bannerItem.find({
      to: banner.redirectUrl
    })).toHaveLength(2);
    expect(bannerItem.find({
      src: banner.imageUrl
    })).toHaveLength(1);
  });
  it("renders without a banner", function () {
    var bannerItem = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      banner: null
    })));
    expect(bannerItem.find(_link.VeLink)).toHaveLength(0);
  });
});