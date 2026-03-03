"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _context = require("../../../../../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _requestSentConfirmationNotification = require("../styles/requestSentConfirmationNotification");
var _mySpaceModalSignIn = _interopRequireDefault(require("../../../../../../../../../../components/mySpaceLink/components/mySpaceModalSignIn"));
var _mySpaceModalLogin = _interopRequireDefault(require("../../../../../../../../../../components/mySpaceLink/components/mySpaceModalLogin"));
var _mySpaceModalForget = _interopRequireDefault(require("../../../../../../../../../../components/mySpaceLink/components/mySpaceModalForget"));
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

/* On vérifie la construction de la notification  */
test("test RequestSentConfirmationNotification", function () {
  var requestSentConfirmationNotification = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));

  /* Le Composant est composé d'un styled component 'Txt'. */
  expect(requestSentConfirmationNotification.find(_requestSentConfirmationNotification.Txt)).toHaveLength(1);

  /* Les fenêtres liées au login/signin ne sont montées que sur demande. */
  expect(requestSentConfirmationNotification.find(_mySpaceModalSignIn["default"])).toHaveLength(0);
  expect(requestSentConfirmationNotification.find(_mySpaceModalLogin["default"])).toHaveLength(0);
  expect(requestSentConfirmationNotification.find(_mySpaceModalForget["default"])).toHaveLength(0);
});