"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _memoize = _interopRequireDefault(require("lodash/memoize"));
var _autocompleteSimple = _interopRequireDefault(require("../autocompleteSimple"));
var _index = _interopRequireDefault(require("../fieldWithError/index"));
var _fieldValidators = require("../fieldWithError/validators/fieldValidators");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MANDATORY_CHAR = " *";
var FieldPhone = /*#__PURE__*/function (_Component) {
  function FieldPhone(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldPhone);
    _this = _callSuper(this, FieldPhone, [props]);
    var phoneCodes = props.phoneCodes;
    _this.onChangePrefixCode = _this.onChangePrefixCode.bind(_this);
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    if (!_this.validateFieldPhone) {
      _this.validateFieldPhone = (0, _memoize["default"])(new _fieldValidators.PhonePrefix(phoneCodes).phonePrefix);
    }
    return _this;
  }
  (0, _inherits2["default"])(FieldPhone, _Component);
  return (0, _createClass2["default"])(FieldPhone, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var width = this.wrapperRef.current.clientWidth;
      this.wrapperRefWidth = width;
    }
  }, {
    key: "onChangePrefixCode",
    value: function onChangePrefixCode(value) {
      var onChangePrefixCode = this.props.onChangePrefixCode;
      if (onChangePrefixCode) {
        onChangePrefixCode(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        label = _this$props.label,
        tracking = _this$props.tracking,
        mandatory = _this$props.mandatory,
        mandatoryWithoutValidation = _this$props.mandatoryWithoutValidation,
        prefixFieldName = _this$props.prefixFieldName,
        numberFieldName = _this$props.numberFieldName,
        placeHolder = _this$props.placeHolder,
        placeHolderCode = _this$props.placeHolderCode,
        phoneCodes = _this$props.phoneCodes,
        dataCyPrefix = _this$props.dataCyPrefix,
        onChangePrefixCodeProps = _this$props.onChangePrefixCode,
        classNamePhoneCode = _this$props.classNamePhoneCode,
        onFocusShowAll = _this$props.onFocusShowAll;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "field fieldGroupPhone"
      }, /*#__PURE__*/_react["default"].createElement("label", null, "".concat(label).concat(mandatory || mandatoryWithoutValidation ? MANDATORY_CHAR : "")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "phone-container",
        ref: this.wrapperRef
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "phone-code ".concat(classNamePhoneCode)
      }, !phoneCodes && /*#__PURE__*/_react["default"].createElement(_index["default"], {
        withWrapper: false,
        type: "text",
        name: prefixFieldName,
        component: "input",
        className: "type-text phone-code",
        autocomplete: "tel-country-code",
        placeHolder: placeHolderCode
      }), phoneCodes && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_autocompleteSimple["default"], {
        component: onChangePrefixCodeProps ? _index["default"] : null,
        className: "type-text phone-code",
        suggestions: phoneCodes,
        validate: [this.validateFieldPhone],
        name: prefixFieldName,
        id: prefixFieldName,
        dataCy: dataCyPrefix,
        placeHolder: placeHolderCode,
        onChangeCallBack: this.onChangePrefixCode,
        nbElementToShow: 0,
        wrapperWith: this.wrapperRefWidth,
        onFocusShowAll: onFocusShowAll
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "phone-number"
      }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
        withWrapper: true,
        name: numberFieldName,
        component: "input",
        className: "type-text phone-number",
        autocomplete: "tel",
        placeholder: placeHolder,
        validate: mandatory ? [_fieldValidators.required] : [],
        type: "tel"
      }), tracking)));
    }
  }]);
}(_react.Component);
FieldPhone.defaultProps = {
  prefixFieldName: "phoneCode",
  numberFieldName: "phoneNumber",
  placeHolder: "",
  placeHolderCode: "",
  dataCyPrefix: "phoneCode",
  phoneCodes: null,
  onChangePrefixCode: null,
  classNamePhoneCode: "",
  onFocusShowAll: false,
  mandatoryWithoutValidation: false
};
var _default = exports["default"] = FieldPhone;