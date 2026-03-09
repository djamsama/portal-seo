"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _initiateState = require("../../../../../../../initiateState");
var _context = require("../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _index2 = _interopRequireDefault(require("../components/linkedCatalogs/index"));
var _requestDocumentation = _interopRequireDefault(require("../../../../../../../components/request/requestDocumentation"));
var _linkedCatalogs = require("../components/linkedCatalogs/styles/linkedCatalogs");
jest.mock("react-lazyload", function () {
  return {
    lazyload: function lazyload() {
      return function (Component) {
        return function (props) {
          return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
            t: function t() {
              return "";
            }
          }, props));
        };
      };
    }
  };
});
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: {
      language: "fr"
    }
  },
  initData: {
    productId: 1
  }
};
var catalogSectionWithCatalogsAndRequestDocButton = {
  companyId: 1,
  catalogs: [{
    catalogId: 1331,
    catalogStandUrl: "https://pdf.agriexpo.online/pdf/carraro-tractors/tractors-specialists/172844-1331.html",
    catalogPictureUrl: "https://img.agriexpo.online/pdf/repository_ag/172844/tractors-specialists-1331_1m.jpg",
    catalogTitle: "Tractors for Specialists",
    catalogPages: 16,
    catalogLanguage: "en"
  }],
  companyName: "ABERMOVE",
  catalogStandUrl: "https://pdf.archiexpo.fr/pdf/abermove-159966.html",
  getSuppliers: function getSuppliers() {},
  requestButtonDoc: {
    formUrl: "https://www.agriexpo.online/request/form.html?token=eFKEoDh4P1OdJTDT4qPb98VcNNR96W7gs",
    labelKey: "foj_request_button_product_doc",
    requestTrackEventAction: "RequestDoc",
    type: "DOC"
  }
};
test("catalogSection with catalogs and request doc button", function () {
  var catalogSection = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    catalogs: catalogSectionWithCatalogsAndRequestDocButton.catalogs,
    catalogStandUrl: catalogSectionWithCatalogsAndRequestDocButton.catalogStandUrl,
    companyId: catalogSectionWithCatalogsAndRequestDocButton.companyId,
    companyName: catalogSectionWithCatalogsAndRequestDocButton.companyName,
    getSuppliers: catalogSectionWithCatalogsAndRequestDocButton.getSuppliers,
    requestButtonDoc: catalogSectionWithCatalogsAndRequestDocButton.requestButtonDoc
  }))));
  expect(catalogSection.find(_index2["default"])).toHaveLength(1);
  expect(catalogSection.find(_requestDocumentation["default"])).toHaveLength(1);
  expect(catalogSection.find(_linkedCatalogs.StyledEmptyCatalogLink)).toHaveLength(0);
});
var catalogSectionWithStandAndNoCatalog = {
  companyId: 1,
  catalogs: [],
  companyName: "ABERMOVE",
  catalogStandUrl: "https://pdf.archiexpo.fr/pdf/abermove-159966.html",
  getSuppliers: function getSuppliers() {},
  requestButtonDoc: null
};
test("catalogSection with no catalog and with stand link", function () {
  var catalogSection = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    catalogs: catalogSectionWithStandAndNoCatalog.catalogs,
    catalogStandUrl: catalogSectionWithStandAndNoCatalog.catalogStandUrl,
    companyId: catalogSectionWithStandAndNoCatalog.companyId,
    companyName: catalogSectionWithStandAndNoCatalog.companyName,
    getSuppliers: catalogSectionWithStandAndNoCatalog.getSuppliers,
    requestButtonDoc: catalogSectionWithStandAndNoCatalog.requestButtonDoc
  })));
  expect(catalogSection.find(_index2["default"])).toHaveLength(1);
  expect(catalogSection.find(_requestDocumentation["default"])).toHaveLength(0);
  expect(catalogSection.find(_linkedCatalogs.StyledEmptyCatalogLink)).toHaveLength(1);
});