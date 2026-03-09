"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeFactory = void 0;
var _redux = require("redux");
var _reduxThunk = require("redux-thunk");
var _reduxObservable = require("redux-observable");
var _withGoogleAnalytics = require("../hoc/withGoogleAnalytics");
var _index = _interopRequireDefault(require("../reducers/index"));
var _initiateState = require("../initiateState");
var _translationEpic = require("../epic/translationEpic");
var _trackingEpic = require("../epic/trackingEpic");
var _headerMyspaceLinkEpic = require("../epic/headerMyspaceLinkEpic");
var _menuEpic = require("../epic/menuEpic");
var _checkCurrencyEpic = require("../epic/checkCurrencyEpic");
var _footerCountryEpic = require("../epic/footerCountryEpic");
var _quotationEpic = require("../epic/quotationEpic");
var _messageEpic = require("../epic/messageEpic");
var _brandsEpic = require("../epic/brandsEpic");
var _bannersEpic = require("../epic/bannersEpic");
var _quotationValidationEpic = require("../epic/quotationValidationEpic");
var _quotationPayByCardEpic = require("../epic/quotationPayByCardEpic");
var _quotationPayByWireEpic = require("../epic/quotationPayByWireEpic");
var _quotationValidationFailEpic = require("../epic/quotationValidationFailEpic");
var _quotationSigningEpic = require("../epic/quotationSigningEpic");
var _requestFormEpic = require("../epic/requestFormEpic");
var _homeEpic = require("../pages/home/epics/homeEpic");
var _recommendationsFormEpic = require("../epic/recommendationsFormEpic");
var _requestFormMiddleware = require("../middleware/tracking/requestForm/requestFormMiddleware");
var storeFactory = exports.storeFactory = function storeFactory(history, state) {
  var rootEpicMiddleware = (0, _reduxObservable.combineEpics)(_translationEpic.getTranslationEpic, _trackingEpic.getTrackingEpic, _trackingEpic.initTrackingEpic, _menuEpic.MenuEpic, _checkCurrencyEpic.checkCurrencyEpic, _headerMyspaceLinkEpic.myspaceLinkGetInfoEpic, _headerMyspaceLinkEpic.myspaceLinkLogOutEpic, _quotationEpic.quotationEpic, _messageEpic.messageEpic, _footerCountryEpic.countryEpic, _brandsEpic.brandsEpic, _quotationValidationEpic.quotationValidationEpic, _quotationPayByCardEpic.quotationPayByCardEpic, _quotationPayByWireEpic.quotationPayByWireEpic, _quotationValidationFailEpic.quotationValidationFailEpic, _quotationSigningEpic.quotationSigningEpic, _requestFormEpic.requestFormEpic, _recommendationsFormEpic.recommendationsFormEpic, _homeEpic.homeEpic, _homeEpic.homeBuyingGuideEpic, _homeEpic.homeEmagsEpic, _bannersEpic.bannersEpic);
  var epicMiddleware = (0, _reduxObservable.createEpicMiddleware)({
    dependencies: {
      googleAnalytics: _withGoogleAnalytics.googleAnalytics
    }
  });

  // Build the middleware for intercepting and dispatching navigation actions
  var middlewares = [_reduxThunk.thunk, epicMiddleware, _requestFormMiddleware.gaMiddleware
  // createRavenMiddleware(Raven, {})
  ];
  var enhancers = [_redux.applyMiddleware.apply(void 0, middlewares)];
  /* eslint-disable no-undef */
  if (false && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined") {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  // $FlowFixMe
  var store = (0, _redux.createStore)(_index["default"], state || (0, _initiateState.InitiateState)(), _redux.compose.apply(void 0, enhancers));
  epicMiddleware.run(rootEpicMiddleware);
  return store;
};