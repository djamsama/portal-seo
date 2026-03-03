"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _testUtils = require("react-dom/test-utils");
var _modal = _interopRequireDefault(require("../../../../../../../../../components/modal"));
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable no-undef */

var mockQuotation = require("../../../../../../../../../../tools/utils-test/assets/rfq/mockQuotation.json");
require("../../../../../../../../../../tools/utils-test/mockIntersectionObserver.js");
var win = document.defaultView;
global.HTMLElement = win.HTMLElement;
test("modalDeclineQuotation", function () {
  var modalDeclineQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true
  }));
  (0, _testUtils.act)(function () {
    expect(modalDeclineQuotation.find(_modal["default"]).exists()).toEqual(true);
    expect(modalDeclineQuotation.find("form").exists()).toEqual(true);
  });
});
test("modalDeclineQuotation cancel click", function () {
  var spyClose = sinon.spy();
  var modalDeclineQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    handleOpenClose: spyClose
  }));
  (0, _testUtils.act)(function () {
    modalDeclineQuotation.find("button").simulate("click");
    expect(spyClose.calledOnce).toBe(true);
  });
});
test("modalDeclineQuotation submit without rejection reason click", function () {
  var spyRefuse = sinon.spy();
  var modalDeclineQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    quotation: mockQuotation,
    open: true,
    handleRefuse: spyRefuse
  }));
  (0, _testUtils.act)(function () {
    modalDeclineQuotation.find("textarea").first();
    expect(modalDeclineQuotation.find(_semanticUiReact.TextArea).exists()).toEqual(true);
    modalDeclineQuotation.find("form").simulate("submit");
    expect(spyRefuse.calledOnce).toBe(false);
  });
});
test("modalDeclineQuotation submit wit rejection reason click", function () {
  var spyRefuse = sinon.spy();
  var modalDeclineQuotation = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    quotation: mockQuotation,
    open: true,
    handleRefuse: spyRefuse
  }));
  (0, _testUtils.act)(function () {
    modalDeclineQuotation.find("textarea").first();
    expect(modalDeclineQuotation.find(_semanticUiReact.TextArea).exists()).toEqual(true);
    modalDeclineQuotation.find(_semanticUiReact.TextArea).simulate("change", {
      target: {
        value: "My new value"
      }
    });
    modalDeclineQuotation.find("form").simulate("submit");
  });
});