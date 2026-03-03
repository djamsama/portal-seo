"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeeMore = exports.Scroller = exports.Review = exports.ProductTable = exports.EmptyWrapper = exports.EmptyComparator = exports.DescriptionCell = exports.CompareBtn = exports.ComparatorWrapper = exports.ComparatorTitle = exports.ComparatorHeader = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _portalButton = _interopRequireDefault(require("../../../../../../../components/styles/portalButton"));
var _supplierDetails = require("../../../../../../../components/supplierDetails/styles/supplierDetails");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var media = _responsive["default"].media();
var ProductTable = exports.ProductTable = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-0"
})(["display:flex;flex-direction:column;border-color:white;font-weight:bold;text-transform:uppercase;"]);
var ComparatorWrapper = exports.ComparatorWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-1"
})([".ui.fixed.table td,.ui.fixed.table th{width:50px;}.ui.table thead tr th:first-child{width:30px;}table tr td:first-child{background-color:", ";color:white;}table thead tr:nth-child(1) th,table tbody tr:nth-child(1) td{position:sticky;z-index:8;table-layout:fixed;border-collapse:collapse;top:66px;", " ", "}table tbody tr:nth-child(1) td{border-bottom:1px solid rgba(34,36,38,.1);&:not(:first-child){background:#fff;}top:108px;", " ", "}table tbody tr:nth-child(2) td{border-top:none;}table tbody tr td:nth-child(1){font-family:HurmeGeometricSans_SemiBold;font-size:0.833em;text-transform:uppercase;border-top:1px solid rgba(255,255,255,.2);}table thead th.comparator-head{cursor:grab;.close{cursor:pointer;}}.ui.celled.table.comparator-table{margin-bottom:50px;}table.comparator-table{width:max-content !important;min-width:100%;}.ranking{", "{padding-right:0;}> div{margin-left:auto;margin-right:auto;width:fit-content;", "{flex-direction:column;> div:first-child{margin:auto;}}}}.float{display:flex;position:fixed;top:70px;left:25px;right:25px;z-index:111;}.ui.celled.table tr td.drag{border-left:5px solid red;}th.comparator-head{text-align:initial;min-width:230px;width:230px;color:grey;text-align:left;height:42px;&.close{text-align:right;}.right{float:right;}.left{float:left;}}}"], function (props) {
  return props.theme.footerMain;
}, media.screenMdMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n        top: 112px; /* Header height */\n      "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        top: 66px; /* Header height */\n      "]))), media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      top: 154px; /* Header height + thead height */\n    "]))), media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      top: 108px; /* Header height + thead height */\n    "]))), _supplierDetails.Reactivity, _supplierDetails.RatingDetails);
var Scroller = exports.Scroller = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-2"
})(["display:block;width:100%;overflow-x:auto;overflow-y:hidden;"]);
var EmptyWrapper = exports.EmptyWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-3"
})(["display:flex;flex-direction:column;.EmptyIcon{align-self:center;background-color:#fff;border:4px solid #cdcccc;height:85px;width:85px;border-radius:50%;position:relative;margin-top:40px;&:after{content:\"\";position:absolute;border-top:4px solid #cdcccc;width:118px;transform:rotate(-45deg);left:-20px;top:37px;}}.EmptyTitle{font-weight:700;align-self:center;font-size:1.2em;margin:25px 0 10px 0;}.EmptyText{align-self:center;}"]);
var CompareBtn = exports.CompareBtn = (0, _styledComponents["default"])(_portalButton["default"]).withConfig({
  componentId: "sc-1jzpgkm-4"
})(["width:auto;margin:30px auto 50px;padding-left:12px;padding-right:12px;"]);
var ComparatorHeader = exports.ComparatorHeader = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-5"
})(["display:flex;flex-direction:row;justify-content:space-between;margin-bottom:20px;line-height:10px;.Breadcrumb{color:#999;a.section{color:#999;}}"]);
var ComparatorTitle = exports.ComparatorTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-6"
})(["display:flex;flex-direction:row;justify-content:space-between;margin-bottom:20px;line-height:10px;font-size:22px;color:#999;"]);
var EmptyComparator = exports.EmptyComparator = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-7"
})(["display:flex;flex-direction:row;cursor:pointer;margin-left:auto;font-size:12px;color:", ";:hover{color:", ";}"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLight;
});
var DescriptionCell = exports.DescriptionCell = _styledComponents["default"].div.withConfig({
  componentId: "sc-1jzpgkm-8"
})(["display:-webkit-box;white-space:pre-line;margin-bottom:10px;&.collapsed{max-height:50px;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"]);
var Review = exports.Review = _styledComponents["default"].span.withConfig({
  componentId: "sc-1jzpgkm-9"
})(["color:#999;font-size:1em;"]);
var SeeMore = exports.SeeMore = _styledComponents["default"].a.withConfig({
  componentId: "sc-1jzpgkm-10"
})(["cursor:pointer;"]);