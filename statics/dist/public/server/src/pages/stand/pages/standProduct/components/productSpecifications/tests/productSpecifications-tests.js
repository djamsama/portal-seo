"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _productSpecifications = require("../styles/productSpecifications");
var productCharacteristicsWithoutSpecificationsMock = {
  featureValues: {
    "12097": {
      title: "Options",
      values: "2-axis"
    },
    "29239": {
      title: "Applications",
      values: "for 3D application"
    }
  }
};
test("productSpecifications without specifications case", function () {
  var productSpecifications = shallow(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    featureValues: productCharacteristicsWithoutSpecificationsMock.featureValues
  }));
  expect(productSpecifications.find(_productSpecifications.ProductSpecificationsList)).toHaveLength(1);
  expect(productSpecifications.find("dt")).toHaveLength(2);
});
test("productSpecifications no featureValues and no specifications", function () {
  var productSpecifications = shallow(/*#__PURE__*/_react["default"].createElement(_index["default"], null));
  expect(productSpecifications.find(_productSpecifications.ProductSpecificationsList)).toHaveLength(0);
  expect(productSpecifications.find("dt")).toHaveLength(0);
});
var productCharacteristicsNormalCaseMock = {
  featureValues: {
    "1571": {
      title: "Other characteristics",
      values: "mobile, automated"
    },
    "18196": {
      title: "Technique",
      values: "MIG-MAG"
    }
  },
  specifications: [{
    itemId: 283,
    title: "Current",
    values: {
      MIN: "<span>Min.:</span>&nbsp;15 A",
      MAX: "<span>Max.:</span>&nbsp;400 A"
    }
  }]
};
test("productSpecifications normal case", function () {
  var productSpecifications = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    featureValues: productCharacteristicsNormalCaseMock.featureValues,
    specifications: productCharacteristicsNormalCaseMock.specifications
  }));
  expect(productSpecifications.find(_productSpecifications.ProductSpecificationsList)).toHaveLength(1);
  expect(productSpecifications.find("dt")).toHaveLength(3);
});