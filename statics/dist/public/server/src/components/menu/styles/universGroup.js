"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniverseGroupLabel = exports.UniverseGroupItemComponent = exports.UniverseGroupExpanded = exports.UniverseGroup = exports.Ul = exports.PlaceHolderUniverseMobile = exports.PlaceHolderUniverse = exports.ParentMenu = exports.OnlyMobile = exports.OnlyDesktop = exports.MenuRow = exports.MenuColumn = exports.Div = exports.Container = exports.CategoryUl = exports.CategoryParent = exports.CategoryLink = exports.CategoryLi = exports.Arrow = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _responsive = require("../../styles/responsive");
var _row = _interopRequireDefault(require("../../styles/row"));
var _column = require("../../styles/column");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var UniverseGroup = exports.UniverseGroup = _styledComponents["default"].ul.attrs(function (props) {
  return {
    "data-cy": props.isHome ? "universeMenuHome_".concat(props.itemId) : "universeMenu".concat(props.itemId)
  };
}).withConfig({
  componentId: "sc-6qd6g7-0"
})(["margin:5px 0 5px 0px;background-color:#fff;box-shadow:0 1px 2px rgba(0,0,0,0.1);list-style:none;padding-left:0;", ""], _responsive.media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    padding: ", ";\n  "])), function (props) {
  return props.isHome ? "0" : "inherit";
}));
var UniverseGroupExpanded = exports.UniverseGroupExpanded = _styledComponents["default"].ul.attrs(function (props) {
  return {
    "data-cy": "universeExtented_".concat(props.item ? props.item.id : "")
  };
}).withConfig({
  componentId: "sc-6qd6g7-1"
})(["padding:7px 15px;text-align:left;border-top:#dadada solid 1px;", ""], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      padding: 10px 15px;\n  "]))));
var Arrow = exports.Arrow = _styledComponents["default"].i.withConfig({
  componentId: "sc-6qd6g7-2"
})(["float:right;height:2em;line-height:1.1em;white-space:nowrap;"]);
var UniverseGroupItemComponent = exports.UniverseGroupItemComponent = _styledComponents["default"].li.withConfig({
  componentId: "sc-6qd6g7-3"
})(["font-family:Arial,sans-serif;font-size:19.995px;cursor:pointer;list-style-type:none;padding:", ";", " ", ""], function (props) {
  return props.isHome ? "12px 15px" : "inherit";
}, _responsive.mediaMinWidth.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        padding:  ", ";\n  "])), function (props) {
  return props.isHome ? "12px 15px" : "0";
}), function (props) {
  return props.isHome && (0, _styledComponents.css)(["", ""], _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n          padding: 12px 5px 12px 15px;\n      "]))));
});
var CategoryUl = exports.CategoryUl = _styledComponents["default"].ul.withConfig({
  componentId: "sc-6qd6g7-4"
})(["display:flex;flex-direction:column;margin-left:40px;list-style:none;margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline;-webkit-margin-before:0px;-webkit-margin-after:0px;"]);
var Ul = exports.Ul = _styledComponents["default"].ul.withConfig({
  componentId: "sc-6qd6g7-5"
})([""]);
var MenuRow = exports.MenuRow = (0, _styledComponents["default"])(_row["default"]).withConfig({
  componentId: "sc-6qd6g7-6"
})([""]);
var MenuColumn = exports.MenuColumn = (0, _styledComponents["default"])(_column.Column).withConfig({
  componentId: "sc-6qd6g7-7"
})([""]);
var CategoryLi = exports.CategoryLi = _styledComponents["default"].li.withConfig({
  componentId: "sc-6qd6g7-8"
})(["padding-left:0;transition:padding linear 0.25s;margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline;&:hover{padding-left:10px;}.univers-group-item{display:block;padding-left:40px;padding-top:5px;font-size:0.875em;color:#6d6d6d !important;text-decoration:none;text-transform:uppercase;line-height:22.5px;}"]);
var CategoryLink = exports.CategoryLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-6qd6g7-9"
})(["display:block;padding-left:40px;padding-top:5px;font-size:14px;color:#6d6d6d;text-decoration:none;text-transform:uppercase;&:hover{color:#6d6d6d;}"]);
var UniverseGroupLabel = exports.UniverseGroupLabel = _styledComponents["default"].span.withConfig({
  componentId: "sc-6qd6g7-10"
})(["font-size:", ";border-left:", " solid 3px;padding-left:15px;padding-bottom:5px;color:#4d4d4d;width:85%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;text-transform:uppercase;"], function (props) {
  return props.isHome ? "16px" : "12px";
}, function (props) {
  return props.theme.mainLight;
});
var Div = exports.Div = _styledComponents["default"].div.withConfig({
  componentId: "sc-6qd6g7-11"
})(["display:", ";margin-top:5px;width:100%;font-size:75%;background-color:rgba(255,255,255,0.9);border-bottom:1px solid #dadada;box-shadow:0 5px 5px rgba(0,0,0,0.1);position:absolute;left:0;z-index:10;"], function (props) {
  return props.visible ? "block" : "none";
});
var Container = exports.Container = _styledComponents["default"].div.withConfig({
  componentId: "sc-6qd6g7-12"
})(["width:95%;max-width:1920px;margin:auto;padding-left:25px;padding-right:25px;height:auto;"]);
var CategoryParent = exports.CategoryParent = _styledComponents["default"].span.withConfig({
  componentId: "sc-6qd6g7-13"
})(["display:none;"]);
var ParentMenu = exports.ParentMenu = (0, _styledComponents["default"])(CategoryParent).withConfig({
  componentId: "sc-6qd6g7-14"
})(["display:none;"]);
var OnlyDesktop = exports.OnlyDesktop = _styledComponents["default"].div.withConfig({
  componentId: "sc-6qd6g7-15"
})(["min-height:100px;display:block;", ""], _responsive.media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n     display: none;\n   "]))));
var OnlyMobile = exports.OnlyMobile = _styledComponents["default"].span.withConfig({
  componentId: "sc-6qd6g7-16"
})(["min-height:100px;display:", ";overflow:hidden;", ""], function (props) {
  return props.isMobile ? "block" : "none";
}, _responsive.media.screenSmMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n     display:block;\n   "]))));
var PlaceHolderUniverse = exports.PlaceHolderUniverse = _styledComponents["default"].div.withConfig({
  componentId: "sc-6qd6g7-17"
})(["min-height:", ";margin-top:30px;", ""], function (props) {
  return props.isMobile ? "100px" : "".concat(props.heightBlock, "px");
}, _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      min-height: 100px;\n      width: calc(100vw - 25px);\n   "]))));
var PlaceHolderUniverseMobile = exports.PlaceHolderUniverseMobile = _styledComponents["default"].div.withConfig({
  componentId: "sc-6qd6g7-18"
})(["min-height:", ";", ""], function (props) {
  return props.isMobile ? "100px" : "".concat(props.heightBlock, "px");
}, _responsive.media.screenSmMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n      min-height: 100px;\n      margin: 40px auto auto auto;\n      width: calc(100vw - 25px);\n   "]))));