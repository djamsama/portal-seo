"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STEP_ID_FORMATED = exports.ROUTE_MYSPACE_THANKS = exports.ROUTE_LANDING_PAGE_RECOMMENDATIONS = exports.REQUEST_PRICE_LIST = exports.REQUEST_LOGIN_FORM = exports.REQUEST_DEFAULT = exports.REQUEST_CONTACT_DETAIL = exports.PRICE_STEP_ID = exports.LAST_STEP_ID = exports.LAST_STEPS_ID = exports.GA_LABELS = exports.CHOICE_STEP_ID = exports.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED = exports.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL = exports.AJAX_REQUEST_VISITOR_REGISTER_FORMATED = exports.AJAX_REQUEST_VISITOR_REGISTER = exports.AJAX_REQUEST_RECOMMENDATION_FORM_FORMATED = exports.AJAX_REQUEST_RECOMMENDATION_FORM = exports.AJAX_REQUEST_RECOMMENDATION_CONFIRMATION_FORMATED = exports.AJAX_REQUEST_RECOMMENDATION_CONFIRMATION = exports.AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED = exports.AJAX_REQUEST_PROSPECT_PRICE_LIST = exports.AJAX_REQUEST_PRODUCTS_GATEWAY_LIST = exports.AJAX_REQUEST_FORM_FORMATED = exports.AJAX_REQUEST_FORM_CONTACT_CHOICE_FORMATED = exports.AJAX_REQUEST_FORM_CONTACT_CHOICE = exports.AJAX_REQUEST_FORM = exports.AJAX_REQUEST_CONTACT_CONFIRMATION_FORMATED = exports.AJAX_REQUEST_CONTACT_CONFIRMATION = exports.AJAX_REQUEST_CONFIRMATION_FORMATED = exports.AJAX_REQUEST_CONFIRMATION = void 0;
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var AJAX_REQUEST_FORM = exports.AJAX_REQUEST_FORM = "ajax.request.form";
var AJAX_REQUEST_RECOMMENDATION_FORM = exports.AJAX_REQUEST_RECOMMENDATION_FORM = "ajax.request.recommendation.form";
var AJAX_REQUEST_FORM_CONTACT_CHOICE = exports.AJAX_REQUEST_FORM_CONTACT_CHOICE = "ajax.request.formContactChoice";
var AJAX_REQUEST_CONFIRMATION = exports.AJAX_REQUEST_CONFIRMATION = "ajax.request.confirmation";
var AJAX_REQUEST_RECOMMENDATION_CONFIRMATION = exports.AJAX_REQUEST_RECOMMENDATION_CONFIRMATION = "ajax.request.recommendation.confirmation";
var AJAX_REQUEST_CONTACT_CONFIRMATION = exports.AJAX_REQUEST_CONTACT_CONFIRMATION = "ajax.request.prospect.contact";
var AJAX_REQUEST_VISITOR_REGISTER = exports.AJAX_REQUEST_VISITOR_REGISTER = "ajax.request.visitor.register";
var AJAX_REQUEST_VISITOR_REGISTER_PARTIAL = exports.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL = "ajax.request.visitor.registerPartial";
var AJAX_REQUEST_PROSPECT_PRICE_LIST = exports.AJAX_REQUEST_PROSPECT_PRICE_LIST = "ajax.request.prospect.price.list";
var AJAX_REQUEST_PRODUCTS_GATEWAY_LIST = exports.AJAX_REQUEST_PRODUCTS_GATEWAY_LIST = "ajax/products/gatewayshop.json";
var REQUEST_LOGIN_FORM = exports.REQUEST_LOGIN_FORM = "RequestLoginForm";
var ROUTE_LANDING_PAGE_RECOMMENDATIONS = exports.ROUTE_LANDING_PAGE_RECOMMENDATIONS = "route.landing.page.recommendations.form";
var ROUTE_MYSPACE_THANKS = exports.ROUTE_MYSPACE_THANKS = "route.myspace.thanks";
var AJAX_REQUEST_FORM_FORMATED = exports.AJAX_REQUEST_FORM_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_FORM);
var AJAX_REQUEST_RECOMMENDATION_FORM_FORMATED = exports.AJAX_REQUEST_RECOMMENDATION_FORM_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_RECOMMENDATION_FORM);
var AJAX_REQUEST_FORM_CONTACT_CHOICE_FORMATED = exports.AJAX_REQUEST_FORM_CONTACT_CHOICE_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_FORM_CONTACT_CHOICE);
var AJAX_REQUEST_CONFIRMATION_FORMATED = exports.AJAX_REQUEST_CONFIRMATION_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_CONFIRMATION);
var AJAX_REQUEST_RECOMMENDATION_CONFIRMATION_FORMATED = exports.AJAX_REQUEST_RECOMMENDATION_CONFIRMATION_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_RECOMMENDATION_CONFIRMATION);
var AJAX_REQUEST_CONTACT_CONFIRMATION_FORMATED = exports.AJAX_REQUEST_CONTACT_CONFIRMATION_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_CONTACT_CONFIRMATION);
var AJAX_REQUEST_VISITOR_REGISTER_FORMATED = exports.AJAX_REQUEST_VISITOR_REGISTER_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_VISITOR_REGISTER);
var AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED = exports.AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_VISITOR_REGISTER_PARTIAL);
var AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED = exports.AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED = (0, _camelCase["default"])(AJAX_REQUEST_PROSPECT_PRICE_LIST);
var REQUEST_DEFAULT = exports.REQUEST_DEFAULT = "REQUEST_DEFAULT";
var REQUEST_CONTACT_DETAIL = exports.REQUEST_CONTACT_DETAIL = "CONTACT_DETAILS";
var REQUEST_PRICE_LIST = exports.REQUEST_PRICE_LIST = "PRICE_LIST";
// voir https://docs.google.com/document/d/1K7pxynZS81jFtT4B58SOeNWxuiVW9WVeoWQuScGbODM/edit#
var LABELS = exports.GA_LABELS = {};
LABELS[AJAX_REQUEST_FORM_FORMATED] = {
  id: "Request Form",
  send: "Send Request Form",
  display: "Display Request Form",
  displayError: "Redisplay Request Form",
  close: "close Request Form"
};
LABELS[REQUEST_LOGIN_FORM] = {
  id: "Login Form",
  send: "Send Login Form",
  display: "Display Login Form",
  displayError: "Redisplay Login Form",
  close: "close Login Form"
};
LABELS[AJAX_REQUEST_VISITOR_REGISTER_FORMATED] = {
  id: "Identification Form",
  send: "Send Identification Form",
  display: "Display Identification Form",
  displayError: "Redisplay Identification Form",
  close: "close Identification Form"
};
LABELS[AJAX_REQUEST_FORM_CONTACT_CHOICE_FORMATED] = {
  id: "DealerSelector",
  send: "ValidateDealerSelector",
  displayError: "Redisplay DealerSelector",
  display: "showDealerSelector",
  close: "CloseDealerSelector"
};
LABELS[AJAX_REQUEST_CONFIRMATION_FORMATED] = {
  id: "Request Confirmation",
  displayDirect: "Direct Submit",
  display2submit: "2Steps Submit",
  close: "close Request Confirmation",
  "return": "close Request Confirmation"
};
LABELS[AJAX_REQUEST_CONTACT_CONFIRMATION_FORMATED] = {
  id: "ShowInformations",
  displayDirect: "Direct Submit",
  display2submit: "2Steps Submit",
  dealer: "DealerInformations",
  supplier: "Map Single Result",
  display: "ShowInformations",
  close: "closeInformations",
  "return": "close DealerInformations"
};
LABELS[AJAX_REQUEST_VISITOR_REGISTER_PARTIAL_FORMATED] = {
  id: "Partial Identification Form",
  send: "Send Partial Identification Form",
  display: "Display Partial Identification Form",
  displayError: "Redisplay Partial Identification Form",
  close: "Close Partial Identification Form",
  city: " Display MAJ VerifCity",
  phone: " Display MAJ Tel",
  other: "Display MAJ Other"
};
LABELS[AJAX_REQUEST_PROSPECT_PRICE_LIST_FORMATED] = {
  id: "Request Pricelist",
  action: "RequestPriceList",
  display: "Show PriceList Viewer",
  displayError: "Redisplay Show PriceList Viewer",
  close: "Close PriceList Viewer",
  "return": "ClickBack PriceList Viewer",
  clickBouton: "ClickBouton From PriceList Viewer"
};
var LAST_STEP_ID = exports.LAST_STEP_ID = AJAX_REQUEST_CONFIRMATION;
var CHOICE_STEP_ID = exports.CHOICE_STEP_ID = AJAX_REQUEST_FORM_CONTACT_CHOICE;
var PRICE_STEP_ID = exports.PRICE_STEP_ID = AJAX_REQUEST_PROSPECT_PRICE_LIST;
var LAST_STEPS_ID = exports.LAST_STEPS_ID = {};
LAST_STEPS_ID[AJAX_REQUEST_CONFIRMATION] = true;
LAST_STEPS_ID[AJAX_REQUEST_CONTACT_CONFIRMATION] = true;
LAST_STEPS_ID[AJAX_REQUEST_PROSPECT_PRICE_LIST] = true;
LAST_STEPS_ID[ROUTE_LANDING_PAGE_RECOMMENDATIONS] = true;
var STEP_ID_FORMATED = exports.STEP_ID_FORMATED = {
  ajaxRequestForm: "ajaxRequestForm",
  ajaxRequestFormContactChoice: "ajaxRequestFormContactChoice",
  ajaxRequestProspectPriceList: "ajaxRequestProspectPriceList"
};