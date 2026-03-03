"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledEmptyCatalogLink = exports.StyledEmptyCatalogIcon = exports.StyledEmptyCatalogDescription = exports.StyledCatalogTitleLink = exports.StyledCatalogPages = exports.StyledCatalogLink = exports.StyledCatalogImg = exports.StyledCatalogCaption = exports.EmptyCatalogWrapper = exports.CatalogsWrapper = exports.CatalogThumbnailTile = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _link = require("../../../../../../../../../components/link");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var maxMedia = _responsive["default"].specificMaxMedia(639);
var minMedia = _responsive["default"].specificMinMedia(640);

// Style du bloc de la liste des catalogues.
var CatalogsWrapper = exports.CatalogsWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-4ad8uc-0"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px;", " ", ""], maxMedia(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    -webkit-box-orient:vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    text-align: left;\n  "]))), minMedia(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    -webkit-box-pack:justify;\n    -ms-flex-pack: justify;\n    justify-content: space-evenly;\n    text-align: center;\n  "]))));
var CatalogThumbnailTile = exports.CatalogThumbnailTile = _styledComponents["default"].div.withConfig({
  componentId: "sc-4ad8uc-1"
})(["display:flex;-webkit-flex-basis:calc(33.33% - 15px);-ms-flex-preferred-size:calc(33.33% - 15px);flex-basis:calc(33.33% - 15px);flex-direction:column;justify-content:space-between;", ""], maxMedia(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    display: -webkit-box;\n    display: -ms-flexbox;\n    flex-direction: row;\n    margin-bottom: 25px;\n  "]))));
var StyledCatalogImg = exports.StyledCatalogImg = _styledComponents["default"].div.withConfig({
  componentId: "sc-4ad8uc-2"
})(["img{display:block;max-width:100%;border:1px solid #f6f6f6;margin:auto;}", ""], maxMedia(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 33.33%;\n    margin-right: 25px;\n  "]))));
var StyledCatalogLink = exports.StyledCatalogLink = (0, _styledComponents["default"])(_link.VeLink).withConfig({
  componentId: "sc-4ad8uc-3"
})(["cursor:pointer;"]);
var StyledCatalogTitleLink = exports.StyledCatalogTitleLink = (0, _styledComponents["default"])(StyledCatalogLink).withConfig({
  componentId: "sc-4ad8uc-4"
})(["text-decoration:none;display:block;margin-top:10px;font-size:1.06em;font-weight:700;color:#555;"]);
var StyledCatalogCaption = exports.StyledCatalogCaption = _styledComponents["default"].div.withConfig({
  componentId: "sc-4ad8uc-5"
})(["", ""], maxMedia(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    width: 60%;\n  "]))));
var StyledCatalogPages = exports.StyledCatalogPages = _styledComponents["default"].div.withConfig({
  componentId: "sc-4ad8uc-6"
})(["margin-bottom:10px;text-transform:lowercase;"]);
var EmptyCatalogWrapper = exports.EmptyCatalogWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-4ad8uc-7"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:center;"]);
var StyledEmptyCatalogIcon = exports.StyledEmptyCatalogIcon = _styledComponents["default"].i.withConfig({
  componentId: "sc-4ad8uc-8"
})(["display:block;margin:25px auto;font-size:10em;color:#f6f6f6;"]);
var StyledEmptyCatalogDescription = exports.StyledEmptyCatalogDescription = _styledComponents["default"].p.withConfig({
  componentId: "sc-4ad8uc-9"
})(["font-size:125%;margin:0 0 10px;"]);
var StyledEmptyCatalogLink = exports.StyledEmptyCatalogLink = (0, _styledComponents["default"])(StyledCatalogLink).withConfig({
  componentId: "sc-4ad8uc-10"
})(["color:", ";text-decoration:none;cursor:pointer;-webkit-transition:0.25s ease-in-out 0s;transition:0.25s ease-in-out 0s;::before{margin-right:5px;content:\"\f105\";font-family:FontAwesome;}"], function (props) {
  return props.theme.mainLight;
});