"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _reduxForm = require("redux-form");
var _index = _interopRequireDefault(require("../index"));
var _context = require("../../../../../../../context");
/* eslint-disable no-undef, no-unused-vars */
var businessCompanyTypes = [{
  id: 17,
  labelKey: "fo_statCo_businessCompanyType_architectureFirm",
  displayable: true,
  order: 1
}, {
  id: 19,
  labelKey: "fo_statCo_businessCompanyType_townPlanningFirm",
  displayable: true,
  order: 2
}];
var initData = {
  visitorAccount: {
    businessCompanyTypes: businessCompanyTypes
  }
};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var InitiateState = function InitiateState() {
  var response = {
    Application: {},
    Account: {
      elements: []
    }
  };
  return response;
};
var store = mockStore(InitiateState);
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
test("mySpaceAccount ", function () {
  var context = {
    config: {
      portal: portal
    },
    initData: {
      footerLinksCGU: "footerLinksCGU",
      footerLinksPrivacy: "footerLinksPrivacy"
    }
  };
  var VisitorAccountFormContainer = (0, _reduxForm.reduxForm)({
    form: "VisitorAccountForm" // a unique identifier for this form
  })(_index["default"]);
  var mySpaceAccount = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(VisitorAccountFormContainer, {
    initData: initData,
    intl: testIntl,
    portal: portal,
    load: function load() {}
  }))));
  expect(mySpaceAccount.find({
    name: "visitorType"
  }).exists()).toEqual(true);
});