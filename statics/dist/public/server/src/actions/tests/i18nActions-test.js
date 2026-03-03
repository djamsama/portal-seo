"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSLATIONS_LOADED = exports.LOAD_TRANSLATION = void 0;
var Action = _interopRequireWildcard(require("../i18nVeActions"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var TRANSLATIONS_LOADED = exports.TRANSLATIONS_LOADED = "TRANSLATIONS_LOADED";
var LOAD_TRANSLATION = exports.LOAD_TRANSLATION = "LOAD_TRANSLATION";
describe("i18n Actions", function () {
  it("translationsLoaded", function () {
    var i18n = Action.translationsLoaded({
      id: "welcome",
      defaultMessage: "Bonjour par défaut"
    });
    expect(i18n.type).toEqual(Action.TRANSLATIONS_LOADED);
  });
  it("loadTranslations", function () {
    var i18n = Action.translationsLoaded("en", "/routes");
    expect(i18n.type).toEqual(Action.TRANSLATIONS_LOADED);
  });
});