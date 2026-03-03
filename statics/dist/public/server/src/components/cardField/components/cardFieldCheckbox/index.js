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
var _cardInput = _interopRequireDefault(require("../../../cardInput"));
var _cardField = require("../../styles/cardField");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CardFieldCheckbox = exports["default"] = /*#__PURE__*/function (_Component) {
  function CardFieldCheckbox(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, CardFieldCheckbox);
    _this = _callSuper(this, CardFieldCheckbox, [props]);
    _this.change = _this.change.bind(_this);
    var _this$props = _this.props,
      defaultValue = _this$props.defaultValue,
      input = _this$props.input;
    if (input.value === "") {
      input.onChange(defaultValue);
    }
    return _this;
  }
  (0, _inherits2["default"])(CardFieldCheckbox, _Component);
  return (0, _createClass2["default"])(CardFieldCheckbox, [{
    key: "change",
    value: function change(_ref) {
      var target = _ref.target;
      var input = this.props.input;
      var value = input.value.slice();
      if (target.checked) {
        value.push(target.value);
      } else {
        value.splice(value.indexOf(target.value), 1);
      }
      input.onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        children = _this$props2.options,
        input = _this$props2.input,
        style = _this$props2.style,
        className = _this$props2.className;
      return /*#__PURE__*/_react["default"].createElement(_cardField.StyledCardField, {
        style: style,
        className: className
      }, children.map(function (child) {
        var _child$props = child.props,
          grandchildren = _child$props.children,
          _child$props$style = _child$props.style,
          substyle = _child$props$style === void 0 ? {} : _child$props$style,
          value = _child$props.value;
        return /*#__PURE__*/_react["default"].createElement("label", {
          key: value
        }, /*#__PURE__*/_react["default"].createElement("input", {
          checked: input.value.includes(value),
          name: "".concat(input.name, "[").concat(value, "]"),
          onChange: _this2.change,
          type: "checkbox",
          value: value
        }), /*#__PURE__*/_react["default"].createElement("div", {
          style: substyle
        }, grandchildren));
      }));
    }
  }]);
}(_react.Component);
CardFieldCheckbox.defaultProps = {
  defaultValue: []
};