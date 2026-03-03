"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainSupplierWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _supplierDetails = require("../../../../../../../../../components/supplierDetails/styles/supplierDetails");
var _templateObject;
var mobileMedia = _responsive["default"].specificMaxMedia(640);
var MainSupplierWrapper = exports.MainSupplierWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-pzirr5-0"
})(["", "{margin:4px auto 20px 0;> a{padding:12px 35px 12px 50px;font-size:1.5em;min-width:335px;&:before{font-size:1.4em;top:calc(50% - 0.5em);}", ";}}", "{margin-bottom:10px;}"], _supplierDetails.Actions, mobileMedia(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        min-width: auto;\n      "]))), _supplierDetails.PriceButton);