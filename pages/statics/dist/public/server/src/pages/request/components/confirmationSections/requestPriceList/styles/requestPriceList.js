"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewerWrapper = exports.PriceListWrapper = exports.MainWrapper = exports.Disclaimer = exports.ContactWrapper = exports.Contact = exports.ButtonWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../components/styles/responsive"));
var _supplierDetails = _interopRequireDefault(require("../../../../../../components/supplierDetails"));
var _supplierDetails2 = require("../../../../../../components/supplierDetails/styles/supplierDetails");
var _documentViewer = require("../../../../../../components/documentViewer/styles/documentViewer");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var media = _responsive["default"].media();
var specificMaxMedia = _responsive["default"].specificMaxMedia(600);
var BlockStyled = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eybicn-0"
})(["background-color:rgb(255,255,255);padding-left:0;padding-right:0;box-shadow:0 2px 2px rgba(0,0,0,0.1);"]);
var PriceListWrapper = exports.PriceListWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eybicn-1"
})(["width:100%;margin-bottom:30px;"]);
var ViewerWrapper = exports.ViewerWrapper = (0, _styledComponents["default"])(BlockStyled).withConfig({
  componentId: "sc-1eybicn-2"
})(["width:100%;min-width:100%;margin:0 0 20px 0;"]);
var MainWrapper = exports.MainWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eybicn-3"
})(["display:flex;flex-direction:row;width:100%;min-height:1210px;", ";"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction:column;\n    min-height: auto;\n    ", " {\n      height: 500px;\n    }\n  "])), _documentViewer.DocumentViewerDivContent));
var ContactWrapper = exports.ContactWrapper = (0, _styledComponents["default"])(BlockStyled).withConfig({
  componentId: "sc-1eybicn-4"
})(["padding:20px 20px;width:100%;overflow:hidden;margin-bottom:auto;margin-bottom:30px;"]);
var ButtonWrapper = exports.ButtonWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eybicn-5"
})(["width:50%;", ";margin:auto;margin-top:40px;"], specificMaxMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 80%;\n  "]))));
var Disclaimer = exports.Disclaimer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1eybicn-6"
})(["float:left;display:flex;vertical-align:bottom;flex-direction:column-reverse;height:95px;padding-bottom:10px;color:#999;text-align:center;width:100%;"]);
var Contact = exports.Contact = (0, _styledComponents["default"])(_supplierDetails["default"]).withConfig({
  componentId: "sc-1eybicn-7"
})(["flex-direction:row;", "{word-break:break-word;}", "{> div:first-child{min-width:80px;}}", "{margin-right:25px;margin-top:auto;}", "{min-width:30%;max-width:50%;margin:auto 0 auto auto;overflow:hidden;", ";> a{padding:10px 15px 10px 40px;&:before{font-size:1.2em;top:calc(50% - 0.5em);}}}", ";", ";", ";"], _supplierDetails2.Review, _supplierDetails2.RatingDetails, _supplierDetails2.Location, _supplierDetails2.Actions, specificMaxMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      padding-top: 20px;\n      max-width: 80%;\n      width: auto;\n      margin-right: auto;\n    "]))), media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    ", " {\n      flex-direction: row;\n    }\n    ", " {\n      margin: auto 20px 0 20px;\n    }\n  "])), _supplierDetails2.SupplierIdentity, _supplierDetails2.Location), media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    ", " {\n      flex-direction: column;\n    }\n    ", " {\n      margin: 20px 0 0;\n    }\n  "])), _supplierDetails2.SupplierIdentity, _supplierDetails2.Location), specificMaxMedia(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n  "]))));