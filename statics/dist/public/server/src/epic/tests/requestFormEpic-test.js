"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _rxjs = require("rxjs");
var _requestFormEpic = require("../requestFormEpic");
var _requestFormActions = require("../../pages/request/actions/requestFormActions");
var _actions = require("../../actions");
var _mockAdapter = require("../../../tools/utils-test/mockAdapter.js");
var _requestFormReducer = require("../../pages/request/reducers/requestFormReducer");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
var mockResponse = require("../../../tools/utils-test/assets/request/mockRequestFormResponse.json");
// eslint-disable-next-line max-len
var mockResponseContactChoice = require("../../../tools/utils-test/assets/request/mockRequestFormContactChoiceResponse.json");
var mockRequestForm = require("../../../tools/utils-test/assets/request/requestFormContactChoiceState.json");
var state = _requestFormReducer.RequestFormState;
state.value = {
  RequestForm: mockRequestForm
};
test("should dispatch SUBMIT_REQUEST_FORM_ERRORS when requestFormEpic failed", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
  var action$, epic$;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        _mockAdapter.mock.onPost("/ajax/request/form/contact-choice.json").networkError(); // Test quand le post renvoie une erreur
        // Création de l'observable d'action en utilisant `of` de RxJS
        action$ = (0, _rxjs.of)((0, _requestFormActions.submitRequestFormRequest)("ajax.request.formContactChoice", {
          contactId: "MAIN_CONTACT - 5106"
        }));
        epic$ = (0, _requestFormEpic.requestFormEpic)(action$, state);
        _context.n = 1;
        return epic$.subscribe(function (result) {
          expect(result.type).toEqual(_requestFormActions.SUBMIT_REQUEST_FORM_ERRORS);
        });
      case 1:
        return _context.a(2);
    }
  }, _callee);
})));
test("should dispatch requestFormSuccess with translations added", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee2() {
  var action$, epic$;
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.n) {
      case 0:
        _mockAdapter.mock.onPost("/ajax/request/form/contact-choice.json").reply(200, mockResponseContactChoice);
        action$ = (0, _rxjs.of)((0, _requestFormActions.submitRequestFormRequest)("ajax.request.formContactChoice", {
          contactId: "MAIN_CONTACT - 5106"
        }));
        epic$ = (0, _requestFormEpic.requestFormEpic)(action$, state);
        _context2.n = 1;
        return epic$.subscribe(function (result) {
          expect(result.type === _actions.TRANSLATIONS_LOADED || result.type === _requestFormActions.SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS).toBeTruthy();
        });
      case 1:
        return _context2.a(2);
    }
  }, _callee2);
})));
test("should dispatch requestFormSuccess without translations added", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee3() {
  var action$, epic$;
  return _regenerator().w(function (_context3) {
    while (1) switch (_context3.n) {
      case 0:
        mockResponseContactChoice.content.state.messages = null;
        _mockAdapter.mock.onPost("/ajax/request/form/contact-choice.json").reply(200, mockResponseContactChoice);
        action$ = (0, _rxjs.of)((0, _requestFormActions.submitRequestFormRequest)("step", {
          contactId: "MAIN_CONTACT - 5106"
        }));
        epic$ = (0, _requestFormEpic.requestFormEpic)(action$, state);
        _context3.n = 1;
        return epic$.subscribe(function (result) {
          expect(result.type === _requestFormActions.SUBMIT_REQUEST_FORM_LAST_STEP_SUCCESS && result.type !== _actions.TRANSLATIONS_LOADED).toBeTruthy();
        });
      case 1:
        return _context3.a(2);
    }
  }, _callee3);
})));
test("should dispatch SUBMIT_REQUEST_FORM_ERRORS when service return 200 with error", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee4() {
  var action$, epic$;
  return _regenerator().w(function (_context4) {
    while (1) switch (_context4.n) {
      case 0:
        mockResponseContactChoice.errors = "Grosse erreur";
        _mockAdapter.mock.onPost("/ajax/request/form/contact-choice.json").reply(200, mockResponseContactChoice);
        action$ = (0, _rxjs.of)((0, _requestFormActions.submitRequestFormRequest)("ajax.request.form", {
          comment: "une description d'une demande",
          requestTypesChoices: {
            DOC: true,
            PHONE_REMINDER: true
          }
        }));
        epic$ = (0, _requestFormEpic.requestFormEpic)(action$, state);
        _context4.n = 1;
        return epic$.subscribe(function (result) {
          expect(result.type === _requestFormActions.SUBMIT_REQUEST_FORM_ERRORS).toBeTruthy();
        });
      case 1:
        return _context4.a(2);
    }
  }, _callee4);
})));
test("should dispatch requestFormSuccess when service return 200", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee5() {
  var action$, epic$;
  return _regenerator().w(function (_context5) {
    while (1) switch (_context5.n) {
      case 0:
        _mockAdapter.mock.onPost("/ajax/request/form.json").reply(200, mockResponse);
        action$ = (0, _rxjs.of)((0, _requestFormActions.submitRequestFormRequest)("ajax.request.form", {
          comment: "une description de la demande"
        }));
        state.value.RequestForm.stepSubmitUrl = "/ajax/request/form.json";
        epic$ = (0, _requestFormEpic.requestFormEpic)(action$, state);
        _context5.n = 1;
        return epic$.subscribe(function (result) {
          expect(result.type === _requestFormActions.SUBMIT_REQUEST_FORM_SUCCESS || result.type === _actions.TRANSLATIONS_LOADED).toBeTruthy();
        });
      case 1:
        return _context5.a(2);
    }
  }, _callee5);
})));
test("should dispatch SUBMIT_REQUEST_FORM_ERRORS when token is missing", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee6() {
  var action$, epic$;
  return _regenerator().w(function (_context6) {
    while (1) switch (_context6.n) {
      case 0:
        _mockAdapter.mock.onPost("/ajax/request/form.json").reply(200, mockResponse);
        action$ = (0, _rxjs.of)((0, _requestFormActions.submitRequestFormRequest)("ajax.request.form", {
          comment: "une description de la demande"
        }));
        state.value.RequestForm.fields = [state.value.RequestForm.fields[0], state.value.RequestForm.fields[1]];
        epic$ = (0, _requestFormEpic.requestFormEpic)(action$, state);
        _context6.n = 1;
        return epic$.subscribe(function (result) {
          expect(result.type === _requestFormActions.SUBMIT_REQUEST_FORM_ERRORS).toBeTruthy();
        });
      case 1:
        return _context6.a(2);
    }
  }, _callee6);
})));