"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _redux = require("redux");
var _reactReduxToastr = require("react-redux-toastr");
var _accountReducer = require("../pages/mySpace/reducers/accountReducer");
var _signInReducer = require("../components/mySpaceLink/components/mySpaceModalSignIn/reducers/signInReducer");
var _subscriptionReducer = require("../pages/mySpace/reducers/subscriptionReducer");
var _bookmarkReducer = require("../pages/mySpace/reducers/bookmarkReducer");
var _applicationReducer = require("./applicationReducer");
var _trackingReducer = require("./trackingReducer");
var _headerMyspaceLinkReducer = require("./headerMyspaceLinkReducer");
var _menuReducer = require("./menuReducer");
var _footerCountryReducer = require("./footerCountryReducer");
var _requestsReducer = require("../pages/mySpace/reducers/requestsReducer");
var _quotationReducer = require("../pages/mySpace/reducers/quotationReducer");
var _messageReducer = require("../pages/mySpace/reducers/messageReducer");
var _mySpaceModalForgetReducer = require("../components/mySpaceLink/components/mySpaceModalForget/reducers/mySpaceModalForgetReducer");
var _viewerReducer = require("../pages/mySpace/reducers/viewerReducer");
var _quotationValidationReducer = require("../pages/mySpace/pages/mySpaceQuotationValidation/reducers/quotationValidationReducer");
var _quotationSigningReducer = require("../pages/mySpace/pages/mySpaceQuotationValidation/reducers/quotationSigningReducer");
var _quotationPaymentReducer = require("../pages/mySpace/pages/mySpaceQuotationValidation/reducers/quotationPaymentReducer");
var _brandsReducer = require("../components/brands/reducers/brandsReducer");
var _bannersReducer = require("../components/banners/reducers/bannersReducer");
var _requestFormReducer = require("../pages/request/reducers/requestFormReducer");
var _productsComparisonReducer = require("../pages/products/pages/productsComparison/reducers/productsComparisonReducer");
var _bookmarkReducer2 = require("../components/bookmark/bookmarkLink/reducers/bookmarkReducer");
var _grabberReducer = require("./grabberReducer");
var _standProductReducer = require("../pages/stand/reducers/standProductReducer");
var _recommendedProductsReducer = require("../pages/stand/pages/standProduct/components/recommendedProducts/reducers/recommendedProductsReducer");
var _suppliersReducer = require("./suppliersReducer");
var _catalogsReducer = require("./catalogsReducer");
var _pricesReducer = require("../pages/stand/reducers/pricesReducer");
var _homeReducer = require("../pages/home/reducers/homeReducer");
var _exhibitReducer = require("../pages/exhibit/manufacturer/components/form/reducers/exhibitReducer");
var _subscribeReducer = require("../pages/mailing/subscribe/components/form/reducers/subscribeReducer");
var _unsubscribeReducer = require("../pages/mailing/unsubscribe/components/form/reducers/unsubscribeReducer");
var _productDescription = require("../pages/stand/pages/standProduct/components/productDescriptions/reducers/productDescription");
var _requestFormWarningReducer = require("./requestFormWarningReducer");
var _didomiReducer = require("./didomiReducer");
var _histoRecoReducer = require("../components/histoReco/reducers/histoRecoReducer");
var _geolocReducer = require("../components/header/components/visitorGeoloc/reducers/geolocReducer");
var _combineReducers;
/* eslint-disable max-len */
var reducer = (0, _redux.combineReducers)((_combineReducers = {
  Application: _applicationReducer.ApplicationReducer,
  subscriptions: _subscriptionReducer.SubscriptionReducer,
  bookmark: _bookmarkReducer.BookmarkReducer,
  Tracking: _trackingReducer.TrackingReducer,
  toastr: _reactReduxToastr.reducer,
  form: _requestFormWarningReducer.errorToWarning,
  Account: _accountReducer.AccountReducer,
  SignIn: _signInReducer.SignInReducer,
  Requests: _requestsReducer.RequestReducer,
  VisitorInfos: _headerMyspaceLinkReducer.MyspaceLinkReducer,
  Menu: _menuReducer.MenuReducer,
  footerCountry: _footerCountryReducer.CountryReducer,
  quotation: _quotationReducer.QuotationReducer,
  message: _messageReducer.MessageReducer,
  mySpaceModalForgetReducer: _mySpaceModalForgetReducer.MySpaceModalForgetReducer,
  viewer: _viewerReducer.ViewerReducer,
  quotationValidation: _quotationValidationReducer.QuotationValidationReducer,
  quotationSigning: _quotationSigningReducer.QuotationSigningReducer,
  quotationPaymentReducer: _quotationPaymentReducer.QuotationPaymentReducer,
  brands: _brandsReducer.BrandsReducer,
  productsComparisonReducer: _productsComparisonReducer.ProductsComparisonReducer,
  bookmarkLink: _bookmarkReducer2.BookmarkLinkReducer,
  grabber: _grabberReducer.GrabberReducer
}, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_combineReducers, _requestFormReducer.RequestFormReducerName, _requestFormReducer.RequestFormReducer), _standProductReducer.StandProductReducerName, _standProductReducer.StandProductReducer), _productDescription.ProductDescriptionReducerName, _productDescription.ProductDescriptionReducer), "recommendationList", _recommendedProductsReducer.RecommendedProductsReducer), "prices", _pricesReducer.PricesReducer), "suppliers", _suppliersReducer.SuppliersReducer), "catalogs", _catalogsReducer.CatalogsReducer), "homeDatas", _homeReducer.HomeReducer), "histoRecoDatas", _histoRecoReducer.HistoRecoReducer), "exhibit", _exhibitReducer.ExhibitReducer), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_combineReducers, "didomi", _didomiReducer.DidomiReducer), "subscribeReducer", _subscribeReducer.SubscribeReducer), "unsubscribeReducer", _unsubscribeReducer.UnsubscribeReducer), "banners", _bannersReducer.BannersReducer), "geoloc", _geolocReducer.GeolocReducer)));
var _default = exports["default"] = reducer;