"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _context = require("../../../../context");
var _VisitorGeolocHelper = require("../../../../helpers/VisitorGeolocHelper");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// $FlowFixMe
var VisitorGeoloc = function VisitorGeoloc(_ref) {
  var _context$config;
  var isWebsiteCustomizationCookieConsented = _ref.isWebsiteCustomizationCookieConsented,
    setGeolocChanged = _ref.setGeolocChanged;
  var context = (0, _react.useContext)(_context.AppContext);
  var domain = (context === null || context === void 0 || (_context$config = context.config) === null || _context$config === void 0 || (_context$config = _context$config.portal) === null || _context$config === void 0 ? void 0 : _context$config.domain) || "";
  (0, _react.useEffect)(function () {
    /**
     * On récupére la géolocalisation du visiteur s'il a consenti
     * aux cookies de personnalisation du site web dans didomi 
     * sinon on les supprime.
     */
    if (isWebsiteCustomizationCookieConsented) {
      _VisitorGeolocHelper.VisitorGeolocHelper.saveGeolocCookies(domain).then(function (geolocChanged) {
        // Met à jour le statut de changement de géolocalisation.
        setGeolocChanged(geolocChanged);
      });
    } else {
      _VisitorGeolocHelper.VisitorGeolocHelper.deleteGeolocCookies(domain);
    }
  }, [isWebsiteCustomizationCookieConsented]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
};
var _default = exports["default"] = VisitorGeoloc;