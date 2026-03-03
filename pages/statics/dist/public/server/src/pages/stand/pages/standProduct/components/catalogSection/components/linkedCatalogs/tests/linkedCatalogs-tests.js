"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _index = _interopRequireDefault(require("../index"));
var _linkedCatalogs = require("../styles/linkedCatalogs");
var _flagIcon = require("../../../../../../../../../components/styles/flagIcon");
var _initiateState = require("../../../../../../../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: {
      language: "fr"
    }
  }
};
var linkedCatalogsWithSearchResult = {
  catalogs: [{
    catalogId: 1331,
    catalogStandUrl: "https://pdf.agriexpo.online/pdf/carraro-tractors/tractors-specialists/172844-1331.html",
    catalogPictureUrl: "https://img.agriexpo.online/pdf/repository_ag/172844/tractors-specialists-1331_1m.jpg",
    catalogTitle: "Tractors for Specialists",
    catalogPages: 16,
    catalogLanguage: "en"
  }],
  companyName: "ABERMOVE",
  catalogStandUrl: "https://pdf.archiexpo.fr/pdf/abermove-159966.html"
};
test("linkedCatalogs with search result", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe
  var linkedCatalogs = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    catalogs: linkedCatalogsWithSearchResult.catalogs,
    catalogStandUrl: linkedCatalogsWithSearchResult.catalogStandUrl,
    companyName: linkedCatalogsWithSearchResult.companyName,
    displayLink: false
  })));
  var catalogsWrapper = linkedCatalogs.find(_linkedCatalogs.CatalogsWrapper);
  expect(catalogsWrapper).toHaveLength(1);
  expect(catalogsWrapper.find(_linkedCatalogs.CatalogThumbnailTile)).toHaveLength(1);
  expect(catalogsWrapper.find(_flagIcon.FlagIcon24)).toHaveLength(1);
  expect(catalogsWrapper.find(_linkedCatalogs.StyledCatalogLink)).toHaveLength(1);
  expect(catalogsWrapper.find(_linkedCatalogs.StyledCatalogTitleLink)).toHaveLength(1);
  expect(catalogsWrapper.find(_linkedCatalogs.StyledCatalogImg)).toHaveLength(1);
  expect(catalogsWrapper.find(_linkedCatalogs.StyledCatalogCaption)).toHaveLength(1);
  expect(catalogsWrapper.find(_linkedCatalogs.StyledCatalogPages)).toHaveLength(1);
  expect(linkedCatalogs.find(_linkedCatalogs.EmptyCatalogWrapper)).toHaveLength(0);
});
test("linkedCatalogs with no search result", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe
  var linkedCatalogs = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    catalogs: [],
    companyName: "ABERMOVE",
    catalogStandUrl: "https://pdf.archiexpo.fr/pdf/abermove-159966.html",
    displayLink: false
  })));
  expect(linkedCatalogs.find(_linkedCatalogs.CatalogsWrapper)).toHaveLength(0);
  expect(linkedCatalogs.find(_linkedCatalogs.EmptyCatalogWrapper)).toHaveLength(1);
  expect(linkedCatalogs.find(_linkedCatalogs.StyledEmptyCatalogLink)).toHaveLength(0);
  expect(linkedCatalogs.find(_linkedCatalogs.StyledEmptyCatalogDescription)).toHaveLength(1);
  expect(linkedCatalogs.find(_linkedCatalogs.StyledEmptyCatalogIcon)).toHaveLength(1);
});
test("linkedCatalogs with no search result and downgraded company", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe
  var linkedCatalogs = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    catalogs: [],
    companyName: "ABERMOVE",
    catalogStandUrl: "https://pdf.archiexpo.fr/pdf/abermove-159966.html",
    displayLink: true
  })));
  expect(linkedCatalogs.find(_linkedCatalogs.CatalogsWrapper)).toHaveLength(0);
  expect(linkedCatalogs.find(_linkedCatalogs.EmptyCatalogWrapper)).toHaveLength(1);
  expect(linkedCatalogs.find(_linkedCatalogs.StyledEmptyCatalogLink)).toHaveLength(1);
  expect(linkedCatalogs.find(_linkedCatalogs.StyledEmptyCatalogDescription)).toHaveLength(1);
  expect(linkedCatalogs.find(_linkedCatalogs.StyledEmptyCatalogIcon)).toHaveLength(1);
});