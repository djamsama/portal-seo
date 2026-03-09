"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("./responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var mediaMinWidth = _responsive["default"].mediaMinWidth();

/**
 * Si props.widthCustom est un nombre 'width' sera de (props.widthCustom/0.12) %
 * Si width est un object on peut definir des valeurs pour
 * xs : pour des ecrans de type phone
 * sm : pour des ecrans de type tablette
 * md : pour des ecrans moyens
 * lg : pour des grands ecrans
 *
 */

//@component
var Column = exports.Column = _styledComponents["default"].div.withConfig({
  componentId: "sc-ztyvp1-0"
})(["float:left;padding-left:25px;padding-right:25px;box-sizing:border-box;", " ", " ", " ", " ", ""], function (props // toutes les ecrans
) {
  return "number" === typeof props.widthCustom ? " width: ".concat(props.widthCustom / 0.12, "%;") : "width: 100%;";
}, function (props // grands ecrans
) {
  return "number" !== typeof props.widthCustom && props.widthCustom.lg ? mediaMinWidth.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: ", "%;\n    "])), props.widthCustom.lg / 0.12) : "";
}, function (props // moyens ecrans
) {
  return "number" !== typeof props.widthCustom && props.widthCustom.md ? media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: ", "%;\n      "])), props.widthCustom.md / 0.12) : "";
}, function (props //  petits ecrans type tablette
) {
  return "number" !== typeof props.widthCustom && props.widthCustom.sm ? media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        width: ", "%;"])), props.widthCustom.sm / 0.12) : "";
}, function (props //  petits ecrans type phone
) {
  return "number" !== typeof props.widthCustom && props.widthCustom.xs ? media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n        width: ", "%;"])), props.widthCustom.xs / 0.12) : "";
});