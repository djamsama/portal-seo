"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCatalogLink = exports.StyledCatalogImg = exports.PdfBookStyle = exports.IconZoomStand = exports.CornerPage = exports.CornerBottomLeft = exports.CatalogWrapper = exports.CatalogThumbnailTile = exports.AddBookmark = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _link = require("../../../../../../../components/link");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var maxMedia = _responsive["default"].specificMaxMedia(639);
var minMedia = _responsive["default"].specificMinMedia(640);
var media = _responsive["default"].media();

// Style du bloc de la liste des catalogues.
var CatalogWrapper = exports.CatalogWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-x6uey0-0"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px;align-content:flex-end;", " ", ";", ""], maxMedia(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    -webkit-box-orient:vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    text-align: left;\n  "]))), minMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    -webkit-box-pack:justify;\n    -ms-flex-pack: justify;\n    justify-content: right;\n    text-align: center;\n  "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 30px;\n    padding-right: 38px;\n    max-width: 100%;\n  "]))));
var CatalogThumbnailTile = exports.CatalogThumbnailTile = _styledComponents["default"].div.withConfig({
  componentId: "sc-x6uey0-1"
})([""]);
var StyledCatalogImg = exports.StyledCatalogImg = _styledComponents["default"].div.withConfig({
  componentId: "sc-x6uey0-2"
})(["position:relative;img{display:block;border-color:#d9d9d9 #d9d9d9 #bfbfbf #bfbfbf;border-style:solid;border-width:1px;position:relative;z-index:1;", " ", "}"], media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 99%;\n    "]))), media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n      max-width: 100%;\n      height: auto;\n    "]))));
var StyledCatalogLink = exports.StyledCatalogLink = (0, _styledComponents["default"])(_link.VeLink).withConfig({
  componentId: "sc-x6uey0-3"
})(["cursor:pointer;&:hover > div.corner{z-index:3;background:url(https://img.virtual-expo.com/media/ps/images/common/stand/catalog/corner-page.png) no-repeat;}&:hover > span.zoom{z-index:3;background:url(https://img.virtual-expo.com/media/ps/images/common/stand/icon-zoom-stand.png) no-repeat scroll center center;}"]);
var CornerBottomLeft = exports.CornerBottomLeft = _styledComponents["default"].span.withConfig({
  componentId: "sc-x6uey0-4"
})(["width:0;height:0;top:-1px;right:0;display:block;background-repeat:no-repeat;position:absolute;background-position:left bottom;bottom:-3px;"]);
var IconZoomStand = exports.IconZoomStand = _styledComponents["default"].span.withConfig({
  componentId: "sc-x6uey0-5"
})(["position:absolute;left:0;bottom:0;width:100%;height:100%;z-index:3;"]);
var CornerPage = exports.CornerPage = _styledComponents["default"].div.withConfig({
  componentId: "sc-x6uey0-6"
})(["right:-1px;width:45px;height:45px;background:none;position:absolute;bottom:-1px;"]);
var PdfBookStyle = exports.PdfBookStyle = _styledComponents["default"].div.withConfig({
  componentId: "sc-x6uey0-7"
})(["right:-11px;height:99%;width:100%;position:absolute;bottom:0;background:url(https://img.virtual-expo.com/media/ps/images/common/stand/catalog/img-bkg.gif) no-repeat right center;"]);
var iconCss = (0, _styledComponents.css)(["text-align:center;z-index:4;cursor:pointer;margin:0px 0 0;border-radius:100%;width:30px;height:30px;display:inline-block;background-color:#ffffff;line-height:33px;box-shadow:0 0 5px 0 rgba(0,0,0,0.5);"]);
var AddBookmark = exports.AddBookmark = _styledComponents["default"].div.withConfig({
  componentId: "sc-x6uey0-8"
})(["position:absolute;top:12px;right:12px;vertical-align:middle;", " .bookmarked{", " background-color:", ";}& svg{margin-top:5px;stroke-width:2.5px;}.bookmarked{& svg{stroke:#fff;}& i{stroke:#fff;color:#fff;}}&:hover{background-color:", ";color:#fff;.bookmarked{background-color:#fff;}transition:0.25s ease-in-out 0s;& i{stroke:#fff;color:#fff;}& svg{stroke:#fff;}.bookmarked{& svg{stroke:", ";}& i{color:", ";}}}"], iconCss, iconCss, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});