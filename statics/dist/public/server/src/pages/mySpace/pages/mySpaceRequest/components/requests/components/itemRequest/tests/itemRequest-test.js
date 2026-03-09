"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable no-undef */

var defaultRfqPicture = "https://img.virtual-expo.com/media/ps/images/common/myspace/rfq-thumb.png";
var item = {
  id: 9591574,
  entityType: "PRODUCT",
  entityId: 1512255,
  comments: null,
  companyId: 6933,
  date: 1495021802000,
  requestTypes: ["question"],
  requestTokenId: "d6e82c7f48ed2808e4f3d3a4a4348fc8",
  requestUrl: "http://www.archiexpo.fr/myspace/secure/request-detail/d6e82c7f48ed2808e4f3d3a4a4348fc8.html",
  productDTO: {
    imageUrl: "http://img.archiexpo.fr/images_ae/photo-m/6933-7988830.jpg",
    linkUrl: "http://www.archiexpo.fr/prod/jardins/product-6933-1512255.html",
    company: null,
    newProduct: false,
    innovation: null,
    productPrice: null,
    hasVideo: null,
    brand: "YOLO by Claude Robin",
    shortName: "bain de soleil contemporain",
    name: "bain de soleil contemporain / en Batyline® / en aluminium / de jardin",
    id: 1512255
  },
  pdfDTO: null,
  pdfDetailsDTO: null,
  projectDTO: null
};
var itemRFQ = {
  comments: null,
  companyId: null,
  date: 1519547582000,
  entityId: null,
  entityType: "RFQ",
  id: 200,
  pdfDTO: null,
  pdfDetailsDTO: null,
  productDTO: null,
  projectDTO: null,
  requestTokenId: null,
  requestTypes: null,
  requestUrl: "http://www.directindustry.com/rfq/detail.html?token=694d667462792f4471506953716738587071537042673d3d",
  rfqDTO: {
    imageUrl: null,
    linkUrl: "http://www.directindustry.com/rfq/detail.html?token=694d667462792f4471506953716738587071537042673d3d",
    name: "autoclaves ",
    id: 200
  }
};
test("mySpaceRequest", function () {
  var mySpaceRequest = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: item
  }));
  expect(mySpaceRequest.find({
    href: item.requestUrl
  }).exists()).toEqual(true);
  expect(mySpaceRequest.find({
    src: item.productDTO.imageUrl
  }).exists()).toEqual(true);
});
test("mySpaceRequestRFQ", function () {
  var mySpaceRequest = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: itemRFQ
  }));
  expect(mySpaceRequest.find({
    href: itemRFQ.requestUrl
  }).exists()).toEqual(true);
  expect(mySpaceRequest.find({
    src: defaultRfqPicture
  }).exists()).toEqual(true);
});