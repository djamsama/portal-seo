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
var VisaSVG = /*#__PURE__*/function (_Component) {
  function VisaSVG() {
    (0, _classCallCheck2["default"])(this, VisaSVG);
    return _callSuper(this, VisaSVG, arguments);
  }
  (0, _inherits2["default"])(VisaSVG, _Component);
  return (0, _createClass2["default"])(VisaSVG, [{
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
        id: "visa",
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
        id: "visa-2",
        "data-name": "visa",
        transform: "translate(3 8)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Groupe_32",
        "data-name": "Groupe 32",
        transform: "translate(4.045)"
      }, /*#__PURE__*/_react["default"].createElement("g", {
        id: "Groupe_31",
        "data-name": "Groupe 31"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_82",
        "data-name": "Trac\xE9 82",
        d: "M40.9,0,38.725,13.547H42.19L44.376,0Zm10.5,5.517c-1.219-.595-1.963-1.011-1.963-1.621.015-.565.625-1.13,2.008-1.13a5.941,5.941,0,0,1,2.588.506l.312.134.476-2.84A8.736,8.736,0,0,0,51.692,0c-3.435,0-5.859,1.784-5.874,4.342-.03,1.9,1.725,2.944,3.049,3.584,1.353.639,1.8,1.056,1.8,1.636-.015.877-1.086,1.279-2.1,1.279a7.1,7.1,0,0,1-3.272-.7l-.461-.208-.491,2.944a10.979,10.979,0,0,0,3.881.7c3.658,0,6.023-1.755,6.052-4.491C54.324,7.6,53.4,6.454,51.395,5.517ZM63.737.045H61.046A1.715,1.715,0,0,0,59.232,1.13L54.057,13.547h3.658l1.011-2.692h4.089l.52,2.706h3.227Zm-4.015,8.1c.074,0,1.4-4.387,1.4-4.387l1.056,4.387ZM35.81,0,32.39,9.2l-.372-1.814a10.056,10.056,0,0,0-4.818-5.5l3.123,11.644h3.688L39.483,0Z",
        transform: "translate(-27.2 0)",
        fill: "#1b1e76"
      }))), /*#__PURE__*/_react["default"].createElement("path", {
        id: "Trac\xE9_83",
        "data-name": "Trac\xE9 83",
        d: "M7.718,1.755A2.276,2.276,0,0,0,5.458,0H.059L0,.253C4.208,1.294,7.748,4.491,8.893,7.495Z",
        transform: "translate(0 0)",
        fill: "#1b1e76"
      })))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = VisaSVG;