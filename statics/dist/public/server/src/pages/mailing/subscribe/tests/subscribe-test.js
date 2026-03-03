"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _veDesignSystem = require("ve-design-system");
var _context = require("../../../../context");
var _theme = require("../../../../components/theme");
var _mockContext = require("../../../../../tools/utils-test/mockContext");
var _mockMenu = require("../../../../../tools/utils-test/mockMenu");
var _clickableCard = _interopRequireDefault(require("../../../../components/clickableCard"));
var _index = _interopRequireDefault(require("../index"));
var _subscribe = require("../styles/subscribe");
var _form = require("../components/form/styles/form");
var _breadcrumbs = _interopRequireDefault(require("../../../../components/breadcrumbs"));
var _mockAdapter = require("../../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable no-undef */

(0, _mockAdapter.doSomeMock)();
var t = _theme.theme.ae;
/* Test de la page sans items Cards */
test("SubscribePageTestEmptyContext", function () {
  var state = {
    Menu: _mockMenu.menu,
    Application: {
      currentCurrency: "fr",
      localeProp: "fr"
    },
    subscribeReducer: {
      postReturnSuccess: null
    },
    form: {
      subscribeForm: null
    }
  };
  var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
  var store = mockStore(state);
  var subscribePage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(subscribePage.find(_subscribe.MainWrapper).exists()).toEqual(true);
  expect(subscribePage.find(_subscribe.TitleH2).exists()).toEqual(true);
  expect(subscribePage.find(_form.StyledForm).exists()).toEqual(true);
  expect(subscribePage.find(_form.Cards).exists()).toEqual(false);
});

/* Test de la page avec le bloque RFQ + vérification des éléments du form */
test("SubscribePageTest", function () {
  var state = {
    Menu: _mockMenu.menu,
    Application: {
      currentCurrency: "fr",
      localeProp: "fr"
    },
    subscribeReducer: {
      postReturnSuccess: false
    },
    form: {
      subscribeForm: {
        values: {
          dedicate: true,
          emag: true
        }
      }
    }
  };
  var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
  var store = mockStore(state);
  _mockContext.context.initData.confirmRfqLabel = true;
  _mockContext.context.initData.confirmedMessage = "Subscribe rfq Message <br /> Text.";
  _mockContext.context.initData.newslettersSubscription = [{
    imageUrl: "https://img.directindustry.com/images_di/universe/subscription-form/5.jpg",
    universe: {
      id: 1,
      label: "Robotics - Automation - Industrial IT"
    }
  }];
  var subscribePageNotEmpty = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(subscribePageNotEmpty.find(_breadcrumbs["default"]).exists()).toEqual(true);
  expect(subscribePageNotEmpty.find(_subscribe.MainWrapper).exists()).toEqual(true);
  expect(subscribePageNotEmpty.find(_subscribe.TitleH2).exists()).toEqual(true);
  expect(subscribePageNotEmpty.find("p").first().text()).toBe("Subscribe rfq Message  Text.");
  var form = subscribePageNotEmpty.find(_form.StyledForm);
  expect(form.find("input").first().prop("name")).toBe("email");
  expect(form.find("a").first().prop("id")).toBe("checkAll");
  var cardsTest = subscribePageNotEmpty.find(_form.Cards);
  expect(cardsTest.exists()).toEqual(true);
  expect(cardsTest).toHaveLength(1);
  expect(cardsTest.find(_clickableCard["default"]).first().find("picture").find("img").prop("data-src")).toBe("https://img.directindustry.com/images_di/universe/subscription-form/5.jpg");
  expect(cardsTest.find(_clickableCard["default"]).first().find("picture").find("img").prop("alt")).toBe("Robotics - Automation - Industrial IT");
  expect(cardsTest.find(_clickableCard["default"]).first().find("label").last().text()).toBe("Robotics - Automation - Industrial IT");
  expect(form.find("input").last().prop("name")).toBe("dedicate");
});

/* Test du message OK apres le submit du form */
test("SubscribePageTestPostSubscribe", function () {
  var state = {
    Menu: _mockMenu.menu,
    Application: {
      currentCurrency: "fr",
      localeProp: "fr"
    },
    subscribeReducer: {
      postReturnSuccess: true
    },
    form: {
      subscribeForm: {
        values: {
          dedicate: true,
          emag: true
        }
      }
    }
  };
  var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
  var store = mockStore(state);
  var subscribePage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(subscribePage.find(_subscribe.MainWrapper).exists()).toEqual(true);
  expect(subscribePage.find(_subscribe.TitleH2).exists()).toEqual(true);
  expect(subscribePage.find(_form.StyledForm).exists()).toEqual(false);
  expect(subscribePage.find(_form.Cards).exists()).toEqual(false);
  expect(subscribePage.find(_veDesignSystem.Button).first().prop("href")).toBe("https://www.archiexpo.fr");
});