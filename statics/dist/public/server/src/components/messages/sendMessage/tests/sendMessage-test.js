"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _testUtils = require("react-dom/test-utils");
var _index = _interopRequireDefault(require("../index"));
var _sendMessage = require("../styles/sendMessage");
var _context = require("../../../../context");
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore({
  message: {
    message: ""
  }
});
var context = {
  initData: {
    portalBean: {
      subDomain: "WORLD_WIDE_WEB",
      site: "AE",
      language: "FR",
      tld: "fr",
      baseUrl: "archiexpo.fr",
      siteLabel: "archiexpo",
      locale: "fr",
      domain: "archiexpo.fr"
    }
  }
};
test("test sendMessage", function () {
  var spySaveMessage = sinon.spy();
  var sendMessage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    saveMessage: spySaveMessage,
    message: {},
    scrollLastMessage: function scrollLastMessage() {}
  }))));
  expect(sendMessage.find(_sendMessage.TextMessageTexteArea).exists()).toEqual(true);
  expect(sendMessage.find({
    name: "sendMessageButton"
  }).exists()).toEqual(true);
  expect(sendMessage.find('button[name="sendMessageButton"]').exists()).toEqual(true);
  // Test envoi d'un massage avec un texte vide
  expect(spySaveMessage.calledOnce).toBe(false);

  // Test envoi d'un massage avec un texte non vide
  var event = {
    currentTarget: {
      dataset: {
        id: 0
      },
      value: "test"
    }
  };
  (0, _testUtils.act)(function () {
    sendMessage.find(_sendMessage.TextMessageTexteArea).first().prop("onChange")(event);
    sendMessage.update();
    sendMessage.first().find('button[name="sendMessageButton"]').simulate("click");
  });
});