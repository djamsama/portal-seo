"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vseparator = exports.Separator = exports.SendedToLabel = exports.Row = exports.Right = exports.ProductImage = exports.ProductDescription = exports.ProductCompanyImage = exports.ProductBlock = exports.Left = exports.CompanyBlock = exports.BlockStarsWrapper = exports.BlockStars = exports.BlockQuality = exports.BlockNameLocalisation = exports.BlockName = exports.BlockLocalisation = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _supplierDetails = require("../../../../../../../../../../../../components/supplierDetails/styles/supplierDetails");
var _responsive = _interopRequireDefault(require("../../../../../../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
/* $FlowFixMe */
var FONT_COLOR_TITLE = "#555";
var FONT_COLOR_BRAND = "#999";
var media = _responsive["default"].media();
var specificMaxMedia = _responsive["default"].specificMaxMedia(600);
var Left = exports.Left = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-0"
})(["text-align:left;box-shadow:0px 1px 2px #0000001A;"]);
var Right = exports.Right = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-1"
})(["text-align:left;display:flex;align-items:center;"]);
var BlockName = exports.BlockName = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-2"
})(["text-transform:uppercase;width:100%;font-size:1.4em;line-height:1em;hyphens:auto;"]);
var BlockQuality = exports.BlockQuality = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-3"
})(["text-align:left;", "{margin-top:0;}"], _supplierDetails.Reactivity);
var BlockNameLocalisation = exports.BlockNameLocalisation = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-4"
})(["font-family:HurmeGeometricSans_SemiBold,sans-serif;margin-bottom:5px;width:100%;display:inherit;"]);
var BlockLocalisation = exports.BlockLocalisation = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-5"
})(["font-size:16px;color:#707070;font-family:Helvetica Neue,Regular,sans-serif;margin-top:5px;word-wrap:break-word;hyphens:auto;text-align:left;&:before{content:\"\f041\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;color:#1094E9;}"]);
var BlockStars = exports.BlockStars = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-6"
})(["margin-top:0;font-family:Arial;", ""], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      margin: auto;\n  "]))));
var BlockStarsWrapper = exports.BlockStarsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-7"
})([""]);
var ProductDescription = exports.ProductDescription = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-8"
})(["color:", ";font-size:12px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;text-transform:uppercase;padding-right:15px;div{color:", ";font-weight:normal;font-size:12px;font-family:\"Century Gothic\";}", ""], FONT_COLOR_TITLE, FONT_COLOR_BRAND, media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 10px 0 10px 10px;\n  "]))));
var ProductCompanyImage = exports.ProductCompanyImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-9"
})(["padding-right:15px;img{max-height:100%;max-width:70%;}"]);
var Row = exports.Row = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-10"
})(["display:flex;margin-bottom:20px;align-items :center;"]);
var ProductBlock = exports.ProductBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-11"
})(["display:flex;align-items:center;"]);
var CompanyBlock = exports.CompanyBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-12"
})([""]);
var Separator = exports.Separator = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-13"
})(["border-bottom:solid 1px #eee;margin-bottom:15px;display:inline-block;width:70%;", ""], specificMaxMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width:100%;\n  "]))));
var Vseparator = exports.Vseparator = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-14"
})(["width:2px;background-color:#9CC8D8;margin:0 35px;height:145px;", ""], specificMaxMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    display : none;\n  "]))));
var ProductImage = exports.ProductImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-15"
})(["max-width:145px;margin-right:10px;img{max-width :145px;}", ""], specificMaxMedia(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  img {\n    max-width : 100px;\n  }\n  "]))));
var SendedToLabel = exports.SendedToLabel = _styledComponents["default"].div.withConfig({
  componentId: "sc-1um5o5j-16"
})(["font-size:12px;font-family:Arial,sans-serif;margin-bottom:5px;"]);