"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _styledComponents = require("styled-components");
var _mockContext = require("../../../../../../tools/utils-test/mockContext");
var _mockMenu = require("../../../../../../tools/utils-test/mockMenu");
var _theme = require("../../../../../components/theme");
var _context = require("../../../../../context");
var _pageLayout = _interopRequireDefault(require("../../../../../layouts/pageLayout"));
var _index = _interopRequireDefault(require("../index"));
var _mockAdapter = require("../../../../../../tools/utils-test/mockAdapter.js");
require("../../../../../../tools/utils-test/mockIntersectionObserver.js");
(0, _mockAdapter.doSomeMock)();
(0, _mockAdapter.doMockButtons)();
var t = _theme.theme.ae;
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var state = {
  Menu: _mockMenu.menu,
  Application: {
    currentCurrency: "fr",
    localeProp: "fr",
    extendedLanguage: false
  },
  shopGate: {
    shopGate: undefined
  }
};
var store = mockStore(state);
var featureValues = {
  "1571": {
    title: "Other characteristics",
    values: "mobile, automated"
  },
  "18196": {
    title: "Technique",
    values: "MIG-MAG"
  }
};
var specifications = [{
  itemId: 283,
  title: "Current",
  values: {
    MIN: "<span>Min.:</span>&nbsp;15 A",
    MAX: "<span>Max.:</span>&nbsp;400 A"
  }
}];
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
_mockContext.context.config = {
  portal: portal
};
_mockContext.context.initData.featureValues = {
  featureValues: featureValues
};
_mockContext.context.initData.specifications = {
  specifications: specifications
};
_mockContext.context.initData.productStandDTO = {
  productId: 1,
  description: "desc",
  hasTranslation: false,
  innovation: null,
  newProduct: false,
  pictureViewerDataDto: {
    pictureList: [],
    hasVideo: false
  },
  companyId: 1,
  companyName: "company",
  isDowngraded: true
};
_mockContext.context.initData.productLabel = "label";
_mockContext.context.initData.mainProducts = [];
_mockContext.context.initData.productId = 1;
_mockContext.context.initData.trackingInfo = {
  pageTypeId: "150",
  elementList: []
};
_mockContext.context.initData.productShopServer = {
  totalElements: 4,
  totalPages: 4,
  size: 1,
  content: [{
    id: 72,
    productShop: {
      id: 4116,
      labelSeo: "seo",
      locale: null,
      status: null,
      brand: "AVM Automation",
      title: "Unité de guidage H Classique pour vérin ISO6432 Ø20 course 160 mm, bagues lisses",
      sku: null,
      sellerName: "seller",
      shippedFrom: null,
      originalPrice: 228.48,
      price: 228.48,
      variantCount: null,
      url: "https://shop.directindustry.com/fr/p/seo-26168007"
    },
    type: "LINE",
    status: "ACTIVE"
  }],
  number: 0,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true
  },
  numberOfElements: 1,
  pageable: {
    offset: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    paged: true,
    pageNumber: 0,
    pageSize: 1,
    unpaged: false
  },
  first: true,
  last: false,
  empty: false
};
var showRelatedLinks = true;
test("StandProduct with downgraded company", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe
  var standProduct = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    showRelatedLinks: showRelatedLinks
  })))));
  expect(standProduct.find(_pageLayout["default"])).toHaveLength(1);
});
_mockContext.context.initData.productStandDTO = {
  pictureViewerDataDto: {
    pictureList: []
  },
  companyId: 1,
  isDowngraded: false
};
_mockContext.context.initData.isDowngraded = false;
test("StandProduct with subscribed company", function () {
  /* eslint-disable no-undef, no-unused-vars */
  var standProduct = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    showRelatedLinks: showRelatedLinks
  })))));
  expect(standProduct.find(_pageLayout["default"])).toHaveLength(1);
});
_mockContext.context.initData.productStandDTO.pictureViewerDataDto.hasVideo = true;
_mockContext.context.initData.productStandDTO.pictureViewerDataDto.productVideoUrl = "videoUrl";
_mockContext.context.initData.productStandDTO.pictureViewerDataDto.productVideoThumbUrl = "thumbUrl";
_mockContext.context.initData.productStandDTO.pictureViewerDataDto.productVideo360Url = null;
test("StandProduct with video 2D and not mobile device", function () {
  var standProduct = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    showRelatedLinks: showRelatedLinks
  })))));
  expect(standProduct.find(_pageLayout["default"])).toHaveLength(1);
});
_mockContext.context.initData.productStandDTO.pictureViewerDataDto.productVideo360Url = "video360Url";
_mockContext.context.config.isMobile = true;
test("StandProduct with video 360 and mobile device", function () {
  var standProduct = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    showRelatedLinks: showRelatedLinks
  })))));
  expect(standProduct.find(_pageLayout["default"])).toHaveLength(1);
});