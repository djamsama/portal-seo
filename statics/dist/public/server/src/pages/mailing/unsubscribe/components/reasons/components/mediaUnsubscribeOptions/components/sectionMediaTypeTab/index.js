"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _sectionMediaTypeTab = require("./styles/sectionMediaTypeTab");
var SectionMediaTypeTab = function SectionMediaTypeTab(_ref) {
  var labelId = _ref.labelId,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab.Container, null, /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab.SectionMediaTypeTitle, null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-level-up",
    style: {
      transform: "rotate(90deg)"
    }
  }), /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab.UnsubscribeChoiceDetail, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: labelId
  }))), children);
};
var _default = exports["default"] = SectionMediaTypeTab;