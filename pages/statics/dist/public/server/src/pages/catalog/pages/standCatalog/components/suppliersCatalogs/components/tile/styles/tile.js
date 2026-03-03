"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileWrapper = exports.Flag = exports.DetailImageLink = exports.DetailImageContent = exports.CataloguePreviewCard = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var TileWrapper = exports.TileWrapper = _styledComponents["default"].li.withConfig({
  componentId: "sc-16lf16q-0"
})(["padding:25px;display:flex;&:hover{transform:scale(1.05);}"]);
var CataloguePreviewCard = exports.CataloguePreviewCard = _styledComponents["default"].div.withConfig({
  componentId: "sc-16lf16q-1"
})(["width:100%;padding:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;text-align:center;background:#ffffff;box-shadow:;"]);
var Flag = exports.Flag = _styledComponents["default"].i.withConfig({
  componentId: "sc-16lf16q-2"
})(["margin:5px 0 5px -5px;position:relative;width:30px;height:20px;background-image:url(https://img.virtual-expo.com/media/ps/images/common/flags/flags-icons.png);display:inline-block;background-repeat:no-repeat;&.en{background-position:-32px 0;}&.de{background-position:-32px -30px;}&.fr{background-position:-32px -60px;}&.es{background-position:-32px -90px;}&.it{background-position:-32px -120px;}&.zh{background-position:-32px -150px;}&.ja{background-position:-32px -180px;}&.ru{background-position:-32px -210px;}&.pt{background-position:-32px -240px;}&:before{content:\"\";width:0;height:0;border-style:solid;border-width:0 5px 5px 0;border-color:transparent rgba(0,0,0,0.2) transparent transparent;position:absolute;bottom:-5px;left:0;}"]);
var DetailImageLink = exports.DetailImageLink = _styledComponents["default"].div.withConfig({
  componentId: "sc-16lf16q-3"
})(["float:left;overflow:hidden;& a{color:#555;font:10px Verdana,Arial,Helvetica,\"Liberation Sans\",sans-serif;font-weight:normal;}& img{max-width:100%;margin:0;border:none;}"]);
var DetailImageContent = exports.DetailImageContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-16lf16q-4"
})(["padding:0 10px 5px;& a{padding:0;margin:0;overflow:hidden;word-wrap:break-word;}& p{color:#999a9b;margin:2px 0 5px;font:normal 10px Verdana,Arial,Helvetica,\"Liberation Sans\",sans-serif;font-weight:normal;}"]);