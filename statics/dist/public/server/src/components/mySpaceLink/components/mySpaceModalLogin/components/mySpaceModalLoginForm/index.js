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
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _contextComponent = require("../../../../../contextComponent");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../fieldWithLabel"));
var _fieldValidators = require("../../../../../fieldWithError/validators/fieldValidators");
var _button = _interopRequireDefault(require("../../../../../styles/button"));
var _loginForm = require("./styles/loginForm");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceModalLoginForm = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceModalLoginForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceModalLoginForm);
    _this = _callSuper(this, MySpaceModalLoginForm, [props]);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MySpaceModalLoginForm, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceModalLoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setData("email", this.props.email);
    }
  }, {
    key: "onSubmit",
    value: function () {
      var _onSubmit = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(values) {
        var _this$props, handleClose, submitCallback;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this$props = this.props, handleClose = _this$props.handleClose, submitCallback = _this$props.submitCallback;
              return _context.a(2, this.props.onSubmit(values, this.context, this.props.redirectUrl, this.props.intl).then(function () {
                handleClose();
                // Exécution du callback s'il est définit
                if (submitCallback) {
                  submitCallback();
                }
              }));
          }
        }, _callee, this);
      }));
      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }
      return onSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        error = _this$props2.error,
        handleSubmit = _this$props2.handleSubmit,
        intl = _this$props2.intl,
        onForget = _this$props2.onForget,
        submitting = _this$props2.submitting,
        onChangeEmail = _this$props2.onChangeEmail,
        emailUser = _this$props2.email;
      return /*#__PURE__*/_react["default"].createElement(_loginForm.LoginForm, {
        onSubmit: handleSubmit(this.onSubmit),
        "data-cy": "loginForm"
      }, error && /*#__PURE__*/_react["default"].createElement("strong", {
        style: {
          color: "red"
        }
      }, error), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        type: "email",
        name: "email",
        label: intl.formatMessage({
          id: "foj_myspace_connection_email"
        }),
        mandatory: true,
        validate: [_fieldValidators.required, _fieldValidators.email, _fieldValidators.maxLength255],
        onChange: onChangeEmail,
        value: emailUser
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        type: "password",
        name: "password",
        label: intl.formatMessage({
          id: "foj_myspace_connection_password"
        }),
        mandatory: true,
        validate: [_fieldValidators.required, _fieldValidators.maxLength255]
      }), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        as: "a",
        onClick: onForget
      }, intl.formatMessage({
        id: "foj_myspace_connection_forgottenPassword"
      }))), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        contained: true,
        type: "submit",
        isLoading: submitting,
        isUnclickable: submitting
      }, intl.formatMessage({
        id: "foj_myspace_connection_connectButton"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceModalLoginForm);