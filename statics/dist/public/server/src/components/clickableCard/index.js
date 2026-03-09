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
var _fieldCheckbox = require("../fieldCheckbox");
var _clickableCard = require("./styles/clickableCard");
var _reduxForm = require("redux-form");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/no-danger */
var ClickableCard = /*#__PURE__*/function (_PureComponent) {
  function ClickableCard(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, ClickableCard);
    _this = _callSuper(this, ClickableCard, [props, state]);
    _this.state = {
      selectedState: _this.props.selected
    };
    _this.onClickCard = _this.onClickCard.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ClickableCard, _PureComponent);
  return (0, _createClass2["default"])(ClickableCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Initialisation de la card
      var _this$props = this.props,
        checkboxName = _this$props.checkboxName,
        handleChange = _this$props.handleChange,
        disabled = _this$props.disabled;
      var selectedState = this.state.selectedState;
      if (disabled) {
        handleChange(checkboxName, disabled);
        this.setState({
          selectedState: disabled
        });
      }
    }
  }, {
    key: "onClickCard",
    value: function onClickCard() {
      var selectedState = this.state.selectedState;
      var _this$props2 = this.props,
        checkboxName = _this$props2.checkboxName,
        handleChange = _this$props2.handleChange,
        disabled = _this$props2.disabled;

      // Le onClick est desactiver si la props est disabled
      if (!disabled) {
        handleChange(checkboxName, !selectedState);
        this.setState({
          selectedState: !selectedState
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        selected = _this$props3.selected,
        children = _this$props3.children,
        checkboxName = _this$props3.checkboxName,
        disabled = _this$props3.disabled;
      var selectedState = this.state.selectedState;
      return /*#__PURE__*/_react["default"].createElement(_clickableCard.CardBorder, {
        selected: selectedState,
        disabled: disabled
      }, /*#__PURE__*/_react["default"].createElement(_clickableCard.CardWrapper, {
        selected: selectedState,
        onClick: this.onClickCard
      }, selectedState && /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-check"
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: checkboxName,
        className: "type-checkbox",
        "data-cy": checkboxName.replace(".", "_"),
        component: _fieldCheckbox.CheckboxField
      }), children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, currentState) {
      // Cette methode geree le changement du props à partir du form (selectAll)
      if (currentState.selectedState !== props.selected) {
        return {
          selectedState: props.selected
        };
      }
      return null;
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = ClickableCard;
ClickableCard.defaultProps = {
  selected: false,
  disabled: false
};