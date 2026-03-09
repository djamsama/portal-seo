"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _index = _interopRequireDefault(require("../index"));
var _context = require("../../../../../context");
var _index2 = _interopRequireDefault(require("../../../index"));
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
      visitorAccount: {
        email: "remy.candido@virtual-expo.com",
        firstName: "Remy",
        lastName: "Candido",
        latitude: 43.513006,
        longitude: null,
        phoneNumber: "+33 2 12 36 55 84"
      },
      currentRouteContext: {
        url: "currentRouteContexturl"
      },
      mySpaceNavigationLinks: {
        requestUrl: "http://www.archiexpo.fr/myspace/secure/request",
        bookmarkUrl: "http://www.archiexpo.fr/myspace/secure/bookmark",
        accountUrl: "http://www.archiexpo.fr/myspace/secure/account",
        subscriptionUrl: "http://www.archiexpo.fr/myspace/secure/subscription"
      }
    }
  };
  var location = {
    hash: "",
    pathname: "/myspace/secure/account",
    search: ""
  };

  // eslint-disable-next-line no-undef
  var mySpaceAccount = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    location: location
  }))));
  expect(mySpaceAccount.find(_index2["default"]).exists()).toEqual(true);
});