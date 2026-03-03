"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariantCountText = exports.SupplierRatingHolder = exports.SupplierInfo = exports.SupplierIdentity = exports.Strike = exports.PromoBadge = exports.Promo = exports.ProductImageWrapper = exports.Product = exports.PriceValue = exports.PriceUnit = exports.PriceSection = exports.PriceLegend = exports.Prev = exports.Pictos = exports.Next = exports.Nav = exports.Name = exports.Location = exports.Label = exports.InputBackground = exports.FeatureValueContainer = exports.FeatureValue = exports.CustomDotWrapper = exports.CustomDot = exports.Company = exports.Checkbox = exports.Card = exports.Caption = exports.Brand = exports.BlockPriceHolderShop = exports.BlockPriceHolder = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _tile = _interopRequireDefault(require("../../../tile/tile"));
var _responsive = require("../../../styles/responsive");
var _supplierDetails = require("../../../supplierDetails/styles/supplierDetails");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
/* eslint-disable no-nested-ternary */
var CompanyHeight = "30px";
var Card = exports.Card = (0, _styledComponents["default"])(_tile["default"]).withConfig({
  componentId: "sc-1to0fih-0"
})(["display:flex;flex:1 1 16.66%;max-width:16.66%;margin-bottom:50px;user-select:", ";a::-moz-focus-inner{border:0;}.TileInset{display:flex;flex-direction:column;justify-content:space-between;width:100%;max-width:270px;overflow:visible;border-color:", ";border-radius:", ";border-width:", ";box-shadow:", ";border-style:solid;", ";", ";", ";", ";", ";", ";}", ";", ";", ";", ";a.productStandLink{margin-bottom:-25px;color:", ";text-align:right;position:absolute;bottom:0;right:0;span{margin-right:5px;}}:hover{& .cardWithClose button{top:5px !important;}}.cardWithClose button{top:-38px !important;right:12px;transition:all ease-in-out 0.2s;position:absolute;}", ";"], function (props) {
  return props.selectable ? "none" : "initial";
}, function (props) {
  return props.selected ? props.theme.mainLight : "transparent";
}, function (props) {
  return props.shop ? "8px" : props.selected ? "2px" : "0";
}, function (props) {
  return props.selected ? "3px" : "0";
}, function (props) {
  return props.shop ? "0 2px 8px 1px rgba(0, 0, 0, 0.16)" : props.selected ? "0px 0px 10px 0px grey" : "";
}, function (props) {
  return props.shop ? "border-bottom:  6px solid ".concat(props.theme.shopBackGround, ";") : "";
}, function (props) {
  return props.shop ? "height: calc(17.66vw + 100px);" : "";
}, _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n       ", ";\n  "])), function (props) {
  return props.shop ? "height: calc(21.66vw + 127px);" : "";
}), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n     ", ";\n  "])), function (props) {
  return props.shop ? "height: calc(23.66vw + 223px);" : "";
}), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n     ", ";\n  "])), function (props) {
  return props.shop ? "height: calc(32.66vw + 243px);" : "";
}), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n   ", ";\n    "])), function (props) {
  return props.shop ? "height: calc(33.66vw + 243px);" : "";
}), _responsive.media.screenLgMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: ", ";\n    max-width: ", ";\n  "])), function (props) {
  return props.isHomePage ? "40%" : "20%";
}, function (props) {
  return props.isHomePage ? "40%" : "20%";
}), _responsive.media.screenMdMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: ", ";\n    max-width: ", ";\n  "])), function (props) {
  return props.isHomePage ? "40%" : "25%";
}, function (props) {
  return props.isHomePage ? "40%" : "25%";
}), _responsive.media.screenSmMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: ", ";\n    max-width: ", ";\n  "])), function (props) {
  return props.isHomePage ? "50%" : "25%";
}, function (props) {
  return props.isHomePage ? "50%" : "25%";
}), _responsive.media.screenXsMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: ", ";\n    max-width:  ", ";\n    ", "\n    padding-left: 2em;\n    padding-right: 1em;\n    &:nth-child(even){\n      padding-right: 2em;\n      padding-left: 1em;\n    }\n  "])), function (props) {
  return props.isHomePage ? "100%" : "50%";
}, function (props) {
  return props.isHomePage ? "100%" : "50%";
}, function (props) {
  return props.isHomePage ? "margin: auto;" : "";
}), function (props) {
  return props.theme.mainLight;
}, _responsive.media.screenXsMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    .cardWithClose button {\n      top: 5px !important;\n      right: 12px;\n      position: absolute;\n    }\n  "]))));
var Product = exports.Product = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-1"
})(["display:flex;flex-direction:column;justify-content:space-between;height:", ";text-decoration:none;padding-bottom:10px;picture,img{max-width:100%;object-fit:scale-down;max-height:100%;margin:auto;", ";}picture{margin-top:15%;}", ";", ";", "{margin-top:10px;div{width:auto;}}"], function (props) {
  return props.companyImageUrl ? "calc(100% - 55px)" : "auto";
}, function (props) {
  return props.hasShop ? " height: calc(100% - 25px);" : "";
}, _responsive.media.screenXsMin(_templateObject0 || (_templateObject0 = (0, _taggedTemplateLiteral2["default"])(["\n      img {\n        width: 100%;\n        height: auto;\n        max-height: 50vw;\n        object-fit: contain;\n       }\n  "]))), _responsive.media.screenXsMin(_templateObject1 || (_templateObject1 = (0, _taggedTemplateLiteral2["default"])(["\n     picture{\n      width: 100%;\n      margin: 0;\n      margin-top: 15%;\n     }\n  "]))), _supplierDetails.RatingDetails);
var ProductImageWrapper = exports.ProductImageWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-2"
})(["display:flex;max-height:300px;height:", ";text-align:center;overflow:hidden;position:relative;margin-bottom:7px;> *:first-child{max-width:100%;object-fit:scale-down;max-height:100%;margin:auto;", ";}", ";", ";", ";", ";"], function (props) {
  return props.shop ? "calc(16.66vw - 21.85px);" : " calc(16.66vw - 60.86px);";
}, function (props) {
  return props.shop ? " margin-top: 15%;" : "";
}, _responsive.media.screenLgMin(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n    height: calc(20vw - 63.1px);\n  "]))), _responsive.media.screenMdMin(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n    height: calc(25vw - 66.25px);\n  "]))), _responsive.media.screenSmMin(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    height: calc(33.33vw - 72.25px);\n  "]))), _responsive.media.screenXsMin(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n    height: calc(50vw - 56.4px);\n  "]))));
var PriceSection = exports.PriceSection = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-3"
})(["font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;display:flex;flex-direction:column;text-align:", ";margin:0 20px;"], function (props) {
  return props.isLeft ? "left" : "right";
});
var PriceLegend = exports.PriceLegend = _styledComponents["default"].span.withConfig({
  componentId: "sc-1to0fih-4"
})(["color:#555;line-height:1.4em;font-size:0.8em;"]);
var PriceValue = exports.PriceValue = _styledComponents["default"].span.withConfig({
  componentId: "sc-1to0fih-5"
})(["color:", ";font-size:1.5em;line-height:1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;display:grid;font-size:1.5em;line-height:1em;font-weight:600;.tax-info{color:#999;line-height:1.4em;font-size:0.55em;font-weight:400;}"], function (props) {
  return props.hasShop ? props.theme.shop : props.theme.mainLight;
});
var PriceUnit = exports.PriceUnit = _styledComponents["default"].span.withConfig({
  componentId: "sc-1to0fih-6"
})(["font-size:0.7em;display:inline;color:#555;"]);
var Company = exports.Company = _styledComponents["default"].a.withConfig({
  componentId: "sc-1to0fih-7"
})(["display:flex;height:", ";overflow:hidden;margin:0 20px 7px;img{max-width:100%;align-self:center;object-fit:scale-down;align-self:auto;margin:0;}"], CompanyHeight);
var Caption = exports.Caption = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-8"
})(["font-family:HurmeGeometricSans_No4_5_SemiBold,Arial,sans-serif;font-size:0.9em;padding:0 20px;text-transform:uppercase;height:", ";", ";"], function (props) {
  return props.hasShop ? "40px" : "93px";
}, function (props) {
  return props.hasShop ? "position: absolute; bottom: 50px;" : "";
});
var Label = exports.Label = _styledComponents["default"].span.withConfig({
  componentId: "sc-1to0fih-9"
})(["display:block;line-height:1.2;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], function (props) {
  return props.hasShop ? " max-width: 165px;" : "";
});
var Brand = exports.Brand = _styledComponents["default"].span.withConfig({
  componentId: "sc-1to0fih-10"
})(["display:block;color:#999;font-family:\"Century Gothic\",Verdana,sans-serif;font-weight:400;padding-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
var FeatureValueContainer = exports.FeatureValueContainer = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-11"
})(["text-transform:none;padding-left:5px;margin-top:5px;"]);
var FeatureValue = exports.FeatureValue = _styledComponents["default"].span.withConfig({
  componentId: "sc-1to0fih-12"
})(["font-family:Arial,sans-serif;margin-right:10px;font-weight:400;display:block;word-break:break-word;color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;::before{margin-right:5px;content:\"\f02b\";font-family:FontAwesome;}"]);
var Pictos = exports.Pictos = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-13"
})(["position:absolute;top:", ";left:-5px;z-index:1;"], function (props) {
  return props.selectable ? "25px" : "5px";
});
var SupplierInfo = exports.SupplierInfo = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-14"
})(["border-top:2px solid #f6f6f6;padding:10px 20px 0;margin-top:10px;> span{font-family:Arial,sans-serif;color:#999;font-weight:bold;margin:10px 0;}"]);
var SupplierIdentity = exports.SupplierIdentity = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-15"
})(["display:flex;flex-direction:column;color:#555;"]);
var Name = exports.Name = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-16"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
var Location = exports.Location = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-17"
})(["font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;font-size:12px;&:before{content:\"\f041\";font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;margin-right:5px;color:#999;}"]);

