"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _contextComponent = require("../../../../contextComponent");
var _dropDownCurrency = require("../styles/dropDownCurrency");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Devise disponibles. */
var AvailableCurrencies = /*#__PURE__*/function (_ContextComponent) {
  function AvailableCurrencies(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, AvailableCurrencies);
    _this = _callSuper(this, AvailableCurrencies, [props, state]);
    _this.state = {
      current: props.currentCurrency,
      close: false
    };
    return _this;
  }
  (0, _inherits2["default"])(AvailableCurrencies, _ContextComponent);
  return (0, _createClass2["default"])(AvailableCurrencies, [{
    key: "handleClick",
    value: function handleClick(currency) {
      var toggle = this.props.toggle;
      if (currency !== this.state.current) {
        var onClick = this.props.onClick;
        onClick(currency, this.context);
        if (toggle) {
          toggle();
        }
        this.setState({
          current: currency,
          close: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var currencyItems = this.props.currencyItems;
      if (currencyItems) {
        return /*#__PURE__*/_react["default"].createElement(_dropDownCurrency.ContainerCurrency, null, /*#__PURE__*/_react["default"].createElement(_dropDownCurrency.TitleCurrency, null, currencyItems.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_dropDownCurrency.RowCurrency, {
            key: item.label,
            onClick: function onClick() {
              return _this2.handleClick(item.value);
            },
            "data-cy": "rowCurrency_".concat(item.value)
          }, item.label);
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = AvailableCurrencies;
AvailableCurrencies.defaultProps = {};