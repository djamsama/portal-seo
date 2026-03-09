"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _context = require("../../../context");
var _theme = require("../../../components/theme");
var _mockContext = require("../../../../tools/utils-test/mockContext");
var _mockMenu = require("../../../../tools/utils-test/mockMenu");
var _index = _interopRequireDefault(require("../index"));
var _privacy = require("../styles/privacy");
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable no-undef */

(0, _mockAdapter.doSomeMock)();
var t = _theme.theme.ae;
var state = {
  Menu: _mockMenu.menu,
  Application: {
    currentCurrency: "fr",
    localeProp: "fr"
  }
};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(state);
test("privacyPageTest", function () {
  var privacyPage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(privacyPage.find(_privacy.PrivacyWrapper).exists()).toEqual(true);
});