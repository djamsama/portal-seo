"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderTop = exports.HeaderNavTop = exports.HeaderNav = exports.Exhibit = exports.DesktopHeader = exports.Corner = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _containerWide = _interopRequireDefault(require("../../../../styles/containerWide"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var media = _responsive["default"].media();
var DesktopHeader = exports.DesktopHeader = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qkjd88-0"
})(["margin-bottom:20px;", ";", ""], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        margin-bottom: 0;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n  "]))));
var HeaderTop = exports.HeaderTop = (0, _styledComponents["default"])(_containerWide["default"]).withConfig({
  componentId: "sc-1qkjd88-1"
})(["color:#fff;background-color:", ";"], function (props) {
  return props.theme.main;
});
var HeaderNav = exports.HeaderNav = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qkjd88-2"
})(["padding:6px 25px 0;background-color:", ";width:100%;box-sizing:border-box;position:", ";top:", ";z-index:9;", ";", ";", ";", ";"], function (props) {
  return props.theme.main;
}, function (props) {
  return props["float"] ? "sticky" : "relative";
}, function (props) {
  return props["float"] ? 0 : "auto";
}, function (props) {
  return props["float"] && props.fixed && (0, _styledComponents.css)(["position:fixed;"]);
}, function (props) {
  return props["float"] && !props.fixed && (0, _styledComponents.css)(["position:sticky;"]);
}, function (props) {
  return !props["float"] && (0, _styledComponents.css)(["position:relative;"]);
}, media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        height: ", ";\n  "])), function (props) {
  return props["float"] ? "115px" : "75px";
}));
var HeaderNavTop = exports.HeaderNavTop = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qkjd88-3"
})(["background-color:", ";padding:5px 0 5px 5px;position:relative;float:right;z-index:10;color:rgba(255,255,255,0.5);:hover{color:rgba(255,255,255,0.75);}"], function (props) {
  return props.theme.mainDark;
});
var Corner = exports.Corner = _styledComponents["default"].div.withConfig({
  componentId: "sc-1qkjd88-4"
})(["width:0;height:0;border-style:solid;border-width:0 40px 28px 0;border-color:transparent ", " transparent transparent;position:absolute;top:0;left:-40px;", ";"], function (props) {
  return props.theme.mainDark;
}, media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n  "]))));
var Exhibit = exports.Exhibit = _styledComponents["default"].a.attrs(function (props) {
  return {
    "data-cy": props.dataCy
  };
}).withConfig({
  componentId: "sc-1qkjd88-5"
})(["font-size:1em;font-weight:700;text-transform:uppercase;color:#fff;font-family:Arial,sans-serif;cursor:pointer;text-decoration:none;margin-right:25px;float:right;border:1px solid #fff;padding:0px 7px;border-radius:5px;:hover{color:#fff;}"]);