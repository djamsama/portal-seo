"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _semanticUiReact = require("semantic-ui-react");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* eslint-disable react/require-default-props */ // $FlowFixMe
function Modal(_ref) {
  var children = _ref.children,
    open = _ref.open,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "tiny" : _ref$size,
    _ref$transition = _ref.transition,
    transition = _ref$transition === void 0 ? "horizontal flip" : _ref$transition,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1000 : _ref$duration;
  var _useState = (0, _react.useState)(open),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    stateOpen = _useState2[0],
    setOpen = _useState2[1];
  (0, _react.useEffect)(function () {
    if (typeof open === "boolean") {
      if (open === false) {
        setTimeout(function () {
          return setOpen(open);
        }, 500);
      } else {
        setOpen(open);
      }
    }
  }, [open]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Transition, {
    visible: open,
    animation: transition,
    duration: duration,
    dimmer: {
      active: false,
      dimmed: false,
      style: {
        opacity: 0.0
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal, {
    size: size,
    open: stateOpen
  }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, {
    className: "customModal"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children)))));
}
var _default = exports["default"] = Modal;