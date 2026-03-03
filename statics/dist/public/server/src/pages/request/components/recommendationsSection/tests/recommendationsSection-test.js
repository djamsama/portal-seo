"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _veDesignSystem = require("ve-design-system");
var _initiateState = require("../../../../../initiateState");
var _index = _interopRequireDefault(require("../index"));
var _recommendationsForm = _interopRequireDefault(require("../components/recommendationsForm"));
var _context = require("../../../../../context");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var mockRequestForm = require("../../../../../../tools/utils-test/assets/request/requestForm.json");

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
var middlewares = [];
var mockStoreFunction = (0, _reduxMockStore["default"])(middlewares);
var stateRequestForm = mockRequestForm.ajaxRequestForm;
var state = _objectSpread({
  stateRequestForm: stateRequestForm
}, _initiateState.InitiateState);
state.RequestForm = mockRequestForm.ajaxRequestForm;
var store = mockStoreFunction(state);
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: store
};

/* On vérifie la structure d'une fiche produit. */
test("test reco structure", function () {
  var recoForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
  expect(recoForm.find(_recommendationsForm["default"])).toHaveLength(1);
  expect(recoForm.find(_veDesignSystem.Button)).toHaveLength(1);
});