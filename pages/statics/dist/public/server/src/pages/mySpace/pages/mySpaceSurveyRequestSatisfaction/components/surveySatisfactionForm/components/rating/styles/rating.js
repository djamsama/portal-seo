"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRating = exports.TitleWrapper = exports.ResponseWrapper = exports.RatingTxtContent = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var media = _responsive["default"].media();
var WrapperRating = exports.WrapperRating = _styledComponents["default"].div.withConfig({
  componentId: "sc-12jxr6j-0"
})(["width:100%;margin:auto;display:flex;flex-direction:row;flex-wrap:nowrap;", " > *{flex:0 0 auto;margin:auto;", "}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        flex-wrap: wrap;\n  "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        width:100%;\n        flex-wrap: wrap;\n    "]))));
var ResponseWrapper = exports.ResponseWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-12jxr6j-1"
})(["padding:0px 0px 20px 0px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;-webkit-box-shadow:0 0 10px rgba(0,0,0,0.25);box-shadow:0 0 10px rgba(0,0,0,0.25);margin-bottom:40px;", " .rating{display:flex;justify-content:center;}.rating > span > span{text-align:center;width:150px;", "}"], media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      padding-right: 0px;\n  "]))), media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      width:60px;\n  "]))));
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].h2.withConfig({
  componentId: "sc-12jxr6j-2"
})(["margin-bottom:20px;font-size:1.3em;padding:11px;border-left:3px ", " solid;"], function (props) {
  return props.theme.mainLight;
});
var RatingTxtContent = exports.RatingTxtContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-12jxr6j-3"
})(["padding:40px;"]);