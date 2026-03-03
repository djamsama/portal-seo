"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reactIntl = require("react-intl");
var _priceContainer = _interopRequireDefault(require("../components/price/priceContainer"));
var _blockPrice = _interopRequireDefault(require("../components/blockPrice"));
var _blockPrice2 = require("../components/blockPrice/styles/blockPrice");
var _context = require("../../../context");
var _defaultState = require("../../../constants/defaultState");
var mockStore = (0, _reduxMockStore["default"])([]);
var mockState = {
  prices: _defaultState.DEFAULT_IS_PRICE_AVAILABLE_STATE
};
mockState.Application = {
  currentCurrency: "EUR",
  currencyItems: [],
  rates: 0,
  localeProp: "fr"
};
mockState.prices.isPricesAvailable = true;
var store = mockStore(mockState);
describe("Price", function () {
  var productPrice = {
    currency: "EUR",
    price: 1185,
    formattedPrice: "1 185 €",
    unitId: 1,
    unitLabelKey: null,
    priceType: "INDICATIVE_PRICE",
    priceTypeLabelKey: "fo_product_price_indicatedNoTaxPriceLabel",
    productId: 2114923
  };
  it(" isPricesAvailable is true", function () {
    var price = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: null
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
      locale: "fr",
      key: "fr",
      message: {}
    }, /*#__PURE__*/_react["default"].createElement(_priceContainer["default"], {
      price: productPrice
    })))));
    expect(price.text().indexOf(productPrice.formattedPrice) >= 0).toBeTruthy();
  });
  it(" isPricesAvailable is false", function () {
    mockState.prices.isPricesAvailable = false;
    var price = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: null
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
      locale: "fr",
      key: "fr",
      message: {}
    }, /*#__PURE__*/_react["default"].createElement(_priceContainer["default"], {
      price: productPrice
    })))));
    expect(price.text().indexOf(productPrice.formattedPrice) >= 0).toBeFalsy();
  });
});
describe("BlockPrice", function () {
  var productPrice = {
    currency: "EUR",
    price: 1655,
    formattedPrice: "1 655 €",
    unitId: 1,
    unitLabelKey: null,
    priceType: "INDICATIVE_PRICE",
    priceTypeLabelKey: "fo_product_price_indicatedNoTaxPriceLabel",
    productId: 2114923
  };
  it(" isPricesAvailable is true", function () {
    mockState.prices.isPricesAvailable = true;
    var blockPrice = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: null
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
      locale: "fr",
      key: "fr",
      message: {}
    }, /*#__PURE__*/_react["default"].createElement(_blockPrice["default"], null, /*#__PURE__*/_react["default"].createElement(_priceContainer["default"], {
      price: productPrice
    }))))));
    expect(blockPrice.find(_priceContainer["default"]).exists()).toEqual(true);
    expect(blockPrice.text().indexOf(productPrice.formattedPrice) >= 0).toBeTruthy();
  });
  it(" isPricesAvailable is true, isPricesAvailableLoaded is false  with waitLoad", function () {
    mockState.prices.isPricesAvailable = true;
    var blockPrice = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: null
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
      locale: "fr",
      key: "fr",
      message: {}
    }, /*#__PURE__*/_react["default"].createElement(_blockPrice["default"], {
      placeHolder: "52px",
      waitLoad: true
    }, /*#__PURE__*/_react["default"].createElement(_priceContainer["default"], {
      price: productPrice
    }))))));
    expect(blockPrice.find(_priceContainer["default"]).exists()).toEqual(false);
    expect(blockPrice.find(_blockPrice2.PlaceHolder).exists()).toEqual(true);
  });
  it(" isPricesAvailable is true, isPricesAvailableLoaded is true  with waitLoad", function () {
    mockState.prices.isPricesAvailable = true;
    mockState.prices.isPricesAvailableLoaded = true;
    var blockPrice = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: null
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
      locale: "fr",
      key: "fr",
      message: {}
    }, /*#__PURE__*/_react["default"].createElement(_blockPrice["default"], {
      placeHolder: "52px",
      waitLoad: true
    }, /*#__PURE__*/_react["default"].createElement(_priceContainer["default"], {
      price: productPrice
    }))))));
    expect(blockPrice.find(_priceContainer["default"]).exists()).toEqual(true);
    expect(blockPrice.find(_blockPrice2.PlaceHolder).exists()).toEqual(false);
  });
  it(" isPricesAvailable is false", function () {
    mockState.prices.isPricesAvailable = false;
    var blockPrice = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: null
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
      locale: "fr",
      key: "fr",
      message: {}
    }, /*#__PURE__*/_react["default"].createElement(_blockPrice["default"], null, /*#__PURE__*/_react["default"].createElement(_priceContainer["default"], {
      price: productPrice
    }))))));
    expect(blockPrice.text().indexOf(productPrice.formattedPrice) >= 0).toBeFalsy();
    expect(blockPrice.find(_priceContainer["default"]).exists()).toEqual(false);
  });
});