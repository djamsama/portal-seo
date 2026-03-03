"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _testUtils = require("react-dom/test-utils");
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _context = require("../../../../context");
var _modalToModifyRefusedQuoteContainer = _interopRequireDefault(require("../modalToModifyRefusedQuoteContainer"));
test("ModalToModifyRefusedQuoteContainer", function () {
  var context = {
    initData: {
      toModifyRefusedReasons: {
        TO_MODIFY: ["PRICE", "DETAIL", "SPECIFICATION", "CONDITION", "OTHER"],
        REFUSED: ["BUY", "DEPRECATED", "OTHER"]
      }
    }
  };
  var wrapper = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: (0, _reduxMockStore["default"])()()
  }, /*#__PURE__*/_react["default"].createElement(_modalToModifyRefusedQuoteContainer["default"], {
    open: true
  }))));
  (0, _testUtils.act)(function () {
    var component = wrapper.find("ModalToModifyRefusedQuote").props();
    expect(component.open).toStrictEqual(true);
  });
});