// pour conserver l'espace du prix
var BlockPriceHolder = exports.BlockPriceHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-18"
})(["height:31px;"]);

// pour conserver l'espace du prix
var BlockPriceHolderShop = exports.BlockPriceHolderShop = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-19"
})(["position:absolute;bottom:", ";height:63px;padding-top:35px;"], function (props) {
  return props.addPaddingTop ? "10px;" : "18px;";
});

// pour conserver l'espace du prix
var SupplierRatingHolder = exports.SupplierRatingHolder = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-20"
})(["height:27px;"]);
var InputBackground = exports.InputBackground = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-21"
})(["position:absolute;width:27px !important;height:27px;z-index:1;background-color:", ";top:-3px;left:-3px;"], function (props) {
  return props.selected ? props.theme.mainLight : "lightgrey";
});
var Checkbox = exports.Checkbox = _styledComponents["default"].label.withConfig({
  componentId: "sc-1to0fih-22"
})(["position:absolute;top:2px;left:3px;height:8px;width:8px;input{display:none;z-index:1;}span{z-index:1;display:inline-block;border:1px solid black;width:13px;height:13px;background:white;vertical-align:middle;margin:0px;top:2px;left:2px;position:relative;transition:width 0.1s,height 0.1s,margin 0.1s;}i{font-size:12px;position:absolute;top:5px;left:3px;color:black;width:8px;z-index:1;}"]);
var CustomDotWrapper = exports.CustomDotWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-23"
})(["display:flex;justify-content:center;margin:5px;z-index:3;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s;"]);
var CustomDot = exports.CustomDot = _styledComponents["default"].button.withConfig({
  componentId: "sc-1to0fih-24"
})(["width:5px;height:5px;padding:2px;margin:10px;border:none;box-sizing:content-box;border-radius:50%;cursor:pointer;background:#333;opacity:", ";"], function (props) {
  return props.selected ? 1 : 0.25;
});
var Nav = exports.Nav = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-25"
})(["position:absolute;top:59%;width:100%;display:flex;justify-content:space-between;z-index:2;"]);
var Next = exports.Next = _styledComponents["default"].button.withConfig({
  componentId: "sc-1to0fih-26"
})(["position:absolute;right:10px;top:50%;transform:translateY(-50%);background:transparent;border:none;cursor:pointer;width:30px;height:30px;border-radius:50%;background-color:#fff;box-shadow:0 0.2rem 0.8rem 0.1rem rgba(0,0,0,0.16);&:before{content:\"\f105\";font-family:FontAwesome;font-size:20px;color:#555;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;}"]);
var Prev = exports.Prev = _styledComponents["default"].button.withConfig({
  componentId: "sc-1to0fih-27"
})(["position:absolute;left:10px;top:50%;transform:translateY(-50%);background:transparent;border:none;cursor:pointer;width:30px;height:30px;border-radius:50%;box-shadow:0 0.2rem 0.8rem 0.1rem rgba(0,0,0,0.16);background-color:#fff;&:before{content:\"\f104\";font-family:FontAwesome;font-size:20px;color:#555;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;}"]);
var Strike = exports.Strike = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-28"
})(["font-size:10px;font-weight:normal;line-height:0.7em;text-decoration:line-through;span{text-decoration:line-through;}"]);
var Promo = exports.Promo = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-29"
})(["position:absolute;top:3rem;left:1rem;z-index:2;"]);
var PromoBadge = exports.PromoBadge = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-30"
})(["height:1.6rem;background-color:", ";color:white;width:3rem;display:flex;justify-content:center;align-items:center;font-size:12px;border-radius:0.3rem;"], function (props) {
  return props.theme.promoBadgeColor;
});
var VariantCountText = exports.VariantCountText = _styledComponents["default"].div.withConfig({
  componentId: "sc-1to0fih-31"
})(["position:absolute;background:#f2f2f2;border-radius:0.8rem;display:flex;justify-content:center;align-items:center;z-index:1;opacity:0.9;right:7%;top:7.5px;font-size:0.6rem;height:1.1rem;padding:0 0.7rem 0 0.7rem;width:fit-content;color:#272727;"]);