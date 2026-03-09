"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _ = _interopRequireDefault(require("./.."));
var _currencyActions = require("../../../actions/currencyActions");
var mapStateToProps = function mapStateToProps(application) {
  var _didomi$cookiesConsen, _didomi$cookiesConsen2;
  var Application = application.Application,
    didomi = application.didomi;
  var localeProp = Application.localeProp,
    currentCurrency = Application.currentCurrency,
    currencyItems = Application.currencyItems;

  // Obtenir la valeur du consentement du visiteur pour les cookies de personnalisation du site web.
  var isWebsiteCustomizationCookieConsented = (_didomi$cookiesConsen = didomi === null || didomi === void 0 || (_didomi$cookiesConsen2 = didomi.cookiesConsents) === null || _didomi$cookiesConsen2 === void 0 ? void 0 : _didomi$cookiesConsen2.websiteCustomization) !== null && _didomi$cookiesConsen !== void 0 ? _didomi$cookiesConsen : true;
  return {
    locale: localeProp,
    currentCurrency: currentCurrency,
    currencyItems: currencyItems,
    isWebsiteCustomizationCookieConsented: isWebsiteCustomizationCookieConsented
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadCurrency: function loadCurrency() {
      dispatch((0, _currencyActions.loadCurrency)());
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_["default"]);