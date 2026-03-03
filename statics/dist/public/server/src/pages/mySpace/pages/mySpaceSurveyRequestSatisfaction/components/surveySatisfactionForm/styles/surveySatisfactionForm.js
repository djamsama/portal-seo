"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleForm = exports.SurveySatisfactionWrapper = exports.FormBlocContainer = exports.FormBlocAnswer = exports.FormBlocAmount = exports.AnswerTitle = exports.AmountBloc = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var SurveySatisfactionWrapper = exports.SurveySatisfactionWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-tnvqvg-0"
})(["margin:auto;width:70%;overflow:hidden;padding:5px;", " ", ";font:15px \"Century Gothic\",Arial,sans-serif;color:#666;.submit{clear:both;display:block;margin:0 auto 50px;padding:10px 30px;font:15px \"Century Gothic\",Verdana,sans-serif;border:none;border-radius:4px;cursor:pointer;color:#fff;background-color:#555;:hover{color:#fff;background-color:#959595;}}}"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 970px;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n    max-width: 970px;\n  "]))));
var TitleForm = exports.TitleForm = _styledComponents["default"].div.withConfig({
  componentId: "sc-tnvqvg-1"
})(["margin-bottom:30px;text-align:center;font-size:21px;font-weight:bold;margin-bottom:25px;.subTitle{font-size:16px;}.content{margin-bottom:35px;font-size:1.25em;}}"]);
var FormBlocContainer = exports.FormBlocContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-tnvqvg-2"
})(["padding:0px 0px 20px 0px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;-webkit-box-shadow:0 0 10px rgba(0,0,0,0.25);box-shadow:0 0 10px rgba(0,0,0,0.25);margin-bottom:40px;}"]);
var FormBlocAmount = exports.FormBlocAmount = _styledComponents["default"].div.withConfig({
  componentId: "sc-tnvqvg-3"
})(["padding-left:40px;color:#666;font:15px \"Century Gothic\",Arial,sans-serif;.type-checkbox{margin:0 10px 15px 0;position:relative;top:2px;}.type-radio{margin:0 5px 0 40px;position:relative;top:2px;}.type-textarea{width:100%;padding:8px 12px;background-color:#f6f6f6;border:2px solid rgba(0,0,0,0.06);color:gray;}}"]);
var FormBlocAnswer = exports.FormBlocAnswer = (0, _styledComponents["default"])(FormBlocAmount).withConfig({
  componentId: "sc-tnvqvg-4"
})(["padding-right:40px;"]);
var AnswerTitle = exports.AnswerTitle = _styledComponents["default"].h2.withConfig({
  componentId: "sc-tnvqvg-5"
})(["margin-bottom:20px;font-size:1.3em;padding:11px;border-left:3px ", " solid;}"], function (props) {
  return props.theme.mainLight;
});
var AmountBloc = exports.AmountBloc = _styledComponents["default"].div.withConfig({
  componentId: "sc-tnvqvg-6"
})(["width:40%;.type-select,.type-number{padding:8px 12px;font-size:1.25em;background-color:#f6f6f6;border:2px solid rgba(0,0,0,0.06);width:100%;font:15px \"Century Gothic\",Verdana,sans-serif;}"]);