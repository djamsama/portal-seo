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
var _reactRedux = require("react-redux");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../components/formattedHTMLMessage"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function mapStateToProps(_ref) {
  var RequestForm = _ref.RequestForm;
  return {
    stepTitle: RequestForm.stepTitle,
    stepId: RequestForm.stepId
  };
}
var requestFormTitle = /*#__PURE__*/function (_Component) {
  function requestFormTitle() {
    (0, _classCallCheck2["default"])(this, requestFormTitle);
    return _callSuper(this, requestFormTitle, arguments);
  }
  (0, _inherits2["default"])(requestFormTitle, _Component);
  return (0, _createClass2["default"])(requestFormTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        stepTitle = _this$props.stepTitle,
        stepId = _this$props.stepId;
      var title;
      if (stepId === "ajax.request.visitor.registerPartial") {
        title = /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_request_form_partial_continue_title"
        }, function (txt) {
          return txt;
        });
      } else if (stepId === "ajax.request.visitor.register") {
        title = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_request_form_continue_title"
        }, function (txt) {
          return txt;
        }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
          className: "subTitle"
        }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_request_form_continue_subTitle"
        }, function (txt) {
          return txt;
        })));
      } else {
        title = stepTitle;
      }
      return /*#__PURE__*/_react["default"].createElement("h1", {
        className: "title"
      }, title);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps)(requestFormTitle);