"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnovationSmallWinner = exports.InnovationSmallNominee = exports.InnovationSmallInnovative = exports.InnovationSmall = exports.InnovationBigWinner = exports.InnovationBigNominee = exports.InnovationBigInnovative = exports.InnovationBig = exports.Innovation = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("./responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var media = _responsive["default"].media();
var Innovation = exports.Innovation = _styledComponents["default"].div.withConfig({
  componentId: "sc-1yhk97u-0"
})(["z-index:1;position:absolute;background-image:url(\"", "/common/pictos/inovo.svg\");"], function (props) {
  return props.theme.pathImg;
});
var InnovationSmall = exports.InnovationSmall = (0, _styledComponents["default"])(Innovation).withConfig({
  componentId: "sc-1yhk97u-1"
})(["width:65px;height:65px;right:10px;bottom:10px;pointer-events:none;"]);
var InnovationBig = exports.InnovationBig = (0, _styledComponents["default"])(Innovation).withConfig({
  componentId: "sc-1yhk97u-2"
})(["width:110px;height:110px;top:77%;left:77%;pointer-events:none;", ";", ";", ";", ";", ";"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    top: 74%;\n    left: 74%;\n  "]))), media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    top: 50%;\n    left: 63%;\n  "]))), media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    top: 65%;\n    left: 77%;\n  "]))), media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    top: 69%;\n    left: 75%;\n  "]))), media.screenXxsMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    top: 52%;\n    left: 50%;\n  "]))));
var InnovationBigInnovative = exports.InnovationBigInnovative = (0, _styledComponents["default"])(InnovationBig).withConfig({
  componentId: "sc-1yhk97u-3"
})(["background-position:0 -66px;"]);
var InnovationBigNominee = exports.InnovationBigNominee = (0, _styledComponents["default"])(InnovationBig).withConfig({
  componentId: "sc-1yhk97u-4"
})(["background-position:-111px -66px;"]);
var InnovationBigWinner = exports.InnovationBigWinner = (0, _styledComponents["default"])(InnovationBig).withConfig({
  componentId: "sc-1yhk97u-5"
})(["background-position:-222px -66px;"]);
var InnovationSmallInnovative = exports.InnovationSmallInnovative = (0, _styledComponents["default"])(InnovationSmall).withConfig({
  componentId: "sc-1yhk97u-6"
})(["background-position:0 0;"]);
var InnovationSmallNominee = exports.InnovationSmallNominee = (0, _styledComponents["default"])(InnovationSmall).withConfig({
  componentId: "sc-1yhk97u-7"
})(["background-position:-66px 0;"]);
var InnovationSmallWinner = exports.InnovationSmallWinner = (0, _styledComponents["default"])(InnovationSmall).withConfig({
  componentId: "sc-1yhk97u-8"
})(["background-position:-132px 0;"]);