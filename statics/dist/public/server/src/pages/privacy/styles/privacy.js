"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VePrivacyLink = exports.PrivacyWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _link = require("../../../components/link");
var _responsive = require("../../../components/styles/responsive");
var _templateObject;
var PrivacyWrapper = exports.PrivacyWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1f2vrg0-0"
})(["#preview{height:1000px;}max-width:1170px;margin:50px auto 80px;.bg-mcl{background-color:", ";}.h1,.h2,.h3,.h4,.h5{font-family:\"HurmeGeometricSans_SemiBold\",Arial,sans-serif;color:#555;line-height:inherit;}.h1,.h2,.h3,.h4{text-transform:uppercase;}.h1{margin-bottom:15px;font-size:2em;}.h2{margin-top:50px;margin-bottom:25px;font-size:1.75em;}.h3{margin:40px 0 15px 20px;font-size:1.33em;}.h4{margin:30px 0 15px 45px;font-size:1.25em;}.h5{margin:15px 0 15px 60px;font-size:1.25em;}.h6{margin:15px 0 15px 80px;font-size:1.125em;font-weight:bold;color:#555;}.h6::before{margin-right:5px;content:\"\f105\";font-family:\"FontAwesome\";}p,ul{font-size:1.125em;color:#555;margin:0 0 10px;line-height:inherit;}ul{margin-left:40px;margin-bottom:20px;padding:0;}li{margin-bottom:5px;list-style:disc;}.underline{height:2px;margin-bottom:50px;}.underline.large{max-width:150px;}.underline.medium{max-width:100px;}.underline.small{max-width:50px;}.table{width:100%;margin-top:20px;margin-bottom:30px;border-collapse:collapse;border-spacing:0;}th{padding:10px 5px;font-weight:bold;text-transform:uppercase;border-style:solid;border-width:0 0 4px;}td{padding:5px;border-bottom-width:1px;border-style:solid;border-width:0 0 1px;vertical-align:top;}th,td{text-align:left;}.inline-center{text-align:center;}strong,.strong{font-weight:bold;}.container{max-width:1920px;", "}.container,.container-wide{margin-left:auto;margin-right:auto;padding-left:25px;padding-right:25px;}.privacy-file-pdf{height:189vh;width:100%;}"], function (props) {
  return props.theme.mainLight;
}, _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: auto;\n    "]))));
var VePrivacyLink = exports.VePrivacyLink = (0, _styledComponents["default"])(_link.VeLink).withConfig({
  componentId: "sc-1f2vrg0-1"
})(["font-size:4vw;text-decoration:underline;cursor:pointer;white-space:break-spaces;display:block;text-transform:lowercase;&:first-letter{text-transform:uppercase;}box-sizing:border-box;"]);