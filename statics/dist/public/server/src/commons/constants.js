"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "APPLICATION", {
  enumerable: true,
  get: function get() {
    return _items.APPLICATION;
  }
});
exports.DEFAULT_LOCALE = exports.DATE_PATTERN = exports.CONTACT_TYPES = exports.BAIDU_SITE_VERIFICATION = void 0;
Object.defineProperty(exports, "DELAY_TO_RETRY", {
  enumerable: true,
  get: function get() {
    return _trackingStatsCo.DELAY_TO_RETRY;
  }
});
exports.DISTRIBUTOR_STATUS = exports.DISTRIBUTOR_ACTIV_STATUS = void 0;
Object.defineProperty(exports, "ELEMENT_TYPE", {
  enumerable: true,
  get: function get() {
    return _trackingStatsCo.ELEMENT_TYPE;
  }
});
exports.FLAG_ICON_URL = exports.FILER_MYSPACE_FOLDER = void 0;
Object.defineProperty(exports, "GOOGLE_ANALYTICS_EVENTS", {
  enumerable: true,
  get: function get() {
    return _trackingGaConstant.GOOGLE_ANALYTICS_EVENTS;
  }
});
exports.MAX_UPLOAD_FILE_SIZE = exports.MAX_PRODUCTS_TO_COMPARE = exports.MAPS_GOOLGLE_API_CLIENT_ID = exports.LOCAL_STORAGE_RECO_KEY = exports.LOCAL_STORAGE_RECENT_SEARCH_KEY = exports.LOCAL_STORAGE_GRABBER = exports.LOCAL_STORAGE = exports.LOCALES = exports.LANGUAGES = exports.INOVO_TYPES = exports.INITIATOR_TO_RESPONDENT = exports.IMG_ROOT_URL = exports.HISTORY_PRODUCTS_MAX = exports.HASH_MYSPACE = exports.HASH_ACCOUNT_MYSPACE = exports.GOOGLE_SITE_VERIFICATION = void 0;
Object.defineProperty(exports, "MONGO_TRACKING_URL", {
  enumerable: true,
  get: function get() {
    return _trackingStatsCo.MONGO_TRACKING_URL;
  }
});
exports.TIME_PATTERN = exports.SUBDOMAINS = exports.STATIC_ROOT_URL = exports.SHOP = exports.SEUIL_PROMO = exports.SEARCH_MODE_DEFAULT = exports.SCHEMA_URL = exports.ROUTE_TRENDS_HOME = exports.ROUTE_STAND_TRENDS = exports.ROUTE_STAND_PROJECT = exports.ROUTE_STAND_PRODUCTS_LIST = exports.ROUTE_STAND_PRODUCT = exports.ROUTE_STAND_EXHIBIT = exports.ROUTE_STAND_COMPANY = exports.ROUTE_STAND_CATALOG_VIEW = exports.ROUTE_STAND_CATALOG = exports.ROUTE_REQUEST_FORM = exports.ROUTE_PROJECT_HOME = exports.ROUTE_HOME = exports.ROUTE_EXHIBIT_MANUFACTURER = exports.ROUTE_EXHIBIT_DISTRIBUTOR = exports.ROUTE_CATALOG = exports.RFQ_STATUS = exports.RESPONDENT_TO_INITIATOR = exports.REQUEST_BUTTON_TYPE = exports.QUOTATION_STATUS = exports.PRICE_TYPE = exports.PAYMENT_TYPE = exports.PAYMENT_STATUS = exports.PAGE_TYPE_ID_PRODUCT = exports.MS_VALIDATE_01 = void 0;
Object.defineProperty(exports, "TRACKING_EVENTS", {
  enumerable: true,
  get: function get() {
    return _trackingStatsCo.TRACKING_EVENTS;
  }
});
Object.defineProperty(exports, "TRACKING_SUBTYPE", {
  enumerable: true,
  get: function get() {
    return _trackingStatsCo.TRACKING_SUBTYPE;
  }
});
exports.WEB_VITALS_SAMPLE = exports.VIDEO_HASH = exports.UPLOAD_ACCEPTED_FILES = void 0;
var _trackingGaConstant = require("./tracking/trackingGaConstant");
var _trackingStatsCo = require("./tracking/trackingStatsCo");
var _items = require("./items/items");
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* Meta */
var BAIDU_SITE_VERIFICATION = exports.BAIDU_SITE_VERIFICATION = "baidu-site-verification";
var DEFAULT_LOCALE = exports.DEFAULT_LOCALE = "en";
var GOOGLE_SITE_VERIFICATION = exports.GOOGLE_SITE_VERIFICATION = "google-site-verification";
var MS_VALIDATE_01 = exports.MS_VALIDATE_01 = "msvalidate.01";
/* Nom des routes */
var ROUTE_HOME = exports.ROUTE_HOME = "route.home";
var ROUTE_PROJECT_HOME = exports.ROUTE_PROJECT_HOME = "route.projects.home";
var ROUTE_TRENDS_HOME = exports.ROUTE_TRENDS_HOME = "route.trends.home";
var ROUTE_CATALOG = exports.ROUTE_CATALOG = "route.catalogs";
var ROUTE_STAND_COMPANY = exports.ROUTE_STAND_COMPANY = "route.stand.company.tab";
var ROUTE_STAND_PRODUCTS_LIST = exports.ROUTE_STAND_PRODUCTS_LIST = "route.company.product.list";
var ROUTE_STAND_PRODUCT = exports.ROUTE_STAND_PRODUCT = "route.product.stand";
var ROUTE_STAND_CATALOG = exports.ROUTE_STAND_CATALOG = "route.catalog.stand";
var ROUTE_STAND_CATALOG_VIEW = exports.ROUTE_STAND_CATALOG_VIEW = "route.catalog.view";
var ROUTE_STAND_PROJECT = exports.ROUTE_STAND_PROJECT = "route.projects.stand";
var ROUTE_STAND_TRENDS = exports.ROUTE_STAND_TRENDS = "route.trends.stand";
var ROUTE_STAND_EXHIBIT = exports.ROUTE_STAND_EXHIBIT = "route.stand.exhibit";
var ROUTE_EXHIBIT_MANUFACTURER = exports.ROUTE_EXHIBIT_MANUFACTURER = "route.exhibit.manufacturer";
var ROUTE_EXHIBIT_DISTRIBUTOR = exports.ROUTE_EXHIBIT_DISTRIBUTOR = "route.exhibit.distributor";
var ROUTE_REQUEST_FORM = exports.ROUTE_REQUEST_FORM = "route.request.form";
/* urls */
// eslint-disable-next-line no-undef
var FLAG_ICON_URL = exports.FLAG_ICON_URL = "".concat("https://img.virtual-expo.com", "/media/ps/images/common/flags/flags-icons.png");
var SUBDOMAINS = exports.SUBDOMAINS = {
  WORLD_WIDE_WEB: "www",
  ADMINISTRATION: "admin",
  FTP: "ftp",
  CATALOG: "pdf",
  STATIC: "static",
  IMG: "img",
  VIDEO: "video",
  NEWS: "news",
  CUSTOMER: "customers",
  SECURE: "secure",
  BACKOFFFICE: "backoffice",
  TRENDS: "trends",
  DEALERS: "dealers",
  EMAG: "emag",
  CUSTOM: "custom",
  PROJECTS: "projects"
};
var HASH_ACCOUNT_MYSPACE = exports.HASH_ACCOUNT_MYSPACE = "#myspace-account";
var HASH_MYSPACE = exports.HASH_MYSPACE = {
  "default": "requestUrl",
  "#myspace-account": "accountUrl",
  "#myspace-bookmark": "bookmarkUrl",
  "#myspace-subscription": "subscriptionUrl",
  "#myspace-request": "requestUrl"
};

