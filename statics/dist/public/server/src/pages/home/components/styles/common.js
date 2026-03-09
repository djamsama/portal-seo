"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperProjectText = exports.WrapperProjectLink = exports.WrapperDivTile = exports.WrapperDivImage = exports.WrapperCompanyImage = exports.TileDivImage = exports.ShortName = exports.ProductImage = exports.NewFlagWrapper = exports.NewFlag = exports.LinkDivTile = exports.LinkCompanyImage = exports.FloatRightCompanyImage = exports.CompanyImage = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../components/styles/link"));
var _row = _interopRequireDefault(require("../../../../components/styles/row"));
var _responsive = require("../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
/**
 * Fichier de style communs aux composants "Tile" de la homepage
 */
var WrapperDivTile = exports.WrapperDivTile = _styledComponents["default"].div.withConfig({
  componentId: "sc-1r0jtnl-0"
})(["display:block;"]);
var WrapperDivImage = exports.WrapperDivImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-1r0jtnl-1"
})(["position:relative;overflow:hidden;display:block;height:calc(16.66vw - 60.85px);max-height:100%;", ";", ";", ";", ";"], _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(25vw - 63.1px);\n    "]))), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(35vw - 66.25px);\n    "]))), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(50vw - 72.25px);\n    "]))), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      height: auto;\n    "]))));
var LinkDivTile = exports.LinkDivTile = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1r0jtnl-2"
})(["text-decoration:none;cursor:pointer;height:55px;display:block;color:#555659;:hover{color:#555659;}"]);
var LinkCompanyImage = exports.LinkCompanyImage = (0, _styledComponents["default"])(LinkDivTile).withConfig({
  componentId: "sc-1r0jtnl-3"
})([""]);
var ShortName = exports.ShortName = _styledComponents["default"].span.withConfig({
  componentId: "sc-1r0jtnl-4"
})(["display:-webkit-box;line-height:15px;max-height:45px;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;text-align:left;"]);
var CompanyImage = exports.CompanyImage = _styledComponents["default"].img.withConfig({
  componentId: "sc-1r0jtnl-5"
})(["margin-left:auto;margin-right:auto;max-height:100%;"]);
var FloatRightCompanyImage = exports.FloatRightCompanyImage = (0, _styledComponents["default"])(CompanyImage).withConfig({
  componentId: "sc-1r0jtnl-6"
})(["float:right;max-width:100%;"]);
var ProductImage = exports.ProductImage = _styledComponents["default"].img.withConfig({
  componentId: "sc-1r0jtnl-7"
})(["position:absolute;top:-250px;bottom:-250px;left:-250px;right:-250px;margin:auto;max-width:500%;max-height:500%;width:auto;height:100%;"]);
var TileDivImage = exports.TileDivImage = _styledComponents["default"].img.withConfig({
  componentId: "sc-1r0jtnl-8"
})(["max-width:100%;"]);
var WrapperProjectText = exports.WrapperProjectText = (0, _styledComponents["default"])(_row["default"]).withConfig({
  componentId: "sc-1r0jtnl-9"
})(["margin-left:0;margin-right:0;padding:10px;font-size:0.91em;line-height:1.25em;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var WrapperProjectLink = exports.WrapperProjectLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-1r0jtnl-10"
})(["width:calc(100% / 3 * 2);float:left;"]);
var WrapperCompanyImage = exports.WrapperCompanyImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-1r0jtnl-11"
})(["display:block;width:calc(100% / 3);float:left;"]);
var NewFlagWrapper = exports.NewFlagWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1r0jtnl-12"
})(["position:absolute;top:5px;left:-5px;"]);

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme
var NewFlag = exports.NewFlag = _styledComponents["default"].div.withConfig({
  componentId: "sc-1r0jtnl-13"
})(["background-position:-71px 0;width:77px;height:28px;margin-bottom:2px;background-repeat:no-repeat;background-image:url(", "/common/pictos/tag-new-eco-green.svg);"], function (props) {
  return props.theme.pathImg;
});