"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoFlag = exports.ProductVideoWrapper = exports.ProductLabelWrapper = exports.ProductInfoWrapper = exports.ProductInfoElementWrapper = exports.ProductDetailTopWrapper = exports.ProductDetailTopImageWrapper = exports.ProductDetailInset = exports.NewVideoWrapper = exports.NewFlag = exports.GreenFlag = exports.AddLinks = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _tile = _interopRequireDefault(require("../../../../../components/tile/tile"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var media = _responsive["default"].media();
var ProductLabelWrapper = exports.ProductLabelWrapper = _styledComponents["default"].h1.withConfig({
  componentId: "sc-1w8z6ht-0"
})(["float:right;width:50%;margin-bottom:30px;padding-left:25px;padding-right:25px;line-height:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;", ";", ";", ";"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 50%;\n  "]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 58%;\n  "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    float: none;\n    padding: 0;\n  "]))));
var ProductDetailTopWrapper = exports.ProductDetailTopWrapper = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-1w8z6ht-1"
})(["flex:auto;min-height:400px;float:none;margin:0 0 50px 0;padding:0 2em 0 2em;", ";"], media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 25px;\n  "]))));
var ProductDetailInset = exports.ProductDetailInset = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-2"
})(["margin-bottom:50px;padding:15px 20px 0 20px;", ";"], media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 0;\n  "]))));
var ProductDetailTopImageWrapper = exports.ProductDetailTopImageWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-3"
})(["float:left;width:42%;max-height:700px;", ";", ";", ";"], media.screenLgMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 50%;\n  "]))), media.screenMdMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 42%;\n  "]))), media.screenSmMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    float: none;\n    width: 100%;\n    max-width: 500px;\n    margin: auto;\n  "]))));
var ProductInfoWrapper = exports.ProductInfoWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-4"
})(["display:flex;flex-wrap:wrap;margin-left:-2em;margin-right:-2em;"]);
var ProductInfoElementWrapper = exports.ProductInfoElementWrapper = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-1w8z6ht-5"
})(["flex-basis:calc(50%);float:none;margin-bottom:50px;padding:0 2em 0 2em;flex-grow:1;&:nth-child(3),&:nth-child(4),&:nth-child(5){flex-basis:calc(100% / 3);}", " ", ";"], media.screenLgMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: calc(50%);\n  "]))), media.screenSmMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: calc(100%);\n    &:nth-child(3),\n    &:nth-child(4),\n    &:nth-child(5) {\n      flex-basis: calc(100%);\n    }\n    margin-bottom: 25px;\n  "]))));

/** Style commun aux tags, indépendamment de leur taille. */
var baseTagStyle = (0, _styledComponents.css)(["background-image:url(", "/common/pictos/tag-new-eco-green.svg);background-repeat:no-repeat;width:74px;height:28px;margin-bottom:2px;margin-left:10px;"], function (props) {
  return props.theme.pathImg;
});
var NewFlag = exports.NewFlag = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-6"
})(["", " background-position:-74px 0;"], baseTagStyle);
var VideoFlag = exports.VideoFlag = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-7"
})(["", " background-position:0 0;"], baseTagStyle);
var GreenFlag = exports.GreenFlag = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-8"
})(["", " background-position:-146px 0;"], baseTagStyle);
var NewVideoWrapper = exports.NewVideoWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-9"
})(["display:grid;position:absolute;margin-top:10px;left:10px;z-index:1;", ";", ";"], media.screenSmMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-top: -10px;\n  left: 10px;\n"]))), media.screenXsMin(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    margin-top: -12px;\n    left: 30px;\n    z-index: 1;\n  "]))));
var ProductVideoWrapper = exports.ProductVideoWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-10"
})(["padding:20px;text-align:center;"]);
var AddLinks = exports.AddLinks = _styledComponents["default"].div.withConfig({
  componentId: "sc-1w8z6ht-11"
})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:10px;margin-bottom:10px;> div{text-align:center;line-height:0.2em;&:after{content:\"|\";margin:0 0 0 5px;padding:0 5px;}&:last-child{&:after{content:\"\";margin:0;padding-right:0;}}}", ";", ";", ";"], media.screenMdMin(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n   flex-direction: column;\n   margin-top: 0;\n   > div {\n    &:after {\n      content: \"\";\n        margin: 0;\n        padding: 0;\n    }\n   }\n  "]))), media.screenSmMin(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: row;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    > div {\n      &:after {\n        content: \"|\";\n        margin: 0 0 0 5px;\n        padding: 0 5px;\n      }\n      &:last-child {\n        &:after {\n          content: \"\";\n          margin: 0;\n          padding-right: 0;\n        }\n      }\n    }\n  "]))), media.screenXsMin(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n   flex-direction: column;\n   margin-top: 0;\n   margin-bottom: 0px;\n   > div {\n    &:after {\n      content: \"\";\n        margin: 0;\n        padding: 0;\n    }\n   }\n  "]))));