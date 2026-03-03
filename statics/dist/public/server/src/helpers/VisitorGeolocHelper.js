"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisitorGeolocHelper = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _reactCookie = require("react-cookie");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
/**
 * Constantes pour les noms des cookies.
 */
var COOKIE_NAMES = {
  VISITOR_LATITUDE: "visitorGpsLatitude",
  VISITOR_LONGITUDE: "visitorGpsLongitude"
};
var VisitorGeolocHelper = exports.VisitorGeolocHelper = /*#__PURE__*/function () {
  function VisitorGeolocHelper() {
    (0, _classCallCheck2["default"])(this, VisitorGeolocHelper);
  }
  return (0, _createClass2["default"])(VisitorGeolocHelper, null, [{
    key: "saveGeolocCookies",
    value: (
    /**
     * Récupère la géolocalisation du visiteur et enregistre les données dans les cookies.
     * Si la géolocalisation a changé, on met à jour geolocChanged à `true`
     * 
     * @param {string} domain Le domaine sur lequel les cookies sont enregistrés. Ex: directindustry.fr
     */
    function () {
      var _saveGeolocCookies = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(domain) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, new Promise(function (resolve) {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (geolocationPosition) {
                    var _geolocationPosition$ = geolocationPosition.coords,
                      latitude = _geolocationPosition$.latitude,
                      longitude = _geolocationPosition$.longitude;

                    // Vérifie si la latitude et la longitude sont des nombres valides
                    if (!Number.isNaN(latitude) && !Number.isNaN(longitude)) {
                      var cookie = new _reactCookie.Cookies();

                      // Récupérer latitude et de longitude existants
                      var oldLatitude = parseFloat(cookie.get(COOKIE_NAMES.VISITOR_LATITUDE)) || null;
                      var oldLongitude = parseFloat(cookie.get(COOKIE_NAMES.VISITOR_LONGITUDE)) || null;

                      // Définir la date d'expiration pour 60 jours à partir de maintenant
                      var largeExpDate = new Date();
                      largeExpDate.setTime(largeExpDate.getTime() + 60 * 24 * 3600 * 1000);

                      // Définir les nouveaux cookies de latitude et de longitude
                      cookie.set(COOKIE_NAMES.VISITOR_LATITUDE, latitude, {
                        path: "/",
                        domain: domain,
                        expires: largeExpDate
                      });
                      cookie.set(COOKIE_NAMES.VISITOR_LONGITUDE, longitude, {
                        path: "/",
                        domain: domain,
                        expires: largeExpDate
                      });

                      // Vérifie si la géolocalisation a changé de manière significative.
                      var tolerance = 0.0001;
                      var geolocChanged = Math.abs(latitude - oldLatitude) > tolerance || Math.abs(longitude - oldLongitude) > tolerance;
                      resolve(geolocChanged);
                    }
                  });
                }
              }));
          }
        }, _callee);
      }));
      function saveGeolocCookies(_x) {
        return _saveGeolocCookies.apply(this, arguments);
      }
      return saveGeolocCookies;
    }()
    /**
     * Supprime les cookies liés à la géolocalisation du visiteur.
     * 
     * @param {string} domain Le domaine sur lequel les cookies sont enregistrés. Ex: directindustry.fr
     */
    )
  }, {
    key: "deleteGeolocCookies",
    value: function deleteGeolocCookies(domain) {
      var cookie = new _reactCookie.Cookies();
      cookie.remove(COOKIE_NAMES.VISITOR_LATITUDE, {
        path: "/",
        domain: domain
      });
      cookie.remove(COOKIE_NAMES.VISITOR_LONGITUDE, {
        path: "/",
        domain: domain
      });
    }
  }]);
}();