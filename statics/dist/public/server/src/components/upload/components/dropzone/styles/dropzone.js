"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropzoneSection = exports.DropzoneContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var getColor = function getColor(props) {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};
var DropzoneContainer = exports.DropzoneContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-xcbn0b-0"
})(["flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;border-width:2px;border-radius:2px;border-color:", ";border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;transition:border 0.24s ease-in-out;width:100%;margin-top:10px;cursor:pointer;.uploadIcon{font-size:2em;margin-bottom:5px;}"], function (props) {
  return getColor(props);
});
var DropzoneSection = exports.DropzoneSection = _styledComponents["default"].section.withConfig({
  componentId: "sc-xcbn0b-1"
})([".rejected{color:red;line-height:30px;font-style:italic;}"]);