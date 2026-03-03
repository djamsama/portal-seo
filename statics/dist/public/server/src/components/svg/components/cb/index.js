"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _svg = require("../../styles/svg");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CBSVG = /*#__PURE__*/function (_Component) {
  function CBSVG() {
    (0, _classCallCheck2["default"])(this, CBSVG);
    return _callSuper(this, CBSVG, arguments);
  }
  (0, _inherits2["default"])(CBSVG, _Component);
  return (0, _createClass2["default"])(CBSVG, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_svg.SvgContainer, {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        width: "62",
        height: "42",
        viewBox: "0 0 62 42"
      }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
        id: "cd_bkg",
        x: "0",
        y: "0",
        width: "62",
        height: "42",
        filterUnits: "userSpaceOnUse"
      }, /*#__PURE__*/_react["default"].createElement("feOffset", {
        input: "SourceAlpha"
      }), /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
        stdDeviation: "2",
        result: "blur"
      }), /*#__PURE__*/_react["default"].createElement("feFlood", {
        floodOpacity: "0.2"
      }), /*#__PURE__*/_react["default"].createElement("feComposite", {
        operator: "in",
        in2: "blur"
      }), /*#__PURE__*/_react["default"].createElement("feComposite", {
        "in": "SourceGraphic"
      })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
        id: "linear-gradient",
        x1: "0.001",
        y1: "0.998",
        x2: "0.989",
        y2: "0.013",
        gradientUnits: "objectBoundingBox"
      }, /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "0",
        stopColor: "#009d59"
      }), /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "0.324",
        stopColor: "#0884a2"
      }), /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "0.635",
        stopColor: "#0a83a0"
      }), /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "1",
        stopColor: "#202d55"
      }))), /*#__PURE__*/_react["default"].createElement("g", {
        id: "cb",
        transform: "translate(6 6)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "matrix(1, 0, 0, 1, -6, -6)",
        filter: "url(#cd_bkg)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "cd_bkg-2",
        "data-name": "cd bkg",
        width: "50",
        height: "30",
        rx: "4",
        transform: "translate(6 6)",
        fill: "#fff"
      })), /*#__PURE__*/_react["default"].createElement("g", {
        id: "cb-2",
        "data-name": "cb",
        transform: "translate(4)"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle_15",
        "data-name": "Rectangle 15",
        width: "42.129",
        height: "30",
        fill: "#fff"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle_16",
        "data-name": "Rectangle 16",
        width: "39.097",
        height: "26.968",
        transform: "translate(1.536 1.536)",
        fill: "url(#linear-gradient)"
      }), /*#__PURE__*/_react["default"].createElement("g", {
        id: "NQGSL1.tif_1_",
        transform: "translate(5.528 7.761)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Groupe_30",
        "data-name": "Groupe 30"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_76",
        "data-name": "Trac\xE9 76",
        d: "M22.214,27.2v-.809h7.925c-.081-.485-.121-.889-.2-1.294a6.607,6.607,0,0,0-3.558-4.852,10.056,10.056,0,0,0-7.722-.526,6.566,6.566,0,0,0-4.286,3.72,8.278,8.278,0,0,0-.566,4.852,6.66,6.66,0,0,0,3.8,5.175A10.175,10.175,0,0,0,24.762,34,6.657,6.657,0,0,0,29.9,28.7a15.338,15.338,0,0,0,.243-1.536C27.43,27.2,24.842,27.2,22.214,27.2Z",
        transform: "translate(-13.672 -19.196)",
        fill: "#fff"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_77",
        "data-name": "Trac\xE9 77",
        d: "M70.208,41.621a3.226,3.226,0,0,0-3.275-2.547c-3.477-.04-6.914,0-10.391,0a.6.6,0,0,0-.243.04v6.307c0,.364.121.445.445.445,3.437-.04,6.914-.04,10.35-.081A3.32,3.32,0,0,0,70.208,41.621Z",
        transform: "translate(-39.065 -31.026)",
        fill: "#fff"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_78",
        "data-name": "Trac\xE9 78",
        d: "M70.208,23.061a3.264,3.264,0,0,0-3.4-2.588c-3.4-.04-6.833,0-10.229,0H56.3v6.671H66.57a6.611,6.611,0,0,0,.889-.081A3.243,3.243,0,0,0,70.208,23.061Z",
        transform: "translate(-39.065 -19.946)",
        fill: "#fff"
      })))))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = CBSVG;