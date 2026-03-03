"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _fieldWithError = _interopRequireDefault(require("../fieldWithError"));
var _conditionalWrapper = _interopRequireDefault(require("../conditionalWrapper"));
var _fieldWithLabel = require("./styles/fieldWithLabel");
var _fieldValidators = require("../fieldWithError/validators/fieldValidators");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FieldWithLabel = /*#__PURE__*/function (_Component) {
  function FieldWithLabel(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldWithLabel);
    _this = _callSuper(this, FieldWithLabel, [props]);
    _this.renderFieldLabel = _this.renderFieldLabel.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(FieldWithLabel, _Component);
  return (0, _createClass2["default"])(FieldWithLabel, [{
    key: "renderFieldLabel",
    value: function renderFieldLabel() {
      var _this$props = this.props,
        isHtmlLabel = _this$props.isHtmlLabel,
        mandatory = _this$props.mandatory,
        mandatoryWithoutValidation = _this$props.mandatoryWithoutValidation,
        label = _this$props.label;
      return isHtmlLabel ? /*#__PURE__*/_react["default"].createElement(_fieldWithLabel.FieldLabel, {
        mandatory: mandatory || mandatoryWithoutValidation,
        htmlFor: "",
        className: "label",
        dangerouslySetInnerHTML: {
          __html: label
        }
      }) : /*#__PURE__*/_react["default"].createElement(_fieldWithLabel.FieldLabel, {
        mandatory: mandatory || mandatoryWithoutValidation,
        htmlFor: "",
        className: "label"
      }, label);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        mandatory = _this$props2.mandatory,
        _this$props2$withFiel = _this$props2.withFieldGroup,
        withFieldGroup = _this$props2$withFiel === void 0 ? false : _this$props2$withFiel,
        component = _this$props2.component,
        validate = _this$props2.validate;
      return /*#__PURE__*/_react["default"].createElement(_conditionalWrapper["default"], {
        condition: withFieldGroup,
        wrapper: function wrapper(children) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "field-group"
          }, children);
        }
      }, this.renderFieldLabel(), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], (0, _extends2["default"])({}, this.props, {
        validate: mandatory ? [].concat((0, _toConsumableArray2["default"])(validate), [_fieldValidators.required]) : (0, _toConsumableArray2["default"])(validate),
        fieldComponent: component
      })));
    }
  }]);
}(_react.Component); // $FlowFixMe
FieldWithLabel.defaultProps = {
  withFieldGroup: false,
  mandatory: false,
  mandatoryWithoutValidation: false,
  isHtmlLabel: false,
  validate: [],
  component: null
};
var _default = exports["default"] = FieldWithLabel;