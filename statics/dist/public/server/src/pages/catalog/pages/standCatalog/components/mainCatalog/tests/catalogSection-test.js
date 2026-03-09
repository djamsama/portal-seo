"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _initiateState = require("../../../../../../../initiateState");
var _context = require("../../../../../../../context");
var _mockContext = require("../../../../../../../../tools/utils-test/mockContext");
var _mainCatalog = require("../styles/mainCatalog");
var _index = _interopRequireDefault(require("../index"));
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
test("catalogSection with catalogs", function () {
  var catalogSection = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    catalogStandDetail: _mockContext.context.initData.catalogStandDetail
  }))));
  expect(catalogSection.find(_mainCatalog.CatalogWrapper)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.CatalogThumbnailTile)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.IconZoomStand)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.CornerBottomLeft)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.CornerPage)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.StyledCatalogImg)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.PdfBookStyle)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.AddBookmark)).toHaveLength(1);
  expect(catalogSection.find(_mainCatalog.StyledCatalogLink)).toHaveLength(1);
});
test("catalogSection with no catalog ", function () {
  var catalogSection = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    catalogStandDetail: null
  })));
  expect(catalogSection.find(_mainCatalog.CatalogWrapper)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.CatalogThumbnailTile)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.IconZoomStand)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.CornerBottomLeft)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.CornerPage)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.StyledCatalogImg)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.PdfBookStyle)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.AddBookmark)).toHaveLength(0);
  expect(catalogSection.find(_mainCatalog.StyledCatalogLink)).toHaveLength(0);
});