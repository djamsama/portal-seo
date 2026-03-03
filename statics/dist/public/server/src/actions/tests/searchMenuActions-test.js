"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
var Action = _interopRequireWildcard(require("../searchMenuActions"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
describe("searchMenu Actions", function () {
  it("changeSearchMode", function () {
    var mode = "PRODUCTS";
    var searchMenu = Action.changeSearchMode(mode);
    expect(searchMenu.type).toEqual(Action.SEARCH_MODE_CHANGE);
    expect(searchMenu.payload.mode).toEqual(mode);
  });
  it("loadTranslations", function () {
    var searchMenu = Action.businessType({
      test: "test"
    });
    expect(searchMenu.type).toEqual(Action.SEARCH_BUSINESS_TYPE);
    expect(searchMenu.payload.data.test).toEqual("test");
  });
});