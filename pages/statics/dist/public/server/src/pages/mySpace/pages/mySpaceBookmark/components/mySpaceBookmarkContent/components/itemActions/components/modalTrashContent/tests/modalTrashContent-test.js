"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var item = {
  id: 159410,
  entityType: "PRODUCT",
  entityId: 2003900,
  comments: "un com ",
  companyId: 53709,
  date: null,
  requestTypes: null,
  requestTokenId: null,
  requestUrl: null,
  productDTO: {
    imageUrl: "http://img.archiexpo.fr/images_ae/photo-m/53709-13106454.jpg",
    linkUrl: "http://www.archiexpo.fr/prod/nordlux/product-53709-2003900.html",
    company: null,
    newProduct: false,
    innovation: null,
    productPrice: null,
    hasVideo: null,
    shortName: "lampe de table",
    brand: "ALTON ",
    name: "lampe de table / contemporaine / en laiton brossé / en verre opalescent",
    id: 2003900
  },
  pdfDTO: null,
  pdfDetailsDTO: null,
  projectDTO: null
};
var folder = {
  id: 1004490,
  bookmarks: [item],
  defaultFolder: false,
  label: "simpleFolder",
  owner: null,
  shared: false,
  sharedWith: false
};
/* eslint-disable no-undef, no-unused-vars */
test("modalTrashContent", function () {
  var spyCloseTrashModal = sinon.spy();
  var spySubmit = sinon.spy();
  var modalTrashContent = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    folder: folder,
    item: item,
    closeTrashModal: spyCloseTrashModal,
    onBookmarkTrashFormSubmit: spySubmit
  }));
  expect(modalTrashContent.find("button").exists()).toEqual(true);
  modalTrashContent.find("button").last().simulate("click");
  expect(spyCloseTrashModal.calledOnce).toBe(true);
  expect(spySubmit.calledOnce).toBe(false);
  expect(modalTrashContent.find({
    type: "submit"
  }).exists()).toEqual(true);
  modalTrashContent.find("form").simulate("submit");
  expect(spySubmit.calledOnce).toBe(true);
});