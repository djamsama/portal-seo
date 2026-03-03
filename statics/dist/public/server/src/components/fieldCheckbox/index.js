"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _veDesignSystem = require("ve-design-system");
var _reactIntl = require("react-intl");
var _fieldWithError = require("../fieldWithError/styles/fieldWithError");
var _excluded = ["input", "label", "required", "width", "inline", "name", "disabled", "clearable", "meta"];
var CheckboxField = exports.CheckboxField = function CheckboxField(_ref) {
  var input = _ref.input,
    label = _ref.label,
    required = _ref.required,
    width = _ref.width,
    inline = _ref.inline,
    name = _ref.name,
    disabled = _ref.disabled,
    clearable = _ref.clearable,
    _ref$meta = _ref.meta,
    touched = _ref$meta.touched,
    error = _ref$meta.error,
    custom = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, {
    width: width,
    inline: inline,
    className: touched && error ? "has-error" : ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "field-group"
  }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Checkbox, (0, _extends2["default"])({}, input, {
    name: input.name,
    value: input.name,
    id: input.name,
    defaultChecked: !!input.value,
    "data-cy": input.name,
    type: "checkbox",
    label: label || ""
  }, custom))), touched && error && !disabled && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: error.id,
    values: error.values
  }, function (txt) {
    return /*#__PURE__*/_react["default"].createElement(_fieldWithError.ErrorStyled, null, txt);
  }));
};