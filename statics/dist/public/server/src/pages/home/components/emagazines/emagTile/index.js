"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _link = _interopRequireDefault(require("../../../../../components/styles/link"));
var _responsive = require("../../../../../components/styles/responsive");
var _common = require("../../styles/common");
var _emagTile = require("./styles/emagTile");
var _link2 = require("../../../../../components/link");
var _withGoogleAnalytics = require("../../../../../hoc/withGoogleAnalytics");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var EmagTile = /*#__PURE__*/function (_Component) {
  function EmagTile(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, EmagTile);
    _this = _callSuper(this, EmagTile, [props, context]);
    _this.refImage = /*#__PURE__*/_react["default"].createRef();
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  // Ajout de la partie responsive des tuiles. Attention à l'utilisation de CSS.
  (0, _inherits2["default"])(EmagTile, _Component);
  return (0, _createClass2["default"])(EmagTile, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;
      if (googleAnalytics) {
        googleAnalytics.event({
          category: GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_EMAG.CATEGORY,
          action: GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_EMAG.ACTION,
          label: GOOGLE_ANALYTICS_EVENTS.HOME_PAGE_EMAG.LABEL
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        link = _this$props2.link,
        item = _this$props2.item,
        trackingElement = _this$props2.trackingElement,
        dataCy = _this$props2.dataCy;
      return /*#__PURE__*/_react["default"].createElement(_emagTile.EmagWrapperTile, {
        scaleRatio: 1,
        mediaTemplates: EmagTile.getMediaTemplates(),
        dataCy: dataCy,
        className: "homeTile",
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_common.WrapperDivTile, null, /*#__PURE__*/_react["default"].createElement(_emagTile.WrapperDivImageEmag, {
            ref: _this2.refImage,
            height: "300px"
          }, /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
            component: _link["default"],
            to: link,
            title: item.name,
            alt: item.name,
            track: trackingElement,
            onClick: _this2.handleClick,
            external: true
          }, /*#__PURE__*/_react["default"].createElement(_common.ProductImage, {
            src: item.imageUrl,
            alt: item.name
          }))), /*#__PURE__*/_react["default"].createElement(_emagTile.WrapperEmagText, null, /*#__PURE__*/_react["default"].createElement(_link2.VeLink, {
            component: _emagTile.LinkProductTile,
            to: item.linkUrl,
            title: item.name,
            alt: item.name,
            track: trackingElement,
            onClick: _this2.handleClick,
            external: true
          }, /*#__PURE__*/_react["default"].createElement(_emagTile.ShortName, null, item.name))));
        }
      });
    }
  }], [{
    key: "getMediaTemplates",
    value: function getMediaTemplates() {
      return (0, _styledComponents.css)(["margin-bottom:30px;width:50%;", " ", " ", " ", ";"], _responsive.media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: 50%;;\n      :nth-of-type(n+3) {\n        display: none;\n      }\n    "]))), _responsive.media.screenMdMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      :nth-of-type(n+2) {\n        display: none;\n      }\n    "]))), _responsive.media.screenSmMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      :nth-of-type(n+2) {\n        display: none;\n      }\n    "]))), _responsive.media.screenXsMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n      width: 100%;\n      margin: auto;\n      :nth-of-type(n+2) {\n        display: none;\n      }\n    "]))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(EmagTile);