"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _context = require("../../../../../../../../context");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../../components/formattedHTMLMessage"));
var _currencyHelper = require("../../../../../../../../helpers/currencyHelper");
var _popup = _interopRequireDefault(require("../../../../../../../../components/popup"));
var _mainSupplier = require("../mainSupplierConnect/styles/mainSupplier");
var _prices = require("../../../../../../../../components/prices");
var _constants = require("../../../../../../../../commons/constants");
var _blockPriceComponent = require("./styles/blockPriceComponent");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
var BlockPriceComponent = function BlockPriceComponent(_ref) {
  var _context$config, _context$config2, _styles$colors;
  var _ref$productPrice = _ref.productPrice,
    productPrice = _ref$productPrice === void 0 ? null : _ref$productPrice,
    _ref$price = _ref.price,
    price = _ref$price === void 0 ? null : _ref$price,
    priceLegend = _ref.priceLegend,
    taxInfo = _ref.taxInfo,
    _ref$priceOnRequestLi = _ref.priceOnRequestLink,
    priceOnRequestLink = _ref$priceOnRequestLi === void 0 ? null : _ref$priceOnRequestLi;
  var context = (0, _react.useContext)(_context.AppContext);
  var portal = context === null || context === void 0 || (_context$config = context.config) === null || _context$config === void 0 ? void 0 : _context$config.portal;
  var _ref2 = (context === null || context === void 0 ? void 0 : context.initData) || {
      isPriceOnRequest: false
    },
    isPriceOnRequest = _ref2.isPriceOnRequest;
  var hasPrice = !!(price || productPrice);
  return /*#__PURE__*/_react["default"].createElement(_blockPriceComponent.BlockPriceConnectWrapper, null, /*#__PURE__*/_react["default"].createElement(_mainSupplier.PriceWrapper, null, hasPrice && priceLegend && /*#__PURE__*/_react["default"].createElement(_mainSupplier.PriceLegend, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
    id: priceLegend
  }, function (txt) {
    return txt;
  }), " *"), /*#__PURE__*/_react["default"].createElement(_mainSupplier.PriceValue, null, price !== 0 && price && /*#__PURE__*/_react["default"].createElement("div", null, _currencyHelper.CurrencyHelper.formatCurrency(price, _constants.SHOP.currency, portal.locale, 2)), productPrice && /*#__PURE__*/_react["default"].createElement(_prices.BlockPrice, null, /*#__PURE__*/_react["default"].createElement(_mainSupplier.PriceWrapper, null, /*#__PURE__*/_react["default"].createElement(_mainSupplier.PriceValue, null, /*#__PURE__*/_react["default"].createElement(_prices.Price, {
    price: productPrice
  })))), !hasPrice && isPriceOnRequest && (priceOnRequestLink === null || priceOnRequestLink === void 0 ? void 0 : priceOnRequestLink.url) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_blockPriceComponent.StyledPrice, null, /*#__PURE__*/_react["default"].createElement("span", null, "-- ", _currencyHelper.CurrencyHelper.formatCurrency("--", _constants.SHOP.currency, portal.locale, 2)), /*#__PURE__*/_react["default"].createElement(_blockPriceComponent.StyledInfos, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_blockPriceComponent.StyledAskLink, {
    href: priceOnRequestLink === null || priceOnRequestLink === void 0 ? void 0 : priceOnRequestLink.url
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: priceOnRequestLink === null || priceOnRequestLink === void 0 ? void 0 : priceOnRequestLink.label
  })), /*#__PURE__*/_react["default"].createElement(_popup["default"], {
    on: "hover",
    flowing: true,
    hoverable: true,
    position: "top left",
    contentstyle: {
      marginTop: "0"
    },
    trigger: /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
      name: "exclamation-circle",
      solid: true,
      themeColor: context === null || context === void 0 || (_context$config2 = context.config) === null || _context$config2 === void 0 || (_context$config2 = _context$config2.portal) === null || _context$config2 === void 0 || (_context$config2 = _context$config2.site) === null || _context$config2 === void 0 ? void 0 : _context$config2.toLowerCase(),
      iconSize: 18,
      iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_styles$colors = _veDesignSystem.styles.colors) === null || _styles$colors === void 0 || (_styles$colors = _styles$colors.monochrome) === null || _styles$colors === void 0 ? void 0 : _styles$colors.white
    }))
  }, (priceOnRequestLink === null || priceOnRequestLink === void 0 ? void 0 : priceOnRequestLink.label) && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: priceOnRequestLink === null || priceOnRequestLink === void 0 ? void 0 : priceOnRequestLink.label
  }), " ", /*#__PURE__*/_react["default"].createElement("br", null), " ", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "foj_request_request_price_click_label"
  }))))))), hasPrice && taxInfo && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    className: "tax-info",
    id: taxInfo
  }, function (txt) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "tax-info",
      solid: true
    }, txt);
  }))));
};
var _default = exports["default"] = BlockPriceComponent;