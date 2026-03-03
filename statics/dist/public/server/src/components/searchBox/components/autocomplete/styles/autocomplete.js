"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SearchContainer = exports.LastSearchContainer = exports.IconLeft = exports.DeleteTitle = exports.ColRight = exports.ColLeft = exports.CategorySearchLinkContainer = exports.CategorySearchLink = exports.CategorySearchContainer = exports.BrandSearchContainer = exports.BrandLogo = exports.BrandList = exports.BrandItemLink = exports.BrandItem = exports.AutocompleteListBorderBottom = exports.AutocompleteList = exports.AutocompleteItemSpan = exports.AutocompleteItemLinkInline = exports.AutocompleteItemLink = exports.AutocompleteItem = exports.AutocompleteContainer = exports.AutoCompleteWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var AutoCompleteWrapper = exports.AutoCompleteWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-0"
})(["display:", ";position:", ";"], function (props) {
  return props.showAutocomplete ? "block" : "none";
}, function (props) {
  return props.showTwoCols ? "" : "relative";
});
var SearchContainer = exports.SearchContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-1"
})(["display:flex;flex-direction:row;flex-wrap:", ";z-index:121;position:absolute;background:white;border-radius:0;box-shadow:0 5px 5px rgba(0,0,0,0.1);min-width:", ";", " ", ""], function (props) {
  return props.showTwoCols ? "nowrap" : "wrap";
}, function (props) {
  return props.showTwoCols ? "900px" : "100%";
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      flex-wrap: nowrap;\n      flex-direction: column;\n      height: auto;\n      padding: 10px 10px 10px 0px;\n      overflow-y: auto;\n      box-shadow: none;\n      min-width: 100%;\n      width: calc(100% + 60px);\n  "]))), _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      min-width: 100%;\n      width: calc(100% + 40px);\n  "]))));
var Title = exports.Title = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-2"
})(["display:flex;text-align:left;font:normal normal normal 16px/18px Arial;letter-spacing:0px;color:#999999;opacity:1;padding:25px 10px 20px 10px;", ""], _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      :before {\n      content: \"\";\n      position: absolute;\n      border-top: #ccc solid 1px;\n      margin-top: -20px;\n      left: 0;\n      right: 0;\n      border-top: ", ";\n      margin-top: ", ";\n    }\n  "])), function (props) {
  return props.noDecoration ? "none" : "#ccc solid 1px";
}, function (props) {
  return props.noDecoration ? "0" : "-20px";
}));
var DeleteTitle = exports.DeleteTitle = _styledComponents["default"].a.withConfig({
  componentId: "sc-gex62n-3"
})(["text-align:right;font:normal normal normal 11px/11px Arial;letter-spacing:0px;color:#999999;text-transform:lowercase;opacity:1;margin-left:auto;cursor:pointer;"]);
var IconLeft = exports.IconLeft = _styledComponents["default"].span.withConfig({
  componentId: "sc-gex62n-4"
})(["font:normal normal normal 11px/11px Arial;letter-spacing:0px;color:#999999;text-transform:lowercase;opacity:1;margin:auto 10px auto auto;"]);
var LastSearchContainer = exports.LastSearchContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-5"
})(["width:100%;"]);
var AutocompleteContainer = exports.AutocompleteContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-6"
})(["width:100%;"]);
var BrandSearchContainer = exports.BrandSearchContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-7"
})(["flex:1;display:flex;flex-direction:column;box-sizing:border-box;max-height:365px;", ""], _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      max-width: inherit;\n      min-height: 520px;\n      height: auto;\n  "]))));
var CategorySearchContainer = exports.CategorySearchContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-8"
})(["padding:0px 0px 20px 0px;box-sizing:border-box;", ""], _responsive.media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      height: auto;\n  "]))));
var AutocompleteList = exports.AutocompleteList = _styledComponents["default"].ul.withConfig({
  componentId: "sc-gex62n-9"
})(["z-index:121;width:", ";position:absolute;background:white;list-style:none;padding:0;margin:0;float:left;.removeBold{font-weight:100;}width:100%;position:relative;", ""], function (props) {
  return props.nbDivToDisplay <= 2 ? "calc(65% - 21px)" : "calc(100% - 21px)";
}, _responsive.media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n  "]))));
var AutocompleteListBorderBottom = exports.AutocompleteListBorderBottom = (0, _styledComponents["default"])(AutocompleteList).withConfig({
  componentId: "sc-gex62n-10"
})(["border-bottom:solid 1px #f0f0f0;", ""], _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n       border-bottom:none;\n  "]))));
var AutocompleteItem = exports.AutocompleteItem = _styledComponents["default"].li.withConfig({
  componentId: "sc-gex62n-11"
})(["display:flex;padding:10px;font:normal normal normal 16px/18px Arial;zoom:1;float:left;clear:left;width:100%;cursor:pointer;:hover{background-color:#f1f1f1;}"]);
var AutocompleteItemSpan = exports.AutocompleteItemSpan = _styledComponents["default"].span.withConfig({
  componentId: "sc-gex62n-12"
})(["font:normal normal ", " 16px/18px Arial;color:#555;cursor:pointer;"], function (props) {
  return props.noBold === true ? "normal" : "bold";
});
var AutocompleteItemLink = exports.AutocompleteItemLink = _styledComponents["default"].span.withConfig({
  componentId: "sc-gex62n-13"
})(["text-decoration:none;display:block;zoom:1;cursor:pointer;"]);
var AutocompleteItemLinkInline = exports.AutocompleteItemLinkInline = (0, _styledComponents["default"])(AutocompleteItemLink).withConfig({
  componentId: "sc-gex62n-14"
})(["display:inline;"]);
var CategorySearchLinkContainer = exports.CategorySearchLinkContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-15"
})(["display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;"]);
var CategorySearchLink = exports.CategorySearchLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-gex62n-16"
})(["top:0px;left:120px;text-align:left;font:normal normal normal 16px/14px Arial;letter-spacing:0px;padding:10px;color:", ";"], function (props) {
  return props.theme.mainLight;
});
var BrandList = exports.BrandList = _styledComponents["default"].ul.withConfig({
  componentId: "sc-gex62n-17"
})(["align-items:flex-start;width:100%;display:flex;flex-direction:column;z-index:121;background:white;list-style:none;padding:0;margin:0;position:relative;"]);
var BrandItem = exports.BrandItem = _styledComponents["default"].li.withConfig({
  componentId: "sc-gex62n-18"
})(["padding:10px;height:50px;"]);
var BrandItemLink = exports.BrandItemLink = _styledComponents["default"].span.withConfig({
  componentId: "sc-gex62n-19"
})(["cursor:pointer;"]);
var BrandLogo = exports.BrandLogo = _styledComponents["default"].img.withConfig({
  componentId: "sc-gex62n-20"
})(["max-height:100%;"]);
var ColLeft = exports.ColLeft = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-21"
})(["width:", ";box-sizing:border-box;border-right:", ";opacity:1;", ""], function (props) {
  return props.fullWidth === true ? "100%" : "calc(60% - 1px)";
}, function (props) {
  return props.fullWidth === true ? "none" : "1px solid #f0f0f0";
}, _responsive.media.screenSmMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      border-right: none;\n  "]))));
var ColRight = exports.ColRight = _styledComponents["default"].div.withConfig({
  componentId: "sc-gex62n-22"
})(["display:flex;flex-direction:column;width:", ";box-sizing:border-box;", ""], function (props) {
  return props.fullWidth === true ? "100%" : "40%";
}, _responsive.media.screenSmMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n      display: flex;\n      width: 100%;\n      max-height: 200px;\n      height: auto;\n  "]))));