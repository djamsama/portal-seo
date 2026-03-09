"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _buyingGuide = require("../../styles/buyingGuide");
var MiniGridBlock = function MiniGridBlock(_ref) {
  var items = _ref.items,
    variant = _ref.variant;
  return /*#__PURE__*/_react["default"].createElement(_buyingGuide.MiniGrid, {
    "data-variant": variant || "default"
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_buyingGuide.MiniGridItem, {
      key: item.title,
      "data-variant": variant || "default"
    }, /*#__PURE__*/_react["default"].createElement(_buyingGuide.MiniGridTitle, {
      "data-variant": variant || "default"
    }, item.title), /*#__PURE__*/_react["default"].createElement(_buyingGuide.MiniGridText, null, item.text));
  }));
};
MiniGridBlock.defaultProps = {
  variant: "default"
};
var _default = exports["default"] = MiniGridBlock;