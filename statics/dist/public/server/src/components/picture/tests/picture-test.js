"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _context = require("../../../context");
var _index = _interopRequireDefault(require("../index"));
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
  initData: {},
  store: {
    Application: {
      extendedLanguage: false
    },
    grabber: {
      products: {
        id: "1",
        img: "img.png",
        def: "def"
      }
    }
  }
};
var state = {};
var store = mockStore(state);
var alt = "Un texte alternatif";
var src = "src.jpg";
var sources = [{
  media: "(min-width:650px)",
  srcset: "img_01.jpg"
}, {
  media: "(min-width:465px)",
  srcset: "img_02.jpg"
}];

/* On vérifie la structure du composant. */
test("test picture structure", function () {
  var pictureComponent = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    alt: alt,
    src: src,
    sources: sources
  })))));

  /* Le Composant contient une balise picture. */
  expect(pictureComponent.find("picture")).toHaveLength(1);

  /* Qui lui même est composé de 2 sources et d'une img. */
  expect(pictureComponent.find("picture").find("source")).toHaveLength(2);
  expect(pictureComponent.find("picture").find("source").first().prop("srcSet")).toBe(sources[0].srcset);
  expect(pictureComponent.find("picture").find("source").first().prop("media")).toBe(sources[0].media);
  expect(pictureComponent.find("picture").find("source").last().prop("srcSet")).toBe(sources[1].srcset);
  expect(pictureComponent.find("picture").find("source").last().prop("media")).toBe(sources[1].media);
  expect(pictureComponent.find("picture").find("img")).toHaveLength(1);
  expect(pictureComponent.find("picture").find("img").prop("data-src")).toBe(src);
  expect(pictureComponent.find("picture").find("img").prop("alt")).toBe(alt);
});