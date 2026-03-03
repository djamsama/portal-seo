"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleCurrency = exports.Selection = exports.RowCurrency = exports.EmptyCurrency = exports.ContainerCurrency = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../../../styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Selection = exports.Selection = _styledComponents["default"].div.withConfig({
  componentId: "sc-12t17a-0"
})(["cursor:pointer;margin:0 5px;min-width:64px;float:right;:hover{color:rgba(255,255,255,0.75);}", ""], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    float: none;\n    color: ", ";\n    width: 100%;\n    display: flex;\n    font-size: 1.17em;\n    height: 31px;\n    padding: 10px;\n    margin: 0;\n    align-items: center;\n    span {\n      color: ", ";\n    }\n    :hover {\n      color: ", ";\n    }\n    i {\n      margin-left: auto;\n      &:before {\n        content: \"\";\n        border: solid ", ";\n        border-width: 0 1px 1px 0;\n        display: inline-block;\n        padding: .3em;\n        transform: rotate(-45deg);\n      }\n    }\n  "])), function (props) {
  return props.theme.headerMobileCountryCurrencyMenu;
}, function (props) {
  return props.theme.headerMobileCountryCurrencyMenu;
}, function (props) {
  return props.theme.headerMobileCountryCurrencyMenu;
}, function (props) {
  return props.theme.headerMobileCountryCurrencyMenu;
}));
var TitleCurrency = exports.TitleCurrency = _styledComponents["default"].ul.withConfig({
  componentId: "sc-12t17a-1"
})(["background-color:#2b2b2b;min-width:120px;white-space:nowrap;padding:0;", ""], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    background: none;\n  "]))));
var RowCurrency = exports.RowCurrency = _styledComponents["default"].li.withConfig({
  componentId: "sc-12t17a-2"
})(["list-style-type:none;color:rgba(255,255,255,0.5);background-color:#2b2b2b;margin:2px 20px;cursor:pointer;:hover{background-color:rgba(255,255,255,0.5);margin-left:10px;margin-right:10px;color:#2b2b2b;}", ""], _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 9px;\n    margin: 0;\n    border-bottom: 1px solid ", ";\n    color: ", " ;\n    font-size: 1.17em;\n    background: none;\n    &:last-child {\n      border: none;\n    }\n  "])), function (props) {
  return props.theme.headerMobileLinkBorder;
}, function (props) {
  return props.theme.headerMobileSubMenu;
}));
var ContainerCurrency = exports.ContainerCurrency = _styledComponents["default"].div.withConfig({
  componentId: "sc-12t17a-3"
})(["background-color:#2b2b2b;border:rgba(255,255,255,0.5) solid 1px;", ""], _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    background: none;\n    border: none;\n  "]))));
var EmptyCurrency = exports.EmptyCurrency = _styledComponents["default"].div.withConfig({
  componentId: "sc-12t17a-4"
})(["min-width:74px;height:18px;display:inline-block;float:right;"]);