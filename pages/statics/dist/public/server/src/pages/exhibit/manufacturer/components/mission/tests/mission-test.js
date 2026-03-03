"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../initiateState");
var _mission = require("../styles/mission");
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
  initData: {
    LinksHowToSource: "url/howToSource.com"
  },
  store: {}
};

/* On vérifie la structure du composant. */
test("test mission structure", function () {
  var missionElement = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
  var mission = missionElement.find(_index["default"]);

  /* Le Composant est constitué d'un titre, d'un sous titre, d'un paragraphe et d'un lien. */
  expect(mission).toHaveLength(1);

  /* Verification du titre. */
  expect(mission.find(_mission.Title).text()).toBe("fo_fa_block_ourMission_title_label");
  expect(mission.find(_mission.SubTitle).text()).toBe("fo_fa_block_ourMission_subtitle_label");

  /* Verification des liens. */
  expect(mission.find("a").first().prop("href")).toBe("url/howToSource.com");
  expect(mission.find("a").first().text()).toBe("fo_fa_block_ourMission_button_label_archiexpo");
});