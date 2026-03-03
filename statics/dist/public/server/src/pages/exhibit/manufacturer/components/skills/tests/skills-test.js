"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../initiateState");
var _skills = require("../styles/skills");
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
test("test skills structure", function () {
  var skillsElement = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
  var skills = skillsElement.find(_index["default"]);

  /* Le Composant est constitué d'un titre, de 6 blocs avec chacun un titre et un paragraphe. */
  expect(skills).toHaveLength(1);

  /* Verification du titre. */
  expect(skills.find(_skills.Title).text()).toBe("fo_fa_block_why_title_label");

  /* Verification des 6 blocs. */
  for (var i = 0; i < 6; i += 1) {
    var skillCard = skills.find(_skills.SkillCard).at(i);
    /* Titre */
    expect(skillCard.find("h3").first().text()).toBe("fo_fa_block_why_tiling".concat(i + 1, "_title_label"));
    /* Paragraphe */

    expect(skillCard.find("p").first().text()).toBe("fo_fa_block_why_tiling".concat(i + 1, "_text_label"));
  }
});