"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabDiv = exports.TabContainer = exports.SpanStatutMobile = exports.SpanMobile = exports.RatingContainer = exports.ImgCompagny = exports.DivStatut = exports.DivLeftGreyMarket = exports.DivLeftGreyFactory2 = exports.DivLeftGreyFactory = exports.DivLeftGrey = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var TabDiv = exports.TabDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-ptp3qk-0"
})(["display:flex;"]);
var TabContainer = exports.TabContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-ptp3qk-1"
})(["cursor:pointer;padding:10px 0px 20px 0;text-align:center;border:1px solid #eee;width:114%;max-width:200px;height:auto;opacity:", ";position:relative;border-right:", ";", ";"], function (props) {
  return props.disable ? 0.3 : 1;
}, function (props) {
  return props.active ? "0px" : "1px solid #eee";
}, media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 150px;\n  "]))));
var DivStatut = exports.DivStatut = _styledComponents["default"].div.withConfig({
  componentId: "sc-ptp3qk-2"
})(["border:none;text-align:center;font-size:0.75em;width:100%;max-width:200px;left:50%;transform:translateX(-50%);position:absolute;bottom:4px;span:{text-align:center;}"]);
var DivLeftGrey = exports.DivLeftGrey = _styledComponents["default"].div.withConfig({
  componentId: "sc-ptp3qk-3"
})(["float:left;width:30px;height:auto !important;border:none;text-align:center;background-color:#eee;position:relative;top:0;left:0;opacity:", ";"], function (props) {
  return props.disable ? 0.3 : 1;
});

// https://img.virtual-expo.com/media/ps/images

var DivLeftGreyFactory = exports.DivLeftGreyFactory = (0, _styledComponents["default"])(DivLeftGrey).withConfig({
  componentId: "sc-ptp3qk-4"
})(["background-position:center;background-repeat:no-repeat;background-size:70%;background-image:url(", "/common/pictos/factory.svg);"], function (props) {
  return props.theme.pathImg;
});
var DivLeftGreyFactory2 = exports.DivLeftGreyFactory2 = (0, _styledComponents["default"])(DivLeftGrey).withConfig({
  componentId: "sc-ptp3qk-5"
})(["background-position:center;background-repeat:no-repeat;background-size:70%;background-image:url(", "/common/pictos/factory2.svg);"], function (props) {
  return props.theme.pathImg;
});
var DivLeftGreyMarket = exports.DivLeftGreyMarket = (0, _styledComponents["default"])(DivLeftGrey).withConfig({
  componentId: "sc-ptp3qk-6"
})(["background-position:center;background-repeat:no-repeat;background-size:70%;background-image:url(", "/common/pictos/market.svg);"], function (props) {
  return props.theme.pathImg;
});
var ImgCompagny = exports.ImgCompagny = _styledComponents["default"].img.withConfig({
  componentId: "sc-ptp3qk-7"
})(["max-width:100px;max-height:40px;", ";margin:auto;\u0300"], media.screenLgMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 70px;\n  "]))));
var SpanMobile = exports.SpanMobile = _styledComponents["default"].span.withConfig({
  componentId: "sc-ptp3qk-8"
})(["writing-mode:vertical-rl;text-orientation:mixed;font-size:9px;\u0300"]);
var SpanStatutMobile = exports.SpanStatutMobile = _styledComponents["default"].div.withConfig({
  componentId: "sc-ptp3qk-9"
})(["text-align:center;\u0300"]);
var RatingContainer = exports.RatingContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-ptp3qk-10"
})(["margin-top:4px;color:#999;line-height:initial;.rating-container{flex-direction:column;}.rating-detail{display:flex;flex-direction:column;margin-bottom:5px;}.rating-star{margin-left:19%;}"]);