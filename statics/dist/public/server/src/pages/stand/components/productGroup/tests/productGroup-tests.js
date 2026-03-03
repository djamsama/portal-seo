"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _index = _interopRequireDefault(require("../index"));
var _productGroup = require("../styles/productGroup");
var _sectionTitle = require("../../../../../components/title/sectionTitle/styles/sectionTitle");
var _productCard = _interopRequireDefault(require("../../../../../components/product/productCard"));
var _initiateState = require("../../../../../initiateState");
jest.mock("react-flickity-component", function () {
  return (
    // Mock the Flickity component
    {
      __esModule: true,
      "default": jest.fn(function (_ref) {
        var children = _ref.children;
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-testid": "flickity-mock"
        }, children);
      })
    }
  );
});
if (!global.getComputedStyle) {
  var rules = document.createElement("div");
  rules.style.backgroundColor = "red";
  rules.style.cursor = "pointer";
  rules.style.color = "white";
  rules.style.width = "1500px";
  rules.style.height = "1500px";
  global.getComputedStyle = function () {
    return rules.style;
  };
}
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);

/* eslint-disable no-undef, no-unused-vars */
var propsNeededForNormalCase = {
  productGroup: {
    id: 1,
    groupName: "Test group"
  },
  products: [{
    id: 1,
    newProduct: false,
    hasVideo: false,
    name: "Titre produit",
    brand: "Modèle produit",
    innovation: null,
    imageUrl: "https://img.archiexpo.fr/images_ae/photo-m2/4780-10404574.jpg",
    linkUrl: "https://www.archiexpo.fr/prod/driade/product-4780-287193.html",
    mainFeatureValues: [],
    productPrice: null
  }],
  companyName: "Test company",
  displayGroupName: true
};
test("productGroup normal case", function () {
  var productGroup = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    companyName: propsNeededForNormalCase.companyName,
    products: propsNeededForNormalCase.products,
    displayGroupName: propsNeededForNormalCase.displayGroupName,
    productGroup: propsNeededForNormalCase.productGroup
  })));
  var productGroupWrapper = productGroup.find(_productGroup.ProductGroupWrapper);
  expect(productGroupWrapper).toHaveLength(1);
  expect(productGroupWrapper.find(_productGroup.StyledProductGroupTitle)).toHaveLength(1);
  var title = productGroupWrapper.find(_sectionTitle.Title);
  expect(title).toHaveLength(1);
  expect(title.find(_sectionTitle.Text)).toHaveLength(1);
  var productGroupContainer = productGroupWrapper.find(_productGroup.ProductGroupContainer);
  expect(productGroupContainer).toHaveLength(1);
  expect(productGroupContainer.find(_productCard["default"])).toHaveLength(1);
});
var propsNeededForNoDisplayGroupNameCase = {
  productGroup: {
    id: 1,
    groupName: "Test group"
  },
  products: [{
    id: 1,
    newProduct: false,
    hasVideo: false,
    name: "Titre produit",
    brand: "Modèle produit",
    innovation: null,
    imageUrl: "https://img.archiexpo.fr/images_ae/photo-m2/4780-10404574.jpg",
    linkUrl: "https://www.archiexpo.fr/prod/driade/product-4780-287193.html",
    mainFeatureValues: [],
    productPrice: null
  }],
  companyName: "Test company",
  displayGroupName: false
};
test("productGroup no display group name case", function () {
  var productGroup = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    companyName: propsNeededForNoDisplayGroupNameCase.companyName,
    products: propsNeededForNoDisplayGroupNameCase.products,
    displayGroupName: propsNeededForNoDisplayGroupNameCase.displayGroupName,
    productGroup: propsNeededForNoDisplayGroupNameCase.productGroup
  })));
  var productGroupWrapper = productGroup.find(_productGroup.ProductGroupWrapper);
  expect(productGroupWrapper).toHaveLength(1);
  expect(productGroupWrapper.find(_productGroup.StyledProductGroupTitle)).toHaveLength(1);
  var title = productGroupWrapper.find(_sectionTitle.Title);
  expect(title).toHaveLength(1);
  expect(title.find(_sectionTitle.Text)).toHaveLength(0);
});