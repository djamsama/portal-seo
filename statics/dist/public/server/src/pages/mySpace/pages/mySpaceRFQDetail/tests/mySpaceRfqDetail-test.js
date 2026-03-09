"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _styledComponents = require("styled-components");
var _index = _interopRequireDefault(require("../index"));
var _context = require("../../../../../context");
var _history = _interopRequireDefault(require("../components/history"));
var _noResponse = _interopRequireDefault(require("../components/noResponse"));
var _myspaceQuotations = _interopRequireDefault(require("../../../components/myspaceQuotations"));
var _rfqRecap = _interopRequireDefault(require("../components/rfqRecap"));
var _mockContext = require("../../../../../../tools/utils-test/mockContext");
var _mockMenu = require("../../../../../../tools/utils-test/mockMenu");
var _theme = require("../../../../../components/theme");
var _mockAdapter = require("../../../../../../tools/utils-test/mockAdapter.js");
(0, _mockAdapter.doSomeMock)();
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
var mockRfq = require("../../../../../../tools/utils-test/assets/rfq/mockRfq.json");
_mockContext.context.initData.rfq = mockRfq;
_mockContext.context.initData.breadCrumbList = [{
  link: "https://www.archiexpo.fr/myspace/secure/request",
  anchor: "Mes Demandes"
}, {
  link: "",
  anchor: "Détail de l'appel à devis"
}];
test("mySpaceRFQDetail", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe

  var mySpaceRFQDetail = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    hasNoGrabber: true,
    rfq: mockRfq
  })))));
  expect(mySpaceRFQDetail.find(_history["default"]).exists()).toEqual(true);
  expect(mySpaceRFQDetail.find(_myspaceQuotations["default"]).exists()).toEqual(true);
  expect(mySpaceRFQDetail.find(_rfqRecap["default"]).exists()).toEqual(true);
  expect(mySpaceRFQDetail.find(_noResponse["default"]).exists()).toEqual(false);
});
test("mySpaceRFQDetail noResponse", function () {
  mockRfq.supplierHistory = [];
  var mySpaceRFQDetail = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    rfq: mockRfq
  })))));
  expect(mySpaceRFQDetail.find(_history["default"]).exists()).toEqual(false);
  expect(mySpaceRFQDetail.find(_myspaceQuotations["default"]).exists()).toEqual(true);
  expect(mySpaceRFQDetail.find(_rfqRecap["default"]).exists()).toEqual(true);
  expect(mySpaceRFQDetail.find(_noResponse["default"]).exists()).toEqual(true);
});
test("mySpaceRFQDetail no quotation", function () {
  mockRfq.quotationList = [];
  var mySpaceRFQDetail = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    rfq: mockRfq
  })))));
  expect(mySpaceRFQDetail.find(_history["default"]).exists()).toEqual(false);
  expect(mySpaceRFQDetail.find(_myspaceQuotations["default"]).exists()).toEqual(false);
  expect(mySpaceRFQDetail.find(_rfqRecap["default"]).exists()).toEqual(true);
  expect(mySpaceRFQDetail.find(_noResponse["default"]).exists()).toEqual(true);
});
test("mySpaceRFQDetail no rfq", function () {
  mockRfq.quotationList = [];
  var mySpaceRFQDetail = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    rfq: {}
  })))));
  expect(mySpaceRFQDetail.find(_history["default"]).exists()).toEqual(false);
  expect(mySpaceRFQDetail.find(_myspaceQuotations["default"]).exists()).toEqual(false);
  expect(mySpaceRFQDetail.find(_rfqRecap["default"]).exists()).toEqual(true);
  expect(mySpaceRFQDetail.find(_noResponse["default"]).exists()).toEqual(true);
});