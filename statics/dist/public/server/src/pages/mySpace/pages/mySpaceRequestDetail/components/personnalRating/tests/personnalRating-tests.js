"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../../initiateState");
var _personnalRating = require("../styles/personnalRating");
/* eslint-disable no-undef */

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
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: {}
};

/* On vérifie la structure de la notation vide. */
test("test personnalRating structure", function () {
  var personnalRating = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    rating: 0,
    token: "aTestToken"
  }))));
  var title = personnalRating.find(_personnalRating.Title);
  var content = personnalRating.find(_personnalRating.Content);

  /* Le Composant est cosntitué d'un styled component 'Title' et 'Content'. */
  expect(title).toHaveLength(1);
  expect(content).toHaveLength(1);

  /* Verification du libellé en fonction de la note. */
  expect(title.text()).toBe("Donnez votre avis sur cet échange");
});

/* On vérifie la structure de la notation vide. */
test("test personnalRating with note structure", function () {
  var personnalRating = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    rating: 4,
    token: "aTestToken"
  }))));
  var title = personnalRating.find(_personnalRating.Title);
  var content = personnalRating.find(_personnalRating.Content);

  /* Le Composant est cosntitué d'un styled component 'Title' et 'Content'. */
  expect(title).toHaveLength(1);
  expect(content).toHaveLength(1);

  /* Verification du libellé en fonction de la note. */
  expect(title.text()).toBe("Votre note");
});