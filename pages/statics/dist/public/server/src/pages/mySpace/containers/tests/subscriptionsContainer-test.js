"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reactRedux = require("react-redux");
var _reduxThunk = require("redux-thunk");
var _context = require("../../../../context");
var _subscriptionContainer = _interopRequireDefault(require("../subscriptionContainer"));
var _newslettersContainer = _interopRequireDefault(require("../newslettersContainer"));
var _myspaceTile = _interopRequireDefault(require("../../pages/mySpaceSubscription/components/subscriptionTiles/components/myspaceTile"));
var _initiateState = require("../../../../initiateState");
var _subscriptionActions = require("../../actions/subscriptionActions");
/* eslint-disable func-names */

// eslint-disable-next-line max-len

// eslint-disable-next-line global-require
jest.mock("react-flickity-component", function () {
  return (
    // Mock the Flickity component
    {
      __esModule: true,
      "default": jest.fn(function (_ref) {
        var children = _ref.children;
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-testid": "flickity-mock"
        }, children);
      })
    }
  );
});
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
var middlewares = [_reduxThunk.thunk];
var mockStore = (0, _reduxMockStore["default"])(middlewares);
var item = {
  imageUrl: "http://img.archiexpo.fr/images_ae/universe/subscription-form/1.jpg",
  linkUrl: "http://www.archiexpo.fr/newsletter/last-newsletter-1.html",
  name: "test"
};
var newslettersSubscription = require("../../../../../tools/utils-test/assets/myspace/subscriptions.json");
var applicationSubscription = require("../../../../../tools/utils-test/assets/myspace/applicationSubscription.json");
var context = {
  initData: {
    newslettersSubscription: newslettersSubscription
  },
  config: {
    portal: {
      subDomain: "WORLD_WIDE_WEB",
      site: "AE",
      language: "FR",
      baseUrl: "archiexpo.fr",
      siteLabel: "archiexpo",
      tld: "fr",
      locale: "fr",
      domain: "archiexpo.fr"
    }
  }
};
/* eslint-disable no-undef, no-unused-vars, no-console  */

var mockService = new MockAdapter(axios);
mockService.onAny("/ajax/myspace/secure/subscription").reply(200, {
  responseStatus: 200,
  content: null,
  errors: [],
  functionalErrors: []
});
mockService.onAny("/ajax/myspace/secure/newsletters/subscriptions").reply(200, {
  responseStatus: 200,
  content: null,
  errors: [],
  functionalErrors: []
});
var store = mockStore(_initiateState.InitiateState);
test("subscriptionContainer", function () {
  var subscriptionContainer = shallow(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_subscriptionContainer["default"], {
    item: item
  })));
  expect(subscriptionContainer.length).toEqual(1);
  store.dispatch((0, _subscriptionActions.subscribe)({}, "NEWSLETTER", true, 10, false)).then(function () {
    console.log("subscriptionContainer test ok");
  })["catch"](function (error) {
    fail("subscriptionContainer test Ko ".concat(error));
  });
});
test("subscriptionAllContainer", function () {
  var subscriptionsContainer = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_newslettersContainer["default"], {
    subscriptions: applicationSubscription
  }))));
  expect(subscriptionsContainer.length).toEqual(1);
  expect(subscriptionsContainer.find(_myspaceTile["default"]).exists()).toEqual(true);
  store.dispatch((0, _subscriptionActions.subscriptionsAll)({}, "NEWSLETTER", true, false, false)).then(function () {
    console.log("subscriptionAllContainer test ok");
  })["catch"](function (error) {
    fail("subscriptionAllContainer test Ko ".concat(error));
  });
});