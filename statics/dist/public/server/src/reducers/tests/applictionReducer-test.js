"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
var _initiateState = require("../../initiateState");
var _applicationReducer = require("../applicationReducer");
var i18nVeActions = _interopRequireWildcard(require("../../actions/i18nVeActions"));
var searchMenuActions = _interopRequireWildcard(require("../../actions/searchMenuActions"));
var searchBoxActions = _interopRequireWildcard(require("../../actions/searchBoxActions"));
var currencyActions = _interopRequireWildcard(require("../../actions/currencyActions"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
describe("Application Reducer", function () {
  it("reducer for TRANSLATIONS_LOADED", function () {
    var i18n = i18nVeActions.translationsLoaded(" un message");
    expect(i18n.type).toEqual(i18nVeActions.TRANSLATIONS_LOADED);
    var state = (0, _applicationReducer.ApplicationReducer)(_initiateState.InitiateState, i18n);
    expect(state.messages).toEqual(" un message");
  });
  it("reducer for LOAD_TRANSLATION", function () {
    var i18n = i18nVeActions.loadTranslations("fr", "une route");
    expect(i18n.type).toEqual(i18nVeActions.LOAD_TRANSLATION);
  });
  it("reducer for SEARCH_MODE_CHANGE", function () {
    var initiateState = _initiateState.InitiateState;
    initiateState.searchMenuItems = [{
      menuLabelKey: "Fo_Layout_PageLayoutWithRoute_ProductsTab",
      mode: "products",
      placeHolderLabelKey: "Foj_PageLayoutWithRoute_Search_ProductsCount",
      selected: null
    }];
    var searchBox = searchMenuActions.changeSearchMode("products");
    expect(searchBox.type).toEqual(searchMenuActions.SEARCH_MODE_CHANGE);
    var state = (0, _applicationReducer.ApplicationReducer)(initiateState, searchBox);
    expect(state.searchMenuItems[0].selected).toEqual(true);
    searchBox = searchMenuActions.changeSearchMode("productsss");
    expect(searchBox.type).toEqual(searchMenuActions.SEARCH_MODE_CHANGE);
    state = (0, _applicationReducer.ApplicationReducer)(initiateState, searchBox);
    expect(state.searchMenuItems[0].selected).toEqual(false);
  });
  it("reducer for CHANGE_CURRENCY", function () {
    var newCurrency = "euro";
    var currency = currencyActions.changeCurrency(newCurrency);
    var state = (0, _applicationReducer.ApplicationReducer)(_initiateState.InitiateState, currency);
    expect(currency.type).toEqual(currencyActions.CHANGE_CURRENCY);
    expect(currency.payload.currency).toEqual(newCurrency);
    expect(state.currentCurrency).toEqual(newCurrency);
  });
  it("reducer for SEARCHBOX_SUBMIT_SEARCH_SUCCESS", function () {
    var newSearchBoxSubmitText = "test";
    var searchBox = searchBoxActions.searchBoxSubmitSuccess(newSearchBoxSubmitText);
    var state = (0, _applicationReducer.ApplicationReducer)(_initiateState.InitiateState, searchBox);
    expect(searchBox.type).toEqual(searchBoxActions.SEARCHBOX_SUBMIT_SEARCH_SUCCESS);
    expect(searchBox.payload.text).toEqual(newSearchBoxSubmitText);
    expect(state).toEqual(_initiateState.InitiateState);
  });
  it("reducer for AUTOCOMPLETE", function () {
    var newAutocomplete = "test";
    var searchBox = searchBoxActions.searchTextChangeSuccess(newAutocomplete);
    var state = (0, _applicationReducer.ApplicationReducer)(_initiateState.InitiateState, searchBox);
    expect(searchBox.type).toEqual(searchBoxActions.SEARCHBOX_AUTOCOMPLETE_SUCCESS);
    expect(state.autocompleteItems).toEqual(newAutocomplete);
    searchBox = searchBoxActions.resetSearchAutocomplete();
    state = (0, _applicationReducer.ApplicationReducer)(state, searchBox);
    expect(searchBox.type).toEqual(searchBoxActions.SEARCHBOX_RESET_AUTOCOMPLETE);
    expect(state.autocompleteItems).toEqual(null);
  });
  it("reducer for default", function () {
    var state = (0, _applicationReducer.ApplicationReducer)(_initiateState.InitiateState, "toto");
    expect(state).toEqual(_initiateState.InitiateState);
  });
});