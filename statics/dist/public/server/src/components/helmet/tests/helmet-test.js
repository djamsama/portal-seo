"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _testUtils = require("react-dom/test-utils");
var _index = _interopRequireDefault(require("../index"));
var _context4 = require("../../../context");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
/* eslint-disable no-undef */

var context = {
  initData: {
    metaObject: {
      title: "ArchiExpo - title",
      description: "Le salon online des produits pour l'architecture, mettant en relation directe fournisseurs et acheteurs ...",
      keywords: "des mots cles some keywords",
      robots: null
    },
    headerHreflangUrls: {
      DE: "http://www.archiexpo.de/myspace/secure/subscription",
      EN: "http://www.archiexpo.com/myspace/secure/subscription",
      FR: "http://www.archiexpo.fr/myspace/secure/subscription"
    }
  },
  config: {
    portal: {
      locale: "fr"
    }
  }
};
describe(" Helmet", function () {
  it("no verification no robot ", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
    var meta, results, i;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context4.AppContext.Provider, {
            value: context
          }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));
        case 1:
          meta = document.getElementsByTagName("meta");
          results = [];
          for (i = 0; i < meta.length; i += 1) {
            results[meta[i].name] = meta[i].content;
          }
          expect(document.title).toEqual(context.initData.metaObject.title);
          expect(results.viewport).toEqual("initial-scale=1, width=device-width");
          expect(results.description).toEqual(context.initData.metaObject.description);
          expect(results.keywords).toEqual(context.initData.metaObject.keywords);
          expect((0, _typeof2["default"])(results["baidu-site-verification"])).toEqual("undefined");
          expect((0, _typeof2["default"])(results["google-site-verification"])).toEqual("undefined");
          expect((0, _typeof2["default"])(results["msvalidate.01"])).toEqual("undefined");
          expect((0, _typeof2["default"])(results.robots)).toEqual("undefined");
        case 2:
          return _context.a(2);
      }
    }, _callee);
  })));

  // Fonction de temporisation.
  var sleep = function sleep(waitTimeInMs) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, waitTimeInMs);
    });
  };
  it("With verification and robot ", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee3() {
    var promise, meta, results, i;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return sleep(1000);
        case 1:
          context.initData.metaObject.msvalidate01 = "F472B803DDA436F369C88CFBD3582F98";
          context.initData.metaObject.googleSiteVerification = "OOlcYOOCK2FIzpVKAOXLzDXQFroPyiQWyrHcnYEYvO4";
          context.initData.metaObject.baiduSiteVerification = "5555FDGM67JL69SSX";
          context.initData.metaObject.robots = "robots";
          promise = Promise.resolve(); // Simulation d'attente de requêtes AJAX ou d'autres promesses
          _context3.n = 2;
          return (0, _testUtils.act)(/*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee2() {
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _context2.n = 1;
                  return promise;
                case 1:
                  return _context2.a(2);
              }
            }, _callee2);
          })));
        case 2:
          _context3.n = 3;
          return mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context4.AppContext.Provider, {
            value: context
          }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));
        case 3:
          meta = document.getElementsByTagName("meta");
          results = [];
          for (i = 0; i < meta.length; i += 1) {
            results[meta[i].name] = meta[i].content;
          }
          expect(document.title).toEqual(context.initData.metaObject.title);
          expect(results.viewport).toEqual("initial-scale=1, width=device-width");
          expect(results.description).toEqual(context.initData.metaObject.description);
          expect(results.keywords).toEqual(context.initData.metaObject.keywords);
          expect((0, _typeof2["default"])(results["baidu-site-verification"])).not.toBe("undefined");
          expect(results["baidu-site-verification"]).toEqual(context.initData.metaObject.baiduSiteVerification);
          expect(results["google-site-verification"]).toEqual(context.initData.metaObject.googleSiteVerification);
          expect((0, _typeof2["default"])(results["google-site-verification"])).not.toBe("undefined");
          expect(results["msvalidate.01"]).toEqual(context.initData.metaObject.msvalidate01);
          expect((0, _typeof2["default"])(results["msvalidate.01"])).not.toBe("undefined");
          expect(results.robots).toEqual(context.initData.metaObject.robots);
          expect((0, _typeof2["default"])(results.robots)).not.toBe("undefined");
        case 4:
          return _context3.a(2);
      }
    }, _callee3);
  })));
  it("links ", function () {
    mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context4.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));
    var alternateLinks = document.querySelectorAll("link[rel='alternate']");
    var resultAlternateLinks = [];
    for (var i = 0; i < alternateLinks.length; i += 1) {
      resultAlternateLinks[alternateLinks[i].hreflang] = alternateLinks[i].href;
    }
    expect(resultAlternateLinks.de).toEqual(context.initData.headerHreflangUrls.DE);
    expect(resultAlternateLinks.en).toEqual(context.initData.headerHreflangUrls.EN);
    expect(resultAlternateLinks.fr).toEqual(context.initData.headerHreflangUrls.FR);
  });
  it("no specific meta ", function () {
    mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context4.AppContext.Provider, {
      value: context
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)));
    var meta = document.getElementsByTagName("meta");
    var ogMeta = [].filter.call(meta, function (m) {
      return m.property && m.property.startsWith("og:");
    });
    var twitterMeta = [].filter.call(meta, function (m) {
      return m.property && m.property.startsWith("twitter:");
    });
    expect(ogMeta.length).toEqual(0);
    expect(twitterMeta.length).toEqual(0);
  });
});