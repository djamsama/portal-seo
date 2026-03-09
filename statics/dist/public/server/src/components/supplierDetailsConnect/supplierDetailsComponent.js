"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _veDesignSystem = require("ve-design-system");
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../formattedHTMLMessage"));
var _responsiveMessage = _interopRequireDefault(require("../responsiveMessage"));
var _supplierRating = _interopRequireDefault(require("./components/supplierRating"));
var _supplierReactivity = _interopRequireDefault(require("./components/supplierReactivity"));
var _withGoogleAnalytics = require("../../hoc/withGoogleAnalytics");
var _trackingHelper = require("../../helpers/trackingHelper");
var _globalHelper = require("../../helpers/globalHelper");
var _supplierDetails = require("./styles/supplierDetails");
var _constants = require("../../commons/constants");
var _contextComponent = require("../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var SupplierDetails = /*#__PURE__*/function (_ContextComponent) {
  function SupplierDetails(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, SupplierDetails);
    _this = _callSuper(this, SupplierDetails, [props, context]);
    _this.handleTrackingClick = _this.handleTrackingClick.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.getCurrencyIcon = _this.getCurrencyIcon.bind(_this);
    _this.element = /*#__PURE__*/_react["default"].createRef();
    _this.state = {
      buttonClass: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(SupplierDetails, _ContextComponent);
  return (0, _createClass2["default"])(SupplierDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _window = window,
        optimizeActivateStick = _window.optimizeActivateStick;
      if (typeof optimizeActivateStick === "undefined" || !optimizeActivateStick) {
        if (!window.dataLayer) {
          window.dataLayer = [];
        }
        window.optimizeActivateStick = true;
        window.dataLayer.push({
          event: "optimize.activate.stick"
        });
      }
      window.addEventListener("scroll", (0, _throttle["default"])(this.handleScroll, 500));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "handleTrackingClick",
    value: function handleTrackingClick(event) {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        clickThroughOrigin = _this$props.clickThroughOrigin,
        trackingGa = _this$props.trackingGa;
      var trackingEvent = clickThroughOrigin ? event : null;
      if (trackingGa) {
        trackingEvent = trackingGa;
        if (event) {
          trackingEvent.action = event.action;
        }
      }
      if (trackingEvent && googleAnalytics) {
        googleAnalytics.event(trackingEvent);
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      // $FlowFixMe
      if (!this.element || !this.element.current) {
        return;
      }
      var currentElement = this.element.current;
      if (window && currentElement && currentElement.classList && currentElement.classList.contains("stickedButton")) {
        var buttonClass = this.state.buttonClass;
        var _this$element$current = this.element.current.getBoundingClientRect(),
          top = _this$element$current.top;
        var boutonIsInViewport = _globalHelper.GlobalHelper.isInViewPort(this.element.current);
        var shouldButtonBeStick = !boutonIsInViewport && top < -100; // Quand le bouton n'est plus dans le viewPort et que on est dans la partie sous le bouton
        if (buttonClass !== "stickyQuotationButton" && shouldButtonBeStick) {
          this.setState({
            buttonClass: "stickyQuotationButton"
          });
        } else if (buttonClass !== "" && !shouldButtonBeStick) {
          this.setState({
            buttonClass: ""
          });
        }
      }
    }
  }, {
    key: "getCurrencyIcon",
    value: function getCurrencyIcon() {
      var currentCurrency = this.props.currentCurrency;
      var iconName = "";
      switch (currentCurrency) {
        case "EUR":
        case "CHF":
          iconName = "eur";
          break;
        case "USD":
        case "BRL":
        case "MXN":
        case "AUD":
        case "CAD":
          iconName = "dollar";
          break;
        case "CNY":
          iconName = "cny";
          break;
        case "GBP":
          iconName = "gbp";
          break;
        case "RUB":
          iconName = "rub";
          break;
        case "JPY":
          iconName = "yen";
          break;
        default:
          iconName = "eur";
      }
      return iconName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        secondary = _this$props2.secondary,
        supplier = _this$props2.supplier,
        clickThroughOrigin = _this$props2.clickThroughOrigin,
        googleAnalytics = _this$props2.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS,
        position = _this$props2.position,
        drdCustomer = _this$props2.drdCustomer,
        catalog = _this$props2.catalog;
      var portal = this.context.config.portal;
      var buttonClass = this.state.buttonClass;
      var primaryButtonRef = secondary ? {} : {
        ref: this.element
      };
      var primaryButtonId = secondary ? {} : {
        id: "quotationButtonId"
      };
      var actionButtonId = secondary ? {} : {
        id: "actionButtonId"
      };
      var drdCustomQuoteBtn = "foj_request_button_product_drd_customQuote";

      /** TODO simplifier le skeleton pour supprimer les wrappers */
      var WrapperPriceButton = supplier && supplier.requestButtonPrice && supplier.requestButtonPrice.type ? _veDesignSystem.Button : _supplierDetails.PriceButton;
      var WrapperQuoteButton = supplier && supplier.requestButton && supplier.requestButton.type ? _veDesignSystem.Button : _supplierDetails.QuotationButton;
      var WrapperDocumentButton = supplier && supplier.requestButtonDoc && supplier.requestButtonDoc.type ? _veDesignSystem.Button : _supplierDetails.DocumentButton;
      var showPriceButton = !!(supplier !== null && supplier !== void 0 && supplier.requestButtonPrice || drdCustomer && supplier !== null && supplier !== void 0 && supplier.requestButtonPrice);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, supplier === undefined && /*#__PURE__*/_react["default"].createElement(_supplierDetails.FrameSkeleton, {
        themeColor: "",
        backgroudColor: "grey"
      }, /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierDetailsWrapper, {
        className: "supplierDetails"
      }, /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierIntro, null), /*#__PURE__*/_react["default"].createElement(_supplierDetails.Actions, (0, _extends2["default"])({
        secondary: secondary
      }, primaryButtonRef, actionButtonId), /*#__PURE__*/_react["default"].createElement(_supplierDetails.WrapperButtons, null), /*#__PURE__*/_react["default"].createElement(_supplierDetails.WrapperButtons, {
        className: "".concat(buttonClass)
      })), /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierInfo, null, /*#__PURE__*/_react["default"].createElement(_supplierDetails.FreeQuotation, null, /*#__PURE__*/_react["default"].createElement(_supplierDetails.FreeQuotationTextWrapper, null)), /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierIdentityWrapper, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierIdentity, null, /*#__PURE__*/_react["default"].createElement(_supplierDetails.Name, null))))))), supplier && /*#__PURE__*/_react["default"].createElement(_supplierDetails.StyledFrame, {
        themeColor: portal.site.toLowerCase(),
        backgroudColor: "grey"
      }, /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierDetailsWrapper, {
        className: "supplierDetails"
      }, /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierIntro, null, !catalog && (supplier.type === _constants.CONTACT_TYPES.AREA_MANAGER || supplier.type === _constants.CONTACT_TYPES.MAIN_CONTACT) && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_button_connect_bloc_intro"
      }), !catalog && supplier.type === _constants.CONTACT_TYPES.DEALER && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_button_connect_bloc_intro_dealer"
      }), " ", catalog && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_button_description"
      })), /*#__PURE__*/_react["default"].createElement(_supplierDetails.Actions, (0, _extends2["default"])({
        secondary: secondary
      }, primaryButtonRef, actionButtonId), showPriceButton && /*#__PURE__*/_react["default"].createElement(_supplierDetails.WrapperButtons, null, /*#__PURE__*/_react["default"].createElement(WrapperPriceButton, {
        startIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
          name: this.getCurrencyIcon()
        }),
        outlined: true,
        contained: true,
        secondary: secondary,
        size: secondary ? "small" : "large"
        // $FlowFixMe
        ,
        href: supplier.requestButtonPrice.formUrl,
        onClick: function onClick() {
          if (googleAnalytics) {
            _this2.handleTrackingClick({
              category: clickThroughOrigin ? _trackingHelper.TrackingHelper.getSourceTypeFromRequest(clickThroughOrigin.toUpperCase()) : null,
              // $FlowFixMe
              action: supplier.requestButtonPrice.requestTrackEventAction,
              label: "".concat(GOOGLE_ANALYTICS_EVENTS.CLICK_BUTTON, " ").concat(position)
            });
          }
        },
        dataAttrs: [{
          name: "cy",
          value: "PriceButton"
        }, {
          name: "type",
          value: supplier && supplier.requestButtonPrice ? supplier.requestButtonPrice.type : "PriceButton"
        }, {
          name: "primary",
          value: "".concat(!secondary)
        }],
        "data-cy": "PriceButton"
      }, supplier.requestButtonPrice && supplier.requestButtonPrice.labelKey && /*#__PURE__*/_react["default"].createElement(_responsiveMessage["default"], {
        id: "".concat(supplier.requestButtonPrice.labelKey),
        idMobile: "".concat(supplier.requestButtonPrice.labelKey, "_mobile")
      }, function (txt) {
        return txt;
      }))), supplier.requestButton && /*#__PURE__*/_react["default"].createElement(_supplierDetails.WrapperButtons, {
        className: "".concat(buttonClass)
      }, /*#__PURE__*/_react["default"].createElement(WrapperQuoteButton, (0, _extends2["default"])({
        contained: true,
        secondary: secondary,
        size: secondary ? "small" : "large"
      }, primaryButtonId, {
        startIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
          name: "calculator"
        }),
        href: supplier.requestButton.formUrl,
        onClick: function onClick() {
          if (googleAnalytics) {
            var _supplier$requestButt;
            _this2.handleTrackingClick({
              category: clickThroughOrigin ? _trackingHelper.TrackingHelper.getSourceTypeFromRequest(clickThroughOrigin.toUpperCase()) : null,
              // $FlowFixMe
              action: (_supplier$requestButt = supplier.requestButton) === null || _supplier$requestButt === void 0 ? void 0 : _supplier$requestButt.requestTrackEventAction,
              label: "".concat(GOOGLE_ANALYTICS_EVENTS.CLICK_BUTTON, " ").concat(position)
            });
          }
        },
        dataAttrs: [{
          name: "cy",
          value: "QuotationButton".concat(secondary ? "_secondary" : "_primary")
        }, {
          name: "type",
          value: supplier.requestButton.type
        }, {
          name: "primary",
          value: "".concat(!secondary)
        }],
        "data-cy": "QuotationButton".concat(secondary ? "_secondary" : "_primary")
      }), supplier.requestButton.labelKey && /*#__PURE__*/_react["default"].createElement(_responsiveMessage["default"], {
        id: drdCustomer ? drdCustomQuoteBtn : "".concat(supplier.requestButton.labelKey),
        idMobile: drdCustomer ? "".concat(drdCustomQuoteBtn, "_mobile") : "".concat(supplier.requestButton.labelKey, "_mobile"),
        isHtml: true
      }, function (txt) {
        return txt;
      }))), supplier.requestButtonDoc && catalog && /*#__PURE__*/_react["default"].createElement(_supplierDetails.WrapperButtons, {
        className: "".concat(buttonClass)
      }, /*#__PURE__*/_react["default"].createElement(WrapperDocumentButton, (0, _extends2["default"])({
        contained: true,
        secondary: secondary,
        outlined: true,
        size: secondary ? "small" : "large"
      }, primaryButtonId, {
        startIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
          name: "file-pdf"
        }),
        href: supplier.requestButtonDoc.formUrl,
        onClick: function onClick() {
          if (googleAnalytics) {
            var _supplier$requestButt2;
            _this2.handleTrackingClick({
              category: clickThroughOrigin ? _trackingHelper.TrackingHelper.getSourceTypeFromRequest(clickThroughOrigin.toUpperCase()) : null,
              // $FlowFixMe
              action: (_supplier$requestButt2 = supplier.requestButtonDoc) === null || _supplier$requestButt2 === void 0 ? void 0 : _supplier$requestButt2.requestTrackEventAction,
              label: "".concat(GOOGLE_ANALYTICS_EVENTS.CLICK_BUTTON, " ").concat(position)
            });
          }
        },
        dataAttrs: [{
          name: "cy",
          value: "DocumentButton".concat(secondary ? "_secondary" : "_primary")
        }, {
          name: "type",
          value: supplier.requestButtonDoc.type
        }, {
          name: "primary",
          value: "".concat(!secondary)
        }],
        "data-cy": "DocumentButton".concat(secondary ? "_secondary" : "_primary")
      }), supplier.requestButtonDoc.labelKey && /*#__PURE__*/_react["default"].createElement(_responsiveMessage["default"], {
        id: drdCustomer ? drdCustomQuoteBtn : "".concat(supplier.requestButtonDoc.labelKey),
        idMobile: drdCustomer ? "".concat(drdCustomQuoteBtn, "_mobile") : "".concat(supplier.requestButtonDoc.labelKey, "_mobile"),
        isHtml: true
      }, function (txt) {
        return txt;
      })))), /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierInfo, null, /*#__PURE__*/_react["default"].createElement(_supplierDetails.FreeQuotation, null, /*#__PURE__*/_react["default"].createElement(_supplierDetails.FreeQuotationTextWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_request_button_connect_free_quotation"
      }))), supplier.reactivityInterval && /*#__PURE__*/_react["default"].createElement(_supplierReactivity["default"], {
        supplier: supplier,
        secondary: secondary
      }), /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierIdentityWrapper, null, /*#__PURE__*/_react["default"].createElement("div", null, (supplier.type === _constants.CONTACT_TYPES.AREA_MANAGER || supplier.type === _constants.CONTACT_TYPES.MAIN_CONTACT) && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_request_button_connect_supplier_contact_main"
      }), supplier.type === _constants.CONTACT_TYPES.DEALER && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_request_button_connect_supplier_contact_dealer"
      }), /*#__PURE__*/_react["default"].createElement(_supplierDetails.SupplierIdentity, null, /*#__PURE__*/_react["default"].createElement(_supplierDetails.Name, null, supplier.companyName), supplier.satisfactionCount && /*#__PURE__*/_react["default"].createElement(_supplierRating["default"], {
        supplier: supplier,
        secondary: secondary
      }), supplier.location && /*#__PURE__*/_react["default"].createElement(_supplierDetails.Location, null, supplier.location))))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(SupplierDetails);