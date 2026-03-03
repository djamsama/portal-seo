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
var _rate = _interopRequireDefault(require("../../../../../../components/rate"));
var _personnalRating = require("./styles/personnalRating");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Composant affichant la note donnée par le visiteur. */
var PersonnalRating = /*#__PURE__*/function (_PureComponent) {
  function PersonnalRating(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, PersonnalRating);
    _this = _callSuper(this, PersonnalRating, [props]);
    _this.ratingChanged = _this.ratingChanged.bind(_this);
    return _this;
  }

  /** Edition de la note. */
  (0, _inherits2["default"])(PersonnalRating, _PureComponent);
  return (0, _createClass2["default"])(PersonnalRating, [{
    key: "ratingChanged",
    value: function ratingChanged(newRating) {
      var token = this.props.token;
      var url = "/myspace/secure/survey-request?tokenId=".concat(token, "&rating=").concat(newRating);
      document.location.href = url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var rating = this.props.rating;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_personnalRating.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: rating > 0 ? "foj_myspace_satisfaction_visitor_note" : "foj_myspace_satisfaction_visitor_no_note"
      })), /*#__PURE__*/_react["default"].createElement(_personnalRating.Content, {
        scaleRatio: 1
      }, /*#__PURE__*/_react["default"].createElement(_rate["default"], {
        count: 5,
        edit: true,
        value: rating,
        size: 24,
        color2: "#ffd700",
        className: "rating",
        fractions: 1,
        onChange: function onChange(rate) {
          return _this2.ratingChanged(rate);
        }
      }), rating > 0 && /*#__PURE__*/_react["default"].createElement(_personnalRating.Legend, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_satisfaction_visitor_notation_change_txt"
      }))));
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(PersonnalRating);
PersonnalRating.defaultProps = {
  rating: 0
};