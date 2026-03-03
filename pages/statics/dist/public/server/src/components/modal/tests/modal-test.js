"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _index = _interopRequireDefault(require("../index"));
test("test modal", function () {
  var closeModal = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: false
  }));
  expect(closeModal.find(_semanticUiReact.Modal)).toHaveLength(0);
  var openModal = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true
  }));
  expect(openModal.find(_semanticUiReact.Modal)).toHaveLength(1);
});