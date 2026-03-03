"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TocTitle = exports.TocList = exports.TocItemMarker = exports.TocItemLabel = exports.TocItem = exports.TocHeader = exports.TocAuthorRole = exports.TocAuthorName = exports.TocAuthorAvatar = exports.TocAuthor = exports.Toc = exports.SectionWrapper = exports.SectionTitle = exports.SectionSubtitle = exports.SectionIcon = exports.SectionHeader = exports.SectionContent = exports.MiniGridTitle = exports.MiniGridText = exports.MiniGridItem = exports.MiniGrid = exports.Layout = exports.Illustration = exports.IconListTitle = exports.IconListText = exports.IconListItem = exports.IconListBullet = exports.IconList = exports.HeroTitle = exports.HeroSubtitle = exports.HeroMedia = exports.HeroImage = exports.HeroBannerText = exports.HeroBannerIcon = exports.HeroBanner = exports.Hero = exports.ContentColumn = exports.CardTitle = exports.CardText = exports.CardGrid = exports.Card = exports.BuyingGuideWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _veDesignSystemNew = require("ve-design-system-new");
var _responsive = require("../../../components/styles/responsive");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var BuyingGuideWrapper = exports.BuyingGuideWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-0"
})(["max-width:1820px;width:100%;margin:30px auto 80px;padding:0 20px 60px;background:#f6f6f6;"]);
var Hero = exports.Hero = _styledComponents["default"].section.withConfig({
  componentId: "sc-1ofjuy2-1"
})(["display:grid;grid-template-columns:1fr;gap:0;align-items:stretch;margin:0 0 24px;box-shadow:0 5px 5px rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"]);
var HeroBanner = exports.HeroBanner = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-2"
})(["background:linear-gradient( 135deg,", " 0%,", " 100% );color:#fff;padding:30px;display:grid;grid-template-columns:66px 1fr;gap:25px;align-items:center;"], function (props) {
  return props.theme.mainLight;
}, function (props) {
  return props.theme.mainLightHover;
});
var HeroBannerIcon = exports.HeroBannerIcon = (0, _styledComponents["default"])(_veDesignSystemNew.Icon).withConfig({
  componentId: "sc-1ofjuy2-3"
})(["width:66px;height:66px;display:block;object-fit:contain;filter:brightness(0) invert(1);"]);
var HeroBannerText = exports.HeroBannerText = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-4"
})(["display:grid;gap:6px;"]);
var HeroTitle = exports.HeroTitle = _styledComponents["default"].h1.withConfig({
  componentId: "sc-1ofjuy2-5"
})(["margin:0;font-family:\"Open Sans\",Arial,sans-serif;font-size:40px;font-weight:600;"]);
var HeroSubtitle = exports.HeroSubtitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-6"
})(["font-size:24px;font-family:\"Open Sans\",Arial,sans-serif;font-weight:400;"]);
var HeroMedia = exports.HeroMedia = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-7"
})(["background:#fff;overflow:hidden;display:flex;align-items:center;justify-content:center;"]);
var HeroImage = exports.HeroImage = _styledComponents["default"].img.withConfig({
  componentId: "sc-1ofjuy2-8"
})(["width:100%;height:auto;display:block;"]);
var Layout = exports.Layout = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-9"
})(["display:grid;grid-template-columns:1fr 3fr;gap:30px;", ""], _responsive.media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    grid-template-columns: 1fr;\n  "]))));
var ContentColumn = exports.ContentColumn = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-10"
})(["max-width:1320px;width:100%;"]);
var Toc = exports.Toc = _styledComponents["default"].aside.withConfig({
  componentId: "sc-1ofjuy2-11"
})(["background:transparent;border:none;padding:10px 0 0;height:fit-content;position:sticky;top:20px;", ""], _responsive.media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: static;\n  "]))));
var TocHeader = exports.TocHeader = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-12"
})(["font-weight:600;color:#555;margin-bottom:10px;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;"]);
var TocTitle = exports.TocTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-13"
})(["font-size:0.9rem;"]);
var TocList = exports.TocList = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-14"
})(["display:grid;gap:0;background:#fff;padding:20px 10px;width:100%;max-width:450px;"]);
var TocItem = exports.TocItem = _styledComponents["default"].a.withConfig({
  componentId: "sc-1ofjuy2-15"
})(["color:#4c4c4c;text-decoration:none;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;font-weight:400;display:grid;grid-template-columns:12px 1fr;gap:10px;align-items:center;padding:10px 0;"]);
var TocItemMarker = exports.TocItemMarker = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-16"
})(["width:12px;height:100%;display:flex;align-items:center;position:relative;&::before{content:\"\";position:absolute;left:5px;width:1px;background:#f0f0f0;top:0;bottom:0;}&::after{content:\"\";position:absolute;width:12px;height:12px;left:0;top:50%;transform:translateY(-50%);background:", ";border-radius:9999px;border:2px solid #fff;}&[data-active=\"false\"]::after{opacity:0;}"], function (props) {
  return props.theme.mainLight;
});
var TocItemLabel = exports.TocItemLabel = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-17"
})(["color:#4c4c4c;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;font-weight:400;&[data-active=\"true\"]{font-weight:600;}"]);
var TocAuthor = exports.TocAuthor = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-18"
})(["display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;padding-top:40px;"]);
var TocAuthorAvatar = exports.TocAuthorAvatar = _styledComponents["default"].img.withConfig({
  componentId: "sc-1ofjuy2-19"
})(["width:50px;height:51px;border-radius:343px;object-fit:cover;"]);
var TocAuthorName = exports.TocAuthorName = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-20"
})(["color:#555;font-size:24px;font-family:\"Open Sans\",Arial,sans-serif;font-weight:700;"]);
var TocAuthorRole = exports.TocAuthorRole = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-21"
})(["color:#555;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;font-style:italic;font-weight:400;"]);
var SectionWrapper = exports.SectionWrapper = _styledComponents["default"].section.withConfig({
  componentId: "sc-1ofjuy2-22"
})(["background:#fff;border-radius:8px;margin-bottom:18px;box-shadow:0 5px 5px rgba(0,0,0,0.1);overflow:hidden;&[data-variant=\"muted\"]{background:#ebebeb;}&[data-variant=\"light\"]{background:#fff;}"]);
var SectionHeader = exports.SectionHeader = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-23"
})(["padding:30px 50px 20px;display:flex;align-items:center;gap:20px;border-bottom:1px solid ", ";"], function (props) {
  return props.theme.mainLight;
});
var SectionIcon = exports.SectionIcon = (0, _styledComponents["default"])(_veDesignSystemNew.Icon).attrs(function (props) {
  return {
    iconSize: 24,
    iconColor: props.theme.mainLight
  };
}).withConfig({
  componentId: "sc-1ofjuy2-24"
})(["width:44px;height:44px;display:flex;align-items:center;justify-content:center;padding:6px;box-sizing:border-box;"]);
var SectionTitle = exports.SectionTitle = _styledComponents["default"].h2.withConfig({
  componentId: "sc-1ofjuy2-25"
})(["margin:0;font-size:32px;color:", ";font-family:\"Open Sans\",Arial,sans-serif;font-weight:700;"], function (props) {
  return props.theme.mainLight;
});
var SectionSubtitle = exports.SectionSubtitle = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ofjuy2-26"
})(["font-size:0.85rem;opacity:0.9;"]);
var SectionContent = exports.SectionContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-27"
})(["padding:30px 50px;&[data-variant=\"muted\"]{padding:30px 50px 0;}&[data-variant=\"light\"]{background:rgba(244,141,53,0.1);border-radius:8px;}"]);
var CardGrid = exports.CardGrid = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-28"
})(["display:grid;grid-template-columns:1fr;gap:20px;border-radius:8px;", ""], _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    grid-template-columns: 1fr;\n  "]))));
var Card = exports.Card = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-29"
})(["padding:20px;background:#f6f6f6;border-radius:8px;border-left:5px solid ", ";"], function (props) {
  return props.theme.mainLight;
});
var CardTitle = exports.CardTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-30"
})(["font-weight:700;color:", ";margin-bottom:8px;font-size:24px;font-family:\"Open Sans\",Arial,sans-serif;"], function (props) {
  return props.theme.mainLight;
});
var CardText = exports.CardText = _styledComponents["default"].p.withConfig({
  componentId: "sc-1ofjuy2-31"
})(["margin:0;color:#555;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;line-height:1.4;"]);
var MiniGrid = exports.MiniGrid = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-32"
})(["display:grid;grid-template-columns:1fr 1fr;gap:20px;row-gap:30px;", ";"], _responsive.media.screenSmMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    grid-template-columns: 1fr;\n  "]))));
var MiniGridItem = exports.MiniGridItem = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-33"
})(["border-radius:8px;padding:0;"]);
var MiniGridTitle = exports.MiniGridTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-34"
})(["font-weight:700;color:", ";margin-bottom:6px;font-size:24px;font-family:\"Open Sans\",Arial,sans-serif;"], function (props) {
  return props["data-variant"] === "light" ? "#424242" : props.theme.mainLight;
});
var MiniGridText = exports.MiniGridText = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-35"
})(["color:#555;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;line-height:1.5;"]);
var IconList = exports.IconList = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-36"
})(["display:grid;gap:30px;"]);
var IconListItem = exports.IconListItem = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-37"
})(["display:grid;grid-template-columns:28px 1fr;gap:15px;align-items:start;"]);
var IconListBullet = exports.IconListBullet = _styledComponents["default"].span.withConfig({
  componentId: "sc-1ofjuy2-38"
})(["width:28px;height:28px;border-radius:30px;background:", ";display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;&::after{content:attr(data-number);}"], function (props) {
  return props.theme.mainLight;
});
var IconListTitle = exports.IconListTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-39"
})(["font-weight:700;color:#555;margin-bottom:2px;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;display:inline;margin-right:6px;"]);
var IconListText = exports.IconListText = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-40"
})(["color:#555;font-size:20px;font-family:\"Open Sans\",Arial,sans-serif;line-height:1.5;display:inline;&::before{content:\" \";}"]);
var Illustration = exports.Illustration = _styledComponents["default"].div.withConfig({
  componentId: "sc-1ofjuy2-41"
})(["border-radius:8px;overflow:hidden;margin-top:30px;img{width:100%;display:block;}"]);