"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationValidationWrapper = exports.CGUMessage = exports.CGU = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var QuotationValidationWrapper = exports.QuotationValidationWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-7v4nqd-0"
})(["input{color:rgb(85,85,85);}.type-text,.geosuggest input{margin:0 0 0px;padding:8px 5%;}.type-radio{margin:0 5px 0 10px;position:relative;top:1px;}.field-group{clear:both;margin:0 0 10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;display:-webkit-box;display:-ms-flexbox;display:flex;", " label{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;font-size:1.167em;font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;line-height:1.25em;}div{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;width:100%;&.phone-container{display:flex;flex-wrap:wrap;justify-content:space-between;}&.phone-code{flex:0 0 20%;}&.phone-number{flex:0 0 75%;}&.has-error input,input.has-error{border-color:red;}}input{font-size:1.167em;background-color:#f6f6f6;border:2px solid #e9e9e9;width:100%;&.phone-code{flex:0 0 20%;}&.phone-number{flex:0 0 75%;}", "}select{flex:0 0 50%;background-color:#f6f6f6;border:2px solid rgba(0,0,0,0.06);letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0px;text-shadow:none;}}fieldset{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;margin-bottom:20px;}.wrapper-geosuggest{.geosuggest__suggests{position:absolute;padding:5px;margin-top:-1px;background:#fff;border:1px solid #dadbdf;overflow-x:hidden;overflow-y:auto;list-style:none;z-index:5;-webkit-transition:max-height 0.2s,border 0.2s;transition:max-height 0.2s,border 0.2s;}.geosuggest__suggests--hidden{max-height:0;overflow:hidden;border-width:0;display:none;}.geosuggest__item{padding:0.5em 0.65em;cursor:pointer;}.geosuggest__item:hover,.geosuggest__item:focus{background:#f5f5f5;}.geosuggest__item--active{background:#267dc0;color:#fff;}.geosuggest__item--active:hover,.geosuggest__item--active:focus{background:#ccc;}.geosuggest__item__matched-text{font-weight:bold;}}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      flex-direction: column;\n      align-items: flex-start;\n    "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        font-size: 16px;\n      "]))));
var CGU = exports.CGU = _styledComponents["default"].div.withConfig({
  componentId: "sc-7v4nqd-1"
})(["margin-bottom:30px;display:flex;justify-content:space-between;input{align-self:flex-start;}"]);
var CGUMessage = exports.CGUMessage = _styledComponents["default"].div.withConfig({
  componentId: "sc-7v4nqd-2"
})(["margin:-2px 0 0 5px;"]);