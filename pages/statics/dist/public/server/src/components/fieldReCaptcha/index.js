"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _react = _interopRequireWildcard(require("react"));
var _reactGoogleRecaptcha = _interopRequireDefault(require("react-google-recaptcha"));
var _reduxForm = require("redux-form");
var _reactIntl = require("react-intl");
var _fieldWithError = require("../fieldWithError/styles/fieldWithError");
var _fieldValidators = require("../fieldWithError/validators/fieldValidators");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/jsx-props-no-spreading */
/**
 * Champ de formulaire recaptcha. Wrap pour redux-form.
 */
var FieldReCaptcha = /*#__PURE__*/function (_Component) {
  function FieldReCaptcha() {
    (0, _classCallCheck2["default"])(this, FieldReCaptcha);
    return _callSuper(this, FieldReCaptcha, arguments);
  }
  (0, _inherits2["default"])(FieldReCaptcha, _Component);
  return (0, _createClass2["default"])(FieldReCaptcha, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        innerRef = _this$props.innerRef,
        mandatory = _this$props.mandatory;
      // eslint-disable-next-line react/jsx-props-no-spreading
      return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, (0, _extends2["default"])({
        component: FieldReCaptcha.renderField,
        innerRef: innerRef,
        validate: mandatory ? [_fieldValidators.requiredCaptcha] : []
      }, this.props));
    }
  }], [{
    key: "renderField",
    value: function renderField(_ref) {
      var onChange = _ref.input.onChange,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        className = _ref.className,
        innerRef = _ref.innerRef,
        size = _ref.size,
        onExpired = _ref.onExpired,
        onErrored = _ref.onErrored;
      var config = window.__config__ || {};
      var recaptchaSiteKey = config.recaptchaSiteKey,
        recaptchaInvisibleSiteKey = config.recaptchaInvisibleSiteKey;
      var RECAPTCHA_SITE_KEY = recaptchaSiteKey;
      var RECAPTCHA_INVISIBLE_SITE_KEY = recaptchaInvisibleSiteKey;
      return /*#__PURE__*/_react["default"].createElement(_fieldWithError.FormInput, {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(_reactGoogleRecaptcha["default"], {
        sitekey: size === "invisible" ? RECAPTCHA_INVISIBLE_SITE_KEY : RECAPTCHA_SITE_KEY,
        onChange: onChange,
        onExpired: onExpired,
        onErrored: onErrored,
        className: touched && error ? "has-error" : "",
        ref: innerRef,
        size: size
      }), touched && error && /*#__PURE__*/_react["default"].createElement(_fieldWithError.ErrorStyled, null, error) && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: error.id
      }, function (txt) {
        return /*#__PURE__*/_react["default"].createElement(_fieldWithError.ErrorStyled, null, txt);
      }));
    }
  }]);
}(_react.Component);
var ForwardRefBridge = function ForwardRefBridge(props, ref) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-props-no-spreading
    _react["default"].createElement(FieldReCaptcha, (0, _extends2["default"])({
      innerRef: ref
    }, props))
  );
};
// Permet de faire du forward de Ref tout en exposant un ref normal au public(nécessite un "functional component":ForwardRefBridge ).
// https://reactjs.org/docs/forwarding-refs.html
// $FlowFixMe
var _default = exports["default"] = /*#__PURE__*/_react["default"].forwardRef(ForwardRefBridge);