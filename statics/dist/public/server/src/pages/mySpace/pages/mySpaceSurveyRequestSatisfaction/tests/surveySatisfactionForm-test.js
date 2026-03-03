"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _styledComponents = require("styled-components");
var _mockContext = require("../../../../../../tools/utils-test/mockContext");
var _mockMenu = require("../../../../../../tools/utils-test/mockMenu");
var _theme = require("../../../../../components/theme");
var _context = require("../../../../../context");
var _ = _interopRequireDefault(require(".."));
var _multiFieldCheckbox = _interopRequireDefault(require("../components/surveySatisfactionForm/components/multiFieldCheckbox"));
var _rating = require("../components/surveySatisfactionForm/components/rating/styles/rating");
var _surveySatisfactionForm = require("../components/surveySatisfactionForm/styles/surveySatisfactionForm");
var _mockAdapter = require("../../../../../../tools/utils-test/mockAdapter.js");
(0, _mockAdapter.doSomeMock)();
require("../../../../../../tools/utils-test/mockIntersectionObserver.js");
var t = _theme.theme.ae;
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var state = {
  Menu: _mockMenu.menu,
  Application: {
    currentCurrency: "fr",
    localeProp: "fr",
    extendedLanguage: false
  }
};
var store = mockStore(state);
_mockContext.context.initData.thanksSurveyPageUrl = "https://www.archiexpo.fr/myspace/secure/request";
_mockContext.context.initData.currencyList = [];
test("requestSatisfactionForm2", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe
  var requestSatisfaction = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_["default"], null)))));
  expect(requestSatisfaction.find(_multiFieldCheckbox["default"]).exists()).toEqual(true);
  expect(requestSatisfaction.find(_multiFieldCheckbox["default"])).toHaveLength(1);
  expect(requestSatisfaction.find(_surveySatisfactionForm.AmountBloc).exists()).toEqual(false);
  expect(requestSatisfaction.find(_surveySatisfactionForm.AmountBloc)).toHaveLength(0);
  expect(requestSatisfaction.find(_rating.ResponseWrapper).exists()).toEqual(true);
  expect(requestSatisfaction.find(_rating.ResponseWrapper)).toHaveLength(1);
});