"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _requestService = _interopRequireDefault(require("../requestService"));
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); } /* eslint-disable no-undef */ /* eslint-disable func-names */
var MockAdapter = require("axios-mock-adapter");
test("requestService with error", function () {
  var requestService = new _requestService["default"]();
  var testGetWithoutParam = function testGetWithoutParam() {
    requestService.get();
  };
  expect(testGetWithoutParam).toThrow("Cannot do the request without url");
  var testPostWithoutParam = function testPostWithoutParam() {
    requestService.post();
  };
  expect(testPostWithoutParam).toThrow("Cannot do the request without url");
  var testPutWithoutParam = function testPutWithoutParam() {
    requestService.put();
  };
  expect(testPutWithoutParam).toThrow("Cannot do the request without url");
  var testDeleteWithoutParam = function testDeleteWithoutParam() {
    requestService["delete"]();
  };
  expect(testDeleteWithoutParam).toThrow("Cannot do the request without url");
});
test("requestService", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
  var mockUrl, requestService, mock, mockDataPost, mockDataPostWithParam, mockDataGet, mockDataPut, mockDataDelete;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        mockUrl = "http://mockUrl";
        requestService = new _requestService["default"]({
          accept: "application/json",
          contentType: "application/json",
          baseUrl: "baseUrl",
          data: {
            data: "test"
          },
          params: {
            params: "test"
          },
          xRequestedWith: "XMLHttpRequest"
        });
        try {
          requestService.setData({
            test: "test"
          });
        } catch (error) {
          fail("Test Ko ".concat(error));
        }
        try {
          requestService.setParams({
            test: "test"
          });
        } catch (error) {
          fail("Test Ko ".concat(error));
        }
        mock = new MockAdapter(requestService.create());
        mockDataPost = {
          test: "response test post"
        };
        mock.onPost(mockUrl).reply(200, mockDataPost);
        _context.n = 1;
        return requestService.post(mockUrl).then(function (response) {
          expect(response.data).toEqual(mockDataPost);
        })["catch"](function (error) {
          fail("Test onPost Ko ".concat(error));
        });
      case 1:
        mockDataPostWithParam = {
          test: "response test post"
        };
        mock.onPost(mockUrl, {
          param: "test"
        }).reply(200, mockDataPostWithParam);
        _context.n = 2;
        return requestService.post(mockUrl, {
          param: "test"
        }).then(function (response) {
          expect(response.data).toEqual(mockDataPostWithParam);
        })["catch"](function (error) {
          fail("Test onPost Ko ".concat(error));
        });
      case 2:
        mockDataGet = {
          test: "response test get"
        };
        mock.onGet("http://mockUrl?test=test").reply(200, mockDataGet);
        // await requestService
        //   .get(mockUrl)
        //   .then(function(response) {
        //     expect(response.data).toEqual(mockDataGet);
        //   })
        //   .catch(function(error) {
        //     fail(`Test get Ko ${error}`);
        //   });
        mockDataPut = {
          test: "response test put"
        };
        mock.onPut(mockUrl).reply(200, mockDataPut);
        _context.n = 3;
        return requestService.put(mockUrl).then(function (response) {
          expect(response.data).toEqual(mockDataPut);
        })["catch"](function (error) {
          fail("Test put Ko ".concat(error));
        });
      case 3:
        mockDataDelete = {
          test: "response test delete"
        };
        mock.onDelete(mockUrl).reply(200, mockDataDelete);
        _context.n = 4;
        return requestService["delete"](mockUrl).then(function (response) {
          expect(response.data).toEqual(mockDataDelete);
        })["catch"](function (error) {
          fail("Test delete Ko ".concat(error));
        });
      case 4:
        return _context.a(2);
    }
  }, _callee);
})));
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AE",
  language: "FR",
  baseUrl: "archiexpo.fr",
  siteLabel: "archiexpo",
  tld: "fr",
  locale: "fr",
  domain: "archiexpo.fr"
};
// eslint-disable-next-line no-underscore-dangle
window.__config__ = {
  portal: portal
};
test("requestService with config", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee2() {
  var mockUrl, requestService, mock, mockDataPost, mockDataPostWithParam, mockDataGet, mockDataPut, mockDataDelete;
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.n) {
      case 0:
        mockUrl = "http://mockUrl";
        requestService = new _requestService["default"]({
          accept: "application/json",
          contentType: "application/json",
          baseUrl: "baseUrl",
          data: {
            data: "test"
          },
          params: {
            params: "test"
          },
          xRequestedWith: "XMLHttpRequest"
        });
        try {
          requestService.setData({
            test: "test"
          });
        } catch (error) {
          fail("Test Ko ".concat(error));
        }
        try {
          requestService.setParams({
            test: "test"
          });
        } catch (error) {
          fail("Test Ko ".concat(error));
        }
        mock = new MockAdapter(requestService.create());
        mockDataPost = {
          test: "response test post"
        };
        mock.onPost(mockUrl).reply(200, mockDataPost);
        _context2.n = 1;
        return requestService.post(mockUrl).then(function (response) {
          expect(response.data).toEqual(mockDataPost);
        })["catch"](function (error) {
          fail("Test onPost Ko ".concat(error));
        });
      case 1:
        mockDataPostWithParam = {
          test: "response test post"
        };
        mock.onPost(mockUrl, {
          param: "test"
        }).reply(200, mockDataPostWithParam);
        _context2.n = 2;
        return requestService.post(mockUrl, {
          param: "test"
        }).then(function (response) {
          expect(response.data).toEqual(mockDataPostWithParam);
        })["catch"](function (error) {
          fail("Test onPost Ko ".concat(error));
        });
      case 2:
        mockDataGet = {
          test: "response test get"
        };
        mock.onGet("http://mockUrl").reply(200, mockDataGet);
        mock.onGet("http://mockUrl?test=test").reply(200, mockDataGet);
        _context2.n = 3;
        return requestService.get(mockUrl).then(function (response) {
          expect(response.data).toEqual(mockDataGet);
        })["catch"](function (error) {
          fail("Test get Ko ".concat(error));
        });
      case 3:
        mockDataPut = {
          test: "response test put"
        };
        mock.onPut(mockUrl).reply(200, mockDataPut);
        _context2.n = 4;
        return requestService.put(mockUrl).then(function (response) {
          expect(response.data).toEqual(mockDataPut);
        })["catch"](function (error) {
          fail("Test put Ko ".concat(error));
        });
      case 4:
        mockDataDelete = {
          test: "response test delete"
        };
        mock.onDelete(mockUrl).reply(200, mockDataDelete);
        _context2.n = 5;
        return requestService["delete"](mockUrl).then(function (response) {
          expect(response.data).toEqual(mockDataDelete);
        })["catch"](function (error) {
          fail("Test delete Ko ".concat(error));
        });
      case 5:
        return _context2.a(2);
    }
  }, _callee2);
})));