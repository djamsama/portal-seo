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
var _component = _interopRequireDefault(require("@loadable/component"));
var _reactCookie = require("react-cookie");
var _styledComponents = require("styled-components");
var _contextComponent = require("../contextComponent");
var _popup = _interopRequireDefault(require("../popup"));
var _labels = require("../../commons/labels");
var _constants = require("../../commons/constants");
var _fieldValidators = require("../fieldWithError/validators/fieldValidators");
var _mySpaceLink = require("./styles/mySpaceLink");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-restricted-globals */ // $FlowFixMe
var PopupContent = (0, _component["default"])(function () {
  return import("./components/mySpacePopupContent");
});
var MySpaceModalSignIn = (0, _component["default"])(function () {
  return import("./components/mySpaceModalSignIn");
});
var MySpaceModalLogin = (0, _component["default"])(function () {
  return import("./components/mySpaceModalLogin");
});
var MySpaceModalForget = (0, _component["default"])(function () {
  return import("./components/mySpaceModalForget");
});
var MySpaceLink = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceLink(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceLink);
    _this = _callSuper(this, MySpaceLink, [props, context]);
    var _ref = _this.context && _this.context.config ? _this.context.config : {
        portal: {}
      },
      portal = _ref.portal;
    _this._visitor = {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      linkLabel: portal.siteLabel,
      isAuthenticated: null
    };
    _this.getTokens = _this.getTokens.bind(_this);
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.eraseStateFalse = _this.eraseStateFalse.bind(_this);
    _this.openPopup = _this.openPopup.bind(_this);
    _this.closePopup = _this.closePopup.bind(_this);
    _this.logOut = _this.logOut.bind(_this);
    _this.fillVisitor = _this.fillVisitor.bind(_this);
    _this.renderPopup = _this.renderPopup.bind(_this);
    _this.openSignInModal = _this.openSignInModal.bind(_this);
    _this.closeSignInModal = _this.closeSignInModal.bind(_this);
    _this.openLoginModal = _this.openLoginModal.bind(_this);
    _this.closeLoginModal = _this.closeLoginModal.bind(_this);
    _this.openForgetModal = _this.openForgetModal.bind(_this);
    _this.closeForgetModal = _this.closeForgetModal.bind(_this);
    _this.onChangeEmail = _this.onChangeEmail.bind(_this);
    _this.triggerPopup = /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        position: "relative",
        left: "110px",
        top: "20px"
      }
    });
    _this._visitorId = "";
    _this._portal = portal;
    _this.getTokens();
    var loginModalRedirectUrl = _this.context.initData.mySpaceNavigationLinks[_constants.HASH_MYSPACE["default"]];
    var loginModalOpen = !!(typeof location !== "undefined" && typeof _constants.HASH_MYSPACE[location.hash] !== "undefined");
    if (loginModalOpen) {
      loginModalRedirectUrl = _this.context.initData.mySpaceNavigationLinks[_constants.HASH_MYSPACE[location.hash]];
    }
    _this.state = {
      open: null,
      signUpModalOpen: false,
      loginModalOpen: loginModalOpen,
      forgetModalOpen: false,
      loginModalRedirectUrl: loginModalRedirectUrl,
      email: ""
    };
    return _this;
  }

  // Recuperation des infos de connexion dans le cookie
  (0, _inherits2["default"])(MySpaceLink, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceLink, [{
    key: "getTokens",
    value: function getTokens() {
      var cookies = this.props.cookies;
      this._token = cookies.get("ve-token-sso");
      this._visitorId = cookies.get("visitor");
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "eraseStateFalse",
    value: function eraseStateFalse() {
      if (this.state.open !== null) {
        this.setState({
          open: null
        });
      }
    }
  }, {
    key: "openSignInModal",
    value: function openSignInModal() {
      this.setState({
        signUpModalOpen: true,
        loginModalOpen: false,
        forgetModalOpen: false
      });
      this.closePopup();
    }
  }, {
    key: "closeSignInModal",
    value: function closeSignInModal() {
      this.setState({
        signUpModalOpen: false
      });
    }
  }, {
    key: "openLoginModal",
    value: function openLoginModal() {
      var destination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var visitor = this.props.visitor;
      var loginModalRedirectUrl = this.state.loginModalRedirectUrl;
      if (destination && destination.length > 0) {
        loginModalRedirectUrl = destination;
      }
      if (!visitor.isAuthenticated) {
        this.setState({
          loginModalOpen: true,
          signUpModalOpen: false,
          forgetModalOpen: false,
          loginModalRedirectUrl: loginModalRedirectUrl
        });
        this.closePopup();
      }
    }
  }, {
    key: "closeLoginModal",
    value: function closeLoginModal() {
      this.setState({
        loginModalOpen: false
      });
    }
  }, {
    key: "openForgetModal",
    value: function openForgetModal() {
      this.setState({
        forgetModalOpen: true,
        loginModalOpen: false,
        signUpModalOpen: false
      });
      this.closePopup();
    }
  }, {
    key: "closeForgetModal",
    value: function closeForgetModal() {
      this.setState({
        forgetModalOpen: false
      });
    }
  }, {
    key: "onChangeEmail",
    value: function onChangeEmail(event) {
      var email = event.currentTarget.value.trim();
      var isValidEmail = typeof (0, _fieldValidators.email)(email) === "undefined";
      if (isValidEmail) {
        this.setState({
          email: email
        });
      }
    }

    // Script de deconnexion de myspace suite a une requete de deconnection via redux
  }, {
    key: "logOut",
    value: function logOut() {
      this._visitor = {
        id: 0,
        email: "",
        firstName: "",
        lastName: "",
        linkLabel: "",
        open: false,
        isAuthenticated: null
      };
      // Si on est sur une page MySpace.
      if (document.location.href.lastIndexOf("/myspace/secure/") > -1) {
        // On redirige vers la home.
        document.location.href = "".concat(window.location.protocol, "//").concat(_constants.SUBDOMAINS[this._portal.subDomain], ".").concat(this._portal.baseUrl);
      } else {
        // Sinon on rafraichi la page.
        window.location.reload();
      }
    }

    /**
     * récupération des infos du visiteurs
     */
  }, {
    key: "fillVisitor",
    value: function fillVisitor() {
      this._visitor = this.props.visitor;
      this._visitor.id = this._visitorId;
      var portal = this.context.config.portal;
      // Creation du lien myspace
      this._visitor.linkLabel = portal.siteLabel;
      this._visitor.linkLabel += !this._visitor.firstName || !this._visitor.lastName ? " | ".concat(this._visitor.email) : " | ".concat(this._visitor.firstName, " ").concat(this._visitor.lastName);
      // Pour dire vers qui pointera la fleche de la popup du menu
      this.triggerPopup = /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          position: "relative",
          left: "".concat((110 + this._visitor.linkLabel.length).toString(), "px"),
          top: "20px"
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._token && this.props.visitor && !this.props.visitor.isLoading) {
        var site = this.context.config.portal.site.toLowerCase();
        this.props.getInfos(this._token, site);
      }
      if (!this.props.modal && this.state.open === false) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          open: null
        });
      }
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      var _this$state = this.state,
        signUpModalOpen = _this$state.signUpModalOpen,
        loginModalOpen = _this$state.loginModalOpen,
        forgetModalOpen = _this$state.forgetModalOpen,
        loginModalRedirectUrl = _this$state.loginModalRedirectUrl,
        email = _this$state.email;
      var _this$props = this.props,
        asIcon = _this$props.asIcon,
        mobileDisplay = _this$props.mobileDisplay;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_popup["default"], {
        open: this.state.open,
        onOpen: this.openPopup,
        onClose: this.closePopup,
        trigger: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !asIcon && /*#__PURE__*/_react["default"].createElement(_mySpaceLink.WrapperMyspaceLink, {
          onClick: this.openLoginModal,
          onMouseEnter: this.openPopup,
          "data-cy": "wrapperMyspaceLink"
        }, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceLinkContent, {
          "data-cy": "myspaceLink"
        }, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceLinkSpan, null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceSpanIconStartWhite, null, " *"), /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceSpanMy, null, _labels.MY), this._visitor.linkLabel, " \xA0"))), asIcon && /*#__PURE__*/_react["default"].createElement(_mySpaceLink.AccountLink, {
          onClick: this.openPopup
        })),
        contentstyle: !mobileDisplay ? {
          border: "#dadbdf solid 1px",
          width: "auto",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          fontFamily: "Arial,sans-serif",
          minWidth: "auto",
          padding: "0"
        } : {
          border: "none",
          fontFamily: "Arial,sans-serif",
          minWidth: "100%",
          minHeight: "100%",
          transform: "none",
          position: "fixed"
        }
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, mobileDisplay && /*#__PURE__*/_react["default"].createElement(_mySpaceLink.PopupContainer, {
        "data-cy": "myspace-popup-mobile-display"
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.AccountCloseContainer, null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.AccountClose, {
        onClick: this.closePopup
      })), /*#__PURE__*/_react["default"].createElement(_mySpaceLink.AccountLinkContent, null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.AccountSpanMy, null, _labels.MY), this._portal.siteLabel, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.UserInfo, null, !this._visitor.firstName || !this._visitor.lastName ? "".concat(this._visitor.email) : "".concat(this._visitor.firstName, " ").concat(this._visitor.lastName)))), /*#__PURE__*/_react["default"].createElement(PopupContent, {
        logOut: this.props.logout,
        closePopup: this.closePopup,
        openSignInModal: this.openSignInModal,
        openLoginModal: this.openLoginModal,
        isAuthenticated: this._visitor.isAuthenticated
      }), this._visitor.isAuthenticated === null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)), !mobileDisplay && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(PopupContent, {
        logOut: this.props.logout,
        closePopup: this.closePopup,
        openSignInModal: this.openSignInModal,
        openLoginModal: this.openLoginModal,
        isAuthenticated: this._visitor.isAuthenticated,
        "data-cy": "myspace-popup-desktop-display"
      }), this._visitor.isAuthenticated === null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)))), signUpModalOpen && /*#__PURE__*/_react["default"].createElement(MySpaceModalSignIn, {
        open: signUpModalOpen,
        handleClose: this.closeSignInModal,
        redirectUrl: loginModalRedirectUrl
      }), loginModalOpen && /*#__PURE__*/_react["default"].createElement(MySpaceModalLogin, {
        onClose: this.closeLoginModal,
        onForget: this.openForgetModal,
        onSignUp: this.openSignInModal,
        open: loginModalOpen,
        redirectUrl: loginModalRedirectUrl,
        onChangeEmail: this.onChangeEmail,
        email: email,
        signUpActive: true
      }), forgetModalOpen && /*#__PURE__*/_react["default"].createElement(MySpaceModalForget, {
        onClose: this.closeForgetModal,
        open: forgetModalOpen,
        onReturn: this.openLoginModal,
        onChangeEmail: this.onChangeEmail,
        email: email
      }));
    }
  }, {
    key: "render",
    value: function render() {
      if (this._visitor.isAuthenticated === null && this.props.visitor && this.props.visitor.isAuthenticated) {
        this.fillVisitor();
      } else if (this.props.visitor && this.props.visitor.logoutSuccess) {
        this.logOut();
      }
      var selectedTheme = "";
      var defaultTheme = {
        color: "#fff",
        colorMy: "#1094e9",
        "float": "right",
        fontWeight: "bold",
        displayMobile: "none"
      };
      if (typeof this.props.theme !== "undefined") {
        selectedTheme = this.props.theme;
      } else {
        selectedTheme = defaultTheme;
      }
      var popupContent = this.renderPopup();
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: selectedTheme
      }, popupContent));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactCookie.withCookies)(MySpaceLink);