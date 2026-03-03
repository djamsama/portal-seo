"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.Title = exports.Skeleton = exports.PlaceMarge = exports.PlaceLogo = exports.PlaceImg = exports.PlaceHolder = exports.PlaceCaption = exports.AllProjectsWrapper = exports.AllProjectLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _link = _interopRequireDefault(require("../../../../../components/styles/link"));
var _responsive = require("../../../../../components/styles/responsive");
var _templateObject;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-tpomlr-0"
})(["margin:30px 0 40px;padding:0 20px;font-size:1em;color:#555659;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-tpomlr-1"
})(["padding:0 20px;background-color:#f6f6f6;position:relative;bottom:-10px;"]);
var PlaceHolder = exports.PlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-tpomlr-2"
})(["width:245px;"]);
var progress = (0, _styledComponents.keyframes)(["0%{transform:translate3d(-100%,0,0);}100%{transform:translate3d(100%,0,0);}"]);
var Skeleton = exports.Skeleton = _styledComponents["default"].div.withConfig({
  componentId: "sc-tpomlr-3"
})(["position:relative;overflow:hidden;width:100%;height:40px;background:#efefef;margin:20px;&::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#efefef,lighten(\"#efefef\",7%),#efefef);animation-name:", ";animation-duration:1s;animation-timing-function:ease-in-out;animation-iteration-count:infinite;}"], progress);
var PlaceImg = exports.PlaceImg = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-tpomlr-4"
})(["height:250px;"]);
var PlaceCaption = exports.PlaceCaption = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-tpomlr-5"
})(["height:10px;"]);
var PlaceLogo = exports.PlaceLogo = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-tpomlr-6"
})(["height:20px;"]);
var PlaceMarge = exports.PlaceMarge = _styledComponents["default"].div.withConfig({
  componentId: "sc-tpomlr-7"
})(["margin:10px;"]);
var AllProjectsWrapper = exports.AllProjectsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-tpomlr-8"
})(["display:flex;justify-content:flex-end;margin:10px 0px 0px 0px;", ";"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      margin: 35px 0px 0px 0px;\n  "]))));
var AllProjectLink = exports.AllProjectLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-tpomlr-9"
})(["width:auto;text-align:end;text-transform:none;font-size:1em;font-family:sans-serif;color:", ";&:hover{color:", ";text-decoration:underline;}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});