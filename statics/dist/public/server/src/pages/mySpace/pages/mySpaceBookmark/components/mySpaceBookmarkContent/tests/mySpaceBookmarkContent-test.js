"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _reactCollapse = require("react-collapse");
var _reactTransitionGroup = require("react-transition-group");
var _Fade = _interopRequireDefault(require("react-reveal/Fade"));
var _collapseVe = _interopRequireDefault(require("../../../../../../../components/collapse/collapseVe"));
var _context = require("../../../../../../../context");
var _initiateState = require("../../../../../../../initiateState");
var _boxItemHeader = _interopRequireDefault(require("../../../../../components/boxItemHeader"));
var _itemMySpace = _interopRequireDefault(require("../../../../../components/itemMySpace"));
var _item = require("../../../../../components/itemMySpace/styles/item");
var _mySpace = require("../../../../../styles/mySpace");
var _index = _interopRequireDefault(require("../index"));
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var srcToFind = "http://img.archiexpo.fr/images_ae/photo-m/58370-12242986.jpg";
var stringFolders = "[{\"id\":982413,\"bookmarks\":[{\"id\":149701,\"entityType\":\"PRODUCT\",\"entityId\":1924858,\"comments\":null,\"companyId\":58370,\"date\":null,\"requestTypes\":null,\"requestTokenId\":null,\"requestUrl\":null,\"productDTO\":{\"imageUrl\":\"http://img.archiexpo.fr/images_ae/photo-m/58370-12242986.jpg\",\"linkUrl\":\"http://www.archiexpo.fr/prod/vondom/product-58370-1924858.html\",\"company\":null,\"newProduct\":false,\"innovation\":null,\"productPrice\":null,\"hasVideo\":null,\"shortName\":\"canap\xE9 modulable\",\"brand\":\"VELA by Ram\xF3n Esteve\",\"name\":\"canap\xE9 modulable / en arc de cercle / contemporain / de jardin\",\"id\":1924858},\"pdfDTO\":null,\"pdfDetailsDTO\":null,\"projectDTO\":null},{\"id\":159186,\"entityType\":\"PRODUCT\",\"entityId\":716908,\"comments\":null,\"companyId\":58370,\"date\":null,\"requestTypes\":null,\"requestTokenId\":null,\"requestUrl\":null,\"productDTO\":{\"imageUrl\":\"http://img.archiexpo.fr/images_ae/photo-m/58370-4844533.jpg\",\"linkUrl\":\"http://www.archiexpo.fr/prod/vondom/product-58370-716908.html\",\"company\":null,\"newProduct\":false,\"innovation\":null,\"productPrice\":null,\"hasVideo\":null,\"shortName\":\"jardini\xE8re en poly\xE9thyl\xE8ne\",\"brand\":\"VELA LAND by Ramon Esteve\",\"name\":\"jardini\xE8re en poly\xE9thyl\xE8ne / rectangulaire / contemporaine\",\"id\":716908},\"pdfDTO\":null,\"pdfDetailsDTO\":null,\"projectDTO\":null}],\"defaultFolder\":true,\"label\":\"\",\"shared\":false,\"sharedWith\":false,\"owner\":null},{\"id\":1001682,\"bookmarks\":[{\"id\":159184,\"entityType\":\"PRODUCT\",\"entityId\":2000964,\"comments\":\"un nv comm\",\"companyId\":147722,\"date\":null,\"requestTypes\":null,\"requestTokenId\":null,\"requestUrl\":null,\"productDTO\":{\"imageUrl\":\"http://img.archiexpo.fr/images_ae/photo-m/147722-13065020.jpg\",\"linkUrl\":\"http://www.archiexpo.fr/prod/dauby/product-147722-2000964.html\",\"company\":null,\"newProduct\":false,\"innovation\":null,\"productPrice\":null,\"hasVideo\":null,\"shortName\":\"bouton de meuble classique\",\"brand\":\"CDF: BT296\",\"name\":\"bouton de meuble classique / en m\xE9tal\",\"id\":2000964},\"pdfDTO\":null,\"pdfDetailsDTO\":null,\"projectDTO\":null},{\"id\":159182,\"entityType\":\"PRODUCT\",\"entityId\":2003653,\"comments\":\"un commentaire sur celui ci\",\"companyId\":3686,\"date\":null,\"requestTypes\":null,\"requestTokenId\":null,\"requestUrl\":null,\"productDTO\":{\"imageUrl\":\"http://img.archiexpo.fr/images_ae/photo-m/3686-13101360.jpg\",\"linkUrl\":\"http://www.archiexpo.fr/prod/panaria-ceramica/product-3686-2003653.html\",\"company\":null,\"newProduct\":false,\"innovation\":null,\"productPrice\":null,\"hasVideo\":null,\"shortName\":\"carrelage d'int\xE9rieur\",\"brand\":\"HORIZON : DECORS\",\"name\":\"carrelage d'int\xE9rieur / mural / en gr\xE8s c\xE9rame\",\"id\":2003653},\"pdfDTO\":null,\"pdfDetailsDTO\":null,\"projectDTO\":null},{\"id\":159181,\"entityType\":\"PRODUCT\",\"entityId\":2002791,\"comments\":\"un com 2\",\"companyId\":2027,\"date\":null,\"requestTypes\":null,\"requestTokenId\":null,\"requestUrl\":null,\"productDTO\":{\"imageUrl\":\"".concat(srcToFind, "\",\"linkUrl\":\"http://www.archiexpo.fr/prod/ceramiche-caesar/product-2027-2002791.html\",\"company\":null,\"newProduct\":false,\"innovation\":null,\"productPrice\":null,\"hasVideo\":null,\"shortName\":\"carrelage d'int\xE9rieur\",\"brand\":\"BLAZE\",\"name\":\"carrelage d'int\xE9rieur / mural / de sol / en gr\xE8s c\xE9rame\",\"id\":2002791},\"pdfDTO\":null,\"pdfDetailsDTO\":null,\"projectDTO\":null}],\"defaultFolder\":false,\"label\":\"dossier 1\",\"shared\":false,\"sharedWith\":false,\"owner\":null}]");
var folders = JSON.parse(stringFolders);
var initData = {
  folders: folders
};
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "NE",
  language: "ES",
  baseUrl: "nauticexpo.es",
  siteLabel: "nauticexpo",
  tld: "es",
  domain: "nauticexpo.es",
  locale: "es"
};
test("mySpaceBookmarkContent", function () {
  var context = {
    initData: initData,
    config: {
      portal: portal
    }
  }; // $FlowFixMe
  /* eslint-disable no-undef, no-unused-vars */
  var mySpaceBookmarkContent = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    bookmark: {
      folders: folders
    },
    onLoadFolder: function onLoadFolder() {
      return folders;
    }
  }))));
  expect(mySpaceBookmarkContent.find(_reactCollapse.Collapse).exists()).toEqual(true);
  expect(mySpaceBookmarkContent.find(_collapseVe["default"]).exists()).toEqual(true);
  expect(mySpaceBookmarkContent.find(_reactTransitionGroup.TransitionGroup).exists()).toEqual(true);
  expect(mySpaceBookmarkContent.find(_Fade["default"]).exists()).toEqual(true);
  expect(mySpaceBookmarkContent.find(_boxItemHeader["default"]).exists()).toEqual(true);
  expect(mySpaceBookmarkContent.find(_itemMySpace["default"]).exists()).toEqual(true);
  expect(mySpaceBookmarkContent.find(_item.Image)).toHaveLength(5);
  expect(mySpaceBookmarkContent.find(_item.Image).first().prop("src")).toStrictEqual(srcToFind);
  expect(mySpaceBookmarkContent.find(_mySpace.EventsDiv).exists()).toEqual(true);
});
test("mySpaceBookmarkContent no bookmark empty", function () {
  var context = {
    initData: {
      folders: []
    },
    config: {
      portal: portal
    }
  };
  var mySpaceBookmarkContent2 = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    bookmark: {
      folders: []
    },
    onLoadFolder: function onLoadFolder() {
      return [];
    }
  }))));
  expect(mySpaceBookmarkContent2.find(_reactCollapse.Collapse).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_collapseVe["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_reactTransitionGroup.TransitionGroup).exists()).toEqual(true);
  expect(mySpaceBookmarkContent2.find(_Fade["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_boxItemHeader["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_itemMySpace["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_item.Image)).toHaveLength(0);
});
test("mySpaceBookmarkContent before populate folders", function () {
  var context = {
    initData: {
      folders: []
    },
    config: {
      portal: portal
    }
  };
  var mySpaceBookmarkContent2 = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    bookmark: {
      folders: undefined
    },
    onLoadFolder: function onLoadFolder() {
      return undefined;
    }
  }))));
  expect(mySpaceBookmarkContent2.find(_reactCollapse.Collapse).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_collapseVe["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_reactTransitionGroup.TransitionGroup).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_Fade["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_boxItemHeader["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_itemMySpace["default"]).exists()).toEqual(false);
  expect(mySpaceBookmarkContent2.find(_item.Image)).toHaveLength(0);
});