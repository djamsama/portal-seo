"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _context = require("../../../../../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable no-undef */

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
var stringFolders = '[{"id":982413,"bookmarks":[{"id":149701,"entityType":"PRODUCT","entityId":1924858,"comments":null,"companyId":58370,"date":null,"requestTypes":null,"requestTokenId":null,"requestUrl":null,"productDTO":{"imageUrl":"http://img.archiexpo.fr/images_ae/photo-m/58370-12242986.jpg","linkUrl":"http://www.archiexpo.fr/prod/vondom/product-58370-1924858.html","company":null,"newProduct":false,"innovation":null,"productPrice":null,"hasVideo":null,"shortName":"canapé modulable","brand":"VELA by Ramón Esteve","name":"canapé modulable / en arc de cercle / contemporain / de jardin","id":1924858},"pdfDTO":null,"pdfDetailsDTO":null,"projectDTO":null},{"id":159186,"entityType":"PRODUCT","entityId":716908,"comments":null,"companyId":58370,"date":null,"requestTypes":null,"requestTokenId":null,"requestUrl":null,"productDTO":{"imageUrl":"http://img.archiexpo.fr/images_ae/photo-m/58370-4844533.jpg","linkUrl":"http://www.archiexpo.fr/prod/vondom/product-58370-716908.html","company":null,"newProduct":false,"innovation":null,"productPrice":null,"hasVideo":null,"shortName":"jardinière en polyéthylène","brand":"VELA LAND by Ramon Esteve","name":"jardinière en polyéthylène / rectangulaire / contemporaine","id":716908},"pdfDTO":null,"pdfDetailsDTO":null,"projectDTO":null}],"defaultFolder":true,"label":"","shared":false,"sharedWith":false,"owner":null},{"id":1001682,"bookmarks":[{"id":159184,"entityType":"PRODUCT","entityId":2000964,"comments":"un nv comm","companyId":147722,"date":null,"requestTypes":null,"requestTokenId":null,"requestUrl":null,"productDTO":{"imageUrl":"http://img.archiexpo.fr/images_ae/photo-m/147722-13065020.jpg","linkUrl":"http://www.archiexpo.fr/prod/dauby/product-147722-2000964.html","company":null,"newProduct":false,"innovation":null,"productPrice":null,"hasVideo":null,"shortName":"bouton de meuble classique","brand":"CDF: BT296","name":"bouton de meuble classique / en métal","id":2000964},"pdfDTO":null,"pdfDetailsDTO":null,"projectDTO":null},{"id":159182,"entityType":"PRODUCT","entityId":2003653,"comments":"un commentaire sur celui ci","companyId":3686,"date":null,"requestTypes":null,"requestTokenId":null,"requestUrl":null,"productDTO":{"imageUrl":"http://img.archiexpo.fr/images_ae/photo-m/3686-13101360.jpg","linkUrl":"http://www.archiexpo.fr/prod/panaria-ceramica/product-3686-2003653.html","company":null,"newProduct":false,"innovation":null,"productPrice":null,"hasVideo":null,"shortName":"carrelage d\'intérieur","brand":"HORIZON : DECORS","name":"carrelage d\'intérieur / mural / en grès cérame","id":2003653},"pdfDTO":null,"pdfDetailsDTO":null,"projectDTO":null},{"id":159181,"entityType":"PRODUCT","entityId":2002791,"comments":"un com 2","companyId":2027,"date":null,"requestTypes":null,"requestTokenId":null,"requestUrl":null,"productDTO":{"imageUrl":"http://img.archiexpo.fr/images_ae/photo-m/2027-13088995.jpg","linkUrl":"http://www.archiexpo.fr/prod/ceramiche-caesar/product-2027-2002791.html","company":null,"newProduct":false,"innovation":null,"productPrice":null,"hasVideo":null,"shortName":"carrelage d\'intérieur","brand":"BLAZE","name":"carrelage d\'intérieur / mural / de sol / en grès cérame","id":2002791},"pdfDTO":null,"pdfDetailsDTO":null,"projectDTO":null}],"defaultFolder":false,"label":"dossier 1","shared":false,"sharedWith":false,"owner":null}]';
var folders = JSON.parse(stringFolders);
var initData = {
  folders: folders
};
test("popupMoveContent move in new folder", function () {
  var context = {
    initData: initData
  };
  var popupMoveContent = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    folder: folder,
    item: item,
    onBookmarkMoveFormSubmit: function onBookmarkMoveFormSubmit() {
      return "";
    },
    closeMovePopup: function closeMovePopup() {
      return "";
    },
    openedActions: function openedActions() {
      return "";
    }
  })));
  expect(popupMoveContent.find("li").exists()).toEqual(true);
  expect(popupMoveContent.find("li").first().text()).toEqual(folders[1].label);
  expect(popupMoveContent.find({
    type: "submit"
  }).exists()).toEqual(true);
  popupMoveContent.find("input").first().simulate("click");
  popupMoveContent.find({
    type: "text"
  }).first().simulate("change", {
    target: {
      value: "My new value"
    }
  });
  popupMoveContent.find("form").simulate("submit");
});
test("popupMoveContent move in existing folder", function () {
  var context = {
    initData: initData
  };
  var popupMoveContent = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    folder: folder,
    item: item,
    onBookmarkMoveFormSubmit: function onBookmarkMoveFormSubmit() {
      return "";
    },
    closeMovePopup: function closeMovePopup() {
      return "";
    },
    openedActions: function openedActions() {
      return "";
    }
  })));
  expect(popupMoveContent.find({
    type: "submit"
  }).exists()).toEqual(true);
  expect(popupMoveContent.find({
    type: "checkbox"
  }).exists()).toEqual(true);

  // test  de popupMoveContent.handleInputChange avec checked = true
  popupMoveContent.find({
    type: "checkbox"
  }).first().simulate("change", {
    target: {
      checked: true,
      type: "checkbox"
    }
  });
  // test  de popupMoveContent.handleInputChange avec checked = false
  popupMoveContent.find({
    type: "checkbox"
  }).first().simulate("change", {
    target: {
      checked: false,
      type: "checkbox"
    }
  });

  // test submit
  popupMoveContent.find({
    type: "checkbox"
  }).first().simulate("change", {
    target: {
      checked: true,
      type: "checkbox"
    }
  });
  popupMoveContent.find("form").simulate("submit");
});