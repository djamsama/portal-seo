"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../components/formattedHTMLMessage"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _portalButton = _interopRequireDefault(require("../../../../components/styles/portalButton"));
var _constants = require("../../../../commons/constants");
var _cardInput = _interopRequireDefault(require("../../../../components/cardInput"));
var _contextComponent = require("../../../../components/contextComponent");
var _iconExponent = _interopRequireDefault(require("../../../../components/iconExponent"));
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _modalToModifyRefusedQuote = require("./styles/modalToModifyRefusedQuote");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var STATUS = {
  TO_MODIFY: "TO_MODIFY",
  REFUSED: "REFUSED"
};
var ModalToModifyRefusedQuote = /*#__PURE__*/function (_ContextComponent) {
  function ModalToModifyRefusedQuote(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ModalToModifyRefusedQuote);
    _this = _callSuper(this, ModalToModifyRefusedQuote, [props]);
    _this.change = _this.change.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.closeRefusePopin = _this.closeRefusePopin.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ModalToModifyRefusedQuote, _ContextComponent);
  return (0, _createClass2["default"])(ModalToModifyRefusedQuote, [{
    key: "change",
    value: function change() {
      // Déselectionner les raisons quand le visiteur change le type (demande de modification ou refus).
      this.props.change("reasons", []);
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(values) {
        var _this$props, leadContext, onSubmit, quoteId, googleAnalytics;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this$props = this.props, leadContext = _this$props.leadContext, onSubmit = _this$props.onSubmit, quoteId = _this$props.quoteId, googleAnalytics = _this$props.googleAnalytics; // Forcer une chaine de caractères vide pour le commentaire quand celui-ci n'est pas renseigné.
              return _context.a(2, onSubmit(this.context, leadContext, _objectSpread({
                quoteId: quoteId,
                message: ""
              }, values)).then(function () {
                googleAnalytics.event({
                  category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
                  action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
                  label: _constants.GOOGLE_ANALYTICS_EVENTS.SEND_CHANGE_QUOTE_FORM
                });
                window.location.assign(window.location.pathname);
              }, function (err) {
                googleAnalytics.event({
                  category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
                  action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
                  label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_ERROR_CHANGE_QUOTE_FORM
                });
                throw err;
              }));
          }
        }, _callee, this);
      }));
      function submit(_x) {
        return _submit.apply(this, arguments);
      }
      return submit;
    }() /** Fermeture de la modale. */
  }, {
    key: "closeRefusePopin",
    value: function closeRefusePopin() {
      var _this$props2 = this.props,
        onClose = _this$props2.onClose,
        googleAnalytics = _this$props2.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLOSE_CHANGE_QUOTE_FORM
      });
      this.props.change("status", undefined);
      return onClose();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props3 = this.props,
        open = _this$props3.open,
        googleAnalytics = _this$props3.googleAnalytics;
      if (!open) {
        var nextOpen = nextProps.open;
        if (nextOpen) {
          googleAnalytics.event({
            category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
            action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
            label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_CHANGE_QUOTE_FORM
          });
        }
      }
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        error = _this$props4.error,
        handleSubmit = _this$props4.handleSubmit,
        open = _this$props4.open,
        intl = _this$props4.intl,
        status = _this$props4.status,
        _this$props4$reasons = _this$props4.reasons,
        reasons = _this$props4$reasons === void 0 ? [] : _this$props4$reasons;
      return /*#__PURE__*/_react["default"].createElement(_modalToModifyRefusedQuote.StyledPopin, {
        open: open,
        onClose: this.closeRefusePopin,
        closeOnDimmerClick: false
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_lead_viewer_refusedPopin_title",
        tagName: "h1"
      }), /*#__PURE__*/_react["default"].createElement(_modalToModifyRefusedQuote.StyledModalToModifyRefusedQuoteForm, {
        onSubmit: handleSubmit(this.submit)
      }, /*#__PURE__*/_react["default"].createElement(_modalToModifyRefusedQuote.StyledCardField, {
        type: "radio",
        name: "status",
        value: undefined,
        onChange: this.change,
        className: "quoteRoot"
      }, /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
        value: STATUS.TO_MODIFY
      }, /*#__PURE__*/_react["default"].createElement(_iconExponent["default"], {
        name: "file alternate outline",
        exponentName: "plus circle",
        exponentColor: "green",
        size: "big",
        className: "quoteIcon"
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_lead_viewer_refusedPopin_to_modify",
        tagName: "div"
      })), /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
        value: STATUS.REFUSED
      }, /*#__PURE__*/_react["default"].createElement(_iconExponent["default"], {
        name: "file alternate outline",
        exponentName: "times circle",
        exponentColor: "red",
        size: "big",
        className: "quoteIcon"
      }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_lead_viewer_refusedPopin_refused",
        tagName: "div"
      }))), status === STATUS.TO_MODIFY && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_modalToModifyRefusedQuote.StyledCardField, {
        type: "checkbox",
        name: "reasons",
        className: "quoteReasons"
      }, this.context.initData.toModifyRefusedReasons.TO_MODIFY.map(function (reason) {
        return /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
          value: reason,
          key: reason
        }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_lead_viewer_refusedPopin_to_modify_reason_".concat(reason.toLowerCase())
        }));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "quoteComment"
      }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "message",
        component: "textarea",
        rows: "4",
        placeholder: intl.formatMessage({
          id: "foj_lead_viewer_refusedPopin_feedback"
        })
      }))), status === STATUS.REFUSED && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_modalToModifyRefusedQuote.StyledCardField, {
        type: "checkbox",
        name: "reasons",
        className: "quoteReasons"
      }, this.context.initData.toModifyRefusedReasons.REFUSED.map(function (reason) {
        return /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
          value: reason,
          key: reason
        }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_lead_viewer_refusedPopin_refused_reason_".concat(reason.toLowerCase())
        }));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "quoteComment"
      }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "message",
        component: "textarea",
        rows: "4",
        placeholder: intl.formatMessage({
          id: "foj_lead_viewer_refusedPopin_feedback"
        })
      }))), error && /*#__PURE__*/_react["default"].createElement("strong", {
        style: {
          color: "red"
        }
      }, error), /*#__PURE__*/_react["default"].createElement("div", {
        className: "quoteActions"
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        type: "submit",
        isDisabled: reasons.length === 0
      }, intl.formatMessage({
        id: "foj_lead_viewer_refusedPopin_send"
      })))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(ModalToModifyRefusedQuote));