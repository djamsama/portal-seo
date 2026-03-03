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
var _semanticUiReact = require("semantic-ui-react");
var _formattedHTMLMessage = _interopRequireDefault(require("../../formattedHTMLMessage"));
var _fieldValidators = require("../../fieldWithError/validators/fieldValidators");
var _contextComponent = require("../../contextComponent");
var _mySpaceModalSignIn = _interopRequireDefault(require("../../mySpaceLink/components/mySpaceModalSignIn"));
var _mySpaceModalLogin = _interopRequireDefault(require("../../mySpaceLink/components/mySpaceModalLogin"));
var _mySpaceModalForget = _interopRequireDefault(require("../../mySpaceLink/components/mySpaceModalForget"));
var _bookmarkLink = require("./styles/bookmarkLink");
var _bookmarkActions = require("./actions/bookmarkActions");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var BookmarkLink = /*#__PURE__*/function (_ContextComponent) {
  function BookmarkLink(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, BookmarkLink);
    _this = _callSuper(this, BookmarkLink, [props, state]);
    _this.state = {
      email: "",
      signUpModalOpen: false,
      loginModalOpen: false,
      forgetModalOpen: false,
      visitorAuthenticated: false
    };
    _this.baseUrl = _this.context.config.portal.baseUrl;
    _this.locale = _this.context.config.portal.locale;
    _this.toggleBookmark = _this.toggleBookmark.bind(_this);
    _this.openSignInModal = _this.openSignInModal.bind(_this);
    _this.closeSignInModal = _this.closeSignInModal.bind(_this);
    _this.openLoginModal = _this.openLoginModal.bind(_this);
    _this.closeLoginModal = _this.closeLoginModal.bind(_this);
    _this.openForgetModal = _this.openForgetModal.bind(_this);
    _this.closeForgetModal = _this.closeForgetModal.bind(_this);
    _this.onChangeEmail = _this.onChangeEmail.bind(_this);
    _this.addRemoveBookmark = _this.addRemoveBookmark.bind(_this);
    return _this;
  }

  /** Récupération de l'état pour les utilisateurs authentifiés uniquement. */
  (0, _inherits2["default"])(BookmarkLink, _ContextComponent);
  return (0, _createClass2["default"])(BookmarkLink, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        visitorInfos = _this$props.visitorInfos,
        isBookmarked = _this$props.isBookmarked,
        productId = _this$props.productId,
        type = _this$props.type;
      var bookmarkeType = type || _bookmarkActions.BOOKMARK_TYPE.PRODUCT;
      if (visitorInfos && visitorInfos.isAuthenticated && prevProps.visitorInfos && !prevProps.visitorInfos.isAuthenticated) {
        if (false) {
          isBookmarked(this.locale, this.baseUrl, productId, bookmarkeType);
        }
      }
    }

    /**
     * Gestion de l'adresse email.
     * @param {*} event L'évenement déclenché par l'utilisateur
     */
  }, {
    key: "onChangeEmail",
    value: function onChangeEmail(event) {
      var target = event.currentTarget;
      if (target instanceof HTMLInputElement) {
        var email = target.value.trim();
        var isValidEmail = (0, _fieldValidators.email)(email) === undefined;
        if (isValidEmail) {
          this.setState({
            email: email
          });
        }
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

    /**
     * Ajout (resp. suppression) du produit courant dans les favoris (dossier par défaut).
     * Pour les utilisateurs logués : l'état du produit est mis à jour directement.
     * Pour les utilisateurs ayant un Myspace mais non logués : on affiche la popin de connexion sans le texte et le lien “Première visite ? inscrivez vous”. Une fois identifié, l’utilisateur revient sur la page courante avec l'état de l'entité mis à jour.
     * Pour les utilisateurs n’ayant pas de Myspace  : on affiche la popin d’inscription. Une fois le formulaire d’inscription validé, l’utilisateur revient sur la page courante avec l'état de l'entité mis à jour.
     */
  }, {
    key: "toggleBookmark",
    value: (function () {
      var _toggleBookmark = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
        var visitorInfos;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              visitorInfos = this.props.visitorInfos;
              if (!visitorInfos.isAuthenticated) {
                _context.n = 1;
                break;
              }
              return _context.a(2, this.addRemoveBookmark());
            case 1:
              return _context.a(2, this.openLoginModal());
          }
        }, _callee, this);
      }));
      function toggleBookmark() {
        return _toggleBookmark.apply(this, arguments);
      }
      return toggleBookmark;
    }() /** Appel au service d'ajout / de suppression de bookmark. */)
  }, {
    key: "addRemoveBookmark",
    value: function addRemoveBookmark() {
      var _this$props2 = this.props,
        addToBookmarks = _this$props2.addToBookmarks,
        removeFromBookmarks = _this$props2.removeFromBookmarks,
        bookmarked = _this$props2.bookmarked,
        productId = _this$props2.productId,
        type = _this$props2.type;
      var bookmarkeType = type || _bookmarkActions.BOOKMARK_TYPE.PRODUCT;
      if (bookmarked) {
        // Suppression du produit des bookmarks
        removeFromBookmarks(this.locale, this.baseUrl, productId, bookmarkeType);
      } else {
        // Ajout du produit aux bookmarks
        addToBookmarks(this.locale, this.baseUrl, productId, bookmarkeType);
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        bookmarked = _this$props3.bookmarked,
        asIcon = _this$props3.asIcon,
        asComponent = _this$props3.asComponent,
        children = _this$props3.children;
      var _this$state = this.state,
        signUpModalOpen = _this$state.signUpModalOpen,
        loginModalOpen = _this$state.loginModalOpen,
        forgetModalOpen = _this$state.forgetModalOpen,
        email = _this$state.email;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, asComponent && /*#__PURE__*/_react["default"].createElement(_bookmarkLink.FavoriteLink, {
        onClick: function onClick(e) {
          e.stopPropagation(); // Stoppe la propagation pour éviter que <a> ne capte cet événement
          e.preventDefault(); // Empêche la navigation par lien pour cet élément
          _this2.toggleBookmark(); // Logique spécifique à cet élément
        },
        className: bookmarked ? "bookmarked" : ""
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children)), asIcon && /*#__PURE__*/_react["default"].createElement("a", {
        href: "#open"
      }, /*#__PURE__*/_react["default"].createElement(_bookmarkLink.Favorite, {
        onClick: this.toggleBookmark,
        className: bookmarked ? "bookmarkLink bookmarked" : "bookmarkLink"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "heart outline"
      }))), !asIcon && !asComponent && /*#__PURE__*/_react["default"].createElement(_bookmarkLink.FavoriteLink, {
        onClick: this.toggleBookmark,
        className: bookmarked ? "bookmarked" : "",
        "data-cy": "favoriteLink"
      }, bookmarked && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa-stack"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-heart fa-stack-1x bg"
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-heart fa-stack-1x"
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_bookmarks_product_remove"
      }, function (txt) {
        return txt;
      })), !bookmarked && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa-stack"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-heart fa-stack-1x"
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_bookmarks_product_add"
      }, function (txt) {
        return txt;
      }))), signUpModalOpen && /*#__PURE__*/_react["default"].createElement(_mySpaceModalSignIn["default"], {
        open: signUpModalOpen,
        handleClose: this.closeSignInModal,
        redirectUrl: "",
        submitCallback: this.addRemoveBookmark
      }), loginModalOpen && /*#__PURE__*/_react["default"].createElement(_mySpaceModalLogin["default"], {
        signUpActive: true,
        onClose: this.closeLoginModal,
        onForget: this.openForgetModal,
        onSignUp: this.openSignInModal,
        open: loginModalOpen,
        redirectUrl: "",
        submitCallback: this.addRemoveBookmark,
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
var _default = exports["default"] = BookmarkLink;