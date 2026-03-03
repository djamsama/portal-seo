"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../formattedHTMLMessage"));
var _responsive = _interopRequireDefault(require("../styles/responsive"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// $FlowFixMe (vivement typescvript)
var ResponsiveMessage = function ResponsiveMessage(props) {
  var id = props.id,
    values = props.values,
    idMobile = props.idMobile,
    mobileValues = props.mobileValues,
    idTablet = props.idTablet,
    tabletValues = props.tabletValues,
    isHtml = props.isHtml,
    children = props.children,
    isResponsive = props.isResponsive,
    intl = props.intl;
  var MessageWrapper = isHtml ? _formattedHTMLMessage["default"] : _reactIntl.FormattedMessage;
  var getWhatWeHavToShow = function getWhatWeHavToShow() {
    var newShowDesktopMsg = true;
    var newShowTabletMsg = false;
    var newShowMobileMsg = false;
    if (_responsive["default"].isSmViewport() && idTablet) {
      newShowTabletMsg = true;
      newShowDesktopMsg = false;
    }
    if (_responsive["default"].isXsViewport() && idMobile || _responsive["default"].isSmViewport() && !idTablet && idMobile) {
      newShowMobileMsg = true;
      newShowTabletMsg = false;
      newShowDesktopMsg = false;
    }
    return {
      newShowMobileMsg: newShowMobileMsg,
      newShowTabletMsg: newShowTabletMsg,
      newShowDesktopMsg: newShowDesktopMsg
    };
  };
  var messages = getWhatWeHavToShow();
  var _useState = (0, _react.useState)(messages.newShowTabletMsg),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showTabletMsg = _useState2[0],
    setShowTabletMsg = _useState2[1];
  var _useState3 = (0, _react.useState)(messages.newShowMobileMsg),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    showMobileMsg = _useState4[0],
    setShowMobileMsg = _useState4[1];
  var _useState5 = (0, _react.useState)(messages.newShowDesktopMsg),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    showDesktopMsg = _useState6[0],
    setShowDesktopMsg = _useState6[1];
  (0, _react.useEffect)(function () {
    var handlerResize = function handlerResize() {
      var newMessages = getWhatWeHavToShow();
      // eslint-disable-next-line default-case
      switch (true) {
        case newMessages.newShowTabletMsg !== showTabletMsg && isResponsive:
          // On doit afficher les messages tablettes c'est pas déjà le cas, on met à jour
          setShowTabletMsg(newMessages.newShowTabletMsg);
          break;
        case newMessages.newShowMobileMsg !== showMobileMsg && isResponsive:
          // On doit afficher les messages mobiles c'est pas déjà le cas, on met à jour
          setShowMobileMsg(newMessages.newShowMobileMsg);
          break;
        case newMessages.newShowDesktopMsg !== showDesktopMsg && isResponsive:
          // On doit afficher les messages desktop c'est pas déjà le cas, on met à jour
          setShowDesktopMsg(newMessages.newShowDesktopMsg);
      }
    };
    if (isResponsive) {
      window.addEventListener("resize", handlerResize);
    }
    return function () {
      return window.removeEventListener("resize", handlerResize);
    };
  });
  var i18nValues = values ? {
    values: values
  } : {};
  var i18nId = id;
  if (showDesktopMsg) {
    i18nValues = values ? {
      values: values
    } : {};
    i18nId = id;
  }
  if (showTabletMsg) {
    if (tabletValues) {
      i18nValues = {
        values: tabletValues
      };
    }
    i18nId = idTablet;

    // Ajout d'un message par défaut
    var tabletDefaultMessage = intl.formatMessage({
      id: id
    });
    if (typeof tabletDefaultMessage !== "undefined" && tabletDefaultMessage !== "???".concat(id, "???")) {
      i18nValues.defaultMessage = tabletDefaultMessage;
    }

    // Verification du message tablette
    var tabletMessage = intl.formatMessage({
      id: idTablet
    });
    if (idTablet && (typeof tabletMessage === "undefined" || tabletMessage === "???".concat(idTablet, "???"))) {
      // Pas de message tablette on remet le message desktop
      i18nId = id;
    }
  }
  if (showMobileMsg) {
    if (mobileValues) {
      i18nValues = {
        values: mobileValues
      };
    }

    // Ajout d'un message par défaut
    var mobileDefaultMessage = intl.formatMessage({
      id: id
    });
    if (typeof mobileDefaultMessage !== "undefined" && mobileDefaultMessage !== "???".concat(id, "???")) {
      i18nValues.defaultMessage = mobileDefaultMessage;
    }
    i18nId = idMobile;

    // Verification du message mobile
    var mobileMessage = intl.formatMessage({
      id: idMobile
    });
    if (idMobile && (typeof mobileMessage === "undefined" || mobileMessage === "???".concat(idMobile, "???"))) {
      i18nId = id; // Pas de message tablette on remet le message desktop
    }
  }
  if (!i18nId) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null);
  }
  return (
    /*#__PURE__*/
    // $FlowFixMe
    _react["default"].createElement(MessageWrapper, (0, _extends2["default"])({
      id: i18nId
    }, i18nValues), children)
  );
};
// $FlowFixMe (vivement typescvript)
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ResponsiveMessage);
ResponsiveMessage.defaultProps = {
  values: null,
  idMobile: null,
  mobileValues: null,
  idTablet: null,
  tabletValues: null,
  isResponsive: true,
  isHtml: false
};