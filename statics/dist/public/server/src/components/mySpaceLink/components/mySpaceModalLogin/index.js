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
var _semanticUiReact = require("semantic-ui-react");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../formattedHTMLMessage"));
var _button = _interopRequireDefault(require("../../../styles/button"));
var _logoMySpace = _interopRequireDefault(require("../../../../pages/mySpace/components/headerMyspace/components/logoMySpace"));
var _modalContent = require("../../../../pages/mySpace/components/modalMySpace/modalContent");
var _mySpaceModalLogin = require("./styles/mySpaceModalLogin");
var _mySpaceModalLoginFormContainer = _interopRequireDefault(require("./containers/mySpaceModalLoginFormContainer"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceModalLogin = /*#__PURE__*/function (_Component) {
  function MySpaceModalLogin() {
    (0, _classCallCheck2["default"])(this, MySpaceModalLogin);
    return _callSuper(this, MySpaceModalLogin, arguments);
  }
  (0, _inherits2["default"])(MySpaceModalLogin, _Component);
  return (0, _createClass2["default"])(MySpaceModalLogin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        onClose = _this$props.onClose,
        onForget = _this$props.onForget,
        onSignUp = _this$props.onSignUp,
        open = _this$props.open,
        redirectUrl = _this$props.redirectUrl,
        email = _this$props.email,
        onChangeEmail = _this$props.onChangeEmail,
        signUpActive = _this$props.signUpActive,
        submitCallback = _this$props.submitCallback;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TransitionablePortal, {
        open: open,
        transition: {
          animation: "fade down",
          duration: 500
        }
      }, /*#__PURE__*/_react["default"].createElement(_mySpaceModalLogin.StyledModal, {
        open: open,
        onClose: onClose,
        closeIcon: true,
        size: "mini"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement(_mySpaceModalLogin.ModalMySpaceDivContent, null, /*#__PURE__*/_react["default"].createElement(_logoMySpace["default"], {
        modal: true
      }), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTextContent, null, /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          textAlign: "left"
        }
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_connection_info"
      })), /*#__PURE__*/_react["default"].createElement(_mySpaceModalLoginFormContainer["default"], {
        email: email,
        onChangeEmail: onChangeEmail,
        onForget: onForget,
        redirectUrl: redirectUrl,
        submitCallback: submitCallback,
        handleClose: onClose
      }), signUpActive && /*#__PURE__*/_react["default"].createElement("p", null, intl.formatMessage({
        id: "foj_myspace_firstVisit"
      }), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        as: "a",
        onClick: onSignUp,
        style: {
          paddingLeft: "5px"
        },
        "data-cy": "registerLink"
      }, intl.formatMessage({
        id: "foj_myspace_signUp"
      }))))))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceModalLogin);