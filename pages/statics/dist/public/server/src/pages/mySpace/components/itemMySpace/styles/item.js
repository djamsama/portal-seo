"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperItem = exports.WrapperImage = exports.ItemType = exports.ItemTitle = exports.Image = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _constants = require("../../../../../commons/constants");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var WrapperItem = exports.WrapperItem = _styledComponents["default"].div.withConfig({
  componentId: "sc-1slk8xu-0"
})(["padding:0 0 15px 0;display:flex;flex-direction:column;"]);

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme
var WrapperImage = exports.WrapperImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-1slk8xu-1"
})([".badge{position:absolute;right:-10px;top:-10px;width:22px;height:22px;border-radius:10px;background-color:", ";color:#fff;&:after{font:normal normal normal 14px/1 FontAwesome;font-size:1.2em;text-rendering:auto;-webkit-font-smoothing:antialiased;content:\"\f0db\";position:absolute;top:0.3em;right:0.3em;}", ";}width:100%;line-height:0;text-align:center;vertical-align:middle;background:url(", "/common/myspace/stripes-bkg.gif);font-weight:400;margin:0 0 10px;cursor:pointer;position:relative;"], function (props) {
  return props.theme.mainLight;
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n    "]))), function (props) {
  return props.theme.pathImg;
});
var Image = exports.Image = _styledComponents["default"].img.withConfig({
  componentId: "sc-1slk8xu-2"
})(["max-height:210px;max-width:210px;object-fit:scale-down;width:100%;", ";", ";", ";"], media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    max-height: calc(33vw - 50px);\n    max-width: calc(33vw - 50px);\n  "]))), media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    max-height: calc(50vw - 50px);\n    max-width: calc(50vw - 50px);\n  "]))), media.screenXxsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    max-height: calc(100vw - 50px);\n    max-width: calc(100vw - 50px);\n  "]))));
var ItemType = exports.ItemType = _styledComponents["default"].p.withConfig({
  componentId: "sc-1slk8xu-3"
})(["text-align:center;text-transform:capitalize;span:after{content:\" / \";}span:last-child:after{content:\"\";}"]);
var ItemTitle = exports.ItemTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1slk8xu-4"
})(["display:block;text-overflow:ellipsis;white-space:normal;overflow:hidden;min-height:30px;text-align:center;text-transform:uppercase;a{font:11px \"Century Gothic\",Verdana,sans-serif;color:#555;cursor:pointer;vertical-align:baseline;text-decoration:none;}p{margin:0;}.model{color:#999;margin:0 5px 0 5px;}"]);