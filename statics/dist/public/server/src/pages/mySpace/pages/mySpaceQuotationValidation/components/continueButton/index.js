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
var _reactRedux = require("react-redux");
var _reduxForm = require("redux-form");
var _contextComponent = require("../../../../../../components/contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ContinueButton = /*#__PURE__*/function (_ContextComponent) {
  function ContinueButton() {
    (0, _classCallCheck2["default"])(this, ContinueButton);
    return _callSuper(this, ContinueButton, arguments);
  }
  (0, _inherits2["default"])(ContinueButton, _ContextComponent);
  return (0, _createClass2["default"])(ContinueButton, [{
    key: "render",
    value: function render() {
      var _this = this;
      var labelContinue = this.props.labelContinue;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit",
        onClick: function onClick() {
          return _this.props.onSubmit();
        }
      }, labelContinue));
    }
  }]);
}(_contextComponent.ContextComponent);
function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function onSubmit() {
      return dispatch((0, _reduxForm.submit)("QuotationValidationForm"));
    }
  };
}
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ContinueButton);