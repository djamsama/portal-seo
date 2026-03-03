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
var MasterCardSVG = /*#__PURE__*/function (_Component) {
  function MasterCardSVG() {
    (0, _classCallCheck2["default"])(this, MasterCardSVG);
    return _callSuper(this, MasterCardSVG, arguments);
  }
  (0, _inherits2["default"])(MasterCardSVG, _Component);
  return (0, _createClass2["default"])(MasterCardSVG, [{
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
      }))), /*#__PURE__*/_react["default"].createElement("g", {
        id: "master_card",
        "data-name": "master card",
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
        id: "mastercard",
        transform: "translate(8 2)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_79",
        "data-name": "Trac\xE9 79",
        d: "M17.474,172.527v-1.763a1.031,1.031,0,0,0-1.109-1.109,1.187,1.187,0,0,0-1,.494,1.015,1.015,0,0,0-.935-.494.936.936,0,0,0-.815.414v-.347H13v2.8h.614v-1.549c0-.494.267-.735.668-.735s.614.267.614.735v1.549h.614v-1.549a.651.651,0,0,1,.668-.735c.414,0,.614.267.614.735v1.549Zm9.122-2.818h-1v-.855H24.98v.855h-.561v.561h.561v1.3c0,.641.267,1.028.962,1.028a1.737,1.737,0,0,0,.761-.2l-.174-.534a.955.955,0,0,1-.534.147c-.294,0-.414-.174-.414-.467v-1.255h1v-.574Zm5.222-.053a.826.826,0,0,0-.735.414v-.347H30.47v2.8h.614v-1.589c0-.467.2-.735.588-.735a1.931,1.931,0,0,1,.387.053l.174-.588c-.12-.013-.294-.013-.414-.013Zm-7.893.294a2.069,2.069,0,0,0-1.149-.294c-.708,0-1.175.347-1.175.908,0,.467.347.735.962.815l.294.027c.321.053.494.147.494.294,0,.2-.24.347-.641.347a1.617,1.617,0,0,1-.935-.294l-.294.467a2.022,2.022,0,0,0,1.2.347c.815,0,1.3-.387,1.3-.908,0-.494-.387-.761-.962-.855l-.294-.027c-.267-.027-.467-.094-.467-.267,0-.2.2-.321.534-.321a2.046,2.046,0,0,1,.882.24l.254-.481Zm16.361-.294a.826.826,0,0,0-.735.414v-.347h-.614v2.8h.614v-1.589c0-.467.2-.735.588-.735a1.931,1.931,0,0,1,.387.053l.174-.588c-.12-.013-.294-.013-.414-.013Zm-7.853,1.469a1.409,1.409,0,0,0,1.5,1.469,1.5,1.5,0,0,0,1-.321l-.294-.494a1.213,1.213,0,0,1-.735.267.835.835,0,0,1-.855-.908.857.857,0,0,1,.855-.908,1.213,1.213,0,0,1,.735.267l.294-.494a1.437,1.437,0,0,0-1-.321,1.375,1.375,0,0,0-1.5,1.442Zm5.69,0v-1.4h-.614v.347a1.043,1.043,0,0,0-.882-.414,1.471,1.471,0,0,0,0,2.938.978.978,0,0,0,.882-.414v.347h.614Zm-2.257,0a.856.856,0,1,1,1.71,0,.856.856,0,1,1-1.71,0Zm-7.359-1.469a1.47,1.47,0,0,0,.04,2.938,1.809,1.809,0,0,0,1.149-.387l-.294-.441a1.446,1.446,0,0,1-.815.294.793.793,0,0,1-.855-.668h2.084v-.24a1.319,1.319,0,0,0-1.309-1.5Zm0,.521a.693.693,0,0,1,.708.668H27.745a.737.737,0,0,1,.761-.668Zm15.279.948V168.6h-.614v1.469a1.043,1.043,0,0,0-.882-.414,1.471,1.471,0,0,0,0,2.938.978.978,0,0,0,.882-.414v.347h.614Zm-2.271,0a.856.856,0,1,1,1.71,0,.856.856,0,1,1-1.71,0Zm-20.582,0v-1.4h-.614v.347a1.043,1.043,0,0,0-.882-.414,1.471,1.471,0,0,0,0,2.938.978.978,0,0,0,.882-.414v.347h.614Zm-2.284,0a.856.856,0,1,1,1.71,0,.856.856,0,1,1-1.71,0Z",
        transform: "translate(-11.264 -146.082)"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        id: "Rectangle_17",
        "data-name": "Rectangle 17",
        width: "9.242",
        height: "16.602",
        transform: "translate(12.461 2.257)",
        fill: "#ff5f00"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_80",
        "data-name": "Trac\xE9 80",
        d: "M13.049,10.551a10.6,10.6,0,0,1,4.02-8.294,10.557,10.557,0,1,0-.013,16.588A10.508,10.508,0,0,1,13.049,10.551Z",
        transform: "translate(0 0)",
        fill: "#eb001b"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_81",
        "data-name": "Trac\xE9 81",
        d: "M145.056,10.551A10.538,10.538,0,0,1,128,18.845a10.566,10.566,0,0,0,0-16.588,10.538,10.538,0,0,1,17.056,8.294Z",
        transform: "translate(-110.904 0)",
        fill: "#f79e1b"
      })))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = MasterCardSVG;