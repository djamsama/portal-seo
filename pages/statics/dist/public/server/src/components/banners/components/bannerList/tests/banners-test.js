"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reactRedux = require("react-redux");
var _reduxThunk = require("redux-thunk");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../initiateState");
var _context = require("../../../../../context");
var _bannerItem = _interopRequireDefault(require("../bannerItem"));
jest.mock("react-flickity-component", function () {
  return (
    // Mock the Flickity component
    {
      __esModule: true,
      "default": jest.fn(function (_ref) {
        var children = _ref.children;
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-testid": "flickity-mock"
        }, children);
      })
    }
  );
});
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var mockBanners = [{
  id: 0,
  title: "banner1",
  imageUrl: "banner1.jpg",
  redirectUrl: "company1.com"
}, {
  id: 1,
  title: "banner2",
  imageUrl: "banner2.jpg",
  redirectUrl: "company2.com"
}, {
  id: 2,
  title: "banner3",
  imageUrl: "banner3.jpg",
  redirectUrl: "company3.com"
}];
var context = {
  initData: {
    companyId: 10
  },
  config: {
    route: "route.home"
  }
};
describe("BannersList", function () {
  it("renders banners", function () {
    var loadBanners = jest.fn();
    var headerBannerWrapper = mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      bannersInfo: {
        banners: mockBanners
      },
      bannersRequestLoad: loadBanners
    }))));
    expect(headerBannerWrapper.find(_bannerItem["default"])).toHaveLength(3);
    expect(loadBanners).toHaveBeenCalledTimes(0);
  });
  it("calls service when no banners", function () {
    var loadBanners = jest.fn();
    mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      bannersInfo: {
        banners: null
      },
      bannersRequestLoad: loadBanners
    }))));
    expect(loadBanners).toHaveBeenCalledTimes(1);
  });
});