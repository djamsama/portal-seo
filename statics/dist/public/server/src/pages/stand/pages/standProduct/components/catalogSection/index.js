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
var _contextComponent = require("../../../../../../components/contextComponent");
var _requestDocumentation = _interopRequireDefault(require("../../../../../../components/request/requestDocumentation"));
var _linkedCatalogs = _interopRequireDefault(require("./components/linkedCatalogs"));
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CatalogSection = /*#__PURE__*/function (_ContextComponent) {
  function CatalogSection(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, CatalogSection);
    _this = _callSuper(this, CatalogSection, [props]);
    _this.state = {};
    return _this;
  }
  (0, _inherits2["default"])(CatalogSection, _ContextComponent);
  return (0, _createClass2["default"])(CatalogSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        catalogs = _this$props.catalogs,
        catalogStandUrl = _this$props.catalogStandUrl,
        companyName = _this$props.companyName,
        requestButtonDoc = _this$props.requestButtonDoc,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_linkedCatalogs["default"], {
        catalogs: catalogs,
        catalogStandUrl: catalogStandUrl,
        companyName: companyName,
        displayLink: requestButtonDoc === null
      }), requestButtonDoc && /*#__PURE__*/_react["default"].createElement(_requestDocumentation["default"], {
        formUrl: requestButtonDoc.formUrl,
        trackingAction: requestButtonDoc.requestTrackEventAction,
        trackingCategory: GOOGLE_ANALYTICS_EVENTS.PRODUCT_CATEGORY,
        trackingLabel: GOOGLE_ANALYTICS_EVENTS.CLICK_BUTTON,
        googleAnalytics: googleAnalytics,
        labelKey: requestButtonDoc.labelKey
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(CatalogSection);