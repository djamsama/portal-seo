"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderStandWrapper = exports.HeaderStandContainer = exports.CompanyTooltip = exports.CompanyLogoImg = exports.CompanyLogo = exports.CompanyLinks = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _stickyContainer = _interopRequireDefault(require("../../../../../components/stickyContainer"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var media = _responsive["default"].media();
var xsLogoStyle = (0, _styledComponents.css)(["max-height:45px;height:45px;line-height:45px;vertical-align:middle;display:inline-block;align-self:center;"]);
var HeaderStandWrapper = exports.HeaderStandWrapper = (0, _styledComponents["default"])(_stickyContainer["default"]).withConfig({
  componentId: "sc-1t9tcbx-0"
})(["width:100%;margin:0 0 50px 0;padding:0;top:0;z-index:8;background-color:#fff;text-align:center;box-shadow:0 5px 5px rgba(0,0,0,0.1);&.sticky{z-index:9;+ div{margin-top:115px;", "}ul.stand-header-nav{transform:scale(0.88);transform-origin:0 50%;", "}.stand-header-logo{", " img{max-height:100%;}}.container{", "}}"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        margin-top: 0;\n     "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        transform: none;\n      "]))), xsLogoStyle, media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        padding: 5px 20px;\n      "]))));
var HeaderStandContainer = exports.HeaderStandContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1t9tcbx-1"
})(["display:flex;padding:10px 10px 10px 20px;.stand-header-company{align-self:center;display:flex;", "}", ""], media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      margin: auto;\n    "]))), media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-wrap: wrap;\n    padding-right: 20px;\n  "]))));
var CompanyLinks = exports.CompanyLinks = _styledComponents["default"].span.withConfig({
  componentId: "sc-1t9tcbx-2"
})(["margin:0 0 0 20px;align-self:center;display:flex;a{display:block;padding-left:5px;}"]);
var CompanyLogo = exports.CompanyLogo = _styledComponents["default"].span.withConfig({
  componentId: "sc-1t9tcbx-3"
})(["margin:auto;", ""], media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n    img {\n      max-height: 100%;\n    }\n  "])), xsLogoStyle));
var CompanyLogoImg = exports.CompanyLogoImg = _styledComponents["default"].img.withConfig({
  componentId: "sc-1t9tcbx-4"
})(["vertical-align:middle;"]);
var CompanyTooltip = exports.CompanyTooltip = _styledComponents["default"].span.withConfig({
  componentId: "sc-1t9tcbx-5"
})(["background:#fff;white-space:nowrap;display:flex;flex-direction:column;.stand-title-name{.stand-name{a{cursor:pointer;font-weight:bold;color:#555659;padding-left:3px;}}}.stand-title-group{.stand-title-group-content{padding-left:3px;}}"]);