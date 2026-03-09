"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperProductTile = exports.WrapperProductText = exports.WrapperProductImage = exports.WrapperEmptyTile = exports.Skeleton = exports.ShortName = exports.PlaceMarge = exports.PlaceLogo = exports.PlaceImg = exports.PlaceHolder = exports.PlaceCaption = exports.LinkCompanyImage = exports.EmptyCard = exports.Brand = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _common = require("../../../styles/common");
var _tile = _interopRequireDefault(require("../../../../../../components/tile/tile"));
var _responsive = require("../../../../../../components/styles/responsive");
var _productCard = require("../../../../../../components/product/productCard/styles/productCard");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var EmptyCard = exports.EmptyCard = (0, _styledComponents["default"])(_productCard.Card).withConfig({
  componentId: "sc-cv59je-0"
})(["&&&{.TileInset{border-style:none;}-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;min-height:450px;margin:auto;", ";", ";", ";", ";&&&{", "}"], _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis:25%;\n    max-width: 25%;\n  "]))), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: 33%;\n    max-width: 33%;\n  "]))), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis:50%;\n    max-width: 50%;\n    margin:  auto;\n  "]))), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis:100%;\n    max-width: 100%;\n    width: 100%;\n    margin:  auto;\n  "]))), _responsive.media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n        .TileInset {\n          width: 100%;\n        }\n    "]))));
var WrapperEmptyTile = exports.WrapperEmptyTile = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-cv59je-1"
})(["", ""], _responsive.media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n       margin:auto;\n  "]))));
var WrapperProductTile = exports.WrapperProductTile = _styledComponents["default"].div.withConfig({
  componentId: "sc-cv59je-2"
})(["display:block;"]);
var WrapperProductImage = exports.WrapperProductImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-cv59je-3"
})(["position:relative;overflow:hidden;display:block;height:", ";"], function (props) {
  return props.height;
});
var LinkCompanyImage = exports.LinkCompanyImage = (0, _styledComponents["default"])(_common.LinkDivTile).withConfig({
  componentId: "sc-cv59je-4"
})(["height:40px;margin-top:5px;"]);
var ShortName = exports.ShortName = _styledComponents["default"].span.withConfig({
  componentId: "sc-cv59je-5"
})(["overflow:hidden;text-overflow:ellipsis;display:block;"]);
var Brand = exports.Brand = _styledComponents["default"].span.withConfig({
  componentId: "sc-cv59je-6"
})(["overflow:hidden;text-overflow:ellipsis;display:block;color:#999999;"]);
var WrapperProductText = exports.WrapperProductText = _styledComponents["default"].div.withConfig({
  componentId: "sc-cv59je-7"
})(["height:145px;"]);
var PlaceHolder = exports.PlaceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-cv59je-8"
})(["min-height:450px;margin:auto;min-width:100%;"]);
var progressAnimation = (0, _styledComponents.keyframes)(["0%{transform:translate3d(-100%,0,0);}100%{transform:translate3d(100%,0,0);}"]);
var Skeleton = exports.Skeleton = _styledComponents["default"].div.withConfig({
  componentId: "sc-cv59je-9"
})(["position:relative;overflow:hidden;width:100%;height:40px;background:#efefef;margin:auto;border:0;&::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#efefef,#ffffff,#efefef);animation-name:", ";animation-duration:1s;animation-timing-function:ease-in-out;animation-iteration-count:infinite;border:0;}@keyframes progress{0%{transform:translate3d(-100%,0,0);}100%{transform:translate3d(100%,0,0);}}}"], progressAnimation);
var PlaceImg = exports.PlaceImg = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-cv59je-10"
})(["min-height:260px;height:100%;max-height:500%;"]);
var PlaceCaption = exports.PlaceCaption = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-cv59je-11"
})(["height:10px;width:80%;margin-top:20px;"]);
var PlaceLogo = exports.PlaceLogo = (0, _styledComponents["default"])(Skeleton).withConfig({
  componentId: "sc-cv59je-12"
})(["height:20px;width:70%;margin:auto;margin-top:20px;"]);
var PlaceMarge = exports.PlaceMarge = _styledComponents["default"].div.withConfig({
  componentId: "sc-cv59je-13"
})(["margin:10px;"]);