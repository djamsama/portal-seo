"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDivTile = exports.WrapperDivImage = exports.WrapperDescription = exports.WrapperContent = exports.WrapperCaptionTitle = exports.WrapperCaption = exports.StyledGuideButton = exports.LinkCompanyImage = exports.LinkBuyingTileImage = exports.BuyingTileDivImage = exports.Button = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _common = require("../../../styles/common");
var _button = _interopRequireDefault(require("../../../../../../components/styles/button"));
var _link = _interopRequireDefault(require("../../../../../../components/styles/link"));
var _responsive = require("../../../../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11;
var LinkCompanyImage = exports.LinkCompanyImage = (0, _styledComponents["default"])(_common.LinkDivTile).withConfig({
  componentId: "sc-1jj9964-0"
})(["height:40px;margin-top:5px;"]);
var WrapperDivTile = exports.WrapperDivTile = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jj9964-1"
})(["", ";float:left;margin-left:0px;margin-right:0px;padding-left:2em;padding-right:1em;box-sizing:border-box;:hover{transform:scale(1.05);}", " "], function (props) {
  return props.mediaTemplates;
}, _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    :hover {\n      transform: none;\n    }\n  "]))));
var WrapperDivImage = exports.WrapperDivImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jj9964-2"
})(["width:60%;overflow:hidden;position:relative;text-align:center;", " ", " ", ""], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n     width: 100%;\n  "]))), _responsive.media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n     width: 100%;\n  "]))), _responsive.media.screenXxsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n     width: 100%;\n  "]))));
var WrapperCaption = exports.WrapperCaption = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jj9964-3"
})(["justify-content:space-between;display:flex;flex-direction:column;flex:1;color:#555659;padding:10px;font-family:\"HurmeGeometricSans_SemiBold\",sans-serif;font-size:0.91em;line-height:1.25em;text-transform:uppercase;width:40%;margin:auto;", " ", " ", ""], _responsive.media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n     width: 100%;\n  "]))), _responsive.media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n     width: 100%;\n  "]))), _responsive.media.screenXxsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n     width: 100%;\n  "]))));
var WrapperDescription = exports.WrapperDescription = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jj9964-4"
})(["text-transform:none;padding:20px 0px;margin:0 0 10px;line-height:1.5em;color:#555659;font-family:sans-serif;font-size:1.05em;min-height:125px;", " ", " ", ""], _responsive.media.screenMdMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    min-height: 200px;\n  "]))), _responsive.media.screenSmMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 160px;\n  "]))), _responsive.media.screenXsMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n    min-height: 100px;\n  "]))));
var Button = exports.Button = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jj9964-5"
})(["margin-bottom:10px;"]);
var WrapperContent = exports.WrapperContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jj9964-6"
})(["display:flex;justify-content:space-between;margin-left:0px;margin-right:0px;box-sizing:border-box;background-color:#fff;box-shadow:0 5px 5px rgba(0,0,0,0.1);position:relative;min-height:330px;", " ", " ", ""], _responsive.media.screenMdMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n    min-height: 380px;\n  "]))), _responsive.media.screenSmMin(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    min-height:510px;\n  "]))), _responsive.media.screenXsMin(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n    min-height:460px;\n  "]))));
var WrapperCaptionTitle = exports.WrapperCaptionTitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-1jj9964-7"
})(["font-weight:400;"]);
var StyledGuideButton = exports.StyledGuideButton = (0, _styledComponents["default"])(_button["default"]).withConfig({
  componentId: "sc-1jj9964-8"
})(["margin-bottom:10px;background-color:", ";border-radius:2px;text-transform:uppercase;width:100%;color:#fff;text-align:left;:focus{outline:none;}:hover{background-color:", ";color:#fff;}button,a{display:block;color:#fff;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLightHover;
});
var BuyingTileDivImage = exports.BuyingTileDivImage = (0, _styledComponents["default"])(_common.TileDivImage).withConfig({
  componentId: "sc-1jj9964-9"
})([""]);
var LinkBuyingTileImage = exports.LinkBuyingTileImage = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1jj9964-10"
})(["display:flex;"]);