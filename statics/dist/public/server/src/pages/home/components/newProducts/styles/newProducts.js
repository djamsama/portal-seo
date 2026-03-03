"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleWrapper = exports.Title = exports.Skeleton = exports.ProductHomeWrapper = exports.ProductCardHome = exports.PlaceMarge = exports.PlaceLogo = exports.PlaceImg = exports.PlaceHolder = exports.PlaceCaption = exports.NewProductWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = require("../../../../../components/styles/responsive");
var _productCard = require("../../../../../components/product/productCard/styles/productCard");
var _productCard2 = _interopRequireDefault(require("../../../../../components/product/productCard"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var maxMedia754 = (0, _responsive.specificMaxMedia)(754);
var ProductCardHome = exports.ProductCardHome = (0, _styledComponents["default"])(_productCard2["default"]).withConfig({
  componentId: "sc-wnmlaj-0"
})(["&&&{.TileInset{border-style:none;}", " ", " ", ";}", "{height:calc(16.66vw - 60.85px);max-height:100%;", ";", ";", ";", ";}"], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n       max-width: 100%;\n        width: 100%;\n    "]))), _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        float: left;\n        width: 50%;\n        .TileInset {\n          width: 100%;\n        }\n    "]))), maxMedia754(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        width: 100%;\n        :nth-of-type(n+2) {\n          display: none;\n        }\n    "]))), _productCard.ProductImageWrapper, _responsive.media.screenLgMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(25vw - 63.1px);\n    "]))), _responsive.media.screenMdMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(35vw - 66.25px);\n    "]))), _responsive.media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      height: calc(50vw - 72.25px);\n    "]))), _responsive.media.screenXsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      min-height: 265px;\n      height: auto;\n    "]))));
var TitleWrapper = exports.TitleWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-wnmlaj-1"
})(["margin:30px 0 20px;padding:0 20px;font-size:1em;color:#555659;font-family:HurmeGeometricSans_SemiBold,sans-serif;text-transform:uppercase;"]);
var Title = exports.Title = _styledComponents["default"].span.withConfig({
  componentId: "sc-wnmlaj-2"
})(["padding:0 20px;background-color:#f6f6f6;position:relative;bottom:-10px;"]);
var NewProductWrapper = exports.NewProductWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-wnmlaj-3"
})(["min-height:540px;"]);
var ProductHomeWrapper = exports.ProductHomeWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-wnmlaj-4"
})(["margin-top:40px;", " ", " ", ";"], _responsive.media.screenLgMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n\n      :nth-of-type(n+6) {\n        display: ", ";\n    "])), function (props) {
  return props.mobileDisplay ? "inherit" : "none";
}), _responsive.media.screenMdMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n      :nth-of-type(n+4) {\n        display:  ", ";\n      }\n    "])), function (props) {
  return props.mobileDisplay ? "inherit" : "none";
}), _responsive.media.screenXsMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 20px; /* To enable HIGHLIGHT tag display. */\n    "]))));
var PlaceHolder = exports.PlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-wnmlaj-5"
})(["flex-basis:90%;max-width:90%;", ";", ";", ";", ";"], _responsive.media.screenLgMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis:87%;\n    max-width: 87%;\n  "]))), _responsive.media.screenMdMin(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: 90%;\n    max-width: 90%;\n  "]))), _responsive.media.screenSmMin(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 90%;\n  "]))), _responsive.media.screenXsMin(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 95%;\n  "]))));
var progress = (0, _styledComponents.keyframes)(["0%{transform:translate3d(-100%,0,0);}100%{transform:translate3d(100%,0,0);}"]);
var Skeleton = exports.Skeleton = _styledComponents["default"].div.withConfig({
  componentId: "sc-wnmlaj-6"
})(["position:relative;overflow:hidden;width:100%;height:40px;background:#efefef;margin:20px;&::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#efefef,lighten(\"#efefef\",7%),#efefef);animation-name:", ";animation-duration:1s;animation-timing-function:ease-in-out;animation-iteration-count:infinite;}"], progress);
var PlaceImg = exports.PlaceImg = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-wnmlaj-7"
})(["height:250px;"]);
var PlaceCaption = exports.PlaceCaption = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-wnmlaj-8"
})(["height:10px;"]);
var PlaceLogo = exports.PlaceLogo = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-wnmlaj-9"
})(["height:20px;"]);
var PlaceMarge = exports.PlaceMarge = _styledComponents["default"].div.withConfig({
  componentId: "sc-wnmlaj-10"
})(["margin:10px;"]);