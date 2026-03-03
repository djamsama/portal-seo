"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _index = _interopRequireDefault(require("../index"));
var _item = require("../styles/item");
var _bookmarkCommentContainer = _interopRequireDefault(require("../../../containers/bookmarkCommentContainer"));
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
var folders = require("../../../../../../tools/utils-test/assets/myspace/myspacefolders.json");

/* eslint-disable no-undef, no-unused-vars */
test("itemMySpace", function () {
  var itemMySpace = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], null));
  expect(itemMySpace.find("div").exists()).toEqual(true);
  expect(itemMySpace.find(_item.WrapperItem).exists()).toEqual(false);
  expect(itemMySpace.find(_bookmarkCommentContainer["default"]).exists()).toEqual(false);
});
test("itemMySpace without comment", function () {
  var itemMySpace = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: folders[0].bookmarks[0],
    folder: folders[0]
  })));
  expect(itemMySpace.find(_item.WrapperItem).exists()).toEqual(true);
  expect(itemMySpace.find(_bookmarkCommentContainer["default"]).exists()).toEqual(false);
});
test("itemMySpace with comment", function () {
  var itemMySpace = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: folders[0].bookmarks[0],
    folder: folders[0],
    showComments: true
  })));
  expect(itemMySpace.find(_item.WrapperItem).exists()).toEqual(true);
  expect(itemMySpace.find(_bookmarkCommentContainer["default"]).exists()).toEqual(true);
});