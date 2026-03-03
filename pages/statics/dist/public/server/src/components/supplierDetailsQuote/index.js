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
var _veDesignSystem = require("ve-design-system");
var _responsiveMessage = _interopRequireDefault(require("../responsiveMessage"));
var _withGoogleAnalytics = require("../../hoc/withGoogleAnalytics");
var _trackingHelper = require("../../helpers/trackingHelper");
var _supplierDetailsQuote = require("./styles/supplierDetailsQuote");
var _contextComponent = require("../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var SupplierDetails = /*#__PURE__*/function (_ContextComponent) {
  function SupplierDetails(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, SupplierDetails);
    _this = _callSuper(this, SupplierDetails, [props, state]);
    _this.handleTrackingClick = _this.handleTrackingClick.bind(_this);
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
        drdCustomer = _this$props2.drdCustomer;
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

      /** TODO simplifier le skeleton pour supprimer les wrappers */
      var WrapperQuoteButton = supplier && supplier.requestButton && supplier.requestButton.type ? _veDesignSystem.Button : _supplierDetailsQuote.QuotationButton;
      var drdCustomQuoteBtn = "foj_request_button_product_drd_customQuote";
      return (
        /*#__PURE__*/
        // $FlowFixMe
        _react["default"].createElement(_supplierDetailsQuote.SupplierDetailsWrapper, (0, _extends2["default"])({
          className: "supplierDetails"
        }, this.props), /*#__PURE__*/_react["default"].createElement(_supplierDetailsQuote.Actions, (0, _extends2["default"])({
          secondary: secondary
        }, primaryButtonRef, actionButtonId), supplier && supplier.requestButton && /*#__PURE__*/_react["default"].createElement(_supplierDetailsQuote.WrapperButtons, {
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
              _this2.handleTrackingClick({
                category: clickThroughOrigin ? _trackingHelper.TrackingHelper.getSourceTypeFromRequest(clickThroughOrigin.toUpperCase()) : null,
                // $FlowFixMe
                action: supplier.requestButton.requestTrackEventAction,
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
          "data-cy": "StickyQuotationButton".concat(secondary ? "_secondary" : "_primary")
        }), supplier.requestButton.labelKey && /*#__PURE__*/_react["default"].createElement(_responsiveMessage["default"], {
          id: drdCustomer ? drdCustomQuoteBtn : "".concat(supplier.requestButton.labelKey),
          idMobile: drdCustomer ? "".concat(drdCustomQuoteBtn, "_mobile") : "".concat(supplier.requestButton.labelKey, "_mobile"),
          isHtml: true
        }, function (txt) {
          return txt;
        })))))
      );
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(SupplierDetails);