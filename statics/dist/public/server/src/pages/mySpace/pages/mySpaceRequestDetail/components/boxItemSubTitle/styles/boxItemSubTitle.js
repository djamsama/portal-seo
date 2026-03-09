"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitleDiv = exports.RequestDetailInfo = exports.RatingDiv = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3;
var media = _responsive["default"].media();
var RequestDetailInfo = exports.RequestDetailInfo = _styledComponents["default"].div.withConfig({
  componentId: "sc-b8x92u-0"
})(["", ""], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      margin-bottom:5px;\n  "]))));
var RatingDiv = exports.RatingDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-b8x92u-1"
})(["margin-left:10px;.rating-detail{margin-right:18px;}.rating-star{margin-right:10px;}", ""], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-left: 0px;\n  "]))));
var SubTitleDiv = exports.SubTitleDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-b8x92u-2"
})(["font-family:\"Century Gothic\",Verdana,sans-serif;font-size:14px;font-weight:400;margin-bottom:15px;margin-top:15px;display:flex;", ""], media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: row;\n    flex-wrap: wrap;\n  "]))));