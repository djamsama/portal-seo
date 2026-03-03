"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _reactCookie = require("react-cookie");
var _reactRedux = require("react-redux");
var _reduxThunk = require("redux-thunk");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _testUtils = require("react-dom/test-utils");
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../initiateState");
/* eslint-disable react/display-name */

// eslint-disable-next-line react/jsx-props-no-spreading
jest.mock("react-lazyload", function () {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      id: "LazyLoad"
    }, props));
  };
});
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var mockPushedCompagny = require("../../../../tools/utils-test/assets/header/pushedCompanyList.json");
_mockAdapter.mock.onGet("/ajax/pushed-company/list.json").reply(200, mockPushedCompagny);
(0, _mockAdapter.doMockSocial)();
test("Footer", function () {
  (0, _testUtils.act)(function () {
    var footer = shallow(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_reactCookie.CookiesProvider, null, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
    expect(footer.find(_index["default"]).exists()).toEqual(true);
  });
});