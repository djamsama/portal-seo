"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _buyingGuide = require("../../styles/buyingGuide");
var InfoCard = function InfoCard(_ref) {
  var title = _ref.title,
    text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement(_buyingGuide.Card, null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.CardTitle, null, title), /*#__PURE__*/_react["default"].createElement(_buyingGuide.CardText, null, text));
};
var _default = exports["default"] = InfoCard;