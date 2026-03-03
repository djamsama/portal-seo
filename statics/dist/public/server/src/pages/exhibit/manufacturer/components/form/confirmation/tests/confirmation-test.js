"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../../initiateState");
var _confirmation = require("../styles/confirmation");
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
var middlewares = [_reduxThunk.thunk];
var mockStore = (0, _reduxMockStore["default"])(middlewares);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: portal
  },
  initData: {
    globalLinksHome: "url/home.com"
  },
  store: {}
};

/* On vérifie la structure du composant. */
test("test confirmation structure", function () {
  var confirmationElement = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true
  }))));
  var confirmation = confirmationElement.find(_index["default"]);

  /* Le Composant est constitué d'un titre, d'un label et d'un lien. */
  expect(confirmation).toHaveLength(1);

  /* Verification des liens. */
  expect(confirmation.find("a").first().prop("href")).toBe("url/home.com");

  /* Verification des libellés. */
  expect(confirmation.find(_confirmation.ModalTextContent).text()).toBe("fo_fa_popup_text_label");
  expect(confirmation.find("a").first().text()).toBe("fo_fa_popup_button_label");
});