/** Langues */
var LANGUAGES = exports.LANGUAGES = {
  EN: "0px 0px",
  DE: "0px -20px",
  FR: "0px -40px",
  ES: "0px -60px",
  IT: "0px -80px",
  ZH: "0px -100px",
  JA: "0px -120px",
  RU: "0px -140px",
  PT: "0px -160px"
};
var LOCALES = exports.LOCALES = {
  EN: "en",
  DE: "de",
  FR: "fr",
  ES: "es",
  IT: "it",
  ZH: "zh",
  JA: "ja",
  RU: "ru",
  PT: "pt"
};

/** chemin de fer */
var SCHEMA_URL = exports.SCHEMA_URL = "https://schema.org/";

/** messages myspace */
var INITIATOR_TO_RESPONDENT = exports.INITIATOR_TO_RESPONDENT = "INITIATOR_TO_RESPONDENT";
var RESPONDENT_TO_INITIATOR = exports.RESPONDENT_TO_INITIATOR = "RESPONDENT_TO_INITIATOR";
var DATE_PATTERN = exports.DATE_PATTERN = "{0, date, short}";
var TIME_PATTERN = exports.TIME_PATTERN = "{0, time, short}";
var QUOTATION_STATUS = exports.QUOTATION_STATUS = {
  ACCEPTED: "ACCEPTED",
  REFUSED: "REFUSED",
  SENT: "SENT"
};
var RFQ_STATUS = exports.RFQ_STATUS = {
  ACCEPTED: "ACCEPTED",
  REFUSED: "REFUSED",
  CLOSED: "CLOSED",
  SENT: "SENT",
  ON_HOLD: "ON_HOLD"
};
var PAYMENT_TYPE = exports.PAYMENT_TYPE = {
  WIRE: "wire",
  CARD: "card"
};
var PAYMENT_STATUS = exports.PAYMENT_STATUS = {
  PENDING: "PENDING",
  REFUSED: "REFUSED",
  ACCEPTED: "ACCEPTED",
  VALIDATED: "VALIDATED"
};
var STATIC_ROOT_URL = exports.STATIC_ROOT_URL = "https://static.virtual-expo.com";
var IMG_ROOT_URL = exports.IMG_ROOT_URL = "".concat("https://img.virtual-expo.com");
var FILER_MYSPACE_FOLDER = exports.FILER_MYSPACE_FOLDER = "/home/dirind/www/www/shared_customers/proxy/myspace/";
var UPLOAD_ACCEPTED_FILES = exports.UPLOAD_ACCEPTED_FILES = "application/pdf, image/jpeg, image/png, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation";
var MAX_UPLOAD_FILE_SIZE = exports.MAX_UPLOAD_FILE_SIZE = 10;

