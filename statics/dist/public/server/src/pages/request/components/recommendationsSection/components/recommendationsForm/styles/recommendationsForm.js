"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxtNoReco = exports.TextWrapper = exports.RecommendationsFormWrapper = exports.RecommendationTitle = exports.RecommendationSubtitle = exports.RecommendationMultiInput = exports.RecommendationBudgetInput = exports.RecommendationAdvice = exports.NoRecoWrapper = exports.NoRecoMessageBlock = exports.NoRecoIconWrapper = exports.MessageBlock = exports.IconWrapper = exports.FaExclamationBox = exports.ConfirmationWhiteBlock = exports.ConfirmWrapper = exports.Background = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _formWrapper = require("../../../../../styles/formWrapper");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0;
var media = _responsive["default"].media();
var specificMaxMedia = _responsive["default"].specificMaxMedia(600);
var RecommendationsFormWrapper = exports.RecommendationsFormWrapper = (0, _styledComponents["default"])(_formWrapper.FormWrapper).withConfig({
  componentId: "sc-1rrgi5z-0"
})(["padding-left:0;padding-right:0;padding-top:0;width:100%;div{flex-basis:initial;width:auto;}&&.ui.form{& > div,& > div.field{max-width:1020px;margin-left:auto;margin-right:auto;}input,input:not([type]),input:not([type]):focus,textarea,div[role=\"combobox\"]{background-color:#fff;font-size:1em;min-width:14rem;", ";}label{color:#555;font-weight:bold !important;}}.ui.inline.loader.active{margin-right:5px;}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        width:100%;\n        min-width:unset;\n      "]))));
var TextWrapper = exports.TextWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-1"
})(["text-align:center;margin-top:-235px;margin-bottom:30px;font-weight:700;", ";"], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-top: -285px;\n  "]))));
var RecommendationTitle = exports.RecommendationTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-2"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:30px;line-height:30px;color:#fff;margin-bottom:10px;", ";"], media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 20px;\n    line-height: 20px;\n  "]))));
var RecommendationSubtitle = exports.RecommendationSubtitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-3"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:18px;margin-bottom:50px;", ";"], media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 30px;\n  "]))));
var RecommendationAdvice = exports.RecommendationAdvice = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-4"
})(["font-family:Arial,sans-serif;font-weight:initial;font-size:14px;margin-bottom:15px;"]);
var RecommendationMultiInput = exports.RecommendationMultiInput = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-5"
})(["display:flex;justify-content:space-between;width:100%;", " ", ";.fields{margin:0;}.fields > .field:first-child{padding-left:0;}.fields > .field:last-child{padding-right:0;}.field:nth-of-type(2):not(.textarea){margin-left:0 !important;}"], function (props) {
  return !props.isMobile && "\n    min-width: 960px;\n  ";
}, media.screenXsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n     display:block;\n  "]))));
var RecommendationBudgetInput = exports.RecommendationBudgetInput = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-6"
})(["display:flex;justify-content:space-between;width:auto;.field:last-child{padding-left:10px;", ";}.field:first-child{", ";}"], media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 40%;\n    "]))), media.screenXsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 60%;\n    "]))));
var ConfirmationWhiteBlock = exports.ConfirmationWhiteBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-7"
})(["{display:block;max-width:1020px;margin:auto auto 10px;padding-bottom:50px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Century Gothic\",Verdana,sans-serif;background-color:#fff;-webkit-box-shadow:0 5px 5px rgba(0,0,0,0.1);box-shadow:0 5px 5px rgba(0,0,0,0.1),0 -1px 5px rgba(0,0,0,0.1);", ";}"], media.screenXsMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n    "]))));
var ConfirmWrapper = exports.ConfirmWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-8"
})(["width:100%;display:flex;margin-left:50px;margin-right:50px;margin-top:30px;", " background-image:url(", "/common/request/bkg.png);background-repeat:no-repeat;background-position-x:center;"], specificMaxMedia(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 20px;\n    margin-right: 20px;\n  "]))), function (props) {
  return props.theme.pathImg;
});
var NoRecoWrapper = exports.NoRecoWrapper = (0, _styledComponents["default"])(ConfirmWrapper).withConfig({
  componentId: "sc-1rrgi5z-9"
})(["background-image:none;"]);
var IconWrapper = exports.IconWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-10"
})(["margin:auto;text-align:right;width:41%;margin-right:15px;max-height:", ";"], function (props) {
  return props.maxHeight ? props.maxHeight : "inherit";
});
var NoRecoIconWrapper = exports.NoRecoIconWrapper = (0, _styledComponents["default"])(IconWrapper).withConfig({
  componentId: "sc-1rrgi5z-11"
})(["width:auto;font-size:3em;"]);
var FaExclamation = _styledComponents["default"].i.attrs({
  className: "fa fa-exclamation-circle"
}).withConfig({
  componentId: "sc-1rrgi5z-12"
})([""]);
var FaExclamationBox = exports.FaExclamationBox = (0, _styledComponents["default"])(FaExclamation).withConfig({
  componentId: "sc-1rrgi5z-13"
})(["color:", ";font:normal normal normal 50px/1 FontAwesome;"], function (props) {
  return props.theme.mainLight;
});
var TxtNoReco = exports.TxtNoReco = _styledComponents["default"].span.withConfig({
  componentId: "sc-1rrgi5z-14"
})(["font-size:1.7em;line-height:1.33em;font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;"]);
var MessageBlock = exports.MessageBlock = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-15"
})(["width:59%;text-align:left;max-height:100%;margin-top:20px;"]);
var NoRecoMessageBlock = exports.NoRecoMessageBlock = (0, _styledComponents["default"])(MessageBlock).withConfig({
  componentId: "sc-1rrgi5z-16"
})(["width:auto;"]);
var Background = exports.Background = _styledComponents["default"].div.withConfig({
  componentId: "sc-1rrgi5z-17"
})(["margin-top:75px;width:100vw !important;position:static;left:0;height:290px;background-color:", ";margin-left:-50px;margin-right:-50px;", ";"], function (props) {
  return props.theme.mainLightPastel;
}, media.screenXsMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: -10px;\n    margin-right: -10px;\n  "]))));