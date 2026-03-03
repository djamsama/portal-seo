"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _veDesignSystem = require("ve-design-system");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var common = {
  pathImg: "https://img.virtual-expo.com/media/ps/images",
  shop: "#F7A810",
  shopLight: "#fcf7ed",
  shopBackGround: "#f7a810",
  promoBadgeColor: "#e70a0aff"
};
var vars = {
  ae: _objectSpread({
    main: "#3a3a3a",
    mainLight: "#1094e9",
    mainLightHover: "#3aaaf2",
    mainLightLighter: "#84caf6",
    mainLightPastel: "#AFDBF7",
    mainDark: "#2b2b2b",
    mainDarkened: "#2b2b2b",
    logo: "/media/ps/images/ae/header/header-logo.svg",
    footerMain: "#424242",
    footerLight: "#555",
    legendColor: "#FFF",
    inputFontColor: "#f1f5fc",
    priceColor: "#24859B",
    headerMobileLink: "#FFF",
    headerMobileSubMenu: "rgba(255,255,255,0.7)",
    headerMobileLinkBorder: "rgba(255,255,255,0.2)",
    headerMobileLinkIcon: "rgba(255, 255, 255, 1)",
    headerMobileParentMenu: "rgba(255, 255, 255, 0.4)",
    headerMobileCountryCurrencyMenu: "rgba(255, 255, 255, 0.7)",
    headerMobileCountryCurrencySubMenu: "rgba(255, 255, 255, 0.5)",
    headerMobileExhibitButtonBorder: "#FFF",
    siteLabel: "ArchiExpo",
    gradient: "linear-gradient(90deg, #1094E9 0%, #8465d6 100%)"
  }, _veDesignSystem.styles.colors.ae),
  // di
  di: _objectSpread({
    main: "#4c4c4c",
    mainLight: "#f48d35",
    mainLightHover: "#f7a865",
    mainLightLighter: "#94a7d1",
    mainLightPastel: "#FBD9BB",
    mainDark: "#424242",
    mainDarkened: "#FFF",
    logo: "/media/ps/images/di/header/header-logo.svg",
    footerMain: "#424242",
    footerLight: "#555",
    legendColor: "#FFF",
    inputFontColor: "#f1f5fc",
    priceColor: "#BF6A2B",
    headerMobileLink: "#272727",
    headerMobileSubMenu: "#272727",
    headerMobileLinkBorder: "#f7f7f7",
    headerMobileLinkIcon: "#272727",
    headerMobileParentMenu: "#272727",
    headerMobileCountryCurrencyMenu: "rgba(66, 66, 66, 0.7)",
    headerMobileCountryCurrencySubMenu: "#272727",
    headerMobileExhibitButtonBorder: "#272727",
    siteLabel: "DirectIndustry",
    gradient: "linear-gradient(90deg, #d83730 0%, #f48d35 100%)"
  }, _veDesignSystem.styles.colors.di),
  // me
  me: _objectSpread({
    main: "#4c4c4c",
    mainLight: "#7eccdc",
    mainLightHover: "#a6dce7",
    mainLightLighter: "#bee5ed",
    mainLightPastel: "#9CC8D8",
    mainDark: "#424242",
    mainDarkened: "#FFF",
    logo: "/media/ps/images/me/header/header-logo.svg",
    footerMain: "#424242",
    footerLight: "#555",
    legendColor: "#FFF",
    inputFontColor: "#f2fbfc",
    priceColor: "#629FA8",
    headerMobileLink: "#272727",
    headerMobileSubMenu: "#272727",
    headerMobileLinkBorder: "#f7f7f7",
    headerMobileLinkIcon: "#272727",
    headerMobileParentMenu: "#272727",
    headerMobileCountryCurrencyMenu: "rgba(66, 66, 66, 0.7)",
    headerMobileCountryCurrencySubMenu: "#272727",
    headerMobileExhibitButtonBorder: "#272727",
    siteLabel: "MedicalExpo",
    gradient: "linear-gradient(90deg, #7ECCDC 0%, #077A9C 100%)"
  }, _veDesignSystem.styles.colors.me),
  // ne
  ne: _objectSpread({
    main: "#154d7d",
    mainLight: "#5eb5ff",
    mainLightHover: "#91ccff",
    mainLightLighter: "#aedaff",
    mainLightPastel: "#AFDBF7",
    mainDark: "#0d2f4b",
    mainDarkened: "#10395d",
    logo: "/media/ps/images/ne/header/header-logo.svg",
    footerMain: "#424242",
    footerLight: "#555",
    legendColor: "#18306C",
    inputFontColor: "#f4fcff",
    priceColor: "#4C96CC",
    headerMobileLink: "#FFF",
    headerMobileSubMenu: "rgba(255,255,255,0.7)",
    headerMobileLinkBorder: "rgba(255,255,255,0.2)",
    headerMobileLinkIcon: "rgba(255, 255, 255, 1)",
    headerMobileParentMenu: "rgba(255, 255, 255, 0.4)",
    headerMobileCountryCurrencyMenu: "rgba(255, 255, 255, 0.7)",
    headerMobileCountryCurrencySubMenu: "rgba(255, 255, 255, 0.5)",
    headerMobileExhibitButtonBorder: "#FFF",
    siteLabel: "NauticExpo",
    gradient: "linear-gradient(90deg, #5EB5FF 0%, #154D7D 100%)"
  }, _veDesignSystem.styles.colors.ne),
  // ag
  ag: _objectSpread({
    main: "#3a3a3a",
    mainLight: "#91d333",
    mainLightHover: "#a8dc5d",
    mainLightLighter: "#c7e999",
    mainLightPastel: "#DAF0BB",
    mainDark: "#2b2b2b",
    mainDarkened: "#2b2b2b",
    logo: "/media/ps/images/ag/header/header-logo.svg",
    footerMain: "#424242",
    footerLight: "#555",
    legendColor: "#FFF",
    inputFontColor: "#f1f5fc",
    priceColor: "#709E28",
    headerMobileLink: "#FFF",
    headerMobileSubMenu: "rgba(255,255,255,0.7)",
    headerMobileLinkBorder: "rgba(255,255,255,0.2)",
    headerMobileLinkIcon: "rgba(255, 255, 255, 1)",
    headerMobileParentMenu: "rgba(255, 255, 255, 0.4)",
    headerMobileCountryCurrencyMenu: "rgba(255, 255, 255, 0.7)",
    headerMobileCountryCurrencySubMenu: "rgba(255, 255, 255, 0.5)",
    headerMobileExhibitButtonBorder: "#FFF",
    siteLabel: "AgriExpo",
    gradient: "linear-gradient(90deg, #a7dc5c 0%, #0BA360 100%)"
  }, _veDesignSystem.styles.colors.ag),
  // ar
  ar: _objectSpread({
    main: "#225989",
    mainLight: "#2EADD1",
    mainLightHover: "#58bdda",
    mainLightLighter: "#96d6e8",
    mainLightPastel: "#B9E3EF",
    mainDark: "#131D29",
    mainDarkened: "#194266",
    logo: "/media/ps/images/ar/header/header-logo.svg",
    footerMain: "#424242",
    footerLight: "#555",
    legendColor: "#666",
    inputFontColor: "#f4f4f4",
    priceColor: "#0C74B6",
    headerMobileLink: "#FFF",
    headerMobileSubMenu: "rgba(255,255,255,0.7)",
    headerMobileLinkBorder: "rgba(255,255,255,0.2)",
    headerMobileLinkIcon: "rgba(255, 255, 255, 1)",
    headerMobileParentMenu: "rgba(255, 255, 255, 0.4)",
    headerMobileCountryCurrencyMenu: "rgba(255, 255, 255, 0.7)",
    headerMobileCountryCurrencySubMenu: "rgba(255, 255, 255, 0.5)",
    headerMobileExhibitButtonBorder: "#FFF",
    siteLabel: "AeroExpo",
    gradient: "linear-gradient(90deg, #2EADD1 0%, #225989 100%)"
  }, _veDesignSystem.styles.colors.ar)
};
function templating(siteName) {
  return _objectSpread(_objectSpread({}, common), vars[siteName]);
}
var theme = exports.theme = {
  // ae:
  ae: templating("ae"),
  // di:
  di: templating("di"),
  // me:
  me: templating("me"),
  // ne:
  ne: templating("ne"),
  // ag:
  ag: templating("ag"),
  // ar:
  ar: templating("ar")
};