"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchBox = exports.SearchButtons = exports.InputSearchBox = exports.InputGroupSearchBox = exports.Input = exports.FaSearchSearchBox = exports.FaSearchMobile = exports.Dimmer = exports.ButtonSubmitSearchBox = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var WrapperSearchBox = exports.WrapperSearchBox = _styledComponents["default"].div.attrs(function (props) {
  return {
    "data-cy": props.dataCy
  };
}).withConfig({
  componentId: "sc-1c65rd0-0"
})(["margin-top:", ";float:left;width:", ";padding-left:", ";padding-right:", ";padding-bottom:", ";box-sizing:border-box;z-index:", ";", ";", ";", ";input{border-radius:0px;}"], function (props) {
  return props.isStickyHeader ? "10px" : "-4px";
}, function (props) {
  return props.isHeader && !props.isMobileSearch ? "".concat(100 * 2 / 3, "%") : "100%";
}, function (props) {
  return props.isHeader ? "25px" : "0";
}, function (props) {
  return props.isHeader ? "25px" : "0";
}, function (props) {
  return props.isHeader ? "15px" : "auto";
}, function (props) {
  return props.showAutocomplete ? "121" : "0";
}, _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width:  ", ";\n    min-width:  ", ";\n    padding: 0px;\n    margin-bottom: 10px;\n  "])), function (props) {
  return props.isHeader ? "100%" : "90%";
}, function (props) {
  return props.isHeader ? "250px" : "90%";
}), _responsive.mediaMinWidth.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: ", ";\n  "])), function (props) {
  return props.isHeader ? "50%" : "100%";
}), _responsive.mediaMinWidth.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: ", ";\n  "])), function (props) {
  return props.isHeader ? "".concat(100 * 1 / 3, "%") : "100%";
}));
var ButtonSubmitSearchBox = exports.ButtonSubmitSearchBox = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c65rd0-1"
})(["display:inline-block;padding:7px 12px;font-size:1em;line-height:1.7em;text-align:center;white-space:nowrap;border:none;cursor:pointer;background-color:", ";height:", ";padding:0 10px;font-size:20px;border-radius:0 2px 2px 0;color:#fff;outline:none;background-color:", ";"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.isHeader ? "35px" : "45px";
}, function (props) {
  return props.theme.mainLight;
});
var FaSearch = _styledComponents["default"].i.attrs({
  className: "fa fa-search"
}).withConfig({
  componentId: "sc-1c65rd0-2"
})([""]);
var FaSearchSearchBox = exports.FaSearchSearchBox = (0, _styledComponents["default"])(FaSearch).withConfig({
  componentId: "sc-1c65rd0-3"
})(["color:white;display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"]);
var Input = exports.Input = _styledComponents["default"].input.withConfig({
  componentId: "sc-1c65rd0-4"
})([""]);
var InputGroupSearchBox = exports.InputGroupSearchBox = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c65rd0-5"
})(["display:flex;flex-direction:row;border-collapse:separate;", ""], _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 10px;\n  "]))));
var InputSearchBox = exports.InputSearchBox = _styledComponents["default"].input.withConfig({
  componentId: "sc-1c65rd0-6"
})(["width:100%;box-sizing:border-box;height:", ";padding:4px 12px;font-family:Verdana,sans-serif;color:#777;font-size:", ";border:2px solid ", ";z-index:", ";", ""], function (props) {
  return props.isHeader ? "35px" : "45px";
}, function (props) {
  return props.isHeader ? "15px" : "19px";
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.showAutocomplete ? "121" : "0";
}, _responsive.media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 4px 12px 4px 30px;\n  "]))));
var SearchButtons = exports.SearchButtons = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c65rd0-7"
})(["vertical-align:middle;", ""], _responsive.media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    display:none;\n  "]))));
var FaSearchMobile = exports.FaSearchMobile = _styledComponents["default"].i.withConfig({
  componentId: "sc-1c65rd0-8"
})(["display:none;position:absolute;left:20px;top:45px;z-index:140;color:#777;font-style:normal;", " ", ""], _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    display:inline-block;\n    margin-top: -10px;\n    left: 45px;\n    ::before {\n    margin-right: 10px;\n    font-family: FontAwesome;\n    font-size: 18px;\n    content: \"\f002\";\n    "], ["\n    display:inline-block;\n    margin-top: -10px;\n    left: 45px;\n    ::before {\n    margin-right: 10px;\n    font-family: FontAwesome;\n    font-size: 18px;\n    content: \"\\f002\";\n    "]))), _responsive.media.screenXsMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    left: 20px;\n    margin-top: -10px;\n  }\n"]))));
var Dimmer = exports.Dimmer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1c65rd0-9"
})(["display:", ";position:absolute;top:-50px;left:0;width:calc(100vw);height:calc(100vw + 33rem);background-color:rgba(0,0,0,0.5);z-index:", ";", ""], function (props) {
  return props.showAutocomplete ? "block" : "none";
}, function (props) {
  return props.showAutocomplete ? "120" : "0";
}, _responsive.media.screenSmMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n  "]))));