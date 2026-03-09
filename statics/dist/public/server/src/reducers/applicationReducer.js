"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationReducerName = exports.ApplicationReducer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _initiateState = require("../initiateState");
var Action = _interopRequireWildcard(require("../actions/index"));
var _currencyHelper = require("../helpers/currencyHelper");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ApplicationReducerName = exports.ApplicationReducerName = "Application";
var ApplicationReducer = exports.ApplicationReducer = function ApplicationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _initiateState.InitiateState)();
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = _objectSpread({}, state);
  switch (action.type) {
    case Action.TRANSLATIONS_LOADED:
      if (state.messages) {
        return _objectSpread(_objectSpread({}, state), {}, {
          messages: _objectSpread(_objectSpread({}, state.messages), action.payload)
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: action.payload
      });
    case Action.SEARCH_MODE_CHANGE:
      {
        var menuItems = newState.searchMenuItems;
        menuItems.forEach(function (item) {
          if (item.mode === action.payload.mode) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
        return newState;
      }
    case Action.LOAD_CURRENCY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        currencyItems: action.payload.data
      });
    case Action.CONVERT_CURRENCY_SUCCESS:
      {
        if (!action || !action.payload || !action.payload.price) {
          return state;
        }
        var _action$payload = action.payload,
          price = _action$payload.price,
          currentCurrency = _action$payload.currentCurrency,
          rates = _action$payload.rates;
        var priceLabel = _currencyHelper.CurrencyHelper.doLabel(action.payload.price);
        if (!priceLabel) {
          return state;
        }
        var currencies = state.currencies;
        var forceCurrency = state.forceCurrency;
        currencies[priceLabel] = action.payload.price;
        if (!forceCurrency) {
          forceCurrency = 0;
        }
        if (currencies[priceLabel] && !currencies[priceLabel][currentCurrency]) {
          // On converti et on stocke la conversion pour refaire la conversion de ce prix
          var taux = rates["".concat(price.currency, "-").concat(currentCurrency)]; // On recupere le taux dans le tableau de rates
          var newPrice = _currencyHelper.CurrencyHelper.getRoundPrice(price.price * taux); // On recupere le nouveau prix arrondi
          var newPriceMax = null;
          var formattedPrice = _currencyHelper.CurrencyHelper.formatCurrency(newPrice, currentCurrency, state.localeProp); // On ajoute la device
          if (price.priceMax) {
            newPriceMax = _currencyHelper.CurrencyHelper.getRoundPrice(price.priceMax * taux); // On recupere le nouveau prix arrondi
          }
          if (newPrice && formattedPrice) {
            if (newPriceMax) {
              formattedPrice += " - ".concat(_currencyHelper.CurrencyHelper.formatCurrency(newPriceMax, currentCurrency, state.localeProp)); // On ajoute la device
            }
            currencies[priceLabel][currentCurrency] = {
              formattedPrice: formattedPrice,
              price: newPrice
            }; // on stocke
          }
          forceCurrency += 1; // On force l'update des composants
          return _objectSpread(_objectSpread({}, state), {}, {
            currencies: currencies,
            forceCurrency: forceCurrency
          });
        }
        return state;
      }
    case Action.GET_RATES_LOADING:
      {
        newState.loadingRates = true;
        return newState;
      }
    case Action.GET_RATES_SUCCESS:
      {
        newState.loadingRates = false;
        newState.rates = action.payload.rates;
        return newState;
      }
    case Action.CHECK_CURRENCY_SUCCESS:
      {
        if (!action || !action.payload || !action.payload.price) {
          return state;
        }
        var _priceLabel = _currencyHelper.CurrencyHelper.doLabel(action.payload.price);
        if (_priceLabel) {
          var _currencies = state.currencies;
          _currencies[_priceLabel] = action.payload.price;
          return _objectSpread(_objectSpread({}, state), {}, {
            currencies: _currencies
          });
        }
        return state;
      }
    case Action.CHANGE_CURRENCY:
      newState.currentCurrency = action.payload.currency;
      newState.rates = action.payload.rates;
      return newState;
    case Action.SEARCHBOX_SUBMIT_SEARCH_SUCCESS:
      return state;
    case Action.SEARCHBOX_AUTOCOMPLETE_SUCCESS:
      {
        // TODO apres vallidation changer ici: http://gitlab.virtual-expo.com/java/ve-search-core/blob/99bda5126da54d5aff55deeda5cf039379f0c192/src/main/java/com/ve/search/core/strategy/querying/autocomplete/SuggestStrategy.java#L417
        var transformedData = action.payload.data;
        try {
          transformedData = action.payload.data.map(function (oldValue) {
            var newValue = oldValue;
            if (newValue && newValue.label && typeof newValue.label === "string") {
              var newLabel = newValue.label;
              newLabel = newLabel.replace(/<em>/g, "<span class='removeBold'>");
              newLabel = newLabel.replace(/<\/em>/g, "</span>");
              newValue.label = newLabel;
            }
            return newValue;
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn("Reducer transformedData error");
          return _objectSpread(_objectSpread({}, state), {}, {
            autocompleteItems: action.payload.data
          });
        }
        return _objectSpread(_objectSpread({}, state), {}, {
          autocompleteItems: transformedData
        });
      }
    case Action.SEARCHBOX_FREQUENT_SEARCH_LOADED:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          frequentlySearchedItems: action.payload.search
        });
      }
    case Action.SEARCHBOX_RESET_AUTOCOMPLETE:
      return _objectSpread(_objectSpread({}, state), {}, {
        autocompleteItems: null
      });
    default:
      return state;
  }
};