"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _mobileFieldSelect = require("./styles/mobileFieldSelect");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var MobileFieldSelect = function MobileFieldSelect(_ref) {
  var options = _ref.options,
    title = _ref.title,
    input = _ref.input;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  var _useState3 = (0, _react.useState)({
      value: "",
      text: ""
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    selectedValue = _useState4[0],
    setSelectedValue = _useState4[1];
  var changeElement = function changeElement(value, text) {
    setSelectedValue({
      value: value,
      text: text
    });
    input.onChange(value);
    setOpened(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_mobileFieldSelect.OverlayStyled, {
    opened: opened
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend",
    onClick: function onClick(e) {
      setOpened(false);
      if (e.currentTarget) e.currentTarget.blur();
    },
    onKeyPress: function onKeyPress() {
      setOpened(false);
    },
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement("legend", null, title), /*#__PURE__*/_react["default"].createElement(_mobileFieldSelect.IconStyled, {
    name: "close"
  })), /*#__PURE__*/_react["default"].createElement("ul", null, options.map(function (opt) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: opt.value,
      value: opt.value
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick(e) {
        changeElement(e.target.value, e.target.textContent);
      },
      type: "button",
      value: opt.value
    }, opt.text));
  }))), /*#__PURE__*/_react["default"].createElement("input", {
    name: input.name,
    "data-cy": input.name,
    value: selectedValue.text,
    "data-val": selectedValue.value,
    onChange: function onChange(event, data) {
      input.onChange(data.value);
    },
    onClick: function onClick(e) {
      setOpened(!opened);
      if (e.currentTarget) e.currentTarget.blur();
    },
    type: "text",
    className: "mobile-select",
    inputMode: "none"
  }));
};
var _default = exports["default"] = MobileFieldSelect;