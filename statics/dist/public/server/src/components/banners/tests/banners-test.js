"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _context = require("../../../context");
var _headerBannerContent = _interopRequireDefault(require("../components/headerBannerContent"));
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
if (!global.getComputedStyle) {
  var rules = document.createElement("div");
  rules.style.backgroundColor = "red";
  rules.style.cursor = "pointer";
  rules.style.color = "white";
  rules.style.width = "500px";
  rules.style.height = "500px";
  global.getComputedStyle = function () {
    return rules.style;
  };
}
test("HeaderBanner nbBlock 0", function () {
  var context = {
    initData: {
      portalBanner: {
        nbBlock: 0
      }
    }
  };
  var headerBannerWrapper = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_headerBannerContent["default"], null)));
  expect(headerBannerWrapper.find({
    id: "header-banner"
  }).exists()).toEqual(false);
});
test("HeaderBannerWithoutPortalBanner", function () {
  var context = {
    initData: {
      portalBanner: null
    }
  };
  var headerBannerWrapper = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_headerBannerContent["default"], null)));
  expect(headerBannerWrapper.find({
    id: "header-banner"
  }).exists()).toEqual(false);
});