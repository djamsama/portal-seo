"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVendorStatus = exports.setUserCookiesConsentStatus = exports["default"] = exports.SET_VENDOR_STATUS = exports.SET_USER_COOKIES_CONSENT_STATUS = void 0;
var SET_VENDOR_STATUS = exports.SET_VENDOR_STATUS = "SET_VENDOR_STATUS";
var SET_USER_COOKIES_CONSENT_STATUS = exports.SET_USER_COOKIES_CONSENT_STATUS = "SET_USER_COOKIES_CONSENT_STATUS";

/** maj de la valeur du statut du consentement utilisateur pour le vendeur */
var setVendorStatus = exports.setVendorStatus = function setVendorStatus(name, status) {
  return {
    type: SET_VENDOR_STATUS,
    payload: {
      name: name,
      status: status
    }
  };
};

/**
 * Met à jour le statut du consentement de l'utilisateur pour les cookies
 * @param {string} consentName - Le nom du consentement
 * @param {boolean} isConsented - Le statut du consentement (vrai ou faux)
 * @returns {Object} - L'objet action avec le type et le payload
 */
var setUserCookiesConsentStatus = exports.setUserCookiesConsentStatus = function setUserCookiesConsentStatus(consentName, isConsented) {
  return {
    type: SET_USER_COOKIES_CONSENT_STATUS,
    payload: {
      consentName: consentName,
      isConsented: isConsented
    }
  };
};
var _default = exports["default"] = {};