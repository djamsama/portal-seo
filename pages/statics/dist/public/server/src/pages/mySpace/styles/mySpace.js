"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallItalicSpan = exports.MySpaceWrapper = exports.MenuMyspace = exports.LogoMyspace = exports.HeaderMyspacePlaceHolder = exports.HeaderMyspace = exports.EventsDiv = exports.EmptyItem = exports.BoxItemRequest = exports.BoxItemContent = exports.BoxItem = exports.ActionUlMyspace = exports.ActionLiTrashMyspace = exports.ActionLiOpenMyspace = exports.ActionLiMyspace = exports.ActionLiEditMyspace = exports.ActionLiCloseMyspace = exports.ActionDivMyspace = exports.ActionDivIconWhite = exports.ActionDivIconTrashWhiteMarginRight = exports.ActionDivIconTrashWhite = exports.ActionDivIconFolderWhite = exports.ActionDivIcon = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../components/styles/responsive"));
var _button = _interopRequireDefault(require("../../../components/styles/button"));
var _styles = require("../../../components/loading/styles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0;
var media = _responsive["default"].media();
var MySpaceWrapper = exports.MySpaceWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-0"
})(["width:1110px;margin-left:auto;margin-right:auto;margin-top:20px;padding:0;min-height:300px;position:relative;", " ", ";"], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 970px;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n    z-index:2;\n  "]))));

// Place holder qui permet de conserver l'espace du menu
// d'eviter les bugs de "sautillements" en cas de scroll jusqu'en fin de page.
var HeaderMyspacePlaceHolder = exports.HeaderMyspacePlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-1"
})(["height:90px;"]);
var HeaderMyspace = exports.HeaderMyspace = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-2"
})(["top:", ";position:", ";width:100%;border-bottom:", ";z-index:", ";background-color:", ";left:", ";height:90px;", " ", " ", " ", ";"], function (props) {
  return props["float"] ? 0 : "auto";
}, function (props) {
  return props["float"] ? "fixed" : "relative";
}, function (props) {
  return props["float"] ? "1px solid #E2E3E7;" : "none";
}, function (props) {
  return props["float"] ? "10" : "auto";
}, function (props) {
  return props["float"] ? "#FFF" : "none";
}, function (props) {
  return props["float"] ? "0" : "auto";
}, media.screenLgMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: ", ";\n  "])), function (props) {
  return props["float"] ? "100%" : "970px";
}), media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    height: ", ";\n    width: ", ";\n  "])), function (props) {
  return props["float"] ? "auto" : "inherit";
}, function (props) {
  return props["float"] ? "100%" : "auto";
}), media.screenMdMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    height: auto;\n  "]))), media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n  "]))));
var LogoMyspace = exports.LogoMyspace = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-3"
})([""]);
var MenuMyspace = exports.MenuMyspace = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-4"
})([""]);
var BoxItemRequest = exports.BoxItemRequest = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-5"
})(["clear:both;color:#555;overflow:hidden;"]);
var BoxItem = exports.BoxItem = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-6"
})(["clear:both;color:#555;margin:0 0 30px;"]);
var BoxItemContent = exports.BoxItemContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-7"
})(["padding:20px 0 0;min-height:400px;display:flex;flex-wrap:wrap;margin-left:-25px;margin-right:-25px;padding-bottom:40px;", " ", ";", ";", "{margin-left:50%;left:auto;}"], media.screenLgMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  "]))), media.screenSmMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n  "]))), media.screenXsMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    justify-content: space-around;\n  "]))), _styles.SpinnerWrapper);
var ActionUlMyspace = exports.ActionUlMyspace = _styledComponents["default"].ul.withConfig({
  componentId: "sc-gg5ngb-8"
})(["list-style:none;padding:0;margin:0;"]);
var ActionLiMyspace = exports.ActionLiMyspace = _styledComponents["default"].li.withConfig({
  componentId: "sc-gg5ngb-9"
})(["width:40px;height:40px;float:left;margin:0 0 0 1px;display:block;background-color:#e1e2e6;cursor:pointer;background-image:url(", "/common/myspace/myspace-sprite.png);background-repeat:no-repeat;display:inline-block;"], function (props) {
  return props.theme.pathImg;
});
var ActionLiEditMyspace = exports.ActionLiEditMyspace = (0, _styledComponents["default"])(ActionLiMyspace).withConfig({
  componentId: "sc-gg5ngb-10"
})(["background-position:-99px -85px;"]);
var ActionLiTrashMyspace = exports.ActionLiTrashMyspace = (0, _styledComponents["default"])(ActionLiMyspace).withConfig({
  componentId: "sc-gg5ngb-11"
})(["background-position:-198px -85px;"]);
var ActionLiOpenMyspace = exports.ActionLiOpenMyspace = (0, _styledComponents["default"])(ActionLiMyspace).withConfig({
  componentId: "sc-gg5ngb-12"
})(["background-position:-1px -88px;"]);
var ActionLiCloseMyspace = exports.ActionLiCloseMyspace = (0, _styledComponents["default"])(ActionLiMyspace).withConfig({
  componentId: "sc-gg5ngb-13"
})(["background-position:-50px -86px;"]);
var ActionDivMyspace = exports.ActionDivMyspace = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-14"
})(["position:absolute;right:-2px;bottom:2px;"]);

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme
var ActionDivIcon = exports.ActionDivIcon = (0, _styledComponents["default"])(ActionDivMyspace).withConfig({
  componentId: "sc-gg5ngb-15"
})(["background-image:url(", "/common/myspace/myspace-sprite.png);background-repeat:no-repeat;display:inline-block;"], function (props) {
  return props.theme.pathImg;
});
var ActionDivIconWhite = exports.ActionDivIconWhite = (0, _styledComponents["default"])(ActionDivIcon).withConfig({
  componentId: "sc-gg5ngb-16"
})(["width:30px;height:30px;margin:0 0 0 1px;float:left;background-color:#555;"]);
var ActionDivIconTrashWhite = exports.ActionDivIconTrashWhite = (0, _styledComponents["default"])(ActionDivIconWhite).withConfig({
  componentId: "sc-gg5ngb-17"
})(["background-position:-255px -92px;"]);
var ActionDivIconTrashWhiteMarginRight = exports.ActionDivIconTrashWhiteMarginRight = (0, _styledComponents["default"])(ActionDivIconTrashWhite).withConfig({
  componentId: "sc-gg5ngb-18"
})(["margin-right:32px;"]);
var ActionDivIconFolderWhite = exports.ActionDivIconFolderWhite = (0, _styledComponents["default"])(ActionDivIconWhite).withConfig({
  componentId: "sc-gg5ngb-19"
})(["background-position:-310px -93px;margin-right:0px;"]);
var SmallItalicSpan = exports.SmallItalicSpan = _styledComponents["default"].span.withConfig({
  componentId: "sc-gg5ngb-20"
})(["font-style:italic;font-size:14px;"]);
var EmptyItem = exports.EmptyItem = _styledComponents["default"].p.withConfig({
  componentId: "sc-gg5ngb-21"
})(["width:970px;font-family:\"century gothic\";font-size:13px;color:black;"]);
var EventsDiv = exports.EventsDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-gg5ngb-22"
})(["display:flex;flex-direction:column;height:100%;.GrabberBtn{width:auto;height:25px;outline:none;padding:0 10px;margin:auto 5px;font-size:12px;&:after{font:normal normal normal 14px/1 FontAwesome;font-size:1.2em;text-rendering:auto;-webkit-font-smoothing:antialiased;padding-left:10px;}}& > button:first-of-type{margin-top:auto;", ";}"], media.screenXsMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n  "]))));