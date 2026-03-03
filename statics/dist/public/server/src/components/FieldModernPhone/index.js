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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _intlTelInput = _interopRequireDefault(require("intl-tel-input"));
var _reactIntl = require("react-intl");
var _fieldWithError = require("../fieldWithError/styles/fieldWithError");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
// Champ de saisie de numéro de téléphone moderne
// et utilise la librairie 'intl-tel-input'
// pour la gestion du formatage et des préfixes.
var FieldPhoneIntlModern = /*#__PURE__*/function (_PureComponent) {
  function FieldPhoneIntlModern(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldPhoneIntlModern);
    _this = _callSuper(this, FieldPhoneIntlModern, [props]);
    (0, _defineProperty2["default"])(_this, "handleChange", function () {
      if (!_this.inputRef.current || !_this.iti) return;
      var rawValue = _this.inputRef.current.value;
      var countryData = _this.iti.getSelectedCountryData();

      // Redux Form
      _this.props.input.onChange(rawValue);

      // Prefix
      _this.props.onChangePrefixCode("+".concat(countryData.dialCode));
    });
    (0, _defineProperty2["default"])(_this, "handleBlur", function () {
      if (_this.props.input && _this.props.input.onBlur) {
        _this.props.input.onBlur(_this.props.input.value);
      }
    });
    _this.inputRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  (0, _inherits2["default"])(FieldPhoneIntlModern, _PureComponent);
  return (0, _createClass2["default"])(FieldPhoneIntlModern, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$countryCo;
      if (!this.inputRef.current) return;
      this.iti = (0, _intlTelInput["default"])(this.inputRef.current, {
        initialCountry: (_this$props$countryCo = this.props.countryCode) === null || _this$props$countryCo === void 0 ? void 0 : _this$props$countryCo.toLowerCase(),
        separateDialCode: false,
        nationalMode: true,
        formatOnDisplay: false,
        autoPlaceholder: "off",
        utilsScript: "/node_modules/intl-tel-input/build/js/utils.js"
      });

      // valeur initiale Redux Form de input
      if (this.props.input.value) {
        this.inputRef.current.value = this.props.input.value;
      }
      this.inputRef.current.addEventListener("input", this.handleChange);
      this.inputRef.current.addEventListener("blur", this.handleBlur);

      // Prefix initial
      var countryData = this.iti.getSelectedCountryData();
      this.props.onChangePrefixCode("+".concat(countryData.dialCode));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.iti) {
        this.iti.destroy();
      }
      if (this.inputRef.current) {
        this.inputRef.current.removeEventListener("input", this.handleChange);
        this.inputRef.current.removeEventListener("blur", this.handleBlur);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        label = _this$props.label,
        mandatory = _this$props.mandatory,
        placeholder = _this$props.placeholder,
        input = _this$props.input,
        meta = _this$props.meta,
        name = _this$props.name;
      var showError = (meta.touched || meta.submitFailed) && meta.error;
      return /*#__PURE__*/React.createElement("div", {
        className: "field-phone-modern ".concat(showError ? "has-error" : "")
      }, /*#__PURE__*/React.createElement("label", null, label, mandatory && /*#__PURE__*/React.createElement("span", {
        className: "mandatory"
      }, "*")), /*#__PURE__*/React.createElement("input", {
        name: name,
        ref: this.inputRef,
        type: "tel",
        placeholder: placeholder,
        onChange: this.handleChange,
        onBlur: this.handleBlur
      }), showError && /*#__PURE__*/React.createElement(_fieldWithError.ErrorStyled, null, /*#__PURE__*/React.createElement(_reactIntl.FormattedMessage, {
        id: meta.error.id,
        values: meta.error.values
      })));
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = FieldPhoneIntlModern;