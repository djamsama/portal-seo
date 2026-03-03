"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _loading = _interopRequireDefault(require("../../../../../../components/loading"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _mySpace = require("../../../../styles/mySpace");
var _boxItemHeader = _interopRequireDefault(require("../../../../components/boxItemHeader"));
var _itemRequest = _interopRequireDefault(require("./components/itemRequest"));
var _requestFiltersBar = _interopRequireDefault(require("./components/requestFiltersBar"));
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Requests = /*#__PURE__*/function (_ContextComponent) {
  function Requests(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Requests);
    _this = _callSuper(this, Requests, [props, context]);
    var requests = props.requestsValues || context.initData.requests;
    _this.state = {
      requests: requests
    };
    _this.filter = _this.filter.bind(_this);
    _this.getDelay = _this.getDelay.bind(_this);
    props.loadRequests(requests);
    return _this;
  }

  // Fonction callback retour de selection du filtre.
  (0, _inherits2["default"])(Requests, _ContextComponent);
  return (0, _createClass2["default"])(Requests, [{
    key: "filter",
    value: function () {
      var _filter = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(selectedFiltersValue) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.props.onRequestsFilterSubmit(selectedFiltersValue, this.context);
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function filter(_x) {
        return _filter.apply(this, arguments);
      }
      return filter;
    }()
  }, {
    key: "getDelay",
    value: function getDelay(e) {
      var i = e.index + this.context.initData.requests.length % 4;
      return i % 4 * 100 + Math.floor(i / 4) * 100 + 200;
    }
  }, {
    key: "render",
    value: function render() {
      var requests = this.props.requestsValues || this.context.initData.requests;
      if (!requests) {
        throw new Error("L'objet requests n'est pas défini. Verifier le contrôleur java.");
      }
      var itemNumber = this.props.isFetching == true ? -1 : Object.keys(requests).length;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemRequest, null, /*#__PURE__*/_react["default"].createElement(_boxItemHeader["default"], {
        puceType: "list",
        titleId: "foj_myspace_request_title"
        // $FlowFixMe
        ,
        itemNumber: itemNumber
      }), /*#__PURE__*/_react["default"].createElement(_requestFiltersBar["default"], {
        requests: requests,
        callback: this.filter
      }), this.props.isFetching == true && /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemContent, null, /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        active: true,
        spinnerSize: 50
      })), (this.props.isFetching == false || this.props.isFetching == undefined) && /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemContent, null, requests !== "" && Array.isArray(requests) && requests.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_itemRequest["default"], {
          key: item.id,
          item: item
        });
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Requests;
Requests.propTypes = {
  loadRequests: _propTypes["default"].func
};