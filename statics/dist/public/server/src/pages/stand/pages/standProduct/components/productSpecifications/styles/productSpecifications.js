"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductSpecificationsList = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var ProductSpecificationsList = exports.ProductSpecificationsList = _styledComponents["default"].dl.withConfig({
  componentId: "sc-mgb5nu-0"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;word-break:break-word;dt:nth-child(4n + 3),dt:nth-child(4n + 3) + dd{background-color:#f0f0f0;}dt,dd{font-size:1.2em;-webkit-box-sizing:border-box;box-sizing:border-box;}dt{width:33%;border-right:3px solid #fff;padding:10px;font-weight:bold;}dd{margin:0;width:67%;padding:10px;}", ";"], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    dt,dd {\n      -ms-flex-preferred-size: 100%;\n      width: 100%;\n      padding-left: 10px;\n      padding-right: 10px;\n      border-right: none;\n    }\n    dt{\n      padding-bottom: 0;\n    }\n    dd{\n      padding-top: 0;\n    }\n  "]))));