/** Local storage data. */
var LOCAL_STORAGE = exports.LOCAL_STORAGE = "storage";
var LOCAL_STORAGE_GRABBER = exports.LOCAL_STORAGE_GRABBER = "ve_grabber";

/** Nombre maximum de produits à ajouter au comparateur */
var MAX_PRODUCTS_TO_COMPARE = exports.MAX_PRODUCTS_TO_COMPARE = 10;
var MAPS_GOOLGLE_API_CLIENT_ID = exports.MAPS_GOOLGLE_API_CLIENT_ID = "gme-virtualexposa";

/** Page type id produit. */
var PAGE_TYPE_ID_PRODUCT = exports.PAGE_TYPE_ID_PRODUCT = 150;
var INOVO_TYPES = exports.INOVO_TYPES = {
  NOMINEE: "NOMINEE",
  INNOVATIVE: "INNOVATIVE",
  WINNER: "WINNER"
};
var VIDEO_HASH = exports.VIDEO_HASH = "#video";

/** price type */
var PRICE_TYPE = exports.PRICE_TYPE = {
  PRICE_RANGE: "PRICE_RANGE",
  INDICATIVE_PRICE: "INDICATIVE_PRICE",
  PRICE_FROM: "PRICE_FROM"
};

/** Request button type */
var REQUEST_BUTTON_TYPE = exports.REQUEST_BUTTON_TYPE = {
  QUOTE: "QUOTE",
  RATE: "RATE",
  DOC: "DOC",
  QUESTION: "QUESTION",
  CONTACT_DETAILS: "CONTACT_DETAILS",
  PRICE_LIST: "PRICE_LIST"
};

/** * default search mode */

var SEARCH_MODE_DEFAULT = exports.SEARCH_MODE_DEFAULT = "products";
var LOCAL_STORAGE_RECENT_SEARCH_KEY = exports.LOCAL_STORAGE_RECENT_SEARCH_KEY = "search";
var LOCAL_STORAGE_RECO_KEY = exports.LOCAL_STORAGE_RECO_KEY = "reco";
var HISTORY_PRODUCTS_MAX = exports.HISTORY_PRODUCTS_MAX = 18;

/** échantillonnage des web vitals. les valeurs doivent être entières.   */
var WEB_VITALS_SAMPLE = exports.WEB_VITALS_SAMPLE = {
  take: 1,
  of: 1000
};
var DISTRIBUTOR_STATUS = exports.DISTRIBUTOR_STATUS = {
  UNRELATED: 0,
  REMOVED: 1,
  FREE: 2,
  TRIAL: 3,
  COMMISSIONED: 4,
  TRIAL_PAID: 5,
  SUBSCRIBED_HIGHLIGHT: 6,
  SUBSCRIBED_VIRTUALSTORE: 7
};
var DISTRIBUTOR_ACTIV_STATUS = exports.DISTRIBUTOR_ACTIV_STATUS = {
  TRIAL: DISTRIBUTOR_STATUS.TRIAL,
  COMMISSIONED: DISTRIBUTOR_STATUS.COMMISSIONED,
  TRIAL_PAID: DISTRIBUTOR_STATUS.TRIAL_PAID,
  SUBSCRIBED_HIGHLIGHT: DISTRIBUTOR_STATUS.SUBSCRIBED_HIGHLIGHT,
  SUBSCRIBED_VIRTUALSTORE: DISTRIBUTOR_STATUS.SUBSCRIBED_VIRTUALSTORE
};
var CONTACT_TYPES = exports.CONTACT_TYPES = {
  AREA_MANAGER: "AREA_MANAGER",
  DEALER: "DEALER",
  MAIN_CONTACT: "MAIN_CONTACT",
  PROJECT: "PROJECT"
};
var SHOP = exports.SHOP = {
  currency: "EUR"
};

// #Pourcentage du seuil minimal pour afficher le promo
var SEUIL_PROMO = exports.SEUIL_PROMO = 5;