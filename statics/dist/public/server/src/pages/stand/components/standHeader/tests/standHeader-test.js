"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _context = require("../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _standHeader = require("../styles/standHeader");
var _theme = require("../../../../../components/theme");
/* eslint-disable no-undef, no-unused-vars */
var t = _theme.theme.ae;
var mockStore = (0, _reduxMockStore["default"])([]);
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
var context = {
  config: {
    portal: portal
  },
  initData: {
    globalLinksBaseImg: "www.archiexpo.fr",
    companyLinkCad: "www.archiexpo.fr",
    headerStandCompany: {
      id: 1,
      name: "Une companie",
      imageUrl: "www.archiexpo.fr/img"
    },
    companyClickThroughLogo: "companyClickThroughLogo-value",
    companyClickThroughLink: "companyClickThroughLink-value",
    companyWebSite: "www.unecompanie.fr",
    groupCompanyName: "un groupe"
  },
  store: {
    Application: {
      extendedLanguage: false
    }
  }
};
var state = {};
var store = mockStore(state);

/* On vérifie la structure du grabber. */
test("test stand header structure", function () {
  var standHeader = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    activeTab: "fo_headerStand_product_tab"
  })))));

  /* Le Composant est composé d'un styled component 'HeaderStandWrapper'. */
  expect(standHeader.find(_standHeader.HeaderStandWrapper)).toHaveLength(1);

  /* Qui lui même est composé d'un composant 'HeaderStandContainer'. */
  expect(standHeader.find(_standHeader.HeaderStandWrapper).find(_standHeader.HeaderStandContainer)).toHaveLength(1);
});