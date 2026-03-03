"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../initiateState");
var _map = require("../styles/map");
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
    nbVisitorLetter: "A lot"
  },
  store: {}
};

/* On vérifie la structure du composant. */
test("test map structure", function () {
  var mapElement = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
  var map = mapElement.find(_index["default"]);

  /* Le Composant est constitué d'un titre, de labels. */
  expect(map).toHaveLength(1);

  /* Verification du titre. */
  expect(map.find(_map.Title).text()).toBe("fo_fa_block_map_title_label_A lot_archiexpo");

  /* Verification des libellés. */
  expect(map.find(_map.Africa).text()).toBe("fo_fa_block_map_africa_label");
  expect(map.find(_map.Asia).text()).toBe("fo_fa_block_map_asia_label");
  expect(map.find(_map.Europe).text()).toBe("fo_fa_block_map_europe_label");
  expect(map.find(_map.Oceania).text()).toBe("fo_fa_block_map_australia_label");
  expect(map.find(_map.NorthAmerica).text()).toBe("fo_fa_block_map_northAmerica_label");
  expect(map.find(_map.SouthAmerica).text()).toBe("fo_fa_block_map_latinAmerica_label");
});