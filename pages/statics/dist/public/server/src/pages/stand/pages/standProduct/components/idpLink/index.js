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
var _reactIntl = require("react-intl");
var _styledLink = require("../../../../../../components/styles/styledLink");
var _withTracking = require("../../../../../../hoc/withTracking");
var _constants = require("../../../../../../commons/constants");
var _contextComponent = require("../../../../../../components/contextComponent");
var _urlEncodedContentHelper = _interopRequireDefault(require("../../../../../../helpers/urlEncodedContentHelper"));
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var IdpLink = /*#__PURE__*/function (_ContextComponent) {
  function IdpLink(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, IdpLink);
    _this = _callSuper(this, IdpLink, [props]);
    _this.getTrackElement = _this.getTrackElement.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(IdpLink, _ContextComponent);
  return (0, _createClass2["default"])(IdpLink, [{
    key: "getTrackElement",
    value: function getTrackElement() {
      var pageTypeId = this.context.initData.pageTypeId;
      var _this$props = this.props,
        productId = _this$props.productId,
        companyId = _this$props.companyId,
        TrackingElement = _this$props.TrackingElement;
      var trackingItem = {
        entityId: productId,
        companyId: companyId,
        elementTypeId: _constants.ELEMENT_TYPE.product,
        pushed: false,
        // pushed
        eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
        pageTypeId: pageTypeId,
        clickThrough: true
      };
      var trackingElementPushed = new TrackingElement(trackingItem);
      return trackingElementPushed;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        url = _this$props2.url,
        companyName = _this$props2.companyName,
        googleAnalytics = _this$props2.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS;
      var clickThroughOrigin = this.context.initData.clickThroughOrigin;
      var trackElement = this.getTrackElement();
      return /*#__PURE__*/_react["default"].createElement(_styledLink.WrapperStyledLink, null, /*#__PURE__*/_react["default"].createElement(_styledLink.StyledLink, {
        to: url,
        displayHref: _urlEncodedContentHelper["default"].isUrlVisible(this.context),
        rel: _urlEncodedContentHelper["default"].isUrlNoFollow(this.context) ? "nofollow sponsored" : "",
        external: true,
        track: trackElement,
        encrypt: _urlEncodedContentHelper["default"].isUrlEncrypted(this.context),
        onClick: function onClick() {
          googleAnalytics.event({
            category: clickThroughOrigin,
            action: GOOGLE_ANALYTICS_EVENTS.CLICK_THROUGH_MORE_SPEC,
            label: GOOGLE_ANALYTICS_EVENTS.GO_TO_EXHIBITOR_AREA
          });
        },
        className: "clickthrough-product",
        dataCy: "companyLink"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_product_detail_seeMoreInformation",
        values: {
          "0": companyName
        }
      }), " ", /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-external-link"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _withTracking.WithTracking)(IdpLink));