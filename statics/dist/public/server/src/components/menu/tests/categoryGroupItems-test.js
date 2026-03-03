"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _CategoryGroupItems = _interopRequireDefault(require("../CategoryGroupItems"));
var _link = require("../../link");
var _accordion = require("../../animation/accordion");
var _initiateState = require("../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
test("CategoryGroupItems empty", function () {
  var categoryGroupItems = mount(/*#__PURE__*/_react["default"].createElement(_CategoryGroupItems["default"], null));
  expect(categoryGroupItems.find(_link.VeLink).exists()).toEqual(false);
});
var mockItems = [{
  id: "OO",
  label: "Textiles",
  linkUrl: "http://www.archiexpo.fr/cat/textiles-OO.html",
  subMenuItems: []
}, {
  id: "BD",
  label: "Accessoires d'intérieur",
  linkUrl: "http://www.archiexpo.fr/cat/accessoires-interieur-BD.html",
  subMenuItems: []
}, {
  id: "BS",
  label: "Arts de la table",
  linkUrl: "http://www.archiexpo.fr/cat/arts-table-BS.html",
  subMenuItems: []
}];
test("CategoryGroupItems populated", function () {
  var categoryGroupItems = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_CategoryGroupItems["default"], {
    isHome: true,
    items: mockItems
  })));
  expect(categoryGroupItems.find(_link.VeLink).exists()).toEqual(true);
  expect(categoryGroupItems.find(_accordion.Accordion).exists()).toEqual(true);
  categoryGroupItems.find(_accordion.Accordion).first().simulate("click");
});
test("CategoryGroupItems not Home populated", function () {
  var categoryGroupItems = mount(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_CategoryGroupItems["default"], {
    items: mockItems
  })));
  expect(categoryGroupItems.find(_link.VeLink).exists()).toEqual(true);
  expect(categoryGroupItems.find(_accordion.Accordion).exists()).toEqual(false);
});