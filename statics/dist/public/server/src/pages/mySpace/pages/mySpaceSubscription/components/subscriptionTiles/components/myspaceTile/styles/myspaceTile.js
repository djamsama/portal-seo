"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperTileText = exports.WrapperProjectText = exports.WrapperProjectLinkMyspace = exports.WrapperProjectLink = exports.WrapperProductText = exports.WrapperMarginBottom = exports.WrapperLink = exports.WrapperEmagText = exports.WrapperDivTile = exports.WrapperDivImage = exports.WrapperCheck = exports.TitleWrapper = exports.Title = exports.TileDivImage = exports.ShortNameEmag = exports.ShortName2 = exports.ShortName = exports.NewFlagWrapper = exports.NewFlag = exports.LinkProductTile = exports.LinkEmagTile = exports.LinkDivTile = exports.Brand = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../../../../../../components/styles/link"));
var _row = _interopRequireDefault(require("../../../../../../../../../components/styles/row"));
var LinkProductTile = exports.LinkProductTile = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-zt3hw2-0"
})(["text-decoration:none;cursor:pointer;display:block;color:#555659;:hover{color:#555659;}padding-left:25px;padding-right:25px;"]);
var ShortNameEmag = exports.ShortNameEmag = _styledComponents["default"].span.withConfig({
  componentId: "sc-zt3hw2-1"
})(["overflow:hidden;text-overflow:ellipsis;display:block;"]);
var Brand = exports.Brand = _styledComponents["default"].span.withConfig({
  componentId: "sc-zt3hw2-2"
})(["overflow:hidden;text-overflow:ellipsis;display:block;color:#999999;"]);
var WrapperProductText = exports.WrapperProductText = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-3"
})(["height:auto;"]);
var WrapperCheck = exports.WrapperCheck = _styledComponents["default"].span.withConfig({
  componentId: "sc-zt3hw2-4"
})(["padding:5px;background-color:rgba(255,255,255,0.75);border-radius:0 0 0 5px;position:absolute;top:0;right:0;cursor:pointer;"]);
var WrapperTileText = exports.WrapperTileText = (0, _styledComponents["default"])(_row["default"]).withConfig({
  componentId: "sc-zt3hw2-5"
})(["margin-left:0;margin-right:0;padding:10px;font-size:0.91em;line-height:1.25em;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var LinkDivTile = exports.LinkDivTile = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-zt3hw2-6"
})(["text-decoration:none;cursor:pointer;display:block;color:#555659;:hover{color:#555659;}"]);
var ShortName2 = exports.ShortName2 = _styledComponents["default"].span.withConfig({
  componentId: "sc-zt3hw2-7"
})(["display:-webkit-box;line-height:15px;max-height:45px;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;"]);
var TileDivImage = exports.TileDivImage = _styledComponents["default"].img.withConfig({
  componentId: "sc-zt3hw2-8"
})(["max-width:100%;cursor:pointer;width:100%;"]);
var WrapperProjectText = exports.WrapperProjectText = (0, _styledComponents["default"])(_row["default"]).withConfig({
  componentId: "sc-zt3hw2-9"
})(["min-height:30px;margin-left:0;margin-right:0;padding:10px;font-size:0.91em;line-height:1.25em;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var WrapperProjectLinkMyspace = exports.WrapperProjectLinkMyspace = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-10"
})(["text-align:center;"]);
var WrapperProjectLink = exports.WrapperProjectLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-11"
})(["width:calc(100% / 3 * 2);float:left;"]);
var NewFlagWrapper = exports.NewFlagWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-12"
})(["position:absolute;top:5px;left:-5px;"]);

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme
var NewFlag = exports.NewFlag = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-13"
})(["background-position:-55px 0;width:55px;height:22px;margin-bottom:2px;background-repeat:no-repeat;background-image:url(", "/common/pictos/tag-new-eco-green.svg);"], function (props) {
  return props.theme.pathImg;
});
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-14"
})(["margin:30px 0 40px;padding:0 20px;font-size:1.16em;border-bottom:1px solid #d3d3d3;color:#555659;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-zt3hw2-15"
})(["padding:0 20px;background-color:#f6f6f6;position:relative;bottom:-10px;"]);
var WrapperMarginBottom = exports.WrapperMarginBottom = _styledComponents["default"].span.withConfig({
  componentId: "sc-zt3hw2-16"
})(["display:block;margin-bottom:50px;transition:0.25s ease-in-out 0s;"]);
var WrapperDivTile = exports.WrapperDivTile = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-17"
})(["display:block;"]);
var WrapperDivImage = exports.WrapperDivImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-18"
})(["position:relative;overflow:hidden;display:block;height:", ";"], function (props) {
  return props.height;
});
var ShortName = exports.ShortName = _styledComponents["default"].span.withConfig({
  componentId: "sc-zt3hw2-19"
})(["display:-webkit-box;line-height:15px;max-height:45px;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;font-family:HurmeGeometricSans_SemiBold,sans-serif;max-width:200px;text-align:center;margin:auto;"]);
var WrapperEmagText = exports.WrapperEmagText = (0, _styledComponents["default"])(_row["default"]).withConfig({
  componentId: "sc-zt3hw2-20"
})(["padding:10px;font-size:0.91em;line-height:1.25em;text-align:left;text-transform:uppercase;"]);
var WrapperLink = exports.WrapperLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-21"
})(["text-align:center;width:calc(100% / 3 * 2);float:left;"]);
var LinkEmagTile = exports.LinkEmagTile = _styledComponents["default"].div.withConfig({
  componentId: "sc-zt3hw2-22"
})([""]);