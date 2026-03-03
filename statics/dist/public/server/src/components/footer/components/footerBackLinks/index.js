"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _context = require("../../../../context");
var _link = require("../../../link");
var _footerBackLinks = require("./styles/footerBackLinks");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/* styles */
var FooterBackLinks = function FooterBackLinks() {
  var context = (0, _react.useContext)(_context.AppContext);
  if (context && context.initData && context.initData.backLinks && context.initData.backLinks.length > 0) {
    var backLinks = context.initData.backLinks;
    return /*#__PURE__*/_react["default"].createElement(_footerBackLinks.BackLinks, null, backLinks.map(function (backLink, index) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: "backLink".concat(backLink.textLink)
      }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: _footerBackLinks.FooterBackLink,
        to: backLink.link,
        external: true
      }, backLink.textLink), index + 1 < backLinks.length && " | ");
    }));
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
};
var _default = exports["default"] = FooterBackLinks;