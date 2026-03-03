"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSLATIONS_LOADED = exports.LOAD_TRANSLATION = void 0;
var Action = _interopRequireWildcard(require("../trackingAction"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var TRANSLATIONS_LOADED = exports.TRANSLATIONS_LOADED = "TRANSLATIONS_LOADED";
var LOAD_TRANSLATION = exports.LOAD_TRANSLATION = "LOAD_TRANSLATION";
describe("trackingAction Actions", function () {
  it("trackAction", function () {
    var track = Action.trackAction({
      trackerType: "trackerType"
    }, 169);
    expect(track.type).toEqual(Action.TRACK_ELEMENT);
    expect(track.payload.trackerType).toEqual("trackerType");
    expect(track.payload.viewedPageId).toEqual(169);
  });
  it("trackActionDone", function () {
    var track = Action.trackActionDone("trackingElement");
    expect(track.type).toEqual(Action.TRACK_ELEMENT_DONE);
    expect(track.payload.trackingElement).toEqual("trackingElement");
  });
});