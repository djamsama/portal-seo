"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _prices = require("../../../prices");
var _productCard = require("../styles/productCard");
var _tagIcon = require("../../../styles/tagIcon");
var _currencyHelper = require("../../../../helpers/currencyHelper");
var InitiateState = function InitiateState() {
  var response = {
    Application: {
      localeProp: "en",
      messages: {},
      currentCurrency: _currencyHelper.CurrencyHelper.getDefault("en"),
      rates: 0,
      currencies: undefined
    }
  };
  return response;
};
/* eslint-disable no-undef, no-unused-vars */
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
var store = mockStore(InitiateState);
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: {}
};
var testPrice = {
  formattedPrice: "1 234 $",
  unitLabel: "kg"
};
/* On vérifie la structure d'une fiche produit. */
test("test productCard structure", function () {
  var productCard = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    imageUrl: "url/test_image.jpg",
    linkUrl: "url/test_link.com",
    label: "a label",
    brand: "a brand",
    companyImageUrl: "url/test_company_image.jpg",
    companyLinkUrl: "url/test_company.com",
    companyName: "a company name",
    newProduct: true,
    hasVideo: false,
    productPrice: testPrice
  }))));
  var product = productCard.find(_productCard.Product);
  var company = productCard.find(_productCard.Company);

  /* Le Composant est cosntitué d'un styled component 'Product' et 'Company'. */
  expect(product).toHaveLength(1);
  expect(company).toHaveLength(1);

  /* Verification des liens. */
  expect(product.find("a").first().prop("href")).toBe("url/test_link.com");
  expect(company.prop("href")).toBe("url/test_company.com");

  /* Verification des pictos. */
  var pictos = product.find(_productCard.Pictos);
  expect(pictos.find(_tagIcon.VideoTagSm)).toHaveLength(0);
  expect(pictos.find(_tagIcon.NewTagSm)).toHaveLength(1);

  /* Verification des images. */
  expect(product.find(_productCard.ProductImageWrapper).find("img").first().prop("data-src")).toBe("url/test_image.jpg");
  expect(company.find("img").first().prop("src")).toBe("url/test_company_image.jpg");

  /* Vérification du prix. */
  var price = product.find(_prices.Price);
  expect(price).toHaveLength(1);
});