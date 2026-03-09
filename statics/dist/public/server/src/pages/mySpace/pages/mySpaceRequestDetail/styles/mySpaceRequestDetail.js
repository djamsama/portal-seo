"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestBoxItemContent = exports.FlewDivRight = exports.FlewDivLeft = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _mySpace = require("../../../styles/mySpace");
var _templateObject, _templateObject2;
var media = _responsive["default"].media();
var FlewDivLeft = exports.FlewDivLeft = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xzd7eb-0"
})(["flex:1 0 200px;box-sizing:border-box;min-width:150px;max-width:30%;margin-right:5px;", ";"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 100%;\n  "]))));
var FlewDivRight = exports.FlewDivRight = _styledComponents["default"].div.withConfig({
  componentId: "sc-1xzd7eb-1"
})(["flex:1 0 200px;box-sizing:border-box;width:80%;min-width:550px;margin-left:5px;", ";"], media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 100%;\n  "]))));
var RequestBoxItemContent = exports.RequestBoxItemContent = (0, _styledComponents["default"])(_mySpace.BoxItemContent).withConfig({
  componentId: "sc-1xzd7eb-2"
})(["padding:20px 25px 0;"]);