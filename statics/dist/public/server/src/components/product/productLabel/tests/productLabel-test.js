"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _labelWrapper = _interopRequireDefault(require("../components/labelWrapper"));
var _productLabel = require("../styles/productLabel");
var _labelWrapper2 = require("../components/labelWrapper/styles/labelWrapper");
/* eslint-disable no-undef */

var productLabelNormalCaseDatas = {
  productLabel: "label",
  productBrand: "brand",
  productLinkUrl: "https://www.directindustry.com/prod/unidelta-spa/product-33937-1568663.html",
  productLabelFeatureValues: [{
    id: 1,
    featureValueId: 1,
    rankOrder: 1,
    content: "feature value 1"
  }, {
    id: 2,
    featureValueId: 2,
    rankOrder: 2,
    content: "feature value 2"
  }, {
    id: 3,
    featureValueId: 3,
    rankOrder: 3,
    content: "feature value 3"
  }]
};
test("productLabel normal case", function () {
  var productLabel = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    brand: productLabelNormalCaseDatas.productBrand,
    label: productLabelNormalCaseDatas.productLabel,
    featureValues: productLabelNormalCaseDatas.productLabelFeatureValues,
    linkUrl: productLabelNormalCaseDatas.productLinkUrl,
    smallLabel: true
  }));
  var productLabelTitle = productLabel.find(_productLabel.ProductLabelTitle);
  expect(productLabelTitle).toHaveLength(1);
  expect(productLabelTitle.find(_labelWrapper["default"])).toHaveLength(1);
  expect(productLabelTitle.props().smallLabel).toEqual(true);

  // Vérification du dom html.
  var linkElements = productLabelTitle.find("a");
  expect(linkElements).toHaveLength(1);
  expect(linkElements.find(_labelWrapper2.StyledProductLabel)).toHaveLength(1);
  expect(linkElements.find(_labelWrapper2.StyledProductBrand)).toHaveLength(1);
  expect(linkElements.at(0).getDOMNode().attributes.getNamedItem("href").value).toEqual("https://www.directindustry.com/prod/unidelta-spa/product-33937-1568663.html");
  expect(productLabelTitle.getDOMNode().textContent).toContain("label brand");
});
var productLabelWithoutBrandDatas = {
  productLabel: "label",
  productBrand: "",
  productLabelFeatureValues: []
};
test("productLabel without brand and no feature value", function () {
  var productLabel = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    brand: productLabelWithoutBrandDatas.productBrand,
    label: productLabelWithoutBrandDatas.productLabel,
    featureValues: productLabelWithoutBrandDatas.productLabelFeatureValues
  }));
  var productLabelTitle = productLabel.find(_productLabel.ProductLabelTitle);
  expect(productLabelTitle).toHaveLength(1);

  // Vérification que le modèle ne s'est pas affiché
  expect(productLabelTitle.find(_labelWrapper2.StyledProductLabel)).toHaveLength(1);
  expect(productLabelTitle.find(_labelWrapper2.StyledProductBrand)).toHaveLength(0);
  expect(productLabelTitle.getDOMNode().textContent).toContain("label ");
  expect(productLabelTitle.props().smallLabel).toEqual(false);
});
test("productLabel with label only", function () {
  var productLabel = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    companyName: productLabelWithoutBrandDatas.companyName,
    label: productLabelWithoutBrandDatas.productLabel
  }));
  var productLabelTitle = productLabel.find(_productLabel.ProductLabelTitle);
  expect(productLabelTitle).toHaveLength(1);

  // Vérification que le modèle ne s'est pas affiché
  expect(productLabelTitle.find(_labelWrapper2.StyledProductLabel)).toHaveLength(1);
  expect(productLabelTitle.find(_labelWrapper2.StyledProductBrand)).toHaveLength(0);
  expect(productLabelTitle.getDOMNode().textContent).toContain("label ");
});