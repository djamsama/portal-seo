"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleRequestElement = exports.TextWrapper = exports.SupplierWrapper = exports.SupplierName = exports.SoldByLabel = exports.RecoTitle = exports.RecoAdvice = exports.ProductImage = exports.ProductDescription = exports.ProductCompanyImage = exports.ProductBlock = exports.PrivacyBlock = exports.LogoContainer = exports.DowngradedRecoFormWrapper = exports.BlockStyled = exports.Address = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var FONT_COLOR_TITLE = "#555";
var FONT_COLOR_BRAND = "#999";
var BlockStyled = exports.BlockStyled = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-0"
})(["background-color:rgb(255,255,255);padding-left:0;padding-right:0;box-shadow:0 2px 2px rgba(0,0,0,0.1);"]);
var DowngradedRecoFormWrapper = exports.DowngradedRecoFormWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-1"
})(["padding:10px;background-color:#f2e6f9;.companyCard{display:flex;flex-wrap:wrap;justify-content:center;label{flex:1 1 0px;position:relative;max-width:200px;}}.companyCard label .companyName:before{content:\"\";position:absolute;top:10px;left:10px;width:15px;height:15px;background-color:white;border:1px solid black;transition:transform 0.1s ease-in-out;}.companyCard label input[type=\"checkbox\"]:checked + div .companyName:before{content:\"\f00c\";font:normal normal normal 13px/1 FontAwesome;transform:translate(-4px,-4px);}.companyCard label input + div{padding:20px 0px;}"]);
var LogoContainer = exports.LogoContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-2"
})(["height:64px;display:flex;justify-content:center;align-items:center;"]);
var TextWrapper = exports.TextWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-3"
})(["margin-bottom:12px;margin-top:10px;"]);
var RecoAdvice = exports.RecoAdvice = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-4"
})(["padding-left:10px;font-family:\"Open Sans\",Arial,sans-serif;font-size:14px;"]);
var RecoTitle = exports.RecoTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-5"
})(["display:flex;align-items:flex-start;color:#b151e2;font-family:\"Open Sans\",Arial,sans-serif;font-size:14px;line-height:18px;font-weight:bold;margin-bottom:7px;> span{line-height:18px;}"]);
var ProductBlock = exports.ProductBlock = (0, _styledComponents["default"])(BlockStyled).withConfig({
  componentId: "sc-clr2up-6"
})(["display:flex;padding:0;margin-bottom:10px;align-items:center;justify-items:center;flex-direction:column;justify-content:center;", ""], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    justify-content: left;\n  "]))));
var PrivacyBlock = exports.PrivacyBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-7"
})(["width:auto;margin:15px 0 15px 0;text-align:left;color:#999;padding:0;line-height:1.2em;font-size:9px;"]);
var ProductImage = exports.ProductImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-8"
})(["max-width:100%;img{display:block;max-width:100%;}"]);
var ProductDescription = exports.ProductDescription = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-9"
})(["padding:10px;width:100%;color:", ";font-size:1em;font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;text-transform:uppercase;display:flex;flex-direction:column;align-items:baseline;justify-content:center;span{color:", ";display:block;}", ""], FONT_COLOR_TITLE, FONT_COLOR_BRAND, media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 10px 0 10px 10px;\n  "]))));
var ProductCompanyImage = exports.ProductCompanyImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-10"
})(["margin-top:10px;margin-bottom:20px;display:flex;flex-direction:column;align-items:baseline;justify-content:center;img{height:fit-content;max-width:100%;}"]);
var SupplierWrapper = exports.SupplierWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-11"
})(["padding:10px;color:", ";font-size:1em;color:#555;font-size:1em;width:100%;padding:10px;.reactivity{font-size:0.9em;padding-right:0;line-height:1em;:before{content:\"\";}span:before{content:\"\f017\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;}}.rating{display:block;margin-bottom:5px;}"], FONT_COLOR_TITLE);
var SupplierName = exports.SupplierName = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-12"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;line-height:14px;"]);
var Address = exports.Address = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-13"
})(["margin-top:10px;margin-bottom:10px;&:before{content:\"\f041\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;color:", ";}"], function (props) {
  return props.theme.mainLight;
});
var TitleRequestElement = exports.TitleRequestElement = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-14"
})(["font-size:10px;color:#707070;padding-left:10px;padding-top:10px;"]);
var SoldByLabel = exports.SoldByLabel = _styledComponents["default"].div.withConfig({
  componentId: "sc-clr2up-15"
})(["font-size:10px;color:#707070;"]);