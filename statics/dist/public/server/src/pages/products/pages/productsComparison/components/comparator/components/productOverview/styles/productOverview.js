"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomIn = exports.StyledModal = exports.ProductWrapperImage = exports.ProductWrapper = exports.ProductLabel = exports.ProductImg = exports.ProductBrand = exports.CompanyLogo = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _semanticUiReact = require("semantic-ui-react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var ProductWrapper = exports.ProductWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jms7ix-0"
})(["display:flex;flex-direction:column;max-width:200px;margin-left:auto;margin-right:auto;.imageWrapper{position:relative;cursor:pointer;&:hover{.zoomIn{display:block;}}}"]);
var ProductWrapperImage = exports.ProductWrapperImage = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jms7ix-1"
})(["width:210px;height:210px;line-height:0;text-align:center;vertical-align:middle;display:table-cell;margin:0 0 10px;cursor:pointer;position:relative;"]);
var ProductImg = exports.ProductImg = _styledComponents["default"].img.withConfig({
  componentId: "sc-1jms7ix-2"
})(["max-height:210px;max-width:210px;"]);
var ZoomIn = exports.ZoomIn = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jms7ix-3"
})(["position:absolute;top:50%;left:50%;margin-top:-25px;margin-left:-25px;display:none;background:rgba(0,0,0,0.6);color:#fff;font-size:15px;border-radius:8px;width:50px;height:50px;text-align:center;line-height:60px;& svg{stroke-width:3px;}"]);
var ProductLabel = exports.ProductLabel = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jms7ix-4"
})(["font-family:HurmeGeometricSans_SemiBold;color:#555;text-align:center;padding-top:10px;font-size:1.167em;line-height:1em;font-weight:700;text-transform:uppercase;"]);
var ProductBrand = exports.ProductBrand = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jms7ix-5"
})(["font-family:Arial;color:#9b9c9b;text-align:center;font-size:1em;"]);
var CompanyLogo = exports.CompanyLogo = _styledComponents["default"].img.withConfig({
  componentId: "sc-1jms7ix-6"
})(["margin:15px 0;max-height:25px;object-fit:contain;"]);
var StyledModal = exports.StyledModal = (0, _styledComponents["default"])(_semanticUiReact.Modal).withConfig({
  componentId: "sc-1jms7ix-7"
})(["&&&{border-radius:0;box-shadow:none;width:1200px;height:800px;", ";.close{top:0;right:0;display:inline-block;width:18px;height:18px;overflow:hidden;opacity:0.2;margin:10px;&:hover{opacity:0.3;&::before,&::after{background-color:#000;}}&::before,&::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background-color:#000 !important;}&::before{transform:rotate(45deg);}&::after{transform:rotate(-45deg);}}.header{height:40px;color:#a0a0a0;padding-top:10px;}}overflow-y:auto;.imgViewer{height:calc(100% - 40px);}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      /* Passage en full-screen. */\n      width: 100%;\n      height: 100%;\n      margin: -1em 0 0 0 !important;\n      "]))));