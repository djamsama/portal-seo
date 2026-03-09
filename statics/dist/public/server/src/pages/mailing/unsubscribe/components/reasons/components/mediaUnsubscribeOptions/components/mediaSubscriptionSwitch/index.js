"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _veDesignSystem = require("ve-design-system");
var _mediaSubscriptionSwitch = require("./styles/mediaSubscriptionSwitch");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var MediaSubscriptionSwitch = function MediaSubscriptionSwitch(_ref) {
  var mediaSubscription = _ref.mediaSubscription,
    site = _ref.site,
    hideLeftBorder = _ref.hideLeftBorder;
  var label = mediaSubscription.label,
    subscribed = mediaSubscription.subscribed;
  var _useState = (0, _react.useState)(subscribed ? mediaSubscription.newUnsubscription ? "dark" : site : "light"),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    switchColor = _useState2[0],
    setSwitchColor = _useState2[1];

  /**
   * Gère le changement de désinscription pour un média/univers.
   * @param {number} value - La valeur de désinscription.
   */
  var handleSwitchChange = function handleSwitchChange(value) {
    mediaSubscription.newUnsubscription = !value;

    // Mettre à jour la couleur du switch
    setSwitchColor(value ? site : "dark");
  };
  return /*#__PURE__*/_react["default"].createElement(_mediaSubscriptionSwitch.SwitchRow, {
    hideLeftBorder: hideLeftBorder
  }, /*#__PURE__*/_react["default"].createElement(_mediaSubscriptionSwitch.SwitchLabel, {
    disabled: !subscribed,
    hideLeftBorder: hideLeftBorder
  }, label), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Switch, {
    themeColor: switchColor,
    callBack: handleSwitchChange,
    initialValue: subscribed,
    disabled: !subscribed
  }));
};
var _default = exports["default"] = MediaSubscriptionSwitch;