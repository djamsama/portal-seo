"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _buyingGuide = require("../../styles/buyingGuide");
var IconListBlock = function IconListBlock(_ref) {
  var items = _ref.items,
    showNumbers = _ref.showNumbers;
  return /*#__PURE__*/_react["default"].createElement(_buyingGuide.IconList, null, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_buyingGuide.IconListItem, {
      key: item.title
    }, /*#__PURE__*/_react["default"].createElement(_buyingGuide.IconListBullet, {
      "data-number": showNumbers ? String(index + 1) : undefined
    }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.IconListTitle, null, item.title), /*#__PURE__*/_react["default"].createElement(_buyingGuide.IconListText, null, item.text)));
  }));
};
IconListBlock.defaultProps = {
  showNumbers: false
};
var _default = exports["default"] = IconListBlock;