"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _initiateState = require("../../../../../../../initiateState");
var _context = require("../../../../../../../context");
var _mySpace = require("../../../../../styles/mySpace");
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable max-len */
/* eslint-disable no-undef */

var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var stringFolders = '[{"id":982413,"bookmarks":[{"id":149701,"entityType":"PRODUCT","entityId":1924858,"comments":null,"companyId":58370,"date":null,"requestTypes":null,"requestTokenId":null,"requestUrl":null,"productDTO":{"imageUrl":"http://img.archiexpo.fr/images_ae/photo-m/58370-12242986.jpg","linkUrl":"http://www.archiexpo.fr/prod/vondom/product-58370-1924858.html","company":null,"newProduct":false,"innovation":null,"productPrice":null,"hasVideo":null,"shortName":"canapé modulable","brand":"VELA by Ramón Esteve","name":"canapé modulable / en arc de cercle / contemporain / de jardin","id":1924858},"pdfDTO":null,"pdfDetailsDTO":null,"projectDTO":null}]}]';
var folders = JSON.parse(stringFolders);
var initData = {
  folders: folders
};
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AR",
  language: "IT",
  baseUrl: "aeroexpo.online/it",
  siteLabel: "aeroexpo",
  tld: "online",
  domain: "aeroexpo.online",
  locale: "it"
};
test("mySpaceBookmarkContent Event", function () {
  var context = {
    initData: initData,
    config: {
      portal: portal
    }
  };
  var mySpaceBookmarkContent = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    bookmark: {
      folders: folders
    },
    onLoadFolder: function onLoadFolder() {
      return folders;
    }
  }))));
  expect(mySpaceBookmarkContent.find(_mySpace.EventsDiv).exists()).toEqual(true);
  mySpaceBookmarkContent.find(_mySpace.EventsDiv).simulate("mouseOver");
  mySpaceBookmarkContent.find(_mySpace.EventsDiv).simulate("mouseOut");
  mySpaceBookmarkContent.find(_mySpace.EventsDiv).simulate("blur");
  mySpaceBookmarkContent.find(_mySpace.EventsDiv).simulate("focus");
});