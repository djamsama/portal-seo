"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterLinksSitesMapWrapper = exports.FooterLinksSitesMapLogo = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../styles/link"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var FooterLinksSitesMapWrapper = exports.FooterLinksSitesMapWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-chmwyp-0"
})(["box-sizing:content-box;padding:30px 0;text-align:center;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n  "]))));

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme
var FooterLinksSitesMapLogo = exports.FooterLinksSitesMapLogo = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-chmwyp-1"
})(["background-image:", ";display:inline-block;height:55px;margin:0 15px;background-repeat:no-repeat;opacity:1;-webkit-transition:opacity ease-in-out 0.2s;transition:opacity ease-in-out 0.2s;&.ve{width:115px;padding:0 40px 0 0;background-position:0 0;border-right:rgba(255,255,255,0.25) solid 1px;}&.di{width:64px;background-position:0 -108px;}&.ne{width:66px;background-position:0 -215px;}&.ae{width:57px;background-position:0 -59px;}&.me{width:76px;background-position:0 -165px;}&.ag{width:49px;background-position:0 -264px;}&.ar{width:59px;background-position:0 -315px;}&:hover{opacity:0.5;}"], function (props) {
  return "url(".concat(props.theme.pathImg, "/common/logos/footer-logos.png)");
});