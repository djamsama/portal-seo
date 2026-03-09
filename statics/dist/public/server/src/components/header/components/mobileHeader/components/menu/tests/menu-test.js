"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _reactRedux = require("react-redux");
var _context = require("../../../../../../../context");
var _initiateState = require("../../../../../../../initiateState");
var _menu = require("../styles/menu");
var _index = _interopRequireDefault(require("../index"));
var _mockContext = require("../../../../../../../../tools/utils-test/mockContext");
var _mockAdapter = require("../../../../../../../../tools/utils-test/mockAdapter.js");
(0, _mockAdapter.doSomeMock)();
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
test("Mobile header menu link test", function () {
  // eslint-disable-next-line no-undef
  var menu = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
  /* Le Composant est constitué d'un wrapper lui même constitué d'un lien et d'un menu. */
  var wrapper = menu.find(_menu.Wrapper);
  expect(wrapper).toHaveLength(1);

  /* Structure du lien. */
  var menuLinkWrapper = wrapper.find(_menu.MenuLinkWrapper);
  expect(menuLinkWrapper).toHaveLength(1);
  expect(menuLinkWrapper.find(_menu.MenuLinkBox)).toHaveLength(1);
  expect(menuLinkWrapper.find(_menu.MenuLinkBox).find(_menu.MenuLinkInner)).toHaveLength(1);

  /* Structure du menu. */
  var menuWrapper = wrapper.find(_menu.MenuWrapper);
  expect(menuWrapper).toHaveLength(1);
});