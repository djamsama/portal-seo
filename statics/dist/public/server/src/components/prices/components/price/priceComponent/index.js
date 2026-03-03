"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../formattedHTMLMessage"));
var _currencyHelper = require("../../../../../helpers/currencyHelper");
var _constants = require("../../../../../commons/constants");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var PriceComponent = /*#__PURE__*/function (_Component) {
  function PriceComponent(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, PriceComponent);
    _this = _callSuper(this, PriceComponent, [props, state]);
    _this.formatPrice = _this.formatPrice.bind(_this);
    _this.convert = _this.convert.bind(_this);
    _this.getFormattedPrice = _this.getFormattedPrice.bind(_this);
    _this.flags = {
      rates: false,
      convert: false
    };
    return _this;
  }
  (0, _inherits2["default"])(PriceComponent, _Component);
  return (0, _createClass2["default"])(PriceComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var price = this.props.price;
      if (price && price.price) {
        this.convert();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var price = this.props.price;
      if (price && price.price) {
        this.convert();
      }
    }

    /**
     * Formatage du prix
     *
     * @param {*} productPrice prix à afficher
     * @param {*} forcedCurrency si forcedCurrency c'est que formattedPrice et formattedPriceMax n'est pas a jour
     */
  }, {
    key: "getFormattedPrice",
    value: function getFormattedPrice(productPrice, forcedCurrency) {
      var locale = this.props.locale;

      // Si forcedCurrency n'est pas vide il ne faut pas afficher formattedPrice/formattedPriceMax
      // ils ne sont pas à jour (lorsqu'on change de devise et qu'on revient sur meme devise que le produit par exple)
      var formattedPrice = forcedCurrency ? _currencyHelper.CurrencyHelper.formatCurrency(productPrice.price, forcedCurrency, locale) : productPrice.formattedPrice;
      var formattedPriceMax = forcedCurrency ? _currencyHelper.CurrencyHelper.formatCurrency(productPrice.priceMax, forcedCurrency, locale) : productPrice.formattedPriceMax;
      if (productPrice.priceType !== _constants.PRICE_TYPE.PRICE_RANGE || !productPrice.formattedPrice) {
        return formattedPrice; // Ce n'est pas un prix fourchette
      }
      // Ce prix fourchette
      return formattedPrice && formattedPriceMax ? "".concat(formattedPrice, " - ").concat(formattedPriceMax) : null;
    }
  }, {
    key: "convert",
    value: function convert() {
      // On a besoin de lancer les conversion
      var _this$props = this.props,
        convertCurrency = _this$props.convertCurrency,
        price = _this$props.price,
        currentCurrency = _this$props.currentCurrency,
        getRatesLoad = _this$props.getRatesLoad,
        loadingRates = _this$props.loadingRates,
        currencies = _this$props.currencies,
        rates = _this$props.rates;
      if (price.currency !== currentCurrency && rates === 0 && !loadingRates && !this.flags.rates) {
        // On ne les a pas encore, la récupération n'est pas en cours, on lance la récupération des taux
        getRatesLoad();
        this.flags.rates = true;
      }
      var label = _currencyHelper.CurrencyHelper.doLabel(price);
      if (label && currencies && (!currencies[label] || !currencies[label][currentCurrency]) && !this.flags.convert && rates !== 0) {
        // Prix a affiché dans une autre devise, la conversion n'est pas en cours, on lance la conversion
        convertCurrency(price, currentCurrency, rates);
        this.flags.convert = true;
      }
    }
  }, {
    key: "formatPrice",
    value: function formatPrice(priceToFormat) {
      var _priceToFormat$format;
      var _this$props2 = this.props,
        currentCurrency = _this$props2.currentCurrency,
        rates = _this$props2.rates,
        currencies = _this$props2.currencies;

      // Pas de prix a afficher
      if (!priceToFormat || !Object.prototype.hasOwnProperty.call(priceToFormat, "price")) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }

      // Ce n'est pas la bonne devise et on n'a pas encore recupéré les taux,
      // on affiche rien pour le moment sinon on va avoir les prix qui vont être affichés
      // dans une devise et qui vont changer ensuite
      if (priceToFormat.currency !== currentCurrency && rates === 0) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }

      // On était sur une devise (ex GBP) on a changé via le select des devises (ex EUR)
      // on a choisi la meme devise que le produit (price.currency = EUR) (lorsque price.formattedPrice != currentCurrency)
      if (undefined !== currentCurrency && priceToFormat.currency === currentCurrency && currencies && ((_priceToFormat$format = priceToFormat.formattedPrice) === null || _priceToFormat$format === void 0 ? void 0 : _priceToFormat$format.indexOf(currentCurrency)) < 0 // todo
      ) {
        return this.getFormattedPrice(priceToFormat, currentCurrency);
      }

      // Affiche d'un prix dans une devise différente que price.currency
      if (undefined !== currentCurrency && priceToFormat.currency !== currentCurrency && currencies) {
        var newCurrencyLabel = _currencyHelper.CurrencyHelper.doLabel(priceToFormat);
        if (currencies && currencies[newCurrencyLabel]) {
          // La conversion avec les bons arrondis a déjà été faite
          if (currencies[newCurrencyLabel][currentCurrency]) {
            // gerer !currencies[newCurrencyLabel][currentCurrency].formattedPrice
            return currencies[newCurrencyLabel][currentCurrency].formattedPrice;
          }
          // Conversion pas encore effectuée on change le flag pour dire de faire la conversion
          this.flags.convert = false;
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
        }
      }

      // Affichage du prix lorsqu'il n'y a pas de conversion à faire
      return this.getFormattedPrice(priceToFormat);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        price = _this$props3.price,
        isPricesAvailable = _this$props3.isPricesAvailable,
        waitLoad = _this$props3.waitLoad,
        isPricesAvailableLoaded = _this$props3.isPricesAvailableLoaded,
        isForceDisplay = _this$props3.isForceDisplay,
        _this$props3$withoutT = _this$props3.withoutTaxInfo,
        withoutTaxInfo = _this$props3$withoutT === void 0 ? false : _this$props3$withoutT;
      if (!price ||
      // il n'y a pas de prix
      !price.price ||
      // il n'y a pas de prix
      !isPricesAvailable && !isForceDisplay ||
      // isPricesAvailable est false (geoloc ...) et on ne force pas l'affichage
      isPricesAvailable && !isPricesAvailableLoaded && waitLoad && !isForceDisplay // on attends d'avoir isPricesAvailableLoaded (on veut tester la geoloc avant d'afficher le prix - waitLoad) quand on ne force pas l'affichage
      ) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      var id = !withoutTaxInfo ? price.priceTypeLabelKey || "" : "";
      if (!withoutTaxInfo && !id && price && price.priceType) {
        id = price.priceType ? "fo_product_price_fromPriceLabel" : "fo_product_price_indicatedNoTaxPriceLabel";
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", null, this.formatPrice(price)), price.unitLabelKey && /*#__PURE__*/_react["default"].createElement("span", null, "/ ", /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: price.unitLabelKey
      }))), id && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        className: "tax-info",
        id: id
      }, function (txt) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: "tax-info"
        }, txt);
      }));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = PriceComponent;