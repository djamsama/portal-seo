"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../../../../components/formattedHTMLMessage"));
var _fieldValidators = require("../../../../../../../../../components/fieldWithError/validators/fieldValidators");
var _contextComponent = require("../../../../../../../../../components/contextComponent");
var _mySpaceModalSignIn = _interopRequireDefault(require("../../../../../../../../../components/mySpaceLink/components/mySpaceModalSignIn"));
var _mySpaceModalLogin = _interopRequireDefault(require("../../../../../../../../../components/mySpaceLink/components/mySpaceModalLogin"));
var _mySpaceModalForget = _interopRequireDefault(require("../../../../../../../../../components/mySpaceLink/components/mySpaceModalForget"));
var _requestSentConfirmationNotification = require("./styles/requestSentConfirmationNotification");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var RequestSentConfirmationNotification = /*#__PURE__*/function (_ContextComponent) {
  function RequestSentConfirmationNotification(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, RequestSentConfirmationNotification);
    _this = _callSuper(this, RequestSentConfirmationNotification, [props, state]);
    _this.state = {
      email: "",
      signUpModalOpen: false,
      loginModalOpen: false,
      forgetModalOpen: false,
      visitorAuthenticated: false
    };
    _this.baseUrl = _this.context.config.portal.baseUrl;
    _this.locale = _this.context.config.portal.locale;
    _this.openSignInModal = _this.openSignInModal.bind(_this);
    _this.closeSignInModal = _this.closeSignInModal.bind(_this);
    _this.openLoginModal = _this.openLoginModal.bind(_this);
    _this.closeLoginModal = _this.closeLoginModal.bind(_this);
    _this.openForgetModal = _this.openForgetModal.bind(_this);
    _this.closeForgetModal = _this.closeForgetModal.bind(_this);
    _this.onChangeEmail = _this.onChangeEmail.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(RequestSentConfirmationNotification, _ContextComponent);
  return (0, _createClass2["default"])(RequestSentConfirmationNotification, [{
    key: "onClick",
    value: function onClick(event) {
      event.stopPropagation();
      this.openLoginModal();
    }

    /**
     * Construction de l'url vers mes demanndes
     */
  }, {
    key: "getMyspaceRequestUrl",
    value: function getMyspaceRequestUrl() {
      var globalLinksHome = this.context.initData.globalLinksHome;
      var baseUrl = globalLinksHome.substr(-1) !== "/" ? "".concat(globalLinksHome, "/") : globalLinksHome;
      return "".concat(baseUrl, "myspace/secure/request");
    }

    /**
     * Gestion de l'adresse email.
     * @param {*} event L'évenement déclenché par l'utilisateur
     */
  }, {
    key: "onChangeEmail",
    value: function onChangeEmail(event) {
      var email = event.currentTarget.value.trim();
      var isValidEmail = (0, _fieldValidators.email)(email) === undefined;
      if (isValidEmail) {
        this.setState({
          email: email
        });
      }
    }

    /**
     * Ouverture de la popin d'inscription.
     */
  }, {
    key: "openSignInModal",
    value: function openSignInModal() {
      this.setState({
        signUpModalOpen: true,
        loginModalOpen: false,
        forgetModalOpen: false
      });
    }

    /**
     * Fermeture de la popin d'inscription.
     */
  }, {
    key: "closeSignInModal",
    value: function closeSignInModal() {
      this.setState({
        signUpModalOpen: false
      });
    }

    /**
     * Ouverture de la popin de connexion.
     */
  }, {
    key: "openLoginModal",
    value: function openLoginModal() {
      this.setState({
        loginModalOpen: true,
        signUpModalOpen: false,
        forgetModalOpen: false
      });
    }

    /**
     * Fermeture de la popin de connexion.
     */
  }, {
    key: "closeLoginModal",
    value: function closeLoginModal() {
      this.setState({
        loginModalOpen: false
      });
    }

    /**
     * Ouverture de la popin d'oubli de MDP.
     */
  }, {
    key: "openForgetModal",
    value: function openForgetModal() {
      this.setState({
        forgetModalOpen: true,
        loginModalOpen: false,
        signUpModalOpen: false
      });
    }

    /**
     * Fermeture de la popin d'oubli de MDP.
     */
  }, {
    key: "closeForgetModal",
    value: function closeForgetModal() {
      this.setState({
        forgetModalOpen: false
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var visitorInfos = this.props.visitorInfos;
      if (visitorInfos && !visitorInfos.isAuthenticated) {
        var myspaceRequestLink = document.querySelector("#myspaceRequestLink");
        if (myspaceRequestLink) {
          myspaceRequestLink.addEventListener("click", this.onClick);
          myspaceRequestLink.setAttribute("href", "javascript:void(0);");
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var visitorInfos = this.props.visitorInfos;
      if (visitorInfos && !visitorInfos.isAuthenticated) {
        var myspaceRequestLink = document.querySelector("#myspaceRequestLink");
        if (myspaceRequestLink) {
          myspaceRequestLink.removeEventListener("click", this.onClick);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        signUpModalOpen = _this$state.signUpModalOpen,
        loginModalOpen = _this$state.loginModalOpen,
        forgetModalOpen = _this$state.forgetModalOpen,
        email = _this$state.email,
        visitorAuthenticated = _this$state.visitorAuthenticated;
      var drdRequest = this.props.drdRequest;
      var confirmationNotification = drdRequest ? "foj_request_drd_confirmation_notification" : "foj_request_confirmation_notification";
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_requestSentConfirmationNotification.Txt, {
        drdRequest: drdRequest
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: confirmationNotification
      })), signUpModalOpen && /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn["default"], {
        open: signUpModalOpen,
        handleClose: this.closeSignInModal,
        redirectUrl: this.getMyspaceRequestUrl()
      }), loginModalOpen && /*#__PURE__*/_react["default"].createElement(_mySpaceModalLogin["default"], {
        signUpActive: true,
        onClose: this.closeLoginModal,
        onForget: this.openForgetModal,
        onSignUp: this.openSignInModal,
        open: loginModalOpen,
        redirectUrl: this.getMyspaceRequestUrl(),
        onChangeEmail: this.onChangeEmail,
        email: email
      }), forgetModalOpen && /*#__PURE__*/_react["default"].createElement(_mySpaceModalForget["default"], {
        onClose: this.closeForgetModal,
        onReturn: this.openLoginModal,
        onChangeEmail: this.onChangeEmail,
        open: forgetModalOpen,
        email: email
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = RequestSentConfirmationNotification;