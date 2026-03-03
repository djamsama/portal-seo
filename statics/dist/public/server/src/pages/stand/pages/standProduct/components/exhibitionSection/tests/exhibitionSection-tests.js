"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _exhibitionSection = require("../styles/exhibitionSection");
var _exhibitionBlock = _interopRequireDefault(require("../components/exhibitionBlock"));
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _context = require("../../../../../../../context");
var _initiateState = require("../../../../../../../initiateState");
var _reactRedux = require("react-redux");
var onlineExhibitionsMock = [{
  id: 8438,
  title: "NeoCon 2023",
  dateRange: "12-14 juin 2023",
  location: "Chicago (USA - Illinois)",
  stall: "",
  imgUrl: "https://img.archiexpo.fr/images_ae/salon/salon-g/W8438.gif",
  webLink: "https://neocon.com"
}, {
  id: 8443,
  title: "NeoCon 2023",
  dateRange: "13-17 oct. 2023",
  location: "Milano (Italie)",
  stall: "Hall Vide - Stand Vide",
  imgUrl: "https://img.archiexpo.fr/images_ae/salon/salon-g/W8443.gif",
  webLink: "https://host.fieramilano.it/en/"
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
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: {}
};
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
test("test ExhibitionSection structure", function () {
  var exhibitionSection = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onlineExhibitions: onlineExhibitionsMock
  }))));
  expect(exhibitionSection.find(_exhibitionBlock["default"])).toHaveLength(2);
  expect(exhibitionSection.find(_exhibitionSection.Divider)).toHaveLength(1);
});