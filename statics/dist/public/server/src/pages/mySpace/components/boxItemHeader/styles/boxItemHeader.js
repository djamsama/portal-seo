"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PuceIconStart = exports.PuceIconList = exports.PuceIconFolder = exports.PuceIconAdminBig = exports.PuceIcon = exports.NoPuceIcon = exports.ItemNumber = exports.InputEdit = exports.BoxHeader = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var BoxHeader = exports.BoxHeader = _styledComponents["default"].div.withConfig({
  componentId: "sc-g8n1bw-0"
})(["background-color:#dadbdf;overflow:hidden;margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline;display:flex;justify-content:space-between;color:#555;h2{line-height:38px;color:#555;font-size:18px;margin:0 auto 0 0;padding:0;font-family:\"Century Gothic\",Verdana,sans-serif;font-weight:400;}", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    h2 {\n      overflow: hidden;\n      font-size: 1.125em;\n      line-height: 20px;\n      max-width: 75%;\n      line-height: normal;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n    }\n    span {\n      width:100%;\n      font-size: 13px;\n    }\n  "]))));

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme
var PuceIcon = exports.PuceIcon = _styledComponents["default"].div.withConfig({
  componentId: "sc-g8n1bw-1"
})(["width:40px;height:40px;float:left;margin:0 10px;background-image:url(", "/common/myspace/myspace-sprite.png);display:inline-block;background-repeat:no-repeat;"], function (props) {
  return props.theme.pathImg;
});
var PuceIconAdminBig = exports.PuceIconAdminBig = (0, _styledComponents["default"])(PuceIcon).withConfig({
  componentId: "sc-g8n1bw-2"
})(["background-position:-301px -35px;"]);
var PuceIconList = exports.PuceIconList = (0, _styledComponents["default"])(PuceIcon).withConfig({
  componentId: "sc-g8n1bw-3"
})(["background-position:-99px -36px;"]);
var PuceIconStart = exports.PuceIconStart = (0, _styledComponents["default"])(PuceIcon).withConfig({
  componentId: "sc-g8n1bw-4"
})(["background-position:0 -37px;"]);
var PuceIconFolder = exports.PuceIconFolder = (0, _styledComponents["default"])(PuceIcon).withConfig({
  componentId: "sc-g8n1bw-5"
})(["background-position:-49px -37px;"]);
var NoPuceIcon = exports.NoPuceIcon = (0, _styledComponents["default"])(PuceIcon).withConfig({
  componentId: "sc-g8n1bw-6"
})(["background-position:-99px -150px;width:0;"]);
var ItemNumber = exports.ItemNumber = _styledComponents["default"].div.withConfig({
  componentId: "sc-g8n1bw-7"
})(["margin:0 10px 0 0;float:right;font:18px \"Century Gothic\",Verdana,sans-serif;line-height:38px;color:#b2b2b2;", ";"], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n  "]))));
var InputEdit = exports.InputEdit = _styledComponents["default"].input.withConfig({
  componentId: "sc-g8n1bw-8"
})(["color:#555659;margin:0 0 0 13px;padding:0 0 0 6px;width:270px;height:30px;float:left;line-height:21px;font-weight:bold;font-size:16px;margin-top:5px;font-family:\"Century Gothic\",Verdana,sans-serif;font-weight:normal;border:1px inset;"]);