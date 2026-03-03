"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniverseImg = exports.UniversThumbnailWrapper = exports.UniversThumbnailRow = exports.UniversThumbnailPlaceHolder = exports.UniversThumbnail = exports.UniversLink = exports.LabelUniverse = exports.CategoryWrapper = exports.CategoryLink = exports.CategoryLi = exports.Category = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var UniverseImgWidth = "144px;";

/** Common style for universe cards and skeleton cards so that they are both impacted by updates. */
var UniverseImgStyle = (0, _styledComponents.css)(["max-width:", ";height:100px;margin-right:5px;border-radius:5px;bottom:0;left:0;right:0;vertical-align:middle;position:relative;align-items:center;justify-content:center;display:flex;line-height:1.2;"], UniverseImgWidth);
var LabelUniverse = exports.LabelUniverse = _styledComponents["default"].div.withConfig({
  componentId: "sc-147qcpc-0"
})(["width:calc(100% - 5px);height:", ";background-color:rgba(0,0,0,", ");border-radius:", " ", " 5px 5px;padding:0 5px;font-size:0.75rem;font-weight:700;text-transform:uppercase;color:#fff;transition:0.25s ease-in-out 0s;bottom:0;left:0;right:0;position:absolute;max-width:143px;align-items:center;text-align:center;justify-content:center;p{display:flex;justify-content:center;align-items:center;height:100%;}"], function (props) {
  return props.selected ? "100%" : "54px";
}, function (props) {
  return props.selected ? "0.75" : "0.55";
}, function (props) {
  return props.selected ? "5px" : "0";
}, function (props) {
  return props.selected ? "5px" : "0";
});
var UniversThumbnailWrapper = exports.UniversThumbnailWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-147qcpc-1"
})(["overflow:hidden;"]);
var UniversThumbnail = exports.UniversThumbnail = _styledComponents["default"].div.withConfig({
  componentId: "sc-147qcpc-2"
})(["max-width:100%;"]);
var UniversThumbnailRow = exports.UniversThumbnailRow = _styledComponents["default"].div.withConfig({
  componentId: "sc-147qcpc-3"
})(["margin:0;padding:0;list-style:none;&.loading{.flickity-viewport{display:none;}}"]);
var CategoryLink = exports.CategoryLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-147qcpc-4"
})(["padding:0;display:block;position:relative;"]);
var UniverseImg = exports.UniverseImg = _styledComponents["default"].img.withConfig({
  componentId: "sc-147qcpc-5"
})(["", ""], UniverseImgStyle);
var Category = exports.Category = _styledComponents["default"].ul.withConfig({
  componentId: "sc-147qcpc-6"
})(["margin:0;padding:0 10px;background-color:#fff;margin-right:25px;"]);
var CategoryLi = exports.CategoryLi = _styledComponents["default"].li.withConfig({
  componentId: "sc-147qcpc-7"
})(["border:none;padding:15px 0;border-top:1px solid #ededed;transition:padding linear 0.25s;list-style:none;&:hover{padding-left:15px;}a{color:#555;&:before{content:\"\";position:relative;left:-30px;width:30px;height:1.5em;margin-bottom:-1.5em;display:list-item;list-style-position:inside;text-align:right;}}"]);
var CategoryWrapper = exports.CategoryWrapper = _styledComponents["default"].div.attrs(function (props) {
  return {
    "data-cy": props.dataCy
  };
}).withConfig({
  componentId: "sc-147qcpc-8"
})(["margin:0;padding:0;list-style:none;outline:none;"]);
var UniversLink = exports.UniversLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-147qcpc-9"
})(["font-family:Arial,sans-serif;font-size:16px;font-weight:400;line-height:19.2px;"]);
var UniversThumbnailPlaceHolder = exports.UniversThumbnailPlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-147qcpc-10"
})(["display:inline-flex;> div{", " width:", ";position:relative;overflow:hidden;background-color:rgb(236,236,236);border:none;pointer-events:none;cursor:default;&:hover{background-color:rgb(236,236,236);}&:before{content:\"\";}&:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );animation:shimmer 2s infinite;content:\"\";}}@keyframes shimmer{100%{transform:translateX(100%);}}"], UniverseImgStyle, UniverseImgWidth);