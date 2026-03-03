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
var _loading = _interopRequireDefault(require("../../../../../../../../components/loading"));
var _descriptionTranslation = require("./style/descriptionTranslation");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DescriptionTranslation = /*#__PURE__*/function (_Component) {
  function DescriptionTranslation(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DescriptionTranslation);
    _this = _callSuper(this, DescriptionTranslation, [props]);
    _this.translate = _this.translate.bind(_this);
    _this.state = {
      showTranslateButton: true
    };
    return _this;
  }
  (0, _inherits2["default"])(DescriptionTranslation, _Component);
  return (0, _createClass2["default"])(DescriptionTranslation, [{
    key: "translate",
    value: function translate(event) {
      var _this$props = this.props,
        getTranslation = _this$props.getTranslation,
        productId = _this$props.productId,
        context = _this$props.context,
        productDescriptionTranslation = _this$props.productDescriptionTranslation;
      event.preventDefault();
      if (productDescriptionTranslation == null) {
        getTranslation(productId, context);
        this.setState({
          showTranslateButton: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        isLoading = _this$props2.isLoading,
        productDescriptionTranslation = _this$props2.productDescriptionTranslation,
        labelDescriptionTranslation = _this$props2.labelDescriptionTranslation;
      var showTranslateButton = this.state.showTranslateButton;
      return /*#__PURE__*/_react["default"].createElement(_descriptionTranslation.ProductTranslationWrapper, null, showTranslateButton && /*#__PURE__*/_react["default"].createElement("p", {
        className: "tradLink"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        onClick: this.translate
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: labelDescriptionTranslation
      }), "\xA0 (", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_global_link_seeOriginalText"
      }), ")")), !showTranslateButton && /*#__PURE__*/_react["default"].createElement("p", {
        className: "tradLink"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: labelDescriptionTranslation
      })), /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        active: isLoading,
        spinnerSize: 10
      }), productDescriptionTranslation != null && /*#__PURE__*/_react["default"].createElement("p", {
        dangerouslySetInnerHTML: {
          __html: productDescriptionTranslation
        }
      }));
    }
  }]);
}(_react.Component);
DescriptionTranslation.defaultProps = {
  isLoading: false
};
var _default = exports["default"] = DescriptionTranslation;