"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../components/contextComponent");
var _returnLink = _interopRequireDefault(require("../../../../../components/returnLink"));
var _trackingGa = require("../../../../../components/trackings/trackingGa");
var _globalHelper = require("../../../../../helpers/globalHelper");
var _withGoogleAnalytics = require("../../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../constants");
var _returnHelper = require("../../../helpers/returnHelper");
var _requestBackFaqLink = require("./styles/requestBackFaqLink");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable class-methods-use-this */ // $FlowFixMe
var RequestBackFaqLink = /*#__PURE__*/function (_ContextComponent) {
  function RequestBackFaqLink(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, RequestBackFaqLink);
    _this = _callSuper(this, RequestBackFaqLink, [props, context]);
    _this.goBack = _this.goBack.bind(_this);
    _this.state = {
      gaExit: true
    };
    return _this;
  }
  (0, _inherits2["default"])(RequestBackFaqLink, _ContextComponent);
  return (0, _createClass2["default"])(RequestBackFaqLink, [{
    key: "goBack",
    value: function goBack() {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        requestTrackEvent = _this$props.requestTrackEvent,
        referer = _this$props.referer,
        requestConfirmation = _this$props.requestConfirmation;
      if (googleAnalytics) {
        googleAnalytics.event({
          action: requestTrackEvent.action,
          category: requestTrackEvent.category,
          label: requestConfirmation ? "ClickBackFromRequestConfirmation" : "ClickBackFromRequestContactConfirmation"
        });
      }
      if (false) {
        this.setState({
          gaExit: false
        });
        var dest = -1;
        // Pour gerer les changements de langues
        if (referer && typeof referer === "string" && referer.indexOf(document.location.pathname.substr(3)) >= 0) {
          dest = -2;
        }
        window.history.go(dest);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        requestTrackEvent = _this$props2.requestTrackEvent,
        requestConfirmation = _this$props2.requestConfirmation,
        oldStep = _this$props2.oldStep,
        drdRequest = _this$props2.drdRequest;
      var gaExit = this.state.gaExit;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      return /*#__PURE__*/_react["default"].createElement(_requestBackFaqLink.LinkBlock, null, oldStep !== _constants.ROUTE_LANDING_PAGE_RECOMMENDATIONS && oldStep !== _constants.ROUTE_MYSPACE_THANKS && /*#__PURE__*/_react["default"].createElement(_requestBackFaqLink.ReturnLinkWrapper, null, /*#__PURE__*/_react["default"].createElement(_returnLink["default"], {
        i18nkey: "fo_request_return_initial",
        goBackTo: _returnHelper.goBackTo,
        goBackCallBack: this.goBack
      })), /*#__PURE__*/_react["default"].createElement(_requestBackFaqLink.FaqLinkWrapper, {
        reco: oldStep === _constants.ROUTE_LANDING_PAGE_RECOMMENDATIONS || oldStep === _constants.ROUTE_MYSPACE_THANKS
      }, !drdRequest && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: isMobile ? "foj_request_confirmation_faq_mob" : "foj_request_confirmation_faq"
      })), /*#__PURE__*/_react["default"].createElement(_trackingGa.TrackingGaExit, {
        category: requestTrackEvent.category,
        action: requestTrackEvent.action,
        label: _constants.GA_LABELS[requestConfirmation ? _constants.AJAX_REQUEST_CONFIRMATION_FORMATED : _constants.AJAX_REQUEST_CONTACT_CONFIRMATION_FORMATED].close,
        active: gaExit
      }));
    }
  }]);
}(_contextComponent.ContextComponent); // $FlowFixMe
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(RequestBackFaqLink);