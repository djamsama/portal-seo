"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomContainer = exports.WrapperViewer = exports.WrapperVideo = exports.WrapperNavPics = exports.WrapperBigPics = exports.NavPicsWrapper = exports.ItemWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var media = _responsive["default"].media();
var WrapperViewer = exports.WrapperViewer = _styledComponents["default"].div.withConfig({
  componentId: "sc-ch91bw-0"
})(["max-height:100%;margin-top:10px;padding:0 60px;", " ", " ", ""], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    min-height: 500px;\n  "]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    min-height: unset;\n  "]))), media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]))));
var WrapperBigPics = exports.WrapperBigPics = _styledComponents["default"].div.withConfig({
  componentId: "sc-ch91bw-1"
})(["width:100%;transition:all 0.5s ease-out;margin-bottom:20px;position:relative;.mainf{min-height:", ";", "}.mainf lazysizes,.mainf picture,.mainf img,.mainf video{height:auto;max-height:", ";max-width:100%;margin-left:auto;margin-right:auto;cursor:pointer;}.mainf img{", "}.is-selected lazysizes,.is-selected picture,.is-selected img{display:block;}.flickity-slider{display:flex;align-items:center;@media all and (-ms-high-contrast:none){display:block;}}.is-selected > div{z-index:50;}.flickity-page-dots:not(.manual){> .dot:nth-child(6) ~ .dot{width:6px;height:6px;margin-bottom:2px;}> .dot:nth-child(7) ~ .dot{width:4px;height:4px;margin-bottom:3px;}> .dot:nth-child(8) ~ .dot{display:none;}}.flickity-page-dots{display:none;", " > li.dot{transition:all 0.25s ease-in-out 0s;&.before-last{width:6px !important;height:6px !important;margin:0 8px 2px 8px !important;display:inline-block !important;}&.last{width:4px !important;height:4px !important;margin:0 8px 3px 8px !important;display:inline-block !important;}&.outside{width:0 !important;margin:0 !important;opacity:0;}&.inside{display:inline-block !important;}&.is-selected{width:10px !important;height:10px !important;margin:0 8px !important;display:inline-block !important;}}}.flickity-prev-next-button{opacity:0.6;border-radius:0;padding-top:70px;width:30px;transition:all 0.25s ease-in-out 0s;", " &.previous{left:-37px;}&.next{right:-37px;}&:hover{opacity:1;background:#efefef;}&:disabled{opacity:0.1;}", "}"], function (props) {
  return "".concat(props.pictureMediumHeight, "px");
}, media.screenMdMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      min-height: unset;\n    "]))), function (props) {
  return props.mainPictureMaxHeight != null ? "".concat(props.mainPictureMaxHeight, "px") : "100%";
}, media.screenMdMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n    "]))), media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      display: block;\n      height: 40px;\n      line-height: 40px;\n      position: relative;\n      position: static;\n    "]))), media.screenXsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n    "]))), media.screenMdMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: -25px;\n    "]))));
var ItemWrapper = exports.ItemWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-ch91bw-2"
})(["width:100%;&.is-selected{display:block;}"]);
var WrapperNavPics = exports.WrapperNavPics = _styledComponents["default"].div.withConfig({
  componentId: "sc-ch91bw-3"
})(["width:100%;img{height:", "px;margin-right:10px;cursor:pointer;}div.secondaryf{margin-right:0;display:block;", "}div.secondaryf:not(.flickity-enabled){overflow:hidden;height:85px;}"], function (props) {
  return props.secondaryViewerHeight;
}, media.screenMdMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n    "]))));
var NavPicsWrapper = exports.NavPicsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-ch91bw-4"
})(["&.is-nav-selected{img{border-color:", ";border-radius:2px;border-style:solid;border-width:1px;box-shadow:0px 0px 10px 0px ", ";}}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var ZoomContainer = exports.ZoomContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-ch91bw-5"
})(["position:absolute;z-index:1;display:flex;height:", "px;align-items:center;transform:translateX(545px);"], function (props) {
  return props.viewerWidth;
});
var WrapperVideo = exports.WrapperVideo = _styledComponents["default"].div.withConfig({
  componentId: "sc-ch91bw-6"
})(["width:100%;", " video{display:none;}&.is-selected video{display:block;}"], function (props) {
  return props.minHeightVideo ? "min-height: ".concat(props.minHeightVideo, "px;") : "";
});