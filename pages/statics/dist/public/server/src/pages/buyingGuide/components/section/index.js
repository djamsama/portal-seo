"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _buyingGuide = require("../../styles/buyingGuide");
var iconById = {
  "selection-criteria": "clipboard-list",
  "tech-families": "flask-conical",
  "procurement-advice": "lightbulb",
  "innovations-trends": "rocket"
};
var Section = function Section(_ref) {
  var id = _ref.id,
    title = _ref.title,
    subtitle = _ref.subtitle,
    variant = _ref.variant,
    children = _ref.children;
  var iconName = iconById[id];
  return /*#__PURE__*/_react["default"].createElement(_buyingGuide.SectionWrapper, {
    id: id,
    "data-variant": variant || "default"
  }, /*#__PURE__*/_react["default"].createElement(_buyingGuide.SectionHeader, {
    "data-variant": variant || "default"
  }, iconName && /*#__PURE__*/_react["default"].createElement(_buyingGuide.SectionIcon, {
    "data-variant": variant || "default",
    iconName: iconName
  }), /*#__PURE__*/_react["default"].createElement(_buyingGuide.SectionTitle, null, title), subtitle && /*#__PURE__*/_react["default"].createElement(_buyingGuide.SectionSubtitle, null, subtitle)), /*#__PURE__*/_react["default"].createElement(_buyingGuide.SectionContent, {
    "data-variant": variant || "default"
  }, children));
};
Section.defaultProps = {
  subtitle: undefined,
  variant: "default"
};
var _default = exports["default"] = Section;