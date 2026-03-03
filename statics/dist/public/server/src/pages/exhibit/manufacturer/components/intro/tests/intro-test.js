"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../initiateState");
var _intro = require("../styles/intro");
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
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: {}
};

/* On vérifie la structure du composant. */
test("test introduction structure", function () {
  var introElement = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
  var intro = introElement.find(_index["default"]);

  /* Le Composant est constitué d'un titre, d'un sous titre. */
  expect(intro).toHaveLength(1);

  /* Verification des libellés. */
  expect(intro.find(_intro.Title).text()).toBe("fo_fa_block_intro_title_labelfo_fa_block_intro_subtitle_label");
  expect(intro.find(_intro.SubTitle).text()).toBe("fo_fa_block_intro_subtitle_label");
});