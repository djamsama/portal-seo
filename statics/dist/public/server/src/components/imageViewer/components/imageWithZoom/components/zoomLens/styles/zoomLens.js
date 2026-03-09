"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomLensStyled = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var ZoomLensStyled = exports.ZoomLensStyled = _styledComponents["default"].div.attrs(function (props) {
  return {
    style: {
      left: props.left,
      top: props.top,
      height: props.height * 2,
      width: props.width * 2
    }
  };
}).withConfig({
  componentId: "sc-1ic1gni-0"
})(["z-index:80;position:absolute;background-color:lightgrey;opacity:0.5;cursor:pointer;", ""], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      display: none;\n    "]))));