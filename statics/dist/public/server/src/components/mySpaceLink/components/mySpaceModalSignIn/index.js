"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _semanticUiReact = require("semantic-ui-react");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../formattedHTMLMessage"));
var _logoMySpace = _interopRequireDefault(require("../../../../pages/mySpace/components/headerMyspace/components/logoMySpace"));
var _gears = _interopRequireDefault(require("../../../svg/components/gears"));
var _timeFliesBy = _interopRequireDefault(require("../../../svg/components/timeFliesBy"));
var _thumbUp = _interopRequireDefault(require("../../../svg/components/thumbUp"));
var _modalContent = require("../../../../pages/mySpace/components/modalMySpace/modalContent");
var _mySpaceModalSignIn = require("./styles/mySpaceModalSignIn");
var _mySpaceModalSignInForm = _interopRequireDefault(require("./containers/mySpaceModalSignInForm"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceModalSignIn = /*#__PURE__*/function (_Component) {
  function MySpaceModalSignIn(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceModalSignIn);
    _this = _callSuper(this, MySpaceModalSignIn, [props]);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  /**
   * Fermeture de la modale
   * @param {*} event
   */
  (0, _inherits2["default"])(MySpaceModalSignIn, _Component);
  return (0, _createClass2["default"])(MySpaceModalSignIn, [{
    key: "handleClose",
    value: function handleClose() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var handleClose = this.props.handleClose;
      if (event) {
        event.preventDefault();
      }
      if (handleClose) {
        handleClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        open = _this$props.open,
        intl = _this$props.intl,
        handleClose = _this$props.handleClose,
        redirectUrl = _this$props.redirectUrl,
        submitCallback = _this$props.submitCallback;
      return (
        /*#__PURE__*/
        // Composant animation semantic de la modal.
        _react["default"].createElement(_semanticUiReact.TransitionablePortal, {
          open: open,
          transition: {
            animation: "fade down",
            duration: 500
          }
        }, /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn.StyledModal, {
          open: open,
          onClose: handleClose,
          closeIcon: true,
          closeOnDimmerClick: false,
          size: "small"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn.ModalMySpaceDivContent, null, /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn.MySpaceHeaderModal, null, /*#__PURE__*/_react["default"].createElement(_logoMySpace["default"], {
          modal: true
        })), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTextContent, null, /*#__PURE__*/_react["default"].createElement(_modalContent.ModalContentContainer, {
          className: "modal-content-container"
        }, /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignInForm["default"], {
          handleClose: this.handleClose,
          redirectUrl: redirectUrl,
          submitCallback: submitCallback
        }), /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn.ModalMySpaceBenefits, null, /*#__PURE__*/_react["default"].createElement("ul", {
          className: "benefits"
        }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_gears["default"], {
          className: "image"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, intl.formatMessage({
          id: "foj_myspace_signup_convenientTitle"
        })), /*#__PURE__*/_react["default"].createElement("p", null, intl.formatMessage({
          id: "foj_myspace_signup_convenient"
        }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_timeFliesBy["default"], {
          className: "image"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, intl.formatMessage({
          id: "foj_myspace_signup_fastTitle"
        })), /*#__PURE__*/_react["default"].createElement("p", null, intl.formatMessage({
          id: "foj_myspace_signup_fast"
        }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_thumbUp["default"], {
          className: "image"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, intl.formatMessage({
          id: "foj_myspace_signup_simpleTitle"
        })), /*#__PURE__*/_react["default"].createElement("p", null, intl.formatMessage({
          id: "foj_myspace_signup_simple"
        })))))), /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn.ModalMySpaceTerms, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_myspace_signup_legals"
        })))))))
      );
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceModalSignIn);