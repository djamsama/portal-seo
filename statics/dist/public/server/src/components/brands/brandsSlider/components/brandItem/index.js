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
var _contextComponent = require("../../../../contextComponent");
var _brandItem = require("./styles/brandItem");
var _trackingElement = require("../../../../../models/trackingElement");
var _link = require("../../../../link");
var _withGoogleAnalytics = require("../../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BrandItem = /*#__PURE__*/function (_ContextComponent) {
  function BrandItem(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, BrandItem);
    _this = _callSuper(this, BrandItem, [props, context]);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(BrandItem, _ContextComponent);
  return (0, _createClass2["default"])(BrandItem, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      if (googleAnalytics && GOOGLE_ANALYTICS_EVENTS) {
        googleAnalytics.event({
          category: GOOGLE_ANALYTICS_EVENTS.BRAND_CLOUD.CATEGORY,
          action: GOOGLE_ANALYTICS_EVENTS.BRAND_CLOUD.ACTION,
          label: GOOGLE_ANALYTICS_EVENTS.BRAND_CLOUD.LABEL
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.item;
      if (this.props.item) {
        var trackingItem = {
          campaignId: item.campaignId,
          elementId: item.id,
          companyId: item.id,
          elementTypeId: _constants.ELEMENT_TYPE.logo,
          placementId: 3,
          displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
          pushed: true,
          context: this.context
        };
        var trackingElement = new _trackingElement.TrackingElement(trackingItem);
        return /*#__PURE__*/_react["default"].createElement(_brandItem.BrandElementContainer, {
          className: "brand-item"
        }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          to: item.urlTarget,
          title: item.title,
          alt: item.title,
          track: trackingElement,
          onClick: this.handleClick,
          encrypt: true
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: item.urlImage,
          alt: item.title
        })));
      }
      return null;
    }
  }]);
}(_contextComponent.ContextComponent); // $FlowFixMe
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(BrandItem);