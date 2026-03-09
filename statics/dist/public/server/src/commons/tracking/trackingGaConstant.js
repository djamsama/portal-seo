"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GOOGLE_ANALYTICS_EVENTS = void 0;
var naturalLabel = "Classic";
var pushedLabel = "CA";
var GOOGLE_ANALYTICS_EVENTS = exports.GOOGLE_ANALYTICS_EVENTS = {
  BUYING_FUNNEL: "BuyingFunnel",
  CLICK_BUTTON: "ClickBouton",
  CLICK_BOUTON_GO_TO_REQUEST_DETAIL: "ClickBoutonGoToRequestDetail",
  CLICK_BOUTON_QUOTE_VIEWER: "ClickBoutonQuoteViewer",
  CLICK_BOUTON_SIGN_FORM: "ClickBoutonSignForm",
  CLICK_BOUTON_SUBMIT_ADRESS_FORM: "ClickBoutonSubmitAdressForm",
  CLICK_PRODUCTS_NAVIGATION_HISTORY: "Click Reco LastConsulted",
  CLICK_REQUESTFORM_CONTACT_ADDRESS: "ClickAddress",
  CLICK_REQUESTFORM_CONTACT_PHONE: "ClickTel",
  CLICK_REQUESTFORM_CONTACT_SITE_LINK: "ClickWebsite",
  CLICK_REQUESTFORM_CONTACT_MAIL: "ClickMail",
  CLICK_MODIF_ADRESS: "ClickModifAdress",
  CLICK_BUTTON_PAY_BY_WIRE: "ClickBoutonVirement",
  CLICK_BUTTON_PAY_BY_CB: "ClickBoutonCB",
  CLICK_GATES: "clickPasserelle",
  CLOSE_CHANGE_QUOTE_FORM: "CloseChangeQuoteForm",
  CLOSE_QUOTE_VIEWER: "CloseQuoteViewer",
  DISPLAY_ADRESS_FORM: "DisplayAdressForm",
  DISPLAY_CHANGE_QUOTE_FORM: "DisplayChangeQuoteForm",
  DISPLAY_CONFIRM: "DisplayConfirm",
  DISPLAY_ERROR_ADRESS_FORM: "DisplayErrorAdressForm",
  DISPLAY_ERROR_CHANGE_QUOTE_FORM: "DisplayErrorChangeQuoteForm",
  DISPLAY_ERROR_SIGN_FORM: "DisplayErrorSignForm",
  DISPLAY_QUOTE_VIEWER: "DisplayQuoteViewer",
  DISPLAY_HISTO_PRODUCT: "Show Reco LastConsulted",
  DISPLAY_REQUEST_DETAIL: "DisplayRequestDetail",
  DISPLAY_SIGN_FORM: "DisplaySignForm",
  DISPLAY_PAYMENT_TYPE: "DisplayPaymentType",
  DISPLAY_CONFIRM_WIRE: "DisplayConfirmVirement",
  DISPLAY_CONFIRM_CB: "DisplayConfirmCB",
  DISPLAY_CONFIRM_CB_ERROR: "DisplayConfirmCBError",
  DISPLAY_GATES: "displayPasserelle",
  DISPLAY_GATES_CLIC: "displayPasserelleClic",
  EXIT_ADRESS_FORM: "ExitAdressForm",
  EXIT_CONFIRM: "ExitConfirm",
  EXIT_SIGN_FORM: "ExitSignForm",
  QUOTE_VIEWER: "QuoteViewer",
  REQUEST_DETAIL_ACCOUNT: "RequestDetailAccount",
  SEND_CHANGE: "SendChange",
  SEND_CHANGE_QUOTE_FORM: "sendChangeQuoteForm",
  SEND_ORDER: "SendOrder",
  EVENT: "event",
  HOME_PAGE_PRODUCT: {
    CATEGORY: "HomePage",
    ACTION: "ClickNewProducts",
    LABEL: {
      NATURAL: naturalLabel,
      PUSHED: pushedLabel
    }
  },
  HOME_PAGE_PROJECT: {
    CATEGORY: "HomePage",
    ACTION: "ClickNewProjects",
    LABEL: {
      NATURAL: naturalLabel,
      PUSHED: pushedLabel
    }
  },
  HOME_PAGE_TRENDS: {
    CATEGORY: "HomePage",
    ACTION: "ClickNewTrends",
    LABEL: {
      NATURAL: naturalLabel,
      PUSHED: pushedLabel
    }
  },
  HOME_PAGE_EMAG: {
    CATEGORY: "HomePage",
    ACTION: "ClickEmag",
    LABEL: "Article"
  },
  BRAND_CLOUD: {
    CATEGORY: "BrandCloud",
    ACTION: "ClickLogo",
    LABEL: "CA"
  },
  FA_PAGE_CLICK_SEND_FORM: {
    CATEGORY: "FA",
    ACTION: "sendForm",
    LABEL: "clickBouton"
  },
  FA_PAGE_SEND_FORM_IN_ERROR: {
    CATEGORY: "FA",
    ACTION: "sendForm",
    LABEL: "displayError"
  },
  FA_PAGE_SEND_FORM_SUCCESS: {
    CATEGORY: "FA",
    ACTION: "sendForm",
    LABEL: "displaySuccess"
  },
  RFQ_HEADER_MENU: {
    CATEGORY: "HEADER",
    ACTION: "AO",
    LABEL: "ClickButtonAO"
  },
  CAROUSEL_GATE: {
    CATEGORY: "Produit",
    LABEL: "carrousel"
  }
};