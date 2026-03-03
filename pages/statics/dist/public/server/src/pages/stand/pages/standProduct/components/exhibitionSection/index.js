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
var _reactIntl = require("react-intl");
var _exhibitionBlock = _interopRequireDefault(require("./components/exhibitionBlock"));
var _exhibitionSection = require("./styles/exhibitionSection");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ExhibitionSection = /*#__PURE__*/function (_Component) {
  function ExhibitionSection() {
    (0, _classCallCheck2["default"])(this, ExhibitionSection);
    return _callSuper(this, ExhibitionSection, arguments);
  }
  (0, _inherits2["default"])(ExhibitionSection, _Component);
  return (0, _createClass2["default"])(ExhibitionSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        onlineExhibitions = _this$props.onlineExhibitions,
        intl = _this$props.intl;
      return /*#__PURE__*/_react["default"].createElement(_exhibitionSection.ExhibitionsWrapper, {
        "data-cy": "exhibitionscontent"
      }, /*#__PURE__*/_react["default"].createElement(_exhibitionSection.HeadlineWrapper, null, intl.formatMessage({
        id: "foj_product_detail_salon_intro"
      })), onlineExhibitions === null || onlineExhibitions === void 0 ? void 0 : onlineExhibitions.map(function (currentExhibition, index) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: currentExhibition.id
        }, index > 0 && /*#__PURE__*/_react["default"].createElement(_exhibitionSection.Divider, null), /*#__PURE__*/_react["default"].createElement(_exhibitionBlock["default"], {
          exhibition: currentExhibition
        }));
      }));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ExhibitionSection);