"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _testUtils = require("react-dom/test-utils");
var _modal = _interopRequireDefault(require("../../../../../../../../../components/modal"));
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable no-undef */

require("../../../../../../../../../../tools/utils-test/mockIntersectionObserver.js");
var mockQuotation = require("../../../../../../../../../../tools/utils-test/assets/rfq/mockQuotation.json");
var win = document.defaultView;
global.HTMLElement = win.HTMLElement;
test("modalAcceptQuotation", function () {
  var modalAcceptQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    quotation: mockQuotation
  }));
  (0, _testUtils.act)(function () {
    expect(modalAcceptQuotation.find(_modal["default"]).exists()).toEqual(true);
    expect(modalAcceptQuotation.find("form").exists()).toEqual(true);
  });
});
test("modalAcceptQuotation", function () {
  var modalAcceptQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: false,
    quotation: mockQuotation
  }));
  (0, _testUtils.act)(function () {
    expect(modalAcceptQuotation.find(_modal["default"]).exists()).toEqual(true);
    expect(modalAcceptQuotation.find("form").exists()).toEqual(false);
  });
});
test("modalAcceptQuotation cancel click", function () {
  var spyClose = sinon.spy();
  var modalAcceptQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    handleOpenClose: spyClose,
    quotation: mockQuotation
  }));
  (0, _testUtils.act)(function () {
    modalAcceptQuotation.find("button").simulate("click");
    expect(spyClose.calledOnce).toBe(true);
  });
});
test("modalAcceptQuotation submit without accept conditions click", function () {
  var spyAccept = sinon.spy();
  var modalAcceptQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    handleAccept: spyAccept,
    quotation: mockQuotation
  }));
  (0, _testUtils.act)(function () {
    expect(modalAcceptQuotation.find({
      type: "checkbox"
    }).exists()).toEqual(true);
    modalAcceptQuotation.find("form").simulate("submit");
    expect(spyAccept.calledOnce).toBe(false);
  });
});
test("modalAcceptQuotation submit with accept conditions click", function () {
  var spyAccept = sinon.spy();
  var modalAcceptQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    handleAccept: spyAccept,
    quotation: mockQuotation
  }));
  (0, _testUtils.act)(function () {
    expect(modalAcceptQuotation.find({
      type: "checkbox"
    }).exists()).toEqual(true);
    modalAcceptQuotation.find({
      type: "checkbox"
    }).simulate("change", {
      target: {
        checked: true,
        type: "checkbox"
      }
    });
    modalAcceptQuotation.find("form").simulate("submit");
  });
});