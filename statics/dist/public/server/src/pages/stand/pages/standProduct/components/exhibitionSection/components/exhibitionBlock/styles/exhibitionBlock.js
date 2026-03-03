"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreInfo = exports.ExhibitionTitle = exports.ExhibitionLogo = exports.ExhibitionInfoWrapper = exports.ExhibitionDescription = exports.ExhibitionCard = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var ExhibitionCard = exports.ExhibitionCard = _styledComponents["default"].div.withConfig({
  componentId: "sc-51les6-0"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;"]);
var ExhibitionLogo = exports.ExhibitionLogo = _styledComponents["default"].div.withConfig({
  componentId: "sc-51les6-1"
})(["width:145px;", ";img{border:1px solid #f6f6f6;width:100%;height:auto;max-width:100%;}"], media.screenXxsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 120px;\n  "]))));
var ExhibitionDescription = exports.ExhibitionDescription = _styledComponents["default"].div.withConfig({
  componentId: "sc-51les6-2"
})(["flex:1;color:#555555;margin-left:20px;padding-top:10px;padding-bottom:10px;"]);
var ExhibitionTitle = exports.ExhibitionTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-51les6-3"
})(["color:#555555;font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;font-weight:600;font-size:14px;"]);
var ExhibitionInfoWrapper = exports.ExhibitionInfoWrapper = _styledComponents["default"].p.withConfig({
  componentId: "sc-51les6-4"
})(["color:#999999;font-size:12px;line-height:20px;font-weight:600;align-items:center;margin:0px;span{margin-right:7px;}"]);
var MoreInfo = exports.MoreInfo = _styledComponents["default"].div.withConfig({
  componentId: "sc-51les6-5"
})(["font-size:12px;color:#555555;span{font-size:12px;font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;font-weight:600;text-decoration:underline;}.fa{margin-right:5px;}"]);