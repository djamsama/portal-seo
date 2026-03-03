"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _link = require("../../../../../../../../components/link");
var _exhibitionBlock = require("./styles/exhibitionBlock");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ExhibitionBlock = /*#__PURE__*/function (_Component) {
  function ExhibitionBlock() {
    (0, _classCallCheck2["default"])(this, ExhibitionBlock);
    return _callSuper(this, ExhibitionBlock, arguments);
  }
  (0, _inherits2["default"])(ExhibitionBlock, _Component);
  return (0, _createClass2["default"])(ExhibitionBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        exhibition = _this$props.exhibition,
        intl = _this$props.intl;
      return /*#__PURE__*/_react["default"].createElement(_exhibitionBlock.ExhibitionCard, null, /*#__PURE__*/_react["default"].createElement(_exhibitionBlock.ExhibitionLogo, null, exhibition.imgUrl && exhibition.imgUrl !== "" && /*#__PURE__*/_react["default"].createElement("img", {
        src: exhibition.imgUrl,
        alt: exhibition.title
      })), /*#__PURE__*/_react["default"].createElement(_exhibitionBlock.ExhibitionDescription, null, /*#__PURE__*/_react["default"].createElement(_exhibitionBlock.ExhibitionTitle, null, exhibition.title), /*#__PURE__*/_react["default"].createElement(_exhibitionBlock.ExhibitionInfoWrapper, null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-calendar-check-o"
      }), " ", /*#__PURE__*/_react["default"].createElement("span", null, exhibition.dateRange), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-globe"
      }), " ", /*#__PURE__*/_react["default"].createElement("span", null, exhibition.location), exhibition.stall && exhibition.stall !== "" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-map-marker"
      }), " ", /*#__PURE__*/_react["default"].createElement("span", null, exhibition.stall))), exhibition.webLink && exhibition.webLink !== "" && /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: exhibition.webLink,
        encrypt: true,
        external: true
      }, /*#__PURE__*/_react["default"].createElement(_exhibitionBlock.MoreInfo, null, /*#__PURE__*/_react["default"].createElement("li", {
        className: "fa fa-info-circle"
      }), /*#__PURE__*/_react["default"].createElement("span", null, intl.formatMessage({
        id: "FOJ_PRODUCT_DETAIL_EXHIBITIONSECTION_SEEMORE"
      }))))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ExhibitionBlock);