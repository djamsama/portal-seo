"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceWrapper = exports.PriceValue = exports.PriceLegend = exports.MainSupplierWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _supplierDetails = require("../../../../../../../../../components/supplierDetails/styles/supplierDetails");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var media = _responsive["default"].media();
var mobileMedia = _responsive["default"].specificMaxMedia(640);
var MainSupplierWrapper = exports.MainSupplierWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-wxrg6-0"
})(["flex:1;", " ", ";", "{margin:30px auto 20px 0;> a{padding:12px 35px 12px 50px;font-size:1.5em;min-width:335px;&:before{font-size:1.4em;top:calc(50% - 0.5em);}", ";}}", "{margin-bottom:10px;}", "{", ";}", "{> div{min-width:110px;}&.mobile{> div{min-width:142px;}}}"], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 0px;\n  "]))), mobileMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      padding: 25px 0px 0px 0px;\n  "]))), _supplierDetails.Actions, mobileMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        min-width: auto;\n      "]))), _supplierDetails.PriceButton, _supplierDetails.Location, mobileMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 10px;\n    "]))), _supplierDetails.RatingDetails);
var PriceWrapper = exports.PriceWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-wxrg6-1"
})(["flex-grow:1;flex-shrink:1;width:100%;", ";"], mobileMedia(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: 30px;\n    padding: 0px 10px 0px 10px;\n"]))));
var PriceLegend = exports.PriceLegend = _styledComponents["default"].div.withConfig({
  componentId: "sc-wxrg6-2"
})(["color:#999;"]);
var PriceValue = exports.PriceValue = _styledComponents["default"].div.withConfig({
  componentId: "sc-wxrg6-3"
})(["display:flex;flex-direction:column;font-size:36px;line-height:1;color:#272727;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;.tax-info{font-size:0.35em;color:#555;}"]);