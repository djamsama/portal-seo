"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownCurrency = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _popup = _interopRequireDefault(require("../../../popup"));
var _selectedCurrency = _interopRequireDefault(require("./components/selectedCurrency"));
var _availableCurrencies = _interopRequireDefault(require("./components/availableCurrencies"));
var _contextComponent = require("../../../contextComponent");
var _dropDownCurrency = require("./styles/dropDownCurrency");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/no-did-update-set-state */
/**
 * Menu déroulant des devises sur le front
 *
 */
var DropDownCurrency = exports.DropDownCurrency = /*#__PURE__*/function (_ContextComponent) {
  function DropDownCurrency(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, DropDownCurrency);
    _this = _callSuper(this, DropDownCurrency, [props]);
    _this.state = {
      items: [],
      current: props.currentCurrency,
      close: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(DropDownCurrency, _ContextComponent);
  return (0, _createClass2["default"])(DropDownCurrency, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (false && this.state.items.length <= 0 && !this.props.currencyItems) {
        this.props.loadCurrency();
      }
      if (this.state.close === true) {
        this.setState({
          close: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.close === true) {
        this.setState({
          close: false
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        close: !this.state.close
      });
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.props.currencyItems;
      var _this$props = this.props,
        currentCurrency = _this$props.currentCurrency,
        onClick = _this$props.onClick;
      var closePopup = this.state.close === true ? {
        open: false
      } : {};
      if (false && items && items.length > 0) {
        return /*#__PURE__*/_react["default"].createElement(_popup["default"], (0, _extends2["default"])({
          basic: true,
          trigger: /*#__PURE__*/_react["default"].createElement(_selectedCurrency["default"], {
            currentCurrency: currentCurrency,
            currencyItems: items
          }),
          contentstyle: {
            width: "auto",
            background: "none",
            border: "none",
            boxShadow: "none",
            padding: "0",
            margin: "0"
          },
          position: "bottom center"
        }, closePopup), /*#__PURE__*/_react["default"].createElement(_availableCurrencies["default"], {
          toggle: this.toggle,
          onClick: onClick,
          currentCurrency: currentCurrency,
          currencyItems: items
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_dropDownCurrency.EmptyCurrency, null);
    }
  }]);
}(_contextComponent.ContextComponent);
DropDownCurrency.propTypes = {
  /**
   * Trigramme de la devise (identifiant)
   */ // $FlowFixMe
  currentCurrency: _propTypes["default"].string
};

// $FlowFixMe
DropDownCurrency.defaultTypes = {
  currentCurrency: "EUR"
};