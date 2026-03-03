"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../../context");
var _mockContext = require("../../../../../../../../tools/utils-test/mockContext");
var _index = _interopRequireDefault(require("../index"));
var _exhibitProduct = require("../styles/exhibitProduct");
var _initiateState = require("../../../../../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var mobileDisplay = false;
test("ExhibitYourProduct", function () {
  var exhibitYourProduct = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    mobileDisplay: mobileDisplay
  }))));
  expect(exhibitYourProduct.find(_exhibitProduct.ExhibitProductButton).exists()).toEqual(true);
});