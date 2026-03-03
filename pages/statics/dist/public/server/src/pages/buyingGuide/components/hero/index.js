"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _buyingGuide = require("../../styles/buyingGuide");
var GuideHero = function GuideHero(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    heroImage = _ref.heroImage;
  return /*#__PURE__*/_react["default"].createElement(_buyingGuide.Hero, null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.HeroBanner, null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.HeroBannerIcon, {
    name: "swatch-book"
  }), /*#__PURE__*/_react["default"].createElement(_buyingGuide.HeroBannerText, null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.HeroTitle, null, title), /*#__PURE__*/_react["default"].createElement(_buyingGuide.HeroSubtitle, null, subtitle))), /*#__PURE__*/_react["default"].createElement(_buyingGuide.HeroMedia, null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.HeroImage, {
    src: heroImage,
    alt: ""
  })));
};
var _default = exports["default"] = GuideHero;