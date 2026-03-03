"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxForm = require("redux-form");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _testUtils = require("react-dom/test-utils");
var _context = require("../../../../../context");
var _ = _interopRequireDefault(require(".."));
test("ModalToModifyRefusedQuote", function () {
  var context = {
    initData: {
      toModifyRefusedReasons: {
        TO_MODIFY: ["PRICE", "DETAIL", "SPECIFICATION", "CONDITION", "OTHER"],
        REFUSED: ["BUY", "DEPRECATED", "OTHER"]
      }
    }
  };
  var ModalToModifyRefusedQuoteContainer = (0, _reduxForm.reduxForm)({
    form: "ModalToModifyRefusedQuote"
  })(_["default"]);
  var wrapper = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: (0, _reduxMockStore["default"])()()
  }, /*#__PURE__*/_react["default"].createElement(ModalToModifyRefusedQuoteContainer, {
    open: true
  }))));
  (0, _testUtils.act)(function () {
    var popin = wrapper.find("Popin").props();
    expect(popin.open).toStrictEqual(true);
    var inputs = wrapper.find("CardField").last().find("input").map(function (i) {
      return i.props();
    });
    expect(inputs).toHaveLength(2);
    expect(inputs[0].value).toStrictEqual("TO_MODIFY");
    expect(inputs[1].value).toStrictEqual("REFUSED");
  });
});