"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reduxForm = require("redux-form");
var _reactIntl = require("react-intl");
var _fieldWithError = require("./styles/fieldWithError");
var _conditionalWrapper = _interopRequireDefault(require("../conditionalWrapper"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Classe field avec erreur
 */
var FieldWithError = /*#__PURE__*/function (_Component) {
  function FieldWithError(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldWithError);
    _this = _callSuper(this, FieldWithError, [props]);
    _this.renderField = _this.renderField.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FieldWithError, _Component);
  return (0, _createClass2["default"])(FieldWithError, [{
    key: "renderField",
    value:
    /**
     * Fonction de rendu du field avec erreur
     */
    function renderField(_ref) {
      var input = _ref.input,
        placeholder = _ref.placeholder,
        fieldComponent = _ref.fieldComponent,
        type = _ref.type,
        className = _ref.className,
        disabled = _ref.disabled,
        autoComplete = _ref.autoComplete,
        autoFocus = _ref.autoFocus,
        onPaste = _ref.onPaste,
        onKeyUp = _ref.onKeyUp,
        onKeyDown = _ref.onKeyDown,
        onKeyPress = _ref.onKeyPress,
        maxLength = _ref.maxLength,
        min = _ref.min,
        _ref$meta = _ref.meta,
        asyncValidating = _ref$meta.asyncValidating,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        warning = _ref$meta.warning;
      var _this$props = this.props,
        withWrapper = _this$props.withWrapper,
        customLabel = _this$props.customLabel,
        doNotFlex = _this$props.doNotFlex,
        dataCy = _this$props.dataCy,
        name = _this$props.name,
        autocomplete = _this$props.autocomplete;

      // eslint-disable-next-line react/destructuring-assignment
      var autoCompleteProp = autocomplete || null;
      var errorClass = touched && error ? "has-error" : "";
      var dataCypress = dataCy != null ? dataCy : name;
      var renderFactoryField = FieldWithError.factoryField(fieldComponent, _objectSpread(_objectSpread({}, input), {}, {
        autoFocus: autoFocus,
        placeholder: placeholder,
        type: type,
        className: className,
        disabled: disabled || false,
        autoComplete: autoComplete || autoCompleteProp || "",
        onPaste: onPaste,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        maxLength: maxLength,
        error: error,
        min: min,
        "data-cy": dataCypress
      }), this.props);
      return /*#__PURE__*/_react["default"].createElement(_conditionalWrapper["default"], {
        condition: withWrapper,
        wrapper: function wrapper(children) {
          return /*#__PURE__*/_react["default"].createElement(_fieldWithError.FormInput, {
            doNotFlex: doNotFlex,
            className: errorClass + (asyncValidating ? " async-validating" : "  async-validating")
          }, children);
        }
      }, renderFactoryField, customLabel && customLabel, touched && !disabled && FieldWithError.renderErrorWarn(error, warning));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, (0, _extends2["default"])({}, this.props, {
        component: this.renderField
      }));
    }
  }], [{
    key: "factoryField",
    value: function factoryField(fieldComponent, attributes, props) {
      switch (fieldComponent) {
        case "textarea":
          {
            // eslint-disable-next-line react/destructuring-assignment
            var rows = props.rows || null;
            // eslint-disable-next-line react/destructuring-assignment
            var cols = props.cols || null;
            return /*#__PURE__*/_react["default"].createElement("textarea", _objectSpread(_objectSpread({}, attributes), {}, {
              rows: rows,
              cols: cols
            }));
            // return <TextArea {...{ ...attributes, rows, cols }} />;
          }
        case "input":
          return /*#__PURE__*/_react["default"].createElement("input", _objectSpread({}, attributes));
        // return <Input {...attributes} />;
        default:
          return /*#__PURE__*/_react["default"].createElement("input", _objectSpread({}, attributes));
        // return <Input {...attributes} />;
      }
    }
  }, {
    key: "renderErrorWarn",
    value: function renderErrorWarn(error, warning) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, error && error.id && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: error.id,
        values: error.values
      }, function (txt) {
        return /*#__PURE__*/_react["default"].createElement(_fieldWithError.ErrorStyled, null, txt);
      }), error && !error.id && error.txt && /*#__PURE__*/_react["default"].createElement(_fieldWithError.ErrorStyled, null, error.txt), warning && warning.id && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: warning.id,
        values: warning.values
      }, function (txt) {
        return /*#__PURE__*/_react["default"].createElement(_fieldWithError.WarningStyled, null, txt);
      }), warning && !warning.id && warning.txt && /*#__PURE__*/_react["default"].createElement(_fieldWithError.WarningStyled, null, warning.txt));
    }
  }]);
}(_react.Component);
FieldWithError.defaultProps = {
  withWrapper: true,
  autocomplete: false,
  customLabel: null,
  doNotFlex: false,
  rows: null,
  cols: null,
  maxLength: undefined,
  dataCy: null
};
var _default = exports["default"] = FieldWithError;