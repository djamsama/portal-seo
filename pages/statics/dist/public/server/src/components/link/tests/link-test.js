"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _context = require("../../../context");
var _index = require("../index");
var _encryptHelper = _interopRequireDefault(require("../../../helpers/encryptHelper"));
var _initiateState = require("../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
var StyledComp = _styledComponents["default"].div.withConfig({
  componentId: "sc-laql7u-0"
})([""]);
var context = {
  config: {
    portal: {
      language: "fr"
    }
  }
};
var url = "http://uneUrl";
describe(" Helmet", function () {
  it("link empty", function () {
    var link = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index.VeLink, null)));
    expect(link.find("span")).toHaveLength(1);
  });
  it("link ", function () {
    var link = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index.VeLink, {
      to: url
    })));
    expect(link.find("a[href=\"".concat(url, "\"]"))).toHaveLength(1);
  });
  it("encrypted link ", function () {
    var link = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index.VeLink, {
      to: url,
      encrypt: true
    }))));
    expect(link.find("a[to=\"".concat(url, "\"]")).exists()).toEqual(false);
    expect(link.find("a[to=\"".concat(_encryptHelper["default"].encrypt(url), "\"]")).exists()).toEqual(true);
  });
  it("external link ", function () {
    var link = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index.VeLink, {
      to: url,
      external: true
    }))));
    link.find("a[href=\"".concat(url, "\"]")).simulate("click");
    expect(link.find("a[href=\"".concat(url, "\"]"))).toHaveLength(1);
  });
  it("component link ", function () {
    var link = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index.VeLink, {
      to: url,
      component: StyledComp
    }))));
    expect(link.find("div[href=\"".concat(url, "\"]"))).toHaveLength(1);
    expect(link.find(StyledComp)).toHaveLength(1);
  });
});