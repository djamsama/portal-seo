"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _contextComponent = require("../../../../../components/contextComponent");
var _link = _interopRequireDefault(require("../../../../../components/styles/link"));
var _link2 = require("../../../../../components/link");
var _responsive = require("../../../../../components/styles/responsive");
var _trendTile = require("./styles/trendTile");
var _withGoogleAnalytics = require("../../../../../hoc/withGoogleAnalytics");
var _common = require("../../styles/common");
var _highLight = _interopRequireDefault(require("../../../../../components/highLight"));
var _templateObject, _templateObject2, _templateObject3;
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var TrendsTile = /*#__PURE__*/function (_ContextComponent) {
  function TrendsTile(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, TrendsTile);
    _this = _callSuper(this, TrendsTile, [props, context]);
    _this.refImage = /*#__PURE__*/_react["default"].createRef();
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(TrendsTile, _ContextComponent);
  return (0, _createClass2["default"])(TrendsTile, [{
    key: "handleClick",
    value: function handleClick() {
      var pushed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      if (googleAnalytics) {
        googleAnalytics.event({
          category: GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_TRENDS.CATEGORY,
          action: GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_TRENDS.ACTION,
          label: pushed ? GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_TRENDS.LABEL.PUSHED : GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_TRENDS.LABEL.NATURAL
        });
      }
    }

    // Ajout de la partie responsive des tuiles. Attention à l'utilisation de CSS.
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        link = _this$props2.link,
        item = _this$props2.item,
        trackingElement = _this$props2.trackingElement,
        dataCy = _this$props2.dataCy;
      return /*#__PURE__*/_react["default"].createElement(_trendTile.TrendTileWrapper, {
        className: "homeTile",
        mediaTemplates: TrendsTile.getMediaTemplates(),
        dataCy: dataCy,
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, item.pushed && /*#__PURE__*/_react["default"].createElement(_highLight["default"], null), /*#__PURE__*/_react["default"].createElement(_common.WrapperDivTile, null, /*#__PURE__*/_react["default"].createElement(_common.WrapperDivImage, {
            ref: _this2.refImage,
            height: "auto"
          }, /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
            component: _link["default"],
            to: link,
            title: item.name,
            alt: item.name,
            track: trackingElement,
            onClick: function onClick() {
              return _this2.handleClick(trackingElement.pushed);
            }
          }, /*#__PURE__*/_react["default"].createElement(_common.TileDivImage, {
            src: item.imageUrl,
            alt: item.name
          }))), /*#__PURE__*/_react["default"].createElement(_common.WrapperProjectText, null, /*#__PURE__*/_react["default"].createElement(_common.WrapperProjectLink, null, /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
            component: _common.LinkDivTile,
            to: item.linkUrl,
            title: item.name,
            alt: item.name,
            track: trackingElement,
            onClick: function onClick() {
              return _this2.handleClick(trackingElement.pushed);
            }
          }, /*#__PURE__*/_react["default"].createElement(_common.ShortName, null, item.name))), item.company != null && /*#__PURE__*/_react["default"].createElement(_common.WrapperCompanyImage, null, /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
            component: _common.LinkCompanyImage,
            to: item.company.linkUrl,
            title: item.name,
            alt: item.name,
            track: trackingElement,
            onClick: function onClick() {
              return _this2.handleClick(trackingElement.pushed);
            }
          }, item.company && /*#__PURE__*/_react["default"].createElement(_common.FloatRightCompanyImage, {
            src: item.company.imageUrl,
            title: item.company.name
          }))))));
        }
      });
    }
  }], [{
    key: "getMediaTemplates",
    value: function getMediaTemplates() {
      return (0, _styledComponents.css)(["width:20%;", " ", " ", ";"], _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 25%;\n      :nth-of-type(n+5) {\n        display: none;\n      }\n    "]))), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: calc(100% / 3);\n      :nth-of-type(n+4) {\n        display: none;\n      }\n    "]))), _responsive.media.screenXsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      :nth-of-type(n+2) {\n        display: none;\n      }\n    "]))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(TrendsTile);