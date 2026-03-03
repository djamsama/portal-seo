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
var _veDesignSystem = require("ve-design-system");
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../formattedHTMLMessage"));
var _contextComponent = require("../../../../../contextComponent");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../fieldWithLabel"));
var _fieldValidators = require("../../../../../fieldWithError/validators/fieldValidators");
var _button = _interopRequireDefault(require("../../../../../styles/button"));
var _forgetForm = require("./styles/forgetForm");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceModalForgetForm = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceModalForgetForm(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceModalForgetForm);
    _this = _callSuper(this, MySpaceModalForgetForm, [props, context]);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.state = {
      email: props.email,
      clicked: false
    };
    return _this;
  }
  (0, _inherits2["default"])(MySpaceModalForgetForm, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceModalForgetForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setData("email", this.props.email);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(values) {
      this.props.onSubmit(values, this.context, this.props.redirectUrl, this.props.intl);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.props.success || this.state.clicked) {
        event.preventDefault();
        this.setState({
          clicked: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        error = _this$props.error,
        handleSubmit = _this$props.handleSubmit,
        onReturn = _this$props.onReturn,
        intl = _this$props.intl,
        success = _this$props.success,
        emailUser = _this$props.email,
        onChangeEmail = _this$props.onChangeEmail;
      return /*#__PURE__*/_react["default"].createElement(_forgetForm.ForgetForm, {
        onClick: this.handleClick,
        onSubmit: handleSubmit(this.onSubmit)
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "title"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_forgottenPassword_title"
      })), /*#__PURE__*/_react["default"].createElement("p", {
        className: success ? "forget-success baseline" : "baseline"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: success ? "foj_myspace_forgottenPassword_confirmation" : "foj_myspace_forgottenPassword_text",
        values: {
          "0": emailUser
        }
      })), error && /*#__PURE__*/_react["default"].createElement("strong", {
        style: {
          color: "red"
        }
      }, error), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        type: "email",
        name: "email",
        label: intl.formatMessage({
          id: "foj_myspace_forgottenPassword_email"
        }),
        mandatory: true,
        validate: [_fieldValidators.required, _fieldValidators.email, _fieldValidators.maxLength255],
        onChange: onChangeEmail,
        value: emailUser,
        disabled: success
      }), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        contained: true,
        type: "submit",
        isDisabled: success
      }, intl.formatMessage({
        id: "foj_myspace_forgottenPassword_send"
      })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        as: "a",
        onClick: onReturn
      }, intl.formatMessage({
        id: "foj_myspace_forgottenPassword_back"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceModalForgetForm);