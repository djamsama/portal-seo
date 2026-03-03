"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSpinner = exports.SpinnerWrapper = exports.SpinnerSVG = exports.SpinIMG = exports.Section = exports.EmptyDiv = exports.DivOverlay = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var DivOverlay = exports.DivOverlay = _styledComponents["default"].div.withConfig({
  componentId: "sc-sldqsg-0"
})(["position:fixed;z-index:2000;top:0px;bottom:0px;left:0px;right:0px;background-color:rgb(0,0,0);opacity:0.5;"]);
var EmptyDiv = exports.EmptyDiv = _styledComponents["default"].div.withConfig({
  componentId: "sc-sldqsg-1"
})([""]);
var SpinnerWrapper = exports.SpinnerWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-sldqsg-2"
})(["position:", ";z-index:2000;left:50%;top:13%;width:50%;"], function (props) {
  return props.position;
});
var SpinIMG = exports.SpinIMG = _styledComponents["default"].img.withConfig({
  componentId: "sc-sldqsg-3"
})([""]);
var DivText = _styledComponents["default"].div.withConfig({
  componentId: "sc-sldqsg-4"
})(["width:auto;height:auto;color:#67676f;position:relative;left:-15px;font-weight:bold;"]);
var SpinnerSVG = exports.SpinnerSVG = function SpinnerSVG(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledSpinner, {
    viewBox: "0 0 66 66",
    spinnerSize: props.spinnerSize,
    color: props.color
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    className: "path",
    fill: "transparent",
    strokeWidth: "4",
    cx: "33",
    cy: "33",
    r: "30",
    stroke: "url(#gradient)"
  }), /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "gradient"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "50%",
    stopColor: props.color,
    stopOpacity: "1"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "65%",
    stopColor: props.color,
    stopOpacity: ".5"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "100%",
    stopColor: props.color,
    stopOpacity: "0"
  })), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "spinner-dot dot",
    width: "5px",
    height: "5px",
    viewBox: "0 0 66 66",
    x: "37",
    y: "1.5"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    className: "path",
    fill: props.color,
    cx: "33",
    cy: "33",
    r: "30"
  })), /*#__PURE__*/_react["default"].createElement(DivText, {
    color: props.color
  }, props.text, " "));
};
var Section = exports.Section = _styledComponents["default"].section.withConfig({
  componentId: "sc-sldqsg-5"
})(["width:", "px;margin:0 auto;padding:20px;z-index:2000;"], function (props) {
  return props.spinnerSize + 15;
});
var StyledSpinner = exports.StyledSpinner = _styledComponents["default"].svg.withConfig({
  componentId: "sc-sldqsg-6"
})(["left:-", "px;animation:rotate 1.4s linear infinite;-webkit-animation:rotate 1.4s linear infinite;-moz-animation:rotate 1.4s linear infinite;width:", "px;height:", "px;position:relative;& .path{stroke-dasharray:170;stroke-dashoffset:20;}@keyframes rotate{to{transform:rotate(360deg);}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);}}@-moz-keyframes rotate{to{transform:rotate(360deg);}}"], function (props) {
  return Math.round(props.spinnerSize / 2);
}, function (props) {
  return props.spinnerSize;
}, function (props) {
  return props.spinnerSize;
});