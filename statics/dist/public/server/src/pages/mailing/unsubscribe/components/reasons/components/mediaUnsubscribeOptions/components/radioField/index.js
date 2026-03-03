"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _veDesignSystem = require("ve-design-system");
var _radioField = require("./styles/radioField");
var RadioField = function RadioField(_ref) {
  var id = _ref.id,
    labelId = _ref.labelId,
    onClick = _ref.onClick,
    radioButtonName = _ref.radioButtonName,
    checked = _ref.checked,
    value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
    id: id,
    name: "unsubscribeChoices",
    component: _veDesignSystem.Radio,
    type: "radio",
    "data-cy": radioButtonName,
    label: /*#__PURE__*/_react["default"].createElement(_radioField.UnsubscribeChoiceTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: labelId
    })),
    mandatory: true,
    onClick: onClick,
    checked: checked,
    value: value
  });
};
var _default = exports["default"] = RadioField;