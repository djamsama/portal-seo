"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _context = require("../../../context");
var _index = _interopRequireDefault(require("../index"));
var _relatedLinks = require("../styles/relatedLinks");
var _theme = require("../../theme");
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
    kwrefMainList: [{
      url: "www.test01.com",
      label: "un test"
    }, {
      url: "www.test02.com",
      label: "un second test"
    }]
  },
  store: {}
};
var state = {};
var store = mockStore(state);

/* On vérifie la structure du grabber. */
test("test related links structure", function () {
  var relatedLinks = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));

  /* Le Composant est composé d'un styled component 'RelatedLinksWrapper'. */
  expect(relatedLinks.find(_relatedLinks.RelatedLinksWrapper)).toHaveLength(1);

  /* Qui lui même est composé d'un 'Title'. */
  expect(relatedLinks.find(_relatedLinks.RelatedLinksWrapper).find(_relatedLinks.Title)).toHaveLength(1);

  /* Et de 2 'Links'. */
  expect(relatedLinks.find(_relatedLinks.RelatedLinksWrapper).find(_relatedLinks.Links)).toHaveLength(1);
  expect(relatedLinks.find(_relatedLinks.RelatedLinksWrapper).find(_relatedLinks.Links).find("li")).toHaveLength(2);

  /* Verification de l'ordre et des liens. */
  expect(relatedLinks.find(_relatedLinks.RelatedLinksWrapper).find(_relatedLinks.Links).find("li").first().find("a").prop("href")).toBe("www.test01.com");
  expect(relatedLinks.find(_relatedLinks.RelatedLinksWrapper).find(_relatedLinks.Links).find("li").last().find("a").prop("href")).toBe("www.test02.com");
});