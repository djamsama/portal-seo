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
var _cgu = require("../styles/cgu");
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
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
_mockAdapter.mock.onAny("/ajax/search/recommendation.json").reply(200, {});
_mockAdapter.mock.onAny("/ajax/home/banner/list.json").reply(200, {});
test("cguPageTest", function () {
  // eslint-disable-next-line no-undef
  var cguPage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(cguPage.find(_cgu.CGUWrapper).exists()).toEqual(true);
});