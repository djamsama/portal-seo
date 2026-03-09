"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _returnLink = require("../../../../../../components/returnLink/styles/returnLink");
var _context = require("../../../../../../context");
var _requestBackFaqLink = _interopRequireDefault(require("../../requestBackFaqLink"));
var _contact = _interopRequireDefault(require("../components/contact"));
var _contact2 = require("../components/contact/styles/contact");
var _index = _interopRequireDefault(require("../index"));
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var state = {
  Application: {
    extendedLanguage: false
  },
  RequestForm: {
    stepId: "ajax.request.prospect.contact",
    stepTitle: "VOIR LES COORDONNEES"
  }
};
var store = mockStore(state);

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
var contactContext = {
  config: {
    portal: portal
  },
  initData: {
    contact: {
      id: 4125817,
      type: "DEALER",
      companyName: "UNOPIÙ",
      companyWebSite: "https://www.unopiu.fr/storelocator",
      address: "France",
      contactId: "DEALER-4125817",
      companyLogoUrl: "https://img.archiexpo.fr/images_ae/logo-p/L58370.gif"
    }
  }
};
var mainContactContext = {
  config: {
    portal: portal
  },
  initData: {
    contact: {
      id: 4125817,
      type: "DEALER",
      companyName: "UNOPIÙ",
      companyWebSite: "https://www.unopiu.fr/storelocator",
      address: "France",
      contactId: "DEALER-4125817",
      companyLogoUrl: "https://img.archiexpo.fr/images_ae/logo-p/L58370.gif"
    },
    mainContact: {
      id: 58370,
      type: "MAIN_CONTACT",
      companyName: "VE",
      companyWebSite: "https://www.test-ve.fr",
      address: "Marseille\r\n\r\n286, Avenue du Millet, Z.I. Les Paluds, Aubagne - Cedex\r\n\r\nFR, 13782",
      contactId: "MAIN_CONTACT-58370",
      email: "test@virtualexpo.fr",
      phoneNumber: "0102030405"
    },
    requestCompany: {
      imageUrl: ""
    }
  }
};

/* On vérifie la construction de la confirmation  */
test("test RequestContactDetailConfirmation", function () {
  var requestContactDetailConfirmation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: contactContext
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));

  /* Le Composant est composé d'un styled component 'Contact'. */
  expect(requestContactDetailConfirmation.find(_contact["default"])).toHaveLength(1);
  expect(requestContactDetailConfirmation.find(_contact2.ContactTitle).exists());
  expect(requestContactDetailConfirmation.find(_requestBackFaqLink["default"]).exists()).toBeTruthy();
  var returnLink = requestContactDetailConfirmation.find(_returnLink.StyledLink);
  returnLink.simulate("click");
  expect(returnLink.exists()).toBeTruthy();
  requestContactDetailConfirmation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: mainContactContext
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));

  /* Le Composant est composé d'un styled component 'Contact'. */
  expect(requestContactDetailConfirmation.find(_contact["default"])).toHaveLength(2);
  expect(requestContactDetailConfirmation.find(_contact2.ContactTitle).exists()).toBeTruthy();
});