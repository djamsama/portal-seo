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
var _dompurify = _interopRequireDefault(require("dompurify"));
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _reactIntl = require("react-intl");
var _semanticUiReact = require("semantic-ui-react");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../components/formattedHTMLMessage"));
var _constants = require("../../../../commons/constants");
var _mySpaceModalSignIn = _interopRequireDefault(require("../../../../components/mySpaceLink/components/mySpaceModalSignIn"));
var _mySpaceModalLogin = _interopRequireDefault(require("../../../../components/mySpaceLink/components/mySpaceModalLogin"));
var _mySpaceModalForget = _interopRequireDefault(require("../../../../components/mySpaceLink/components/mySpaceModalForget"));
var _contextComponent = require("../../../../components/contextComponent");
var _fieldValidators = require("../../../../components/fieldWithError/validators/fieldValidators");
var _quotationOverview = _interopRequireDefault(require("../../pages/mySpaceQuotationValidation/components/quotationOverview"));
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _mySpaceDocumentViewer = require("./styles/mySpaceDocumentViewer");
var _myspaceQuotation = require("../myspaceQuotations/components/quotation/styles/myspaceQuotation");
var _modalToModifyRefusedQuoteContainer = _interopRequireDefault(require("../../containers/modalToModifyRefusedQuoteContainer"));
var _rfqRecap = _interopRequireDefault(require("../../pages/mySpaceRFQDetail/components/rfqRecap"));
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function sanitizeValues(values) {
  var sanitizedValues = {};

  // eslint-disable-next-line no-restricted-syntax
  for (var _i = 0, _Object$keys = Object.keys(values); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var rawValue = values[key];

    // Si la valeur est une chaîne qui contient des éléments HTML potentiellement dangereux,
    // nous utilisons DOMPurify pour la nettoyer et React pour l'intégrer.
    if (typeof rawValue === "string" && rawValue.includes("<")) {
      var cleanHTML = _dompurify["default"].sanitize(rawValue);
      sanitizedValues[key] = /*#__PURE__*/_react["default"].createElement("span", {
        dangerouslySetInnerHTML: {
          __html: cleanHTML
        }
      });
    } else {
      sanitizedValues[key] = rawValue;
    }
  }
  return sanitizedValues;
}
var statutQuotation = {
  OPENED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_request_quotation_sent_date",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: false,
    validated: false,
    purchase: true
  },
  SENT: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_request_quotation_sent_date",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: false,
    validated: false,
    purchase: true
  },
  ACCEPTED: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_requestDetail_quoteAccepted",
    iconStatus: "check circle",
    colorStatus: "#45b938",
    quotationDone: true,
    validated: true,
    purchase: false
  },
  BANK_CARD_ORDER_REFUSED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_leadDetail_card_order_refused",
    iconStatus: "times circle",
    colorStatus: "#c53535",
    quotationDone: true,
    validated: false,
    purchase: true
  },
  BANK_TRANSFER_ORDER_REFUSED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_leadDetail_transfer_order_refused",
    iconStatus: "times circle",
    colorStatus: "#c53535",
    quotationDone: true,
    validated: false,
    purchase: true
  },
  BANK_CARD_ORDER_PENDING: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_card_order_pending",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: true,
    validated: false,
    purchase: false
  },
  BANK_TRANSFER_ORDER_PENDING: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_transfer_order_pending",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: true,
    validated: false,
    purchase: false
  },
  BANK_CARD_ORDER_ACCEPTED: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_card_order_accepted",
    iconStatus: "check circle",
    colorStatus: "#45b938",
    quotationDone: true,
    validated: true,
    purchase: false
  },
  BANK_TRANSFER_ORDER_ACCEPTED: {
    components: _myspaceQuotation.DateStatusCheckedDiv,
    i18nStatusKey: "foj_myspace_leadDetail_transfer_order_accepted",
    iconStatus: "check circle",
    colorStatus: "#45b938",
    quotationDone: true,
    validated: true,
    purchase: false
  },
  TO_MODIFY: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_lead_quoteStatus_modifcation",
    iconStatus: "clock outline",
    colorStatus: "#fb0",
    quotationDone: false,
    validated: false,
    purchase: true
  },
  REFUSED: {
    components: _myspaceQuotation.DateStatusDiv,
    i18nStatusKey: "foj_myspace_requestDetail_quoteRefused",
    iconStatus: "times circle",
    colorStatus: "#c53535",
    quotationDone: true,
    validated: false,
    purchase: true
  }
};
var MySpaceDocumentViewer = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceDocumentViewer(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceDocumentViewer);
    _this = _callSuper(this, MySpaceDocumentViewer, [props, state]);
    _this.state = {
      documentUrl: "",
      type: "",
      error: "",
      accountError: "",
      attachment: "",
      email: "",
      signUpModalOpen: false,
      loginModalOpen: false,
      forgetModalOpen: false,
      openModalToModifyRefusedQuote: false
    };
    _this.close = _this.close.bind(_this);
    _this.shop = _this.shop.bind(_this);
    _this.openSignInModal = _this.openSignInModal.bind(_this);
    _this.closeSignInModal = _this.closeSignInModal.bind(_this);
    _this.openLoginModal = _this.openLoginModal.bind(_this);
    _this.closeLoginModal = _this.closeLoginModal.bind(_this);
    _this.openForgetModal = _this.openForgetModal.bind(_this);
    _this.closeForgetModal = _this.closeForgetModal.bind(_this);
    _this.onChangeEmail = _this.onChangeEmail.bind(_this);
    _this.getTunnelUrl = _this.getTunnelUrl.bind(_this);
    _this.openModalToModifyRefusedQuote = _this.openModalToModifyRefusedQuote.bind(_this);
    _this.closeModalToModifyRefusedQuote = _this.closeModalToModifyRefusedQuote.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MySpaceDocumentViewer, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceDocumentViewer, [{
    key: "close",
    value: function close() {
      var _this$props = this.props,
        onClose = _this$props.onClose,
        googleAnalytics = _this$props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.CLOSE_QUOTE_VIEWER
      });
      onClose();
    }

    /**
     * Entrée dans le tunnel.
     * Pour les acheteurs logués : redirection vers la première étape du tunnel.
     * Pour les acheteurs ayant un Myspace mais non logués : on affiche la popin de connexion sans le texte et le lien “Première visite ? inscrivez vous”. Une fois identifié, l’acheteur est redirigé vers la première étape du tunnel avec les informations en notre possession déjà remplie.
     * Pour les acheteurs n’ayant pas de Myspace  : on affiche la popin d’inscription. Une fois le formulaire d’inscription validé, l’acheteur est redirigé vers la première étape du tunnel avec les informations en notre possession déjà remplie.
     */
  }, {
    key: "shop",
    value: (function () {
      var _shop = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
        var googleAnalytics;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              googleAnalytics = this.props.googleAnalytics;
              googleAnalytics.event({
                category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
                action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
                label: _constants.GOOGLE_ANALYTICS_EVENTS.SEND_ORDER
              });

              /** const { hasMySpaceAccount, visitorInfos } = this.props;
              if (visitorInfos.isAuthenticated) { */
              // Redirection vers la première étape du tunnel
              document.location.href = this.getTunnelUrl();
              return _context.a(2, false);
          }
        }, _callee, this);
      }));
      function shop() {
        return _shop.apply(this, arguments);
      }
      return shop;
    }()
    /**
     * Ouverture de la popin d'inscription.
     */
    )
  }, {
    key: "openSignInModal",
    value: function openSignInModal() {
      this.setState({
        signUpModalOpen: true,
        loginModalOpen: false,
        forgetModalOpen: false
      });
    }
  }, {
    key: "openModalToModifyRefusedQuote",
    value: function openModalToModifyRefusedQuote() {
      var googleAnalytics = this.props.googleAnalytics;
      googleAnalytics.event({
        category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
        action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
        label: _constants.GOOGLE_ANALYTICS_EVENTS.SEND_CHANGE
      });
      this.setState({
        openModalToModifyRefusedQuote: true
      });
    }
  }, {
    key: "closeModalToModifyRefusedQuote",
    value: function closeModalToModifyRefusedQuote() {
      this.setState({
        openModalToModifyRefusedQuote: false
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
     * Construction et récupération de l'URL de l'étape 1 du tunnel.
     */
  }, {
    key: "getTunnelUrl",
    value: function getTunnelUrl() {
      var _this$props2 = this.props,
        leadContext = _this$props2.leadContext,
        quotation = _this$props2.quotation;
      var globalLinksHome = this.context.initData.globalLinksHome;
      var baseUrl = globalLinksHome.substr(-1) !== "/" ? "".concat(globalLinksHome, "/") : globalLinksHome;
      return "".concat(baseUrl, "myspace/secure/").concat(leadContext, "-quotation/validation/").concat(quotation.id, "/step1.html");
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props3 = this.props,
        open = _this$props3.open,
        googleAnalytics = _this$props3.googleAnalytics;
      var _this$state = this.state,
        signUpModalOpen = _this$state.signUpModalOpen,
        loginModalOpen = _this$state.loginModalOpen,
        forgetModalOpen = _this$state.forgetModalOpen,
        openModalToModifyRefusedQuote = _this$state.openModalToModifyRefusedQuote;
      var opened = open && !signUpModalOpen && !loginModalOpen && !forgetModalOpen && !openModalToModifyRefusedQuote;
      if (!opened) {
        var nextOpen = nextProps.open;
        var nextSignUpModalOpen = nextState.signUpModalOpen,
          nextLoginModalOpen = nextState.loginModalOpen,
          nextForgetModalOpen = nextState.forgetModalOpen,
          nextOpenModalToModifyRefusedQuote = nextState.openModalToModifyRefusedQuote;
        var nextOpened = nextOpen && !nextSignUpModalOpen && !nextLoginModalOpen && !nextForgetModalOpen && !nextOpenModalToModifyRefusedQuote;
        if (nextOpened) {
          googleAnalytics.event({
            category: _constants.GOOGLE_ANALYTICS_EVENTS.REQUEST_DETAIL_ACCOUNT,
            action: _constants.GOOGLE_ANALYTICS_EVENTS.QUOTE_VIEWER,
            label: _constants.GOOGLE_ANALYTICS_EVENTS.DISPLAY_QUOTE_VIEWER
          });
        }
      }
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        intl = _this$props4.intl,
        open = _this$props4.open,
        quotation = _this$props4.quotation,
        lead = _this$props4.lead,
        leadContext = _this$props4.leadContext,
        attachmentContext = _this$props4.attachmentContext;
      var currentQuotation = quotation.combinedStatus ? statutQuotation[quotation.combinedStatus] : statutQuotation.SENT;
      var statusDate = quotation.statusDateFormatted ? quotation.statusDateFormatted : quotation.sentDate;
      var param = quotation.status === "TO_MODIFY" ? {
        "0": statusDate
      } : {};
      var status = currentQuotation.i18nStatusKey ? /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: currentQuotation.i18nStatusKey,
        values: param
      }) : "";
      var quotationReceivedOn = intl.formatMessage({
        id: "foj_myspace_request_quotation_receipt_date"
      }, {
        "0": quotation.attachmentDto.dateFormatted
      });
      var _this$state2 = this.state,
        signUpModalOpen = _this$state2.signUpModalOpen,
        loginModalOpen = _this$state2.loginModalOpen,
        forgetModalOpen = _this$state2.forgetModalOpen,
        email = _this$state2.email,
        openModalToModifyRefusedQuote = _this$state2.openModalToModifyRefusedQuote;
      var opened = open && !signUpModalOpen && !loginModalOpen && !forgetModalOpen && !openModalToModifyRefusedQuote;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TransitionablePortal, {
        closeOnDocumentClick: false,
        open: opened,
        transition: {
          animation: "fade down",
          duration: 500
        }
      }, /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.StyledModal, {
        open: opened,
        onClose: this.close,
        closeIcon: true,
        closeOnDimmerClick: false
      }, /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.ModalMySpaceRow, null, /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.ModalMySpaceQuotationViewer, null, /*#__PURE__*/_react["default"].createElement(_quotationOverview["default"], {
        validated: currentQuotation.validated,
        withTitle: false,
        open: open,
        fileName: quotation.attachmentDto.name,
        attachmentContext: attachmentContext,
        quotationSigningDate: quotation.attachmentDto.dateFormatted
      })), /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.ModalMySpaceQuotationActions, null, /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.QuoteNameDiv, {
        title: quotation.attachmentDto.name
      }, quotation.attachmentDto.name), /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.DateDiv, null, /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.DateReceivedDiv, null, quotationReceivedOn), /*#__PURE__*/_react["default"].createElement(_myspaceQuotation.DateStatusDiv, {
        style: {
          color: currentQuotation.colorStatus
        }
      }, status)), leadContext === "request" && /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.ProductContainer, null, /*#__PURE__*/_react["default"].createElement("img", {
        alt: lead.elementTitle,
        src: lead.imageLink
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "spec"
      }, lead.elementTitle), /*#__PURE__*/_react["default"].createElement("div", {
        className: "model"
      }, lead.elementModel), /*#__PURE__*/_react["default"].createElement("div", {
        className: "logo"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: lead.companyLogoLink,
        alt: lead.companyName
      }))), leadContext === "rfq" && /*#__PURE__*/_react["default"].createElement(_rfqRecap["default"], {
        rfq: lead,
        title: false
      }), currentQuotation.purchase && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        contained: true,
        size: "large",
        startIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
          name: "shopping-cart"
        }),
        onClick: this.shop
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_lead_viewer_purchase"
      })), /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.InfoText, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_lead_viewer_reinsurance"
      })), /*#__PURE__*/_react["default"].createElement(_mySpaceDocumentViewer.BadQuoteLink, {
        onClick: this.openModalToModifyRefusedQuote
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_lead_viewer_refused"
      }))))))), /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn["default"], {
        open: this.state.signUpModalOpen,
        handleClose: this.closeSignInModal,
        redirectUrl: this.getTunnelUrl()
      }), /*#__PURE__*/_react["default"].createElement(_mySpaceModalLogin["default"], {
        signUpActive: false,
        onClose: this.closeLoginModal,
        onForget: this.openForgetModal,
        onSignUp: this.openSignInModal,
        open: loginModalOpen,
        redirectUrl: this.getTunnelUrl(),
        onChangeEmail: this.onChangeEmail,
        email: email
      }), /*#__PURE__*/_react["default"].createElement(_mySpaceModalForget["default"], {
        onClose: this.closeForgetModal,
        onReturn: this.openLoginModal,
        onChangeEmail: this.onChangeEmail,
        open: forgetModalOpen,
        email: email
      }), /*#__PURE__*/_react["default"].createElement(_modalToModifyRefusedQuoteContainer["default"], {
        leadContext: leadContext,
        open: openModalToModifyRefusedQuote,
        onClose: this.closeModalToModifyRefusedQuote,
        quoteId: quotation.id
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(MySpaceDocumentViewer));