"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannersDiv = exports.BannerLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _link = _interopRequireDefault(require("../../styles/link"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10;
// const specificMinMedia1800 = specificMinMedia(1800);

var BannerLink = exports.BannerLink = (0, _styledComponents["default"])(_link["default"]).withConfig({
  componentId: "sc-1w7yr6g-0"
})(["display:inline-block;height:fit-content;color:inherit;border-style:none;margin:0;padding:0;img{width:100vw;height:calc(100vw / 5.81);}", ""], _responsive.mediaMinMaxBannersWidth.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    img {\n      width: 100vw;\n      height: calc(100vw / 2.65);\n    }\n  "]))));
var BannersDiv = exports.BannersDiv = _styledComponents["default"].div.attrs(function () {
  return {
    "data-cy": "banners"
  };
}).withConfig({
  componentId: "sc-1w7yr6g-1"
})(["max-width:", "px;width:100%;margin:0;overflow:hidden;box-shadow:0 3px 3px rgba(0,0,0,0.25);margin-bottom:25px;height:auto;min-height:100px;", " ", " ", " ", " ", " ", " ", " ", " ", " .flickity-page-dots{position:absolute;width:100%;bottom:25px;padding:0;margin:0;list-style:none;text-align:center;line-height:1;", "}.flickity-page-dots .dot{width:8px;height:8px;margin:0 5px;display:inline-block;text-indent:-9999px;border:#fff solid 1px;border-radius:10px;box-shadow:0 0 5px rgba(0,0,0,0.5);outline:none;cursor:pointer;&.is-selected{background:#fff;};", "}.flickity-rtl .flickity-page-dots{direction:rtl;}#header-br .br-item img{width:100vw;height:calc(100vw / 5.81);}}"], function (props) {
  return props.clientDim.w;
}, _responsive.mediaMinWidth.screenXxsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 150px;\n  "]))), _responsive.mediaMinWidth.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 200px;\n  "]))), _responsive.mediaMinWidth.screenMdMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 220px;\n  "]))), (0, _responsive.specificMinMedia)(1300)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 225px;\n  "]))), (0, _responsive.specificMinMedia)(1400)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 248px;\n  "]))), (0, _responsive.specificMinMedia)(1500)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 242px;\n  "]))), _responsive.mediaMinWidth.screenLgMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 250px;\n  "]))), (0, _responsive.specificMinMedia)(1700)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 290px;\n  "]))), (0, _responsive.specificMinMedia)(1800)(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n       min-height: 320px;\n  "]))), _responsive.mediaMinMaxBannersWidth.screenXsMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n    bottom: 10px;\n  "]))), _responsive.mediaMinMaxBannersWidth.screenXsMin(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 6px;\n    height: 6px;\n  "]))));