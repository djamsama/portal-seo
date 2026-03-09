"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTrackingEpic = exports.getTrackingEpic = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _rxjs = require("rxjs");
var _reduxObservable = require("redux-observable");
var _operators = require("rxjs/operators");
var _trackingAction = require("../actions/trackingAction");
var _trackingService = require("../services/impl/trackingService");
var _mongoTracker = require("../helpers/mongoTracker");
var _mysqlTracker = require("../helpers/mysqlTracker");
var _viewedPageIdHelper = require("../helpers/viewedPageIdHelper");
var _trackingElement = require("../models/trackingElement");
var _constants = require("../commons/constants");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); } /* eslint-disable no-plusplus */ /* eslint-disable consistent-return */ /* eslint-disable no-loop-func */ /* eslint-disable no-await-in-loop */
var vpi = 0;
var getViewedPageId = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(doTrack) {
    var j, flag, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          j = 0;
          flag = 10;
        case 1:
          _context.n = 2;
          return new Promise(function (resolve) {
            return setTimeout(function () {
              return resolve(j++);
            }, _constants.DELAY_TO_RETRY);
          });
        case 2:
          _t = _context.v;
          _t2 = flag;
          if (!(_t < _t2)) {
            _context.n = 4;
            break;
          }
          vpi = _viewedPageIdHelper.ViewedPageIdHelper.instance.getViewedPageId();
          if (!(vpi > 0)) {
            _context.n = 3;
            break;
          }
          flag = 100;
          return _context.a(2, doTrack(vpi));
        case 3:
          _context.n = 1;
          break;
        case 4:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function getViewedPageId(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getTrackingEpic = exports.getTrackingEpic = function getTrackingEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_trackingAction.TRACK_ELEMENT), (0, _operators.mergeMap)(function (action) {
    // service de tracking
    var _action$payload = action.payload,
      trackerType = _action$payload.trackerType,
      trackingElement = _action$payload.trackingElement,
      viewedPageId = _action$payload.viewedPageId;
    var trackingService = new _trackingService.TrackingService();
    trackingService.addTracker(_mongoTracker.mongoTrackerInstance);
    trackingService.addTracker(_mysqlTracker.mysqlTrackerInstance);
    var doTrack = function doTrack(id) {
      return (
        // $FlowFixMe
        (0, _rxjs.from)(trackingService.sendTracking(trackerType, trackingElement, id)).pipe((0, _operators.mapTo)((0, _trackingAction.trackActionDone)(trackingElement)), (0, _operators.retryWhen)(function (errors) {
          return (
            // $FlowFixMe
            errors.pipe((0, _operators.delayWhen)(function () {
              return (0, _rxjs.timer)(1000);
            }))
          );
        }))
      );
    };
    if (typeof viewedPageId !== "number" || viewedPageId < 1) {
      getViewedPageId(doTrack);
      return _rxjs.EMPTY;
    }
    return doTrack(viewedPageId);
  }), (0, _operators.retryWhen)(function (errors) {
    return (
      // $FlowFixMe
      errors.pipe((0, _operators.delayWhen)(function () {
        return (0, _rxjs.timer)(1000);
      }))
    );
  }));
};
var initTrackingEpic = exports.initTrackingEpic = function initTrackingEpic(action$) {
  return action$.pipe((0, _reduxObservable.ofType)(_trackingAction.TRACK_ELEMENT_INIT), (0, _operators.mergeMap)(function (action) {
    // service de tracking
    var _action$payload2 = action.payload,
      bodyTrackingParam = _action$payload2.bodyTrackingParam,
      language = _action$payload2.language;
    var trackingService = new _trackingService.TrackingService();
    trackingService.addTracker(_mysqlTracker.mysqlTrackerInstance);
    return (0, _rxjs.from)(trackingService.getTracking(bodyTrackingParam, language)).pipe((0, _operators.mergeMap)(function (response) {
      if (!response) {
        return (0, _rxjs.of)((0, _operators.catchError)(function (error) {
          return (0, _rxjs.of)((0, _trackingAction.initTrackActionError)(error));
        }));
      }
      var trackingId = response.data.content;
      return (0, _rxjs.of)((0, _trackingAction.initTrackActionDone)(trackingId));
    }), (0, _operators.catchError)(function (error) {
      return (0, _rxjs.of)((0, _trackingAction.initTrackActionError)(error));
    }));
  }));
};