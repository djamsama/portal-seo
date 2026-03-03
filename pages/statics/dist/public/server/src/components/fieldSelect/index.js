"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectFieldNoFullScreen = exports.SelectField = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _reactIntl = require("react-intl");
var _reactDeviceDetect = require("react-device-detect");
var _fieldWithError = require("../fieldWithError/styles/fieldWithError");
var _mobileFieldSelect = _interopRequireDefault(require("./components/mobileFieldSelect"));
var _excluded = ["input", "label", "required", "width", "inline", "name", "options", "disabled", "clearable", "placeholder", "isFullscreenOnMobile", "meta"];
var SelectField = exports.SelectField = function SelectField(_ref) {
  var input = _ref.input,
    label = _ref.label,
    required = _ref.required,
    width = _ref.width,
    inline = _ref.inline,
    name = _ref.name,
    options = _ref.options,
    disabled = _ref.disabled,
    clearable = _ref.clearable,
    placeholder = _ref.placeholder,
    _ref$isFullscreenOnMo = _ref.isFullscreenOnMobile,
    isFullscreenOnMobile = _ref$isFullscreenOnMo === void 0 ? true : _ref$isFullscreenOnMo,
    _ref$meta = _ref.meta,
    touched = _ref$meta.touched,
    error = _ref$meta.error,
    custom = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var performMobile = !!(isFullscreenOnMobile && _reactDeviceDetect.isMobile);
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    width: width,
    inline: inline,
    className: touched && error ? "has-error" : ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "field-group"
  }, label && /*#__PURE__*/_react["default"].createElement("label", null, label), performMobile === true && /*#__PURE__*/_react["default"].createElement(_mobileFieldSelect["default"], {
    input: input,
    options: options,
    title: custom.mobileTitle
  }), performMobile === false &&
  /*#__PURE__*/
  // $FlowFixMe
  _react["default"].createElement(_semanticUiReact.Select, (0, _extends2["default"])({
    name: input.name,
    search: true,
    clearable: clearable,
    value: input.value,
    options: options,
    onChange: function onChange(event, data) {
      return input.onChange(data.value);
    },
    placeholder: placeholder,
    "data-cy": input.name
  }, custom))), touched && error && !disabled && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: error.id,
    values: error.values
  }, function (txt) {
    return /*#__PURE__*/_react["default"].createElement(_fieldWithError.ErrorStyled, null, txt);
  }));
};
var SelectFieldNoFullScreen = exports.SelectFieldNoFullScreen = function SelectFieldNoFullScreen(props) {
  return /*#__PURE__*/_react["default"].createElement(SelectField, (0, _extends2["default"])({}, props, {
    isFullscreenOnMobile: false
  }));
};