"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _index2 = _interopRequireDefault(require("../components/itemRequest/index"));
var _context = require("../../../../../../../context");
/* eslint-disable no-undef */

var mockRequest = require("../../../../../../../../tools/utils-test/assets/myspace/request.json");
test("mySpaceRequest error", function () {
  var context = {
    initData: {
      request: null
    }
  };
  var testWithoutRequest = function testWithoutRequest() {
    mount(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      loadRequests: function loadRequests() {}
    })));
  };
  expect(testWithoutRequest).toThrow("L'objet requests n'est pas défini. Verifier le contrôleur java.");
});
var context = {
  initData: {
    requests: mockRequest
  }
};
test("mySpaceRequest", function () {
  var mySpaceRequest = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    loadRequests: function loadRequests() {}
  })));
  expect(mySpaceRequest.find(_index2["default"]).exists()).toEqual(true);
});