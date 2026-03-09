"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OlBreadcrumbs = exports.BreadcrumbsCurrent = exports.BreadcrumbsContainerWrapper = exports.BreadcrumbsContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _templateObject, _templateObject2, _templateObject3;
var BreadcrumbsContainerWrapper = exports.BreadcrumbsContainerWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-ihufe5-0"
})(["height:55px;"]);
var BreadcrumbsContainer = exports.BreadcrumbsContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-ihufe5-1"
})(["font-family:Arial,sans-serif;font-size:15px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;::-webkit-scrollbar{height:7px;}-ms-overflow-style:none;scrollbar-width:none;:-moz-any(#content,#appcontent) browser{margin-right:-14px !important;overflow-y:scroll;margin-bottom:-14px !important;overflow-x:scroll;}", " .breadcrumb-margin-right{margin-right:5px;}a{text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;padding:10px 0;color:#555;}a::after{content:\"\f105\";margin:0 5px 0 10px;font-family:FontAwesome;color:#555;}", " ", ""], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      ::-webkit-scrollbar {\n        height: 0px;\n      }\n  "]))), _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 15px;\n    height: auto;\n  "]))), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 15px;\n  "]))));
var BreadcrumbsCurrent = exports.BreadcrumbsCurrent = _styledComponents["default"].span.withConfig({
  componentId: "sc-ihufe5-2"
})(["font-weight:700;display:inline;"]);
var OlBreadcrumbs = exports.OlBreadcrumbs = _styledComponents["default"].ol.withConfig({
  componentId: "sc-ihufe5-3"
})(["list-style-type:none;padding-left:0px;li{display:inline;}"]);