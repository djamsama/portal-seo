"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxForm = require("redux-form");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../../../../context");
var _initiateState = require("../../../../../../../../../initiateState");
var _index = _interopRequireDefault(require("../index"));
var _productCard = _interopRequireDefault(require("../../../../../../../../../components/product/productCard"));
var _mockAdapter = require("../../../../../../../../../../tools/utils-test/mockAdapter.js");
(0, _mockAdapter.doSomeMock)();
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AE",
  language: "FR",
  baseUrl: "archiexpo.fr",
  siteLabel: "archiexpo",
  tld: "fr",
  locale: "fr",
  domain: "archiexpo.fr"
};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: portal,
    isMobile: false
  },
  initData: {},
  store: {}
};
var relatedProducts = [{
  imageUrl: "https://img.archiexpo.fr/images_ae/photo-m2/50941-12763524.jpg",
  webpImageUrl: "https://img.archiexpo.fr/images_ae/photo-m2/50941-12763524.webp",
  linkUrl: "https://www.archiexpo.fr/prod/bd-barcelona-design/product-50941-1974146.html",
  company: {
    imageUrl: "https://img.archiexpo.fr/images_ae/logo-pp/L50941.gif",
    webpImageUrl: null,
    linkUrl: "https://www.archiexpo.fr/prod/bd-barcelona-design-50941.html",
    isCompanyInTestChat: false,
    name: "BD Barcelona Design",
    id: 50941,
    elementType: null
  },
  newProduct: false,
  innovation: null,
  productPrice: null,
  hasVideo: false,
  status: null,
  brand: "IS-DHER",
  featureValuesOrdered: [{
    id: 11655436,
    featureValueId: 933218,
    productLabelId: 364344400,
    rankOrder: 1,
    content: "en céramique"
  }],
  elementType: "PRODUCT",
  name: "vase design original",
  id: 1974146
}, {
  imageUrl: "https://img.archiexpo.fr/images_ae/photo-m2/4831-15700779.jpg",
  webpImageUrl: "https://img.archiexpo.fr/images_ae/photo-m2/4831-15700779.webp",
  linkUrl: "https://www.archiexpo.fr/prod/fos-ceramiche/product-4831-2220069.html",
  company: {
    imageUrl: "https://img.archiexpo.fr/images_ae/logo-pp/L4831.gif",
    webpImageUrl: null,
    linkUrl: "https://www.archiexpo.fr/prod/fos-ceramiche-4831.html",
    isCompanyInTestChat: false,
    name: "FOS CERAMICHE",
    id: 4831,
    elementType: null
  },
  newProduct: true,
  innovation: {
    type: "DESIGN",
    year: 2020
  },
  productPrice: null,
  hasVideo: false,
  status: null,
  brand: "Falling in Love",
  featureValuesOrdered: [{
    id: 15797335,
    featureValueId: 933214,
    productLabelId: 373305212,
    rankOrder: 1,
    content: "en porcelaine"
  }, {
    id: 15797336,
    featureValueId: 849672,
    productLabelId: 373305212,
    rankOrder: 2,
    content: "fait main"
  }],
  elementType: "PRODUCT",
  name: "vase design original",
  id: 2220069
}];
var RecommendationsListContainer = (0, _reduxForm.reduxForm)({
  form: "RecommendationsList"
})(_index["default"]);

/* eslint-disable no-undef, no-unused-vars */
/* On vérifie la structure d'une fiche produit. */
test("test recommendationList structure", function () {
  var recommendationsList = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(RecommendationsListContainer, {
    relatedProducts: relatedProducts
  }))));
  var productCards = recommendationsList.find(_productCard["default"]);

  /* Le Composant est d'une liste de 'ProductCard'. */
  expect(productCards).toHaveLength(2);
  var productCard1 = productCards.first();

  /* Verification des props. */
  expect(productCard1.prop("label")).toBe("vase design original");
  expect(productCard1.prop("brand")).toBe("IS-DHER");
  expect(productCard1.prop("companyName")).toBe("BD Barcelona Design");
  expect(productCard1.prop("imageUrl")).toBe("https://img.archiexpo.fr/images_ae/photo-m2/50941-12763524.jpg");
  expect(productCard1.prop("linkUrl")).toBe("https://www.archiexpo.fr/prod/bd-barcelona-design/product-50941-1974146.html");
});