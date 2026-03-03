"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperProductText = exports.WrapperEmagText = exports.WrapperDivImageEmag = exports.ShortName = exports.LinkProductTile = exports.LinkCompanyImage = exports.EmagWrapperTile = exports.Brand = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../../../components/styles/link"));
var _row = _interopRequireDefault(require("../../../../../../components/styles/row"));
var _tile = _interopRequireDefault(require("../../../../../../components/tile/tile"));
var _responsive = require("../../../../../../components/styles/responsive");
var _templateObject;
var EmagWrapperTile = exports.EmagWrapperTile = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-8z7q7l-0"
})(["", ";"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n       margin-bottom: 30px;\n       width: 100%;\n  "]))));
var LinkProductTile = exports.LinkProductTile = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-8z7q7l-1"
})(["text-decoration:none;cursor:pointer;display:block;color:#555659;:hover{color:#555659;}padding-left:25px;padding-right:25px;"]);
var LinkCompanyImage = exports.LinkCompanyImage = (0, _styledComponents["default"])(LinkProductTile).withConfig({
  componentId: "sc-8z7q7l-2"
})(["height:40px;margin-top:5px;"]);
var ShortName = exports.ShortName = _styledComponents["default"].span.withConfig({
  componentId: "sc-8z7q7l-3"
})(["overflow:hidden;text-overflow:ellipsis;display:block;"]);
var Brand = exports.Brand = _styledComponents["default"].span.withConfig({
  componentId: "sc-8z7q7l-4"
})(["overflow:hidden;text-overflow:ellipsis;display:block;color:#999999;"]);
var WrapperProductText = exports.WrapperProductText = _styledComponents["default"].div.withConfig({
  componentId: "sc-8z7q7l-5"
})(["height:auto;"]);
var WrapperEmagText = exports.WrapperEmagText = (0, _styledComponents["default"])(_row["default"]).withConfig({
  componentId: "sc-8z7q7l-6"
})(["padding:10px;font-size:0.91em;line-height:1.25em;text-align:left;text-transform:uppercase;"]);
var WrapperDivImageEmag = exports.WrapperDivImageEmag = _styledComponents["default"].div.withConfig({
  componentId: "sc-8z7q7l-7"
})(["position:relative;overflow:hidden;display:block;height:", ";"], function (props) {
  return props.height;
});