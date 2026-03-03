"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SouthAmerica = exports.Oceania = exports.NorthAmerica = exports.MapWrapper = exports.ExhibitMapSection = exports.Europe = exports.Asia = exports.Africa = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var ExhibitMapSection = exports.ExhibitMapSection = _styledComponents["default"].section.withConfig({
  componentId: "sc-1681mv3-0"
})(["background-color:#fff;display:flex;flex-direction:column;align-items:center;padding-bottom:50px;padding-top:50px;.big{font-size:125%;}"]);
var MapWrapper = exports.MapWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1681mv3-1"
})(["position:relative;margin-left:25px;margin-right:25px;> div{font-size:1.5vw;line-height:1.125em;position:absolute;", ";", ";}> img{width:100%;", ";}"], media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      font-size: 2vw;\n    "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      font-size: 3vw;\n    "]))), media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      opacity: .33;\n    "]))));
var Africa = exports.Africa = _styledComponents["default"].div.withConfig({
  componentId: "sc-1681mv3-2"
})(["right:15%;bottom:0;color:#1bb3e9;text-align:left;"]);
var Asia = exports.Asia = _styledComponents["default"].div.withConfig({
  componentId: "sc-1681mv3-3"
})(["top:30%;right:0;color:#007ea2;text-align:left;"]);
var Europe = exports.Europe = _styledComponents["default"].div.withConfig({
  componentId: "sc-1681mv3-4"
})(["top:0;right:30%;color:#e89a38;text-align:left;"]);
var Oceania = exports.Oceania = _styledComponents["default"].div.withConfig({
  componentId: "sc-1681mv3-5"
})(["top:80%;right:0;color:#8da200;text-align:right;"]);
var NorthAmerica = exports.NorthAmerica = _styledComponents["default"].div.withConfig({
  componentId: "sc-1681mv3-6"
})(["top:25%;left:0;color:#872dc1;text-align:right;"]);
var SouthAmerica = exports.SouthAmerica = _styledComponents["default"].div.withConfig({
  componentId: "sc-1681mv3-7"
})(["top:65%;left:10%;color:#69bcad;text-align:right;"]);
var Title = exports.Title = _styledComponents["default"].h2.withConfig({
  componentId: "sc-1681mv3-8"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;color:#555;line-height:1em;text-transform:uppercase;font-size:2.16em;display:flex;flex-direction:column;margin-bottom:0;text-align:center;", ";&:after{content:\"\";margin:15px auto 65px;padding:0 75px 0 75px;max-width:150px;border-bottom:2px solid ", ";}"], media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0 10px;\n  "]))), function (props) {
  return props.theme.mainLight;
});