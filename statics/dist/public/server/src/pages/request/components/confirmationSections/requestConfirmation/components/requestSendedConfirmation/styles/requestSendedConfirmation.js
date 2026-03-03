"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxtSupplier = exports.Title = exports.SupplierBlock = exports.Subtitle = exports.Logo = exports.ImgConfirm = exports.ImageWrapper = exports.CustomGridRow = exports.ConfirmationWhiteBlock = exports.ConfirmWrapper = exports.CompanyListWrapper = exports.CompanyListContainer = exports.CompanyBlock = exports.CompaniesContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var _responsive = _interopRequireDefault(require("../../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var specificMaxMedia = _responsive["default"].specificMaxMedia(600);
// type ThemeProps = {
//   theme?: Theme
// };

var CustomGridRow = exports.CustomGridRow = (0, _styledComponents["default"])(_semanticUiReact.GridRow).withConfig({
  componentId: "sc-sqemd0-0"
})(["", " ", ""], function (props) {
  return props.noPaddinBottom && "\n    padding-bottom: 0 !important;\n  ";
}, function (props) {
  return props.noPaddinTop && "\n    padding-top: 0 !important;\n  ";
});
var ConfirmationWhiteBlock = exports.ConfirmationWhiteBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-1"
})(["{display:block;max-width:1020px;margin:auto auto 10px;padding-bottom:30px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Century Gothic\",Verdana,sans-serif;background-color:#fff;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1),0 -1px 5px rgba(0,0,0,0.1);", ";}.rowContainer{width:100%}.row{margin:auto;justify-content:center;}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      height: auto;\n    "]))));

// Conteneur principal avec titre et sous-titre
var CompanyListContainer = exports.CompanyListContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-2"
})(["background-color:#f2e6f9;;padding:32px 20px 20px;width:100%;max-width:1020px;"]);
var CompanyListWrapper = exports.CompanyListWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-3"
})(["max-width:80%;margin:0 auto;"]);

// Titre et sous-titre
var Title = exports.Title = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-4"
})(["display:flex;align-items:flex-start;color:#b151e2;font-family:\"Open Sans\",Arial,sans-serif;font-size:14px;line-height:18px;font-weight:bold;margin-bottom:10px;> span{line-height:18px;}.recoTitle{font-size:30px;}i{font-size:30px;}"]);
var Subtitle = exports.Subtitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-5"
})(["padding-left:9px;font-family:\"Open Sans\",Arial,sans-serif;font-size:16px;margin-bottom:10px;text-align:left;"]);

// Conteneur de la liste des sociétés
var CompaniesContainer = exports.CompaniesContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-6"
})(["display:flex;flex-wrap:wrap;justify-content:left;"]);

// Styles des blocs de société
var CompanyBlock = exports.CompanyBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-7"
})(["flex:1 1 0px;margin:10px 10px 10px 50px;padding:20px;background-color:white;text-align:center;max-width:200px;.logo{height:64px;display:flex;align-items:center;}&:first-child{margin-left:9px;}", ""], specificMaxMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 10px 10px 10px 10px;\n  "]))));

// Styles pour le logo
var Logo = exports.Logo = _styledComponents["default"].img.withConfig({
  componentId: "sc-sqemd0-8"
})(["max-width:100%;height:auto;"]);
var TxtSupplier = exports.TxtSupplier = _styledComponents["default"].span.withConfig({
  componentId: "sc-sqemd0-9"
})(["font-size:1.9em;font-weight:bold;line-height:1.33em;font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;.drdRequestCustom{font-size:30px;}"]);
var ImgConfirm = exports.ImgConfirm = _styledComponents["default"].img.withConfig({
  componentId: "sc-sqemd0-10"
})(["margin:auto;max-height:", ";"], function (props) {
  return props.maxHeight ? props.maxHeight : "inherit";
});
var ImageWrapper = exports.ImageWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-11"
})(["margin:auto;width:41%;max-height:", ";", ";"], function (props) {
  return props.maxHeight ? props.maxHeight : "inherit";
}, media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 170px;\n    img {\n      width: 100%;\n    }\n  "]))));
var ConfirmWrapper = exports.ConfirmWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-12"
})(["width:100%;display:block;margin-left:50px;margin-right:50px;margin-top:30px;", ""], specificMaxMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 20px;\n    margin-right: 20px;\n  "]))));
var SupplierBlock = exports.SupplierBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-sqemd0-13"
})(["text-align:center;max-height:100%;margin-top:20px;"]);