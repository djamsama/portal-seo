"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _styledComponents = require("styled-components");
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _mobileHeader = require("../styles/mobileHeader");
var _menu = _interopRequireDefault(require("../components/menu"));
var _account = _interopRequireDefault(require("../components/account"));
var _search = _interopRequireDefault(require("../components/search"));
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../initiateState");
var _context = require("../../../../../context");
var _mockContext = require("../../../../../../tools/utils-test/mockContext");
var _mockAdapter = require("../../../../../../tools/utils-test/mockAdapter.js");
var _theme = require("../../../../theme");
(0, _mockAdapter.doSomeMock)();
var t = _theme.theme.ae;
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
store.getState = function () {
  return {
    Application: {
      extendedLanguage: false
    }
  };
};
test("Mobile header search link test", function () {
  // eslint-disable-next-line no-undef
  var mobileHeader = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));

  /* Le Composant est constitué d'un menu, d'un accès compte, et d'un lien de recherche. */
  var placeHolder = mobileHeader.find(_mobileHeader.HeaderPlaceHolder);
  expect(placeHolder).toHaveLength(1);
  var wrapper = placeHolder.find(_mobileHeader.HeaderWrapper);
  expect(wrapper).toHaveLength(1);
  expect(wrapper.find(_menu["default"])).toHaveLength(1);
  var rightMenu = wrapper.find(_mobileHeader.RightMenu);
  expect(rightMenu).toHaveLength(1);
  expect(rightMenu.find(_account["default"])).toHaveLength(1);
  expect(rightMenu.find(_search["default"])).toHaveLength(1);
});