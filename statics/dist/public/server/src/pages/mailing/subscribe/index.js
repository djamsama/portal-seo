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
var _themeLayout = require("../../../layouts/styles/themeLayout");
var _pageLayout = _interopRequireDefault(require("../../../layouts/pageLayout"));
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../components/contextComponent");
var _subscribe = require("./styles/subscribe");
var _subscribeFormContainer = _interopRequireDefault(require("./components/form/containers/subscribeFormContainer"));
var _breadcrumbs = _interopRequireDefault(require("../../../components/breadcrumbs"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SubscribePageComponent = /*#__PURE__*/function (_ContextComponent) {
  function SubscribePageComponent() {
    (0, _classCallCheck2["default"])(this, SubscribePageComponent);
    return _callSuper(this, SubscribePageComponent, arguments);
  }
  (0, _inherits2["default"])(SubscribePageComponent, _ContextComponent);
  return (0, _createClass2["default"])(SubscribePageComponent, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        confirmRfqLabel = _this$context$initDat.confirmRfqLabel,
        confirmedMessage = _this$context$initDat.confirmedMessage,
        globalLinksHome = _this$context$initDat.globalLinksHome;
      var breadCrumbList = [{
        anchor: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "fo_breadCrumb_home"
        }),
        link: globalLinksHome
      }, {
        anchor: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_breadcrumb_mailing_subscription_newsletter"
        }),
        link: null
      }];
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], {
        theme: _themeLayout.ThemeLayoutWhiteMain,
        brands: false
      }, /*#__PURE__*/_react["default"].createElement(_subscribe.MainWrapper, null, /*#__PURE__*/_react["default"].createElement(_breadcrumbs["default"], {
        breadcrumbs: breadCrumbList
      }), confirmRfqLabel && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_subscribe.TitleH2, {
        className: "success inline-center"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-check"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_rfq_form_confirmed_title"
      })), /*#__PURE__*/_react["default"].createElement("p", {
        dangerouslySetInnerHTML: {
          __html: confirmedMessage
        },
        className: "inline-center"
      }), /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_subscribeFormContainer["default"], null)));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = SubscribePageComponent;