"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileWrapper = exports.TileTitle = exports.TileInset = exports.StyledIcon = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _semanticUiReact = require("semantic-ui-react");
var _responsive = require("../../styles/responsive");
var _templateObject, _templateObject2;
var transformEffect = function transformEffect(scaleRatio) {
  if (!scaleRatio) {
    return "scale(1.05)"; // Scale ratio par défaut
  }
  if (scaleRatio && scaleRatio === 1) {
    return "none"; // Pas de changement d'échelle lorsque la valeur vaut 1
  }
  return "scale(".concat(scaleRatio, ")"); // Scale ratio custom
};
var TileWrapper = exports.TileWrapper = _styledComponents["default"].div.attrs(function (props) {
  return {
    "data-cy": props.dataCy
  };
}).withConfig({
  componentId: "sc-1a7juzs-0"
})(["display:block;float:left;margin-left:", "px;margin-right:", "px;padding-left:25px;padding-right:25px;box-sizing:border-box;-webkit-transition:opacity 2s ease-in-out;-moz-transition:opacity 2s ease-in-out;-ms-transition:opacity 2s ease-in-out;-o-transition:opacity 2s ease-in-out;opacity:1;", ";.new-video{position:absolute;top:5px;left:-5px;}.icon-big.new{background-position:-54px 0;}.new-video .icon-big{width:55px;height:22px;}.new-video .icon-big,.new-video .icon-small{background-image:url(", "/common/pictos/tag-new-eco-green.svg);margin-bottom:2px;background-repeat:no-repeat;}.homeTile{", "}", ""], function (props) {
  return props.isIE ? "-1" : "0";
}, function (props) {
  return props.isIE ? "-1" : "0";
}, function (props) {
  return props.mediaTemplates;
}, function (props) {
  return props.theme.pathImg;
}, _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      margin: auto;\n      width: 100%;\n    "]))), _responsive.media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    float: none;\n    width: 90%;\n\n  "]))));
var TileInset = exports.TileInset = _styledComponents["default"].div.withConfig({
  componentId: "sc-1a7juzs-1"
})(["overflow:hidden;position:relative;-webkit-transition:0.125s ease-in-out 0s;-moz-transition:0.125s ease-in-out 0s;-o-transition:0.125s ease-in-out 0s;transition:0.125s ease-in-out 0s;background-color:#fff;box-shadow:0 5px 5px rgba(0,0,0,0.1),0 -1px 5px rgba(0,0,0,0.1);height:100%;:hover{-webkit-transform:", ";-moz-transform:", ";-ms-transform:", ";-o-transform:", ";transform:", ";}"], function (props) {
  return transformEffect(props.scaleRatio);
}, function (props) {
  return transformEffect(props.scaleRatio);
}, function (props) {
  return transformEffect(props.scaleRatio);
}, function (props) {
  return transformEffect(props.scaleRatio);
}, function (props) {
  return transformEffect(props.scaleRatio);
});
var TileTitle = exports.TileTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1a7juzs-2"
})(["padding:10px 20px;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:1.2em;text-transform:uppercase;border-left:3px solid ", ";margin-bottom:0;"], function (props) {
  return props.theme.mainLight;
});
var StyledIcon = exports.StyledIcon = (0, _styledComponents["default"])(_semanticUiReact.Icon).withConfig({
  componentId: "sc-1a7juzs-3"
})(["color:gray;float:right;"]);