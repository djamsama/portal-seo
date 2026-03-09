"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _bookmarkLink = require("../styles/bookmarkLink");
var _mySpaceModalSignIn = _interopRequireDefault(require("../../../mySpaceLink/components/mySpaceModalSignIn"));
var _mySpaceModalLogin = _interopRequireDefault(require("../../../mySpaceLink/components/mySpaceModalLogin"));
var _mySpaceModalForget = _interopRequireDefault(require("../../../mySpaceLink/components/mySpaceModalForget"));
/* eslint-disable no-undef, no-unused-vars */
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
  store: {}
};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var InitiateState = function InitiateState() {
  var response = {
    Application: {},
    signUpModalOpen: true
  };
  return response;
};
var store = mockStore(InitiateState);
var isBookmarkedFalse = function isBookmarkedFalse() {
  return false;
};
var isBookmarkedTrue = function isBookmarkedTrue() {
  return true;
};

/* On vérifie la structure de l'icone d'ajout aux favoris. */
test("test bookmark link - add icon", function () {
  var bookmarkIcon = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    isBookmarked: isBookmarkedFalse,
    asIcon: true,
    bookmarked: false
  })));

  /* Le Composant est composé d'un styled component 'Favorite'. */
  expect(bookmarkIcon.find(_bookmarkLink.Favorite)).toHaveLength(1);
  expect(bookmarkIcon.find(_bookmarkLink.Favorite).hasClass("bookmarked")).toBe(false);
  expect(bookmarkIcon.find(_bookmarkLink.FavoriteLink)).toHaveLength(0);

  /* Les fenêtres liées au login/signin ne sont montées que sur demande. */
  expect(bookmarkIcon.find(_mySpaceModalSignIn["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalLogin["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalForget["default"])).toHaveLength(0);
});

/* On vérifie la structure de l'icone de suppression des favoris. */
test("test bookmark link - remove icon", function () {
  var bookmarkIcon = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    isBookmarked: isBookmarkedTrue,
    asIcon: true,
    bookmarked: true
  })));

  /* Le Composant est composé d'un styled component 'Favorite'. */
  expect(bookmarkIcon.find(_bookmarkLink.Favorite)).toHaveLength(1);
  expect(bookmarkIcon.find(_bookmarkLink.Favorite).hasClass("bookmarked")).toBe(true);
  expect(bookmarkIcon.find(_bookmarkLink.FavoriteLink)).toHaveLength(0);

  /* Les fenêtres liées au login/signin ne sont montées que sur demande. */
  expect(bookmarkIcon.find(_mySpaceModalSignIn["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalLogin["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalForget["default"])).toHaveLength(0);
});

/* On vérifie la structure du lien d'ajout aux favoris. */
test("test bookmark link - not bookmarked", function () {
  var bookmarkIcon = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    isBookmarked: isBookmarkedFalse,
    asIcon: false,
    bookmarked: false
  })));

  /* Le Composant est composé d'un styled component 'FavoriteLink'. */
  expect(bookmarkIcon.find(_bookmarkLink.FavoriteLink)).toHaveLength(1);
  expect(bookmarkIcon.find(_bookmarkLink.FavoriteLink).hasClass("bookmarked")).toBe(false);
  expect(bookmarkIcon.find(_bookmarkLink.Favorite)).toHaveLength(0);

  /* Les fenêtres liées au login/signin ne sont montées que sur demande. */
  expect(bookmarkIcon.find(_mySpaceModalSignIn["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalLogin["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalForget["default"])).toHaveLength(0);
});

/* On vérifie la structure du lien de suppression des favoris. */
test("test bookmark link - bookmarked", function () {
  var bookmarkIcon = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    isBookmarked: isBookmarkedTrue,
    asIcon: false,
    bookmarked: true
  })));

  /* Le Composant est composé d'un styled component 'FavoriteLink'. */
  expect(bookmarkIcon.find(_bookmarkLink.FavoriteLink)).toHaveLength(1);
  expect(bookmarkIcon.find(_bookmarkLink.FavoriteLink).hasClass("bookmarked")).toBe(true);
  expect(bookmarkIcon.find(_bookmarkLink.Favorite)).toHaveLength(0);

  /* Les fenêtres liées au login/signin ne sont montées que sur demande. */
  expect(bookmarkIcon.find(_mySpaceModalSignIn["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalLogin["default"])).toHaveLength(0);
  expect(bookmarkIcon.find(_mySpaceModalForget["default"])).toHaveLength(0);
});