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
var _find = _interopRequireDefault(require("lodash/find"));
var _contextComponent = require("../../../../contextComponent");
var _dropDownCurrency = require("../styles/dropDownCurrency");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Devise sélectionnée. */
var SelectedCurrency = /*#__PURE__*/function (_ContextComponent) {
  function SelectedCurrency(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, SelectedCurrency);
    _this = _callSuper(this, SelectedCurrency, [props, state]);
    _this.state = {
      current: props.currentCurrency,
      close: false
    };
    return _this;
  }
  (0, _inherits2["default"])(SelectedCurrency, _ContextComponent);
  return (0, _createClass2["default"])(SelectedCurrency, [{
    key: "render",
    value: function render() {
      var items = this.props.currencyItems;
      var _this$props = this.props,
        currentCurrency = _this$props.currentCurrency,
        onClick = _this$props.onClick;
      if (false && items && items.length > 0) {
        var selectedItem = (0, _find["default"])(items, function (item) {
          return item.value === currentCurrency;
        });
        if (selectedItem) {
          return /*#__PURE__*/_react["default"].createElement(_dropDownCurrency.Selection, {
            onClick: onClick,
            "data-cy": "currency-selector"
          }, /*#__PURE__*/_react["default"].createElement("span", null, selectedItem.label, " "), /*#__PURE__*/_react["default"].createElement("i", {
            className: "fa fa-caret-down"
          }));
        }
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      return /*#__PURE__*/_react["default"].createElement(_dropDownCurrency.EmptyCurrency, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = SelectedCurrency;
SelectedCurrency.defaultProps = {
  currentCurrency: "EUR"
};