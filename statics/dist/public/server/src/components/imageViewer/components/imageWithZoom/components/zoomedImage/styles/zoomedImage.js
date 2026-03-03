"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomedPicture = exports.ZoomWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../styles/responsive"));
var _picture = _interopRequireDefault(require("../../../../../../picture"));
var _templateObject;
var media = _responsive["default"].media();
var ZoomedPicture = exports.ZoomedPicture = (0, _styledComponents["default"])(_picture["default"]).attrs(function (props) {
  return {
    style: {
      height: props.height,
      width: props.width,
      left: "-".concat(props.positionX, "px"),
      top: "-".concat(props.positionY, "px")
    }
  };
}).withConfig({
  componentId: "sc-1am6uiw-0"
})(["position:absolute;img{display:block;}"]);
var ZoomWrapper = exports.ZoomWrapper = _styledComponents["default"].div.attrs(function (props) {
  return {
    style: {
      height: props.height,
      width: props.width
    }
  };
}).withConfig({
  componentId: "sc-1am6uiw-1"
})(["position:relative;overflow:hidden;willchange:\"transform, opacity\";", ""], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: none;\n  "]))));