"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisitorAccountWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
var media = _responsive["default"].media();

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme

var VisitorAccountWrapper = exports.VisitorAccountWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-uv2den-0"
})(["overflow:hidden;margin:auto;width:70%;.form-col{width:45%;margin:0 4.33% 30px 0;float:left;", ";", ";", ";.partialVisitorType{margin-top:29px;}p{margin:3px 0 10px;font-size:13px;}.type-text{width:89%;margin:25px 0 0;padding:8px 5%;display:block;}.type-radio{margin:0 5px 0 10px;position:relative;top:1px;}input,select{webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:8px 12px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0px;text-shadow:none;background-color:#f6f6f6;border:2px solid rgba(0,0,0,0.06);color:#666;font-size:14px;box-sizing:border-box;}.geosuggest{width:100%;}.geosuggest__input{width:89%;margin:25px 0 0;padding:8px 5%;display:block;}.geosuggest__input:focus{border-color:#267dc0;box-shadow:0 0 0 transparent;}.geosuggest__suggests{position:absolute;padding:5px;margin-top:-1px;background:#fff;border:1px solid #dadbdf;overflow-x:hidden;overflow-y:auto;list-style:none;z-index:5;-webkit-transition:max-height 0.2s,border 0.2s;transition:max-height 0.2s,border 0.2s;}.geosuggest__suggests--hidden{max-height:0;overflow:hidden;border-width:0;display:none;}.geosuggest__item{padding:0.5em 0.65em;cursor:pointer;}.geosuggest__item:hover,.geosuggest__item:focus{background:#f5f5f5;}.geosuggest__item--active{background:#267dc0;color:#fff;}.geosuggest__item--active:hover,.geosuggest__item--active:focus{background:#ccc;}.geosuggest__item__matched-text{font-weight:bold;}.labelVisitorContainer{text-align:center;width:89%;label.visitorType{display:block;margin:0 0 10px 0;}}}.submit-button{clear:both;}.actions{text-align:center;& > button{margin-bottom:50px;}}#linkTooglefieldsPassword{text-decoration:underline;color:#005596;font-size:10px;cursor:pointer;}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""]))), media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      display: block;\n      float: none;\n    "]))));