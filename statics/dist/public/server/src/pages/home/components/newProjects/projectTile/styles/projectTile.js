"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = exports.ProjectTileWrapper = exports.PlaceMarge = exports.PlaceLogo = exports.PlaceImg = exports.PlaceHolder = exports.PlaceCaption = exports.LinkCompanyImage = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _common = require("../../../styles/common");
var _responsive = require("../../../../../../components/styles/responsive");
var _tile = _interopRequireDefault(require("../../../../../../components/tile/tile"));
var _templateObject;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var ProjectTileWrapper = exports.ProjectTileWrapper = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-hj03v-0"
})(["&&&{.TileInset{overflow:visible;}", "}"], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        width: 100%;\n        margin: auto;\n    "]))));
var LinkCompanyImage = exports.LinkCompanyImage = (0, _styledComponents["default"])(_common.LinkDivTile).withConfig({
  componentId: "sc-hj03v-1"
})(["height:40px;margin-top:5px;"]);
var PlaceHolder = exports.PlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-hj03v-2"
})(["width:245px;"]);
var progressAnimation = (0, _styledComponents.keyframes)(["0%{transform:translate3d(-100%,0,0);}100%{transform:translate3d(100%,0,0);}"]);
var Skeleton = exports.Skeleton = _styledComponents["default"].div.withConfig({
  componentId: "sc-hj03v-3"
})(["position:relative;overflow:hidden;width:95%;height:40px;background:#efefef;margin:auto;&::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#efefef,#ffffff,#efefef);animation-name:", ";animation-duration:1s;animation-timing-function:ease-in-out;animation-iteration-count:infinite;}@keyframes progress{0%{transform:translate3d(-100%,0,0);}100%{transform:translate3d(100%,0,0);}}}"], progressAnimation);
var PlaceImg = exports.PlaceImg = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-hj03v-4"
})(["height:100%;max-height:500%;"]);
var PlaceCaption = exports.PlaceCaption = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-hj03v-5"
})(["height:10px;width:80%;margin-top:20px;"]);
var PlaceLogo = exports.PlaceLogo = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-hj03v-6"
})(["height:20px;width:70%;margin:auto;margin-top:20px;"]);
var PlaceMarge = exports.PlaceMarge = _styledComponents["default"].div.withConfig({
  componentId: "sc-hj03v-7"
})(["margin:10px;"]);